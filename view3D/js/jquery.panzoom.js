/**
 * @license jquery.panzoom.js v1.6.7
 * Updated: Thu Sep 05 2013
 * Add pan and zoom functionality to any element
 * Copyright (c) 2013 timmy willison
 * Released under the MIT license
 * https://github.com/timmywil/jquery.panzoom/blob/master/MIT-License.txt
 */

(function( global, factory ) {
	// Define the plugin using AMD if present
	// Skips commonjs as this is not meant for that environment
	if ( typeof define === 'function' && define.amd ) {
		define([ 'jquery' ], factory );
	} else {
		factory( global.jQuery );
	}
}( this, function( $ ) {
	'use strict';

	// Lift touch properties using fixHooks
	var touchHook = {
		props: [ 'touches', 'pageX', 'pageY' ],
		/**
		 * Support: Android
		 * Android sets pageX/Y to 0 for any touch event
		 * Attach first touch's pageX/pageY if not set correctly
		 */
		filter: function( event, originalEvent ) {
			var touch;
			if ( !originalEvent.pageX && originalEvent.touches && (touch = originalEvent.touches[0]) ) {
				event.pageX = touch.pageX;
				event.pageY = touch.pageY;
			}
			return event;
		}
	};
	$.each([ 'touchstart', 'touchmove', 'touchend' ], function( i, name ) {
		$.event.fixHooks[ name ] = touchHook;
	});

	var datakey = '__pz__';
	var slice = Array.prototype.slice;
	var rupper = /([A-Z])/g;
	var rsvg = /^http:[\w\.\/]+svg$/;
	var rinline = /^inline/;

	var floating = '(\\-?[\\d\\.e]+)';
	var commaSpace = '\\,?\\s*';
	var rmatrix = new RegExp(
		'^matrix\\(' +
		floating + commaSpace +
		floating + commaSpace +
		floating + commaSpace +
		floating + commaSpace +
		floating + commaSpace +
		floating + '\\)$'
	);

	/**
	 * Creates the options object for reset functions
	 * @param {Boolean|Object} opts See reset methods
	 * @returns {Object} Returns the newly-created options object
	 */
	function createResetOptions( opts ) {
		var options = { range: true, animate: true };
		if ( typeof opts === 'boolean' ) {
			options.animate = opts;
		} else {
			$.extend( options, opts );
		}
		return options;
	}

	/**
	 * Represent a transformation matrix with a 3x3 matrix for calculations
	 * Matrix functions adapted from Louis Remi's jQuery.transform (https://github.com/louisremi/jquery.transform.js)
	 * @param {Array|Number} a An array of six values representing a 2d transformation matrix
	 */
	function Matrix( a, b, c, d, e, f, g, h, i ) {
		if ( $.type(a) === 'array' ) {
			this.elements = [
				+a[0], +a[2], +a[4],
				+a[1], +a[3], +a[5],
				    0,     0,     1
			];
		} else {
			this.elements = [
				a, b, c,
				d, e, f,
				g || 0, h || 0, i || 1
			];
		}
	}

	Matrix.prototype = {
		/**
		 * Multiply a 3x3 matrix by a similar matrix or a vector
		 * @param {Matrix|Vector} matrix
		 * @return {Matrix|Vector} Returns a vector if multiplying by a vector
		 */
		x: function( matrix ) {
			var isVector = matrix instanceof Vector;

			var a = this.elements,
				b = matrix.elements;

			if ( isVector && b.length === 3 ) {
				// b is actually a vector
				return new Vector(
					a[0] * b[0] + a[1] * b[1] + a[2] * b[2],
					a[3] * b[0] + a[4] * b[1] + a[5] * b[2],
					a[6] * b[0] + a[7] * b[1] + a[8] * b[2]
				);
			} else if ( b.length === a.length ) {
				// b is a 3x3 matrix
				return new Matrix(
					a[0] * b[0] + a[1] * b[3] + a[2] * b[6],
					a[0] * b[1] + a[1] * b[4] + a[2] * b[7],
					a[0] * b[2] + a[1] * b[5] + a[2] * b[8],

					a[3] * b[0] + a[4] * b[3] + a[5] * b[6],
					a[3] * b[1] + a[4] * b[4] + a[5] * b[7],
					a[3] * b[2] + a[4] * b[5] + a[5] * b[8],

					a[6] * b[0] + a[7] * b[3] + a[8] * b[6],
					a[6] * b[1] + a[7] * b[4] + a[8] * b[7],
					a[6] * b[2] + a[7] * b[5] + a[8] * b[8]
				);
			}
			return false; // fail
		},
		/**
		 * Generates an inverse of the current matrix
		 * @returns {Matrix}
		 */
		inverse: function() {
			var d = 1 / this.determinant(),
				a = this.elements;
			return new Matrix(
				d * (  a[8] * a[4] - a[7] * a[5]),
				d * (-(a[8] * a[1] - a[7] * a[2])),
				d * (  a[5] * a[1] - a[4] * a[2]),

				d * (-(a[8] * a[3] - a[6] * a[5])),
				d * (  a[8] * a[0] - a[6] * a[2]),
				d * (-(a[5] * a[0] - a[3] * a[2])),

				d * (  a[7] * a[3] - a[6] * a[4]),
				d * (-(a[7] * a[0] - a[6] * a[1])),
				d * (  a[4] * a[0] - a[3] * a[1])
			);
		},
		/**
		 * Calculates the determinant of the current matrix
		 * @returns {Number}
		 */
		determinant: function() {
			var a = this.elements;
			return a[0] * (a[8] * a[4] - a[7] * a[5]) - a[3] * (a[8] * a[1] - a[7] * a[2]) + a[6] * (a[5] * a[1] - a[4] * a[2]);
		}
	};

	/**
	 * Create a vector containing three values
	 */
	function Vector( x, y, z ) {
		this.elements = [ x, y, z ];
	}

	/**
	 * Get the element at zero-indexed index i
	 * @param {Number} i
	 */
	Vector.prototype.e = Matrix.prototype.e = function( i ) {
		return this.elements[ i ];
	};

	/**
	 * Create a Panzoom object for a given element
	 * @constructor
	 * @param {Element} elem - Element to use pan and zoom
	 * @param {Object} [options] - An object literal containing options to override default options
	 *  (See Panzoom.defaults for ones not listed below)
	 * @param {jQuery} [options.$zoomIn] - zoom in buttons/links collection (you can also bind these yourself
	 *  e.g. $button.on('click', function( e ) { e.preventDefault(); $elem.panzooom('zoomIn'); }); )
	 * @param {jQuery} [options.$zoomOut] - zoom out buttons/links collection on which to bind zoomOut
	 * @param {jQuery} [options.$zoomRange] - zoom in/out with this range control
	 * @param {jQuery} [options.$reset] - Reset buttons/links collection on which to bind the reset method
	 * @param {Function} [options.on[Start|Change|Zoom|Pan|End|Reset] - Optional callbacks for panzoom events
	 */
	function Panzoom( elem, options ) {

		// Sanity checks
		if ( elem.nodeType !== 1 ) {
			$.error('Panzoom called on non-Element node');
		}
		if ( !$.contains(document, elem) ) {
			$.error('Panzoom element must be attached to the document');
		}

		// Don't remake
		var d = $.data( elem, datakey );
		if ( d ) {
			return d;
		}

		// Allow instantiation without `new` keyword
		if ( !(this instanceof Panzoom) ) {
			return new Panzoom( elem, options );
		}

		// Extend default with given object literal
		// Each instance gets its own options
		this.options = options = $.extend( {}, Panzoom.defaults, options );
		this.elem = elem;
		var $elem = this.$elem = $(elem);
		this.$doc = $(elem.ownerDocument || document);
		this.$parent = $elem.parent();

		// This is SVG if the namespace is SVG
		// However, while <svg> elements are SVG, we want to treat those like other elements
		this.isSVG = rsvg.test( elem.namespaceURI ) && elem.nodeName.toLowerCase() !== 'svg';

		this.panning = false;

		// Save the original transform value
		// Save the prefixed transform style key
		// Set the starting transform
		this._buildTransform();

		// Build the appropriately-prefixed transform style property name
		// De-camelcase
		// Transitioning the attribute for SVG doesn't apply
		if ( !this.isSVG ) {
			this._transform = $.cssProps.transform.replace( rupper, '-$1' ).toLowerCase();
		}

		// Build the transition value
		this._buildTransition();

		// Build containment dimensions
		this._buildContain();

		// Add zoom and reset buttons to `this`
		var $empty = $();
		var self = this;
		$.each([ '$zoomIn', '$zoomOut', '$zoomRange', '$reset' ], function( i, name ) {
			self[ name ] = options[ name ] || $empty;
		});

		this.enable();

		// Save the instance
		$.data( elem, datakey, this );
	}

	// Attach regex for possible use (immutable)
	Panzoom.rmatrix = rmatrix;

	Panzoom.defaults = {
		// Should always be non-empty
		// Used to bind jQuery events without collisions
		// A guid is not added here as different instantiations/versions of panzoom
		// on the same element is not supported, so don't do it.
		eventNamespace: '.panzoom',

		// Whether or not to transition the scale
		transition: true,

		// Default cursor style for the element
		cursor: 'move',

		// There may be some use cases for zooming without panning or vice versa
		disablePan: false,
		disableZoom: false,

		// The increment at which to zoom
		// adds/subtracts to the scale each time zoomIn/Out is called
		// increment: 0.3,
		increment: 0.1,//D.Martin 20170307

		// minScale: 0.4, //D.Martin 20170307 Aunque este en 0.3 se sobreescribe a 0.1
		minScale: 0.2,
		maxScale: 5,

		// Animation duration (ms)
		duration: 200,
		// CSS easing used for scale transition
		easing: 'ease-in-out',

		// Indicate that the element should be contained within it's parent when panning
		// Note: this does not affect zooming outside of the parent
		// Set this value to 'invert' to only allow panning outside of the parent element (basically the opposite of the normal use of contain)
		// 'invert' is useful for a large panzoom element where you don't want to show anything behind it
		contain: false
	};

	Panzoom.prototype = {
		constructor: Panzoom,

		/**
		 * @returns {Panzoom} Returns the instance
		 */
		instance: function() {
			return this;
		},

		/**
		 * Enable or re-enable the panzoom instance
		 */
		enable: function() {
			// Unbind first
			this._initStyle();
			this._bind();
			this.disabled = false;
		},

		/**
		 * Disable panzoom
		 */
		disable: function() {
			this.disabled = true;
			this._resetStyle();
			this._unbind();
		},

		/**
		 * @returns {Boolean} Returns whether the current panzoom instance is disabled
		 */
		isDisabled: function() {
			return this.disabled;
		},

		/**
		 * Destroy the panzoom instance
		 */
		destroy: function() {
			this.disable();
			$.removeData( this.elem, datakey );
		},

		/**
		 * Return the element to it's original transform matrix
		 * @param {Boolean} [options] If a boolean is passed, animate the reset (default: true). If an options object is passed, simply pass that along to setMatrix.
		 * @param {Boolean} [options.silent] Silence the reset event
		 */
		reset: function( options ) {
			options = createResetOptions( options );
			// Reset the transform to its original value
			var matrix = this.setMatrix( this._origTransform, options );
			if ( !options.silent ) {
				this._trigger( 'reset', matrix );
			}
		},

		/**
		 * Only resets zoom level
		 * @param {Boolean|Object} [options] Whether to animate the reset (default: true) or an object of options to pass to zoom()
		 */
		resetZoom: function( options ) {
			options = createResetOptions( options );
			var origMatrix = this.getMatrix( this._origTransform );
			options.dValue = origMatrix[ 3 ];
			this.zoom( origMatrix[0], options );
		},

		/**
		 * Only reset panning
		 * @param {Boolean|Object} [options] Whether to animate the reset (default: true) or an object of options to pass to pan()
		 */
		resetPan: function( options ) {
			var origMatrix = this.getMatrix( this._origTransform );
			this.pan( origMatrix[4], origMatrix[5], createResetOptions(options) );
		},

		/**
		 * Retrieving the transform is different for SVG (unless a style transform is already present)
		 * @param {String} [transform] Pass in an transform value (like 'scale(1.1)') to have it formatted into matrix format for use by Panzoom
		 * @returns {String} Returns the current transform value of the element
		 */
		getTransform: function( transform ) {
			var elem = this.elem;
			var method = this.isSVG ? 'attr' : 'style';
			if ( transform ) {
				// Set the passed in value
				$[ method ]( elem, 'transform', transform );
			} else {
				// Use style rather than computed
				// If currently transitioning, computed transform might be unchanged
				// Retrieve with attr for SVG
				transform = $[ method ]( elem, 'transform' );
			}

			// Convert any transforms set by the user to matrix format
			// by setting to computed
			if ( transform !== 'none' && !rmatrix.test(transform) && !this.isSVG ) {
				// Get computed
				transform = $.css( elem, 'transform' );
				// Set for next time
				$.style( elem, 'transform', transform );
			}

			return transform || 'none';
		},

		/**
		 * Retrieve the current transform matrix for $elem (or turn a transform into it's array values)
		 * @param {String} [transform] matrix-formatted transform value
		 * @returns {Array} Returns the current transform matrix split up into it's parts, or a default matrix
		 */
		getMatrix: function( transform ) {
			var matrix = rmatrix.exec( transform || this.getTransform() );
			if ( matrix ) {
				matrix.shift();
			}
			return matrix || [ 1, 0, 0, 1, 0, 0 ];
		},

		/**
		 * Given a matrix object, quickly set the current matrix of the element
		 * @param {Array|String} matrix
		 * @param {Boolean} [animate] Whether to animate the transform change
		 * @param {Object} [options]
		 * @param {Boolean|String} [options.animate] Whether to animate the transform change, or 'skip' indicating that it is unnecessary to set
		 * @param {Boolean} [options.contain] Override the global contain option
		 * @param {Boolean} [options.range] If true, $zoomRange's value will be updated.
		 * @param {Boolean} [options.silent] If true, the change event will not be triggered
		 * @returns {Array} Returns the newly-set matrix
		 */
		setMatrix: function( matrix, options ) {
			if ( this.disabled ) { return; }
			if ( !options ) { options = {}; }
			// Convert to array
			if ( typeof matrix === 'string' ) {
				matrix = this.getMatrix( matrix );
			}
			var dims, container, marginW, marginH, diffW, diffH;
			var scale = +matrix[0];
			var $parent = this.$parent;
			var elem = this.elem;
			var contain = typeof options.contain !== 'undefined' ? options.contain : this.options.contain;

			// Apply containment
			if ( contain ) {
				dims = this._checkDims();
				container = this.container;
				marginW = ((dims.width * scale) - container.width) / 2;
				marginH = ((dims.height * scale) - container.height) / 2;
				if ( contain === 'invert' ) {
					diffW = dims.width > container.width ? dims.width - container.width : 0;
					diffH = dims.height > container.height ? dims.height - container.height : 0;
					marginW += (container.width - dims.width) / 2;
					marginH += (container.height - dims.height) / 2;
					matrix[4] = Math.max( Math.min( matrix[4], marginW - dims.left ), -marginW - dims.left - diffW );
					matrix[5] = Math.max( Math.min( matrix[5], marginH - dims.top ), -marginH - dims.top - diffH + dims.heightBorder );
				} else {
					diffH = container.height > dims.height ? container.height - dims.height : 0;
					// If the element is not naturally centered, assume full margin right
					if ( $parent.css('textAlign') !== 'center' || !rinline.test($.css(elem, 'display')) ) {
						diffW = container.width > dims.width ? container.width - dims.width : 0;
						marginW = marginH = 0;
					} else {
						diffW = 0;
					}
					matrix[4] = Math.min(
						Math.max( matrix[4], marginW - dims.left ),
						-marginW - dims.left + diffW
					);
					matrix[5] = Math.min(
						Math.max( matrix[5], marginH - dims.top ),
						-marginH - dims.top + diffH
					);
				}
			}
			if ( options.animate !== 'skip' ) {
				// Set transition
				this.transition( !options.animate );
			}
			// Update range
			if ( options.range ) {
				this.$zoomRange.val( scale );
			}
			$[ this.isSVG ? 'attr' : 'style' ]( elem, 'transform', 'matrix(' + matrix.join(',') + ')' );
			if ( !options.silent ) {
				this._trigger( 'change', matrix );
			}

			return matrix;
		},

		/**
		 * @returns {Boolean} Returns whether the panzoom element is currently being dragged
		 */
		isPanning: function() {
			return this.panning;
		},

		/**
		 * Apply the current transition to the element, if allowed
		 * @param {Boolean} [off] Indicates that the transition should be turned off
		 */
		transition: function( off ) {
			var transition = off || !this.options.transition ? 'none' : this._transition;
			// Avoid reflows when zooming
			if ( $.style( this.elem, 'transition') !== transition ) {
				$.style( this.elem, 'transition', transition );
			}
		},

		/**
		 * Pan the element to the specified translation X and Y
		 * Note: this is not the same as setting jQuery#offset() or jQuery#position()
		 * @param {Number} x
		 * @param {Number} y
		 * @param {Object} [options] These options are passed along to setMatrix
		 * @param {Array} [options.matrix] The matrix being manipulated (if already known so it doesn't have to be retrieved again)
		 * @param {Boolean} [options.silent] Silence the pan event. Note that this will also silence the setMatrix change event.
		 * @param {Boolean} [options.relative] Make the x and y values relative to the existing matrix
		 */
		pan: function( x, y, options ) {
			if ( this.options.disablePan ) { return; }
			if ( !options ) { options = {}; }
			var matrix = options.matrix;
			if ( !matrix ) {
				matrix = this.getMatrix();
			}
			// Cast existing matrix values to numbers
			if ( options.relative ) {
				matrix[4] = +matrix[4] + x;
				matrix[5] = +matrix[5] + y;
			} else {
				matrix[4] = x;
				matrix[5] = y;
			}
			this.setMatrix( matrix, options );
			if ( !options.silent ) {
				this._trigger( 'pan', x, y );
			}
		},

		/**
		 * Zoom in/out the element using the scale properties of a transform matrix
		 * @param {Number|Boolean} [scale] The scale to which to zoom or a boolean indicating to transition a zoom out
		 * @param {Object} [opts] All global options can be overwritten by this options object. For example, override the default increment.
		 * @param {Boolean} [opts.noSetRange] Specify that the method should not set the $zoomRange value (as is the case when $zoomRange is calling zoom on change)
		 * @param {jQuery.Event|Object} [opts.focal] A focal point on the panzoom element on which to zoom.
		 *  If an object, set the clientX and clientY properties to the position relative to the parent
		 * @param {Boolean} [opts.animate] Whether to animate the zoom (defaults to true if scale is not a number, false otherwise)
		 * @param {Boolean} [opts.silent] Silence the zoom event
		 * @param {Array} [opts.matrix] Optionally pass the current matrix so it doesn't need to be retrieved
		 * @param {Number} [opts.dValue] Think of a transform matrix as four values a, b, c, d
		 *  where a/d are the horizontal/vertical scale values and b/c are the skew values
		 *  (5 and 6 of matrix array are the tx/ty transform values).
		 *  Normally, the scale is set to both the a and d values of the matrix.
		 *  This option allows you to specify a different d value for the zoom.
		 *  For instance, to flip vertically, you could set -1 as the dValue.
		 */
		zoom: function( scale, opts ) {
			// Shuffle arguments
			if ( typeof scale === 'object' ) {
				opts = scale;
				scale = null;
			} else if ( !opts ) {
				opts = {};
			}
			var options = $.extend( {}, this.options, opts );
			// Check if disabled
			if ( options.disableZoom ) { return; }
			var animate = false;
			var matrix = options.matrix || this.getMatrix();

			// Calculate zoom based on increment
			if ( typeof scale !== 'number' ) {
				scale = +matrix[0] + (options.increment * (scale ? -1 : 1));
				animate = true;
			}

			// Constrain scale
			if ( scale > options.maxScale ) {
				scale = options.maxScale;
			} else if ( scale < options.minScale ) {
				scale = options.minScale;
			}

			// Calculate focal point based on scale
			var focal = options.focal;
			if ( focal && !options.disablePan ) {
				// animate isn't necessary for focal point use cases
				animate = false;
				// Adapted from code by Florian GÃ¼nther
				// https://github.com/florianguenther/zui53
				// Adjusts the focal point for default transform-origin => 50% 50%
				var container = this.container;
				var clientX = focal.clientX - container.width / 2;
				var clientY = focal.clientY - container.height / 2;
				var clientV = new Vector( clientX, clientY, 1 );
				var surfaceM = new Matrix( matrix );
				var o = this.$parent.offset();
				var offsetM = new Matrix( 1, 0, o.left - this.$doc.scrollLeft(), 0, 1, o.top - this.$doc.scrollTop() );
				var surfaceV = surfaceM.inverse().x( offsetM.inverse().x(clientV) );
				var scaleBy = scale / matrix[0];
				surfaceM = surfaceM.x( new Matrix([ scaleBy, 0, 0, scaleBy, 0, 0 ]) );
				clientV = offsetM.x( surfaceM.x( surfaceV ) );
				matrix[4] = +matrix[4] + (clientX - clientV.e(0));
				matrix[5] = +matrix[5] + (clientY - clientV.e(1));
			}

			// Set the scale
			matrix[0] = scale;
			matrix[3] = typeof options.dValue === 'number' ? options.dValue : scale;

			// Calling zoom may still pan the element
			this.setMatrix( matrix, {
				animate: typeof options.animate === 'boolean' ? options.animate : animate,
				// Set the zoomRange value
				range: !options.noSetRange
			});

			// Trigger zoom event
			if ( !options.silent ) {
				this._trigger( 'zoom', scale, options );
			}
		},

		/**
		 * Get/set option on an existing instance
		 * @returns {Array|undefined} If getting, returns an array of all values
		 *   on each instance for a given key. If setting, continue chaining by returning undefined.
		 */
		option: function( key, value ) {
			var options;
			if ( !key ) {
				// Avoids returning direct reference
				return $.extend( {}, this.options );
			}

			if ( typeof key === 'string' ) {
				if ( arguments.length === 1 ) {
					return this.options[ key ];
				}
				options = {};
				options[ key ] = value;
			} else {
				options = key;
			}

			this._setOptions( options );
		},

		/**
		 * Internally sets options
		 * @param {Object} options - An object literal of options to set
		 */
		_setOptions: function( options ) {
			var self = this;
			$.each( options, function( key, value ) {
				switch( key ) {
					case 'disablePan':
						self._resetStyle();
						/* falls through */
					case 'disableZoom':
					case '$zoomIn':
					case '$zoomOut':
					case '$zoomRange':
					case '$reset':
					case 'onStart':
					case 'onChange':
					case 'onZoom':
					case 'onPan':
					case 'onEnd':
					case 'onReset':
					case 'eventNamespace':
						self._unbind();
				}
				self.options[ key ] = value;
				switch( key ) {
					case 'disablePan':
						self._initStyle();
						/* falls through */
					case 'disableZoom':
					case '$zoomIn':
					case '$zoomOut':
					case '$zoomRange':
					case '$reset':
					case 'onStart':
					case 'onChange':
					case 'onZoom':
					case 'onPan':
					case 'onEnd':
					case 'onReset':
					case 'eventNamespace':
						self._bind();
						break;
					case 'cursor':
						$.style( self.elem, 'cursor', value );
						break;
					case 'minScale':
						self.$zoomRange.attr( 'min', value );
						break;
					case 'maxScale':
						self.$zoomRange.attr( 'max', value );
						break;
					case 'startTransform':
						self._buildTransform();
						break;
					case 'duration':
					case 'easing':
						self._buildTransition();
						/* falls through */
					case 'transition':
						self.transition();
				}
			});
		},

		/**
		 * Initialize base styles for the element and its parent
		 */
		_initStyle: function() {
			// Set elem styles
			if ( !this.options.disablePan ) {
				this.$elem.css( 'cursor', this.options.cursor );
			}

			// Set parent to relative if set to static
			var $parent = this.$parent;
			// No need to add styles to the body
			if ( $parent.length && !$.nodeName($parent[0], 'body') ) {
				var parentStyles = {
					overflow: 'hidden'
				};
				if ( $parent.css('position') === 'static' ) {
					parentStyles.position = 'relative';
				}
				$parent.css( parentStyles );
			}
		},

		/**
		 * Undo any styles attached in this plugin
		 */
		_resetStyle: function() {
			this.$elem.css({
				'cursor': '',
				'transition': ''
			});
			this.$parent.css({
				'overflow': '',
				'position': ''
			});
		},

		/**
		 * Binds all necessary events
		 */
		_bind: function() {
			var self = this;
			var options = this.options;
			var ns = options.eventNamespace;
			var str_start = 'touchstart' + ns + ' mousedown' + ns;
			var str_click = 'touchend' + ns + ' click' + ns;
			var events = {};
			var $reset = this.$reset;

			// Bind panzoom events from options
			$.each([ 'Start', 'Change', 'Zoom', 'Pan', 'End', 'Reset' ], function() {
				var m = options[ 'on' + this ];
				if ( $.isFunction(m) ) {
					events[ 'panzoom' + this.toLowerCase() + ns ] = m;
				}
			});

			// Bind $elem drag and click/touchdown events
			// Bind touchstart if either panning or zooming is enabled
			if ( !options.disablePan || !options.disableZoom ) {
				events[ str_start ] = function( e ) {
					var touches;
					if ( e.type === 'mousedown' ?
						// Ignore right click when handling a click
						!options.disablePan && e.which === 1 :
						// Touch
						(touches = e.touches) && ((touches.length === 1 && !options.disablePan) || touches.length === 2) ) {

						e.preventDefault();
						e.stopPropagation();
						self._startMove( e, touches );
					}
				};
			}
			this.$elem.on( events );

			// Bind reset
			if ( $reset.length ) {
				$reset.on( str_click, function( e ) { e.preventDefault(); self.reset(); });
			}

			// No bindings if zooming is disabled
			if ( options.disableZoom ) {
				return;
			}

			var $zoomIn = this.$zoomIn;
			var $zoomOut = this.$zoomOut;
			var $zoomRange = this.$zoomRange;

			// Bind zoom in/out
			// Don't bind one without the other
			if ( $zoomIn.length && $zoomOut.length ) {
				// preventDefault cancels future mouse events on touch events
				$zoomIn.on( str_click, function( e ) { e.preventDefault(); self.zoom(); });
				$zoomOut.on( str_click, function( e ) { e.preventDefault(); self.zoom( true ); });
			}

			if ( $zoomRange.length ) {
				// Set default attributes
				$zoomRange.attr({
					min: options.minScale,
					max: options.maxScale,
					step: 0.05
				}).prop({
					value: this.getMatrix()[0]
				});
				events = {};
				// Cannot prevent default action here, just use mousedown event
				events.mousedown = function() {
					self.transition( true );
				};
				events[ 'change' + ns ] = function() {
					self.zoom( +this.value, { noSetRange: true } );
				};
				$zoomRange.on( events );
			}
		},

		/**
		 * Unbind all events
		 */
		_unbind: function() {
			this.$elem
				.add( this.$zoomIn )
				.add( this.$zoomOut )
				.add( this.$reset )
				.off( this.options.eventNamespace );
		},

		/**
		 * Builds the original transform value
		 */
		_buildTransform: function() {
			// Save the original transform
			// Retrieving this also adds the correct prefixed style name
			// to jQuery's internal $.cssProps
			return this._origTransform = this.getTransform( this.options.startTransform );
		},

		/**
		 * Set transition property for later use when zooming
		 * If SVG, create necessary animations elements for translations and scaling
		 */
		_buildTransition: function() {
			var options = this.options;
			if ( this._transform ) {
				this._transition = this._transform + ' ' + options.duration + 'ms ' + options.easing;
			}
		},

		/**
		 * Builds the restricing dimensions from the containment element
		 * Also used with focal points
		 */
		_buildContain: function() {
			// Reset container properties
			var $parent = this.$parent;
			this.container = {
				width: $parent.width(),
				height: $parent.height()
			};
			var elem = this.elem;
			var $elem = this.$elem;
			var dims = this.dimensions = this.isSVG ? {
				left: elem.getAttribute('x') || 0,
				top: elem.getAttribute('y') || 0,
				width: elem.getAttribute('width') || $elem.outerWidth(),
				height: elem.getAttribute('height') || $elem.outerHeight()
			} : {
				left: $.css( elem, 'left', true ) || 0,
				top: $.css( elem, 'top', true ) || 0,
				width: $elem.outerWidth(),
				height: $elem.outerHeight()
			};
			dims.widthBorder = ($.css( elem, 'borderLeftWidth', true ) + $.css( elem, 'borderRightWidth', true )) || 0;
			dims.heightBorder = ($.css( elem, 'borderTopWidth', true ) + $.css( elem, 'borderBottomWidth', true )) || 0;
		},

		/**
		 * Checks dimensions to make sure they don't need to be re-calculated
		 */
		_checkDims: function() {
			var dims = this.dimensions;
			// Rebuild if width or height is still 0
			if ( dims.width === dims.widthBorder || dims.height === dims.heightBorder ) {
				this._buildContain();
			}
			return this.dimensions;
		},

		/**
		 * Calculates the distance between two touch points
		 * Remember pythagorean?
		 * @param {Array} touches
		 * @returns {Number} Returns the distance
		 */
		_getDistance: function( touches ) {
			var touch1 = touches[0];
			var touch2 = touches[1];
			return Math.sqrt( Math.pow(Math.abs( touch2.clientX - touch1.clientX ), 2) + Math.pow(Math.abs( touch2.clientY - touch1.clientY ), 2) );
		},

		/**
		 * Constructs an approximated point in the middle of two touch points
		 * @returns {Object} Returns an object containing pageX and pageY
		 */
		_getMiddle: function( touches ) {
			var touch1 = touches[0];
			var touch2 = touches[1];
			return {
				clientX: ((touch2.clientX - touch1.clientX) / 2) + touch1.clientX,
				clientY: ((touch2.clientY - touch1.clientY) / 2) + touch1.clientY
			};
		},

		/**
		 * Trigger a panzoom event on our element
		 * The event is passed the Panzoom instance
		 * @param {String} name
		 * @param {Mixed} arg1[, arg2, arg3, ...] Arguments to append to the trigger
		 */
		_trigger: function ( name ) {
			this.$elem.triggerHandler( 'panzoom' + name, [this].concat(slice.call( arguments, 1 )) );
		},

		/**
		 * Starts the pan
		 * This is bound to mouse/touchmove on the element
		 * @param {jQuery.Event} event An event with pageX, pageY, and possibly the touches list
		 * @param {TouchList} [touches] The touches list if present
		 */
		_startMove: function( event, touches ) {
			var move,
				startDistance, startScale, startMiddle,
				startPageX, startPageY;
			var self = this;
			var options = this.options;
			var isTouch = event.type === 'touchstart';
			var ns = options.eventNamespace;
			var moveEvent = (isTouch ? 'touchmove' : 'mousemove') + ns;
			var endEvent = (isTouch ? 'touchend' : 'mouseup') + ns;
			var matrix = this.getMatrix();
			var original = matrix.slice( 0 );
			var origPageX = +original[4];
			var origPageY = +original[5];
			var panOptions = { matrix: matrix, animate: 'skip' };

			// Remove any transitions happening
			this.transition( true );

			// Indicate that we are currently panning
			this.panning = true;

			// Trigger start event
			this._trigger( 'start', event, touches );

			if ( touches && touches.length === 2 ) {
				startDistance = this._getDistance( touches );
				startScale = +matrix[0];
				startMiddle = this._getMiddle( touches );
				move = function( e ) {
					e.preventDefault();

					// Calculate move on middle point
					var middle = self._getMiddle( touches = e.touches );
					var diff = self._getDistance( touches ) - startDistance;

					// Set zoom
					self.zoom( diff * (options.increment / 100) + startScale, { focal: middle, matrix: matrix } );

					// Set pan
					self.pan(
						+matrix[4] + middle.clientX - startMiddle.clientX,
						+matrix[5] + middle.clientY - startMiddle.clientY,
						panOptions
					);
					startMiddle = middle;
				};
			} else {
				startPageX = event.pageX;
				startPageY = event.pageY;

				/**
				 * Mousemove/touchmove function to pan the element
				 * @param {Object} e Event object
				 */
				move = function( e ) {
					e.preventDefault();
					self.pan(
						origPageX + e.pageX - startPageX,
						origPageY + e.pageY - startPageY,
						panOptions
					);
				};
			}

			// Bind the handlers
			$(document)
				.off( ns )
				.on( moveEvent, move )
				.on( endEvent, function( e ) {
					e.preventDefault();
					$(this).off( ns );
					self.panning = false;
					// Trigger our end event
					// jQuery's not is used here to compare Array equality
					self._trigger( 'end', matrix, !!$(original).not(matrix).length );
				});
		}
	};

	/**
	 * Extend jQuery
	 * @param {Object|String} options - The name of a method to call on the prototype
	 *  or an object literal of options
	 * @returns {jQuery|Mixed} jQuery instance for regular chaining or the return value(s) of a panzoom method call
	 */
	$.fn.panzoom = function( options ) {
		var instance, args, m, ret;

		// Call methods widget-style
		if ( typeof options === 'string' ) {
			ret = [];
			args = slice.call( arguments, 1 );
			this.each(function() {
				instance = $.data( this, datakey );

				if ( !instance ) {
					ret.push( undefined );

				// Ignore methods beginning with `_`
				} else if ( options.charAt(0) !== '_' &&
					typeof (m = instance[ options ]) === 'function' &&
					// If nothing is returned, do not add to return values
					(m = m.apply( instance, args )) !== undefined ) {

					ret.push( m );
				}
			});

			// Return an array of values for the jQuery instances
			// Or the value itself if there is only one
			// Or keep chaining
			return ret.length ?
				(ret.length === 1 ? ret[0] : ret) :
				this;
		}

		return this.each(function() { new Panzoom( this, options ); });
	};

	return Panzoom;
}));
