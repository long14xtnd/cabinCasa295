// Garden Gnome Software - Skin
// Pano2VR 7.0.9/20024
// Filename: venis.ggsk
// Generated 2025-04-18T21:41:36

function pano2vrSkin(player,base) {
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_controls_right', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_controls_left', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map_full', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan_full', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnails', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnails_full', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_share', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_hs_popups', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_image_hs_popups', 0, "", { ignoreInState: 0  });
	player.addVariable('image_hs_description', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_image_hs_popup_full', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_hs_popup', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_video_youtube_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_controller', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_prev_next', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_info', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_maps', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_floorplans', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_share_facebook', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_twitter', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_copy', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('width_controls_left', 1, 0, { ignoreInState: 0  });
	player.addVariable('width_controls_right', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_share_buttons', 1, 0, { ignoreInState: 0  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_tablet', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('share_api', 2, false, { ignoreInState: 0  });
	player.addVariable('share_url', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_youtube_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('toggle_rotate', 2, true, { ignoreInState: 0  });
	player.addVariable('toggle_grypo', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_control_left_vertical', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		me._variable_vis_controls_left = {};
		me._variable_vis_controls_left.ggCurrentLogicState = -1;
		me._variable_vis_controls_left.logicBlock = function() {
			var newLogicState_vis_controls_left;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicState_vis_controls_left = 0;
			}
			else {
				newLogicState_vis_controls_left = -1;
			}
			if (me._variable_vis_controls_left.ggCurrentLogicState != newLogicState_vis_controls_left) {
				me._variable_vis_controls_left.ggCurrentLogicState = newLogicState_vis_controls_left;
				if (me._variable_vis_controls_left.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_controls_left', false);
				}
				else {
					player.setVariableValue('vis_controls_left', true);
				}
			}
		}
		me._variable_vis_video_hs_popup = {};
		me._variable_vis_video_hs_popup.ggCurrentLogicState = -1;
		me._variable_vis_video_hs_popup.logicBlock = function() {
			var newLogicState_vis_video_hs_popup;
			if (
				((player.getVariableValue('vis_video_youtube_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_vimeo_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_file_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicState_vis_video_hs_popup = 0;
			}
			else {
				newLogicState_vis_video_hs_popup = -1;
			}
			if (me._variable_vis_video_hs_popup.ggCurrentLogicState != newLogicState_vis_video_hs_popup) {
				me._variable_vis_video_hs_popup.ggCurrentLogicState = newLogicState_vis_video_hs_popup;
				if (me._variable_vis_video_hs_popup.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_video_hs_popup', true);
				}
				else {
					player.setVariableValue('vis_video_hs_popup', false);
				}
			}
		}
		me._variable_opt_maps = {};
		me._variable_opt_maps.ggCurrentLogicState = -1;
		me._variable_opt_maps.logicBlock = function() {
			var newLogicState_opt_maps;
			if (
				((player.hasMap() == true))
			)
			{
				newLogicState_opt_maps = 0;
			}
			else {
				newLogicState_opt_maps = -1;
			}
			if (me._variable_opt_maps.ggCurrentLogicState != newLogicState_opt_maps) {
				me._variable_opt_maps.ggCurrentLogicState = newLogicState_opt_maps;
				if (me._variable_opt_maps.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_maps', true);
				}
				else {
					player.setVariableValue('opt_maps', false);
				}
			}
		}
		me._variable_opt_floorplans = {};
		me._variable_opt_floorplans.ggCurrentLogicState = -1;
		me._variable_opt_floorplans.logicBlock = function() {
			var newLogicState_opt_floorplans;
			if (
				((player.hasFloorplan() == true))
			)
			{
				newLogicState_opt_floorplans = 0;
			}
			else {
				newLogicState_opt_floorplans = -1;
			}
			if (me._variable_opt_floorplans.ggCurrentLogicState != newLogicState_opt_floorplans) {
				me._variable_opt_floorplans.ggCurrentLogicState = newLogicState_opt_floorplans;
				if (me._variable_opt_floorplans.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_floorplans', true);
				}
				else {
					player.setVariableValue('opt_floorplans', false);
				}
			}
		}
		me._variable_opt_share = {};
		me._variable_opt_share.ggCurrentLogicState = -1;
		me._variable_opt_share.logicBlock = function() {
			var newLogicState_opt_share;
			if (
				((player.getVariableValue('opt_share_facebook') == true)) || 
				((player.getVariableValue('opt_share_twitter') == true)) || 
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicState_opt_share = 0;
			}
			else {
				newLogicState_opt_share = -1;
			}
			if (me._variable_opt_share.ggCurrentLogicState != newLogicState_opt_share) {
				me._variable_opt_share.ggCurrentLogicState = newLogicState_opt_share;
				if (me._variable_opt_share.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_share', true);
				}
				else {
					player.setVariableValue('opt_share', false);
				}
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_desktop = {};
		me._variable_resp_desktop.ggCurrentLogicState = -1;
		me._variable_resp_desktop.logicBlock = function() {
			var newLogicState_resp_desktop;
			if (
				((player.getViewerSize().width > 1024))
			)
			{
				newLogicState_resp_desktop = 0;
			}
			else {
				newLogicState_resp_desktop = -1;
			}
			if (me._variable_resp_desktop.ggCurrentLogicState != newLogicState_resp_desktop) {
				me._variable_resp_desktop.ggCurrentLogicState = newLogicState_resp_desktop;
				if (me._variable_resp_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_desktop', true);
				}
				else {
					player.setVariableValue('resp_desktop', false);
				}
			}
		}
		me._variable_resp_tablet = {};
		me._variable_resp_tablet.ggCurrentLogicState = -1;
		me._variable_resp_tablet.logicBlock = function() {
			var newLogicState_resp_tablet;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicState_resp_tablet = 0;
			}
			else {
				newLogicState_resp_tablet = -1;
			}
			if (me._variable_resp_tablet.ggCurrentLogicState != newLogicState_resp_tablet) {
				me._variable_resp_tablet.ggCurrentLogicState = newLogicState_resp_tablet;
				if (me._variable_resp_tablet.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_tablet', true);
				}
				else {
					player.setVariableValue('resp_tablet', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._background_blur=document.createElement('div');
		el.ggId="background_blur";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._background_blur.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._background_blur.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map_full') == true)) || 
				((player.getVariableValue('vis_floorplan_full') == true)) || 
				((player.getVariableValue('vis_thumbnails_full') == true)) || 
				((player.getVariableValue('vis_image_hs_popup_full') == true)) || 
				((player.getVariableValue('vis_video_hs_popup') == true)) || 
				((player.getVariableValue('vis_pdf_hs_popup') == true)) || 
				((player.getVariableValue('vis_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._background_blur.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._background_blur.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._background_blur.style.transition='';
				if (me._background_blur.ggCurrentLogicStateVisible == 0) {
					me._background_blur.style.visibility=(Number(me._background_blur.style.opacity)>0||!me._background_blur.style.opacity)?'inherit':'hidden';
					me._background_blur.ggVisible=true;
				}
				else {
					me._background_blur.style.visibility="hidden";
					me._background_blur.ggVisible=false;
				}
			}
		}
		me._background_blur.logicBlock_visible();
		me._background_blur.onclick=function (e) {
			player.setVariableValue('vis_map_full', false);
			player.setVariableValue('vis_thumbnails_full', false);
			player.setVariableValue('vis_image_hs_popup_full', false);
			player.setVariableValue('vis_pdf_hs_popup', false);
			player.setVariableValue('vis_url_hs_popup', false);
			player.setVariableValue('vis_video_youtube_hs_popup', false);
			player.setVariableValue('vis_video_vimeo_hs_popup', false);
			player.setVariableValue('vis_video_file_hs_popup', false);
			player.setVariableValue('vis_video_url_hs_popup', false);
		}
		me._background_blur.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._background_blur);
		el=me._share=document.createElement('div');
		el.ggId="share";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 16px 8px 8px;';
		hs+='bottom : 72px;';
		hs+='cursor : default;';
		hs+='height : 64px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._share.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._share.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._share.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._share.style.transition='left 0s, bottom 0s';
				if (me._share.ggCurrentLogicStatePosition == 0) {
					me._share.style.left='16px';
					me._share.style.bottom='72px';
				}
				else {
					me._share.style.left='16px';
					me._share.style.bottom='72px';
				}
			}
		}
		me._share.logicBlock_position();
		me._share.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_share') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._share.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._share.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._share.style.transition='left 0s, bottom 0s';
				if (me._share.ggCurrentLogicStateVisible == 0) {
					me._share.style.visibility=(Number(me._share.style.opacity)>0||!me._share.style.opacity)?'inherit':'hidden';
					me._share.ggVisible=true;
				}
				else {
					me._share.style.visibility="hidden";
					me._share.ggVisible=false;
				}
			}
		}
		me._share.logicBlock_visible();
		me._share.ggUpdatePosition=function (useTransition) {
		}
		el=me._copy=document.createElement('div');
		els=me._copy__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaWNvbiI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTkuMDIgMTcgNDcgMTcgNDcgNDQuOTgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxwYXRoIHN0eWxlPSJmaWxsOiNlNmU2ZTYiIGQ9Ik0xNSwyMVY0OUg0M1YyMVpNMzguMzIsMzdIMzF2Ny4zM0gyN1YzN0gxOS42NlYzM0gyN1YyNS42OGg0VjMzaDcuMzNaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._copy__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._copy__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZTRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9Imljb24iPgogIDxwb2x5bGluZSBwb2ludHM9IjE5LjAyIDE3IDQ3IDE3IDQ3IDQ0Ljk4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiLz4KICA8cGF0aCBzdHlsZT0iZmlsbDojMTQxNDE0IiBkPSJNMTUsMjFWNDlINDNWMjFaTTM4LjMyLDM3SDMxdj'+
			'cuMzNIMjdWMzdIMTkuNjZWMzNIMjdWMjUuNjhoNFYzM2g3LjMzWiIvPgogPC9nPgo8L3N2Zz4K';
		me._copy__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="copy";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._copy.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._copy.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._copy.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._copy.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._copy.style.transition='';
				if (me._copy.ggCurrentLogicStateVisible == 0) {
					me._copy.style.visibility=(Number(me._copy.style.opacity)>0||!me._copy.style.opacity)?'inherit':'hidden';
					me._copy.ggVisible=true;
				}
				else {
					me._copy.style.visibility="hidden";
					me._copy.ggVisible=false;
				}
			}
		}
		me._copy.logicBlock_visible();
		me._copy.onclick=function (e) {
			text = document.URL
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
text = text + "#" + pano.getCurrentNode() + "," + (Math.round(pano.getPan() * 100) / 100) + "," + (Math.round(pano.getTilt() * 100) / 100) + "," + (Math.round(pano.getFov() * 100) / 100) + "," + pano.getProjection();

dummy = document.createElement('input');
document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);
alert("The current view has been copied.");
		}
		me._copy.onmouseover=function (e) {
			me._copy__img.style.visibility='hidden';
			me._copy__imgo.style.visibility='inherit';
			me.elementMouseOver['copy']=true;
		}
		me._copy.onmouseout=function (e) {
			me._copy__img.style.visibility='inherit';
			me._copy__imgo.style.visibility='hidden';
			me.elementMouseOver['copy']=false;
		}
		me._copy.ggUpdatePosition=function (useTransition) {
		}
		me._share.appendChild(me._copy);
		el=me._twitter=document.createElement('div');
		els=me._twitter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPGcgaWQ9Imljb24iPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00OS4xLDIxLjNjLTEsMC41LTIuMiwwLjgtMy41LDFjMC41LTAuMSwxLjMtMSwxLjctMS40YzAuNS0wLjYsMC45LTEuMywxLjItMi4xdi0wLjFoLTAuMSAgIGMtMS4zLDAuNy0yLjYsMS4yLTQsMS42Yy0wLjEsMC0wLjMsMC0wLjMtMC4xYy0wLjEtMC4xLTAuMy0wLjMtMC40LTAuNGMtMC43LTAuNS0xLjMtMC45LTItMS4yYy0wLjktMC40LTItMC41LTMtMC41ICAgYy0xLDAtMiwwLjQtMi45LDAuOGMtMC45LDAuNS0xLjcs'+
			'MS4yLTIuMywyYy0wLjcsMC44LTEuMiwxLjctMS40LDIuN2MtMC4zLDAuOS0wLjMsMiwwLDNjMCwwLjEsMCwwLjEtMC4xLDAuMSAgIGMtNS42LTAuOC0xMC4zLTIuOS0xNC03LjFjLTAuMS0wLjEtMC4zLTAuMS0wLjQsMGMtMS42LDIuNy0xLDYuMiwxLjIsOC40YzAuMywwLjMsMC41LDAuNSwwLjksMC44Yy0wLjktMC4xLTEuOC0wLjQtMi43LTAuOCAgIGMtMC4xLTAuMS0wLjMsMC0wLjMsMC4xYzAsMC4zLDAsMC41LDAsMC44YzAuNCwyLjYsMi4xLDQuOCw0LjQsNS43YzAuMywwLjEsMC42LDAuMywwLjksMC4zQzIxLDM1LDIwLjMsMzUuMSwxOS4zLDM1ICAgYy0wLjEsMC0wLjMsMC0wLjEsMC4zYz'+
			'AuOSwyLjUsMyw0LjMsNS42LDQuN2MwLjMsMCwwLjUsMCwwLjgsMC4xbDAsMGMtMC42LDAuOS0yLjcsMS43LTMuOCwxLjljLTEuOCwwLjctMy44LDAuOS01LjcsMC44ICAgYy0wLjMsMC0wLjQsMC0wLjUsMGMtMC4xLDAsMCwwLjEsMC4xLDAuM2MwLjQsMC4zLDAuOCwwLjUsMS4yLDAuN2MxLjMsMC42LDIuNiwxLjIsMy45LDEuNmM2LjksMiwxNC44LDAuNSwyMC00LjcgICBjNC4yLTQsNS42LTkuNiw1LjYtMTUuM2MwLTAuMywwLjMtMC40LDAuNC0wLjVjMS0wLjgsMi0xLjcsMi43LTIuOWMwLjEtMC4xLDAuMS0wLjQsMC4xLTAuNWwwLDBDNDkuMiwyMS4yLDQ5LjIsMjEuMiw0OS4xLDIxLjN6Ii8+'+
			'CiA8L2c+Cjwvc3ZnPgo=';
		me._twitter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._twitter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodF8xXyI+CiAgPGNpcmNsZSByPSIyNyIgY3g9IjMyLjUiIGN5PSIzMi41IiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbiI+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTQ5LjEsMjEuM2MtMSwwLjUtMi4yLDAuOC0zLjUsMWMwLjUtMC4xLDEuMy0xLDEuNy0xLjRjMC41LTAuNiwwLjktMS4zLDEuMi0yLjF2LTAuMWgtMC4xICAgYy0xLjMsMC43LTIuNiwxLjItNCwxLjZjLTAuMSwwLTAuMywwLTAuMy0wLjFjLTAu'+
			'MS0wLjEtMC4zLTAuMy0wLjQtMC40Yy0wLjctMC41LTEuMy0wLjktMi0xLjJjLTAuOS0wLjQtMi0wLjUtMy0wLjUgICBjLTEsMC0yLDAuNC0yLjksMC44Yy0wLjksMC41LTEuNywxLjItMi4zLDJjLTAuNywwLjgtMS4yLDEuNy0xLjQsMi43Yy0wLjMsMC45LTAuMywyLDAsM2MwLDAuMSwwLDAuMS0wLjEsMC4xICAgYy01LjYtMC44LTEwLjMtMi45LTE0LTcuMWMtMC4xLTAuMS0wLjMtMC4xLTAuNCwwYy0xLjYsMi43LTEsNi4yLDEuMiw4LjRjMC4zLDAuMywwLjUsMC41LDAuOSwwLjhjLTAuOS0wLjEtMS44LTAuNC0yLjctMC44ICAgYy0wLjEtMC4xLTAuMywwLTAuMywwLjFjMCwwLjMsMCwwLjUsMC'+
			'wwLjhjMC40LDIuNiwyLjEsNC44LDQuNCw1LjdjMC4zLDAuMSwwLjYsMC4zLDAuOSwwLjNDMjEsMzUsMjAuMywzNS4xLDE5LjMsMzUgICBjLTAuMSwwLTAuMywwLTAuMSwwLjNjMC45LDIuNSwzLDQuMyw1LjYsNC43YzAuMywwLDAuNSwwLDAuOCwwLjFsMCwwYy0wLjYsMC45LTIuNywxLjctMy44LDEuOWMtMS44LDAuNy0zLjgsMC45LTUuNywwLjggICBjLTAuMywwLTAuNCwwLTAuNSwwYy0wLjEsMCwwLDAuMSwwLjEsMC4zYzAuNCwwLjMsMC44LDAuNSwxLjIsMC43YzEuMywwLjYsMi42LDEuMiwzLjksMS42YzYuOSwyLDE0LjgsMC41LDIwLTQuNyAgIGM0LjItNCw1LjYtOS42LDUuNi0xNS4zYzAt'+
			'MC4zLDAuMy0wLjQsMC40LTAuNWMxLTAuOCwyLTEuNywyLjctMi45YzAuMS0wLjEsMC4xLTAuNCwwLjEtMC41bDAsMEM0OS4yLDIxLjIsNDkuMiwyMS4yLDQ5LjEsMjEuM3oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._twitter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="twitter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._twitter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._twitter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._twitter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._twitter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._twitter.style.transition='';
				if (me._twitter.ggCurrentLogicStateVisible == 0) {
					me._twitter.style.visibility=(Number(me._twitter.style.opacity)>0||!me._twitter.style.opacity)?'inherit':'hidden';
					me._twitter.ggVisible=true;
				}
				else {
					me._twitter.style.visibility="hidden";
					me._twitter.ggVisible=false;
				}
			}
		}
		me._twitter.logicBlock_visible();
		me._twitter.onclick=function (e) {
			window.open('http://twitter.com/share?url=' + location.href);
		}
		me._twitter.onmouseover=function (e) {
			me._twitter__img.style.visibility='hidden';
			me._twitter__imgo.style.visibility='inherit';
			me.elementMouseOver['twitter']=true;
		}
		me._twitter.onmouseout=function (e) {
			me._twitter__img.style.visibility='inherit';
			me._twitter__imgo.style.visibility='hidden';
			me.elementMouseOver['twitter']=false;
		}
		me._twitter.ggUpdatePosition=function (useTransition) {
		}
		me._share.appendChild(me._twitter);
		el=me._facebook=document.createElement('div');
		els=me._facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPGcgaWQ9Imljb24iPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00NCwzOS4zbDEuNC04LjJoLTguN3YtNS4zYzAtMi4zLDEuMi00LjUsNS4xLTQuNWgzLjl2LTdjLTIuMy0wLjQtNC43LTAuNS03LTAuNmMtNy4xLDAtMTEuOCwzLjktMTEuOCwxMXY2LjQgICBoLTcuOXY4LjJoNy45djIwYzMuNiwwLjcsNi41LDAuNyw5LjcsMC4yVjM5LjNINDR6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._facebook__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._facebook__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodF8xXyI+CiAgPGNpcmNsZSByPSIyNyIgY3g9IjMyLjMiIGN5PSIzMi44IiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbiI+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTQ0LDM5LjNsMS40LTguMmgtOC43di01LjNjMC0yLjMsMS4yLTQuNSw1LjEtNC41aDMuOXYtN2MtMi4zLTAuNC00LjctMC41LTctMC42Yy03LjEsMC0xMS44LDMuOS0xMS44LDExdjYuNCAgIGgtNy45djguMmg3Ljl2MjBjMy42LDAuNyw2LjUs'+
			'MC43LDkuNywwLjJWMzkuM0g0NHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._facebook__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="facebook";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._facebook.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._facebook.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._facebook.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._facebook.style.transition='';
				if (me._facebook.ggCurrentLogicStateVisible == 0) {
					me._facebook.style.visibility=(Number(me._facebook.style.opacity)>0||!me._facebook.style.opacity)?'inherit':'hidden';
					me._facebook.ggVisible=true;
				}
				else {
					me._facebook.style.visibility="hidden";
					me._facebook.ggVisible=false;
				}
			}
		}
		me._facebook.logicBlock_visible();
		me._facebook.onclick=function (e) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
		}
		me._facebook.onmouseover=function (e) {
			me._facebook__img.style.visibility='hidden';
			me._facebook__imgo.style.visibility='inherit';
			me.elementMouseOver['facebook']=true;
		}
		me._facebook.onmouseout=function (e) {
			me._facebook__img.style.visibility='inherit';
			me._facebook__imgo.style.visibility='hidden';
			me.elementMouseOver['facebook']=false;
		}
		me._facebook.ggUpdatePosition=function (useTransition) {
		}
		me._share.appendChild(me._facebook);
		el=me._share_close=document.createElement('div');
		els=me._share_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQzLjMxIiB4Mj0iNDMuMzEiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiIHgyPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._share_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._share_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxND'+
			'E0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjQzLjMxIi8+CiAgPGxpbmUgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIiB4Mj0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._share_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="share_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share_close.onclick=function (e) {
			player.setVariableValue('vis_share', false);
		}
		me._share_close.onmouseover=function (e) {
			me._share_close__img.style.visibility='hidden';
			me._share_close__imgo.style.visibility='inherit';
			me.elementMouseOver['share_close']=true;
		}
		me._share_close.onmouseout=function (e) {
			me._share_close__img.style.visibility='inherit';
			me._share_close__imgo.style.visibility='hidden';
			me.elementMouseOver['share_close']=false;
		}
		me._share_close.ggUpdatePosition=function (useTransition) {
		}
		me._share.appendChild(me._share_close);
		me.divSkin.appendChild(me._share);
		el=me._info=document.createElement('div');
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 16px 8px 8px;';
		hs+='bottom : 72px;';
		hs+='cursor : default;';
		hs+='height : calc(50% - 86px);';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info') == true)) && 
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info.style.transition='';
				if (me._info.ggCurrentLogicStateVisible == 0) {
					me._info.style.visibility=(Number(me._info.style.opacity)>0||!me._info.style.opacity)?'inherit':'hidden';
					me._info.ggVisible=true;
				}
				else {
					me._info.style.visibility="hidden";
					me._info.ggVisible=false;
				}
			}
		}
		me._info.logicBlock_visible();
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_text=document.createElement('div');
		els=me._info_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 48px);';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 16px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("<strong style=\'font-size: 24px\'>%1<\/strong><br>\n<div>%2<\/div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_text.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text.ggUpdatePosition=function (useTransition) {
		}
		me._info.appendChild(me._info_text);
		el=me._info_close=document.createElement('div');
		els=me._info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQzLjMxIiB4Mj0iNDMuMzEiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiIHgyPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._info_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxND'+
			'E0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjQzLjMxIi8+CiAgPGxpbmUgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIiB4Mj0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_close.onclick=function (e) {
			player.setVariableValue('vis_info', false);
		}
		me._info_close.onmouseover=function (e) {
			me._info_close__img.style.visibility='hidden';
			me._info_close__imgo.style.visibility='inherit';
			me.elementMouseOver['info_close']=true;
		}
		me._info_close.onmouseout=function (e) {
			me._info_close__img.style.visibility='inherit';
			me._info_close__imgo.style.visibility='hidden';
			me.elementMouseOver['info_close']=false;
		}
		me._info_close.ggUpdatePosition=function (useTransition) {
		}
		me._info.appendChild(me._info_close);
		me.divSkin.appendChild(me._info);
		el=me._map=document.createElement('div');
		el.ggId="map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 16px 8px 8px;';
		hs+='cursor : default;';
		hs+='height : calc(50% - 86px);';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true)) || 
				((player.getVariableValue('vis_floorplan') == true)) && 
				((player.getVariableValue('resp_desktop') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map.style.transition='';
				if (me._map.ggCurrentLogicStateVisible == 0) {
					me._map.style.visibility="hidden";
					me._map.ggVisible=false;
				}
				else {
					me._map.style.visibility="hidden";
					me._map.ggVisible=false;
				}
			}
		}
		me._map.logicBlock_visible();
		me._map.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_content=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_content";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='bottom : 8px;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 40px);';
		hs+='left : calc(50% - ((calc(100% - 16px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 16px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_content.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_content.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_content.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_content.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_content.style.transition='';
				if (me._map_content.ggCurrentLogicStateVisible == 0) {
					me._map_content.style.visibility=(Number(me._map_content.style.opacity)>0||!me._map_content.style.opacity)?'inherit':'hidden';
					if (me._map_content.ggMapNotLoaded && me._map_content.ggInitMap) {
						me._map_content.ggInitMap(false);
						me._map_content.ggInitMapMarkers(true);
					}
					me._map_content.ggVisible=true;
				}
				else {
					me._map_content.style.visibility="hidden";
					if (me._map_content.ggClearMap) me._map_content.ggClearMap();
					me._map_content.ggVisible=false;
				}
			}
		}
		me._map_content.logicBlock_visible();
		me._map_content.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_content);
		el=me._floorplan_content=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="floorplan_content";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='bottom : 8px;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 40px);';
		hs+='left : calc(50% - ((calc(100% - 16px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 16px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_content.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_content.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_content.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_content.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_content.style.transition='';
				if (me._floorplan_content.ggCurrentLogicStateVisible == 0) {
					me._floorplan_content.style.visibility=(Number(me._floorplan_content.style.opacity)>0||!me._floorplan_content.style.opacity)?'inherit':'hidden';
					if (me._floorplan_content.ggMapNotLoaded && me._floorplan_content.ggInitMap) {
						me._floorplan_content.ggInitMap(false);
						me._floorplan_content.ggInitMapMarkers(true);
					}
					me._floorplan_content.ggVisible=true;
				}
				else {
					me._floorplan_content.style.visibility="hidden";
					if (me._floorplan_content.ggClearMap) me._floorplan_content.ggClearMap();
					me._floorplan_content.ggVisible=false;
				}
			}
		}
		me._floorplan_content.logicBlock_visible();
		me._floorplan_content.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._floorplan_content);
		el=me._map_close=document.createElement('div');
		els=me._map_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQzLjMxIiB4Mj0iNDMuMzEiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiIHgyPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._map_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxND'+
			'E0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjQzLjMxIi8+CiAgPGxpbmUgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIiB4Mj0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._map_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="map_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_close.onclick=function (e) {
			player.setVariableValue('vis_map', false);
			player.setVariableValue('vis_floorplan', false);
		}
		me._map_close.onmouseover=function (e) {
			me._map_close__img.style.visibility='hidden';
			me._map_close__imgo.style.visibility='inherit';
			me.elementMouseOver['map_close']=true;
		}
		me._map_close.onmouseout=function (e) {
			me._map_close__img.style.visibility='inherit';
			me._map_close__imgo.style.visibility='hidden';
			me.elementMouseOver['map_close']=false;
		}
		me._map_close.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_close);
		el=me._map_full=document.createElement('div');
		els=me._map_full__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzUuNTQgMTYgNDggMTYgNDggMTYgNDggMjguNDYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgxPSIzNS44OS'+
			'IgeTE9IjI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSIxNiIgeDI9IjQ4Ii8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjguNDYgNDggMTYgNDggMTYgNDggMTYgMzUuNTQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgxPSIyOC4xMSIgeTE9IjM2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSI0OCIgeDI9IjE2Ii8+'+
			'CiA8L2c+Cjwvc3ZnPgo=';
		me._map_full__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_full__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBwb2ludHM9IjM1LjU0IDE2IDQ4IDE2IDQ4IDE2IDQ4IDI4LjQ2IiBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4MT0iMzUuODkiIHkxPSIyOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iMTYiIHgyPSI0OCIvPgogIDxwb2x5bGluZSBwb2ludHM9IjI4LjQ2IDQ4IDE2IDQ4IDE2IDQ4IDE2IDM1LjU0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7'+
			'IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4MT0iMjguMTEiIHkxPSIzNiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iNDgiIHgyPSIxNiIvPgogPC9nPgo8L3N2Zz4K';
		me._map_full__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="map_full";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_full.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_full.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_map') == true))
				)
			) {
				player.setVariableValue('vis_map_full', true);
			}
			if (
				(
					((player.getVariableValue('vis_floorplan') == true))
				)
			) {
				player.setVariableValue('vis_floorplan_full', true);
			}
			player.setVariableValue('vis_map', false);
			player.setVariableValue('vis_floorplan', false);
		}
		me._map_full.onmouseover=function (e) {
			me._map_full__img.style.visibility='hidden';
			me._map_full__imgo.style.visibility='inherit';
			me.elementMouseOver['map_full']=true;
		}
		me._map_full.onmouseout=function (e) {
			me._map_full__img.style.visibility='inherit';
			me._map_full__imgo.style.visibility='hidden';
			me.elementMouseOver['map_full']=false;
		}
		me._map_full.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_full);
		me.divSkin.appendChild(me._map);
		el=me._map_fullscreen=document.createElement('div');
		el.ggId="map_fullscreen";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 40px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 40px) + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map_full') == true)) || 
				((player.getVariableValue('vis_floorplan_full') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_fullscreen.style.transition='';
				if (me._map_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._map_fullscreen.style.visibility=(Number(me._map_fullscreen.style.opacity)>0||!me._map_fullscreen.style.opacity)?'inherit':'hidden';
					me._map_fullscreen.ggVisible=true;
				}
				else {
					me._map_fullscreen.style.visibility="hidden";
					me._map_fullscreen.ggVisible=false;
				}
			}
		}
		me._map_fullscreen.logicBlock_visible();
		me._map_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_fs_content=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_fs_content";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='bottom : 16px;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 48px);';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_fs_content.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_fs_content.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map_full') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_fs_content.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_fs_content.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_fs_content.style.transition='';
				if (me._map_fs_content.ggCurrentLogicStateVisible == 0) {
					me._map_fs_content.style.visibility=(Number(me._map_fs_content.style.opacity)>0||!me._map_fs_content.style.opacity)?'inherit':'hidden';
					if (me._map_fs_content.ggMapNotLoaded && me._map_fs_content.ggInitMap) {
						me._map_fs_content.ggInitMap(false);
						me._map_fs_content.ggInitMapMarkers(true);
					}
					me._map_fs_content.ggVisible=true;
				}
				else {
					me._map_fs_content.style.visibility="hidden";
					if (me._map_fs_content.ggClearMap) me._map_fs_content.ggClearMap();
					me._map_fs_content.ggVisible=false;
				}
			}
		}
		me._map_fs_content.logicBlock_visible();
		me._map_fs_content.ggUpdatePosition=function (useTransition) {
		}
		me._map_fullscreen.appendChild(me._map_fs_content);
		el=me._floorplan_fs_content=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="floorplan_fs_content";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='bottom : 16px;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 48px);';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_fs_content.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_fs_content.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan_full') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_fs_content.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_fs_content.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_fs_content.style.transition='';
				if (me._floorplan_fs_content.ggCurrentLogicStateVisible == 0) {
					me._floorplan_fs_content.style.visibility=(Number(me._floorplan_fs_content.style.opacity)>0||!me._floorplan_fs_content.style.opacity)?'inherit':'hidden';
					if (me._floorplan_fs_content.ggMapNotLoaded && me._floorplan_fs_content.ggInitMap) {
						me._floorplan_fs_content.ggInitMap(false);
						me._floorplan_fs_content.ggInitMapMarkers(true);
					}
					me._floorplan_fs_content.ggVisible=true;
				}
				else {
					me._floorplan_fs_content.style.visibility="hidden";
					if (me._floorplan_fs_content.ggClearMap) me._floorplan_fs_content.ggClearMap();
					me._floorplan_fs_content.ggVisible=false;
				}
			}
		}
		me._floorplan_fs_content.logicBlock_visible();
		me._floorplan_fs_content.ggUpdatePosition=function (useTransition) {
		}
		me._map_fullscreen.appendChild(me._floorplan_fs_content);
		el=me._map_fs_close=document.createElement('div');
		els=me._map_fs_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQzLjMxIiB4Mj0iNDMuMzEiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiIHgyPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._map_fs_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_fs_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxND'+
			'E0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjQzLjMxIi8+CiAgPGxpbmUgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIiB4Mj0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._map_fs_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="map_fs_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_fs_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_fs_close.onclick=function (e) {
			player.setVariableValue('vis_map_full', false);
			player.setVariableValue('vis_floorplan_full', false);
		}
		me._map_fs_close.onmouseover=function (e) {
			me._map_fs_close__img.style.visibility='hidden';
			me._map_fs_close__imgo.style.visibility='inherit';
			me.elementMouseOver['map_fs_close']=true;
		}
		me._map_fs_close.onmouseout=function (e) {
			me._map_fs_close__img.style.visibility='inherit';
			me._map_fs_close__imgo.style.visibility='hidden';
			me.elementMouseOver['map_fs_close']=false;
		}
		me._map_fs_close.ggUpdatePosition=function (useTransition) {
		}
		me._map_fullscreen.appendChild(me._map_fs_close);
		el=me._map_fs_small=document.createElement('div');
		els=me._map_fs_small__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDggMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW'+
			'5lIHgxPSI0Ny42NSIgeTE9IjE2LjQ1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSIyOC40NiIgeDI9IjM1LjU0Ii8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgNDgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgxPSIxNi4zNSIgeTE9IjQ3LjU1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEw'+
			'O3N0cm9rZS13aWR0aDo0cHgiIHkyPSIzNS41NCIgeDI9IjI4LjQ2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._map_fs_small__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_fs_small__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBwb2ludHM9IjQ4IDI4LjQ2IDM1LjU0IDI4LjQ2IDM1LjU0IDI4LjQ2IDM1LjU0ID'+
			'E2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4MT0iNDcuNjUiIHkxPSIxNi40NSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iMjguNDYiIHgyPSIzNS41NCIvPgogIDxwb2x5bGluZSBwb2ludHM9IjE2IDM1LjU0IDI4LjQ2IDM1LjU0IDI4LjQ2IDM1LjU0IDI4LjQ2IDQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9r'+
			'ZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4MT0iMTYuMzUiIHkxPSI0Ny41NSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iMzUuNTQiIHgyPSIyOC40NiIvPgogPC9nPgo8L3N2Zz4K';
		me._map_fs_small__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="map_fs_small";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_fs_small.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_fs_small.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_fs_small.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_fs_small.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_fs_small.style.transition='';
				if (me._map_fs_small.ggCurrentLogicStateVisible == 0) {
					me._map_fs_small.style.visibility="hidden";
					me._map_fs_small.ggVisible=false;
				}
				else {
					me._map_fs_small.style.visibility=(Number(me._map_fs_small.style.opacity)>0||!me._map_fs_small.style.opacity)?'inherit':'hidden';
					me._map_fs_small.ggVisible=true;
				}
			}
		}
		me._map_fs_small.logicBlock_visible();
		me._map_fs_small.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_map_full') == true))
				)
			) {
				player.setVariableValue('vis_map', true);
			}
			if (
				(
					((player.getVariableValue('vis_floorplan_full') == true))
				)
			) {
				player.setVariableValue('vis_floorplan', true);
			}
			player.setVariableValue('vis_map_full', false);
			player.setVariableValue('vis_floorplan_full', false);
		}
		me._map_fs_small.onmouseover=function (e) {
			me._map_fs_small__img.style.visibility='hidden';
			me._map_fs_small__imgo.style.visibility='inherit';
			me.elementMouseOver['map_fs_small']=true;
		}
		me._map_fs_small.onmouseout=function (e) {
			me._map_fs_small__img.style.visibility='inherit';
			me._map_fs_small__imgo.style.visibility='hidden';
			me.elementMouseOver['map_fs_small']=false;
		}
		me._map_fs_small.ggUpdatePosition=function (useTransition) {
		}
		me._map_fullscreen.appendChild(me._map_fs_small);
		me.divSkin.appendChild(me._map_fullscreen);
		el=me._thumbnails=document.createElement('div');
		el.ggId="thumbnails";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 16px 8px 8px;';
		hs+='bottom : 72px;';
		hs+='cursor : default;';
		hs+='height : calc(50% - 86px);';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 290px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails.style.transition='';
				if (me._thumbnails.ggCurrentLogicStateVisible == 0) {
					me._thumbnails.style.visibility=(Number(me._thumbnails.style.opacity)>0||!me._thumbnails.style.opacity)?'inherit':'hidden';
					me._thumbnails.ggVisible=true;
				}
				else {
					me._thumbnails.style.visibility="hidden";
					me._thumbnails.ggVisible=false;
				}
			}
		}
		me._thumbnails.logicBlock_visible();
		me._thumbnails.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_scroller=document.createElement('div');
		els=me._thumbnails_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 127px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 127px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnails_scroller.ggScrollByX = function(diffX) {
			if(!me._thumbnails_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnails_scroller.ggHPercentVisible >= 1.0) return;
			me._thumbnails_scroller.ggScrollPosX = (me._thumbnails_scroller__horScrollFg.offsetLeft + diffX);
			me._thumbnails_scroller.ggScrollPosX = Math.max(me._thumbnails_scroller.ggScrollPosX, 0);
			me._thumbnails_scroller.ggScrollPosX = Math.min(me._thumbnails_scroller.ggScrollPosX, me._thumbnails_scroller__horScrollBg.offsetWidth - me._thumbnails_scroller__horScrollFg.offsetWidth);
			me._thumbnails_scroller__horScrollFg.style.left = me._thumbnails_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnails_scroller.ggScrollPosX / (me._thumbnails_scroller__horScrollBg.offsetWidth - me._thumbnails_scroller__horScrollFg.offsetWidth);
			me._thumbnails_scroller__content.style.left = -(Math.round((me._thumbnails_scroller.ggContentWidth * (1.0 - me._thumbnails_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnails_scroller.ggContentLeftOffset + 'px';
			me._thumbnails_scroller.ggScrollPosXPercent = (me._thumbnails_scroller__horScrollFg.offsetLeft / me._thumbnails_scroller__horScrollBg.offsetWidth);
		}
		me._thumbnails_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnails_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnails_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnails_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnails_scroller.ggScrollPosX >= me._thumbnails_scroller__horScrollBg.offsetWidth - me._thumbnails_scroller__horScrollFg.offsetWidth)) {
					me._thumbnails_scroller.ggScrollPosX = Math.min(me._thumbnails_scroller.ggScrollPosX, me._thumbnails_scroller__horScrollBg.offsetWidth - me._thumbnails_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnails_scroller.ggScrollPosX <= 0)) {
					me._thumbnails_scroller.ggScrollPosX = Math.max(me._thumbnails_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnails_scroller__horScrollFg.style.left = me._thumbnails_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnails_scroller.ggScrollPosX / (me._thumbnails_scroller__horScrollBg.offsetWidth - me._thumbnails_scroller__horScrollFg.offsetWidth);
			me._thumbnails_scroller__content.style.left = -(Math.round((me._thumbnails_scroller.ggContentWidth * (1.0 - me._thumbnails_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnails_scroller.ggContentLeftOffset + 'px';
			me._thumbnails_scroller.ggScrollPosXPercent = (me._thumbnails_scroller__horScrollFg.offsetLeft / me._thumbnails_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnails_scroller.ggScrollByY = function(diffY) {
			if(!me._thumbnails_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnails_scroller.ggVPercentVisible >= 1.0) return;
			me._thumbnails_scroller.ggScrollPosY = (me._thumbnails_scroller__vertScrollFg.offsetTop + diffY);
			me._thumbnails_scroller.ggScrollPosY = Math.max(me._thumbnails_scroller.ggScrollPosY, 0);
			me._thumbnails_scroller.ggScrollPosY = Math.min(me._thumbnails_scroller.ggScrollPosY, me._thumbnails_scroller__vertScrollBg.offsetHeight - me._thumbnails_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_scroller__vertScrollFg.style.top = me._thumbnails_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnails_scroller.ggScrollPosY / (me._thumbnails_scroller__vertScrollBg.offsetHeight - me._thumbnails_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_scroller__content.style.top = -(Math.round((me._thumbnails_scroller.ggContentHeight * (1.0 - me._thumbnails_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_scroller.ggContentTopOffset + 'px';
			me._thumbnails_scroller.ggScrollPosYPercent = (me._thumbnails_scroller__vertScrollFg.offsetTop / me._thumbnails_scroller__vertScrollBg.offsetHeight);
		}
		me._thumbnails_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnails_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnails_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnails_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnails_scroller.ggScrollPosY >= me._thumbnails_scroller__vertScrollBg.offsetHeight - me._thumbnails_scroller__vertScrollFg.offsetHeight)) {
					me._thumbnails_scroller.ggScrollPosY = Math.min(me._thumbnails_scroller.ggScrollPosY, me._thumbnails_scroller__vertScrollBg.offsetHeight - me._thumbnails_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnails_scroller.ggScrollPosY <= 0)) {
					me._thumbnails_scroller.ggScrollPosY = Math.max(me._thumbnails_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnails_scroller__vertScrollFg.style.top = me._thumbnails_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnails_scroller.ggScrollPosY / (me._thumbnails_scroller__vertScrollBg.offsetHeight - me._thumbnails_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_scroller__content.style.top = -(Math.round((me._thumbnails_scroller.ggContentHeight * (1.0 - me._thumbnails_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_scroller.ggContentTopOffset + 'px';
			me._thumbnails_scroller.ggScrollPosYPercent = (me._thumbnails_scroller__vertScrollFg.offsetTop / me._thumbnails_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnails_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnails_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnails_scroller.ggHPercentVisible);
					me._thumbnails_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnails_scroller.clientWidth - (me._thumbnails_scroller.ggVertScrollVisible ? 4 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnails_scroller.clientWidth - (me._thumbnails_scroller.ggVertScrollVisible ? 4 : 0))) * me._thumbnails_scroller.ggHPercentVisible);
					me._thumbnails_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnails_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnails_scroller.ggVPercentVisible);
					me._thumbnails_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnails_scroller.clientHeight - (me._thumbnails_scroller.ggHorScrollVisible ? 4 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnails_scroller.clientHeight - (me._thumbnails_scroller.ggHorScrollVisible ? 4 : 0))) * me._thumbnails_scroller.ggVPercentVisible);
					me._thumbnails_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnails_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnails_scroller.ggDragInertiaX *= 0.65;
				me._thumbnails_scroller.ggDragInertiaY *= 0.65;
				me._thumbnails_scroller.ggScrollByX(me._thumbnails_scroller.ggDragInertiaX);
				me._thumbnails_scroller.ggScrollByY(me._thumbnails_scroller.ggDragInertiaY);
				if (Math.abs(me._thumbnails_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnails_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._thumbnails_scroller__content.onmouseup = null;
			me._thumbnails_scroller__content.onmousemove = null;
			me._thumbnails_scroller__content.ontouchend = null;
			me._thumbnails_scroller__content.ontouchmove = null;
			me._thumbnails_scroller__content.onpointerup = null;
			me._thumbnails_scroller__content.onpointermove = null;
			setTimeout(function() { me._thumbnails_scroller.ggIsDragging = false; }, 100);
		}
		me._thumbnails_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnails_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnails_scroller.ggDragStartY) > 10) me._thumbnails_scroller.ggIsDragging = true;
			var diffX = (eventX - me._thumbnails_scroller.ggDragLastX) * me._thumbnails_scroller.ggHPercentVisible;
			var diffY = (eventY - me._thumbnails_scroller.ggDragLastY) * me._thumbnails_scroller.ggVPercentVisible;
			me._thumbnails_scroller.ggDragInertiaX = -diffX;
			me._thumbnails_scroller.ggDragInertiaY = -diffY;
			me._thumbnails_scroller.ggDragLastX = eventX;
			me._thumbnails_scroller.ggDragLastY = eventY;
			me._thumbnails_scroller.ggScrollByX(-diffX);
			me._thumbnails_scroller.ggScrollByY(-diffY);
		}
		me._thumbnails_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnails_scroller.ggDragLastX = me._thumbnails_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnails_scroller.ggDragLastY = me._thumbnails_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnails_scroller__content.onmouseup = me._thumbnails_scroller__content.mousetouchend;
			me._thumbnails_scroller__content.ontouchend = me._thumbnails_scroller__content.mousetouchend;
			me._thumbnails_scroller__content.onmousemove = me._thumbnails_scroller__content.mousetouchmove;
			me._thumbnails_scroller__content.ontouchmove = me._thumbnails_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnails_scroller__content.onpointerup = me._thumbnails_scroller__content.ontouchend;
				me._thumbnails_scroller__content.onpointermove = me._thumbnails_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnails_scroller__content.mousetouchstart;
		els.ontouchstart = me._thumbnails_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnails_scroller__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnails_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 4px; height: 306px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnails_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 4px; height: 306px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnails_scroller.ggScrollPosY = 0;
		me._thumbnails_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnails_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_scroller.ggDragInertiaY *= 0.65;
					me._thumbnails_scroller.ggScrollByY(me._thumbnails_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbnails_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnails_scroller.ggDragLastY;
				me._thumbnails_scroller.ggDragInertiaY = diffY;
				me._thumbnails_scroller.ggDragLastY = e.clientY;
				me._thumbnails_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnails_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_scroller.ggDragInertiaY *= 0.65;
					me._thumbnails_scroller.ggScrollByY(me._thumbnails_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbnails_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnails_scroller.ggDragLastY;
				me._thumbnails_scroller.ggDragInertiaY = diffY;
				me._thumbnails_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnails_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnails_scroller.ggScrollHeight;
			if (e.offsetY < me._thumbnails_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnails_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnails_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnails_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnails_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnails_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnails_scroller.ggScrollByYSmooth(30 * me._thumbnails_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnails_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 4px; height: 4px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnails_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% -  54px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 34px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._thumbnails_scroller.ggScrollPosY / me._thumbnails_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnails_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 4) || (!me._thumbnails_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnails_scroller__vertScrollBg.style.visibility = 'inherit';
					me._thumbnails_scroller__vertScrollFg.style.visibility = 'inherit';
					me._thumbnails_scroller.ggVertScrollVisible = true;
				} else {
					me._thumbnails_scroller__vertScrollBg.style.visibility = 'hidden';
					me._thumbnails_scroller__vertScrollFg.style.visibility = 'hidden';
					me._thumbnails_scroller.ggVertScrollVisible = false;
				}
				if(me._thumbnails_scroller.ggVertScrollVisible) {
					me._thumbnails_scroller.ggAvailableWidth = me._thumbnails_scroller.clientWidth - 4;
					if (me._thumbnails_scroller.ggHorScrollVisible) {
						me._thumbnails_scroller.ggAvailableHeight = me._thumbnails_scroller.clientHeight - 4;
						me._thumbnails_scroller.ggAvailableHeightWithScale = me._thumbnails_scroller.getBoundingClientRect().height - me._thumbnails_scroller__vertScrollBg.getBoundingClientRect().width;
						me._thumbnails_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnails_scroller.ggAvailableHeight = me._thumbnails_scroller.clientHeight;
						me._thumbnails_scroller.ggAvailableHeightWithScale = me._thumbnails_scroller.getBoundingClientRect().height;
						me._thumbnails_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnails_scroller__vertScrollBg.style.height = me._thumbnails_scroller.ggAvailableHeight + 'px';
					me._thumbnails_scroller.ggVPercentVisible = contentHeight != 0 ? me._thumbnails_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnails_scroller.ggVPercentVisible > 1.0) me._thumbnails_scroller.ggVPercentVisible = 1.0;
					me._thumbnails_scroller.ggScrollHeight =  Math.round(me._thumbnails_scroller__vertScrollBg.offsetHeight * me._thumbnails_scroller.ggVPercentVisible);
					me._thumbnails_scroller__vertScrollFg.style.height = me._thumbnails_scroller.ggScrollHeight + 'px';
					me._thumbnails_scroller.ggScrollPosY = me._thumbnails_scroller.ggScrollPosYPercent * me._thumbnails_scroller.ggAvailableHeight;
					me._thumbnails_scroller.ggScrollPosY = Math.min(me._thumbnails_scroller.ggScrollPosY, me._thumbnails_scroller__vertScrollBg.offsetHeight - me._thumbnails_scroller__vertScrollFg.offsetHeight);
					me._thumbnails_scroller__vertScrollFg.style.top = me._thumbnails_scroller.ggScrollPosY + 'px';
					if (me._thumbnails_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnails_scroller.ggScrollPosY / (me._thumbnails_scroller__vertScrollBg.offsetHeight - me._thumbnails_scroller__vertScrollFg.offsetHeight);
						me._thumbnails_scroller__content.style.top = -(Math.round((me._thumbnails_scroller.ggContentHeight * (1.0 - me._thumbnails_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnails_scroller.ggAvailableWidth = me._thumbnails_scroller.clientWidth;
					me._thumbnails_scroller.ggScrollPosY = 0;
					me._thumbnails_scroller.ggScrollPosYPercent = 0.0;
					me._thumbnails_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnails_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnails_scroller.ggHorScrollVisible || vertScrollWasVisible != me._thumbnails_scroller.ggVertScrollVisible) {
					skin.updateSize(me._thumbnails_scroller);
					me._thumbnails_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnails_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 2;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 128;
		el.ggHeight = 128;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnails_cloner.ggUpdating == true) return;
			me._thumbnails_cloner.ggUpdating = true;
			var el=me._thumbnails_cloner;
			var curNumCols = 0;
			curNumCols = me._thumbnails_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnails_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnails_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnails_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnails_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnails_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnails_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnails_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnails_cloner.ggWidth + 'px';
				parameter.height=me._thumbnails_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnails_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._thumbnails_cloner.ggNodeCount = me._thumbnails_cloner.ggNumFilterPassed;
			me._thumbnails_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnails_cloner.parentNode && me._thumbnails_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnails_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnails_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnails_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnails_cloner.childNodes.length; i++) {
				var child=me._thumbnails_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnails_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnails_cloner.ggUpdate();
		}
		me._thumbnails_scroller__content.appendChild(me._thumbnails_cloner);
		me._thumbnails.appendChild(me._thumbnails_scroller);
		el=me._thumbnails_close=document.createElement('div');
		els=me._thumbnails_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQzLjMxIiB4Mj0iNDMuMzEiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiIHgyPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnails_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxND'+
			'E0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjQzLjMxIi8+CiAgPGxpbmUgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIiB4Mj0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnails_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnails_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_close.onclick=function (e) {
			player.setVariableValue('vis_thumbnails', !player.getVariableValue('vis_thumbnails'));
		}
		me._thumbnails_close.onmouseover=function (e) {
			me._thumbnails_close__img.style.visibility='hidden';
			me._thumbnails_close__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnails_close']=true;
		}
		me._thumbnails_close.onmouseout=function (e) {
			me._thumbnails_close__img.style.visibility='inherit';
			me._thumbnails_close__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnails_close']=false;
		}
		me._thumbnails_close.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails.appendChild(me._thumbnails_close);
		el=me._thumbnails_full=document.createElement('div');
		els=me._thumbnails_full__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzUuNTQgMTYgNDggMTYgNDggMTYgNDggMjguNDYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgxPSIzNS44OS'+
			'IgeTE9IjI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSIxNiIgeDI9IjQ4Ii8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjguNDYgNDggMTYgNDggMTYgNDggMTYgMzUuNTQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgxPSIyOC4xMSIgeTE9IjM2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSI0OCIgeDI9IjE2Ii8+'+
			'CiA8L2c+Cjwvc3ZnPgo=';
		me._thumbnails_full__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnails_full__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBwb2ludHM9IjM1LjU0IDE2IDQ4IDE2IDQ4IDE2IDQ4IDI4LjQ2IiBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4MT0iMzUuODkiIHkxPSIyOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iMTYiIHgyPSI0OCIvPgogIDxwb2x5bGluZSBwb2ludHM9IjI4LjQ2IDQ4IDE2IDQ4IDE2IDQ4IDE2IDM1LjU0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7'+
			'IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4MT0iMjguMTEiIHkxPSIzNiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iNDgiIHgyPSIxNiIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_full__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnails_full";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_full.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_full.onclick=function (e) {
			player.setVariableValue('vis_thumbnails', false);
			player.setVariableValue('vis_thumbnails_full', true);
		}
		me._thumbnails_full.onmouseover=function (e) {
			me._thumbnails_full__img.style.visibility='hidden';
			me._thumbnails_full__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnails_full']=true;
		}
		me._thumbnails_full.onmouseout=function (e) {
			me._thumbnails_full__img.style.visibility='inherit';
			me._thumbnails_full__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnails_full']=false;
		}
		me._thumbnails_full.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails.appendChild(me._thumbnails_full);
		me.divSkin.appendChild(me._thumbnails);
		el=me._thumbnails_fullscreen=document.createElement('div');
		el.ggId="thumbnails_fullscreen";
		el.ggDx=0;
		el.ggDy=-18;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 80px);';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 80px) + 0px) / 2) - 18px);';
		hs+='visibility : hidden;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails_full') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fullscreen.style.transition='';
				if (me._thumbnails_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fullscreen.style.visibility=(Number(me._thumbnails_fullscreen.style.opacity)>0||!me._thumbnails_fullscreen.style.opacity)?'inherit':'hidden';
					me._thumbnails_fullscreen.ggVisible=true;
				}
				else {
					me._thumbnails_fullscreen.style.visibility="hidden";
					me._thumbnails_fullscreen.ggVisible=false;
				}
			}
		}
		me._thumbnails_fullscreen.logicBlock_visible();
		me._thumbnails_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_fs_scroller=document.createElement('div');
		els=me._thumbnails_fs_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 127px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 127px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnails_fs_scroller.ggScrollByX = function(diffX) {
			if(!me._thumbnails_fs_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnails_fs_scroller.ggHPercentVisible >= 1.0) return;
			me._thumbnails_fs_scroller.ggScrollPosX = (me._thumbnails_fs_scroller__horScrollFg.offsetLeft + diffX);
			me._thumbnails_fs_scroller.ggScrollPosX = Math.max(me._thumbnails_fs_scroller.ggScrollPosX, 0);
			me._thumbnails_fs_scroller.ggScrollPosX = Math.min(me._thumbnails_fs_scroller.ggScrollPosX, me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
			me._thumbnails_fs_scroller__horScrollFg.style.left = me._thumbnails_fs_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosX / (me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
			me._thumbnails_fs_scroller__content.style.left = -(Math.round((me._thumbnails_fs_scroller.ggContentWidth * (1.0 - me._thumbnails_fs_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentLeftOffset + 'px';
			me._thumbnails_fs_scroller.ggScrollPosXPercent = (me._thumbnails_fs_scroller__horScrollFg.offsetLeft / me._thumbnails_fs_scroller__horScrollBg.offsetWidth);
		}
		me._thumbnails_fs_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnails_fs_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnails_fs_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnails_fs_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnails_fs_scroller.ggScrollPosX >= me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth)) {
					me._thumbnails_fs_scroller.ggScrollPosX = Math.min(me._thumbnails_fs_scroller.ggScrollPosX, me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnails_fs_scroller.ggScrollPosX <= 0)) {
					me._thumbnails_fs_scroller.ggScrollPosX = Math.max(me._thumbnails_fs_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnails_fs_scroller__horScrollFg.style.left = me._thumbnails_fs_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosX / (me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
			me._thumbnails_fs_scroller__content.style.left = -(Math.round((me._thumbnails_fs_scroller.ggContentWidth * (1.0 - me._thumbnails_fs_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentLeftOffset + 'px';
			me._thumbnails_fs_scroller.ggScrollPosXPercent = (me._thumbnails_fs_scroller__horScrollFg.offsetLeft / me._thumbnails_fs_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnails_fs_scroller.ggScrollByY = function(diffY) {
			if(!me._thumbnails_fs_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnails_fs_scroller.ggVPercentVisible >= 1.0) return;
			me._thumbnails_fs_scroller.ggScrollPosY = (me._thumbnails_fs_scroller__vertScrollFg.offsetTop + diffY);
			me._thumbnails_fs_scroller.ggScrollPosY = Math.max(me._thumbnails_fs_scroller.ggScrollPosY, 0);
			me._thumbnails_fs_scroller.ggScrollPosY = Math.min(me._thumbnails_fs_scroller.ggScrollPosY, me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_fs_scroller__vertScrollFg.style.top = me._thumbnails_fs_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosY / (me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_fs_scroller__content.style.top = -(Math.round((me._thumbnails_fs_scroller.ggContentHeight * (1.0 - me._thumbnails_fs_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentTopOffset + 'px';
			me._thumbnails_fs_scroller.ggScrollPosYPercent = (me._thumbnails_fs_scroller__vertScrollFg.offsetTop / me._thumbnails_fs_scroller__vertScrollBg.offsetHeight);
		}
		me._thumbnails_fs_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnails_fs_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnails_fs_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnails_fs_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnails_fs_scroller.ggScrollPosY >= me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight)) {
					me._thumbnails_fs_scroller.ggScrollPosY = Math.min(me._thumbnails_fs_scroller.ggScrollPosY, me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnails_fs_scroller.ggScrollPosY <= 0)) {
					me._thumbnails_fs_scroller.ggScrollPosY = Math.max(me._thumbnails_fs_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnails_fs_scroller__vertScrollFg.style.top = me._thumbnails_fs_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosY / (me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_fs_scroller__content.style.top = -(Math.round((me._thumbnails_fs_scroller.ggContentHeight * (1.0 - me._thumbnails_fs_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentTopOffset + 'px';
			me._thumbnails_fs_scroller.ggScrollPosYPercent = (me._thumbnails_fs_scroller__vertScrollFg.offsetTop / me._thumbnails_fs_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnails_fs_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnails_fs_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnails_fs_scroller.ggHPercentVisible);
					me._thumbnails_fs_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnails_fs_scroller.clientWidth - (me._thumbnails_fs_scroller.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnails_fs_scroller.clientWidth - (me._thumbnails_fs_scroller.ggVertScrollVisible ? 5 : 0))) * me._thumbnails_fs_scroller.ggHPercentVisible);
					me._thumbnails_fs_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnails_fs_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnails_fs_scroller.ggVPercentVisible);
					me._thumbnails_fs_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnails_fs_scroller.clientHeight - (me._thumbnails_fs_scroller.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnails_fs_scroller.clientHeight - (me._thumbnails_fs_scroller.ggHorScrollVisible ? 5 : 0))) * me._thumbnails_fs_scroller.ggVPercentVisible);
					me._thumbnails_fs_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnails_fs_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnails_fs_scroller.ggDragInertiaX *= 0.65;
				me._thumbnails_fs_scroller.ggDragInertiaY *= 0.65;
				me._thumbnails_fs_scroller.ggScrollByX(me._thumbnails_fs_scroller.ggDragInertiaX);
				me._thumbnails_fs_scroller.ggScrollByY(me._thumbnails_fs_scroller.ggDragInertiaY);
				if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnails_fs_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._thumbnails_fs_scroller__content.onmouseup = null;
			me._thumbnails_fs_scroller__content.onmousemove = null;
			me._thumbnails_fs_scroller__content.ontouchend = null;
			me._thumbnails_fs_scroller__content.ontouchmove = null;
			me._thumbnails_fs_scroller__content.onpointerup = null;
			me._thumbnails_fs_scroller__content.onpointermove = null;
			setTimeout(function() { me._thumbnails_fs_scroller.ggIsDragging = false; }, 100);
		}
		me._thumbnails_fs_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnails_fs_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnails_fs_scroller.ggDragStartY) > 10) me._thumbnails_fs_scroller.ggIsDragging = true;
			var diffX = (eventX - me._thumbnails_fs_scroller.ggDragLastX) * me._thumbnails_fs_scroller.ggHPercentVisible;
			var diffY = (eventY - me._thumbnails_fs_scroller.ggDragLastY) * me._thumbnails_fs_scroller.ggVPercentVisible;
			me._thumbnails_fs_scroller.ggDragInertiaX = -diffX;
			me._thumbnails_fs_scroller.ggDragInertiaY = -diffY;
			me._thumbnails_fs_scroller.ggDragLastX = eventX;
			me._thumbnails_fs_scroller.ggDragLastY = eventY;
			me._thumbnails_fs_scroller.ggScrollByX(-diffX);
			me._thumbnails_fs_scroller.ggScrollByY(-diffY);
		}
		me._thumbnails_fs_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnails_fs_scroller.ggDragLastX = me._thumbnails_fs_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnails_fs_scroller.ggDragLastY = me._thumbnails_fs_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnails_fs_scroller__content.onmouseup = me._thumbnails_fs_scroller__content.mousetouchend;
			me._thumbnails_fs_scroller__content.ontouchend = me._thumbnails_fs_scroller__content.mousetouchend;
			me._thumbnails_fs_scroller__content.onmousemove = me._thumbnails_fs_scroller__content.mousetouchmove;
			me._thumbnails_fs_scroller__content.ontouchmove = me._thumbnails_fs_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnails_fs_scroller__content.onpointerup = me._thumbnails_fs_scroller__content.ontouchend;
				me._thumbnails_fs_scroller__content.onpointermove = me._thumbnails_fs_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnails_fs_scroller__content.mousetouchstart;
		els.ontouchstart = me._thumbnails_fs_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnails_fs_scroller__content.mousetouchstart;
		}
		elHorScrollBg = me._thumbnails_fs_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1160px; height: 5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnails_fs_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1160px; height: 5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnails_fs_scroller.ggScrollPosX = 0;
		me._thumbnails_fs_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnails_fs_scroller.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_fs_scroller.ggDragInertiaX *= 0.65;
					me._thumbnails_fs_scroller.ggScrollByX(me._thumbnails_fs_scroller.ggDragInertiaX);
					if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnails_fs_scroller.ggDragLastX;
				me._thumbnails_fs_scroller.ggDragInertiaX = diffX;
				me._thumbnails_fs_scroller.ggDragLastX = e.clientX;
				me._thumbnails_fs_scroller.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnails_fs_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_fs_scroller.ggDragInertiaX *= 0.65;
					me._thumbnails_fs_scroller.ggScrollByX(me._thumbnails_fs_scroller.ggDragInertiaX);
					if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnails_fs_scroller.ggDragLastX;
				me._thumbnails_fs_scroller.ggDragInertiaX = diffX;
				me._thumbnails_fs_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnails_fs_scroller.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnails_fs_scroller.ggScrollWidth;
			if (e.offsetX < me._thumbnails_fs_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnails_fs_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnails_fs_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnails_fs_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnails_fs_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnails_fs_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnails_fs_scroller.ggScrollByXSmooth(30 * me._thumbnails_fs_scroller.ggHPercentVisible * wheelDelta);
		});
		elVertScrollBg = me._thumbnails_fs_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 549px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnails_fs_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 549px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnails_fs_scroller.ggScrollPosY = 0;
		me._thumbnails_fs_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnails_fs_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_fs_scroller.ggDragInertiaY *= 0.65;
					me._thumbnails_fs_scroller.ggScrollByY(me._thumbnails_fs_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnails_fs_scroller.ggDragLastY;
				me._thumbnails_fs_scroller.ggDragInertiaY = diffY;
				me._thumbnails_fs_scroller.ggDragLastY = e.clientY;
				me._thumbnails_fs_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnails_fs_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_fs_scroller.ggDragInertiaY *= 0.65;
					me._thumbnails_fs_scroller.ggScrollByY(me._thumbnails_fs_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnails_fs_scroller.ggDragLastY;
				me._thumbnails_fs_scroller.ggDragInertiaY = diffY;
				me._thumbnails_fs_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnails_fs_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnails_fs_scroller.ggScrollHeight;
			if (e.offsetY < me._thumbnails_fs_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnails_fs_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnails_fs_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnails_fs_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnails_fs_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnails_fs_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnails_fs_scroller.ggScrollByYSmooth(30 * me._thumbnails_fs_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnails_fs_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnails_fs_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% -  54px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 34px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._thumbnails_fs_scroller.ggScrollPosX / me._thumbnails_fs_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._thumbnails_fs_scroller.ggScrollPosY / me._thumbnails_fs_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnails_fs_scroller__horScrollBg.style.visibility = 'inherit';
					me._thumbnails_fs_scroller__horScrollFg.style.visibility = 'inherit';
					me._thumbnails_fs_scroller.ggHorScrollVisible = true;
				} else {
					me._thumbnails_fs_scroller__horScrollBg.style.visibility = 'hidden';
					me._thumbnails_fs_scroller__horScrollFg.style.visibility = 'hidden';
					me._thumbnails_fs_scroller.ggHorScrollVisible = false;
				}
				if ((me._thumbnails_fs_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 5) || (!me._thumbnails_fs_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnails_fs_scroller__vertScrollBg.style.visibility = 'inherit';
					me._thumbnails_fs_scroller__vertScrollFg.style.visibility = 'inherit';
					me._thumbnails_fs_scroller.ggVertScrollVisible = true;
					if (!me._thumbnails_fs_scroller.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me._thumbnails_fs_scroller__vertScrollBg.getBoundingClientRect().width)) {
						me._thumbnails_fs_scroller__horScrollBg.style.visibility = 'inherit';
						me._thumbnails_fs_scroller__horScrollFg.style.visibility = 'inherit';
						me._thumbnails_fs_scroller.ggHorScrollVisible = true;
					}
				} else {
					me._thumbnails_fs_scroller__vertScrollBg.style.visibility = 'hidden';
					me._thumbnails_fs_scroller__vertScrollFg.style.visibility = 'hidden';
					me._thumbnails_fs_scroller.ggVertScrollVisible = false;
				}
				if(me._thumbnails_fs_scroller.ggHorScrollVisible) {
					me._thumbnails_fs_scroller.ggAvailableHeight = me._thumbnails_fs_scroller.clientHeight - 5;
					if (me._thumbnails_fs_scroller.ggVertScrollVisible) {
						me._thumbnails_fs_scroller.ggAvailableWidth = me._thumbnails_fs_scroller.clientWidth - 5;
						me._thumbnails_fs_scroller.ggAvailableWidthWithScale = me._thumbnails_fs_scroller.getBoundingClientRect().width - me._thumbnails_fs_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnails_fs_scroller.ggAvailableWidth = me._thumbnails_fs_scroller.clientWidth;
						me._thumbnails_fs_scroller.ggAvailableWidthWithScale = me._thumbnails_fs_scroller.getBoundingClientRect().width;
					}
					me._thumbnails_fs_scroller__horScrollBg.style.width = me._thumbnails_fs_scroller.ggAvailableWidth + 'px';
					me._thumbnails_fs_scroller.ggHPercentVisible = contentWidth != 0 ? me._thumbnails_fs_scroller.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnails_fs_scroller.ggHPercentVisible > 1.0) me._thumbnails_fs_scroller.ggHPercentVisible = 1.0;
					me._thumbnails_fs_scroller.ggScrollWidth = Math.round(me._thumbnails_fs_scroller__horScrollBg.offsetWidth * me._thumbnails_fs_scroller.ggHPercentVisible);
					me._thumbnails_fs_scroller__horScrollFg.style.width = me._thumbnails_fs_scroller.ggScrollWidth + 'px';
					me._thumbnails_fs_scroller.ggScrollPosX = me._thumbnails_fs_scroller.ggScrollPosXPercent * me._thumbnails_fs_scroller.ggAvailableWidth;
					me._thumbnails_fs_scroller.ggScrollPosX = Math.min(me._thumbnails_fs_scroller.ggScrollPosX, me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
					me._thumbnails_fs_scroller__horScrollFg.style.left = me._thumbnails_fs_scroller.ggScrollPosX + 'px';
					if (me._thumbnails_fs_scroller.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosX / (me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
						me._thumbnails_fs_scroller__content.style.left = -(Math.round((me._thumbnails_fs_scroller.ggContentWidth * (1.0 - me._thumbnails_fs_scroller.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnails_fs_scroller.ggAvailableHeight = me._thumbnails_fs_scroller.clientHeight;
					me._thumbnails_fs_scroller.ggScrollPosX = 0;
					me._thumbnails_fs_scroller.ggScrollPosXPercent = 0.0;
					me._thumbnails_fs_scroller__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me._thumbnails_fs_scroller.ggVertScrollVisible) {
					me._thumbnails_fs_scroller.ggAvailableWidth = me._thumbnails_fs_scroller.clientWidth - 5;
					if (me._thumbnails_fs_scroller.ggHorScrollVisible) {
						me._thumbnails_fs_scroller.ggAvailableHeight = me._thumbnails_fs_scroller.clientHeight - 5;
						me._thumbnails_fs_scroller.ggAvailableHeightWithScale = me._thumbnails_fs_scroller.getBoundingClientRect().height - me._thumbnails_fs_scroller__vertScrollBg.getBoundingClientRect().width;
						me._thumbnails_fs_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnails_fs_scroller.ggAvailableHeight = me._thumbnails_fs_scroller.clientHeight;
						me._thumbnails_fs_scroller.ggAvailableHeightWithScale = me._thumbnails_fs_scroller.getBoundingClientRect().height;
						me._thumbnails_fs_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnails_fs_scroller__vertScrollBg.style.height = me._thumbnails_fs_scroller.ggAvailableHeight + 'px';
					me._thumbnails_fs_scroller.ggVPercentVisible = contentHeight != 0 ? me._thumbnails_fs_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnails_fs_scroller.ggVPercentVisible > 1.0) me._thumbnails_fs_scroller.ggVPercentVisible = 1.0;
					me._thumbnails_fs_scroller.ggScrollHeight =  Math.round(me._thumbnails_fs_scroller__vertScrollBg.offsetHeight * me._thumbnails_fs_scroller.ggVPercentVisible);
					me._thumbnails_fs_scroller__vertScrollFg.style.height = me._thumbnails_fs_scroller.ggScrollHeight + 'px';
					me._thumbnails_fs_scroller.ggScrollPosY = me._thumbnails_fs_scroller.ggScrollPosYPercent * me._thumbnails_fs_scroller.ggAvailableHeight;
					me._thumbnails_fs_scroller.ggScrollPosY = Math.min(me._thumbnails_fs_scroller.ggScrollPosY, me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
					me._thumbnails_fs_scroller__vertScrollFg.style.top = me._thumbnails_fs_scroller.ggScrollPosY + 'px';
					if (me._thumbnails_fs_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosY / (me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
						me._thumbnails_fs_scroller__content.style.top = -(Math.round((me._thumbnails_fs_scroller.ggContentHeight * (1.0 - me._thumbnails_fs_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnails_fs_scroller.ggAvailableWidth = me._thumbnails_fs_scroller.clientWidth;
					me._thumbnails_fs_scroller.ggScrollPosY = 0;
					me._thumbnails_fs_scroller.ggScrollPosYPercent = 0.0;
					me._thumbnails_fs_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnails_fs_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnails_fs_scroller.ggHorScrollVisible || vertScrollWasVisible != me._thumbnails_fs_scroller.ggVertScrollVisible) {
					skin.updateSize(me._thumbnails_fs_scroller);
					me._thumbnails_fs_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnails_fs_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 128;
		el.ggHeight = 128;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnails_fs_cloner.ggUpdating == true) return;
			me._thumbnails_fs_cloner.ggUpdating = true;
			var el=me._thumbnails_fs_cloner;
			var curNumCols = 0;
			var parentWidth = me._thumbnails_fs_cloner.parentNode.classList.contains('ggskin_subelement') ? (me._thumbnails_fs_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._thumbnails_fs_cloner.parentNode.parentNode.ggAvailableWidth : me._thumbnails_fs_cloner.parentNode.parentNode.clientWidth) : me._thumbnails_fs_cloner.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._thumbnails_fs_cloner.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._thumbnails_fs_cloner.offsetLeft) * me._thumbnails_fs_cloner.ggNumRepeat / 100.0) / me._thumbnails_fs_cloner.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnails_fs_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnails_fs_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnails_fs_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnails_fs_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnails_fs_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnails_fs_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnails_fs_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnails_fs_cloner.ggWidth + 'px';
				parameter.height=me._thumbnails_fs_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnails_fs_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._thumbnails_fs_cloner.ggNodeCount = me._thumbnails_fs_cloner.ggNumFilterPassed;
			me._thumbnails_fs_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnails_fs_cloner.parentNode && me._thumbnails_fs_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnails_fs_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnails_fs_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnails_fs_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnails_fs_cloner.childNodes.length; i++) {
				var child=me._thumbnails_fs_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnails_fs_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnails_fs_cloner.ggUpdate();
		}
		me._thumbnails_fs_scroller__content.appendChild(me._thumbnails_fs_cloner);
		me._thumbnails_fullscreen.appendChild(me._thumbnails_fs_scroller);
		el=me._thumbnails_fs_close=document.createElement('div');
		els=me._thumbnails_fs_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQzLjMxIiB4Mj0iNDMuMzEiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiIHgyPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_fs_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnails_fs_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxND'+
			'E0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjQzLjMxIi8+CiAgPGxpbmUgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIiB4Mj0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnails_fs_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnails_fs_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_close.onclick=function (e) {
			player.setVariableValue('vis_thumbnails_full', false);
		}
		me._thumbnails_fs_close.onmouseover=function (e) {
			me._thumbnails_fs_close__img.style.visibility='hidden';
			me._thumbnails_fs_close__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnails_fs_close']=true;
		}
		me._thumbnails_fs_close.onmouseout=function (e) {
			me._thumbnails_fs_close__img.style.visibility='inherit';
			me._thumbnails_fs_close__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnails_fs_close']=false;
		}
		me._thumbnails_fs_close.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fullscreen.appendChild(me._thumbnails_fs_close);
		el=me._thumbnails_small=document.createElement('div');
		els=me._thumbnails_small__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDggMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW'+
			'5lIHgxPSI0Ny42NSIgeTE9IjE2LjQ1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSIyOC40NiIgeDI9IjM1LjU0Ii8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgNDgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgxPSIxNi4zNSIgeTE9IjQ3LjU1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEw'+
			'O3N0cm9rZS13aWR0aDo0cHgiIHkyPSIzNS41NCIgeDI9IjI4LjQ2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._thumbnails_small__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnails_small__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBwb2ludHM9IjQ4IDI4LjQ2IDM1LjU0IDI4LjQ2IDM1LjU0IDI4LjQ2IDM1LjU0ID'+
			'E2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4MT0iNDcuNjUiIHkxPSIxNi40NSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iMjguNDYiIHgyPSIzNS41NCIvPgogIDxwb2x5bGluZSBwb2ludHM9IjE2IDM1LjU0IDI4LjQ2IDM1LjU0IDI4LjQ2IDM1LjU0IDI4LjQ2IDQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9r'+
			'ZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4MT0iMTYuMzUiIHkxPSI0Ny41NSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iMzUuNTQiIHgyPSIyOC40NiIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_small__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnails_small";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_small.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_small.onclick=function (e) {
			player.setVariableValue('vis_thumbnails_full', false);
			player.setVariableValue('vis_thumbnails', true);
		}
		me._thumbnails_small.onmouseover=function (e) {
			me._thumbnails_small__img.style.visibility='hidden';
			me._thumbnails_small__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnails_small']=true;
		}
		me._thumbnails_small.onmouseout=function (e) {
			me._thumbnails_small__img.style.visibility='inherit';
			me._thumbnails_small__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnails_small']=false;
		}
		me._thumbnails_small.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fullscreen.appendChild(me._thumbnails_small);
		me.divSkin.appendChild(me._thumbnails_fullscreen);
		el=me._video_hs_popup=document.createElement('div');
		el.ggId="video_hs_popup";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 40px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 40px) + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_hs_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_hs_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_hs_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_hs_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_hs_popup.style.transition='';
				if (me._video_hs_popup.ggCurrentLogicStateVisible == 0) {
					me._video_hs_popup.style.visibility=(Number(me._video_hs_popup.style.opacity)>0||!me._video_hs_popup.style.opacity)?'inherit':'hidden';
					me._video_hs_popup.ggVisible=true;
				}
				else {
					me._video_hs_popup.style.visibility="hidden";
					me._video_hs_popup.ggVisible=false;
				}
			}
		}
		me._video_hs_popup.logicBlock_visible();
		me._video_hs_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_hs_popup_close=document.createElement('div');
		els=me._video_hs_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQzLjMxIiB4Mj0iNDMuMzEiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiIHgyPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._video_hs_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_hs_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxND'+
			'E0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjQzLjMxIi8+CiAgPGxpbmUgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIiB4Mj0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_hs_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_hs_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_hs_popup_close.onclick=function (e) {
			player.setVariableValue('vis_video_youtube_hs_popup', false);
			player.setVariableValue('vis_video_vimeo_hs_popup', false);
			player.setVariableValue('vis_video_file_hs_popup', false);
			player.setVariableValue('vis_video_url_hs_popup', false);
		}
		me._video_hs_popup_close.onmouseover=function (e) {
			me._video_hs_popup_close__img.style.visibility='hidden';
			me._video_hs_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['video_hs_popup_close']=true;
		}
		me._video_hs_popup_close.onmouseout=function (e) {
			me._video_hs_popup_close__img.style.visibility='inherit';
			me._video_hs_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['video_hs_popup_close']=false;
		}
		me._video_hs_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_hs_popup_close);
		el=me._video_youtube_hs_popup_vid=document.createElement('div');
		me._video_youtube_hs_popup_vid.seekbars = [];
			me._video_youtube_hs_popup_vid.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._video_youtube_hs_popup_vid.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_youtube_hs_popup_vid.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_youtube_hs_popup_vid.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_youtube_hs_popup_vid.hasChildNodes()) {
				me._video_youtube_hs_popup_vid.removeChild(me._video_youtube_hs_popup_vid.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_youtube_hs_popup_vid.ggVideoNotLoaded == false && me._video_youtube_hs_popup_vid.ggDeactivate && player.isPlaying('video_youtube_hs_popup_vid')) { me._video_youtube_hs_popup_vid.ggDeactivate(); }
				me._video_youtube_hs_popup_vid.ggVideoNotLoaded = true;
				return;
			}
			me._video_youtube_hs_popup_vid.ggVideoNotLoaded = false;
			me._video_youtube_hs_popup_vid__vid=document.createElement('iframe');
			me._video_youtube_hs_popup_vid__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._video_youtube_hs_popup_vid__vid.setAttribute('src', ggVideoUrl);
			me._video_youtube_hs_popup_vid__vid.setAttribute('width', '100%');
			me._video_youtube_hs_popup_vid__vid.setAttribute('height', '100%');
			me._video_youtube_hs_popup_vid__vid.setAttribute('allow', 'autoplay');
			me._video_youtube_hs_popup_vid__vid.setAttribute('allowfullscreen', 'true');
			me._video_youtube_hs_popup_vid__vid.setAttribute('style', 'border:none; ; ;');
			me._video_youtube_hs_popup_vid.appendChild(me._video_youtube_hs_popup_vid__vid);
			me._video_youtube_hs_popup_vid.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._video_youtube_hs_popup_vid.ggYoutubeApiReady();}
		}
		el.ggId="video_youtube_hs_popup_vid";
		el.ggDx=0;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 96px);';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 96px) + 0px) / 2) + 26px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_youtube_hs_popup_vid.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_youtube_hs_popup_vid.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_youtube_hs_popup_vid.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_youtube_hs_popup_vid.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_youtube_hs_popup_vid.style.transition='';
				if (me._video_youtube_hs_popup_vid.ggCurrentLogicStateVisible == 0) {
					me._video_youtube_hs_popup_vid.style.visibility=(Number(me._video_youtube_hs_popup_vid.style.opacity)>0||!me._video_youtube_hs_popup_vid.style.opacity)?'inherit':'hidden';
					if (me._video_youtube_hs_popup_vid.ggVideoNotLoaded) {
						me._video_youtube_hs_popup_vid.ggInitMedia(me._video_youtube_hs_popup_vid.ggVideoSource);
					}
					me._video_youtube_hs_popup_vid.ggVisible=true;
				}
				else {
					me._video_youtube_hs_popup_vid.style.visibility="hidden";
					me._video_youtube_hs_popup_vid.ggInitMedia('');
					me._video_youtube_hs_popup_vid.ggVisible=false;
				}
			}
		}
		me._video_youtube_hs_popup_vid.logicBlock_visible();
		me._video_youtube_hs_popup_vid.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_youtube_hs_popup_vid);
		el=me._video_vimeo_hs_popup_vid=document.createElement('div');
		me._video_vimeo_hs_popup_vid.seekbars = [];
		me._video_vimeo_hs_popup_vid.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_vimeo_hs_popup_vid.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_vimeo_hs_popup_vid.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_vimeo_hs_popup_vid.hasChildNodes()) {
				me._video_vimeo_hs_popup_vid.removeChild(me._video_vimeo_hs_popup_vid.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_vimeo_hs_popup_vid.ggVideoNotLoaded == false && me._video_vimeo_hs_popup_vid.ggDeactivate && player.isPlaying('video_vimeo_hs_popup_vid')) { me._video_vimeo_hs_popup_vid.ggDeactivate(); }
				me._video_vimeo_hs_popup_vid.ggVideoNotLoaded = true;
				return;
			}
			me._video_vimeo_hs_popup_vid.ggVideoNotLoaded = false;
			me._video_vimeo_hs_popup_vid__vid=document.createElement('iframe');
			me._video_vimeo_hs_popup_vid__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._video_vimeo_hs_popup_vid__vid.setAttribute('src', ggVideoUrl);
			me._video_vimeo_hs_popup_vid__vid.setAttribute('width', '100%');
			me._video_vimeo_hs_popup_vid__vid.setAttribute('height', '100%');
			me._video_vimeo_hs_popup_vid__vid.setAttribute('allow', 'autoplay');
			me._video_vimeo_hs_popup_vid__vid.setAttribute('allowfullscreen', 'true');
			me._video_vimeo_hs_popup_vid__vid.setAttribute('style', 'border:none; ; ;');
			me._video_vimeo_hs_popup_vid.appendChild(me._video_vimeo_hs_popup_vid__vid);
			me._video_vimeo_hs_popup_vid.ggVideoSource = media;
		}
		el.ggId="video_vimeo_hs_popup_vid";
		el.ggDx=0;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 96px);';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 96px) + 0px) / 2) + 26px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_vimeo_hs_popup_vid.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_vimeo_hs_popup_vid.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_vimeo_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_vimeo_hs_popup_vid.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_vimeo_hs_popup_vid.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_vimeo_hs_popup_vid.style.transition='';
				if (me._video_vimeo_hs_popup_vid.ggCurrentLogicStateVisible == 0) {
					me._video_vimeo_hs_popup_vid.style.visibility=(Number(me._video_vimeo_hs_popup_vid.style.opacity)>0||!me._video_vimeo_hs_popup_vid.style.opacity)?'inherit':'hidden';
					if (me._video_vimeo_hs_popup_vid.ggVideoNotLoaded) {
						me._video_vimeo_hs_popup_vid.ggInitMedia(me._video_vimeo_hs_popup_vid.ggVideoSource);
					}
					me._video_vimeo_hs_popup_vid.ggVisible=true;
				}
				else {
					me._video_vimeo_hs_popup_vid.style.visibility="hidden";
					me._video_vimeo_hs_popup_vid.ggInitMedia('');
					me._video_vimeo_hs_popup_vid.ggVisible=false;
				}
			}
		}
		me._video_vimeo_hs_popup_vid.logicBlock_visible();
		me._video_vimeo_hs_popup_vid.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_vimeo_hs_popup_vid);
		el=me._video_file_hs_popup_vid=document.createElement('div');
		me._video_file_hs_popup_vid.seekbars = [];
		me._video_file_hs_popup_vid.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_file_hs_popup_vid.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_file_hs_popup_vid.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_file_hs_popup_vid.hasChildNodes()) {
				me._video_file_hs_popup_vid.removeChild(me._video_file_hs_popup_vid.lastChild);
			}
			if (me._video_file_hs_popup_vid__vid) {
				me._video_file_hs_popup_vid__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_file_hs_popup_vid.ggVideoNotLoaded == false && me._video_file_hs_popup_vid.ggDeactivate && player.isPlaying('video_file_hs_popup_vid')) { me._video_file_hs_popup_vid.ggDeactivate(); }
				me._video_file_hs_popup_vid.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_file_hs_popup_vid');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_file_hs_popup_vid.ggVideoNotLoaded = false;
			me._video_file_hs_popup_vid__vid=document.createElement('video');
			me._video_file_hs_popup_vid__vid.className='ggskin ggskin_video';
			me._video_file_hs_popup_vid__vid.setAttribute('width', '100%');
			me._video_file_hs_popup_vid__vid.setAttribute('height', '100%');
			me._video_file_hs_popup_vid__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_file_hs_popup_vid__vid.setAttribute('controlsList', 'nodownload');
			me._video_file_hs_popup_vid__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_file_hs_popup_vid__vid.setAttribute('autoplay', '');
			me._video_file_hs_popup_vid__source=document.createElement('source');
			me._video_file_hs_popup_vid__source.setAttribute('src', media);
			me._video_file_hs_popup_vid__vid.setAttribute('playsinline', 'playsinline');
			me._video_file_hs_popup_vid__vid.setAttribute('style', ';');
			me._video_file_hs_popup_vid__vid.style.outline = 'none';
			me._video_file_hs_popup_vid__vid.appendChild(me._video_file_hs_popup_vid__source);
			me._video_file_hs_popup_vid.appendChild(me._video_file_hs_popup_vid__vid);
			var videoEl = player.registerVideoElement('video_file_hs_popup_vid', me._video_file_hs_popup_vid__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_file_hs_popup_vid', 0.0);
			notifySeekbars();
			if (me._video_file_hs_popup_vid.ggActivate) {
				me._video_file_hs_popup_vid__vid.addEventListener('play', me._video_file_hs_popup_vid.ggActivate);
			}
			if (me._video_file_hs_popup_vid.ggDeactivate) {
				me._video_file_hs_popup_vid__vid.addEventListener('ended', me._video_file_hs_popup_vid.ggDeactivate);
				me._video_file_hs_popup_vid__vid.addEventListener('pause', me._video_file_hs_popup_vid.ggDeactivate);
			}
			me._video_file_hs_popup_vid.ggVideoSource = media;
		}
		el.ggId="video_file_hs_popup_vid";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 150px);';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 82px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_hs_popup_vid.ggIsActive=function() {
			if (me._video_file_hs_popup_vid__vid != null) {
				return (me._video_file_hs_popup_vid__vid.paused == false && me._video_file_hs_popup_vid__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_hs_popup_vid.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_hs_popup_vid.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_hs_popup_vid.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_hs_popup_vid.style.transition='';
				if (me._video_file_hs_popup_vid.ggCurrentLogicStateVisible == 0) {
					me._video_file_hs_popup_vid.style.visibility=(Number(me._video_file_hs_popup_vid.style.opacity)>0||!me._video_file_hs_popup_vid.style.opacity)?'inherit':'hidden';
					if (me._video_file_hs_popup_vid.ggVideoNotLoaded) {
						me._video_file_hs_popup_vid.ggInitMedia(me._video_file_hs_popup_vid.ggVideoSource);
					}
					me._video_file_hs_popup_vid.ggVisible=true;
				}
				else {
					me._video_file_hs_popup_vid.style.visibility="hidden";
					me._video_file_hs_popup_vid.ggInitMedia('');
					me._video_file_hs_popup_vid.ggVisible=false;
				}
			}
		}
		me._video_file_hs_popup_vid.logicBlock_visible();
		me._video_file_hs_popup_vid.onclick=function (e) {
			if (me._video_file_hs_popup_vid.ggApiPlayer) {
				if (me._video_file_hs_popup_vid.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_file_hs_popup_vid.ggApiPlayer.getPlayerState() == 1) {
							me._video_file_hs_popup_vid.ggApiPlayer.pauseVideo();
						} else {
							me._video_file_hs_popup_vid.ggApiPlayer.playVideo();
						}
					};
					if (me._video_file_hs_popup_vid.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_hs_popup_vid.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_hs_popup_vid.ggApiPlayerType == 'vimeo') {
					var promise = me._video_file_hs_popup_vid.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_file_hs_popup_vid.ggApiPlayer.play();
						} else {
							me._video_file_hs_popup_vid.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_file_hs_popup_vid","1");
			}
		}
		me._video_file_hs_popup_vid.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_file_hs_popup_play.style.transition='none';
			} else {
				me._video_file_hs_popup_play.style.transition='all 200ms ease-out 0ms';
			}
			me._video_file_hs_popup_play.style.opacity='0';
			me._video_file_hs_popup_play.style.visibility='hidden';
		}
		me._video_file_hs_popup_vid.ggDeactivate=function () {
			me._video_file_hs_popup_play.style.transition='none';
			me._video_file_hs_popup_play.style.opacity='1';
			me._video_file_hs_popup_play.style.visibility=me._video_file_hs_popup_play.ggVisible?'inherit':'hidden';
		}
		me._video_file_hs_popup_vid.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_file_hs_popup_vid);
		el=me._video_file_hs_popup_play=document.createElement('div');
		els=me._video_file_hs_popup_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjYuNiwyMi45TDQyLjQsMzJsLTE1LjcsOS4xVjIyLjkgTTIyLjYsMTZ2MzJsMjcuNy0xNkwyMi42LDE2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_file_hs_popup_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_hs_popup_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRENEQ0RDt9JiN4ZDsKCS5zdDF7ZmlsbDojMTQxNDE0O30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSByPSIyNyIgY3g9IjMyIiBjeT0iMzIiIGNsYXNzPSJzdDAiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2LjYsMjIuOUw0Mi40LDMybC0xNS43LDkuMVYyMi45IE0yMi42LDE2djMybDI3LjctMTZMMjIuNiwxNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_file_hs_popup_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_file_hs_popup_play";
		el.ggDx=0;
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 4px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_hs_popup_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_hs_popup_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_hs_popup_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_hs_popup_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_hs_popup_play.style.transition='';
				if (me._video_file_hs_popup_play.ggCurrentLogicStateVisible == 0) {
					me._video_file_hs_popup_play.style.visibility=(Number(me._video_file_hs_popup_play.style.opacity)>0||!me._video_file_hs_popup_play.style.opacity)?'inherit':'hidden';
					me._video_file_hs_popup_play.ggVisible=true;
				}
				else {
					me._video_file_hs_popup_play.style.visibility="hidden";
					me._video_file_hs_popup_play.ggVisible=false;
				}
			}
		}
		me._video_file_hs_popup_play.logicBlock_visible();
		me._video_file_hs_popup_play.onclick=function (e) {
			if (me._video_file_hs_popup_vid.ggApiPlayer) {
				if (me._video_file_hs_popup_vid.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_file_hs_popup_vid.ggApiPlayer.playVideo();
					};
					if (me._video_file_hs_popup_vid.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_hs_popup_vid.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_hs_popup_vid.ggApiPlayerType == 'vimeo') {
					me._video_file_hs_popup_vid.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_file_hs_popup_vid","1");
			}
		}
		me._video_file_hs_popup_play.onmouseover=function (e) {
			me._video_file_hs_popup_play__img.style.visibility='hidden';
			me._video_file_hs_popup_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_file_hs_popup_play']=true;
		}
		me._video_file_hs_popup_play.onmouseout=function (e) {
			me._video_file_hs_popup_play__img.style.visibility='inherit';
			me._video_file_hs_popup_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_file_hs_popup_play']=false;
		}
		me._video_file_hs_popup_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_file_hs_popup_play);
		el=me._video_url_hs_popup_vid=document.createElement('div');
		me._video_url_hs_popup_vid.seekbars = [];
		me._video_url_hs_popup_vid.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_url_hs_popup_vid.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_url_hs_popup_vid.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_url_hs_popup_vid.hasChildNodes()) {
				me._video_url_hs_popup_vid.removeChild(me._video_url_hs_popup_vid.lastChild);
			}
			if (me._video_url_hs_popup_vid__vid) {
				me._video_url_hs_popup_vid__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_url_hs_popup_vid.ggVideoNotLoaded == false && me._video_url_hs_popup_vid.ggDeactivate && player.isPlaying('video_url_hs_popup_vid')) { me._video_url_hs_popup_vid.ggDeactivate(); }
				me._video_url_hs_popup_vid.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_url_hs_popup_vid');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_url_hs_popup_vid.ggVideoNotLoaded = false;
			me._video_url_hs_popup_vid__vid=document.createElement('video');
			me._video_url_hs_popup_vid__vid.className='ggskin ggskin_video';
			me._video_url_hs_popup_vid__vid.setAttribute('width', '100%');
			me._video_url_hs_popup_vid__vid.setAttribute('height', '100%');
			me._video_url_hs_popup_vid__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_url_hs_popup_vid__vid.setAttribute('controlsList', 'nodownload');
			me._video_url_hs_popup_vid__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_url_hs_popup_vid__vid.setAttribute('autoplay', '');
			me._video_url_hs_popup_vid__source=document.createElement('source');
			me._video_url_hs_popup_vid__source.setAttribute('src', media);
			me._video_url_hs_popup_vid__vid.setAttribute('playsinline', 'playsinline');
			me._video_url_hs_popup_vid__vid.setAttribute('style', ';');
			me._video_url_hs_popup_vid__vid.style.outline = 'none';
			me._video_url_hs_popup_vid__vid.appendChild(me._video_url_hs_popup_vid__source);
			me._video_url_hs_popup_vid.appendChild(me._video_url_hs_popup_vid__vid);
			var videoEl = player.registerVideoElement('video_url_hs_popup_vid', me._video_url_hs_popup_vid__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_url_hs_popup_vid', 0.0);
			notifySeekbars();
			if (me._video_url_hs_popup_vid.ggActivate) {
				me._video_url_hs_popup_vid__vid.addEventListener('play', me._video_url_hs_popup_vid.ggActivate);
			}
			if (me._video_url_hs_popup_vid.ggDeactivate) {
				me._video_url_hs_popup_vid__vid.addEventListener('ended', me._video_url_hs_popup_vid.ggDeactivate);
				me._video_url_hs_popup_vid__vid.addEventListener('pause', me._video_url_hs_popup_vid.ggDeactivate);
			}
			me._video_url_hs_popup_vid.ggVideoSource = media;
		}
		el.ggId="video_url_hs_popup_vid";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 150px);';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 82px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_hs_popup_vid.ggIsActive=function() {
			if (me._video_url_hs_popup_vid__vid != null) {
				return (me._video_url_hs_popup_vid__vid.paused == false && me._video_url_hs_popup_vid__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_hs_popup_vid.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_hs_popup_vid.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_hs_popup_vid.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_hs_popup_vid.style.transition='';
				if (me._video_url_hs_popup_vid.ggCurrentLogicStateVisible == 0) {
					me._video_url_hs_popup_vid.style.visibility=(Number(me._video_url_hs_popup_vid.style.opacity)>0||!me._video_url_hs_popup_vid.style.opacity)?'inherit':'hidden';
					if (me._video_url_hs_popup_vid.ggVideoNotLoaded) {
						me._video_url_hs_popup_vid.ggInitMedia(me._video_url_hs_popup_vid.ggVideoSource);
					}
					me._video_url_hs_popup_vid.ggVisible=true;
				}
				else {
					me._video_url_hs_popup_vid.style.visibility="hidden";
					me._video_url_hs_popup_vid.ggInitMedia('');
					me._video_url_hs_popup_vid.ggVisible=false;
				}
			}
		}
		me._video_url_hs_popup_vid.logicBlock_visible();
		me._video_url_hs_popup_vid.onclick=function (e) {
			if (me._video_url_hs_popup_vid.ggApiPlayer) {
				if (me._video_url_hs_popup_vid.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_url_hs_popup_vid.ggApiPlayer.getPlayerState() == 1) {
							me._video_url_hs_popup_vid.ggApiPlayer.pauseVideo();
						} else {
							me._video_url_hs_popup_vid.ggApiPlayer.playVideo();
						}
					};
					if (me._video_url_hs_popup_vid.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_hs_popup_vid.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_hs_popup_vid.ggApiPlayerType == 'vimeo') {
					var promise = me._video_url_hs_popup_vid.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_url_hs_popup_vid.ggApiPlayer.play();
						} else {
							me._video_url_hs_popup_vid.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_url_hs_popup_vid","1");
			}
		}
		me._video_url_hs_popup_vid.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_url_hs_popup_play.style.transition='none';
			} else {
				me._video_url_hs_popup_play.style.transition='all 200ms ease-out 0ms';
			}
			me._video_url_hs_popup_play.style.opacity='0';
			me._video_url_hs_popup_play.style.visibility='hidden';
		}
		me._video_url_hs_popup_vid.ggDeactivate=function () {
			me._video_url_hs_popup_play.style.transition='none';
			me._video_url_hs_popup_play.style.opacity='1';
			me._video_url_hs_popup_play.style.visibility=me._video_url_hs_popup_play.ggVisible?'inherit':'hidden';
		}
		me._video_url_hs_popup_vid.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_url_hs_popup_vid);
		el=me._video_url_hs_popup_play=document.createElement('div');
		els=me._video_url_hs_popup_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjYuNiwyMi45TDQyLjQsMzJsLTE1LjcsOS4xVjIyLjkgTTIyLjYsMTZ2MzJsMjcuNy0xNkwyMi42LDE2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_url_hs_popup_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_url_hs_popup_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRENEQ0RDt9JiN4ZDsKCS5zdDF7ZmlsbDojMTQxNDE0O30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSByPSIyNyIgY3g9IjMyIiBjeT0iMzIiIGNsYXNzPSJzdDAiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2LjYsMjIuOUw0Mi40LDMybC0xNS43LDkuMVYyMi45IE0yMi42LDE2djMybDI3LjctMTZMMjIuNiwxNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_url_hs_popup_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_url_hs_popup_play";
		el.ggDx=0;
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 4px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_hs_popup_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_hs_popup_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_hs_popup_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_hs_popup_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_hs_popup_play.style.transition='';
				if (me._video_url_hs_popup_play.ggCurrentLogicStateVisible == 0) {
					me._video_url_hs_popup_play.style.visibility=(Number(me._video_url_hs_popup_play.style.opacity)>0||!me._video_url_hs_popup_play.style.opacity)?'inherit':'hidden';
					me._video_url_hs_popup_play.ggVisible=true;
				}
				else {
					me._video_url_hs_popup_play.style.visibility="hidden";
					me._video_url_hs_popup_play.ggVisible=false;
				}
			}
		}
		me._video_url_hs_popup_play.logicBlock_visible();
		me._video_url_hs_popup_play.onclick=function (e) {
			if (me._video_url_hs_popup_vid.ggApiPlayer) {
				if (me._video_url_hs_popup_vid.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_url_hs_popup_vid.ggApiPlayer.playVideo();
					};
					if (me._video_url_hs_popup_vid.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_hs_popup_vid.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_hs_popup_vid.ggApiPlayerType == 'vimeo') {
					me._video_url_hs_popup_vid.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_url_hs_popup_vid","1");
			}
		}
		me._video_url_hs_popup_play.onmouseover=function (e) {
			me._video_url_hs_popup_play__img.style.visibility='hidden';
			me._video_url_hs_popup_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_url_hs_popup_play']=true;
		}
		me._video_url_hs_popup_play.onmouseout=function (e) {
			me._video_url_hs_popup_play__img.style.visibility='inherit';
			me._video_url_hs_popup_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_url_hs_popup_play']=false;
		}
		me._video_url_hs_popup_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_url_hs_popup_play);
		el=me._video_controller=document.createElement('div');
		el.ggId="video_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 2%;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((360px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 360px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller.style.transition='';
				if (me._video_controller.ggCurrentLogicStateVisible == 0) {
					me._video_controller.style.visibility=(Number(me._video_controller.style.opacity)>0||!me._video_controller.style.opacity)?'inherit':'hidden';
					me._video_controller.ggVisible=true;
				}
				else {
					me._video_controller.style.visibility="hidden";
					me._video_controller.ggVisible=false;
				}
			}
		}
		me._video_controller.logicBlock_visible();
		me._video_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar=document.createElement('div');
		me._video_controller_seekbar__playhead=document.createElement('div');
		me._video_controller_seekbar.mediaEl = null;
		me._video_controller_seekbar.fromBufferSource = false;
		me._video_controller_seekbar.ggMediaId = '';
		el.ggId="video_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((6px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar || e.target == me._video_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar.getBoundingClientRect().x;
							if (me._video_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar.getBoundingClientRect().x;
							if (me._video_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar.onmousedown = me._video_controller_seekbar.ontouchstart = me._video_controller_seekbar.mouseTouchHandling;
		me._video_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar.style.background = '#282828';
				me._video_controller_seekbar.ggConnected = false;
			}
			if (me._video_controller_seekbar.mediaEl != null) {
				if (me._video_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar.mediaEl.removeEventListener('progress', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.mediaEl.removeEventListener('play', me._video_controller_seekbar.ggActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.mediaEl.removeEventListener('ended', me._video_controller_seekbar.ggDeactivate);
						me._video_controller_seekbar.mediaEl.removeEventListener('pause', me._video_controller_seekbar.ggDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.mediaEl.removeEventListener('ended', me._video_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar.mediaEl = player.getMediaObject(me._video_controller_seekbar.ggMediaId);
			if (me._video_controller_seekbar.mediaEl) {
				me._video_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_controller_seekbar.mediaEl != null) {
				me._video_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar__playhead.style.left = '-11px';
				if (me._video_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar.mediaEl.addEventListener('progress', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.addEventListener('canplay', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.mediaEl.addEventListener('play', me._video_controller_seekbar.ggActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.mediaEl.addEventListener('ended', me._video_controller_seekbar.ggDeactivate);
						me._video_controller_seekbar.mediaEl.addEventListener('pause', me._video_controller_seekbar.ggDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.mediaEl.addEventListener('ended', me._video_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_controller_seekbar.ggConnected) return;
			if (me._video_controller_seekbar.mediaEl != null) {
				if (me._video_controller_seekbar.mediaEl.readyState || (me._video_controller_seekbar.fromBufferSource && args && args['id'] == me._video_controller_seekbar.mediaEl.id)) {
					if (me._video_controller_seekbar.fromBufferSource) {
						var percent = me._video_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar.mediaEl.currentTime / me._video_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar.clientWidth - 2 * 3 + 0) * percent);
					playheadpos += -11;
					me._video_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (3 / me._video_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(230,230,230,1) 0%, rgba(230,230,230,1) ' + currPos + '%';
					if (me._video_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(100,100,100,1) ' + currPos +'%, rgba(100,100,100,1) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar.mediaEl.buffered.start(i) / me._video_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar.mediaEl.buffered.end(i) / me._video_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(100,100,100,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(40,40,40,1) ' + currPos + '%, rgba(40,40,40,1) ' + rangeStart + '%';
									gradientString += ', rgba(100,100,100,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(100,100,100,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(40,40,40,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar.appendChild(me._video_controller_seekbar__playhead);
		hs+='background : #282828;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 3px;';
		var hs_playhead = 'height: 27px;';
		hs_playhead += 'width: 27px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -11px;';
		hs_playhead += 'top: -10.5px;';
		hs_playhead += 'border-radius: 14px;';
		hs_playhead += cssPrefix + 'border-radius: 14px;';
		hs_playhead += 'background-color: rgba(74,74,74,1);';
		me._video_controller_seekbar.setAttribute('style', hs);
		me._video_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar.ggIsActive=function() {
			if (me._video_controller_seekbar.mediaEl != null) {
				return (me._video_controller_seekbar.mediaEl.paused == false && me._video_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar.updatePlayback();
		}
		me._video_controller.appendChild(me._video_controller_seekbar);
		me._video_hs_popup.appendChild(me._video_controller);
		el=me._video_hs_popup_title=document.createElement('div');
		els=me._video_hs_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="video_hs_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._video_hs_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._video_hs_popup_title.ggUpdateText();
		el.appendChild(els);
		me._video_hs_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_hs_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_hs_popup_title);
		me.divSkin.appendChild(me._video_hs_popup);
		el=me._pdf_hs_popup=document.createElement('div');
		el.ggId="pdf_hs_popup";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 40px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 40px) + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_hs_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pdf_hs_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_pdf_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_hs_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_hs_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_hs_popup.style.transition='';
				if (me._pdf_hs_popup.ggCurrentLogicStateVisible == 0) {
					me._pdf_hs_popup.style.visibility=(Number(me._pdf_hs_popup.style.opacity)>0||!me._pdf_hs_popup.style.opacity)?'inherit':'hidden';
					me._pdf_hs_popup.ggVisible=true;
				}
				else {
					me._pdf_hs_popup.style.visibility="hidden";
					me._pdf_hs_popup.ggVisible=false;
				}
			}
		}
		me._pdf_hs_popup.logicBlock_visible();
		me._pdf_hs_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._pdf_hs_popup_close=document.createElement('div');
		els=me._pdf_hs_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQzLjMxIiB4Mj0iNDMuMzEiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiIHgyPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._pdf_hs_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pdf_hs_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxND'+
			'E0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjQzLjMxIi8+CiAgPGxpbmUgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIiB4Mj0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._pdf_hs_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="pdf_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_hs_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_hs_popup_close.onclick=function (e) {
			player.setVariableValue('vis_pdf_hs_popup', false);
		}
		me._pdf_hs_popup_close.onmouseover=function (e) {
			me._pdf_hs_popup_close__img.style.visibility='hidden';
			me._pdf_hs_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['pdf_hs_popup_close']=true;
		}
		me._pdf_hs_popup_close.onmouseout=function (e) {
			me._pdf_hs_popup_close__img.style.visibility='inherit';
			me._pdf_hs_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['pdf_hs_popup_close']=false;
		}
		me._pdf_hs_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_hs_popup.appendChild(me._pdf_hs_popup_close);
		el=me._pdf_hs_popup_title=document.createElement('div');
		els=me._pdf_hs_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pdf_hs_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._pdf_hs_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pdf_hs_popup_title.ggUpdateText();
		el.appendChild(els);
		me._pdf_hs_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_hs_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_hs_popup.appendChild(me._pdf_hs_popup_title);
		el=me._pdf_hs_popup_pdf=document.createElement('div');
		els=me._pdf_hs_popup_pdf__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_hs_popup_pdf__pdf.setAttribute('frameborder', '0');
		me._pdf_hs_popup_pdf__pdf.setAttribute('width', '100%');
		me._pdf_hs_popup_pdf__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_hs_popup_pdf.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_hs_popup_pdf.ggPdfSource == file) return;
				me._pdf_hs_popup_pdf.pdfNotLoaded = false;
				me._pdf_hs_popup_pdf.ggPdfSource = file;
				let pdfUrl = (me._pdf_hs_popup_pdf.ggPdfSource.indexOf(':') != -1 || me._pdf_hs_popup_pdf.ggPdfSource.startsWith('/') || me._pdf_hs_popup_pdf.ggPdfSource.startsWith('./')) ? me._pdf_hs_popup_pdf.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_hs_popup_pdf.ggPdfSource;
				me._pdf_hs_popup_pdf__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&tools=true&enablelinks=true#page=1');
				me._pdf_hs_popup_pdf__pdf.style.display = 'block';
			} else {
				me._pdf_hs_popup_pdf__pdf.setAttribute('src', '');
				me._pdf_hs_popup_pdf__pdf.style.display = 'none';
				me._pdf_hs_popup_pdf.pdfNotLoaded = true;
				me._pdf_hs_popup_pdf.ggPdfSource = '';
			}
		}
		me._pdf_hs_popup_pdf.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_hs_popup_pdf__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_hs_popup_pdf.ggInitPdf('');
		el.ggId="pdf_hs_popup_pdf";
		el.ggDx=0;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 96px);';
		hs+='left : calc(50% - ((calc(100% - 48px) + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 96px) + 2px) / 2) + 26px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_hs_popup_pdf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_hs_popup_pdf.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_hs_popup.appendChild(me._pdf_hs_popup_pdf);
		me.divSkin.appendChild(me._pdf_hs_popup);
		el=me._image_hs_popup_fullscreen=document.createElement('div');
		el.ggId="image_hs_popup_fullscreen";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 40px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 40px) + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_hs_popup_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_hs_popup_full') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_hs_popup_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_hs_popup_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_hs_popup_fullscreen.style.transition='';
				if (me._image_hs_popup_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._image_hs_popup_fullscreen.style.visibility=(Number(me._image_hs_popup_fullscreen.style.opacity)>0||!me._image_hs_popup_fullscreen.style.opacity)?'inherit':'hidden';
					me._image_hs_popup_fullscreen.ggVisible=true;
				}
				else {
					me._image_hs_popup_fullscreen.style.visibility="hidden";
					me._image_hs_popup_fullscreen.ggVisible=false;
				}
			}
		}
		me._image_hs_popup_fullscreen.logicBlock_visible();
		me._image_hs_popup_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_hs_popup_fs_description=document.createElement('div');
		els=me._image_hs_popup_fs_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_hs_popup_fs_description";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 16px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._image_hs_popup_fs_description.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('image_hs_description', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_hs_popup_fs_description.ggUpdateText();
		player.addListener('timer', function() {
			me._image_hs_popup_fs_description.ggUpdateText();
		});
		el.appendChild(els);
		me._image_hs_popup_fs_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_hs_popup_fs_description.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup_fullscreen.appendChild(me._image_hs_popup_fs_description);
		el=me._image_hs_popup_fs_img=document.createElement('div');
		els=me._image_hs_popup_fs_img__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_hs_popup_fs_img.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_hs_popup_fs_img.ggSubElement.setAttribute('alt', player._(me._image_hs_popup_fs_img.ggAltText));
			me._image_hs_popup_fs_img.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_hs_popup_fs_img.ggText_untranslated = img;
			me._image_hs_popup_fs_img.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_hs_popup_fs_img.ggSubElement.style.width = '0px';
			me._image_hs_popup_fs_img.ggSubElement.style.height = '0px';
			me._image_hs_popup_fs_img.ggSubElement.src='';
			me._image_hs_popup_fs_img.ggSubElement.src=me._image_hs_popup_fs_img.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_hs_popup_fs_img.ggText != player._(me._image_hs_popup_fs_img.ggText_untranslated)) {
				me._image_hs_popup_fs_img.ggText = player._(me._image_hs_popup_fs_img.ggText_untranslated);
				me._image_hs_popup_fs_img.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_hs_popup_fs_img";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 196px);';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_fs_img.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_hs_popup_fs_img.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('image_hs_description') == ""))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_hs_popup_fs_img.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_hs_popup_fs_img.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_hs_popup_fs_img.style.transition='width 0s, height 0s';
				if (me._image_hs_popup_fs_img.ggCurrentLogicStateSize == 0) {
					me._image_hs_popup_fs_img.style.width='calc(100% - 32px)';
					me._image_hs_popup_fs_img.style.height='calc(100% - 116px)';
					me._image_hs_popup_fs_img.style.left = 'calc(50% - (calc(100% - 32px) / 2))';
					skin.updateSize(me._image_hs_popup_fs_img);
				}
				else {
					me._image_hs_popup_fs_img.style.width='calc(100% - 32px)';
					me._image_hs_popup_fs_img.style.height='calc(100% - 196px)';
					me._image_hs_popup_fs_img.style.left = 'calc(50% - (calc(100% - 32px) / 2))';
					skin.updateSize(me._image_hs_popup_fs_img);
				}
			}
		}
		me._image_hs_popup_fs_img.logicBlock_size();
		me._image_hs_popup_fs_img.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_hs_popup_fs_img.clientWidth;
			var parentHeight = me._image_hs_popup_fs_img.clientHeight;
			var img = me._image_hs_popup_fs_img__img;
			var aspectRatioDiv = me._image_hs_popup_fs_img.clientWidth / me._image_hs_popup_fs_img.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_hs_popup_fs_img.ggScrollbars || currentWidth < me._image_hs_popup_fs_img.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_hs_popup_fs_img.scrollLeft=currentWidth / 2 - me._image_hs_popup_fs_img.clientWidth / 2;
			}
			if (!me._image_hs_popup_fs_img.ggScrollbars || currentHeight < me._image_hs_popup_fs_img.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_hs_popup_fs_img.scrollTop=currentHeight / 2 - me._image_hs_popup_fs_img.clientHeight / 2;
			}
		}
		me._image_hs_popup_fullscreen.appendChild(me._image_hs_popup_fs_img);
		el=me._image_hs_popup_fs_title=document.createElement('div');
		els=me._image_hs_popup_fs_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_hs_popup_fs_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._image_hs_popup_fs_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_hs_popup_fs_title.ggUpdateText();
		el.appendChild(els);
		me._image_hs_popup_fs_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_hs_popup_fs_title.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup_fullscreen.appendChild(me._image_hs_popup_fs_title);
		el=me._image_hs_popup_fs_close=document.createElement('div');
		els=me._image_hs_popup_fs_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQzLjMxIiB4Mj0iNDMuMzEiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiIHgyPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._image_hs_popup_fs_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_hs_popup_fs_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxND'+
			'E0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjQzLjMxIi8+CiAgPGxpbmUgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIiB4Mj0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._image_hs_popup_fs_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="image_hs_popup_fs_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_fs_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_hs_popup_fs_close.onclick=function (e) {
			player.setVariableValue('vis_image_hs_popup_full', false);
		}
		me._image_hs_popup_fs_close.onmouseover=function (e) {
			me._image_hs_popup_fs_close__img.style.visibility='hidden';
			me._image_hs_popup_fs_close__imgo.style.visibility='inherit';
			me.elementMouseOver['image_hs_popup_fs_close']=true;
		}
		me._image_hs_popup_fs_close.onmouseout=function (e) {
			me._image_hs_popup_fs_close__img.style.visibility='inherit';
			me._image_hs_popup_fs_close__imgo.style.visibility='hidden';
			me.elementMouseOver['image_hs_popup_fs_close']=false;
		}
		me._image_hs_popup_fs_close.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup_fullscreen.appendChild(me._image_hs_popup_fs_close);
		me.divSkin.appendChild(me._image_hs_popup_fullscreen);
		el=me._url_hs_popup=document.createElement('div');
		el.ggId="url_hs_popup";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : pointer;';
		hs+='height : calc(80% - 40px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 40px) + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._url_hs_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._url_hs_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._url_hs_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._url_hs_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._url_hs_popup.style.transition='';
				if (me._url_hs_popup.ggCurrentLogicStateVisible == 0) {
					me._url_hs_popup.style.visibility=(Number(me._url_hs_popup.style.opacity)>0||!me._url_hs_popup.style.opacity)?'inherit':'hidden';
					me._url_hs_popup.ggVisible=true;
				}
				else {
					me._url_hs_popup.style.visibility="hidden";
					me._url_hs_popup.ggVisible=false;
				}
			}
		}
		me._url_hs_popup.logicBlock_visible();
		me._url_hs_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._url_hs_popup_close=document.createElement('div');
		els=me._url_hs_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6Ii8+Cjwvc3ZnPgo=';
		me._url_hs_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._url_hs_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxND'+
			'E0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjQzLjMxIi8+CiAgPGxpbmUgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIiB4Mj0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._url_hs_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="url_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._url_hs_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_hs_popup_close.onclick=function (e) {
			player.setVariableValue('vis_url_hs_popup', false);
		}
		me._url_hs_popup_close.onmouseover=function (e) {
			me._url_hs_popup_close__img.style.visibility='hidden';
			me._url_hs_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['url_hs_popup_close']=true;
		}
		me._url_hs_popup_close.onmouseout=function (e) {
			me._url_hs_popup_close__img.style.visibility='inherit';
			me._url_hs_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['url_hs_popup_close']=false;
		}
		me._url_hs_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._url_hs_popup.appendChild(me._url_hs_popup_close);
		el=me._url_hs_popup_title=document.createElement('div');
		els=me._url_hs_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_hs_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(44,44,44,1);';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._url_hs_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("Th\xf4ng tin hi\u1ec7n v\u1eadt", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_hs_popup_title.ggUpdateText();
		el.appendChild(els);
		me._url_hs_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_hs_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._url_hs_popup.appendChild(me._url_hs_popup_title);
		el=me._url_hs_popup_iframe=document.createElement('div');
		els=me._url_hs_popup_iframe__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_hs_popup_iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 25px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._url_hs_popup_iframe.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_hs_popup_iframe.ggUpdateText();
		el.appendChild(els);
		me._url_hs_popup_iframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_hs_popup_iframe.ggUpdatePosition=function (useTransition) {
		}
		me._url_hs_popup.appendChild(me._url_hs_popup_iframe);
		me.divSkin.appendChild(me._url_hs_popup);
		el=me._popup_phone=document.createElement('div');
		el.ggId="popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 16px 8px 8px;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 90px);';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._popup_phone.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._popup_phone.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._popup_phone.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._popup_phone.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._popup_phone.ggCurrentLogicStatePosition == 0) {
					me._popup_phone.style.left='16px';
					me._popup_phone.style.top='50px';
				}
				else {
					me._popup_phone.style.left='16px';
					me._popup_phone.style.top='16px';
				}
			}
		}
		me._popup_phone.logicBlock_position();
		me._popup_phone.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._popup_phone.ggCurrentLogicStateSize != newLogicStateSize) {
				me._popup_phone.ggCurrentLogicStateSize = newLogicStateSize;
				me._popup_phone.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._popup_phone.ggCurrentLogicStateSize == 0) {
					me._popup_phone.style.width='calc(100% - 32px)';
					me._popup_phone.style.height='calc(100% - 110px)';
					skin.updateSize(me._popup_phone);
				}
				else {
					me._popup_phone.style.width='calc(100% - 32px)';
					me._popup_phone.style.height='calc(100% - 90px)';
					skin.updateSize(me._popup_phone);
				}
			}
		}
		me._popup_phone.logicBlock_size();
		me._popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_phone.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._popup_phone.ggCurrentLogicStateVisible == 0) {
					me._popup_phone.style.visibility=(Number(me._popup_phone.style.opacity)>0||!me._popup_phone.style.opacity)?'inherit':'hidden';
					me._popup_phone.ggVisible=true;
				}
				else {
					me._popup_phone.style.visibility="hidden";
					me._popup_phone.ggVisible=false;
				}
			}
		}
		me._popup_phone.logicBlock_visible();
		me._popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		els=me._close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQzLjMxIiB4Mj0iNDMuMzEiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiIHgyPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close_popup_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxND'+
			'E0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjQzLjMxIi8+CiAgPGxpbmUgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIiB4Mj0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._close_popup_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_popup', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
			player.setVariableValue('vis_phone_thumbs', false);
			player.setVariableValue('vis_phone_info', false);
			player.setVariableValue('vis_phone_map', false);
			player.setVariableValue('vis_phone_floorplan', false);
		}
		me._close_popup_phone.onmouseover=function (e) {
			me._close_popup_phone__img.style.visibility='hidden';
			me._close_popup_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['close_popup_phone']=true;
		}
		me._close_popup_phone.onmouseout=function (e) {
			me._close_popup_phone__img.style.visibility='inherit';
			me._close_popup_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['close_popup_phone']=false;
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._close_popup_phone);
		el=me._info_popup_phone=document.createElement('div');
		el.ggId="info_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_phone.style.transition='';
				if (me._info_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._info_popup_phone.style.visibility=(Number(me._info_popup_phone.style.opacity)>0||!me._info_popup_phone.style.opacity)?'inherit':'hidden';
					me._info_popup_phone.ggVisible=true;
				}
				else {
					me._info_popup_phone.style.visibility="hidden";
					me._info_popup_phone.ggVisible=false;
				}
			}
		}
		me._info_popup_phone.logicBlock_visible();
		me._info_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_text_phone=document.createElement('div');
		els=me._info_popup_text_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._info_popup_text_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_text_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_text_phone);
		el=me._info_popup_title_phone=document.createElement('div');
		els=me._info_popup_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_popup_title_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_title_phone);
		me._popup_phone.appendChild(me._info_popup_phone);
		el=me._thumbnail_scroller_phone=document.createElement('div');
		els=me._thumbnail_scroller_phone__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 127px;';
		hs+='left : 50%;';
		hs+='margin-left : -63.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 127px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller_phone.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosX = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller_phone.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller_phone.ggScrollPosX >= me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller_phone.ggScrollPosX <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosY = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller_phone.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller_phone.ggScrollPosY >= me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller_phone.ggScrollPosY <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller_phone.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller_phone__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller_phone.ggDragInertiaX *= 0.65;
				me._thumbnail_scroller_phone.ggDragInertiaY *= 0.65;
				me._thumbnail_scroller_phone.ggScrollByX(me._thumbnail_scroller_phone.ggDragInertiaX);
				me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._thumbnail_scroller_phone__content.onmouseup = null;
			me._thumbnail_scroller_phone__content.onmousemove = null;
			me._thumbnail_scroller_phone__content.ontouchend = null;
			me._thumbnail_scroller_phone__content.ontouchmove = null;
			me._thumbnail_scroller_phone__content.onpointerup = null;
			me._thumbnail_scroller_phone__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_scroller_phone.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller_phone__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller_phone.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller_phone.ggDragStartY) > 10) me._thumbnail_scroller_phone.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller_phone.ggDragLastX) * me._thumbnail_scroller_phone.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller_phone.ggDragLastY) * me._thumbnail_scroller_phone.ggVPercentVisible;
			me._thumbnail_scroller_phone.ggDragInertiaX = -diffX;
			me._thumbnail_scroller_phone.ggDragInertiaY = -diffY;
			me._thumbnail_scroller_phone.ggDragLastX = eventX;
			me._thumbnail_scroller_phone.ggDragLastY = eventY;
			me._thumbnail_scroller_phone.ggScrollByX(-diffX);
			me._thumbnail_scroller_phone.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller_phone__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastX = me._thumbnail_scroller_phone.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller_phone.ggDragLastY = me._thumbnail_scroller_phone.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone__content.onmouseup = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.ontouchend = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.onmousemove = me._thumbnail_scroller_phone__content.mousetouchmove;
			me._thumbnail_scroller_phone__content.ontouchmove = me._thumbnail_scroller_phone__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_scroller_phone__content.onpointerup = me._thumbnail_scroller_phone__content.ontouchend;
				me._thumbnail_scroller_phone__content.onpointermove = me._thumbnail_scroller_phone__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_scroller_phone__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller_phone__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller_phone__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnail_scroller_phone__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller_phone__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller_phone.ggScrollPosY = 0;
		me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.65;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.65;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller_phone.ggScrollByYSmooth(30 * me._thumbnail_scroller_phone.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller_phone__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 70px);';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_thumbs') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_scroller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_scroller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_scroller_phone.style.transition='';
				if (me._thumbnail_scroller_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_scroller_phone.style.visibility=(Number(me._thumbnail_scroller_phone.style.opacity)>0||!me._thumbnail_scroller_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_scroller_phone.ggVisible=true;
				}
				else {
					me._thumbnail_scroller_phone.style.visibility="hidden";
					me._thumbnail_scroller_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_scroller_phone.logicBlock_visible();
		me._thumbnail_scroller_phone.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller_phone.ggScrollPosY / me._thumbnail_scroller_phone.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone.ggVertScrollVisible = true;
				} else {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller_phone.ggVertScrollVisible) {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth - 8;
					if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight - 8;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height - me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller_phone__vertScrollBg.style.height = me._thumbnail_scroller_phone.ggAvailableHeight + 'px';
					me._thumbnail_scroller_phone.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller_phone.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller_phone.ggVPercentVisible > 1.0) me._thumbnail_scroller_phone.ggVPercentVisible = 1.0;
					me._thumbnail_scroller_phone.ggScrollHeight =  Math.round(me._thumbnail_scroller_phone__vertScrollBg.offsetHeight * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone__vertScrollFg.style.height = me._thumbnail_scroller_phone.ggScrollHeight + 'px';
					me._thumbnail_scroller_phone.ggScrollPosY = me._thumbnail_scroller_phone.ggScrollPosYPercent * me._thumbnail_scroller_phone.ggAvailableHeight;
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
					if (me._thumbnail_scroller_phone.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
						me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth;
					me._thumbnail_scroller_phone.ggScrollPosY = 0;
					me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller_phone__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller_phone.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller_phone.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller_phone);
					me._thumbnail_scroller_phone.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 128;
		el.ggHeight = 128;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone.ggUpdating == true) return;
			me._node_cloner_phone.ggUpdating = true;
			var el=me._node_cloner_phone;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone.parentNode.parentNode.clientWidth) : me._node_cloner_phone.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone.offsetLeft) * me._node_cloner_phone.ggNumRepeat / 100.0) / me._node_cloner_phone.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone.ggWidth + 'px';
				parameter.height=me._node_cloner_phone.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone.ggNodeCount = me._node_cloner_phone.ggNumFilterPassed;
			me._node_cloner_phone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone.parentNode && me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nope";
		el.ggId="node_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_phone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone.childNodes.length; i++) {
				var child=me._node_cloner_phone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone.ggUpdate();
		}
		me._thumbnail_scroller_phone__content.appendChild(me._node_cloner_phone);
		me._popup_phone.appendChild(me._thumbnail_scroller_phone);
		el=me._map_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_el_phone.style.transition='';
				if (me._map_el_phone.ggCurrentLogicStateVisible == 0) {
					me._map_el_phone.style.visibility=(Number(me._map_el_phone.style.opacity)>0||!me._map_el_phone.style.opacity)?'inherit':'hidden';
					if (me._map_el_phone.ggMapNotLoaded && me._map_el_phone.ggInitMap) {
						me._map_el_phone.ggInitMap(false);
						me._map_el_phone.ggInitMapMarkers(true);
					}
					me._map_el_phone.ggVisible=true;
				}
				else {
					me._map_el_phone.style.visibility="hidden";
					if (me._map_el_phone.ggClearMap) me._map_el_phone.ggClearMap();
					me._map_el_phone.ggVisible=false;
				}
			}
		}
		me._map_el_phone.logicBlock_visible();
		me._map_el_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._map_el_phone);
		el=me._floorplan_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="floorplan_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_el_phone.style.transition='';
				if (me._floorplan_el_phone.ggCurrentLogicStateVisible == 0) {
					me._floorplan_el_phone.style.visibility=(Number(me._floorplan_el_phone.style.opacity)>0||!me._floorplan_el_phone.style.opacity)?'inherit':'hidden';
					if (me._floorplan_el_phone.ggMapNotLoaded && me._floorplan_el_phone.ggInitMap) {
						me._floorplan_el_phone.ggInitMap(false);
						me._floorplan_el_phone.ggInitMapMarkers(true);
					}
					me._floorplan_el_phone.ggVisible=true;
				}
				else {
					me._floorplan_el_phone.style.visibility="hidden";
					if (me._floorplan_el_phone.ggClearMap) me._floorplan_el_phone.ggClearMap();
					me._floorplan_el_phone.ggVisible=false;
				}
			}
		}
		me._floorplan_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._floorplan_el_phone);
		el=me._image_popup_phone=document.createElement('div');
		els=me._image_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_popup_phone.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_popup_phone.ggSubElement.setAttribute('alt', player._(me._image_popup_phone.ggAltText));
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_popup_phone.ggText_untranslated = img;
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_popup_phone.ggSubElement.style.width = '0px';
			me._image_popup_phone.ggSubElement.style.height = '0px';
			me._image_popup_phone.ggSubElement.src='';
			me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_popup_phone.ggText != player._(me._image_popup_phone.ggText_untranslated)) {
				me._image_popup_phone.ggText = player._(me._image_popup_phone.ggText_untranslated);
				me._image_popup_phone.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_image') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_phone.style.transition='';
				if (me._image_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._image_popup_phone.style.visibility=(Number(me._image_popup_phone.style.opacity)>0||!me._image_popup_phone.style.opacity)?'inherit':'hidden';
					me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
					me._image_popup_phone.ggVisible=true;
				}
				else {
					me._image_popup_phone.style.visibility="hidden";
					me._image_popup_phone.ggSubElement.src='';
					me._image_popup_phone.ggVisible=false;
				}
			}
		}
		me._image_popup_phone.logicBlock_visible();
		me._image_popup_phone.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_popup_phone.clientWidth;
			var parentHeight = me._image_popup_phone.clientHeight;
			var img = me._image_popup_phone__img;
			var aspectRatioDiv = me._image_popup_phone.clientWidth / me._image_popup_phone.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_popup_phone.ggScrollbars || currentWidth < me._image_popup_phone.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_popup_phone.scrollLeft=currentWidth / 2 - me._image_popup_phone.clientWidth / 2;
			}
			if (!me._image_popup_phone.ggScrollbars || currentHeight < me._image_popup_phone.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_popup_phone.scrollTop=currentHeight / 2 - me._image_popup_phone.clientHeight / 2;
			}
		}
		me._popup_phone.appendChild(me._image_popup_phone);
		el=me._pdf_popup_phone=document.createElement('div');
		els=me._pdf_popup_phone__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_popup_phone__pdf.setAttribute('frameborder', '0');
		me._pdf_popup_phone__pdf.setAttribute('width', '100%');
		me._pdf_popup_phone__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_popup_phone.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_popup_phone.ggPdfSource == file) return;
				me._pdf_popup_phone.pdfNotLoaded = false;
				me._pdf_popup_phone.ggPdfSource = file;
				let pdfUrl = (me._pdf_popup_phone.ggPdfSource.indexOf(':') != -1 || me._pdf_popup_phone.ggPdfSource.startsWith('/') || me._pdf_popup_phone.ggPdfSource.startsWith('./')) ? me._pdf_popup_phone.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_popup_phone.ggPdfSource;
				me._pdf_popup_phone__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&tools=true&enablelinks=true#page=1');
				me._pdf_popup_phone__pdf.style.display = 'block';
			} else {
				me._pdf_popup_phone__pdf.setAttribute('src', '');
				me._pdf_popup_phone__pdf.style.display = 'none';
				me._pdf_popup_phone.pdfNotLoaded = true;
				me._pdf_popup_phone.ggPdfSource = '';
			}
		}
		me._pdf_popup_phone.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_popup_phone.ggInitPdf('');
		el.ggId="pdf_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_pdf') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup_phone.style.transition='';
				if (me._pdf_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup_phone.style.visibility=(Number(me._pdf_popup_phone.style.opacity)>0||!me._pdf_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._pdf_popup_phone.ggPdfNotLoaded) {
						me._pdf_popup_phone.ggInitPdf(me._pdf_popup_phone.ggPdfSource);
					}
					me._pdf_popup_phone.ggVisible=true;
				}
				else {
					me._pdf_popup_phone.style.visibility="hidden";
					if (me._pdf_popup_phone.ggInitPdf) me._pdf_popup_phone.ggInitPdf();
					me._pdf_popup_phone.ggVisible=false;
				}
			}
		}
		me._pdf_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._pdf_popup_phone);
		el=me._video_controller_phone=document.createElement('div');
		el.ggId="video_controller_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((clamp(200px, calc(100% - 50px), 350px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : clamp(200px, calc(100% - 50px), 350px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller_phone.style.transition='';
				if (me._video_controller_phone.ggCurrentLogicStateVisible == 0) {
					me._video_controller_phone.style.visibility=(Number(me._video_controller_phone.style.opacity)>0||!me._video_controller_phone.style.opacity)?'inherit':'hidden';
					me._video_controller_phone.ggVisible=true;
				}
				else {
					me._video_controller_phone.style.visibility="hidden";
					me._video_controller_phone.ggVisible=false;
				}
			}
		}
		me._video_controller_phone.logicBlock_visible();
		me._video_controller_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar_phone=document.createElement('div');
		me._video_controller_seekbar_phone__playhead=document.createElement('div');
		me._video_controller_seekbar_phone.mediaEl = null;
		me._video_controller_seekbar_phone.fromBufferSource = false;
		me._video_controller_seekbar_phone.ggMediaId = '';
		el.ggId="video_controller_seekbar_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((6px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar_phone.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar_phone.mediaEl != null) {
					if (e.target == me._video_controller_seekbar_phone) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar_phone || e.target == me._video_controller_seekbar_phone__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar_phone.onmousedown = me._video_controller_seekbar_phone.ontouchstart = me._video_controller_seekbar_phone.mouseTouchHandling;
		me._video_controller_seekbar_phone.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar_phone.style.background = '#282828';
				me._video_controller_seekbar_phone.ggConnected = false;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar_phone.mediaEl = player.getMediaObject(me._video_controller_seekbar_phone.ggMediaId);
			if (me._video_controller_seekbar_phone.mediaEl) {
				me._video_controller_seekbar_phone.fromBufferSource = false;
			} else {
				me._video_controller_seekbar_phone.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar_phone.fromBufferSource = true;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar_phone__playhead.style.left = '-11px';
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.addEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.addEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
				me._video_controller_seekbar_phone.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar_phone.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar_phone.updatePlayback = function(args) {
			if (!me._video_controller_seekbar_phone.ggConnected) return;
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.mediaEl.readyState || (me._video_controller_seekbar_phone.fromBufferSource && args && args['id'] == me._video_controller_seekbar_phone.mediaEl.id)) {
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						var percent = me._video_controller_seekbar_phone.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar_phone.mediaEl.currentTime / me._video_controller_seekbar_phone.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar_phone.clientWidth - 2 * 3 + 0) * percent);
					playheadpos += -11;
					me._video_controller_seekbar_phone__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (3 / me._video_controller_seekbar_phone.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(230,230,230,1) 0%, rgba(230,230,230,1) ' + currPos + '%';
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						gradientString += ', rgba(100,100,100,1) ' + currPos +'%, rgba(100,100,100,1) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar_phone.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar_phone.mediaEl.buffered.start(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar_phone.mediaEl.buffered.end(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(100,100,100,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(40,40,40,1) ' + currPos + '%, rgba(40,40,40,1) ' + rangeStart + '%';
									gradientString += ', rgba(100,100,100,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(100,100,100,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(40,40,40,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar_phone.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar_phone.appendChild(me._video_controller_seekbar_phone__playhead);
		hs+='background : #282828;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 3px;';
		var hs_playhead = 'height: 27px;';
		hs_playhead += 'width: 27px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -11px;';
		hs_playhead += 'top: -10.5px;';
		hs_playhead += 'border-radius: 14px;';
		hs_playhead += cssPrefix + 'border-radius: 14px;';
		hs_playhead += 'background-color: rgba(74,74,74,1);';
		me._video_controller_seekbar_phone.setAttribute('style', hs);
		me._video_controller_seekbar_phone__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar_phone.ggIsActive=function() {
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				return (me._video_controller_seekbar_phone.mediaEl.paused == false && me._video_controller_seekbar_phone.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_seekbar_phone.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar_phone.updatePlayback();
		}
		me._video_controller_phone.appendChild(me._video_controller_seekbar_phone);
		me._popup_phone.appendChild(me._video_controller_phone);
		el=me._youtube_popup_phone=document.createElement('div');
		me._youtube_popup_phone.seekbars = [];
			me._youtube_popup_phone.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._youtube_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._youtube_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._youtube_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._youtube_popup_phone.hasChildNodes()) {
				me._youtube_popup_phone.removeChild(me._youtube_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._youtube_popup_phone.ggVideoNotLoaded == false && me._youtube_popup_phone.ggDeactivate && player.isPlaying('youtube_popup_phone')) { me._youtube_popup_phone.ggDeactivate(); }
				me._youtube_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._youtube_popup_phone.ggVideoNotLoaded = false;
			me._youtube_popup_phone__vid=document.createElement('iframe');
			me._youtube_popup_phone__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._youtube_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._youtube_popup_phone__vid.setAttribute('width', '100%');
			me._youtube_popup_phone__vid.setAttribute('height', '100%');
			me._youtube_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._youtube_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._youtube_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._youtube_popup_phone.appendChild(me._youtube_popup_phone__vid);
			me._youtube_popup_phone.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._youtube_popup_phone.ggYoutubeApiReady();}
		}
		el.ggId="youtube_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._youtube_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._youtube_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._youtube_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._youtube_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._youtube_popup_phone.style.transition='';
				if (me._youtube_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._youtube_popup_phone.style.visibility=(Number(me._youtube_popup_phone.style.opacity)>0||!me._youtube_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._youtube_popup_phone.ggVideoNotLoaded) {
						me._youtube_popup_phone.ggInitMedia(me._youtube_popup_phone.ggVideoSource);
					}
					me._youtube_popup_phone.ggVisible=true;
				}
				else {
					me._youtube_popup_phone.style.visibility="hidden";
					me._youtube_popup_phone.ggInitMedia('');
					me._youtube_popup_phone.ggVisible=false;
				}
			}
		}
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._youtube_popup_phone);
		el=me._vimeo_popup_phone=document.createElement('div');
		me._vimeo_popup_phone.seekbars = [];
		me._vimeo_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._vimeo_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._vimeo_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._vimeo_popup_phone.hasChildNodes()) {
				me._vimeo_popup_phone.removeChild(me._vimeo_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._vimeo_popup_phone.ggVideoNotLoaded == false && me._vimeo_popup_phone.ggDeactivate && player.isPlaying('vimeo_popup_phone')) { me._vimeo_popup_phone.ggDeactivate(); }
				me._vimeo_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._vimeo_popup_phone.ggVideoNotLoaded = false;
			me._vimeo_popup_phone__vid=document.createElement('iframe');
			me._vimeo_popup_phone__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._vimeo_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._vimeo_popup_phone__vid.setAttribute('width', '100%');
			me._vimeo_popup_phone__vid.setAttribute('height', '100%');
			me._vimeo_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._vimeo_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._vimeo_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._vimeo_popup_phone.appendChild(me._vimeo_popup_phone__vid);
			me._vimeo_popup_phone.ggVideoSource = media;
		}
		el.ggId="vimeo_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vimeo_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vimeo_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vimeo_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vimeo_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vimeo_popup_phone.style.transition='';
				if (me._vimeo_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._vimeo_popup_phone.style.visibility=(Number(me._vimeo_popup_phone.style.opacity)>0||!me._vimeo_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._vimeo_popup_phone.ggVideoNotLoaded) {
						me._vimeo_popup_phone.ggInitMedia(me._vimeo_popup_phone.ggVideoSource);
					}
					me._vimeo_popup_phone.ggVisible=true;
				}
				else {
					me._vimeo_popup_phone.style.visibility="hidden";
					me._vimeo_popup_phone.ggInitMedia('');
					me._vimeo_popup_phone.ggVisible=false;
				}
			}
		}
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._vimeo_popup_phone);
		el=me._video_file_popup_phone=document.createElement('div');
		me._video_file_popup_phone.seekbars = [];
		me._video_file_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_file_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_file_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_file_popup_phone.hasChildNodes()) {
				me._video_file_popup_phone.removeChild(me._video_file_popup_phone.lastChild);
			}
			if (me._video_file_popup_phone__vid) {
				me._video_file_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_file_popup_phone.ggVideoNotLoaded == false && me._video_file_popup_phone.ggDeactivate && player.isPlaying('video_file_popup_phone')) { me._video_file_popup_phone.ggDeactivate(); }
				me._video_file_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_file_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_file_popup_phone.ggVideoNotLoaded = false;
			me._video_file_popup_phone__vid=document.createElement('video');
			me._video_file_popup_phone__vid.className='ggskin ggskin_video';
			me._video_file_popup_phone__vid.setAttribute('width', '100%');
			me._video_file_popup_phone__vid.setAttribute('height', '100%');
			me._video_file_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_file_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_file_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_file_popup_phone__vid.setAttribute('autoplay', '');
			me._video_file_popup_phone__source=document.createElement('source');
			me._video_file_popup_phone__source.setAttribute('src', media);
			me._video_file_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_file_popup_phone__vid.setAttribute('style', ';');
			me._video_file_popup_phone__vid.style.outline = 'none';
			me._video_file_popup_phone__vid.appendChild(me._video_file_popup_phone__source);
			me._video_file_popup_phone.appendChild(me._video_file_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_file_popup_phone', me._video_file_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_file_popup_phone', 0.0);
			notifySeekbars();
			if (me._video_file_popup_phone.ggActivate) {
				me._video_file_popup_phone__vid.addEventListener('play', me._video_file_popup_phone.ggActivate);
			}
			if (me._video_file_popup_phone.ggDeactivate) {
				me._video_file_popup_phone__vid.addEventListener('ended', me._video_file_popup_phone.ggDeactivate);
				me._video_file_popup_phone__vid.addEventListener('pause', me._video_file_popup_phone.ggDeactivate);
			}
			me._video_file_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_file_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 100px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone.ggIsActive=function() {
			if (me._video_file_popup_phone__vid != null) {
				return (me._video_file_popup_phone__vid.paused == false && me._video_file_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone.style.transition='';
				if (me._video_file_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone.style.visibility=(Number(me._video_file_popup_phone.style.opacity)>0||!me._video_file_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_file_popup_phone.ggVideoNotLoaded) {
						me._video_file_popup_phone.ggInitMedia(me._video_file_popup_phone.ggVideoSource);
					}
					me._video_file_popup_phone.ggVisible=true;
				}
				else {
					me._video_file_popup_phone.style.visibility="hidden";
					me._video_file_popup_phone.ggInitMedia('');
					me._video_file_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_file_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_file_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_file_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_file_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_file_popup_phone.ggApiPlayer.play();
						} else {
							me._video_file_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone.ggActivate=function () {
			me._video_file_popup_phone_play.style.transition='none';
			me._video_file_popup_phone_play.style.opacity='0';
			me._video_file_popup_phone_play.style.visibility='hidden';
		}
		me._video_file_popup_phone.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._video_file_popup_phone_play.style.transition='none';
			} else {
				me._video_file_popup_phone_play.style.transition='all 200ms ease-out 0ms';
			}
			me._video_file_popup_phone_play.style.opacity='1';
			me._video_file_popup_phone_play.style.visibility=me._video_file_popup_phone_play.ggVisible?'inherit':'hidden';
		}
		me._video_file_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._video_file_popup_phone);
		el=me._video_file_popup_phone_play=document.createElement('div');
		els=me._video_file_popup_phone_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjYuNiwyMi45TDQyLjQsMzJsLTE1LjcsOS4xVjIyLjkgTTIyLjYsMTZ2MzJsMjcuNy0xNkwyMi42LDE2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_file_popup_phone_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_popup_phone_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRENEQ0RDt9JiN4ZDsKCS5zdDF7ZmlsbDojMTQxNDE0O30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSByPSIyNyIgY3g9IjMyIiBjeT0iMzIiIGNsYXNzPSJzdDAiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2LjYsMjIuOUw0Mi40LDMybC0xNS43LDkuMVYyMi45IE0yMi42LDE2djMybDI3LjctMTZMMjIuNiwxNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_file_popup_phone_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_file_popup_phone_play";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone_play.style.transition='';
				if (me._video_file_popup_phone_play.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone_play.style.visibility=(Number(me._video_file_popup_phone_play.style.opacity)>0||!me._video_file_popup_phone_play.style.opacity)?'inherit':'hidden';
					me._video_file_popup_phone_play.ggVisible=true;
				}
				else {
					me._video_file_popup_phone_play.style.visibility="hidden";
					me._video_file_popup_phone_play.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone_play.logicBlock_visible();
		me._video_file_popup_phone_play.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_file_popup_phone.ggApiPlayer.playVideo();
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					me._video_file_popup_phone.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone_play.onmouseover=function (e) {
			me._video_file_popup_phone_play__img.style.visibility='hidden';
			me._video_file_popup_phone_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_file_popup_phone_play']=true;
		}
		me._video_file_popup_phone_play.onmouseout=function (e) {
			me._video_file_popup_phone_play__img.style.visibility='inherit';
			me._video_file_popup_phone_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_file_popup_phone_play']=false;
		}
		me._video_file_popup_phone_play.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._video_file_popup_phone_play);
		el=me._video_url_popup_phone=document.createElement('div');
		me._video_url_popup_phone.seekbars = [];
		me._video_url_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_url_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_url_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_url_popup_phone.hasChildNodes()) {
				me._video_url_popup_phone.removeChild(me._video_url_popup_phone.lastChild);
			}
			if (me._video_url_popup_phone__vid) {
				me._video_url_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_url_popup_phone.ggVideoNotLoaded == false && me._video_url_popup_phone.ggDeactivate && player.isPlaying('video_url_popup_phone')) { me._video_url_popup_phone.ggDeactivate(); }
				me._video_url_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_url_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_url_popup_phone.ggVideoNotLoaded = false;
			me._video_url_popup_phone__vid=document.createElement('video');
			me._video_url_popup_phone__vid.className='ggskin ggskin_video';
			me._video_url_popup_phone__vid.setAttribute('width', '100%');
			me._video_url_popup_phone__vid.setAttribute('height', '100%');
			me._video_url_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_url_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_url_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_url_popup_phone__vid.setAttribute('autoplay', '');
			me._video_url_popup_phone__source=document.createElement('source');
			me._video_url_popup_phone__source.setAttribute('src', media);
			me._video_url_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_url_popup_phone__vid.setAttribute('style', ';');
			me._video_url_popup_phone__vid.style.outline = 'none';
			me._video_url_popup_phone__vid.appendChild(me._video_url_popup_phone__source);
			me._video_url_popup_phone.appendChild(me._video_url_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_url_popup_phone', me._video_url_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_url_popup_phone', 0.0);
			notifySeekbars();
			if (me._video_url_popup_phone.ggActivate) {
				me._video_url_popup_phone__vid.addEventListener('play', me._video_url_popup_phone.ggActivate);
			}
			if (me._video_url_popup_phone.ggDeactivate) {
				me._video_url_popup_phone__vid.addEventListener('ended', me._video_url_popup_phone.ggDeactivate);
				me._video_url_popup_phone__vid.addEventListener('pause', me._video_url_popup_phone.ggDeactivate);
			}
			me._video_url_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_url_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 100px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone.ggIsActive=function() {
			if (me._video_url_popup_phone__vid != null) {
				return (me._video_url_popup_phone__vid.paused == false && me._video_url_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone.style.transition='';
				if (me._video_url_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone.style.visibility=(Number(me._video_url_popup_phone.style.opacity)>0||!me._video_url_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_url_popup_phone.ggVideoNotLoaded) {
						me._video_url_popup_phone.ggInitMedia(me._video_url_popup_phone.ggVideoSource);
					}
					me._video_url_popup_phone.ggVisible=true;
				}
				else {
					me._video_url_popup_phone.style.visibility="hidden";
					me._video_url_popup_phone.ggInitMedia('');
					me._video_url_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_url_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_url_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_url_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_url_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_url_popup_phone.ggApiPlayer.play();
						} else {
							me._video_url_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone.ggActivate=function () {
			me._video_url_popup_phone_play.style.transition='none';
			me._video_url_popup_phone_play.style.opacity='0';
			me._video_url_popup_phone_play.style.visibility='hidden';
		}
		me._video_url_popup_phone.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._video_url_popup_phone_play.style.transition='none';
			} else {
				me._video_url_popup_phone_play.style.transition='all 200ms ease-out 0ms';
			}
			me._video_url_popup_phone_play.style.opacity='1';
			me._video_url_popup_phone_play.style.visibility=me._video_url_popup_phone_play.ggVisible?'inherit':'hidden';
		}
		me._video_url_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._video_url_popup_phone);
		el=me._video_url_popup_phone_play=document.createElement('div');
		els=me._video_url_popup_phone_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjYuNiwyMi45TDQyLjQsMzJsLTE1LjcsOS4xVjIyLjkgTTIyLjYsMTZ2MzJsMjcuNy0xNkwyMi42LDE2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_url_popup_phone_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_url_popup_phone_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRENEQ0RDt9JiN4ZDsKCS5zdDF7ZmlsbDojMTQxNDE0O30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSByPSIyNyIgY3g9IjMyIiBjeT0iMzIiIGNsYXNzPSJzdDAiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2LjYsMjIuOUw0Mi40LDMybC0xNS43LDkuMVYyMi45IE0yMi42LDE2djMybDI3LjctMTZMMjIuNiwxNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_url_popup_phone_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_url_popup_phone_play";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone_play.style.transition='';
				if (me._video_url_popup_phone_play.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone_play.style.visibility=(Number(me._video_url_popup_phone_play.style.opacity)>0||!me._video_url_popup_phone_play.style.opacity)?'inherit':'hidden';
					me._video_url_popup_phone_play.ggVisible=true;
				}
				else {
					me._video_url_popup_phone_play.style.visibility="hidden";
					me._video_url_popup_phone_play.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone_play.logicBlock_visible();
		me._video_url_popup_phone_play.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_url_popup_phone.ggApiPlayer.playVideo();
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					me._video_url_popup_phone.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone_play.onmouseover=function (e) {
			me._video_url_popup_phone_play__img.style.visibility='hidden';
			me._video_url_popup_phone_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_url_popup_phone_play']=true;
		}
		me._video_url_popup_phone_play.onmouseout=function (e) {
			me._video_url_popup_phone_play__img.style.visibility='inherit';
			me._video_url_popup_phone_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_url_popup_phone_play']=false;
		}
		me._video_url_popup_phone_play.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._video_url_popup_phone_play);
		me.divSkin.appendChild(me._popup_phone);
		el=me._local_fonts=document.createElement('div');
		el.ggId="local_fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._local_fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._local_fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._local_fonts);
		el=me._controls_center=document.createElement('div');
		el.ggId="controls_center";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((170px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 170px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_center.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controls_center.ggUpdatePosition=function (useTransition) {
		}
		el=me._controls_center_bg=document.createElement('div');
		el.ggId="controls_center_bg";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_center_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controls_center_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._next=document.createElement('div');
		els=me._next__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEzLjA1OTA1IiB2aWV3Qm94PSIwIDAgNTEzLjA1OTA1IDUwMC44OTU3MSIgaGVpZ2h0PSI1MDAuODk1NzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj4KICA8ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPgogICA8cG9seWdvbiBwb2ludHM9IjQ4Ljg4MSA0NzIuNjE3IDI4LjI4MSA0NTEuMTE3IDIzNy41MyAyNTAuNjE3IDI4LjI4MSA1MC4xMDcgNDguODgxIDI4LjYxNyAyODAuNTYxIDI1MC42MTcgNDguODgxIDQ3Mi42MTciIHN0eWxlPSJmaWxsOiNlMjMwMzg7c3'+
			'Ryb2tlOiNlMjMwMzg7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjQwcHg7IHN0cm9rZS1vcGFjaXR5OjE7IGZpbGwtb3BhY2l0eToxIi8+CiAgIDxwb2x5Z29uIHBvaW50cz0iMjUyLjQ3MiA0NzIuMjc1IDIzMS44NzIgNDUwLjc3NSA0NDEuMTIyIDI1MC4yNzUgMjMxLjg3MiA0OS43NjUgMjUyLjQ3MiAyOC4yNzUgNDg0LjE1MiAyNTAuMjc1IDI1Mi40NzIgNDcyLjI3NSIgc3R5bGU9ImZpbGw6I2UyMzAzODtzdHJva2U6I2UyMzAzODtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NDBweDsgc3Ryb2tlLW9wYWNpdHk6MTsgZmlsbC1vcGFjaXR5OjEiLz4KICA8L2c+'+
			'CiA8L2c+Cjwvc3ZnPgo=';
		me._next__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="next";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._next.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['next'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._next.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._next.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._next.style.transition='transform 0s';
				if (me._next.ggCurrentLogicStateScaling == 0) {
					me._next.ggParameter.sx = 1.2;
					me._next.ggParameter.sy = 1.2;
					me._next.style.transform=parameterToTransform(me._next.ggParameter);
					skin.updateSize(me._next);
				}
				else {
					me._next.ggParameter.sx = 1;
					me._next.ggParameter.sy = 1;
					me._next.style.transform=parameterToTransform(me._next.ggParameter);
					skin.updateSize(me._next);
				}
			}
		}
		me._next.logicBlock_scaling();
		me._next.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._next.onmouseover=function (e) {
			me.elementMouseOver['next']=true;
			me._next.logicBlock_scaling();
		}
		me._next.onmouseout=function (e) {
			me.elementMouseOver['next']=false;
			me._next.logicBlock_scaling();
		}
		me._next.ggUpdatePosition=function (useTransition) {
		}
		me._controls_center_bg.appendChild(me._next);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ff0000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['rectangle_1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_1.style.transition='transform 0s';
				if (me._rectangle_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_1.ggParameter.sx = 1.2;
					me._rectangle_1.ggParameter.sy = 1.2;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					skin.updateSize(me._rectangle_1);
				}
				else {
					me._rectangle_1.ggParameter.sx = 1;
					me._rectangle_1.ggParameter.sy = 1;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					skin.updateSize(me._rectangle_1);
				}
			}
		}
		me._rectangle_1.logicBlock_scaling();
		me._rectangle_1.onmouseover=function (e) {
			me.elementMouseOver['rectangle_1']=true;
			me._rectangle_1.logicBlock_scaling();
		}
		me._rectangle_1.onmouseout=function (e) {
			me.elementMouseOver['rectangle_1']=false;
			me._rectangle_1.logicBlock_scaling();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._pause=document.createElement('div');
		els=me._pause__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgaGVpZ2h0PSI4MDBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2Q2MTEzMCI+CiAgPHBhdGggZD0ibSAzIDEgaCAzIGMgMC41NTA3ODEgMCAxIDAuNDQ5MjE5IDEgMSB2IDEyIGMgMCAwLjU1MDc4MSAtMC40NDkyMTkgMSAtMSAxIGggLTMgYy'+
			'AtMC41NTA3ODEgMCAtMSAtMC40NDkyMTkgLTEgLTEgdiAtMTIgYyAwIC0wLjU1MDc4MSAwLjQ0OTIxOSAtMSAxIC0xIHogbSAwIDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2Q2MTEzMCIvPgogIDxwYXRoIGQ9Im0gMTAgMSBoIDMgYyAwLjU1MDc4MSAwIDEgMC40NDkyMTkgMSAxIHYgMTIgYyAwIDAuNTUwNzgxIC0wLjQ0OTIxOSAxIC0xIDEgaCAtMyBjIC0wLjU1MDc4MSAwIC0xIC0wLjQ0OTIxOSAtMSAtMSB2IC0xMiBjIDAgLTAuNTUwNzgxIDAuNDQ5MjE5IC0xIDEgLTEgeiBtIDAgMCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZDYxMTMwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._pause__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pause";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pause.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pause.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pause.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pause.style.transition='';
				if (me._pause.ggCurrentLogicStateVisible == 0) {
					me._pause.style.visibility=(Number(me._pause.style.opacity)>0||!me._pause.style.opacity)?'inherit':'hidden';
					me._pause.ggVisible=true;
				}
				else {
					me._pause.style.visibility="hidden";
					me._pause.ggVisible=false;
				}
			}
		}
		me._pause.logicBlock_visible();
		me._pause.onclick=function (e) {
			player.pauseAutorotate();
		}
		me._pause.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._pause);
		el=me._play=document.createElement('div');
		els=me._play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI4MDBweCIgdmlld0JveD0iLTMgMCAyOCAyOCIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIGhlaWdodD0iODAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPHRpdGxlPnBsYXk8L3'+
			'RpdGxlPgogPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaCBCZXRhLjwvZGVzYz4KIDxkZWZzLz4KIDxnIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiIGZpbGw9Im5vbmUiPgogIDxnIGlkPSJJY29uLVNldC1GaWxsZWQiIGZpbGwtb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQxOS4wMDAwMDAsIC01NzEuMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCIgZmlsbD0iI2Q2MTEzMCI+CiAgIDxwYXRoIGQ9Ik00NDAuNDE1LDU4My41NTQgTDQyMS40MTgsNTcxLjMxMSBD'+
			'NDIwLjI5MSw1NzAuNzA0IDQxOSw1NzAuNzY3IDQxOSw1NzIuOTQ2IEw0MTksNTk3LjA1NCBDNDE5LDU5OS4wNDYgNDIwLjM4NSw1OTkuMzYgNDIxLjQxOCw1OTguNjg5IEw0NDAuNDE1LDU4Ni40NDYgQzQ0MS4xOTcsNTg1LjY0NyA0NDEuMTk3LDU4NC4zNTMgNDQwLjQxNSw1ODMuNTU0IiBpZD0icGxheSIgZmlsbC1vcGFjaXR5PSIxIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIiBmaWxsPSIjZDYxMTMwIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="play";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._play.style.transition='';
				if (me._play.ggCurrentLogicStateVisible == 0) {
					me._play.style.visibility="hidden";
					me._play.ggVisible=false;
				}
				else {
					me._play.style.visibility=(Number(me._play.style.opacity)>0||!me._play.style.opacity)?'inherit':'hidden';
					me._play.ggVisible=true;
				}
			}
		}
		me._play.logicBlock_visible();
		me._play.onclick=function (e) {
			player.startAutorotate(0.05);
		}
		me._play.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._play);
		me._controls_center_bg.appendChild(me._rectangle_1);
		el=me._prev=document.createElement('div');
		els=me._prev__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEzLjA1OTA1IiB2aWV3Qm94PSIwIDAgNTEzLjA1OTA1IDUwMC44OTU3MSIgaGVpZ2h0PSI1MDAuODk1NzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj4KICA8ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPgogICA8cG9seWdvbiBwb2ludHM9IjQ2NC4xNzkgMjguMjc4IDQ4NC43NzkgNDkuNzc4IDI3NS41MjkgMjUwLjI3OCA0ODQuNzc5IDQ1MC43ODggNDY0LjE3OSA0NzIuMjc4IDIzMi40OTkgMjUwLjI3OCA0NjQuMTc5IDI4LjI3OCIgc3R5bGU9ImZpbGw6I2UyMz'+
			'AzODtzdHJva2U6I2UyMzAzODtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NDBweDsgc3Ryb2tlLW9wYWNpdHk6MTsgZmlsbC1vcGFjaXR5OjEiLz4KICAgPHBvbHlnb24gcG9pbnRzPSIyNjAuNTg4IDI4LjYyMSAyODEuMTg4IDUwLjEyMSA3MS45MzggMjUwLjYyMSAyODEuMTg4IDQ1MS4xMzEgMjYwLjU4OCA0NzIuNjIxIDI4LjkwNyAyNTAuNjIxIDI2MC41ODggMjguNjIxIiBzdHlsZT0iZmlsbDojZTIzMDM4O3N0cm9rZTojZTIzMDM4O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0MHB4OyBzdHJva2Utb3BhY2l0eToxOyBmaWxsLW9wYWNpdHk6MSIvPgogIDwv'+
			'Zz4KIDwvZz4KPC9zdmc+Cg==';
		me._prev__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="prev";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 15px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._prev.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._prev.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['prev'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._prev.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._prev.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._prev.style.transition='transform 0s';
				if (me._prev.ggCurrentLogicStateScaling == 0) {
					me._prev.ggParameter.sx = 1.2;
					me._prev.ggParameter.sy = 1.2;
					me._prev.style.transform=parameterToTransform(me._prev.ggParameter);
					skin.updateSize(me._prev);
				}
				else {
					me._prev.ggParameter.sx = 1;
					me._prev.ggParameter.sy = 1;
					me._prev.style.transform=parameterToTransform(me._prev.ggParameter);
					skin.updateSize(me._prev);
				}
			}
		}
		me._prev.logicBlock_scaling();
		me._prev.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._prev.onmouseover=function (e) {
			me.elementMouseOver['prev']=true;
			me._prev.logicBlock_scaling();
		}
		me._prev.onmouseout=function (e) {
			me.elementMouseOver['prev']=false;
			me._prev.logicBlock_scaling();
		}
		me._prev.ggUpdatePosition=function (useTransition) {
		}
		me._controls_center_bg.appendChild(me._prev);
		me._controls_center.appendChild(me._controls_center_bg);
		me.divSkin.appendChild(me._controls_center);
		el=me._controls_left=document.createElement('div');
		el.ggId="controls_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 30px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_left.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controls_left.ggUpdatePosition=function (useTransition) {
		}
		el=me._controls_left_bg=document.createElement('div');
		el.ggId="controls_left_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_left_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controls_left_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._toggle_audio=document.createElement('div');
		el.ggId="toggle_audio";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_audio.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_audio.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasSounds() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_audio.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_audio.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_audio.style.transition='';
				if (me._toggle_audio.ggCurrentLogicStateVisible == 0) {
					me._toggle_audio.style.visibility=(Number(me._toggle_audio.style.opacity)>0||!me._toggle_audio.style.opacity)?'inherit':'hidden';
					me._toggle_audio.ggVisible=true;
				}
				else {
					me._toggle_audio.style.visibility="hidden";
					me._toggle_audio.ggVisible=false;
				}
			}
		}
		me._toggle_audio.logicBlock_visible();
		me._toggle_audio.onclick=function (e) {
			player.setVariableValue('toggle_audio', !player.getVariableValue('toggle_audio'));
				player.playPauseSound("_background","1");
		}
		me._toggle_audio.ggUpdatePosition=function (useTransition) {
		}
		el=me._audio_off=document.createElement('div');
		els=me._audio_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzMSIgaGVpZ2h0PSIzMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIj4KIDxwYXRoIHN0cm9rZT0iI2NiMjAyNyIgc3Ryb2tlLXdpZHRoPSIyLjA2ODUzIiBzdHJva2Utb3BhY2l0eT0iMSIgZD0iTTIzLjI5NCAyMy4xNTFMMjMuMjk2IDIzLjE1MzFMMjMuNTExMiAyMy4zODcyQzIzLjUxMTMgMjMuMzg3MyAyMy41MTE0IDIzLjM4NzQgMjMuNTExNSAyMy4zODc0QzIzLjYyNzYgMjMuNTEzMyAyMy43NjY4IDIzLjU2NjUgMjMuODkzIDIzLjU2NjVDMjMuODk4NiAyMy41NjY1IDIzLjkwNTQgMjMuNTY2My'+
			'AyMy45MTQ0IDIzLjU2NTlMMjMuMjk0IDIzLjE1MVpNMjMuMjk0IDIzLjE1MUMyMy4wNjA1IDIyLjg5ODQgMjMuMDIyOSAyMi40NjIxIDIzLjIzMiAyMi4xNTY2TDIzLjIzMjEgMjIuMTU2NUMyNC41NjMyIDIwLjIxMTcgMjUuMjYxNSAxNy45MTE0IDI1LjI2MTUgMTUuNTEwNUMyNS4yNjE1IDEyLjkzMDQgMjQuNDY4NyAxMC40OTMzIDIyLjk1NzggOC40NzY0NEwyMi45NTc0IDguNDc1NzlDMjIuNzMwOSA4LjE3NCAyMi43NTg2IDcuNzE5NjMgMjMuMDAxMiA3LjQ1Njg1TDIzLjAwMjEgNy40NTU5M0wyMy4yMTcxIDcuMjIyNDdDMjMuMjE3MyA3LjIyMjMgMjMuMjE3NCA3LjIyMjEzIDIzLjIxNzYg'+
			'Ny4yMjE5NUMyMy4zNDk2IDcuMDc5MTYgMjMuNDg2OCA3LjAzNDg1IDIzLjYxMzcgNy4wNDMwNUwyMy42MTM3IDcuMDQzMUwyMy42MjQgNy4wNDM2N0MyMy43NTkxIDcuMDUxMDMgMjMuOTA5NyA3LjEyMTAxIDI0LjAyNTUgNy4yNzQzOUMyNS43ODgxIDkuNjExNzUgMjYuNzI1MyAxMi40NTUxIDI2LjcyNTMgMTUuNTExQzI2LjcyNTMgMTguMzU0OSAyNS44OTY1IDIxLjA0OTQgMjQuMzM2OSAyMy4zMTA1QzI0LjIyMTUgMjMuNDc3MSAyNC4wNjc1IDIzLjU1MzkgMjMuOTMxMyAyMy41NjQ4TDIzLjI5NCAyMy4xNTFaTTEuNjE1NjggMjAuNzQ4MUg2LjMyMDA5SDEuNjE1NjhaTTEuNjE1NjggMjAuNz'+
			'Q4MUMwLjcyMzUyIDIwLjc0ODkgMCAxOS45NjQ1IDAgMTguOTk3N1YxMi4wMjIyQzAgMTEuMDU1IDAuNzIzNTIgMTAuMjcwOSAxLjYxNTY4IDEwLjI3MDlINi4zMjA0OEwxLjYxNTY4IDIwLjc0ODFaTTE2LjQwMjYgMjcuOTk0MkwxNi4zOTk1IDI3Ljk5NThDMTYuMzI4NCAyOC4wMzIyIDE2LjI1NTYgMjguMDQ4NiAxNi4xODQgMjguMDQ4NkMxNi4wNzQ3IDI4LjA0ODYgMTUuOTUzNyAyOC4wMDg3IDE1Ljg0NDMgMjcuOTEwM0wxNS44NDQgMjcuOTEwMUw3LjAxMTExIDE5Ljk3ODVMNi43MTYzMSAxOS43MTM4SDYuMzIwMDlIMS42MTU2OEgxLjYxNDcyQzEuMzcxNyAxOS43MTQgMS4wMzQyNiAxOS40'+
			'NzM2IDEuMDM0MjYgMTguOTk3N1YxMi4wMjIyQzEuMDM0MjYgMTEuNTQ2MiAxLjM3MTU0IDExLjMwNTIgMS42MTU2OCAxMS4zMDUySDYuMzIwNDhINi43MTY2OUw3LjAxMTQ5IDExLjA0MDVMMTUuODQ0NCAzLjEwODk0TDE1Ljg0NDUgMy4xMDg4NkMxNi4wMTc1IDIuOTUzNDQgMTYuMjI2MSAyLjkzNTAzIDE2LjQwMDEgMy4wMjQxNUwxNi40MDI3IDMuMDI1NTFDMTYuNTk0MiAzLjEyMjg3IDE2Ljc2NjIgMy4zNjU4OSAxNi43NjYyIDMuNjg3ODRMMTYuNzY1OCAyNy4zMzJDMTYuNzY1OCAyNy42NTQ2IDE2LjU5NCAyNy44OTY5IDE2LjQwMjYgMjcuOTk0MlpNMjguODU5NiAyOS4xODQxTDI4Ljg1OT'+
			'QgMjkuMTgzOEMyOC42MTM0IDI4LjkxNzUgMjguNTg5NCAyOC40NTU1IDI4LjgyMjYgMjguMTU0NkMzMS41NzM4IDI0LjYwODkgMzMuMDgxIDIwLjExOTEgMzMuMDgxIDE1LjUxMDVDMzMuMDgxIDEwLjcxODMgMzEuNDY3NCA2LjA5MjUyIDI4LjUyMTQgMi40ODgwNUMyOC4yNzg2IDIuMTkwNyAyOC4yOTU0IDEuNzE5MzcgMjguNTQ2MSAxLjQ0NjE1QzI4LjU0NjIgMS40NDU5NyAyOC41NDY0IDEuNDQ1NzggMjguNTQ2NiAxLjQ0NTZMMjguNzU3NyAxLjIxNjM3TDI4Ljc1ODggMS4yMTUyMUMyOC44ODcxIDEuMDc1NDggMjkuMDExOSAxLjAyOTc2IDI5LjE1MjYgMS4wMzQ2MkwyOS4xNTY0IDEuMDM0'+
			'NzRDMjkuMjg2MiAxLjAzODcyIDI5LjQzMjUgMS4xMDEzNiAyOS41NDk0IDEuMjQzOTNDMzIuNzY0MiA1LjE2NjE0IDM0LjU0NDQgMTAuMjMyMyAzNC41NDQ0IDE1LjUxMDVWMTUuNTEwN0MzNC41NDUyIDIwLjU4NzkgMzIuODgwNyAyNS41MTA1IDI5Ljg3MzggMjkuMzcwNkMyOS43NTc5IDI5LjUxOSAyOS42MTE0IDI5LjU4NTggMjkuNDc4NyAyOS41OTMxTDI5LjQ2IDI5LjU5MzdDMjkuNDU1IDI5LjU5MzkgMjkuNDUzNiAyOS41OTM4IDI5LjQ1NDQgMjkuNTkzOEMyOS4zMjc2IDI5LjU5MzggMjkuMTg4NyAyOS41NDA3IDI5LjA3MTggMjkuNDE0MUwyOC4zMTE3IDMwLjExNTVMMjkuMDcxOCAyOS'+
			'40MTQxTDI4Ljg1OTYgMjkuMTg0MVoiLz4KIDxwYXRoIHN0cm9rZT0iI2NiMjAyNyIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBkPSJNMzQgMjlMMiAyIi8+Cjwvc3ZnPgo=';
		me._audio_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="audio_off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._audio_off.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['audio_off'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._audio_off.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._audio_off.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._audio_off.style.transition='transform 0s';
				if (me._audio_off.ggCurrentLogicStateScaling == 0) {
					me._audio_off.ggParameter.sx = 1.2;
					me._audio_off.ggParameter.sy = 1.2;
					me._audio_off.style.transform=parameterToTransform(me._audio_off.ggParameter);
					skin.updateSize(me._audio_off);
				}
				else {
					me._audio_off.ggParameter.sx = 1;
					me._audio_off.ggParameter.sy = 1;
					me._audio_off.style.transform=parameterToTransform(me._audio_off.ggParameter);
					skin.updateSize(me._audio_off);
				}
			}
		}
		me._audio_off.logicBlock_scaling();
		me._audio_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._audio_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._audio_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._audio_off.style.transition='transform 0s';
				if (me._audio_off.ggCurrentLogicStateVisible == 0) {
					me._audio_off.style.visibility=(Number(me._audio_off.style.opacity)>0||!me._audio_off.style.opacity)?'inherit':'hidden';
					me._audio_off.ggVisible=true;
				}
				else {
					me._audio_off.style.visibility="hidden";
					me._audio_off.ggVisible=false;
				}
			}
		}
		me._audio_off.logicBlock_visible();
		me._audio_off.onmouseover=function (e) {
			me.elementMouseOver['audio_off']=true;
			me._audio_off.logicBlock_scaling();
		}
		me._audio_off.onmouseout=function (e) {
			me.elementMouseOver['audio_off']=false;
			me._audio_off.logicBlock_scaling();
		}
		me._audio_off.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_audio.appendChild(me._audio_off);
		el=me._audio_on=document.createElement('div');
		els=me._audio_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzMiIgaGVpZ2h0PSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIj4KIDxwYXRoIHN0cm9rZT0iI2NiMjAyNyIgc3Ryb2tlLXdpZHRoPSIyLjA2ODUzIiBzdHJva2Utb3BhY2l0eT0iMSIgZD0iTTIzLjQ4NjkgMjMuNjMzNEwyMy40ODg5IDIzLjYzNTVMMjMuNzA0MSAyMy44Njk2QzIzLjcwNDIgMjMuODY5NyAyMy43MDQzIDIzLjg2OTggMjMuNzA0NCAyMy44Njk5QzIzLjgyMDUgMjMuOTk1NyAyMy45NTk3IDI0LjA0ODkgMjQuMDg1OSAyNC4wNDg5QzI0LjA5MTUgMjQuMDQ4OSAyNC4wOTgzIDI0Lj'+
			'A0ODcgMjQuMTA3MyAyNC4wNDgzTDIzLjQ4NjkgMjMuNjMzNFpNMjMuNDg2OSAyMy42MzM0QzIzLjI1MzQgMjMuMzgwOCAyMy4yMTU3IDIyLjk0NDYgMjMuNDI0OSAyMi42MzkxTDIzLjQyNSAyMi42Mzg5QzI0Ljc1NjEgMjAuNjk0MSAyNS40NTQzIDE4LjM5MzggMjUuNDU0MyAxNS45OTNDMjUuNDU0MyAxMy40MTI5IDI0LjY2MTYgMTAuOTc1NyAyMy4xNTA3IDguOTU4ODZMMjMuMTUwMiA4Ljk1ODIxQzIyLjkyMzggOC42NTY0MiAyMi45NTE0IDguMjAyMDUgMjMuMTk0MSA3LjkzOTI3TDIzLjE5NDkgNy45MzgzNkwyMy40MSA3LjcwNDg5QzIzLjQxMDIgNy43MDQ3MiAyMy40MTAzIDcuNzA0NTUg'+
			'MjMuNDEwNSA3LjcwNDM3QzIzLjU0MjUgNy41NjE1OSAyMy42Nzk2IDcuNTE3MjcgMjMuODA2NSA3LjUyNTQ3TDIzLjgwNjUgNy41MjU1MkwyMy44MTY5IDcuNTI2MDlDMjMuOTUyIDcuNTMzNDYgMjQuMTAyNiA3LjYwMzQzIDI0LjIxODQgNy43NTY4MUMyNS45ODEgMTAuMDk0MiAyNi45MTgxIDEyLjkzNzYgMjYuOTE4MSAxNS45OTM0QzI2LjkxODEgMTguODM3MyAyNi4wODk0IDIxLjUzMTggMjQuNTI5OCAyMy43OTI5QzI0LjQxNDQgMjMuOTU5NSAyNC4yNjAzIDI0LjAzNjMgMjQuMTI0MSAyNC4wNDczTDIzLjQ4NjkgMjMuNjMzNFpNMS44MDg1NSAyMS4yMzA1SDYuNTEyOTZIMS44MDg1NVpNMS'+
			'44MDg1NSAyMS4yMzA1QzAuOTE2MzkxIDIxLjIzMTMgMC4xOTI4NzEgMjAuNDQ2OSAwLjE5Mjg3MSAxOS40ODAxVjEyLjUwNDZDMC4xOTI4NzEgMTEuNTM3NCAwLjkxNjM5MSAxMC43NTMzIDEuODA4NTUgMTAuNzUzM0g2LjUxMzM1TDEuODA4NTUgMjEuMjMwNVpNMTYuNTk1NSAyOC40NzY2TDE2LjU5MjMgMjguNDc4MkMxNi41MjEzIDI4LjUxNDYgMTYuNDQ4NSAyOC41MzEgMTYuMzc2OSAyOC41MzFDMTYuMjY3NiAyOC41MzEgMTYuMTQ2NiAyOC40OTExIDE2LjAzNzIgMjguMzkyN0wxNi4wMzY5IDI4LjM5MjVMNy4yMDM5OCAyMC40NjFMNi45MDkxOCAyMC4xOTYySDYuNTEyOTZIMS44MDg1NUgx'+
			'LjgwNzU5QzEuNTY0NTcgMjAuMTk2NSAxLjIyNzE0IDE5Ljk1NjEgMS4yMjcxNCAxOS40ODAxVjEyLjUwNDZDMS4yMjcxNCAxMi4wMjg2IDEuNTY0NDEgMTEuNzg3NiAxLjgwODU1IDExLjc4NzZINi41MTMzNUg2LjkwOTU2TDcuMjA0MzYgMTEuNTIyOUwxNi4wMzczIDMuNTkxMzZMMTYuMDM3NCAzLjU5MTI4QzE2LjIxMDQgMy40MzU4NiAxNi40MTg5IDMuNDE3NDUgMTYuNTkyOSAzLjUwNjU3TDE2LjU5NTYgMy41MDc5M0MxNi43ODcxIDMuNjA1MyAxNi45NTkgMy44NDgzMSAxNi45NTkgNC4xNzAyNkwxNi45NTg3IDI3LjgxNDRDMTYuOTU4NyAyOC4xMzcgMTYuNzg2OSAyOC4zNzkzIDE2LjU5NT'+
			'UgMjguNDc2NlpNMjkuMDUyNSAyOS42NjY1TDI5LjA1MjIgMjkuNjY2M0MyOC44MDYzIDI5LjM5OTkgMjguNzgyMyAyOC45Mzc5IDI5LjAxNTQgMjguNjM3QzMxLjc2NjYgMjUuMDkxMyAzMy4yNzM5IDIwLjYwMTUgMzMuMjczOSAxNS45OTNDMzMuMjczOSAxMS4yMDA3IDMxLjY2MDIgNi41NzQ5NCAyOC43MTQyIDIuOTcwNDdDMjguNDcxNSAyLjY3MzEzIDI4LjQ4ODMgMi4yMDE3OSAyOC43Mzg5IDEuOTI4NTdDMjguNzM5MSAxLjkyODM5IDI4LjczOTMgMS45MjgyIDI4LjczOTQgMS45MjgwMkwyOC45NTA2IDEuNjk4NzlMMjguOTUxNyAxLjY5NzYzQzI5LjA4IDEuNTU3OSAyOS4yMDQ4IDEuNTEy'+
			'MTggMjkuMzQ1NCAxLjUxNzA0TDI5LjM0OTMgMS41MTcxNkMyOS40NzkgMS41MjExNSAyOS42MjU0IDEuNTgzNzkgMjkuNzQyMyAxLjcyNjM1QzMyLjk1NyA1LjY0ODU2IDM0LjczNzMgMTAuNzE0NyAzNC43MzczIDE1Ljk5M1YxNS45OTMxQzM0LjczOCAyMS4wNzAzIDMzLjA3MzYgMjUuOTkyOSAzMC4wNjY3IDI5Ljg1MzFDMjkuOTUwOCAzMC4wMDE0IDI5LjgwNDMgMzAuMDY4MyAyOS42NzE1IDMwLjA3NTVMMjkuNjUyOSAzMC4wNzYxQzI5LjY0NzkgMzAuMDc2MyAyOS42NDY1IDMwLjA3NjMgMjkuNjQ3MyAzMC4wNzYzQzI5LjUyMDUgMzAuMDc2MyAyOS4zODE1IDMwLjAyMzEgMjkuMjY0NyAyOS'+
			'44OTY1TDI4LjUwNDYgMzAuNTk3OUwyOS4yNjQ3IDI5Ljg5NjVMMjkuMDUyNSAyOS42NjY1WiIvPgo8L3N2Zz4K';
		me._audio_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="audio_on";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._audio_on.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['audio_on'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._audio_on.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._audio_on.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._audio_on.style.transition='transform 0s';
				if (me._audio_on.ggCurrentLogicStateScaling == 0) {
					me._audio_on.ggParameter.sx = 1.2;
					me._audio_on.ggParameter.sy = 1.2;
					me._audio_on.style.transform=parameterToTransform(me._audio_on.ggParameter);
					skin.updateSize(me._audio_on);
				}
				else {
					me._audio_on.ggParameter.sx = 1;
					me._audio_on.ggParameter.sy = 1;
					me._audio_on.style.transform=parameterToTransform(me._audio_on.ggParameter);
					skin.updateSize(me._audio_on);
				}
			}
		}
		me._audio_on.logicBlock_scaling();
		me._audio_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._audio_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._audio_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._audio_on.style.transition='transform 0s';
				if (me._audio_on.ggCurrentLogicStateVisible == 0) {
					me._audio_on.style.visibility="hidden";
					me._audio_on.ggVisible=false;
				}
				else {
					me._audio_on.style.visibility=(Number(me._audio_on.style.opacity)>0||!me._audio_on.style.opacity)?'inherit':'hidden';
					me._audio_on.ggVisible=true;
				}
			}
		}
		me._audio_on.logicBlock_visible();
		me._audio_on.onmouseover=function (e) {
			me.elementMouseOver['audio_on']=true;
			me._audio_on.logicBlock_scaling();
		}
		me._audio_on.onmouseout=function (e) {
			me.elementMouseOver['audio_on']=false;
			me._audio_on.logicBlock_scaling();
		}
		me._audio_on.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_audio.appendChild(me._audio_on);
		me._controls_left_bg.appendChild(me._toggle_audio);
		el=me._setting=document.createElement('div');
		els=me._setting__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNSIgaGVpZ2h0PSIzNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIj4KIDxwYXRoIGQ9Ik0xOC40OTAzIDM0LjA1MjVIMTYuNDEzMkMxNC43MzMyIDM0LjA1MjUgMTMuMzY2NCAzMi42ODU3IDEzLjM2NjQgMzEuMDA1OFYzMC4zMDNDMTIuNjUyMiAzMC4wNzQ5IDExLjk1ODIgMjkuNzg2OCAxMS4yOTE2IDI5LjQ0MThMMTAuNzkzNiAyOS45Mzk4QzkuNTg3NDQgMzEuMTQ3NCA3LjY1NTM3IDMxLjExMiA2LjQ4NDI2IDI5LjkzOTRMNS4wMTYxOSAyOC40NzE0QzMuODQzMDEgMjcuMjk5NSAzLjgwOTI2ID'+
			'I1LjM2OCA1LjAxNjU3IDI0LjE2Mkw1LjUxNDE4IDIzLjY2NDRDNS4xNjkxOSAyMi45OTc4IDQuODgxMjEgMjIuMzA0IDQuNjUyOTcgMjEuNTg5NkgzLjk1MDMxQzIuMjcwNDEgMjEuNTg5NiAwLjkwMzU2NCAyMC4yMjI4IDAuOTAzNTY0IDE4LjU0MjlWMTYuNDY1N0MwLjkwMzU2NCAxNC43ODU3IDIuMjcwNDEgMTMuNDE4OSAzLjk1MDM4IDEzLjQxODlINC42NTMwM0M0Ljg4MTI4IDEyLjcwNDYgNS4xNjkyNiAxMi4wMTA4IDUuNTE0MjUgMTEuMzQ0MUw1LjAxNjI1IDEwLjg0NjJDMy44MDk2NSA5LjY0MDkgMy44NDI5NCA3LjcwOTI4IDUuMDE2NjQgNi41MzY4OEw2LjQ4NDg0IDUuMDY4NzRDNy42'+
			'NTg2NyAzLjg5MzMgOS41OTAyOCAzLjg2Mzk1IDEwLjc5NDEgNS4wNjkxM0wxMS4yOTE2IDUuNTY2NjdDMTEuOTU4MyA1LjIyMTc1IDEyLjY1MjIgNC45MzM3IDEzLjM2NjQgNC43MDU0NlY0LjAwMjhDMTMuMzY2NCAyLjMyMjgzIDE0LjczMzIgMC45NTYwNTUgMTYuNDEzMyAwLjk1NjA1NUgxOC40OTA0QzIwLjE3MDMgMC45NTYwNTUgMjEuNTM3MSAyLjMyMjgzIDIxLjUzNzEgNC4wMDI4VjQuNzA1NTJDMjIuMjUxNCA0LjkzMzcgMjIuOTQ1MyA1LjIyMTc1IDIzLjYxMTkgNS41NjY3NEwyNC4xMDk5IDUuMDY4NzRDMjUuMzE2MSAzLjg2MTExIDI3LjI0ODEgMy44OTY1MyAyOC40MTkzIDUuMDY5MT'+
			'lMMjkuODg3MyA2LjUzNzJDMzEuMDYwNSA3LjcwOTA5IDMxLjA5NDIgOS42NDA1MSAyOS44ODY5IDEwLjg0NjVMMjkuMzg5MyAxMS4zNDQxQzI5LjczNDMgMTIuMDEwOCAzMC4wMjIzIDEyLjcwNDYgMzAuMjUwNSAxMy40MTg5SDMwLjk1MzJDMzIuNjMzMiAxMy40MTg5IDM0IDE0Ljc4NTcgMzQgMTYuNDY1N1YxOC41NDI5QzM0IDIwLjIyMjggMzIuNjMzMiAyMS41ODk2IDMwLjk1MzIgMjEuNTg5NkgzMC4yNTA1QzMwLjAyMjMgMjIuMzAzOSAyOS43MzQzIDIyLjk5NzggMjkuMzg5MyAyMy42NjQ0TDI5Ljg4NzMgMjQuMTYyNEMzMS4wOTM5IDI1LjM2NzcgMzEuMDYwNiAyNy4yOTkzIDI5Ljg4Njkg'+
			'MjguNDcxN0wyOC40MTg3IDI5LjkzOTlDMjcuMjQ0OSAzMS4xMTUzIDI1LjMxMzMgMzEuMTQ0NyAyNC4xMDk1IDI5LjkzOTVMMjMuNjExOSAyOS40NDE5QzIyLjk0NTMgMjkuNzg2OSAyMi4yNTE0IDMwLjA3NDkgMjEuNTM3MSAzMC4zMDMyVjMxLjAwNTlDMjEuNTM3MSAzMi42ODU3IDIwLjE3MDQgMzQuMDUyNSAxOC40OTAzIDM0LjA1MjVaTTExLjYxNTggMjcuNDA1NEMxMi41NDE5IDI3Ljk1MzEgMTMuNTM4NyAyOC4zNjY5IDE0LjU3ODMgMjguNjM1MkMxNS4wMDY1IDI4Ljc0NTcgMTUuMzA1NyAyOS4xMzE5IDE1LjMwNTcgMjkuNTc0MVYzMS4wMDU4QzE1LjMwNTcgMzEuNjE2NCAxNS44MDI2ID'+
			'MyLjExMzMgMTYuNDEzMyAzMi4xMTMzSDE4LjQ5MDRDMTkuMTAxIDMyLjExMzMgMTkuNTk3OSAzMS42MTY0IDE5LjU5NzkgMzEuMDA1OFYyOS41NzQxQzE5LjU5NzkgMjkuMTMxOSAxOS44OTcxIDI4Ljc0NTcgMjAuMzI1MyAyOC42MzUyQzIxLjM2NSAyOC4zNjY5IDIyLjM2MTggMjcuOTUzMSAyMy4yODc5IDI3LjQwNTRDMjMuNjY4OSAyNy4xODAxIDI0LjE1NDEgMjcuMjQxNCAyNC40NjcxIDI3LjU1NDRMMjUuNDgxMiAyOC41Njg2QzI1LjkxODUgMjkuMDA2MyAyNi42MjA2IDI4Ljk5NjIgMjcuMDQ3MSAyOC41NjlMMjguNTE2MiAyNy4xQzI4Ljk0MTcgMjYuNjc1IDI4Ljk1NTkgMjUuOTcyOCAy'+
			'OC41MTY2IDI1LjUzNEwyNy41MDIxIDI0LjUxOTVDMjcuMTg5MSAyNC4yMDY1IDI3LjEyNzggMjMuNzIxMyAyNy4zNTMxIDIzLjM0MDNDMjcuOTAwOCAyMi40MTQzIDI4LjMxNDUgMjEuNDE3NSAyOC41ODI4IDIwLjM3NzdDMjguNjkzMyAxOS45NDk1IDI5LjA3OTUgMTkuNjUwNCAyOS41MjE2IDE5LjY1MDRIMzAuOTUzM0MzMS41NjM5IDE5LjY1MDQgMzIuMDYwOCAxOS4xNTM2IDMyLjA2MDggMTguNTQyOVYxNi40NjU3QzMyLjA2MDggMTUuODU1MSAzMS41NjM5IDE1LjM1ODIgMzAuOTUzMyAxNS4zNTgySDI5LjUyMTZDMjkuMDc5NCAxNS4zNTgyIDI4LjY5MzMgMTUuMDU5MSAyOC41ODI4IDE0Lj'+
			'YzMUMyOC4zMTQ1IDEzLjU5MTIgMjcuOTAwNyAxMi41OTQ0IDI3LjM1MzEgMTEuNjY4NEMyNy4xMjc4IDExLjI4NzQgMjcuMTg5MSAxMC44MDIyIDI3LjUwMjEgMTAuNDg5MkwyOC41MTYyIDkuNDc1MDNDMjguOTU0NiA5LjAzNzE1IDI4Ljk0MzIgOC4zMzUxNCAyOC41MTY2IDcuOTA5MDlMMjcuMDQ3NiA2LjQ0MDExQzI2LjYyMTggNi4wMTM3MyAyNS45MTk2IDYuMDAxMjYgMjUuNDgxNyA2LjQzOTcyTDI0LjQ2NzIgNy40NTQyN0MyNC4xNTQyIDcuNzY3MzMgMjMuNjY4OSA3LjgyODYxIDIzLjI4NzkgNy42MDMyN0MyMi4zNjE4IDcuMDU1NTYgMjEuMzY1MSA2LjY0MTc5IDIwLjMyNTQgNi4zNzM0'+
			'NkMxOS44OTcyIDYuMjYyOTkgMTkuNTk4IDUuODc2ODIgMTkuNTk4IDUuNDM0NjFWNC4wMDI4QzE5LjU5OCAzLjM5MjEzIDE5LjEwMTEgMi44OTUzIDE4LjQ5MDQgMi44OTUzSDE2LjQxMzNDMTUuODAyNyAyLjg5NTMgMTUuMzA1OCAzLjM5MjEzIDE1LjMwNTggNC4wMDI4VjUuNDM0NDhDMTUuMzA1OCA1Ljg3NjY5IDE1LjAwNjYgNi4yNjI4NiAxNC41Nzg0IDYuMzczMzRDMTMuNTM4NyA2LjY0MTY2IDEyLjU0MTkgNy4wNTU0MyAxMS42MTU4IDcuNjAzMTRDMTEuMjM0NyA3LjgyODQyIDEwLjc0OTYgNy43NjcxNCAxMC40MzY2IDcuNDU0MTRMOS40MjI0NyA2LjQzOTk4QzguOTg1MjQgNi4wMDIyMy'+
			'A4LjI4MzA0IDYuMDEyMzggNy44NTY2IDYuNDM5NTNMNi4zODc0OSA3LjkwODU3QzUuOTYyMDIgOC4zMzM1MiA1Ljk0NzggOS4wMzU3MiA2LjM4NzEgOS40NzQ1MUw3LjQwMTY1IDEwLjQ4OTFDNy43MTQ2NSAxMC44MDIxIDcuNzc1OTMgMTEuMjg3MyA3LjU1MDY1IDExLjY2ODJDNy4wMDI5NCAxMi41OTQzIDYuNTg5MjQgMTMuNTkxMSA2LjMyMDkxIDE0LjYzMDhDNi4yMTAzNyAxNS4wNTkgNS44MjQyIDE1LjM1ODEgNS4zODIwNiAxNS4zNTgxSDMuOTUwMzhDMy4zMzk3MSAxNS4zNTgyIDIuODQyODEgMTUuODU1IDIuODQyODEgMTYuNDY1N1YxOC41NDI5QzIuODQyODEgMTkuMTUzNSAzLjMzOTcx'+
			'IDE5LjY1MDQgMy45NTAzOCAxOS42NTA0SDUuMzgxOTlDNS44MjQyIDE5LjY1MDQgNi4yMTAzMSAxOS45NDk1IDYuMzIwODUgMjAuMzc3N0M2LjU4OTE3IDIxLjQxNzQgNy4wMDI5NCAyMi40MTQyIDcuNTUwNTkgMjMuMzQwMkM3Ljc3NTg2IDIzLjcyMTIgNy43MTQ1OCAyNC4yMDY0IDcuNDAxNTkgMjQuNTE5NEw2LjM4NzQzIDI1LjUzMzZDNS45NDkwMyAyNS45NzE1IDUuOTYwNDcgMjYuNjczNSA2LjM4NzA0IDI3LjA5OTVMNy44NTYwMiAyOC41Njg1QzguMjgxODEgMjguOTk0OSA4Ljk4NDA4IDI5LjAwNzQgOS40MjE5NiAyOC41Njg5TDEwLjQzNjQgMjcuNTU0M0MxMC42NjcxIDI3LjMyMzggMT'+
			'EuMTQ2OSAyNy4xMjgxIDExLjYxNTggMjcuNDA1NFoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2NiMjAyNyIvPgogPHBhdGggZD0iTTE3LjQ1MzcgMjQuNjU1OUMxMy41MTA5IDI0LjY1NTkgMTAuMzAzMiAyMS40NDgyIDEwLjMwMzIgMTcuNTA1NEMxMC4zMDMyIDEzLjU2MjcgMTMuNTEwOSAxMC4zNTUgMTcuNDUzNyAxMC4zNTVDMjEuMzk2NSAxMC4zNTUgMjQuNjA0MiAxMy41NjI3IDI0LjYwNDIgMTcuNTA1NEMyNC42MDQyIDIxLjQ0ODIgMjEuMzk2NSAyNC42NTU5IDE3LjQ1MzcgMjQuNjU1OVpNMTcuNDUzNyAxMi4yODA2QzE0LjU3MjcgMTIuMjgwNiAxMi4yMjg5IDE0LjYyNDUgMTIuMjI4'+
			'OSAxNy41MDU0QzEyLjIyODkgMjAuMzg2NCAxNC41NzI3IDIyLjczMDMgMTcuNDUzNyAyMi43MzAzQzIwLjMzNDcgMjIuNzMwMyAyMi42Nzg2IDIwLjM4NjQgMjIuNjc4NiAxNy41MDU0QzIyLjY3ODYgMTQuNjI0NSAyMC4zMzQ4IDEyLjI4MDYgMTcuNDUzNyAxMi4yODA2WiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjY2IyMDI3Ii8+Cjwvc3ZnPgo=';
		me._setting__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="setting";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._setting.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._setting.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['setting'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._setting.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._setting.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._setting.style.transition='transform 100ms ease 0ms';
				if (me._setting.ggCurrentLogicStateAngle == 0) {
					me._setting.ggParameter.a = 360;
					me._setting.style.transform=parameterToTransform(me._setting.ggParameter);
				}
				else {
					me._setting.ggParameter.a = 0;
					me._setting.style.transform=parameterToTransform(me._setting.ggParameter);
				}
			}
		}
		me._setting.logicBlock_angle();
		me._setting.onclick=function (e) {
			player.setVariableValue('vis_control_left_vertical', !player.getVariableValue('vis_control_left_vertical'));
		}
		me._setting.onmouseover=function (e) {
			me.elementMouseOver['setting']=true;
			me._setting.logicBlock_angle();
		}
		me._setting.onmouseout=function (e) {
			me.elementMouseOver['setting']=false;
			me._setting.logicBlock_angle();
		}
		me._setting.ggUpdatePosition=function (useTransition) {
		}
		me._controls_left_bg.appendChild(me._setting);
		me._controls_left.appendChild(me._controls_left_bg);
		me.divSkin.appendChild(me._controls_left);
		el=me._control_left_vertical=document.createElement('div');
		el.ggId="control_left_vertical";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 58px;';
		hs+='height : 134px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._control_left_vertical.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._control_left_vertical.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_control_left_vertical') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._control_left_vertical.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._control_left_vertical.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._control_left_vertical.style.transition='';
				if (me._control_left_vertical.ggCurrentLogicStateVisible == 0) {
					me._control_left_vertical.style.visibility=(Number(me._control_left_vertical.style.opacity)>0||!me._control_left_vertical.style.opacity)?'inherit':'hidden';
					me._control_left_vertical.ggVisible=true;
				}
				else {
					me._control_left_vertical.style.visibility="hidden";
					me._control_left_vertical.ggVisible=false;
				}
			}
		}
		me._control_left_vertical.logicBlock_visible();
		me._control_left_vertical.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._toggle_grypo=document.createElement('div');
		el.ggId="toggle_grypo";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_grypo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_grypo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasSounds() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_grypo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_grypo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_grypo.style.transition='';
				if (me._toggle_grypo.ggCurrentLogicStateVisible == 0) {
					me._toggle_grypo.style.visibility=(Number(me._toggle_grypo.style.opacity)>0||!me._toggle_grypo.style.opacity)?'inherit':'hidden';
					me._toggle_grypo.ggVisible=true;
				}
				else {
					me._toggle_grypo.style.visibility="hidden";
					me._toggle_grypo.ggVisible=false;
				}
			}
		}
		me._toggle_grypo.logicBlock_visible();
		me._toggle_grypo.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
			player.setVariableValue('toggle_grypo', !player.getVariableValue('toggle_grypo'));
		}
		me._toggle_grypo.ggUpdatePosition=function (useTransition) {
		}
		el=me._grypo_off=document.createElement('div');
		els=me._grypo_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgaGVpZ2h0PSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIj4KIDxjaXJjbGUgcj0iOS41IiBjeD0iMTAiIHN0cm9rZT0iI2NiMjAyNyIgY3k9IjEwIiBzdHJva2Utb3BhY2l0eT0iMSIvPgogPHBhdGggZD0iTTE2LjY4MTggOS4zMDMwM0MxNi41IDguOTA5MDkgMTYuMTY2NyA4LjU3NTc2IDE1Ljc1NzYgOC4yODc4OEMxNS4xMzY0IDcuODQ4NDkgMTQuMjg3OSA3LjUgMTMuMjg3OSA3LjI1NzU4QzEyLjg2MzYgNy4xNTE1MiAxMi4zOTM5IDcuMDc1NzYgMTEuOTI0MiA3QzExLjcxMjEgNi41ID'+
			'ExLjQ4NDggNi4wNDU0NSAxMS4yMjczIDUuNjUxNTJDMTAuOTA5MSA1LjE2NjY3IDEwLjU3NTggNC43NTc1OCAxMC4yMTIxIDQuNDY5N0MxMC4wMzAzIDQuMzE4MTggOS44MzMzMyA0LjIxMjEyIDkuNjM2MzYgNC4xMjEyMUM5LjQzOTM5IDQuMDQ1NDUgOS4yMjcyNyA0IDkuMDE1MTUgNEM4LjkyNDI0IDQgOC44MzMzMyA0LjAxNTE1IDguNzQyNDMgNC4wMzAzQzguNDI0MjQgNC4wOTA5MSA4LjEzNjM2IDQuMjcyNzMgNy45MDkwOSA0LjVDNy41NjA2MSA0Ljg2MzY0IDcuMzMzMzMgNS4zNjM2NCA3LjE2NjY3IDUuOTY5N0M3IDYuNTc1NzYgNi45MjQyNCA3LjI4Nzg4IDYuOTI0MjQgOC4wNjA2MUM2'+
			'LjkyNDI0IDguODMzMzMgNyA5LjY4MTgyIDcuMTgxODIgMTAuNTQ1NUM3LjMwMzAzIDExLjE2NjcgNy40Njk3IDExLjc1NzYgNy42NTE1MiAxMi4zMDNDNi43ODc4OCAxMi4xNjY3IDYuMDE1MTUgMTEuOTU0NSA1LjM5Mzk0IDExLjY4MThDNC44MzMzMyAxMS40Mzk0IDQuMzc4NzkgMTEuMTUxNSA0LjA5MDkxIDEwLjg2MzZDMy45MzkzOSAxMC43MTIxIDMuODMzMzMgMTAuNTc1OCAzLjc3MjczIDEwLjQyNDJDMy43MTIxMiAxMC4yODc5IDMuNjY2NjcgMTAuMTUxNSAzLjY2NjY3IDEwQzMuNjY2NjcgOS44NjM2NCAzLjY5Njk3IDkuNzI3MjcgMy43NzI3MyA5LjU3NTc2QzMuODkzOTQgOS4zMzMzMy'+
			'A0LjEyMTIxIDkuMDYwNjEgNC40ODQ4NSA4LjgxODE4QzUgOC40NTQ1NSA1Ljc1NzU4IDguMTM2MzYgNi42NjY2NyA3LjkwOTA5QzYuNjY2NjcgNy42NjY2NyA2LjY4MTgyIDcuNDI0MjQgNi42OTY5NyA3LjE5Njk3QzYuMTIxMjEgNy4zMzMzMyA1LjYwNjA2IDcuNSA1LjEzNjM2IDcuNjk2OTdDNC41MTUxNSA3Ljk2OTcgNCA4LjI4Nzg4IDMuNjIxMjEgOC42NjY2N0MzLjQzOTM5IDguODYzNjQgMy4yNzI3MyA5LjA2MDYxIDMuMTY2NjcgOS4yODc4OEMzLjA2MDYxIDkuNTE1MTUgMyA5Ljc1NzU4IDMgMTBDMyAxMC4yNDI0IDMuMDYwNjEgMTAuNDg0OCAzLjE2NjY3IDEwLjcxMjFDMy4zNDg0OCAx'+
			'MS4xMDYxIDMuNjgxODIgMTEuNDM5NCA0LjEwNjA2IDExLjcyNzNDNC43MjcyNyAxMi4xNjY3IDUuNTc1NzYgMTIuNTE1MiA2LjU3NTc2IDEyLjc1NzZDNyAxMi44NjM2IDcuNDY5NyAxMi45NTQ1IDcuOTM5MzkgMTMuMDE1MkM4LjE1MTUyIDEzLjUxNTIgOC4zNzg3OSAxMy45Njk3IDguNjM2MzYgMTQuMzYzNkM4Ljk1NDU1IDE0Ljg0ODUgOS4yODc4OCAxNS4yNTc2IDkuNjUxNTIgMTUuNTQ1NUM5LjgzMzMzIDE1LjY5NyAxMC4wMzAzIDE1LjgwMyAxMC4yMjczIDE1Ljg5MzlDMTAuNDI0MiAxNS45Njk3IDEwLjYzNjQgMTYuMDE1MiAxMC44NDg1IDE2LjAxNTJDMTAuOTM5NCAxNi4wMTUyIDExLj'+
			'AzMDMgMTYgMTEuMTIxMiAxNS45ODQ5QzExLjQzOTQgMTUuOTI0MiAxMS43MjczIDE1Ljc0MjQgMTEuOTU0NSAxNS41MTUyQzEyLjMwMyAxNS4xNTE1IDEyLjUzMDMgMTQuNjUxNSAxMi42OTcgMTQuMDQ1NUMxMi43NzI3IDEzLjc3MjcgMTIuODMzMyAxMy40Njk3IDEyLjg2MzYgMTMuMTUxNUMxMi43ODc5IDEzLjE2NjcgMTIuNjk3IDEzLjE4MTggMTIuNjIxMiAxMy4xOTdDMTIuNDY5NyAxMy4yMjczIDEyLjMxODIgMTMuMjQyNCAxMi4xNjY3IDEzLjI3MjdDMTIuMTA2MSAxMy42ODE4IDEyIDE0LjA2MDYgMTEuODc4OCAxNC4zNjM2QzExLjc1NzYgMTQuNjY2NyAxMS42MjEyIDE0Ljg5MzkgMTEu'+
			'NDY5NyAxNS4wNDU1QzExLjM3ODggMTUuMTM2NCAxMS4yODc5IDE1LjE5NyAxMS4xOTcgMTUuMjQyNEwxMC44MzMzIDEzLjM5MzlDMTAuNjk3IDEzLjM5MzkgMTAuNTYwNiAxMy40MDkxIDEwLjQyNDIgMTMuNDA5MUwxMC44MDMgMTUuMzE4MkMxMC43MTIxIDE1LjMxODIgMTAuNjA2MSAxNS4yODc5IDEwLjUgMTUuMjQyNEMxMC4yNzI3IDE1LjE1MTUgMTAuMDE1MiAxNC45Njk3IDkuNzcyNzMgMTQuNjk3QzkuNDA5MDkgMTQuMzE4MiA5LjA2MDYxIDEzLjc3MjcgOC43NDI0MyAxMy4wOTA5QzkuMTM2MzYgMTMuMTIxMiA5LjU0NTQ2IDEzLjEzNjQgOS45NTQ1NSAxMy4xMzY0QzExLjgxODIgMTMuMT'+
			'M2NCAxMy41IDEyLjgxODIgMTQuNzQyNCAxMi4yODc5QzE1LjM2MzYgMTIuMDE1MiAxNS44Nzg4IDExLjY5NyAxNi4yNTc2IDExLjMxODJDMTYuNDM5NCAxMS4xMjEyIDE2LjYwNjEgMTAuOTI0MiAxNi43MTIxIDEwLjY5N0MxNi44MTgyIDEwLjQ2OTcgMTYuODc4OCAxMC4yMjczIDE2Ljg3ODggOS45ODQ4NUMxNi44NjM2IDkuNzcyNzMgMTYuODAzIDkuNTMwMyAxNi42ODE4IDkuMzAzMDNaTTE2LjA3NTggMTAuNDM5NEMxNS45NTQ1IDEwLjY4MTggMTUuNzI3MyAxMC45NTQ1IDE1LjM2MzYgMTEuMTk3QzE0LjgzMzMgMTEuNTc1OCAxNC4wNjA2IDExLjg5MzkgMTMuMTIxMiAxMi4xMjEyQzEyLjE4'+
			'MTggMTIuMzQ4NSAxMS4wOTA5IDEyLjQ4NDkgOS45MjQyNCAxMi40ODQ5QzkuNDA5MDkgMTIuNDg0OSA4Ljg5Mzk0IDEyLjQ1NDUgOC40MDkwOSAxMi40MDkxQzguMTgxODIgMTEuODAzIDcuOTg0ODUgMTEuMTM2NCA3Ljg0ODQ5IDEwLjQyNDJDNy42ODE4MiA5LjU5MDkxIDcuNjA2MDYgOC44MDMwMyA3LjYwNjA2IDguMDc1NzZDNy42MDYwNiA3LjEwNjA2IDcuNzQyNDMgNi4yNTc1OCA3Ljk4NDg1IDUuNjY2NjdDOC4xMDYwNiA1LjM2MzY0IDguMjQyNDMgNS4xMzYzNiA4LjM5Mzk0IDQuOTg0ODVDOC40ODQ4NSA0Ljg5Mzk0IDguNTc1NzYgNC44MTgxOCA4LjY2NjY3IDQuNzcyNzNMOS43MTIxMi'+
			'AxMC4wNjA2TDEwLjEzNjQgMTIuMjEyMUMxMC4yNzI3IDEyLjIxMjEgMTAuNDA5MSAxMi4yMTIxIDEwLjU0NTUgMTIuMTk3TDEwLjEwNjEgOS45Njk3TDkuMDYwNjEgNC42ODE4MkM5LjE1MTUyIDQuNjgxODIgOS4yNTc1OCA0LjcxMjEyIDkuMzQ4NDkgNC43NTc1OEM5LjU3NTc2IDQuODQ4NDggOS44MzMzMyA1LjAzMDMgMTAuMDc1OCA1LjMwMzAzQzEwLjQzOTQgNS42ODE4MiAxMC43ODc5IDYuMjI3MjcgMTEuMTA2MSA2LjkwOTA5QzEwLjcxMjEgNi44Nzg3OSAxMC4zMDMgNi44NjM2NCA5Ljg5Mzk0IDYuODYzNjRDOS44NDg0OSA2Ljg2MzY0IDkuODAzMDMgNi44NjM2NCA5Ljc1NzU4IDYuODYz'+
			'NjRMOS44OTM5NCA3LjU0NTQ2QzEwLjQwOTEgNy41NDU0NiAxMC45MjQyIDcuNTc1NzYgMTEuNDA5MSA3LjYyMTIxQzExLjYzNjQgOC4yMjcyNyAxMS44MzMzIDguODkzOTQgMTEuOTY5NyA5LjYwNjA2QzEyLjEzNjQgMTAuNDM5NCAxMi4yMTIxIDExLjIyNzMgMTIuMjEyMSAxMS45NTQ1QzEyLjIxMjEgMTEuOTg0OSAxMi4yMTIxIDEyIDEyLjIxMjEgMTIuMDE1MkMxMi4zNzg4IDExLjk4NDggMTIuNTMwMyAxMS45NTQ1IDEyLjY4MTggMTEuOTI0MkMxMi43NTc2IDExLjkwOTEgMTIuODE4MiAxMS44OTM5IDEyLjg5MzkgMTEuODc4OEMxMi44OTM5IDExLjEyMTIgMTIuODAzIDEwLjMwMyAxMi42Mz'+
			'Y0IDkuNDY5N0MxMi41MTUyIDguODQ4NDkgMTIuMzQ4NSA4LjI1NzU4IDEyLjE2NjcgNy43MTIxMkMxMy4wMzAzIDcuODQ4NDkgMTMuNzg3OSA4LjA2MDYxIDE0LjQyNDIgOC4zMzMzM0MxNC45ODQ4IDguNTc1NzYgMTUuNDM5NCA4Ljg2MzY0IDE1LjcyNzMgOS4xNTE1MkMxNS44Nzg4IDkuMzAzMDMgMTUuOTg0OSA5LjQzOTM5IDE2LjA0NTUgOS41OTA5MUMxNi4xMDYxIDkuNzI3MjcgMTYuMTUxNSA5Ljg2MzY0IDE2LjE1MTUgMTAuMDE1MkMxNi4xNjY3IDEwLjE1MTUgMTYuMTM2NCAxMC4yODc5IDE2LjA3NTggMTAuNDM5NFoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2NiMjAyNyIvPgogPGxp'+
			'bmUgeDE9IjE2LjA0MTUiIHkxPSI0LjcwNzExIiBzdHJva2U9IiNjYjIwMjciIHkyPSIxNi4wNDE2IiB4Mj0iNC43MDcwMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIvPgo8L3N2Zz4K';
		me._grypo_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="grypo_off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._grypo_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._grypo_off.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['grypo_off'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._grypo_off.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._grypo_off.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._grypo_off.style.transition='transform 0s';
				if (me._grypo_off.ggCurrentLogicStateScaling == 0) {
					me._grypo_off.ggParameter.sx = 1.2;
					me._grypo_off.ggParameter.sy = 1.2;
					me._grypo_off.style.transform=parameterToTransform(me._grypo_off.ggParameter);
					skin.updateSize(me._grypo_off);
				}
				else {
					me._grypo_off.ggParameter.sx = 1;
					me._grypo_off.ggParameter.sy = 1;
					me._grypo_off.style.transform=parameterToTransform(me._grypo_off.ggParameter);
					skin.updateSize(me._grypo_off);
				}
			}
		}
		me._grypo_off.logicBlock_scaling();
		me._grypo_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_grypo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._grypo_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._grypo_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._grypo_off.style.transition='transform 0s';
				if (me._grypo_off.ggCurrentLogicStateVisible == 0) {
					me._grypo_off.style.visibility="hidden";
					me._grypo_off.ggVisible=false;
				}
				else {
					me._grypo_off.style.visibility=(Number(me._grypo_off.style.opacity)>0||!me._grypo_off.style.opacity)?'inherit':'hidden';
					me._grypo_off.ggVisible=true;
				}
			}
		}
		me._grypo_off.logicBlock_visible();
		me._grypo_off.onmouseover=function (e) {
			me.elementMouseOver['grypo_off']=true;
			me._grypo_off.logicBlock_scaling();
		}
		me._grypo_off.onmouseout=function (e) {
			me.elementMouseOver['grypo_off']=false;
			me._grypo_off.logicBlock_scaling();
		}
		me._grypo_off.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_grypo.appendChild(me._grypo_off);
		el=me._grypo_on=document.createElement('div');
		els=me._grypo_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgaGVpZ2h0PSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIj4KIDxjaXJjbGUgcj0iOS41IiBjeD0iMTAiIHN0cm9rZT0iI2NiMjAyNyIgY3k9IjEwIiBzdHJva2Utb3BhY2l0eT0iMSIvPgogPHBhdGggZD0iTTE2LjY4MTggOS4zMDMwM0MxNi41IDguOTA5MDkgMTYuMTY2NyA4LjU3NTc2IDE1Ljc1NzYgOC4yODc4OEMxNS4xMzY0IDcuODQ4NDkgMTQuMjg3OSA3LjUgMTMuMjg3OSA3LjI1NzU4QzEyLjg2MzYgNy4xNTE1MiAxMi4zOTM5IDcuMDc1NzYgMTEuOTI0MiA3QzExLjcxMjEgNi41ID'+
			'ExLjQ4NDggNi4wNDU0NSAxMS4yMjczIDUuNjUxNTJDMTAuOTA5MSA1LjE2NjY3IDEwLjU3NTggNC43NTc1OCAxMC4yMTIxIDQuNDY5N0MxMC4wMzAzIDQuMzE4MTggOS44MzMzMyA0LjIxMjEyIDkuNjM2MzYgNC4xMjEyMUM5LjQzOTM5IDQuMDQ1NDUgOS4yMjcyNyA0IDkuMDE1MTUgNEM4LjkyNDI0IDQgOC44MzMzMyA0LjAxNTE1IDguNzQyNDMgNC4wMzAzQzguNDI0MjQgNC4wOTA5MSA4LjEzNjM2IDQuMjcyNzMgNy45MDkwOSA0LjVDNy41NjA2MSA0Ljg2MzY0IDcuMzMzMzMgNS4zNjM2NCA3LjE2NjY3IDUuOTY5N0M3IDYuNTc1NzYgNi45MjQyNCA3LjI4Nzg4IDYuOTI0MjQgOC4wNjA2MUM2'+
			'LjkyNDI0IDguODMzMzMgNyA5LjY4MTgyIDcuMTgxODIgMTAuNTQ1NUM3LjMwMzAzIDExLjE2NjcgNy40Njk3IDExLjc1NzYgNy42NTE1MiAxMi4zMDNDNi43ODc4OCAxMi4xNjY3IDYuMDE1MTUgMTEuOTU0NSA1LjM5Mzk0IDExLjY4MThDNC44MzMzMyAxMS40Mzk0IDQuMzc4NzkgMTEuMTUxNSA0LjA5MDkxIDEwLjg2MzZDMy45MzkzOSAxMC43MTIxIDMuODMzMzMgMTAuNTc1OCAzLjc3MjczIDEwLjQyNDJDMy43MTIxMiAxMC4yODc5IDMuNjY2NjcgMTAuMTUxNSAzLjY2NjY3IDEwQzMuNjY2NjcgOS44NjM2NCAzLjY5Njk3IDkuNzI3MjcgMy43NzI3MyA5LjU3NTc2QzMuODkzOTQgOS4zMzMzMy'+
			'A0LjEyMTIxIDkuMDYwNjEgNC40ODQ4NSA4LjgxODE4QzUgOC40NTQ1NSA1Ljc1NzU4IDguMTM2MzYgNi42NjY2NyA3LjkwOTA5QzYuNjY2NjcgNy42NjY2NyA2LjY4MTgyIDcuNDI0MjQgNi42OTY5NyA3LjE5Njk3QzYuMTIxMjEgNy4zMzMzMyA1LjYwNjA2IDcuNSA1LjEzNjM2IDcuNjk2OTdDNC41MTUxNSA3Ljk2OTcgNCA4LjI4Nzg4IDMuNjIxMjEgOC42NjY2N0MzLjQzOTM5IDguODYzNjQgMy4yNzI3MyA5LjA2MDYxIDMuMTY2NjcgOS4yODc4OEMzLjA2MDYxIDkuNTE1MTUgMyA5Ljc1NzU4IDMgMTBDMyAxMC4yNDI0IDMuMDYwNjEgMTAuNDg0OCAzLjE2NjY3IDEwLjcxMjFDMy4zNDg0OCAx'+
			'MS4xMDYxIDMuNjgxODIgMTEuNDM5NCA0LjEwNjA2IDExLjcyNzNDNC43MjcyNyAxMi4xNjY3IDUuNTc1NzYgMTIuNTE1MiA2LjU3NTc2IDEyLjc1NzZDNyAxMi44NjM2IDcuNDY5NyAxMi45NTQ1IDcuOTM5MzkgMTMuMDE1MkM4LjE1MTUyIDEzLjUxNTIgOC4zNzg3OSAxMy45Njk3IDguNjM2MzYgMTQuMzYzNkM4Ljk1NDU1IDE0Ljg0ODUgOS4yODc4OCAxNS4yNTc2IDkuNjUxNTIgMTUuNTQ1NUM5LjgzMzMzIDE1LjY5NyAxMC4wMzAzIDE1LjgwMyAxMC4yMjczIDE1Ljg5MzlDMTAuNDI0MiAxNS45Njk3IDEwLjYzNjQgMTYuMDE1MiAxMC44NDg1IDE2LjAxNTJDMTAuOTM5NCAxNi4wMTUyIDExLj'+
			'AzMDMgMTYgMTEuMTIxMiAxNS45ODQ5QzExLjQzOTQgMTUuOTI0MiAxMS43MjczIDE1Ljc0MjQgMTEuOTU0NSAxNS41MTUyQzEyLjMwMyAxNS4xNTE1IDEyLjUzMDMgMTQuNjUxNSAxMi42OTcgMTQuMDQ1NUMxMi43NzI3IDEzLjc3MjcgMTIuODMzMyAxMy40Njk3IDEyLjg2MzYgMTMuMTUxNUMxMi43ODc5IDEzLjE2NjcgMTIuNjk3IDEzLjE4MTggMTIuNjIxMiAxMy4xOTdDMTIuNDY5NyAxMy4yMjczIDEyLjMxODIgMTMuMjQyNCAxMi4xNjY3IDEzLjI3MjdDMTIuMTA2MSAxMy42ODE4IDEyIDE0LjA2MDYgMTEuODc4OCAxNC4zNjM2QzExLjc1NzYgMTQuNjY2NyAxMS42MjEyIDE0Ljg5MzkgMTEu'+
			'NDY5NyAxNS4wNDU1QzExLjM3ODggMTUuMTM2NCAxMS4yODc5IDE1LjE5NyAxMS4xOTcgMTUuMjQyNEwxMC44MzMzIDEzLjM5MzlDMTAuNjk3IDEzLjM5MzkgMTAuNTYwNiAxMy40MDkxIDEwLjQyNDIgMTMuNDA5MUwxMC44MDMgMTUuMzE4MkMxMC43MTIxIDE1LjMxODIgMTAuNjA2MSAxNS4yODc5IDEwLjUgMTUuMjQyNEMxMC4yNzI3IDE1LjE1MTUgMTAuMDE1MiAxNC45Njk3IDkuNzcyNzMgMTQuNjk3QzkuNDA5MDkgMTQuMzE4MiA5LjA2MDYxIDEzLjc3MjcgOC43NDI0MyAxMy4wOTA5QzkuMTM2MzYgMTMuMTIxMiA5LjU0NTQ2IDEzLjEzNjQgOS45NTQ1NSAxMy4xMzY0QzExLjgxODIgMTMuMT'+
			'M2NCAxMy41IDEyLjgxODIgMTQuNzQyNCAxMi4yODc5QzE1LjM2MzYgMTIuMDE1MiAxNS44Nzg4IDExLjY5NyAxNi4yNTc2IDExLjMxODJDMTYuNDM5NCAxMS4xMjEyIDE2LjYwNjEgMTAuOTI0MiAxNi43MTIxIDEwLjY5N0MxNi44MTgyIDEwLjQ2OTcgMTYuODc4OCAxMC4yMjczIDE2Ljg3ODggOS45ODQ4NUMxNi44NjM2IDkuNzcyNzMgMTYuODAzIDkuNTMwMyAxNi42ODE4IDkuMzAzMDNaTTE2LjA3NTggMTAuNDM5NEMxNS45NTQ1IDEwLjY4MTggMTUuNzI3MyAxMC45NTQ1IDE1LjM2MzYgMTEuMTk3QzE0LjgzMzMgMTEuNTc1OCAxNC4wNjA2IDExLjg5MzkgMTMuMTIxMiAxMi4xMjEyQzEyLjE4'+
			'MTggMTIuMzQ4NSAxMS4wOTA5IDEyLjQ4NDkgOS45MjQyNCAxMi40ODQ5QzkuNDA5MDkgMTIuNDg0OSA4Ljg5Mzk0IDEyLjQ1NDUgOC40MDkwOSAxMi40MDkxQzguMTgxODIgMTEuODAzIDcuOTg0ODUgMTEuMTM2NCA3Ljg0ODQ5IDEwLjQyNDJDNy42ODE4MiA5LjU5MDkxIDcuNjA2MDYgOC44MDMwMyA3LjYwNjA2IDguMDc1NzZDNy42MDYwNiA3LjEwNjA2IDcuNzQyNDMgNi4yNTc1OCA3Ljk4NDg1IDUuNjY2NjdDOC4xMDYwNiA1LjM2MzY0IDguMjQyNDMgNS4xMzYzNiA4LjM5Mzk0IDQuOTg0ODVDOC40ODQ4NSA0Ljg5Mzk0IDguNTc1NzYgNC44MTgxOCA4LjY2NjY3IDQuNzcyNzNMOS43MTIxMi'+
			'AxMC4wNjA2TDEwLjEzNjQgMTIuMjEyMUMxMC4yNzI3IDEyLjIxMjEgMTAuNDA5MSAxMi4yMTIxIDEwLjU0NTUgMTIuMTk3TDEwLjEwNjEgOS45Njk3TDkuMDYwNjEgNC42ODE4MkM5LjE1MTUyIDQuNjgxODIgOS4yNTc1OCA0LjcxMjEyIDkuMzQ4NDkgNC43NTc1OEM5LjU3NTc2IDQuODQ4NDggOS44MzMzMyA1LjAzMDMgMTAuMDc1OCA1LjMwMzAzQzEwLjQzOTQgNS42ODE4MiAxMC43ODc5IDYuMjI3MjcgMTEuMTA2MSA2LjkwOTA5QzEwLjcxMjEgNi44Nzg3OSAxMC4zMDMgNi44NjM2NCA5Ljg5Mzk0IDYuODYzNjRDOS44NDg0OSA2Ljg2MzY0IDkuODAzMDMgNi44NjM2NCA5Ljc1NzU4IDYuODYz'+
			'NjRMOS44OTM5NCA3LjU0NTQ2QzEwLjQwOTEgNy41NDU0NiAxMC45MjQyIDcuNTc1NzYgMTEuNDA5MSA3LjYyMTIxQzExLjYzNjQgOC4yMjcyNyAxMS44MzMzIDguODkzOTQgMTEuOTY5NyA5LjYwNjA2QzEyLjEzNjQgMTAuNDM5NCAxMi4yMTIxIDExLjIyNzMgMTIuMjEyMSAxMS45NTQ1QzEyLjIxMjEgMTEuOTg0OSAxMi4yMTIxIDEyIDEyLjIxMjEgMTIuMDE1MkMxMi4zNzg4IDExLjk4NDggMTIuNTMwMyAxMS45NTQ1IDEyLjY4MTggMTEuOTI0MkMxMi43NTc2IDExLjkwOTEgMTIuODE4MiAxMS44OTM5IDEyLjg5MzkgMTEuODc4OEMxMi44OTM5IDExLjEyMTIgMTIuODAzIDEwLjMwMyAxMi42Mz'+
			'Y0IDkuNDY5N0MxMi41MTUyIDguODQ4NDkgMTIuMzQ4NSA4LjI1NzU4IDEyLjE2NjcgNy43MTIxMkMxMy4wMzAzIDcuODQ4NDkgMTMuNzg3OSA4LjA2MDYxIDE0LjQyNDIgOC4zMzMzM0MxNC45ODQ4IDguNTc1NzYgMTUuNDM5NCA4Ljg2MzY0IDE1LjcyNzMgOS4xNTE1MkMxNS44Nzg4IDkuMzAzMDMgMTUuOTg0OSA5LjQzOTM5IDE2LjA0NTUgOS41OTA5MUMxNi4xMDYxIDkuNzI3MjcgMTYuMTUxNSA5Ljg2MzY0IDE2LjE1MTUgMTAuMDE1MkMxNi4xNjY3IDEwLjE1MTUgMTYuMTM2NCAxMC4yODc5IDE2LjA3NTggMTAuNDM5NFoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2NiMjAyNyIvPgo8L3N2'+
			'Zz4K';
		me._grypo_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="grypo_on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._grypo_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._grypo_on.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['grypo_on'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._grypo_on.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._grypo_on.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._grypo_on.style.transition='transform 0s';
				if (me._grypo_on.ggCurrentLogicStateScaling == 0) {
					me._grypo_on.ggParameter.sx = 1.2;
					me._grypo_on.ggParameter.sy = 1.2;
					me._grypo_on.style.transform=parameterToTransform(me._grypo_on.ggParameter);
					skin.updateSize(me._grypo_on);
				}
				else {
					me._grypo_on.ggParameter.sx = 1;
					me._grypo_on.ggParameter.sy = 1;
					me._grypo_on.style.transform=parameterToTransform(me._grypo_on.ggParameter);
					skin.updateSize(me._grypo_on);
				}
			}
		}
		me._grypo_on.logicBlock_scaling();
		me._grypo_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_grypo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._grypo_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._grypo_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._grypo_on.style.transition='transform 0s';
				if (me._grypo_on.ggCurrentLogicStateVisible == 0) {
					me._grypo_on.style.visibility=(Number(me._grypo_on.style.opacity)>0||!me._grypo_on.style.opacity)?'inherit':'hidden';
					me._grypo_on.ggVisible=true;
				}
				else {
					me._grypo_on.style.visibility="hidden";
					me._grypo_on.ggVisible=false;
				}
			}
		}
		me._grypo_on.logicBlock_visible();
		me._grypo_on.onmouseover=function (e) {
			me.elementMouseOver['grypo_on']=true;
			me._grypo_on.logicBlock_scaling();
		}
		me._grypo_on.onmouseout=function (e) {
			me.elementMouseOver['grypo_on']=false;
			me._grypo_on.logicBlock_scaling();
		}
		me._grypo_on.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_grypo.appendChild(me._grypo_on);
		me._rectangle_2.appendChild(me._toggle_grypo);
		el=me._toggle_rotate=document.createElement('div');
		el.ggId="toggle_rotate";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 69px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_rotate.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasSounds() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._toggle_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._toggle_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._toggle_rotate.style.transition='';
				if (me._toggle_rotate.ggCurrentLogicStateVisible == 0) {
					me._toggle_rotate.style.visibility=(Number(me._toggle_rotate.style.opacity)>0||!me._toggle_rotate.style.opacity)?'inherit':'hidden';
					me._toggle_rotate.ggVisible=true;
				}
				else {
					me._toggle_rotate.style.visibility="hidden";
					me._toggle_rotate.ggVisible=false;
				}
			}
		}
		me._toggle_rotate.logicBlock_visible();
		me._toggle_rotate.onclick=function (e) {
			player.toggleAutorotate();
			player.setVariableValue('toggle_rotate', !player.getVariableValue('toggle_rotate'));
		}
		me._toggle_rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._rotate_off=document.createElement('div');
		els=me._rotate_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgaGVpZ2h0PSIzNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIj4KIDxwYXRoIGQ9Ik0xOC41NTU1IDAuMDAwMjU4OTMxQzE1LjY2MDUgLTAuMDE1MTU1MiAxMi43NjM4IDAuNjU3NjIyIDEwLjExNTQgMi4wMjA1TDExLjI3NzQgNC4yNzg0MUMxNS41MTExIDIuMDk5NyAyMC40Nzg4IDEuOTY1MzUgMjQuNzk4NSAzLjg3MTczTDIzLjQ3ODEgNS40NjE1MUwzMS41NTM3IDcuNzE2NzhMMjcuODUzOSAwLjE5MzA0TDI2LjQ3MjggMS44NTY3N0MyMy45NzY0IDAuNjM1NzYzIDIxLjI2NjkgMC4wMTQ2OT'+
			'U0IDE4LjU1NTUgMC4wMDAyNTg5MzFaIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNjYjIwMjciLz4KIDxwYXRoIGQ9Ik0zNC44OTY5IDEwLjExNzJMMzIuNjM5IDExLjI3OTJDMzQuODE3NyAxNS41MTI4IDM0Ljk1MjEgMjAuNDgwNiAzMy4wNDU3IDI0LjgwMDJMMzEuNDU1OSAyMy40Nzk4TDI5LjIwMDYgMzEuNTU1NUwzNi43MjQ0IDI3Ljg1NTdMMzUuMDYwNyAyNi40NzQ1QzM3LjU4NTQgMjEuMzEyOCAzNy41MzYyIDE1LjI0NTkgMzQuODk2OSAxMC4xMTcyWiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjY2IyMDI3Ii8+CiA8cGF0aCBkPSJNNS4zNjIxNCAyOS4yMDIxTDkuMDYxOTYgMzYuNzI1'+
			'OUwxMC40NDMxIDM1LjA2MjJDMTUuNjA0OSAzNy41ODY5IDIxLjY3MTggMzcuNTM3NyAyNi44MDA1IDM0Ljg5ODRMMjUuNjM4NSAzMi42NDA1QzIxLjQwNDggMzQuODE5MiAxNi40MzcgMzQuOTUzNiAxMi4xMTc0IDMzLjA0NzJMMTMuNDM3OCAzMS40NTc0TDUuMzYyMTQgMjkuMjAyMVoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2NiMjAyNyIvPgogPHBhdGggZD0iTTcuNzE1NDggNS4zNjI3OUwwLjE5MTczMyA5LjA2MjYxTDEuODU1NDYgMTAuNDQzOEMtMC42NjkyNDEgMTUuNjA1NSAtMC42MjAxMTcgMjEuNjcyNCAyLjAxOTE5IDI2LjgwMTFMNC4yNzcxMSAyNS42MzkxQzIuMDk4MzkgMjEuND'+
			'A1NSAxLjk2NDA0IDE2LjQzNzcgMy44NzA0MiAxMi4xMTgxTDUuNDYwMiAxMy40Mzg1TDcuNzE1NDggNS4zNjI3OVoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2NiMjAyNyIvPgogPHBhdGggc3Ryb2tlPSIjY2IyMDI3IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIGQ9Ik0zNSAzNUwyIDIiLz4KPC9zdmc+Cg==';
		me._rotate_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rotate_off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rotate_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate_off.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['rotate_off'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rotate_off.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rotate_off.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rotate_off.style.transition='transform 0s';
				if (me._rotate_off.ggCurrentLogicStateScaling == 0) {
					me._rotate_off.ggParameter.sx = 1.2;
					me._rotate_off.ggParameter.sy = 1.2;
					me._rotate_off.style.transform=parameterToTransform(me._rotate_off.ggParameter);
					skin.updateSize(me._rotate_off);
				}
				else {
					me._rotate_off.ggParameter.sx = 1;
					me._rotate_off.ggParameter.sy = 1;
					me._rotate_off.style.transform=parameterToTransform(me._rotate_off.ggParameter);
					skin.updateSize(me._rotate_off);
				}
			}
		}
		me._rotate_off.logicBlock_scaling();
		me._rotate_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_rotate') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rotate_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rotate_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rotate_off.style.transition='transform 0s';
				if (me._rotate_off.ggCurrentLogicStateVisible == 0) {
					me._rotate_off.style.visibility="hidden";
					me._rotate_off.ggVisible=false;
				}
				else {
					me._rotate_off.style.visibility=(Number(me._rotate_off.style.opacity)>0||!me._rotate_off.style.opacity)?'inherit':'hidden';
					me._rotate_off.ggVisible=true;
				}
			}
		}
		me._rotate_off.logicBlock_visible();
		me._rotate_off.onmouseover=function (e) {
			me.elementMouseOver['rotate_off']=true;
			me._rotate_off.logicBlock_scaling();
		}
		me._rotate_off.onmouseout=function (e) {
			me.elementMouseOver['rotate_off']=false;
			me._rotate_off.logicBlock_scaling();
		}
		me._rotate_off.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_rotate.appendChild(me._rotate_off);
		el=me._rotate_on=document.createElement('div');
		els=me._rotate_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgaGVpZ2h0PSIzNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIj4KIDxwYXRoIGQ9Ik0xOC41NTU1IDAuMDM0NDM4NkMxNS42NjA1IDAuMDE5MDI0NSAxMi43NjM4IDAuNjkxODAyIDEwLjExNTQgMi4wNTQ2OEwxMS4yNzc0IDQuMzEyNTlDMTUuNTExMSAyLjEzMzg4IDIwLjQ3ODggMS45OTk1MyAyNC43OTg1IDMuOTA1OUwyMy40NzgxIDUuNDk1NjlMMzEuNTUzNyA3Ljc1MDk2TDI3Ljg1MzkgMC4yMjcyMkwyNi40NzI4IDEuODkwOTVDMjMuOTc2NCAwLjY2OTk0MiAyMS4yNjY5IDAuMDQ4ODc1MS'+
			'AxOC41NTU1IDAuMDM0NDM4NloiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2NiMjAyNyIvPgogPHBhdGggZD0iTTM0Ljg5NjkgMTAuMTUxNEwzMi42MzkgMTEuMzEzM0MzNC44MTc3IDE1LjU0NyAzNC45NTIxIDIwLjUxNDggMzMuMDQ1NyAyNC44MzQ0TDMxLjQ1NTkgMjMuNTE0TDI5LjIwMDYgMzEuNTg5N0wzNi43MjQ0IDI3Ljg4OTlMMzUuMDYwNyAyNi41MDg3QzM3LjU4NTQgMjEuMzQ2OSAzNy41MzYyIDE1LjI4MDEgMzQuODk2OSAxMC4xNTE0WiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjY2IyMDI3Ii8+CiA8cGF0aCBkPSJNNS4zNjIxNSAyOS4yMzYzTDkuMDYxOTYgMzYuNzYwMUwxMC40'+
			'NDMxIDM1LjA5NjNDMTUuNjA0OSAzNy42MjEgMjEuNjcxOCAzNy41NzE5IDI2LjgwMDUgMzQuOTMyNkwyNS42Mzg1IDMyLjY3NDdDMjEuNDA0OCAzNC44NTM0IDE2LjQzNyAzNC45ODc4IDEyLjExNzQgMzMuMDgxNEwxMy40Mzc4IDMxLjQ5MTZMNS4zNjIxNSAyOS4yMzYzWiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjY2IyMDI3Ii8+CiA8cGF0aCBkPSJNNy43MTU0OCA1LjM5Njk3TDAuMTkxNzMzIDkuMDk2NzhMMS44NTU0NiAxMC40Nzc5Qy0wLjY2OTI0MSAxNS42Mzk3IC0wLjYyMDExNyAyMS43MDY2IDIuMDE5MTkgMjYuODM1M0w0LjI3NzExIDI1LjY3MzNDMi4wOTgzOSAyMS40Mzk2IDEuOT'+
			'Y0MDQgMTYuNDcxOSAzLjg3MDQyIDEyLjE1MjJMNS40NjAyIDEzLjQ3MjdMNy43MTU0OCA1LjM5Njk3WiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjY2IyMDI3Ii8+Cjwvc3ZnPgo=';
		me._rotate_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rotate_on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rotate_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate_on.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['rotate_on'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rotate_on.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rotate_on.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rotate_on.style.transition='transform 0s';
				if (me._rotate_on.ggCurrentLogicStateScaling == 0) {
					me._rotate_on.ggParameter.sx = 1.2;
					me._rotate_on.ggParameter.sy = 1.2;
					me._rotate_on.style.transform=parameterToTransform(me._rotate_on.ggParameter);
					skin.updateSize(me._rotate_on);
				}
				else {
					me._rotate_on.ggParameter.sx = 1;
					me._rotate_on.ggParameter.sy = 1;
					me._rotate_on.style.transform=parameterToTransform(me._rotate_on.ggParameter);
					skin.updateSize(me._rotate_on);
				}
			}
		}
		me._rotate_on.logicBlock_scaling();
		me._rotate_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_rotate') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rotate_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rotate_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rotate_on.style.transition='transform 0s';
				if (me._rotate_on.ggCurrentLogicStateVisible == 0) {
					me._rotate_on.style.visibility=(Number(me._rotate_on.style.opacity)>0||!me._rotate_on.style.opacity)?'inherit':'hidden';
					me._rotate_on.ggVisible=true;
				}
				else {
					me._rotate_on.style.visibility="hidden";
					me._rotate_on.ggVisible=false;
				}
			}
		}
		me._rotate_on.logicBlock_visible();
		me._rotate_on.onmouseover=function (e) {
			me.elementMouseOver['rotate_on']=true;
			me._rotate_on.logicBlock_scaling();
		}
		me._rotate_on.onmouseout=function (e) {
			me.elementMouseOver['rotate_on']=false;
			me._rotate_on.logicBlock_scaling();
		}
		me._rotate_on.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_rotate.appendChild(me._rotate_on);
		me._rectangle_2.appendChild(me._toggle_rotate);
		el=me._btn_vr=document.createElement('div');
		els=me._btn_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbC1vcGFjaXR5PSIxIiBjbGFzcz0iYmkgYmktaGVhZHNldC12ciIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2IyMDI3Ij4KIDxwYXRoIGQ9Ik04IDEuMjQ4YzEuODU3IDAgMy41MjYuNjQxIDQuNjUgMS43OTRhNC45NzggNC45NzggMCAwIDEgMi41MTggMS4wOUMxMy45MDcgMS40ODIgMTEuMjk1IDAgOCAwIDQuNzUgMCAyLjEyIDEuNDguODQ0IDQuMTIyYTQuOTc5IDQuOTc5IDAgMCAxIDIuMjg5LTEuMDQ3QzQuMjM2IDEuODcyIDUuOTc0IDEuMjQ4IDggMS4yNDh6Ii8+Ci'+
			'A8cGF0aCBkPSJNMTIgMTJhMy45ODggMy45ODggMCAwIDEtMi43ODYtMS4xM2wtLjAwMi0uMDAyYTEuNjEyIDEuNjEyIDAgMCAwLS4yNzYtLjE2N0EyLjE2NCAyLjE2NCAwIDAgMCA4IDEwLjVjLS40MTQgMC0uNzI5LjEwMy0uOTM1LjIwMWExLjYxMiAxLjYxMiAwIDAgMC0uMjc3LjE2N2wtLjAwMi4wMDJBNCA0IDAgMSAxIDQgNGg4YTQgNCAwIDAgMSAwIDh6Ii8+Cjwvc3ZnPgo=';
		me._btn_vr__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_vr";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_vr.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['btn_vr'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._btn_vr.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._btn_vr.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._btn_vr.style.transition='transform 0s';
				if (me._btn_vr.ggCurrentLogicStateScaling == 0) {
					me._btn_vr.ggParameter.sx = 1.2;
					me._btn_vr.ggParameter.sy = 1.2;
					me._btn_vr.style.transform=parameterToTransform(me._btn_vr.ggParameter);
					skin.updateSize(me._btn_vr);
				}
				else {
					me._btn_vr.ggParameter.sx = 1;
					me._btn_vr.ggParameter.sy = 1;
					me._btn_vr.style.transform=parameterToTransform(me._btn_vr.ggParameter);
					skin.updateSize(me._btn_vr);
				}
			}
		}
		me._btn_vr.logicBlock_scaling();
		me._btn_vr.onclick=function (e) {
			player.enterVR();
		}
		me._btn_vr.onmouseover=function (e) {
			me.elementMouseOver['btn_vr']=true;
			me._btn_vr.logicBlock_scaling();
		}
		me._btn_vr.onmouseout=function (e) {
			me.elementMouseOver['btn_vr']=false;
			me._btn_vr.logicBlock_scaling();
		}
		me._btn_vr.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me._btn_vr);
		el=me._btn_info=document.createElement('div');
		els=me._btn_info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbC1vcGFjaXR5PSIxIiBjbGFzcz0iYmkgYmktaW5mbyIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2IyMDI3Ij4KIDxwYXRoIGQ9Im04LjkzIDYuNTg4LTIuMjkuMjg3LS4wODIuMzguNDUuMDgzYy4yOTQuMDcuMzUyLjE3Ni4yODguNDY5bC0uNzM4IDMuNDY4Yy0uMTk0Ljg5Ny4xMDUgMS4zMTkuODA4IDEuMzE5LjU0NSAwIDEuMTc4LS4yNTIgMS40NjUtLjU5OGwuMDg4LS40MTZjLS4yLjE3Ni0uNDkyLjI0Ni0uNjg2LjI0Ni0uMjc1IDAtLjM3NS0uMTkzLS4zMDQtLjUzM0'+
			'w4LjkzIDYuNTg4ek05IDQuNWExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDB6Ii8+Cjwvc3ZnPgo=';
		me._btn_info__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_info";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_info.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['btn_info'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._btn_info.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._btn_info.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._btn_info.style.transition='transform 0s';
				if (me._btn_info.ggCurrentLogicStateScaling == 0) {
					me._btn_info.ggParameter.sx = 1.2;
					me._btn_info.ggParameter.sy = 1.2;
					me._btn_info.style.transform=parameterToTransform(me._btn_info.ggParameter);
					skin.updateSize(me._btn_info);
				}
				else {
					me._btn_info.ggParameter.sx = 1;
					me._btn_info.ggParameter.sy = 1;
					me._btn_info.style.transform=parameterToTransform(me._btn_info.ggParameter);
					skin.updateSize(me._btn_info);
				}
			}
		}
		me._btn_info.logicBlock_scaling();
		me._btn_info.onclick=function (e) {
			player.setVariableValue('vis_info', !player.getVariableValue('vis_info'));
		}
		me._btn_info.onmouseover=function (e) {
			me.elementMouseOver['btn_info']=true;
			me._btn_info.logicBlock_scaling();
		}
		me._btn_info.onmouseout=function (e) {
			me.elementMouseOver['btn_info']=false;
			me._btn_info.logicBlock_scaling();
		}
		me._btn_info.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me._btn_info);
		me._control_left_vertical.appendChild(me._rectangle_2);
		me.divSkin.appendChild(me._control_left_vertical);
		el=me._controls_right_top=document.createElement('div');
		el.ggId="controls_right_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 145px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_right_top.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controls_right_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._controls_right_top_bg=document.createElement('div');
		el.ggId="controls_right_top_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_right_top_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controls_right_top_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._bg_fullscreen=document.createElement('div');
		el.ggId="bg_fullscreen";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d61130;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bg_fullscreen.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['bg_fullscreen'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._bg_fullscreen.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._bg_fullscreen.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._bg_fullscreen.style.transition='background-color 0s';
				if (me._bg_fullscreen.ggCurrentLogicStateBackgroundColor == 0) {
					me._bg_fullscreen.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._bg_fullscreen.style.backgroundColor="rgba(214,17,48,1)";
				}
			}
		}
		me._bg_fullscreen.logicBlock_backgroundcolor();
		me._bg_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._bg_fullscreen.onmouseover=function (e) {
			me.elementMouseOver['bg_fullscreen']=true;
			me._bg_fullscreen.logicBlock_backgroundcolor();
		}
		me._bg_fullscreen.onmouseout=function (e) {
			me.elementMouseOver['bg_fullscreen']=false;
			me._bg_fullscreen.logicBlock_backgroundcolor();
		}
		me._bg_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_fullscreen=document.createElement('div');
		els=me._btn_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIj4KIDxwYXRoIGQ9Ik0yNy40MTQgMjQuNTg2TDIyLjgyOCAyMEwyMCAyMi44MjhMMjQuNTg2IDI3LjQxNEwyMCAzMkgzMlYyMEwyNy40MTQgMjQuNTg2WiIgZmlsbD0id2hpdGUiLz4KIDxwYXRoIGQ9Ik0xMiAwSDBWMTJMNC41ODYgNy40MTRMOS4xMjkgMTEuOTUzTDExLjk1NyA5LjEyNUw3LjQxNCA0LjU4NkwxMiAwWiIgZmlsbD0id2hpdGUiLz4KIDxwYXRoIGQ9Ik0xMiAyMi44MjhMOS4xNzIgMjBMNC41ODYgMjQuNTg2TDAgMj'+
			'BWMzJIMTJMNy40MTQgMjcuNDE0TDEyIDIyLjgyOFoiIGZpbGw9IndoaXRlIi8+CiA8cGF0aCBkPSJNMzIgMEgyMEwyNC41ODYgNC41ODZMMjAuMDQzIDkuMTI1TDIyLjg3MSAxMS45NTNMMjcuNDE0IDcuNDE0TDMyIDEyVjBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K';
		me._btn_fullscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_fullscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._bg_fullscreen.appendChild(me._btn_fullscreen);
		me._controls_right_top_bg.appendChild(me._bg_fullscreen);
		el=me._bg_list_model=document.createElement('div');
		el.ggId="bg_list_model";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d61130;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg_list_model.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bg_list_model.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['bg_list_model'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._bg_list_model.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._bg_list_model.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._bg_list_model.style.transition='background-color 0s';
				if (me._bg_list_model.ggCurrentLogicStateBackgroundColor == 0) {
					me._bg_list_model.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._bg_list_model.style.backgroundColor="rgba(214,17,48,1)";
				}
			}
		}
		me._bg_list_model.logicBlock_backgroundcolor();
		me._bg_list_model.onclick=function (e) {
			player.openUrl("https:\/\/listmodel.vn3d.com.vn\/","_blank");
		}
		me._bg_list_model.onmouseover=function (e) {
			me.elementMouseOver['bg_list_model']=true;
			me._bg_list_model.logicBlock_backgroundcolor();
		}
		me._bg_list_model.onmouseout=function (e) {
			me.elementMouseOver['bg_list_model']=false;
			me._bg_list_model.logicBlock_backgroundcolor();
		}
		me._bg_list_model.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_list_model=document.createElement('div');
		els=me._btn_list_model__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0zIDloMTRWN0gzdjJ6bTAgNGgxNHYtMkgzdjJ6bTAgNGgxNHYtMkgzdjJ6bTE2IDBoMnYtMmgtMnYyem0wLTEwdjJoMlY3aC0yem0wIDZoMnYtMmgtMnYyeiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+Cjwvc3ZnPgo=';
		me._btn_list_model__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_list_model";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_list_model.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_list_model.ggUpdatePosition=function (useTransition) {
		}
		me._bg_list_model.appendChild(me._btn_list_model);
		me._controls_right_top_bg.appendChild(me._bg_list_model);
		el=me._bg_floorplan=document.createElement('div');
		el.ggId="bg_floorplan";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d61130;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg_floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bg_floorplan.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['bg_floorplan'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._bg_floorplan.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._bg_floorplan.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._bg_floorplan.style.transition='background-color 0s';
				if (me._bg_floorplan.ggCurrentLogicStateBackgroundColor == 0) {
					me._bg_floorplan.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._bg_floorplan.style.backgroundColor="rgba(214,17,48,1)";
				}
			}
		}
		me._bg_floorplan.logicBlock_backgroundcolor();
		me._bg_floorplan.onclick=function (e) {
			player.setVariableValue('vis_floorplan', true);
			player.setVariableValue('vis_floorplan_full', true);
		}
		me._bg_floorplan.onmouseover=function (e) {
			me.elementMouseOver['bg_floorplan']=true;
			me._bg_floorplan.logicBlock_backgroundcolor();
		}
		me._bg_floorplan.onmouseout=function (e) {
			me.elementMouseOver['bg_floorplan']=false;
			me._bg_floorplan.logicBlock_backgroundcolor();
		}
		me._bg_floorplan.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_floorplan=document.createElement('div');
		els=me._btn_floorplan__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjI0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iI0ZGRkZGRiI+CiA8cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz4KIDxwYXRoIGQ9Ik0xNC42NSA0Ljk4bC01LTEuNzVjLS40Mi0uMTUtLjg4LS4xNS0xLjMtLjAxTDQuMzYgNC41NkMzLjU1IDQuODQgMyA1LjYgMyA2LjQ2djExLjg1YzAgMS40MSAxLjQxIDIuMzcgMi43MiAxLjg2bDIuOTMtMS4xNGMuMjItLjA5LjQ3LS4wOS42OS0uMDFsNSAxLjc1Yy40Mi4xNS44OC4xNSAxLjMuMDFsMy45OS0xLjM0Yy44MS'+
			'0uMjcgMS4zNi0xLjA0IDEuMzYtMS45VjUuNjljMC0xLjQxLTEuNDEtMi4zNy0yLjcyLTEuODZsLTIuOTMgMS4xNGMtLjIyLjA4LS40Ni4wOS0uNjkuMDF6TTE1IDE4Ljg5bC02LTIuMTFWNS4xMWw2IDIuMTF2MTEuNjd6Ii8+Cjwvc3ZnPgo=';
		me._btn_floorplan__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_floorplan";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_floorplan.ggUpdatePosition=function (useTransition) {
		}
		me._bg_floorplan.appendChild(me._btn_floorplan);
		me._controls_right_top_bg.appendChild(me._bg_floorplan);
		el=me._bg_home=document.createElement('div');
		el.ggId="bg_home";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d61130;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg_home.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bg_home.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['bg_home'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._bg_home.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._bg_home.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._bg_home.style.transition='background-color 0s';
				if (me._bg_home.ggCurrentLogicStateBackgroundColor == 0) {
					me._bg_home.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._bg_home.style.backgroundColor="rgba(214,17,48,1)";
				}
			}
		}
		me._bg_home.logicBlock_backgroundcolor();
		me._bg_home.onclick=function (e) {
			player.openNext("{node15}","");
		}
		me._bg_home.onmouseover=function (e) {
			me.elementMouseOver['bg_home']=true;
			me._bg_home.logicBlock_backgroundcolor();
		}
		me._bg_home.onmouseout=function (e) {
			me.elementMouseOver['bg_home']=false;
			me._bg_home.logicBlock_backgroundcolor();
		}
		me._bg_home.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_home=document.createElement('div');
		els=me._btn_home__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjI0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iI0ZGRkZGRiI+CiA8cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz4KIDxwYXRoIGQ9Ik0xMCAxOXYtNWg0djVjMCAuNTUuNDUgMSAxIDFoM2MuNTUgMCAxLS40NSAxLTF2LTdoMS43Yy40NiAwIC42OC0uNTcuMzMtLjg3TDEyLjY3IDMuNmMtLjM4LS4zNC0uOTYtLjM0LTEuMzQgMGwtOC4zNiA3LjUzYy0uMzQuMy0uMTMuODcuMzMuODdINXY3YzAgLjU1LjQ1IDEgMSAxaDNjLjU1IDAgMS0uNDUgMS0xeiIvPgo8L3'+
			'N2Zz4K';
		me._btn_home__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_home";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_home.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_home.ggUpdatePosition=function (useTransition) {
		}
		me._bg_home.appendChild(me._btn_home);
		me._controls_right_top_bg.appendChild(me._bg_home);
		me._controls_right_top.appendChild(me._controls_right_top_bg);
		me.divSkin.appendChild(me._controls_right_top);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 50px;';
		hs+='height : 400px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 335px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style.transition='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.logicBlock_visible();
		me._information.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggDy=19;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 84%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((84% + 0px) / 2) + 19px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: normal;';
		hs+='text-align: justify;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_2.ggUpdateText();
		});
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me._text_2);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #d61130;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_1.ggUpdateText();
		});
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXgiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSIjZmZmZmZmIiB3aWR0aD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPGxpbmUgeDE9IjE4IiB5MT0iNiIgeTI9IjE4IiB4Mj0iNiIvPgogPGxpbmUgeDE9IjYiIHkxPSI2IiB5Mj0iMTgiIHgyPSIxOCIvPgo8L3N2Zz4K';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['svg_1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_1.style.transition='transform 0s';
				if (me._svg_1.ggCurrentLogicStateScaling == 0) {
					me._svg_1.ggParameter.sx = 1.2;
					me._svg_1.ggParameter.sy = 1.2;
					me._svg_1.style.transform=parameterToTransform(me._svg_1.ggParameter);
					skin.updateSize(me._svg_1);
				}
				else {
					me._svg_1.ggParameter.sx = 1;
					me._svg_1.ggParameter.sy = 1;
					me._svg_1.style.transform=parameterToTransform(me._svg_1.ggParameter);
					skin.updateSize(me._svg_1);
				}
			}
		}
		me._svg_1.logicBlock_scaling();
		me._svg_1.onclick=function (e) {
			player.setVariableValue('vis_info', false);
		}
		me._svg_1.onmouseover=function (e) {
			me.elementMouseOver['svg_1']=true;
			me._svg_1.logicBlock_scaling();
		}
		me._svg_1.onmouseout=function (e) {
			me.elementMouseOver['svg_1']=false;
			me._svg_1.logicBlock_scaling();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._text_1.appendChild(me._svg_1);
		me._rectangle_3.appendChild(me._text_1);
		me._information.appendChild(me._rectangle_3);
		me.divSkin.appendChild(me._information);
		me._background_blur.logicBlock_visible();
		me._share.logicBlock_position();
		me._share.logicBlock_visible();
		me._copy.logicBlock_visible();
		me._twitter.logicBlock_visible();
		me._facebook.logicBlock_visible();
		me._info.logicBlock_visible();
		me._map.logicBlock_visible();
		me._map_content.ggInitMap=function() {};
		me._map_content.ggInitMapMarkers=function() {};
		me._map_content.ggClearMap=function() {};
		me._map_content.logicBlock_visible();
		me._floorplan_content.ggInitMap=function() {};
		me._floorplan_content.ggInitMapMarkers=function() {};
		me._floorplan_content.ggClearMap=function() {};
		me._floorplan_content.logicBlock_visible();
		me._map_fullscreen.logicBlock_visible();
		me._map_fs_content.ggInitMap=function() {};
		me._map_fs_content.ggInitMapMarkers=function() {};
		me._map_fs_content.ggClearMap=function() {};
		me._map_fs_content.logicBlock_visible();
		me._floorplan_fs_content.ggInitMap=function() {};
		me._floorplan_fs_content.ggInitMapMarkers=function() {};
		me._floorplan_fs_content.ggClearMap=function() {};
		me._floorplan_fs_content.logicBlock_visible();
		me._map_fs_small.logicBlock_visible();
		me._thumbnails.logicBlock_visible();
		me._thumbnails_fullscreen.logicBlock_visible();
		me._video_hs_popup.logicBlock_visible();
		me._video_youtube_hs_popup_vid.logicBlock_visible();
		me._video_youtube_hs_popup_vid.ggVideoSource = '';
		me._video_youtube_hs_popup_vid.ggVideoNotLoaded = true;
		me._video_vimeo_hs_popup_vid.logicBlock_visible();
		me._video_vimeo_hs_popup_vid.ggVideoSource = '';
		me._video_vimeo_hs_popup_vid.ggVideoNotLoaded = true;
		me._video_file_hs_popup_vid.logicBlock_visible();
		me._video_file_hs_popup_vid.ggVideoSource = 'media/';
		me._video_file_hs_popup_vid.ggVideoNotLoaded = true;
		me._video_file_hs_popup_play.logicBlock_visible();
		me._video_url_hs_popup_vid.logicBlock_visible();
		me._video_url_hs_popup_vid.ggVideoSource = 'media/';
		me._video_url_hs_popup_vid.ggVideoNotLoaded = true;
		me._video_url_hs_popup_play.logicBlock_visible();
		me._video_controller.logicBlock_visible();
		me._pdf_hs_popup.logicBlock_visible();
		me._image_hs_popup_fullscreen.logicBlock_visible();
		me._image_hs_popup_fs_img.logicBlock_size();
		me._url_hs_popup.logicBlock_visible();
		me._popup_phone.logicBlock_position();
		me._popup_phone.logicBlock_size();
		me._popup_phone.logicBlock_visible();
		me._info_popup_phone.logicBlock_visible();
		me._thumbnail_scroller_phone.logicBlock_visible();
		me._map_el_phone.ggInitMap=function() {};
		me._map_el_phone.ggInitMapMarkers=function() {};
		me._map_el_phone.ggClearMap=function() {};
		me._map_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggInitMap=function() {};
		me._floorplan_el_phone.ggInitMapMarkers=function() {};
		me._floorplan_el_phone.ggClearMap=function() {};
		me._floorplan_el_phone.logicBlock_visible();
		me._image_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.logicBlock_visible();
		me._video_controller_phone.logicBlock_visible();
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggVideoSource = '';
		me._youtube_popup_phone.ggVideoNotLoaded = true;
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggVideoSource = '';
		me._vimeo_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.ggVideoSource = 'media/';
		me._video_file_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone_play.logicBlock_visible();
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.ggVideoSource = 'media/';
		me._video_url_popup_phone.ggVideoNotLoaded = true;
		me._video_url_popup_phone_play.logicBlock_visible();
		el = me._local_fonts;
		;
		me._next.logicBlock_scaling();
		me._rectangle_1.logicBlock_scaling();
		me._pause.logicBlock_visible();
		me._play.logicBlock_visible();
		me._prev.logicBlock_scaling();
		me._toggle_audio.logicBlock_visible();
		me._audio_off.logicBlock_scaling();
		me._audio_off.logicBlock_visible();
		me._audio_on.logicBlock_scaling();
		me._audio_on.logicBlock_visible();
		me._setting.logicBlock_angle();
		me._control_left_vertical.logicBlock_visible();
		me._toggle_grypo.logicBlock_visible();
		me._grypo_off.logicBlock_scaling();
		me._grypo_off.logicBlock_visible();
		me._grypo_on.logicBlock_scaling();
		me._grypo_on.logicBlock_visible();
		me._toggle_rotate.logicBlock_visible();
		me._rotate_off.logicBlock_scaling();
		me._rotate_off.logicBlock_visible();
		me._rotate_on.logicBlock_scaling();
		me._rotate_on.logicBlock_visible();
		me._btn_vr.logicBlock_scaling();
		me._btn_info.logicBlock_scaling();
		me._bg_fullscreen.logicBlock_backgroundcolor();
		me._bg_list_model.logicBlock_backgroundcolor();
		me._bg_floorplan.logicBlock_backgroundcolor();
		me._bg_home.logicBlock_backgroundcolor();
		me._information.logicBlock_visible();
		me._svg_1.logicBlock_scaling();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('floor_hotspot')) {
				for(var i = 0; i < hotspotTemplates['floor_hotspot'].length; i++) {
					hotspotTemplates['floor_hotspot'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image_backup')) {
				for(var i = 0; i < hotspotTemplates['ht_image_backup'].length; i++) {
					hotspotTemplates['ht_image_backup'][i].ggEvent_activehotspotchanged();
				}
			}
			me._info.logicBlock_visible();
		});
		player.addListener('autorotatechanged', function(event) {
			me._pause.logicBlock_visible();
			me._play.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbnails_fs_cloner.ggInstances.length; i++) {
				me._thumbnails_fs_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbnails_cloner.ggInstances.length; i++) {
				me._thumbnails_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('floor_hotspot')) {
				for(var i = 0; i < hotspotTemplates['floor_hotspot'].length; i++) {
					hotspotTemplates['floor_hotspot'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image_backup')) {
				for(var i = 0; i < hotspotTemplates['ht_image_backup'].length; i++) {
					hotspotTemplates['ht_image_backup'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_vis_controls_left.logicBlock();
			me._variable_vis_video_hs_popup.logicBlock();
			me._variable_opt_share.logicBlock();
			me._background_blur.logicBlock_visible();
			me._share.logicBlock_position();
			me._share.logicBlock_visible();
			me._copy.logicBlock_visible();
			me._twitter.logicBlock_visible();
			me._facebook.logicBlock_visible();
			me._info.logicBlock_visible();
			me._map.logicBlock_visible();
			me._map_content.logicBlock_visible();
			me._floorplan_content.logicBlock_visible();
			me._map_fullscreen.logicBlock_visible();
			me._map_fs_content.logicBlock_visible();
			me._floorplan_fs_content.logicBlock_visible();
			me._map_fs_small.logicBlock_visible();
			me._thumbnails.logicBlock_visible();
			me._thumbnails_cloner.ggUpdateConditionNodeChange();
			me._thumbnails_fullscreen.logicBlock_visible();
			me._thumbnails_fs_cloner.ggUpdateConditionNodeChange();
			me._video_hs_popup.logicBlock_visible();
			me._video_youtube_hs_popup_vid.logicBlock_visible();
			me._video_vimeo_hs_popup_vid.logicBlock_visible();
			me._video_file_hs_popup_vid.logicBlock_visible();
			me._video_file_hs_popup_play.logicBlock_visible();
			me._video_url_hs_popup_vid.logicBlock_visible();
			me._video_url_hs_popup_play.logicBlock_visible();
			me._video_controller.logicBlock_visible();
			me._video_controller_seekbar.ggConnectToMediaEl();
			me._pdf_hs_popup.logicBlock_visible();
			me._image_hs_popup_fullscreen.logicBlock_visible();
			me._image_hs_popup_fs_img.logicBlock_size();
			me._url_hs_popup.logicBlock_visible();
			me._popup_phone.logicBlock_position();
			me._popup_phone.logicBlock_size();
			me._popup_phone.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.logicBlock_visible();
			me._node_cloner_phone.ggUpdateConditionNodeChange();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_controller_seekbar_phone.ggConnectToMediaEl();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
			me._pause.logicBlock_visible();
			me._play.logicBlock_visible();
			me._audio_off.logicBlock_visible();
			me._audio_on.logicBlock_visible();
			me._control_left_vertical.logicBlock_visible();
			me._grypo_off.logicBlock_visible();
			me._grypo_on.logicBlock_visible();
			me._rotate_off.logicBlock_visible();
			me._rotate_on.logicBlock_visible();
			me._information.logicBlock_visible();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._thumbnails_fs_cloner.ggInstances.length; i++) {
				me._thumbnails_fs_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._thumbnails_cloner.ggInstances.length; i++) {
				me._thumbnails_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('floor_hotspot')) {
				for(var i = 0; i < hotspotTemplates['floor_hotspot'].length; i++) {
					hotspotTemplates['floor_hotspot'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image_backup')) {
				for(var i = 0; i < hotspotTemplates['ht_image_backup'].length; i++) {
					hotspotTemplates['ht_image_backup'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_vis_controls_left.logicBlock();
			me._variable_vis_video_hs_popup.logicBlock();
			me._variable_opt_maps.logicBlock();
			me._variable_opt_floorplans.logicBlock();
			me._variable_opt_share.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			me._background_blur.logicBlock_visible();
			me._share.logicBlock_position();
			me._share.logicBlock_visible();
			player.setVariableValue('pos_share_buttons', Number("8.00"));
			if (
				(
					((player.getVariableValue('opt_share_facebook') == true))
				)
			) {
				player.setVariableValue('pos_share_buttons', player.getVariableValue('pos_share_buttons') + Number("32.00"));
			}
			me._twitter.style.transition='none';
			me._twitter.ggParameter.rx=player.getVariableValue('pos_share_buttons', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._twitter.ggParameter.ry=0;
			me._twitter.style.transform=parameterToTransform(me._twitter.ggParameter);
			if (
				(
					((player.getVariableValue('opt_share_twitter') == true))
				)
			) {
				player.setVariableValue('pos_share_buttons', player.getVariableValue('pos_share_buttons') + Number("32.00"));
			}
			me._copy.style.transition='none';
			me._copy.ggParameter.rx=player.getVariableValue('pos_share_buttons', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._copy.ggParameter.ry=0;
			me._copy.style.transform=parameterToTransform(me._copy.ggParameter);
			me._copy.logicBlock_visible();
			me._twitter.logicBlock_visible();
			me._facebook.logicBlock_visible();
			me._info.logicBlock_visible();
			me._map.logicBlock_visible();
			me._map_content.logicBlock_visible();
			me._floorplan_content.logicBlock_visible();
			me._map_fullscreen.logicBlock_visible();
			me._map_fs_content.logicBlock_visible();
			me._floorplan_fs_content.logicBlock_visible();
			me._map_fs_small.logicBlock_visible();
			me._thumbnails.logicBlock_visible();
			me._thumbnails_scroller.ggUpdatePosition();
			me._thumbnails_fullscreen.logicBlock_visible();
			me._thumbnails_fs_scroller.ggUpdatePosition();
			me._video_hs_popup.logicBlock_visible();
			me._video_youtube_hs_popup_vid.logicBlock_visible();
			me._video_vimeo_hs_popup_vid.logicBlock_visible();
			me._video_file_hs_popup_vid.logicBlock_visible();
			me._video_file_hs_popup_play.logicBlock_visible();
			me._video_url_hs_popup_vid.logicBlock_visible();
			me._video_url_hs_popup_play.logicBlock_visible();
			me._video_controller.logicBlock_visible();
			me._pdf_hs_popup.logicBlock_visible();
			me._image_hs_popup_fullscreen.logicBlock_visible();
			me._image_hs_popup_fs_img.logicBlock_size();
			me._url_hs_popup.logicBlock_visible();
			me._popup_phone.logicBlock_position();
			me._popup_phone.logicBlock_size();
			me._popup_phone.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.ggUpdatePosition();
			me._thumbnail_scroller_phone.logicBlock_visible();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
			me._toggle_audio.logicBlock_visible();
			me._audio_off.logicBlock_visible();
			me._audio_on.logicBlock_visible();
			me._control_left_vertical.logicBlock_visible();
			me._toggle_grypo.logicBlock_visible();
			me._grypo_off.logicBlock_visible();
			me._grypo_on.logicBlock_visible();
			me._toggle_rotate.logicBlock_visible();
			me._rotate_off.logicBlock_visible();
			me._rotate_on.logicBlock_visible();
			me._information.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			if (hotspotTemplates.hasOwnProperty('floor_hotspot')) {
				for(var i = 0; i < hotspotTemplates['floor_hotspot'].length; i++) {
					hotspotTemplates['floor_hotspot'][i].ggEvent_hastouch();
				}
			}
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_desktop.logicBlock();
			me._variable_resp_tablet.logicBlock();
			me._variable_resp_phone.logicBlock();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_image_hs_description', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_image_hs_description();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image_backup')) {
				for(var i = 0; i < hotspotTemplates['ht_image_backup'].length; i++) {
					hotspotTemplates['ht_image_backup'][i].ggEvent_varchanged_image_hs_description();
				}
			}
			me._image_hs_popup_fs_img.logicBlock_size();
		});
		player.addListener('varchanged_opt_share_copy', function(event) {
			me._variable_opt_share.logicBlock();
			me._copy.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_facebook', function(event) {
			me._variable_opt_share.logicBlock();
			me._facebook.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_twitter', function(event) {
			me._variable_opt_share.logicBlock();
			me._twitter.logicBlock_visible();
		});
		player.addListener('varchanged_resp_desktop', function(event) {
			me._map.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._variable_vis_controls_left.logicBlock();
			me._share.logicBlock_position();
			me._map_fs_small.logicBlock_visible();
			me._popup_phone.logicBlock_position();
			me._popup_phone.logicBlock_size();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_toggle_audio', function(event) {
			me._audio_off.logicBlock_visible();
			me._audio_on.logicBlock_visible();
		});
		player.addListener('varchanged_toggle_grypo', function(event) {
			me._grypo_off.logicBlock_visible();
			me._grypo_on.logicBlock_visible();
		});
		player.addListener('varchanged_toggle_rotate', function(event) {
			me._rotate_off.logicBlock_visible();
			me._rotate_on.logicBlock_visible();
		});
		player.addListener('varchanged_vis_control_left_vertical', function(event) {
			me._control_left_vertical.logicBlock_visible();
		});
		player.addListener('varchanged_vis_floorplan', function(event) {
			me._map.logicBlock_visible();
			me._floorplan_content.logicBlock_visible();
		});
		player.addListener('varchanged_vis_floorplan_full', function(event) {
			me._background_blur.logicBlock_visible();
			me._map_fullscreen.logicBlock_visible();
			me._floorplan_fs_content.logicBlock_visible();
		});
		player.addListener('varchanged_vis_image_hs_popup_full', function(event) {
			me._background_blur.logicBlock_visible();
			me._image_hs_popup_fullscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_image_hs_popups', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_image_hs_popups();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image_backup')) {
				for(var i = 0; i < hotspotTemplates['ht_image_backup'].length; i++) {
					hotspotTemplates['ht_image_backup'][i].ggEvent_varchanged_vis_image_hs_popups();
				}
			}
		});
		player.addListener('varchanged_vis_info', function(event) {
			me._info.logicBlock_visible();
			me._information.logicBlock_visible();
		});
		player.addListener('varchanged_vis_info_hs_popups', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_info_hs_popups();
				}
			}
		});
		player.addListener('varchanged_vis_map', function(event) {
			me._map.logicBlock_visible();
			me._map_content.logicBlock_visible();
		});
		player.addListener('varchanged_vis_map_full', function(event) {
			me._background_blur.logicBlock_visible();
			me._map_fullscreen.logicBlock_visible();
			me._map_fs_content.logicBlock_visible();
		});
		player.addListener('varchanged_vis_pdf_hs_popup', function(event) {
			me._background_blur.logicBlock_visible();
			me._pdf_hs_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_floorplan', function(event) {
			me._floorplan_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._image_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._info_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_map', function(event) {
			me._map_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._pdf_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_popup', function(event) {
			me._popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_thumbs', function(event) {
			me._thumbnail_scroller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._video_controller_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._video_controller_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._vimeo_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._youtube_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_share', function(event) {
			me._share.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image_backup')) {
				for(var i = 0; i < hotspotTemplates['ht_image_backup'].length; i++) {
					hotspotTemplates['ht_image_backup'][i].ggEvent_varchanged_vis_skin();
				}
			}
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
		});
		player.addListener('varchanged_vis_thumbnails', function(event) {
			me._thumbnails.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbnails_full', function(event) {
			me._background_blur.logicBlock_visible();
			me._thumbnails_fullscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_url_hs_popup', function(event) {
			me._background_blur.logicBlock_visible();
			me._url_hs_popup.logicBlock_visible();
			if (
				(
					((player.getVariableValue('vis_url_hs_popup') == false))
				)
			) {
					me._url_hs_popup_iframe.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._url_hs_popup_iframe.ggUpdateText();
				me._url_hs_popup_iframe.ggTextDiv.scrollTop = 0;
			}
		});
		player.addListener('varchanged_vis_video_file_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
			me._video_file_hs_popup_vid.logicBlock_visible();
			me._video_file_hs_popup_play.logicBlock_visible();
			me._video_controller.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_hs_popup', function(event) {
			me._background_blur.logicBlock_visible();
			me._video_hs_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_url_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
			me._video_url_hs_popup_vid.logicBlock_visible();
			me._video_url_hs_popup_play.logicBlock_visible();
			me._video_controller.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_vimeo_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
			me._video_vimeo_hs_popup_vid.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_youtube_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
			me._video_youtube_hs_popup_vid.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._thumbnails_cloner.ggUpdate();
			me._thumbnails_fs_cloner.ggUpdate();
			me._node_cloner_phone.ggUpdate();
		});
	};
	function SkinCloner_node_cloner_phone_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_node_image_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_node_image_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_node_image_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		els.setAttribute('src',basePath + "images/ht_node_preview_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 8px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_node_image_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 112px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_node_image_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_node_image_phone.onclick=function (e) {
			if (me._thumbnail_node_image_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_phone_thumbs', false);
			player.setVariableValue('vis_phone_popup', false);
		}
		me._thumbnail_node_image_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_node_title_bg_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_node_title_bg_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_node_title_bg_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(40,40,40,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 33%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_node_title_bg_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_node_title_bg_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_node_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_node_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_node_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_node_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_node_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_node_title_phone.ggUpdateText();
		el.appendChild(els);
		me._thumbnail_node_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_node_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_node_title_bg_phone.appendChild(me._thumbnail_node_title_phone);
		me._thumbnail_node_image_phone.appendChild(me._thumbnail_node_title_bg_phone);
		el=me._thumbnail_node_active_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_node_active_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_node_active_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 4px solid #e6e6e6;';
		hs+='border-radius : 8px;';
		hs+='cursor : default;';
		hs+='height : 104px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_node_active_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_node_active_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._thumbnail_node_active_phone.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_node_active_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_node_active_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_node_active_phone.style.transition='';
				if (me._thumbnail_node_active_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_node_active_phone.style.visibility=(Number(me._thumbnail_node_active_phone.style.opacity)>0||!me._thumbnail_node_active_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_node_active_phone.ggVisible=true;
				}
				else {
					me._thumbnail_node_active_phone.style.visibility="hidden";
					me._thumbnail_node_active_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_node_active_phone.logicBlock_visible();
		me._thumbnail_node_active_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_node_image_phone.appendChild(me._thumbnail_node_active_phone);
		me.__div.appendChild(me._thumbnail_node_image_phone);
		el=me._thumbnail_visited_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiNFNkU2RTY7c3Ryb2tlLXdpZHRoOjY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxnIGlkPSJoaWdobGlnaHQiPgogIDxjaXJjbGUgcj0iMzEiIGN4PSIzMiIgY3k9IjMyIiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBjbGFzcz0ic3QxIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEi'+
			'PgogIDxwb2x5bGluZSBwb2ludHM9IjE4LjYsMjYuNyAzMC45LDQ4IDQ5LjQsMTYgICIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnail_visited_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited_phone.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited_phone.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited_phone.style.transition='';
				if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited_phone.style.visibility=(Number(me._thumbnail_visited_phone.style.opacity)>0||!me._thumbnail_visited_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited_phone.ggVisible=true;
				}
				else {
					me._thumbnail_visited_phone.style.visibility="hidden";
					me._thumbnail_visited_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited_phone.logicBlock_visible();
		me._thumbnail_visited_phone.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited_phone);
		me._thumbnail_node_active_phone.logicBlock_visible();
		me._thumbnail_visited_phone.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_node_active_phone.logicBlock_visible();
				me._thumbnail_visited_phone.logicBlock_visible();
				me._thumbnail_visited_phone.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited_phone.logicBlock_visible();
			};
	};
	function SkinCloner_thumbnails_fs_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnails_fs_node_image=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_node_image;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_fs_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		els.setAttribute('src',basePath + "images/ht_node_preview_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 8px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnails_fs_node_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 112px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_node_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnails_fs_node_image.onclick=function (e) {
			if (me._thumbnails_fs_node_image.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnails_full', false);
		}
		me._thumbnails_fs_node_image.onmouseover=function (e) {
			me.elementMouseOver['thumbnails_fs_node_image']=true;
			me._thumbnails_fs_node_title_bg.logicBlock_visible();
		}
		me._thumbnails_fs_node_image.onmouseout=function (e) {
			me.elementMouseOver['thumbnails_fs_node_image']=false;
			me._thumbnails_fs_node_title_bg.logicBlock_visible();
		}
		me._thumbnails_fs_node_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_fs_node_title_bg=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_node_title_bg;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnails_fs_node_title_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(40,40,40,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 33%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_node_title_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_node_title_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnails_fs_node_image'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fs_node_title_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fs_node_title_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fs_node_title_bg.style.transition='';
				if (me._thumbnails_fs_node_title_bg.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fs_node_title_bg.style.visibility=(Number(me._thumbnails_fs_node_title_bg.style.opacity)>0||!me._thumbnails_fs_node_title_bg.style.opacity)?'inherit':'hidden';
					me._thumbnails_fs_node_title_bg.ggVisible=true;
				}
				else {
					me._thumbnails_fs_node_title_bg.style.visibility="hidden";
					me._thumbnails_fs_node_title_bg.ggVisible=false;
				}
			}
		}
		me._thumbnails_fs_node_title_bg.logicBlock_visible();
		me._thumbnails_fs_node_title_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_fs_node_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_node_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_fs_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnails_fs_node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnails_fs_node_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnails_fs_node_title.ggUpdateText();
		el.appendChild(els);
		me._thumbnails_fs_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fs_node_title_bg.appendChild(me._thumbnails_fs_node_title);
		me._thumbnails_fs_node_image.appendChild(me._thumbnails_fs_node_title_bg);
		el=me._thumbnails_fs_node_active=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_node_active;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnails_fs_node_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 4px solid #e6e6e6;';
		hs+='border-radius : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 104px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_node_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_node_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._thumbnails_fs_node_active.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fs_node_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fs_node_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fs_node_active.style.transition='';
				if (me._thumbnails_fs_node_active.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fs_node_active.style.visibility=(Number(me._thumbnails_fs_node_active.style.opacity)>0||!me._thumbnails_fs_node_active.style.opacity)?'inherit':'hidden';
					me._thumbnails_fs_node_active.ggVisible=true;
				}
				else {
					me._thumbnails_fs_node_active.style.visibility="hidden";
					me._thumbnails_fs_node_active.ggVisible=false;
				}
			}
		}
		me._thumbnails_fs_node_active.logicBlock_visible();
		me._thumbnails_fs_node_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fs_node_image.appendChild(me._thumbnails_fs_node_active);
		me.__div.appendChild(me._thumbnails_fs_node_image);
		el=me._thumbnails_fs_visited=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_visited;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_fs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiNFNkU2RTY7c3Ryb2tlLXdpZHRoOjY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxnIGlkPSJoaWdobGlnaHQiPgogIDxjaXJjbGUgcj0iMzEiIGN4PSIzMiIgY3k9IjMyIiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBjbGFzcz0ic3QxIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEi'+
			'PgogIDxwb2x5bGluZSBwb2ludHM9IjE4LjYsMjYuNyAzMC45LDQ4IDQ5LjQsMTYgICIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_fs_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnails_fs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='height : 18px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnails_fs_visited.ggElementNodeId()) == true)) || 
				((me._thumbnails_fs_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fs_visited.style.transition='';
				if (me._thumbnails_fs_visited.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fs_visited.style.visibility=(Number(me._thumbnails_fs_visited.style.opacity)>0||!me._thumbnails_fs_visited.style.opacity)?'inherit':'hidden';
					me._thumbnails_fs_visited.ggVisible=true;
				}
				else {
					me._thumbnails_fs_visited.style.visibility="hidden";
					me._thumbnails_fs_visited.ggVisible=false;
				}
			}
		}
		me._thumbnails_fs_visited.logicBlock_visible();
		me._thumbnails_fs_visited.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnails_fs_visited);
		me._thumbnails_fs_node_title_bg.logicBlock_visible();
		me._thumbnails_fs_node_active.logicBlock_visible();
		me._thumbnails_fs_visited.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnails_fs_node_active.logicBlock_visible();
				me._thumbnails_fs_visited.logicBlock_visible();
				me._thumbnails_fs_visited.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnails_fs_visited.logicBlock_visible();
			};
	};
	function SkinCloner_thumbnails_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnails_node_image=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_node_image;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		els.setAttribute('src',basePath + "images/ht_node_preview_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 8px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnails_node_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 112px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_node_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnails_node_image.onclick=function (e) {
			if (me._thumbnails_node_image.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnails_node_image.onmouseover=function (e) {
			me.elementMouseOver['thumbnails_node_image']=true;
			me._thumbnails_node_title_bg.logicBlock_visible();
		}
		me._thumbnails_node_image.onmouseout=function (e) {
			me.elementMouseOver['thumbnails_node_image']=false;
			me._thumbnails_node_title_bg.logicBlock_visible();
		}
		me._thumbnails_node_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_node_title_bg=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_node_title_bg;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnails_node_title_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(40,40,40,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 33%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_node_title_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_node_title_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnails_node_image'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_node_title_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_node_title_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_node_title_bg.style.transition='';
				if (me._thumbnails_node_title_bg.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_node_title_bg.style.visibility=(Number(me._thumbnails_node_title_bg.style.opacity)>0||!me._thumbnails_node_title_bg.style.opacity)?'inherit':'hidden';
					me._thumbnails_node_title_bg.ggVisible=true;
				}
				else {
					me._thumbnails_node_title_bg.style.visibility="hidden";
					me._thumbnails_node_title_bg.ggVisible=false;
				}
			}
		}
		me._thumbnails_node_title_bg.logicBlock_visible();
		me._thumbnails_node_title_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_node_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_node_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnails_node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnails_node_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnails_node_title.ggUpdateText();
		el.appendChild(els);
		me._thumbnails_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_node_title_bg.appendChild(me._thumbnails_node_title);
		me._thumbnails_node_image.appendChild(me._thumbnails_node_title_bg);
		el=me._thumbnails_node_active=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_node_active;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnails_node_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 4px solid #e6e6e6;';
		hs+='border-radius : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 104px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_node_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_node_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._thumbnails_node_active.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_node_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_node_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_node_active.style.transition='';
				if (me._thumbnails_node_active.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_node_active.style.visibility=(Number(me._thumbnails_node_active.style.opacity)>0||!me._thumbnails_node_active.style.opacity)?'inherit':'hidden';
					me._thumbnails_node_active.ggVisible=true;
				}
				else {
					me._thumbnails_node_active.style.visibility="hidden";
					me._thumbnails_node_active.ggVisible=false;
				}
			}
		}
		me._thumbnails_node_active.logicBlock_visible();
		me._thumbnails_node_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_node_image.appendChild(me._thumbnails_node_active);
		me.__div.appendChild(me._thumbnails_node_image);
		el=me._thumbnails_visited=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_visited;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiNFNkU2RTY7c3Ryb2tlLXdpZHRoOjY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxnIGlkPSJoaWdobGlnaHQiPgogIDxjaXJjbGUgcj0iMzEiIGN4PSIzMiIgY3k9IjMyIiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBjbGFzcz0ic3QxIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEi'+
			'PgogIDxwb2x5bGluZSBwb2ludHM9IjE4LjYsMjYuNyAzMC45LDQ4IDQ5LjQsMTYgICIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnails_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='height : 18px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnails_visited.ggElementNodeId()) == true)) || 
				((me._thumbnails_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_visited.style.transition='';
				if (me._thumbnails_visited.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_visited.style.visibility=(Number(me._thumbnails_visited.style.opacity)>0||!me._thumbnails_visited.style.opacity)?'inherit':'hidden';
					me._thumbnails_visited.ggVisible=true;
				}
				else {
					me._thumbnails_visited.style.visibility="hidden";
					me._thumbnails_visited.ggVisible=false;
				}
			}
		}
		me._thumbnails_visited.logicBlock_visible();
		me._thumbnails_visited.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnails_visited);
		me._thumbnails_node_title_bg.logicBlock_visible();
		me._thumbnails_node_active.logicBlock_visible();
		me._thumbnails_visited.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnails_node_active.logicBlock_visible();
				me._thumbnails_visited.logicBlock_visible();
				me._thumbnails_visited.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnails_visited.logicBlock_visible();
			};
	};
	function SkinHotspotClass_ht_image_backup(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image_backup=document.createElement('div');
		el.ggId="ht_image_backup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 404px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_backup.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image_backup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_backup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_backup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_backup.style.transition='';
				if (me._ht_image_backup.ggCurrentLogicStateVisible == 0) {
					me._ht_image_backup.style.visibility=(Number(me._ht_image_backup.style.opacity)>0||!me._ht_image_backup.style.opacity)?'inherit':'hidden';
					me._ht_image_backup.ggVisible=true;
				}
				else {
					me._ht_image_backup.style.visibility="hidden";
					me._ht_image_backup.ggVisible=false;
				}
			}
		}
		me._ht_image_backup.logicBlock_visible();
		me._ht_image_backup.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image_backup.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image_backup.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image_backup']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image_backup.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image_backup']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image_backup.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_hs_popup=document.createElement('div');
		el.ggId="image_hs_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 4px solid #141414;';
		hs+='border-radius : 18px;';
		hs+='bottom : -330px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((300px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('vis_image_hs_popups')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_hs_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_hs_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_hs_popup.style.transition='';
				if (me._image_hs_popup.ggCurrentLogicStateVisible == 0) {
					me._image_hs_popup.style.visibility=(Number(me._image_hs_popup.style.opacity)>0||!me._image_hs_popup.style.opacity)?'inherit':'hidden';
					me._image_hs_popup.ggVisible=true;
				}
				else {
					me._image_hs_popup.style.visibility="hidden";
					me._image_hs_popup.ggVisible=false;
				}
			}
		}
		me._image_hs_popup.logicBlock_visible();
		me._image_hs_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_hs_popup_description=document.createElement('div');
		els=me._image_hs_popup_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_hs_popup_description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : calc(25% - 32px);';
		hs+='left : 19px;';
		hs+='position : absolute;';
		hs+='top : calc(75% + 16px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._image_hs_popup_description.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('image_hs_description', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_hs_popup_description.ggUpdateText();
		player.addListener('timer', function() {
			me._image_hs_popup_description.ggUpdateText();
		});
		el.appendChild(els);
		me._image_hs_popup_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_description.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup.appendChild(me._image_hs_popup_description);
		el=me._image_hs_popup_img=document.createElement('div');
		els=me._image_hs_popup_img__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_hs_popup_img.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_hs_popup_img.ggSubElement.setAttribute('alt', player._(me._image_hs_popup_img.ggAltText));
			me._image_hs_popup_img.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_hs_popup_img.ggText_untranslated = img;
			me._image_hs_popup_img.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_hs_popup_img.ggSubElement.style.width = '0px';
			me._image_hs_popup_img.ggSubElement.style.height = '0px';
			me._image_hs_popup_img.ggSubElement.src='';
			me._image_hs_popup_img.ggSubElement.src=me._image_hs_popup_img.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_hs_popup_img.ggText != player._(me._image_hs_popup_img.ggText_untranslated)) {
				me._image_hs_popup_img.ggText = player._(me._image_hs_popup_img.ggText_untranslated);
				me._image_hs_popup_img.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_hs_popup_img";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : calc(75% - 64px);';
		hs+='left : calc(50% - ((calc(100% - 24px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 64px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 24px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_img.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_img.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('image_hs_description') == ""))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_hs_popup_img.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_hs_popup_img.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_hs_popup_img.style.transition='width 0s, height 0s';
				if (me._image_hs_popup_img.ggCurrentLogicStateSize == 0) {
					me._image_hs_popup_img.style.width='calc(100% - 32px)';
					me._image_hs_popup_img.style.height='calc(100% - 96px)';
					me._image_hs_popup_img.style.left = 'calc(50% - (calc(100% - 32px) / 2))';
					skin.updateSize(me._image_hs_popup_img);
				}
				else {
					me._image_hs_popup_img.style.width='calc(100% - 24px)';
					me._image_hs_popup_img.style.height='calc(75% - 64px)';
					me._image_hs_popup_img.style.left = 'calc(50% - (calc(100% - 24px) / 2))';
					skin.updateSize(me._image_hs_popup_img);
				}
			}
		}
		me._image_hs_popup_img.logicBlock_size();
		me._image_hs_popup_img.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_hs_popup_img.clientWidth;
			var parentHeight = me._image_hs_popup_img.clientHeight;
			var img = me._image_hs_popup_img__img;
			var aspectRatioDiv = me._image_hs_popup_img.clientWidth / me._image_hs_popup_img.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_hs_popup_img.ggScrollbars || currentWidth < me._image_hs_popup_img.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_hs_popup_img.scrollLeft=currentWidth / 2 - me._image_hs_popup_img.clientWidth / 2;
			}
			if (!me._image_hs_popup_img.ggScrollbars || currentHeight < me._image_hs_popup_img.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_hs_popup_img.scrollTop=currentHeight / 2 - me._image_hs_popup_img.clientHeight / 2;
			}
		}
		me._image_hs_popup.appendChild(me._image_hs_popup_img);
		el=me._image_hs_popup_title=document.createElement('div');
		els=me._image_hs_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_hs_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((calc(100% - 24px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 24px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._image_hs_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("text", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_hs_popup_title.ggUpdateText();
		el.appendChild(els);
		me._image_hs_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup.appendChild(me._image_hs_popup_title);
		el=me._image_hs_popup_close=document.createElement('div');
		els=me._image_hs_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQzLjMxIiB4Mj0iNDMuMzEiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiIHgyPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._image_hs_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_hs_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxND'+
			'E0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjQzLjMxIi8+CiAgPGxpbmUgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIiB4Mj0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._image_hs_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="image_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_close.onclick=function (e) {
			player.setVariableValue('vis_image_hs_popups', player.getVariableValue('vis_image_hs_popups').replace(me.hotspot.id, ''));
			me._ht_image.style.zIndex='-1';
		}
		me._image_hs_popup_close.onmouseover=function (e) {
			me._image_hs_popup_close__img.style.visibility='hidden';
			me._image_hs_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['image_hs_popup_close']=true;
		}
		me._image_hs_popup_close.onmouseout=function (e) {
			me._image_hs_popup_close__img.style.visibility='inherit';
			me._image_hs_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['image_hs_popup_close']=false;
		}
		me._image_hs_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup.appendChild(me._image_hs_popup_close);
		el=me._image_hs_popup_full=document.createElement('div');
		els=me._image_hs_popup_full__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzUuNTQgMTYgNDggMTYgNDggMTYgNDggMjguNDYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgxPSIzNS44OS'+
			'IgeTE9IjI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSIxNiIgeDI9IjQ4Ii8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjguNDYgNDggMTYgNDggMTYgNDggMTYgMzUuNTQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgxPSIyOC4xMSIgeTE9IjM2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSI0OCIgeDI9IjE2Ii8+'+
			'CiA8L2c+Cjwvc3ZnPgo=';
		me._image_hs_popup_full__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_hs_popup_full__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBwb2ludHM9IjM1LjU0IDE2IDQ4IDE2IDQ4IDE2IDQ4IDI4LjQ2IiBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4MT0iMzUuODkiIHkxPSIyOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iMTYiIHgyPSI0OCIvPgogIDxwb2x5bGluZSBwb2ludHM9IjI4LjQ2IDQ4IDE2IDQ4IDE2IDQ4IDE2IDM1LjU0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7'+
			'IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4MT0iMjguMTEiIHkxPSIzNiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iNDgiIHgyPSIxNiIvPgogPC9nPgo8L3N2Zz4K';
		me._image_hs_popup_full__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="image_hs_popup_full";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_full.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_full.onclick=function (e) {
			player.setVariableValue('vis_image_hs_popups', player.getVariableValue('vis_image_hs_popups').replace(me.hotspot.id, ''));
			me._ht_image.style.zIndex='-1';
			player.setVariableValue('vis_image_hs_popup_full', true);
			skin._image_hs_popup_fs_img.ggSetImage(player._(me.hotspot.url));
				skin._image_hs_popup_fs_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._image_hs_popup_fs_title.ggUpdateText();
			skin._image_hs_popup_fs_title.ggTextDiv.scrollTop = 0;
		}
		me._image_hs_popup_full.onmouseover=function (e) {
			me._image_hs_popup_full__img.style.visibility='hidden';
			me._image_hs_popup_full__imgo.style.visibility='inherit';
			me.elementMouseOver['image_hs_popup_full']=true;
		}
		me._image_hs_popup_full.onmouseout=function (e) {
			me._image_hs_popup_full__img.style.visibility='inherit';
			me._image_hs_popup_full__imgo.style.visibility='hidden';
			me.elementMouseOver['image_hs_popup_full']=false;
		}
		me._image_hs_popup_full.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup.appendChild(me._image_hs_popup_full);
		me._ht_image_backup.appendChild(me._image_hs_popup);
		el=me._ht_image_container=document.createElement('div');
		el.ggId="ht_image_container";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 67px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((67px + 0px) / 2) - 8px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false)) && 
					(((player.getVariableValue('vis_image_hs_popups')).indexOf(me.hotspot.id) == -1))
				)
			) {
				player.setVariableValue('vis_image_hs_popups', player.getVariableValue('vis_image_hs_popups') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_image.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._image_hs_popup_img.ggSetImage(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					me._image_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._image_hs_popup_title.ggUpdateText();
				me._image_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('image_hs_description', player._(me.hotspot.description));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._image_popup_phone.ggSetImage(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			player.setVariableValue('vis_image_hs_popup_full', true);
			skin._image_hs_popup_fs_img.ggSetImage(player._(me.hotspot.url));
		}
		me._ht_image_container.onmouseover=function (e) {
			me.elementMouseOver['ht_image_container']=true;
			me._ht_image_title.logicBlock_visible();
		}
		me._ht_image_container.onmouseout=function (e) {
			me.elementMouseOver['ht_image_container']=false;
			me._ht_image_title.logicBlock_visible();
		}
		me._ht_image_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_title=document.createElement('div');
		els=me._ht_image_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(230,230,230,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='cursor : default;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_image_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image_container'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_title.style.transition='';
				if (me._ht_image_title.ggCurrentLogicStateVisible == 0) {
					me._ht_image_title.style.visibility=(Number(me._ht_image_title.style.opacity)>0||!me._ht_image_title.style.opacity)?'inherit':'hidden';
					me._ht_image_title.ggVisible=true;
				}
				else {
					me._ht_image_title.style.visibility="hidden";
					me._ht_image_title.ggVisible=false;
				}
			}
		}
		me._ht_image_title.logicBlock_visible();
		me._ht_image_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_container.appendChild(me._ht_image_title);
		el=me._ht_image_bg=document.createElement('div');
		el.ggId="ht_image_bg";
		el.ggDx=0;
		el.ggDy=9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 9px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_image_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_image_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_image_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_image_bg.style.transition='background-color 0s';
				if (me._ht_image_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_image_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_image_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_image_bg.logicBlock_backgroundcolor();
		me._ht_image_bg.onmouseover=function (e) {
			me.elementMouseOver['ht_image_bg']=true;
			me._ht_image_bg.logicBlock_backgroundcolor();
		}
		me._ht_image_bg.onmouseout=function (e) {
			me.elementMouseOver['ht_image_bg']=false;
			me._ht_image_bg.logicBlock_backgroundcolor();
		}
		me._ht_image_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_icon=document.createElement('div');
		els=me._ht_image_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6I2U2ZTZlNiIgZD0iTTMyLDI4LjE3YTQsNCwwLDEsMS00LDQsNCw0LDAsMCwxLDQtNG0wLTRhOCw4LDAsMSwwLDgsOCw4LDgsMCwwLDAtOC04WiIvPgogIDxwb2x5Z29uIHBvaW50cz0iMzcuMjMgMjIuMjIgMzUuOD'+
			'kgMTkuNDUgMjguMTEgMTkuNDUgMjYuNzcgMjIuMjIgMTYgMjIuMjIgMTYgNDMuNTUgNDggNDMuNTUgNDggMjIuMjIgMzcuMjMgMjIuMjIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_image_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzIsMjguMmMyLjIsMCw0LDEuOCw0LDRjMCwyLjItMS44LDQtNCw0cy00LTEuOC00LTRsMCwwQzI4LDMwLDI5LjgsMjgu'+
			'MiwzMiwyOC4yIE0zMiwyNC4yYy00LjQsMC04LDMuNi04LDggICBzMy42LDgsOCw4czgtMy42LDgtOFMzNi40LDI0LjIsMzIsMjQuMnoiLz4KICA8cG9seWdvbiBwb2ludHM9IjM3LjIsMjIuMiAzNS45LDE5LjUgMjguMSwxOS41IDI2LjgsMjIuMiAxNiwyMi4yIDE2LDQzLjUgNDgsNDMuNSA0OCwyMi4yICAiIGNsYXNzPSJzdDIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_image_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon.onmouseover=function (e) {
			me._ht_image_icon__img.style.visibility='hidden';
			me._ht_image_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_icon']=true;
		}
		me._ht_image_icon.onmouseout=function (e) {
			me._ht_image_icon__img.style.visibility='inherit';
			me._ht_image_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_icon']=false;
		}
		me._ht_image_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_bg.appendChild(me._ht_image_icon);
		me._ht_image_container.appendChild(me._ht_image_bg);
		me._ht_image_backup.appendChild(me._ht_image_container);
		el=me._ht_image_container_close=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_image_container_close";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 67px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((67px + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_container_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_container_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('vis_image_hs_popups')).indexOf(me.hotspot.id) != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_container_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_container_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_container_close.style.transition='';
				if (me._ht_image_container_close.ggCurrentLogicStateVisible == 0) {
					me._ht_image_container_close.style.visibility=(Number(me._ht_image_container_close.style.opacity)>0||!me._ht_image_container_close.style.opacity)?'inherit':'hidden';
					me._ht_image_container_close.ggVisible=true;
				}
				else {
					me._ht_image_container_close.style.visibility="hidden";
					me._ht_image_container_close.ggVisible=false;
				}
			}
		}
		me._ht_image_container_close.logicBlock_visible();
		me._ht_image_container_close.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false)) && 
					(((player.getVariableValue('vis_image_hs_popups')).indexOf(me.hotspot.id) != -1))
				)
			) {
				player.setVariableValue('vis_image_hs_popups', player.getVariableValue('vis_image_hs_popups').replace("<"+me.hotspot.id+">", ''));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_image.style.zIndex='-1';
			}
		}
		me._ht_image_container_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_backup.appendChild(me._ht_image_container_close);
		me._ht_image_backup.logicBlock_visible();
		me._image_hs_popup.logicBlock_visible();
		me._image_hs_popup_img.logicBlock_size();
		me._ht_image_title.logicBlock_visible();
		me._ht_image_bg.logicBlock_backgroundcolor();
		me._ht_image_container_close.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_image_title.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_image_backup.logicBlock_visible();
				me._image_hs_popup.logicBlock_visible();
				me._image_hs_popup_img.logicBlock_size();
				player.setVariableValue('vis_image_hs_popups', "");
				me._ht_image_title.logicBlock_visible();
				me._ht_image_container_close.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_image_backup.logicBlock_visible();
				me._image_hs_popup.logicBlock_visible();
				me._image_hs_popup_img.logicBlock_size();
				me._ht_image_title.logicBlock_visible();
				me._ht_image_container_close.logicBlock_visible();
			};
			me.ggEvent_varchanged_image_hs_description=function() {
				me._image_hs_popup_img.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_image_hs_popups=function() {
				me._image_hs_popup.logicBlock_visible();
				me._ht_image_container_close.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_image_backup.logicBlock_visible();
			};
			me.__div = me._ht_image_backup;
	};
	function SkinHotspotClass_floor_hotspot(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._floor_hotspot=document.createElement('div');
		el.ggId="floor_hotspot";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 150px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform: rotateX(62deg);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floor_hotspot.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._floor_hotspot.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._floor_hotspot.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._floor_hotspot.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['floor_hotspot']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._floor_hotspot.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['floor_hotspot']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._floor_hotspot.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_bg=document.createElement('div');
		el.ggId="ht_node_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ripple-effect";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_node_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_node_bg.ggParameter.sx = 1.21;
					me._ht_node_bg.ggParameter.sy = 1.2;
					me._ht_node_bg.style.transform=parameterToTransform(me._ht_node_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_bg);}, 350);
				}
				else {
					me._ht_node_bg.ggParameter.sx = 1;
					me._ht_node_bg.ggParameter.sy = 1;
					me._ht_node_bg.style.transform=parameterToTransform(me._ht_node_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_node_bg);}, 350);
				}
			}
		}
		me._ht_node_bg.logicBlock_scaling();
		me._ht_node_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_node_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_node_bg.style.visibility="hidden";
					me._ht_node_bg.ggVisible=false;
				}
				else {
					me._ht_node_bg.style.visibility=(Number(me._ht_node_bg.style.opacity)>0||!me._ht_node_bg.style.opacity)?'inherit':'hidden';
					me._ht_node_bg.ggVisible=true;
				}
			}
		}
		me._ht_node_bg.logicBlock_visible();
		me._ht_node_bg.onmouseover=function (e) {
			me.elementMouseOver['ht_node_bg']=true;
			me._ht_node_title.logicBlock_alpha();
			me._ht_node_bg.logicBlock_scaling();
		}
		me._ht_node_bg.onmouseout=function (e) {
			me.elementMouseOver['ht_node_bg']=false;
			me._ht_node_title.logicBlock_alpha();
			me._ht_node_bg.logicBlock_scaling();
		}
		me._ht_node_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_icon=document.createElement('div');
		els=me._ht_node_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._ht_node_icon__img.setAttribute('src',basePath + 'images/ht_node_icon.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ripple-effect";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		hs+='animation-name: stretch; animation-duration: 1s; animation-timing-function: ease-out; animation-delay: 0; animation-direction: alternate; animation-iteration-count: infinite; animation-fill-mode: forwards; animation-play-state: running;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_icon);
		el=me._ht_node_title=document.createElement('div');
		els=me._ht_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_node_title";
		el.ggDx=0;
		el.ggDy=28;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.33,sy:0.33,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 28px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 21px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_node_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_node_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_node_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_node_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_node_title.ggCurrentLogicStatePosition == 0) {
					me._ht_node_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_node_title.style.top = 'calc(50% - (0px / 2) + (0px / 2) + -28px)';
				}
				else {
					me._ht_node_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_node_title.style.top='calc(50% - ((0px + 0px) / 2) + 28px)';
				}
			}
		}
		me._ht_node_title.logicBlock_position();
		me._ht_node_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_title.style.transition='left 0s, top 0s, opacity 300ms ease 0ms';
				if (me._ht_node_title.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_title.style.visibility=me._ht_node_title.ggVisible?'inherit':'hidden';
					me._ht_node_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node_title.style.opacity == 0.0) { me._ht_node_title.style.visibility="hidden"; } }, 305);
					me._ht_node_title.style.opacity=0;
				}
			}
		}
		me._ht_node_title.logicBlock_alpha();
		me._ht_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_title);
		me._floor_hotspot.appendChild(me._ht_node_bg);
		el=me._ht_node_custom_image=document.createElement('div');
		els=me._ht_node_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image.ggAltText));
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image.ggText_untranslated = img;
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image.ggSubElement.style.width = '0px';
			me._ht_node_custom_image.ggSubElement.style.height = '0px';
			me._ht_node_custom_image.ggSubElement.src='';
			me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image.ggText != player._(me._ht_node_custom_image.ggText_untranslated)) {
				me._ht_node_custom_image.ggText = player._(me._ht_node_custom_image.ggText_untranslated);
				me._ht_node_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image.style.transition='';
				if (me._ht_node_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image.style.visibility=(Number(me._ht_node_custom_image.style.opacity)>0||!me._ht_node_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
					me._ht_node_custom_image.ggVisible=true;
				}
				else {
					me._ht_node_custom_image.style.visibility="hidden";
					me._ht_node_custom_image.ggSubElement.src='';
					me._ht_node_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image.logicBlock_visible();
		me._ht_node_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image.clientWidth;
			var parentHeight = me._ht_node_custom_image.clientHeight;
			var img = me._ht_node_custom_image__img;
			var aspectRatioDiv = me._ht_node_custom_image.clientWidth / me._ht_node_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentWidth < me._ht_node_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image.scrollLeft=currentWidth / 2 - me._ht_node_custom_image.clientWidth / 2;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentHeight < me._ht_node_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image.scrollTop=currentHeight / 2 - me._ht_node_custom_image.clientHeight / 2;
			}
		}
		me._floor_hotspot.appendChild(me._ht_node_custom_image);
		me._ht_node_bg.logicBlock_scaling();
		me._ht_node_bg.logicBlock_visible();
		me._ht_node_title.logicBlock_position();
		me._ht_node_title.logicBlock_alpha();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_title.logicBlock_position();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_node_title.logicBlock_position();
			};
			me.__div = me._floor_hotspot;
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-272;
		el.ggDy=-358;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) - 272px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) - 358px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d61130;';
		hs+='border : 0px solid #141414;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 16px;';
		hs+='left : calc(50% - ((16px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((16px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._map_pin_active.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_active.style.transition='';
				if (me._map_pin_active.ggCurrentLogicStateVisible == 0) {
					me._map_pin_active.style.visibility="hidden";
					me._map_pin_active.ggVisible=false;
				}
				else {
					me._map_pin_active.style.visibility=(Number(me._map_pin_active.style.opacity)>0||!me._map_pin_active.style.opacity)?'inherit':'hidden';
					me._map_pin_active.ggVisible=true;
				}
			}
		}
		me._map_pin_active.logicBlock_visible();
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_inactive_bk=document.createElement('div');
		els=me._map_pin_inactive_bk__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiNFNkU2RTY7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MntmaWxsOiNGRkZGRkY7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzIsMy4yYzEwLjYsMCwx'+
			'OS4yLDguNiwxOS4yLDE5LjJsMCwwYzAsMTIuNC0xMCwzMC42LTE5LjIsMzguNGwwLDBjLTkuMy03LjgtMTkuMi0yNi0xOS4yLTM4LjRsMCwwICAgQzEyLjgsMTEuOCwyMS40LDMuMiwzMiwzLjJMMzIsMy4yeiIvPgogIDxjaXJjbGUgcj0iNC4zIiBjeD0iMzIiIGN5PSIyMi40IiBjbGFzcz0ic3QyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._map_pin_inactive_bk__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_inactive_bk";
		el.ggDx=0;
		el.ggDy=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((31px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) - 15px);';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_inactive_bk.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_inactive_bk.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_inactive_bk'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_inactive_bk.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_inactive_bk.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_inactive_bk.style.transition='transform 200ms ease 0ms';
				if (me._map_pin_inactive_bk.ggCurrentLogicStateScaling == 0) {
					me._map_pin_inactive_bk.ggParameter.sx = 1.2;
					me._map_pin_inactive_bk.ggParameter.sy = 1.2;
					me._map_pin_inactive_bk.style.transform=parameterToTransform(me._map_pin_inactive_bk.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_inactive_bk);}, 250);
				}
				else {
					me._map_pin_inactive_bk.ggParameter.sx = 1;
					me._map_pin_inactive_bk.ggParameter.sy = 1;
					me._map_pin_inactive_bk.style.transform=parameterToTransform(me._map_pin_inactive_bk.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_inactive_bk);}, 250);
				}
			}
		}
		me._map_pin_inactive_bk.logicBlock_scaling();
		me._map_pin_inactive_bk.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._map_pin_inactive_bk.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_inactive_bk.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_inactive_bk.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_inactive_bk.style.transition='transform 200ms ease 0ms';
				if (me._map_pin_inactive_bk.ggCurrentLogicStateVisible == 0) {
					me._map_pin_inactive_bk.style.visibility="hidden";
					me._map_pin_inactive_bk.ggVisible=false;
				}
				else {
					me._map_pin_inactive_bk.style.visibility="hidden";
					me._map_pin_inactive_bk.ggVisible=false;
				}
			}
		}
		me._map_pin_inactive_bk.logicBlock_visible();
		me._map_pin_inactive_bk.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', false);
			}
		}
		me._map_pin_inactive_bk.onmouseover=function (e) {
			me.elementMouseOver['map_pin_inactive_bk']=true;
			me._map_pin_inactive_bk.logicBlock_scaling();
		}
		me._map_pin_inactive_bk.onmouseout=function (e) {
			me.elementMouseOver['map_pin_inactive_bk']=false;
			me._map_pin_inactive_bk.logicBlock_scaling();
		}
		me._map_pin_inactive_bk.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_inactive_bk);
		el=me._map_pin_inactive=document.createElement('div');
		el.ggId="map_pin_inactive";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #141414;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 16px;';
		hs+='left : calc(50% - ((16px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((16px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_inactive.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_inactive.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_inactive'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_inactive.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_inactive.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_inactive.style.transition='transform 0s';
				if (me._map_pin_inactive.ggCurrentLogicStateScaling == 0) {
					me._map_pin_inactive.ggParameter.sx = 1.2;
					me._map_pin_inactive.ggParameter.sy = 1.2;
					me._map_pin_inactive.style.transform=parameterToTransform(me._map_pin_inactive.ggParameter);
					skin.updateSize(me._map_pin_inactive);
				}
				else {
					me._map_pin_inactive.ggParameter.sx = 1;
					me._map_pin_inactive.ggParameter.sy = 1;
					me._map_pin_inactive.style.transform=parameterToTransform(me._map_pin_inactive.ggParameter);
					skin.updateSize(me._map_pin_inactive);
				}
			}
		}
		me._map_pin_inactive.logicBlock_scaling();
		me._map_pin_inactive.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._map_pin_inactive.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_inactive.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_inactive.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_inactive.style.transition='transform 0s';
				if (me._map_pin_inactive.ggCurrentLogicStateVisible == 0) {
					me._map_pin_inactive.style.visibility=(Number(me._map_pin_inactive.style.opacity)>0||!me._map_pin_inactive.style.opacity)?'inherit':'hidden';
					me._map_pin_inactive.ggVisible=true;
				}
				else {
					me._map_pin_inactive.style.visibility="hidden";
					me._map_pin_inactive.ggVisible=false;
				}
			}
		}
		me._map_pin_inactive.logicBlock_visible();
		me._map_pin_inactive.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', false);
			}
		}
		me._map_pin_inactive.onmouseover=function (e) {
			me.elementMouseOver['map_pin_inactive']=true;
			me._map_pin_inactive.logicBlock_scaling();
		}
		me._map_pin_inactive.onmouseout=function (e) {
			me.elementMouseOver['map_pin_inactive']=false;
			me._map_pin_inactive.logicBlock_scaling();
		}
		me._map_pin_inactive.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_inactive);
		me._map_pin_active.logicBlock_visible();
		me._map_pin_inactive_bk.logicBlock_scaling();
		me._map_pin_inactive_bk.logicBlock_visible();
		me._map_pin_inactive.logicBlock_scaling();
		me._map_pin_inactive.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_visible();
				me._map_pin_inactive_bk.logicBlock_visible();
				me._map_pin_inactive.logicBlock_visible();
			};
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 184px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.onclick=function (e) {
				skin._url_hs_popup_iframe.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("<iframe src=\"%1\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._url_hs_popup_iframe.ggUpdateText();
			skin._url_hs_popup_iframe.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_url_hs_popup', true);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_bg=document.createElement('div');
		el.ggId="ht_url_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ripple-effect";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_bg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_url_bg'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_url_bg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_url_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_url_bg.ggCurrentLogicStateScaling == 0) {
					me._ht_url_bg.ggParameter.sx = 1.21;
					me._ht_url_bg.ggParameter.sy = 1.2;
					me._ht_url_bg.style.transform=parameterToTransform(me._ht_url_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_url_bg);}, 350);
				}
				else {
					me._ht_url_bg.ggParameter.sx = 1;
					me._ht_url_bg.ggParameter.sy = 1;
					me._ht_url_bg.style.transform=parameterToTransform(me._ht_url_bg.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_url_bg);}, 350);
				}
			}
		}
		me._ht_url_bg.logicBlock_scaling();
		me._ht_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_bg.style.transition='transform 300ms ease 0ms';
				if (me._ht_url_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_url_bg.style.visibility="hidden";
					me._ht_url_bg.ggVisible=false;
				}
				else {
					me._ht_url_bg.style.visibility=(Number(me._ht_url_bg.style.opacity)>0||!me._ht_url_bg.style.opacity)?'inherit':'hidden';
					me._ht_url_bg.ggVisible=true;
				}
			}
		}
		me._ht_url_bg.logicBlock_visible();
		me._ht_url_bg.onmouseover=function (e) {
			me.elementMouseOver['ht_url_bg']=true;
			me._ht_url_bg.logicBlock_scaling();
		}
		me._ht_url_bg.onmouseout=function (e) {
			me.elementMouseOver['ht_url_bg']=false;
			me._ht_url_bg.logicBlock_scaling();
		}
		me._ht_url_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_icon=document.createElement('div');
		els=me._ht_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KCS5zdDF7ZmlsbDojRkZGQkZDO30KPC9zdHlsZT4KIDxsaW5lYXJHcmFkaWVudCB4MT0iMzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iU1ZHSURfMV8iIHkxPSI2Mi4yMTI4IiB5Mj0iMS43ODcyIiB4Mj0iMzIiPgogIDxzdG9wIHN0eWxlPSJzdG9wLWNvbG9yOiNDMDI4ODMiIG9mZnNldD0iOC43NDM1MTVlLTAzIi8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0VBNkU0QSIgb2Zmc2V0PSIwLjM1MDMiLz4KICA8c3RvcCBzdHlsZT0ic3RvcC1jb2xvcjojRkY5RjJF'+
			'IiBvZmZzZXQ9IjAuNzE3Ii8+CiAgPHN0b3Agc3R5bGU9InN0b3AtY29sb3I6I0Y5Q0Q4MCIgb2Zmc2V0PSIxIi8+CiA8L2xpbmVhckdyYWRpZW50PgogPGNpcmNsZSByPSIzMC4yIiBjeD0iMzIiIGN5PSIzMiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPGc+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMi4yLDQzLjVjLTAuNCwwLTAuOS0wLjEtMS4zLTAuNGwtMTEuNC02LjhjLTAuOC0wLjUtMS4yLTEuMy0xLjItMi4yVjIxLjVjMC0wLjksMC41LTEuNywxLjItMi4xbDAsMCAgICBsMTEuNi03YzAuOC0wLjUsMS43LTAuNSwyLjUsMGwxMS4yLDYuM2MwLjgsMC40LDEuMywxLjMsMS4zLDIuMnYxM2'+
			'MwLDAuOS0wLjQsMS43LTEuMiwyLjFsLTExLjQsNy4yICAgIEMzMy4xLDQzLjMsMzIuNiw0My41LDMyLjIsNDMuNXogTTIwLjgsMjEuNEMyMC43LDIxLjUsMjAuNywyMS41LDIwLjgsMjEuNGwwLDEyLjdMMzIuMSw0MWMwLDAsMCwwLDAuMSwwbDExLjQtNy4ybDAtMTMgICAgYzAsMCwwLDAsMC0wLjFsLTExLjItNi4zYzAsMCwwLDAtMC4xLDBMMjAuOCwyMS40eiIvPgogICA8cG9seWdvbiBwb2ludHM9IjMwLjgsNDIgMzAuNywyOC42IDE5LjUsMjIuMSAyMC44LDIwIDMzLjEsMjcuMiAzMy4yLDQyICAgIiBjbGFzcz0ic3QxIi8+CiAgIDxyZWN0IHk9IjIzIiB4PSIzMC45IiB3aWR0aD0iMTQuNyIg'+
			'dHJhbnNmb3JtPSJtYXRyaXgoMC44NjQ5IC0wLjUwMiAwLjUwMiAwLjg2NDkgLTYuOTc1NCAyMi40ODI2KSIgY2xhc3M9InN0MSIgaGVpZ2h0PSIyLjQiLz4KICA8L2c+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTM3LjUsNDguOGMtMC42LDAtMS4yLTAuNS0xLjItMS4xYy0wLjEtMC43LDAuNC0xLjMsMS4xLTEuM2MxMC0xLDE3LjYtNC44LDE3LjYtOC45YzAtMi45LTMuOS01LjgtMTAuMi03LjUgICBjLTAuNy0wLjItMS0wLjktMC45LTEuNWMwLjItMC43LDAuOC0xLDEuNS0wLjljNy41LDIuMSwxMiw1LjgsMTIsOS45YzAsNS42LTgsMTAuMS0xOS44LDExLjNDMzcuNiw0OC44LDM3LjYsNDguOC'+
			'wzNy41LDQ4Ljh6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTIwLjYsNDcuOGMtMC4xLDAtMC4yLDAtMC4zLDBjLTguNC0yLTEzLjUtNS44LTEzLjUtMTAuM2MwLTQuMSw0LjUtNy44LDEyLjEtOS45YzAuNy0wLjIsMS4zLDAuMiwxLjUsMC45ICAgYzAuMiwwLjctMC4yLDEuMy0wLjksMS41Yy02LjMsMS43LTEwLjMsNC42LTEwLjMsNy41YzAsMy4xLDQuNSw2LjIsMTEuNiw3LjljMC43LDAuMiwxLjEsMC44LDAuOSwxLjUgICBDMjEuNyw0Ny40LDIxLjIsNDcuOCwyMC42LDQ3Ljh6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTIwLjksNTJjLTAuNCwwLTAuOS0wLjEtMS4yLTAuNGMtMC41'+
			'LTAuNC0wLjgtMS4xLTAuNi0xLjhsMS4yLTYuOGMwLjEtMC43LDAuNi0xLjMsMS4zLTEuNSAgIGMwLjctMC4yLDEuNCwwLDEuOSwwLjVsNC40LDQuNmMwLjQsMC41LDAuNiwxLjEsMC41LDEuN2MtMC4xLDAuNi0wLjYsMS4xLTEuMiwxLjNsLTUuNiwyLjFDMjEuNCw1MiwyMS4xLDUyLDIwLjksNTJ6IE0yMi41LDQ0LjYgICBsLTAuOCw0LjZsMy44LTEuNUwyMi41LDQ0LjZ6IE0yNi4zLDQ3LjVDMjYuMyw0Ny41LDI2LjMsNDcuNSwyNi4zLDQ3LjVMMjYuMyw0Ny41eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ripple-effect";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		hs+='animation-name: stretch; animation-duration: 1s; animation-timing-function: ease-out; animation-delay: 0; animation-direction: alternate; animation-iteration-count: infinite; animation-fill-mode: forwards; animation-play-state: running;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url_bg.appendChild(me._ht_url_icon);
		me._ht_url.appendChild(me._ht_url_bg);
		el=me._ht_url_custom_image=document.createElement('div');
		els=me._ht_url_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_url_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_url_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_url_custom_image.ggAltText));
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_url_custom_image.ggText_untranslated = img;
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_url_custom_image.ggSubElement.style.width = '0px';
			me._ht_url_custom_image.ggSubElement.style.height = '0px';
			me._ht_url_custom_image.ggSubElement.src='';
			me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_url_custom_image.ggText != player._(me._ht_url_custom_image.ggText_untranslated)) {
				me._ht_url_custom_image.ggText = player._(me._ht_url_custom_image.ggText_untranslated);
				me._ht_url_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_url_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_custom_image.style.transition='';
				if (me._ht_url_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_custom_image.style.visibility=(Number(me._ht_url_custom_image.style.opacity)>0||!me._ht_url_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
					me._ht_url_custom_image.ggVisible=true;
				}
				else {
					me._ht_url_custom_image.style.visibility="hidden";
					me._ht_url_custom_image.ggSubElement.src='';
					me._ht_url_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_url_custom_image.logicBlock_visible();
		me._ht_url_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_url_custom_image.clientWidth;
			var parentHeight = me._ht_url_custom_image.clientHeight;
			var img = me._ht_url_custom_image__img;
			var aspectRatioDiv = me._ht_url_custom_image.clientWidth / me._ht_url_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentWidth < me._ht_url_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_url_custom_image.scrollLeft=currentWidth / 2 - me._ht_url_custom_image.clientWidth / 2;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentHeight < me._ht_url_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_url_custom_image.scrollTop=currentHeight / 2 - me._ht_url_custom_image.clientHeight / 2;
			}
		}
		me._ht_url.appendChild(me._ht_url_custom_image);
		me._ht_url_bg.logicBlock_scaling();
		me._ht_url_bg.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_url_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_url_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_url_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_url_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 1023px;';
		hs+='position : absolute;';
		hs+='top : 197px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style.transition='';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
				else {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
			}
		}
		me._ht_node.logicBlock_visible();
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._ht_node_preview_bg.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._ht_node_preview_bg.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_preview_bg=document.createElement('div');
		el.ggId="ht_node_preview_bg";
		el.ggDx=0;
		el.ggDy=-66;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) - 66px);';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		hs+='overflow: hidden';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_preview_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_preview_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_preview_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_preview_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_preview_bg.style.transition='';
				if (me._ht_node_preview_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_node_preview_bg.style.visibility=(Number(me._ht_node_preview_bg.style.opacity)>0||!me._ht_node_preview_bg.style.opacity)?'inherit':'hidden';
					me._ht_node_preview_bg.ggVisible=true;
				}
				else {
					me._ht_node_preview_bg.style.visibility="hidden";
					me._ht_node_preview_bg.ggVisible=false;
				}
			}
		}
		me._ht_node_preview_bg.logicBlock_visible();
		me._ht_node_preview_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_preview_img=document.createElement('div');
		els=me._ht_node_preview_img__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/ht_node_preview_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 5px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_preview_img";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 112px;';
		hs+='left : calc(50% - ((112px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((112px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_preview_img.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_node_preview_img.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_preview_bg.appendChild(me._ht_node_preview_img);
		el=me._ht_node_title_bg=document.createElement('div');
		el.ggId="ht_node_title_bg";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(40,40,40,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 33%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_title_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_title_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_title0=document.createElement('div');
		els=me._ht_node_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_node_title0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_title0.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_title0.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_title0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_title_bg.appendChild(me._ht_node_title0);
		me._ht_node_preview_bg.appendChild(me._ht_node_title_bg);
		me._ht_node.appendChild(me._ht_node_preview_bg);
		el=me._ht_node_bg0=document.createElement('div');
		el.ggId="ht_node_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #141414;';
		hs+='border-radius : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((24px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_bg0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_bg0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_bg0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_bg0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_bg0.style.transition='background-color 0s';
				if (me._ht_node_bg0.ggCurrentLogicStateVisible == 0) {
					me._ht_node_bg0.style.visibility="hidden";
					me._ht_node_bg0.ggVisible=false;
				}
				else {
					me._ht_node_bg0.style.visibility=(Number(me._ht_node_bg0.style.opacity)>0||!me._ht_node_bg0.style.opacity)?'inherit':'hidden';
					me._ht_node_bg0.ggVisible=true;
				}
			}
		}
		me._ht_node_bg0.logicBlock_visible();
		me._ht_node_bg0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_node_bg0'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_node_bg0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_node_bg0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_node_bg0.style.transition='background-color 0s';
				if (me._ht_node_bg0.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_node_bg0.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_node_bg0.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_node_bg0.logicBlock_backgroundcolor();
		me._ht_node_bg0.onmouseover=function (e) {
			me.elementMouseOver['ht_node_bg0']=true;
			me._ht_node_bg0.logicBlock_backgroundcolor();
		}
		me._ht_node_bg0.onmouseout=function (e) {
			me.elementMouseOver['ht_node_bg0']=false;
			me._ht_node_bg0.logicBlock_backgroundcolor();
		}
		me._ht_node_bg0.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited=document.createElement('div');
		els=me._ht_node_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiNFNkU2RTY7c3Ryb2tlLXdpZHRoOjY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxnIGlkPSJoaWdobGlnaHQiPgogIDxjaXJjbGUgcj0iMzEiIGN4PSIzMiIgY3k9IjMyIiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBjbGFzcz0ic3QxIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEi'+
			'PgogIDxwb2x5bGluZSBwb2ludHM9IjE4LjYsMjYuNyAzMC45LDQ4IDQ5LjQsMTYgICIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_visited";
		el.ggDx=14;
		el.ggDy=18;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((18px + 0px) / 2) + 14px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 18px);';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_visited.ggElementNodeId()) == true)) || 
				((me._ht_node_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited.style.transition='';
				if (me._ht_node_visited.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited.style.visibility=(Number(me._ht_node_visited.style.opacity)>0||!me._ht_node_visited.style.opacity)?'inherit':'hidden';
					me._ht_node_visited.ggVisible=true;
				}
				else {
					me._ht_node_visited.style.visibility="hidden";
					me._ht_node_visited.ggVisible=false;
				}
			}
		}
		me._ht_node_visited.logicBlock_visible();
		me._ht_node_visited.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg0.appendChild(me._ht_node_visited);
		el=me._ht_node_icon0=document.createElement('div');
		els=me._ht_node_icon0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTguMDYgMjkuOTMgMzIuMDEgMTYgMzIuMDEgMTYgNDUuOTQgMjkuOTMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW'+
			'5lIHgxPSIzMiIgeTE9IjQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSIxNy42NCIgeDI9IjMyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_node_icon0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_icon0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIxOC4xLDI5LjkgMzIsMTYgMzIsMTYgNDUuOSwyOS45ICAiIGNsYXNzPSJzdDEiLz4KICA8bGluZSB4MT0iMzIiIHkxPSI0OCIgeTI9IjE3LjYiIHgyPSIzMiIgY2xh'+
			'c3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_icon0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_node_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_icon0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_icon0.onmouseover=function (e) {
			me._ht_node_icon0__img.style.visibility='hidden';
			me._ht_node_icon0__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_icon0']=true;
		}
		me._ht_node_icon0.onmouseout=function (e) {
			me._ht_node_icon0__img.style.visibility='inherit';
			me._ht_node_icon0__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_icon0']=false;
		}
		me._ht_node_icon0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg0.appendChild(me._ht_node_icon0);
		me._ht_node.appendChild(me._ht_node_bg0);
		el=me._ht_node_custom_image0=document.createElement('div');
		els=me._ht_node_custom_image0__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image0.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image0.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image0.ggAltText));
			me._ht_node_custom_image0.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image0.ggText_untranslated = img;
			me._ht_node_custom_image0.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image0.ggSubElement.style.width = '0px';
			me._ht_node_custom_image0.ggSubElement.style.height = '0px';
			me._ht_node_custom_image0.ggSubElement.src='';
			me._ht_node_custom_image0.ggSubElement.src=me._ht_node_custom_image0.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image0.ggText != player._(me._ht_node_custom_image0.ggText_untranslated)) {
				me._ht_node_custom_image0.ggText = player._(me._ht_node_custom_image0.ggText_untranslated);
				me._ht_node_custom_image0.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_custom_image0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image0.style.transition='';
				if (me._ht_node_custom_image0.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image0.style.visibility=(Number(me._ht_node_custom_image0.style.opacity)>0||!me._ht_node_custom_image0.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image0.ggSubElement.src=me._ht_node_custom_image0.ggText;
					me._ht_node_custom_image0.ggVisible=true;
				}
				else {
					me._ht_node_custom_image0.style.visibility="hidden";
					me._ht_node_custom_image0.ggSubElement.src='';
					me._ht_node_custom_image0.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image0.logicBlock_visible();
		me._ht_node_custom_image0.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image0.clientWidth;
			var parentHeight = me._ht_node_custom_image0.clientHeight;
			var img = me._ht_node_custom_image0__img;
			var aspectRatioDiv = me._ht_node_custom_image0.clientWidth / me._ht_node_custom_image0.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image0.ggScrollbars || currentWidth < me._ht_node_custom_image0.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image0.scrollLeft=currentWidth / 2 - me._ht_node_custom_image0.clientWidth / 2;
			}
			if (!me._ht_node_custom_image0.ggScrollbars || currentHeight < me._ht_node_custom_image0.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image0.scrollTop=currentHeight / 2 - me._ht_node_custom_image0.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_custom_image0);
		me._ht_node.logicBlock_visible();
		me._ht_node_preview_bg.logicBlock_visible();
		me._ht_node_bg0.logicBlock_visible();
		me._ht_node_bg0.logicBlock_backgroundcolor();
		me._ht_node_visited.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image0.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image0.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image0.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image0.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image0.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_preview_bg.logicBlock_visible();
				me._ht_node_bg0.logicBlock_visible();
				me._ht_node_custom_image0.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_preview_bg.logicBlock_visible();
				me._ht_node_bg0.logicBlock_visible();
				me._ht_node_visited.logicBlock_visible();
				me._ht_node_visited.logicBlock_visible();
				me._ht_node_custom_image0.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_visited.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_preview_bg.logicBlock_visible();
				me._ht_node_bg0.logicBlock_visible();
				me._ht_node_custom_image0.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 404px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style.transition='';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
				else {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
			}
		}
		me._ht_image.logicBlock_visible();
		me._ht_image.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_hs_popup0=document.createElement('div');
		el.ggId="image_hs_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 4px solid #141414;';
		hs+='border-radius : 18px;';
		hs+='bottom : -330px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((300px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('vis_image_hs_popups')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_hs_popup0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_hs_popup0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_hs_popup0.style.transition='';
				if (me._image_hs_popup0.ggCurrentLogicStateVisible == 0) {
					me._image_hs_popup0.style.visibility=(Number(me._image_hs_popup0.style.opacity)>0||!me._image_hs_popup0.style.opacity)?'inherit':'hidden';
					me._image_hs_popup0.ggVisible=true;
				}
				else {
					me._image_hs_popup0.style.visibility="hidden";
					me._image_hs_popup0.ggVisible=false;
				}
			}
		}
		me._image_hs_popup0.logicBlock_visible();
		me._image_hs_popup0.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_hs_popup_description0=document.createElement('div');
		els=me._image_hs_popup_description0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_hs_popup_description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : calc(25% - 32px);';
		hs+='left : 19px;';
		hs+='position : absolute;';
		hs+='top : calc(75% + 16px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._image_hs_popup_description0.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('image_hs_description', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_hs_popup_description0.ggUpdateText();
		player.addListener('timer', function() {
			me._image_hs_popup_description0.ggUpdateText();
		});
		el.appendChild(els);
		me._image_hs_popup_description0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_description0.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup0.appendChild(me._image_hs_popup_description0);
		el=me._image_hs_popup_img0=document.createElement('div');
		els=me._image_hs_popup_img0__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_hs_popup_img0.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_hs_popup_img0.ggSubElement.setAttribute('alt', player._(me._image_hs_popup_img0.ggAltText));
			me._image_hs_popup_img0.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_hs_popup_img0.ggText_untranslated = img;
			me._image_hs_popup_img0.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_hs_popup_img0.ggSubElement.style.width = '0px';
			me._image_hs_popup_img0.ggSubElement.style.height = '0px';
			me._image_hs_popup_img0.ggSubElement.src='';
			me._image_hs_popup_img0.ggSubElement.src=me._image_hs_popup_img0.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_hs_popup_img0.ggText != player._(me._image_hs_popup_img0.ggText_untranslated)) {
				me._image_hs_popup_img0.ggText = player._(me._image_hs_popup_img0.ggText_untranslated);
				me._image_hs_popup_img0.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_hs_popup_img";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : calc(75% - 64px);';
		hs+='left : calc(50% - ((calc(100% - 24px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 64px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 24px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_img0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_img0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('image_hs_description') == ""))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_hs_popup_img0.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_hs_popup_img0.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_hs_popup_img0.style.transition='width 0s, height 0s';
				if (me._image_hs_popup_img0.ggCurrentLogicStateSize == 0) {
					me._image_hs_popup_img0.style.width='calc(100% - 32px)';
					me._image_hs_popup_img0.style.height='calc(100% - 96px)';
					me._image_hs_popup_img0.style.left = 'calc(50% - (calc(100% - 32px) / 2))';
					skin.updateSize(me._image_hs_popup_img0);
				}
				else {
					me._image_hs_popup_img0.style.width='calc(100% - 24px)';
					me._image_hs_popup_img0.style.height='calc(75% - 64px)';
					me._image_hs_popup_img0.style.left = 'calc(50% - (calc(100% - 24px) / 2))';
					skin.updateSize(me._image_hs_popup_img0);
				}
			}
		}
		me._image_hs_popup_img0.logicBlock_size();
		me._image_hs_popup_img0.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_hs_popup_img0.clientWidth;
			var parentHeight = me._image_hs_popup_img0.clientHeight;
			var img = me._image_hs_popup_img0__img;
			var aspectRatioDiv = me._image_hs_popup_img0.clientWidth / me._image_hs_popup_img0.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_hs_popup_img0.ggScrollbars || currentWidth < me._image_hs_popup_img0.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_hs_popup_img0.scrollLeft=currentWidth / 2 - me._image_hs_popup_img0.clientWidth / 2;
			}
			if (!me._image_hs_popup_img0.ggScrollbars || currentHeight < me._image_hs_popup_img0.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_hs_popup_img0.scrollTop=currentHeight / 2 - me._image_hs_popup_img0.clientHeight / 2;
			}
		}
		me._image_hs_popup0.appendChild(me._image_hs_popup_img0);
		el=me._image_hs_popup_title0=document.createElement('div');
		els=me._image_hs_popup_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_hs_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((calc(100% - 24px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 24px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._image_hs_popup_title0.ggUpdateText=function() {
			var params = [];
			var hs = player._("text", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_hs_popup_title0.ggUpdateText();
		el.appendChild(els);
		me._image_hs_popup_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_title0.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup0.appendChild(me._image_hs_popup_title0);
		el=me._image_hs_popup_close0=document.createElement('div');
		els=me._image_hs_popup_close0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQzLjMxIiB4Mj0iNDMuMzEiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiIHgyPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._image_hs_popup_close0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_hs_popup_close0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxND'+
			'E0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjQzLjMxIi8+CiAgPGxpbmUgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIiB4Mj0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._image_hs_popup_close0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="image_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_close0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_close0.onclick=function (e) {
			player.setVariableValue('vis_image_hs_popups', player.getVariableValue('vis_image_hs_popups').replace(me.hotspot.id, ''));
			me._ht_image.style.zIndex='-1';
		}
		me._image_hs_popup_close0.onmouseover=function (e) {
			me._image_hs_popup_close0__img.style.visibility='hidden';
			me._image_hs_popup_close0__imgo.style.visibility='inherit';
			me.elementMouseOver['image_hs_popup_close0']=true;
		}
		me._image_hs_popup_close0.onmouseout=function (e) {
			me._image_hs_popup_close0__img.style.visibility='inherit';
			me._image_hs_popup_close0__imgo.style.visibility='hidden';
			me.elementMouseOver['image_hs_popup_close0']=false;
		}
		me._image_hs_popup_close0.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup0.appendChild(me._image_hs_popup_close0);
		el=me._image_hs_popup_full0=document.createElement('div');
		els=me._image_hs_popup_full0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzUuNTQgMTYgNDggMTYgNDggMTYgNDggMjguNDYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgxPSIzNS44OS'+
			'IgeTE9IjI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSIxNiIgeDI9IjQ4Ii8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjguNDYgNDggMTYgNDggMTYgNDggMTYgMzUuNTQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgxPSIyOC4xMSIgeTE9IjM2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSI0OCIgeDI9IjE2Ii8+'+
			'CiA8L2c+Cjwvc3ZnPgo=';
		me._image_hs_popup_full0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_hs_popup_full0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBwb2ludHM9IjM1LjU0IDE2IDQ4IDE2IDQ4IDE2IDQ4IDI4LjQ2IiBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4MT0iMzUuODkiIHkxPSIyOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iMTYiIHgyPSI0OCIvPgogIDxwb2x5bGluZSBwb2ludHM9IjI4LjQ2IDQ4IDE2IDQ4IDE2IDQ4IDE2IDM1LjU0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7'+
			'IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4MT0iMjguMTEiIHkxPSIzNiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iNDgiIHgyPSIxNiIvPgogPC9nPgo8L3N2Zz4K';
		me._image_hs_popup_full0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="image_hs_popup_full";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_full0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_full0.onclick=function (e) {
			player.setVariableValue('vis_image_hs_popups', player.getVariableValue('vis_image_hs_popups').replace(me.hotspot.id, ''));
			me._ht_image.style.zIndex='-1';
			player.setVariableValue('vis_image_hs_popup_full', true);
			skin._image_hs_popup_fs_img.ggSetImage(player._(me.hotspot.url));
				skin._image_hs_popup_fs_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._image_hs_popup_fs_title.ggUpdateText();
			skin._image_hs_popup_fs_title.ggTextDiv.scrollTop = 0;
		}
		me._image_hs_popup_full0.onmouseover=function (e) {
			me._image_hs_popup_full0__img.style.visibility='hidden';
			me._image_hs_popup_full0__imgo.style.visibility='inherit';
			me.elementMouseOver['image_hs_popup_full0']=true;
		}
		me._image_hs_popup_full0.onmouseout=function (e) {
			me._image_hs_popup_full0__img.style.visibility='inherit';
			me._image_hs_popup_full0__imgo.style.visibility='hidden';
			me.elementMouseOver['image_hs_popup_full0']=false;
		}
		me._image_hs_popup_full0.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup0.appendChild(me._image_hs_popup_full0);
		me._ht_image.appendChild(me._image_hs_popup0);
		el=me._ht_image_container0=document.createElement('div');
		el.ggId="ht_image_container";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 67px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((67px + 0px) / 2) - 8px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_container0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_container0.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._image_popup_phone.ggSetImage(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			player.setVariableValue('vis_image_hs_popup_full', true);
			skin._image_hs_popup_fs_img.ggSetImage(player._(me.hotspot.url));
		}
		me._ht_image_container0.onmouseover=function (e) {
			me.elementMouseOver['ht_image_container0']=true;
			me._ht_image_title0.logicBlock_visible();
		}
		me._ht_image_container0.onmouseout=function (e) {
			me.elementMouseOver['ht_image_container0']=false;
			me._ht_image_title0.logicBlock_visible();
		}
		me._ht_image_container0.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_title0=document.createElement('div');
		els=me._ht_image_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(230,230,230,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='cursor : default;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_image_title0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_title0.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_title0.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_title0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image_container0'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_title0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_title0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_title0.style.transition='';
				if (me._ht_image_title0.ggCurrentLogicStateVisible == 0) {
					me._ht_image_title0.style.visibility=(Number(me._ht_image_title0.style.opacity)>0||!me._ht_image_title0.style.opacity)?'inherit':'hidden';
					me._ht_image_title0.ggVisible=true;
				}
				else {
					me._ht_image_title0.style.visibility="hidden";
					me._ht_image_title0.ggVisible=false;
				}
			}
		}
		me._ht_image_title0.logicBlock_visible();
		me._ht_image_title0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_container0.appendChild(me._ht_image_title0);
		el=me._ht_image_bg0=document.createElement('div');
		el.ggId="ht_image_bg";
		el.ggDx=0;
		el.ggDy=9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 9px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_bg0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_bg0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_image_bg0'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_image_bg0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_image_bg0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_image_bg0.style.transition='background-color 0s';
				if (me._ht_image_bg0.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_image_bg0.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_image_bg0.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_image_bg0.logicBlock_backgroundcolor();
		me._ht_image_bg0.onmouseover=function (e) {
			me.elementMouseOver['ht_image_bg0']=true;
			me._ht_image_bg0.logicBlock_backgroundcolor();
		}
		me._ht_image_bg0.onmouseout=function (e) {
			me.elementMouseOver['ht_image_bg0']=false;
			me._ht_image_bg0.logicBlock_backgroundcolor();
		}
		me._ht_image_bg0.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_icon0=document.createElement('div');
		els=me._ht_image_icon0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6I2U2ZTZlNiIgZD0iTTMyLDI4LjE3YTQsNCwwLDEsMS00LDQsNCw0LDAsMCwxLDQtNG0wLTRhOCw4LDAsMSwwLDgsOCw4LDgsMCwwLDAtOC04WiIvPgogIDxwb2x5Z29uIHBvaW50cz0iMzcuMjMgMjIuMjIgMzUuOD'+
			'kgMTkuNDUgMjguMTEgMTkuNDUgMjYuNzcgMjIuMjIgMTYgMjIuMjIgMTYgNDMuNTUgNDggNDMuNTUgNDggMjIuMjIgMzcuMjMgMjIuMjIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_image_icon0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_icon0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzIsMjguMmMyLjIsMCw0LDEuOCw0LDRjMCwyLjItMS44LDQtNCw0cy00LTEuOC00LTRsMCwwQzI4LDMwLDI5LjgsMjgu'+
			'MiwzMiwyOC4yIE0zMiwyNC4yYy00LjQsMC04LDMuNi04LDggICBzMy42LDgsOCw4czgtMy42LDgtOFMzNi40LDI0LjIsMzIsMjQuMnoiLz4KICA8cG9seWdvbiBwb2ludHM9IjM3LjIsMjIuMiAzNS45LDE5LjUgMjguMSwxOS41IDI2LjgsMjIuMiAxNiwyMi4yIDE2LDQzLjUgNDgsNDMuNSA0OCwyMi4yICAiIGNsYXNzPSJzdDIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_image_icon0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon0.onmouseover=function (e) {
			me._ht_image_icon0__img.style.visibility='hidden';
			me._ht_image_icon0__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_icon0']=true;
		}
		me._ht_image_icon0.onmouseout=function (e) {
			me._ht_image_icon0__img.style.visibility='inherit';
			me._ht_image_icon0__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_icon0']=false;
		}
		me._ht_image_icon0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_bg0.appendChild(me._ht_image_icon0);
		me._ht_image_container0.appendChild(me._ht_image_bg0);
		me._ht_image.appendChild(me._ht_image_container0);
		el=me._ht_image_container_close0=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_image_container_close";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 67px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((67px + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_container_close0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_container_close0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('vis_image_hs_popups')).indexOf(me.hotspot.id) != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_container_close0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_container_close0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_container_close0.style.transition='';
				if (me._ht_image_container_close0.ggCurrentLogicStateVisible == 0) {
					me._ht_image_container_close0.style.visibility=(Number(me._ht_image_container_close0.style.opacity)>0||!me._ht_image_container_close0.style.opacity)?'inherit':'hidden';
					me._ht_image_container_close0.ggVisible=true;
				}
				else {
					me._ht_image_container_close0.style.visibility="hidden";
					me._ht_image_container_close0.ggVisible=false;
				}
			}
		}
		me._ht_image_container_close0.logicBlock_visible();
		me._ht_image_container_close0.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false)) && 
					(((player.getVariableValue('vis_image_hs_popups')).indexOf(me.hotspot.id) != -1))
				)
			) {
				player.setVariableValue('vis_image_hs_popups', player.getVariableValue('vis_image_hs_popups').replace("<"+me.hotspot.id+">", ''));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_image.style.zIndex='-1';
			}
		}
		me._ht_image_container_close0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_container_close0);
		me._ht_image.logicBlock_visible();
		me._image_hs_popup0.logicBlock_visible();
		me._image_hs_popup_img0.logicBlock_size();
		me._ht_image_title0.logicBlock_visible();
		me._ht_image_bg0.logicBlock_backgroundcolor();
		me._ht_image_container_close0.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_image_title0.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_image.logicBlock_visible();
				me._image_hs_popup0.logicBlock_visible();
				me._image_hs_popup_img0.logicBlock_size();
				player.setVariableValue('vis_image_hs_popups', "");
				me._ht_image_title0.logicBlock_visible();
				me._ht_image_container_close0.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_image.logicBlock_visible();
				me._image_hs_popup0.logicBlock_visible();
				me._image_hs_popup_img0.logicBlock_size();
				me._ht_image_title0.logicBlock_visible();
				me._ht_image_container_close0.logicBlock_visible();
			};
			me.ggEvent_varchanged_image_hs_description=function() {
				me._image_hs_popup_img0.logicBlock_size();
			};
			me.ggEvent_varchanged_vis_image_hs_popups=function() {
				me._image_hs_popup0.logicBlock_visible();
				me._ht_image_container_close0.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_image.logicBlock_visible();
			};
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 84px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style.transition='';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
				else {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
			}
		}
		me._ht_info.logicBlock_visible();
		me._ht_info.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_hs_popup=document.createElement('div');
		el.ggId="info_hs_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #141414;';
		hs+='border-radius : 16px;';
		hs+='bottom : -330px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((300px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_hs_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_hs_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('vis_info_hs_popups')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_hs_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_hs_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_hs_popup.style.transition='';
				if (me._info_hs_popup.ggCurrentLogicStateVisible == 0) {
					me._info_hs_popup.style.visibility=(Number(me._info_hs_popup.style.opacity)>0||!me._info_hs_popup.style.opacity)?'inherit':'hidden';
					me._info_hs_popup.ggVisible=true;
				}
				else {
					me._info_hs_popup.style.visibility="hidden";
					me._info_hs_popup.ggVisible=false;
				}
			}
		}
		me._info_hs_popup.logicBlock_visible();
		me._info_hs_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_hs_popup_text=document.createElement('div');
		els=me._info_hs_popup_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_hs_popup_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 48px);';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_hs_popup_text.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("<strong style=\'font-size: 18px;\'>%1<\/strong><br>\n<div>%2<\/div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_hs_popup_text.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_hs_popup_text.ggUpdateText();
		});
		el.appendChild(els);
		me._info_hs_popup_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_hs_popup_text.ggUpdatePosition=function (useTransition) {
		}
		me._info_hs_popup.appendChild(me._info_hs_popup_text);
		el=me._info_hs_popup_close=document.createElement('div');
		els=me._info_hs_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDE9IjIwLjY5IiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQzLjMxIiB4Mj0iNDMuMzEiLz4KICA8bGluZSB4MT0iNDMuMz'+
			'EiIHkxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiIHgyPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._info_hs_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_hs_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxND'+
			'E0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjQzLjMxIi8+CiAgPGxpbmUgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIiB4Mj0iMjAuNjkiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._info_hs_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="info_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_hs_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_hs_popup_close.onclick=function (e) {
			player.setVariableValue('vis_info_hs_popups', player.getVariableValue('vis_info_hs_popups').replace(me.hotspot.id, ''));
			me._ht_info.style.zIndex='-1';
		}
		me._info_hs_popup_close.onmouseover=function (e) {
			me._info_hs_popup_close__img.style.visibility='hidden';
			me._info_hs_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['info_hs_popup_close']=true;
		}
		me._info_hs_popup_close.onmouseout=function (e) {
			me._info_hs_popup_close__img.style.visibility='inherit';
			me._info_hs_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['info_hs_popup_close']=false;
		}
		me._info_hs_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._info_hs_popup.appendChild(me._info_hs_popup_close);
		me._ht_info.appendChild(me._info_hs_popup);
		el=me._ht_info_container=document.createElement('div');
		el.ggId="ht_info_container";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 67px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((67px + 0px) / 2) - 8px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false)) && 
					(((player.getVariableValue('vis_info_hs_popups')).indexOf(me.hotspot.id) == -1))
				)
			) {
				player.setVariableValue('vis_info_hs_popups', player.getVariableValue('vis_info_hs_popups') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_info.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_title_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_title_phone.ggUpdateText();
				skin._info_popup_title_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_text_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_text_phone.ggUpdateText();
				skin._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
		}
		me._ht_info_container.onmouseover=function (e) {
			me.elementMouseOver['ht_info_container']=true;
			me._ht_info_title.logicBlock_visible();
		}
		me._ht_info_container.onmouseout=function (e) {
			me.elementMouseOver['ht_info_container']=false;
			me._ht_info_title.logicBlock_visible();
		}
		me._ht_info_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_title=document.createElement('div');
		els=me._ht_info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(230,230,230,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='cursor : default;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_info_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_info_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info_container'] == true)) && 
				((me.hotspot.customimage == "")) && 
				((player._(me.hotspot.title) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_title.style.transition='';
				if (me._ht_info_title.ggCurrentLogicStateVisible == 0) {
					me._ht_info_title.style.visibility=(Number(me._ht_info_title.style.opacity)>0||!me._ht_info_title.style.opacity)?'inherit':'hidden';
					me._ht_info_title.ggVisible=true;
				}
				else {
					me._ht_info_title.style.visibility="hidden";
					me._ht_info_title.ggVisible=false;
				}
			}
		}
		me._ht_info_title.logicBlock_visible();
		me._ht_info_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_container.appendChild(me._ht_info_title);
		el=me._ht_info_bg=document.createElement('div');
		el.ggId="ht_info_bg";
		el.ggDx=0;
		el.ggDy=9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 9px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_info_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_info_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_info_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_info_bg.style.transition='background-color 0s';
				if (me._ht_info_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_info_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_info_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_info_bg.logicBlock_backgroundcolor();
		me._ht_info_bg.onmouseover=function (e) {
			me.elementMouseOver['ht_info_bg']=true;
			me._ht_info_bg.logicBlock_backgroundcolor();
		}
		me._ht_info_bg.onmouseout=function (e) {
			me.elementMouseOver['ht_info_bg']=false;
			me._ht_info_bg.logicBlock_backgroundcolor();
		}
		me._ht_info_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_icon=document.createElement('div');
		els=me._ht_info_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGNpcmNsZSByPSIxLjMzIiBjeD0iMzIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgY3k9IjIwLjg0Ii8+CiAgPGxpbmUgeDE9IjMyIiB5MT0iMzEuNSIgc3R5bG'+
			'U9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDcuNSIgeDI9IjMyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8Y2lyY2xlIHI9IjEuMyIgY3g9IjMyIiBjeT0iMjAuOCIgY2xhc3M9InN0MCIvPgogIDxsaW5lIHgxPSIzMiIgeTE9IjMxLjUiIHkyPSI0Ny41IiB4Mj0iMzIiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_info_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_icon.onmouseover=function (e) {
			me._ht_info_icon__img.style.visibility='hidden';
			me._ht_info_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_info_icon']=true;
		}
		me._ht_info_icon.onmouseout=function (e) {
			me._ht_info_icon__img.style.visibility='inherit';
			me._ht_info_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_info_icon']=false;
		}
		me._ht_info_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_bg.appendChild(me._ht_info_icon);
		me._ht_info_container.appendChild(me._ht_info_bg);
		me._ht_info.appendChild(me._ht_info_container);
		el=me._ht_info_container_close=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_info_container_close";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 67px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((67px + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_container_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_container_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('vis_info_hs_popups')).indexOf(me.hotspot.id) != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_container_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_container_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_container_close.style.transition='';
				if (me._ht_info_container_close.ggCurrentLogicStateVisible == 0) {
					me._ht_info_container_close.style.visibility=(Number(me._ht_info_container_close.style.opacity)>0||!me._ht_info_container_close.style.opacity)?'inherit':'hidden';
					me._ht_info_container_close.ggVisible=true;
				}
				else {
					me._ht_info_container_close.style.visibility="hidden";
					me._ht_info_container_close.ggVisible=false;
				}
			}
		}
		me._ht_info_container_close.logicBlock_visible();
		me._ht_info_container_close.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false)) && 
					(((player.getVariableValue('vis_info_hs_popups')).indexOf(me.hotspot.id) != -1))
				)
			) {
				player.setVariableValue('vis_info_hs_popups', player.getVariableValue('vis_info_hs_popups').replace("<"+me.hotspot.id+">", ''));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_info.style.zIndex='-1';
			}
		}
		me._ht_info_container_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_container_close);
		me._ht_info.logicBlock_visible();
		me._info_hs_popup.logicBlock_visible();
		me._ht_info_title.logicBlock_visible();
		me._ht_info_bg.logicBlock_backgroundcolor();
		me._ht_info_container_close.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_info_title.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_info.logicBlock_visible();
				me._info_hs_popup.logicBlock_visible();
				player.setVariableValue('vis_info_hs_popups', "");
				me._ht_info_title.logicBlock_visible();
				me._ht_info_container_close.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_info.logicBlock_visible();
				me._info_hs_popup.logicBlock_visible();
				me._ht_info_title.logicBlock_visible();
				me._ht_info_container_close.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_info_hs_popups=function() {
				me._info_hs_popup.logicBlock_visible();
				me._ht_info_container_close.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_info.logicBlock_visible();
			};
			me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_pdf(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_pdf=document.createElement('div');
		el.ggId="ht_pdf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 294px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_pdf.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf.style.transition='';
				if (me._ht_pdf.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf.style.visibility=(Number(me._ht_pdf.style.opacity)>0||!me._ht_pdf.style.opacity)?'inherit':'hidden';
					me._ht_pdf.ggVisible=true;
				}
				else {
					me._ht_pdf.style.visibility="hidden";
					me._ht_pdf.ggVisible=false;
				}
			}
		}
		me._ht_pdf.logicBlock_visible();
		me._ht_pdf.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._pdf_hs_popup_pdf.ggInitPdf(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				let pdfInterval_21 = setInterval(() => {
					if (skin._pdf_hs_popup_pdf__pdf.contentWindow.PDFViewerApplication && skin._pdf_hs_popup_pdf__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_hs_popup_pdf__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_hs_popup_pdf__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_hs_popup_pdf.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_21);
					}
				}, 50);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._pdf_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._pdf_hs_popup_title.ggUpdateText();
				skin._pdf_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._pdf_popup_phone.ggInitPdf(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				let pdfInterval_22 = setInterval(() => {
					if (skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_popup_phone.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_22);
					}
				}, 50);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_pdf']=true;
			me._ht_pdf_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_pdf']=false;
			me._ht_pdf_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_title=document.createElement('div');
		els=me._ht_pdf_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_pdf_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(230,230,230,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='cursor : default;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_pdf_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_pdf_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_pdf_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_pdf_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_pdf'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_title.style.transition='';
				if (me._ht_pdf_title.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_title.style.visibility=(Number(me._ht_pdf_title.style.opacity)>0||!me._ht_pdf_title.style.opacity)?'inherit':'hidden';
					me._ht_pdf_title.ggVisible=true;
				}
				else {
					me._ht_pdf_title.style.visibility="hidden";
					me._ht_pdf_title.ggVisible=false;
				}
			}
		}
		me._ht_pdf_title.logicBlock_visible();
		me._ht_pdf_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf.appendChild(me._ht_pdf_title);
		el=me._ht_pdf_bg=document.createElement('div');
		el.ggId="ht_pdf_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_bg.style.transition='background-color 0s';
				if (me._ht_pdf_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_bg.style.visibility="hidden";
					me._ht_pdf_bg.ggVisible=false;
				}
				else {
					me._ht_pdf_bg.style.visibility=(Number(me._ht_pdf_bg.style.opacity)>0||!me._ht_pdf_bg.style.opacity)?'inherit':'hidden';
					me._ht_pdf_bg.ggVisible=true;
				}
			}
		}
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_pdf_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_pdf_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_pdf_bg.style.transition='background-color 0s';
				if (me._ht_pdf_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_pdf_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_pdf_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_pdf_bg.logicBlock_backgroundcolor();
		me._ht_pdf_bg.onmouseover=function (e) {
			me.elementMouseOver['ht_pdf_bg']=true;
			me._ht_pdf_bg.logicBlock_backgroundcolor();
		}
		me._ht_pdf_bg.onmouseout=function (e) {
			me.elementMouseOver['ht_pdf_bg']=false;
			me._ht_pdf_bg.logicBlock_backgroundcolor();
		}
		me._ht_pdf_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_icon=document.createElement('div');
		els=me._ht_pdf_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlnb24gcG9pbnRzPSIzNiAxNiAyMCAxNiAyMCA0OCA0NCA0OCA0NCAyNCAzNiAxNiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4Ii8+CiAgPHBvbHlsaW5lIH'+
			'BvaW50cz0iMzYgMTYgMzYgMjQgNDQgMjQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_pdf_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_pdf_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM2LDE2IDIwLDE2IDIwLDQ4IDQ0LDQ4IDQ0LDI0ICAiIGNsYXNzPSJzdDEiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIzNiwxNiAzNiwyNCA0NCwyNCAgIiBjbGFzcz0i'+
			'c3QxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_pdf_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_pdf_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_icon.onmouseover=function (e) {
			me._ht_pdf_icon__img.style.visibility='hidden';
			me._ht_pdf_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_pdf_icon']=true;
		}
		me._ht_pdf_icon.onmouseout=function (e) {
			me._ht_pdf_icon__img.style.visibility='inherit';
			me._ht_pdf_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_pdf_icon']=false;
		}
		me._ht_pdf_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf_bg.appendChild(me._ht_pdf_icon);
		me._ht_pdf.appendChild(me._ht_pdf_bg);
		el=me._ht_pdf_custom_image=document.createElement('div');
		els=me._ht_pdf_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_pdf_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_pdf_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_pdf_custom_image.ggAltText));
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_pdf_custom_image.ggText_untranslated = img;
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_pdf_custom_image.ggSubElement.style.width = '0px';
			me._ht_pdf_custom_image.ggSubElement.style.height = '0px';
			me._ht_pdf_custom_image.ggSubElement.src='';
			me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_pdf_custom_image.ggText != player._(me._ht_pdf_custom_image.ggText_untranslated)) {
				me._ht_pdf_custom_image.ggText = player._(me._ht_pdf_custom_image.ggText_untranslated);
				me._ht_pdf_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_pdf_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_custom_image.style.transition='';
				if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_custom_image.style.visibility=(Number(me._ht_pdf_custom_image.style.opacity)>0||!me._ht_pdf_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
					me._ht_pdf_custom_image.ggVisible=true;
				}
				else {
					me._ht_pdf_custom_image.style.visibility="hidden";
					me._ht_pdf_custom_image.ggSubElement.src='';
					me._ht_pdf_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_pdf_custom_image.logicBlock_visible();
		me._ht_pdf_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_pdf_custom_image.clientWidth;
			var parentHeight = me._ht_pdf_custom_image.clientHeight;
			var img = me._ht_pdf_custom_image__img;
			var aspectRatioDiv = me._ht_pdf_custom_image.clientWidth / me._ht_pdf_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentWidth < me._ht_pdf_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_pdf_custom_image.scrollLeft=currentWidth / 2 - me._ht_pdf_custom_image.clientWidth / 2;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentHeight < me._ht_pdf_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_pdf_custom_image.scrollTop=currentHeight / 2 - me._ht_pdf_custom_image.clientHeight / 2;
			}
		}
		me._ht_pdf.appendChild(me._ht_pdf_custom_image);
		me._ht_pdf.logicBlock_visible();
		me._ht_pdf_title.logicBlock_visible();
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_bg.logicBlock_backgroundcolor();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_pdf_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_pdf_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_pdf_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_pdf_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_pdf_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_pdf_title.logicBlock_visible();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf_title.logicBlock_visible();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf_title.logicBlock_visible();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_pdf.logicBlock_visible();
			};
			me.__div = me._ht_pdf;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 734px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file.style.transition='';
				if (me._ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file.style.visibility=(Number(me._ht_video_file.style.opacity)>0||!me._ht_video_file.style.opacity)?'inherit':'hidden';
					me._ht_video_file.ggVisible=true;
				}
				else {
					me._ht_video_file.style.visibility="hidden";
					me._ht_video_file.ggVisible=false;
				}
			}
		}
		me._ht_video_file.logicBlock_visible();
		me._ht_video_file.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_file_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_file_hs_popup_vid.ggInitMedia(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._video_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._video_hs_popup_title.ggUpdateText();
				skin._video_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_controller_seekbar.ggMediaId = "video_file_hs_popup_vid";
				skin._video_controller_seekbar.ggConnectToMediaEl();
				skin._video_controller_seekbar.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_file_popup_phone.ggInitMedia(player.getBasePath()+""+player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_file_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._ht_video_file_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_file']=false;
			me._ht_video_file_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_title=document.createElement('div');
		els=me._ht_video_file_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_file_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(230,230,230,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='cursor : default;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_file_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_file_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_file_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_file_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_title.style.transition='';
				if (me._ht_video_file_title.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_title.style.visibility=(Number(me._ht_video_file_title.style.opacity)>0||!me._ht_video_file_title.style.opacity)?'inherit':'hidden';
					me._ht_video_file_title.ggVisible=true;
				}
				else {
					me._ht_video_file_title.style.visibility="hidden";
					me._ht_video_file_title.ggVisible=false;
				}
			}
		}
		me._ht_video_file_title.logicBlock_visible();
		me._ht_video_file_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_file_title);
		el=me._ht_video_file_bg=document.createElement('div');
		el.ggId="ht_video_file_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_bg.style.transition='background-color 0s';
				if (me._ht_video_file_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_bg.style.visibility="hidden";
					me._ht_video_file_bg.ggVisible=false;
				}
				else {
					me._ht_video_file_bg.style.visibility=(Number(me._ht_video_file_bg.style.opacity)>0||!me._ht_video_file_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_file_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_file_bg.logicBlock_visible();
		me._ht_video_file_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_file_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_file_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_file_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_file_bg.style.transition='background-color 0s';
				if (me._ht_video_file_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_file_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_video_file_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_video_file_bg.logicBlock_backgroundcolor();
		me._ht_video_file_bg.onmouseover=function (e) {
			me.elementMouseOver['ht_video_file_bg']=true;
			me._ht_video_file_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_file_bg.onmouseout=function (e) {
			me.elementMouseOver['ht_video_file_bg']=false;
			me._ht_video_file_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_file_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_icon=document.createElement('div');
		els=me._ht_video_file_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6I2U2ZTZlNiIgZD0iTTM0LjQ4LDI3LjQzdjkuMTRIMjBWMjcuNDNIMzQuNDhNNDQsMzAuMzV2My4zTDQxLjE1LDMyLDQ0LDMwLjM1bTQtNi45Mi05LjUyLDUuNDlWMjMuNDNIMTZWNDAuNTdIMzguNDhWMzUuMDhMND'+
			'gsNDAuNTdWMjMuNDNaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_file_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_file_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzQuNSwyNy40djkuMUgyMHYtOS4xSDM0LjUgTTQ0LDMwLjR2My4zTDQxLjIsMzJMNDQsMzAuNCBNNDgsMjMuNGwtOS41LDUuNXYtNS41SDE2djE3LjFoMjIuNXYtNS41bDkuNSw1LjUgICBWMjMuNHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_file_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_file_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_icon.onmouseover=function (e) {
			me._ht_video_file_icon__img.style.visibility='hidden';
			me._ht_video_file_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_file_icon']=true;
		}
		me._ht_video_file_icon.onmouseout=function (e) {
			me._ht_video_file_icon__img.style.visibility='inherit';
			me._ht_video_file_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_file_icon']=false;
		}
		me._ht_video_file_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_bg.appendChild(me._ht_video_file_icon);
		me._ht_video_file.appendChild(me._ht_video_file_bg);
		el=me._ht_video_file_custom_image=document.createElement('div');
		els=me._ht_video_file_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_file_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_file_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_file_custom_image.ggAltText));
			me._ht_video_file_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_file_custom_image.ggText_untranslated = img;
			me._ht_video_file_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_file_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_file_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_file_custom_image.ggSubElement.src='';
			me._ht_video_file_custom_image.ggSubElement.src=me._ht_video_file_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_file_custom_image.ggText != player._(me._ht_video_file_custom_image.ggText_untranslated)) {
				me._ht_video_file_custom_image.ggText = player._(me._ht_video_file_custom_image.ggText_untranslated);
				me._ht_video_file_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_file_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_custom_image.style.transition='';
				if (me._ht_video_file_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_custom_image.style.visibility=(Number(me._ht_video_file_custom_image.style.opacity)>0||!me._ht_video_file_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_file_custom_image.ggSubElement.src=me._ht_video_file_custom_image.ggText;
					me._ht_video_file_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_file_custom_image.style.visibility="hidden";
					me._ht_video_file_custom_image.ggSubElement.src='';
					me._ht_video_file_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_file_custom_image.logicBlock_visible();
		me._ht_video_file_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_file_custom_image.clientWidth;
			var parentHeight = me._ht_video_file_custom_image.clientHeight;
			var img = me._ht_video_file_custom_image__img;
			var aspectRatioDiv = me._ht_video_file_custom_image.clientWidth / me._ht_video_file_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_file_custom_image.ggScrollbars || currentWidth < me._ht_video_file_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_file_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_file_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_file_custom_image.ggScrollbars || currentHeight < me._ht_video_file_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_file_custom_image.scrollTop=currentHeight / 2 - me._ht_video_file_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_file.appendChild(me._ht_video_file_custom_image);
		me._ht_video_file.logicBlock_visible();
		me._ht_video_file_title.logicBlock_visible();
		me._ht_video_file_bg.logicBlock_visible();
		me._ht_video_file_bg.logicBlock_backgroundcolor();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_file_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_file_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_file_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_file_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_file_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_file_title.logicBlock_visible();
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file_title.logicBlock_visible();
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file_title.logicBlock_visible();
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_ht_video_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_url=document.createElement('div');
		el.ggId="ht_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 734px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url.style.transition='';
				if (me._ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url.style.visibility=(Number(me._ht_video_url.style.opacity)>0||!me._ht_video_url.style.opacity)?'inherit':'hidden';
					me._ht_video_url.ggVisible=true;
				}
				else {
					me._ht_video_url.style.visibility="hidden";
					me._ht_video_url.ggVisible=false;
				}
			}
		}
		me._ht_video_url.logicBlock_visible();
		me._ht_video_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_url_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_url_hs_popup_vid.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._video_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._video_hs_popup_title.ggUpdateText();
				skin._video_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_controller_seekbar.ggMediaId = "video_url_hs_popup_vid";
				skin._video_controller_seekbar.ggConnectToMediaEl();
				skin._video_controller_seekbar.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_url_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_url_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_url']=true;
			me._ht_video_url_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_url']=false;
			me._ht_video_url_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_title=document.createElement('div');
		els=me._ht_video_url_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_url_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(230,230,230,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='cursor : default;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_url_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_url_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_url_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_url_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_url'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_title.style.transition='';
				if (me._ht_video_url_title.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_title.style.visibility=(Number(me._ht_video_url_title.style.opacity)>0||!me._ht_video_url_title.style.opacity)?'inherit':'hidden';
					me._ht_video_url_title.ggVisible=true;
				}
				else {
					me._ht_video_url_title.style.visibility="hidden";
					me._ht_video_url_title.ggVisible=false;
				}
			}
		}
		me._ht_video_url_title.logicBlock_visible();
		me._ht_video_url_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._ht_video_url_title);
		el=me._ht_video_url_bg=document.createElement('div');
		el.ggId="ht_video_url_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_bg.style.transition='background-color 0s';
				if (me._ht_video_url_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_bg.style.visibility="hidden";
					me._ht_video_url_bg.ggVisible=false;
				}
				else {
					me._ht_video_url_bg.style.visibility=(Number(me._ht_video_url_bg.style.opacity)>0||!me._ht_video_url_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_url_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_url_bg.logicBlock_visible();
		me._ht_video_url_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_url_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_url_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_url_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_url_bg.style.transition='background-color 0s';
				if (me._ht_video_url_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_url_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_video_url_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_video_url_bg.logicBlock_backgroundcolor();
		me._ht_video_url_bg.onmouseover=function (e) {
			me.elementMouseOver['ht_video_url_bg']=true;
			me._ht_video_url_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_url_bg.onmouseout=function (e) {
			me.elementMouseOver['ht_video_url_bg']=false;
			me._ht_video_url_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_url_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_icon=document.createElement('div');
		els=me._ht_video_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6I2U2ZTZlNiIgZD0iTTM0LjQ4LDI3LjQzdjkuMTRIMjBWMjcuNDNIMzQuNDhNNDQsMzAuMzV2My4zTDQxLjE1LDMyLDQ0LDMwLjM1bTQtNi45Mi05LjUyLDUuNDlWMjMuNDNIMTZWNDAuNTdIMzguNDhWMzUuMDhMND'+
			'gsNDAuNTdWMjMuNDNaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_url_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzQuNSwyNy40djkuMUgyMHYtOS4xSDM0LjUgTTQ0LDMwLjR2My4zTDQxLjIsMzJMNDQsMzAuNCBNNDgsMjMuNGwtOS41LDUuNXYtNS41SDE2djE3LjFoMjIuNXYtNS41bDkuNSw1LjUgICBWMjMuNHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_url_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_icon.onmouseover=function (e) {
			me._ht_video_url_icon__img.style.visibility='hidden';
			me._ht_video_url_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_url_icon']=true;
		}
		me._ht_video_url_icon.onmouseout=function (e) {
			me._ht_video_url_icon__img.style.visibility='inherit';
			me._ht_video_url_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_url_icon']=false;
		}
		me._ht_video_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_bg.appendChild(me._ht_video_url_icon);
		me._ht_video_url.appendChild(me._ht_video_url_bg);
		el=me._ht_video_url_custom_image=document.createElement('div');
		els=me._ht_video_url_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_url_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_url_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_url_custom_image.ggAltText));
			me._ht_video_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_url_custom_image.ggText_untranslated = img;
			me._ht_video_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_url_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_url_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_url_custom_image.ggSubElement.src='';
			me._ht_video_url_custom_image.ggSubElement.src=me._ht_video_url_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_url_custom_image.ggText != player._(me._ht_video_url_custom_image.ggText_untranslated)) {
				me._ht_video_url_custom_image.ggText = player._(me._ht_video_url_custom_image.ggText_untranslated);
				me._ht_video_url_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_url_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_custom_image.style.transition='';
				if (me._ht_video_url_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_custom_image.style.visibility=(Number(me._ht_video_url_custom_image.style.opacity)>0||!me._ht_video_url_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_url_custom_image.ggSubElement.src=me._ht_video_url_custom_image.ggText;
					me._ht_video_url_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_url_custom_image.style.visibility="hidden";
					me._ht_video_url_custom_image.ggSubElement.src='';
					me._ht_video_url_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_url_custom_image.logicBlock_visible();
		me._ht_video_url_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_url_custom_image.clientWidth;
			var parentHeight = me._ht_video_url_custom_image.clientHeight;
			var img = me._ht_video_url_custom_image__img;
			var aspectRatioDiv = me._ht_video_url_custom_image.clientWidth / me._ht_video_url_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_url_custom_image.ggScrollbars || currentWidth < me._ht_video_url_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_url_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_url_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_url_custom_image.ggScrollbars || currentHeight < me._ht_video_url_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_url_custom_image.scrollTop=currentHeight / 2 - me._ht_video_url_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_url.appendChild(me._ht_video_url_custom_image);
		me._ht_video_url.logicBlock_visible();
		me._ht_video_url_title.logicBlock_visible();
		me._ht_video_url_bg.logicBlock_visible();
		me._ht_video_url_bg.logicBlock_backgroundcolor();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_url_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_url_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_url_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_url_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_url_title.logicBlock_visible();
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url_title.logicBlock_visible();
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url_title.logicBlock_visible();
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_url.logicBlock_visible();
			};
			me.__div = me._ht_video_url;
	};
	function SkinHotspotClass_ht_video_vimeo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_vimeo=document.createElement('div');
		el.ggId="ht_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 624px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo.style.transition='';
				if (me._ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo.style.visibility=(Number(me._ht_video_vimeo.style.opacity)>0||!me._ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo.ggVisible=true;
				}
				else {
					me._ht_video_vimeo.style.visibility="hidden";
					me._ht_video_vimeo.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible();
		me._ht_video_vimeo.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_vimeo_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_vimeo_hs_popup_vid.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._video_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._video_hs_popup_title.ggUpdateText();
				skin._video_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._vimeo_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_vimeo']=true;
			me._ht_video_vimeo_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_vimeo']=false;
			me._ht_video_vimeo_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_title=document.createElement('div');
		els=me._ht_video_vimeo_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_vimeo_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(230,230,230,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='cursor : default;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_vimeo_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_vimeo_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_vimeo_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_vimeo_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_vimeo'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_title.style.transition='';
				if (me._ht_video_vimeo_title.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_title.style.visibility=(Number(me._ht_video_vimeo_title.style.opacity)>0||!me._ht_video_vimeo_title.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_title.ggVisible=true;
				}
				else {
					me._ht_video_vimeo_title.style.visibility="hidden";
					me._ht_video_vimeo_title.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo_title.logicBlock_visible();
		me._ht_video_vimeo_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_title);
		el=me._ht_video_vimeo_bg=document.createElement('div');
		el.ggId="ht_video_vimeo_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_bg.style.transition='background-color 0s';
				if (me._ht_video_vimeo_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_bg.style.visibility="hidden";
					me._ht_video_vimeo_bg.ggVisible=false;
				}
				else {
					me._ht_video_vimeo_bg.style.visibility=(Number(me._ht_video_vimeo_bg.style.opacity)>0||!me._ht_video_vimeo_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_vimeo_bg.logicBlock_visible();
		me._ht_video_vimeo_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_vimeo_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_vimeo_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_vimeo_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_vimeo_bg.style.transition='background-color 0s';
				if (me._ht_video_vimeo_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_vimeo_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_video_vimeo_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_video_vimeo_bg.logicBlock_backgroundcolor();
		me._ht_video_vimeo_bg.onmouseover=function (e) {
			me.elementMouseOver['ht_video_vimeo_bg']=true;
			me._ht_video_vimeo_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_vimeo_bg.onmouseout=function (e) {
			me.elementMouseOver['ht_video_vimeo_bg']=false;
			me._ht_video_vimeo_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_vimeo_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_icon=document.createElement('div');
		els=me._ht_video_vimeo_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6I2U2ZTZlNiIgZD0iTTM0LjQ4LDI3LjQzdjkuMTRIMjBWMjcuNDNIMzQuNDhNNDQsMzAuMzV2My4zTDQxLjE1LDMyLDQ0LDMwLjM1bTQtNi45Mi05LjUyLDUuNDlWMjMuNDNIMTZWNDAuNTdIMzguNDhWMzUuMDhMND'+
			'gsNDAuNTdWMjMuNDNaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_vimeo_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_vimeo_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzQuNSwyNy40djkuMUgyMHYtOS4xSDM0LjUgTTQ0LDMwLjR2My4zTDQxLjIsMzJMNDQsMzAuNCBNNDgsMjMuNGwtOS41LDUuNXYtNS41SDE2djE3LjFoMjIuNXYtNS41bDkuNSw1LjUgICBWMjMuNHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_vimeo_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_vimeo_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_icon.onmouseover=function (e) {
			me._ht_video_vimeo_icon__img.style.visibility='hidden';
			me._ht_video_vimeo_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_vimeo_icon']=true;
		}
		me._ht_video_vimeo_icon.onmouseout=function (e) {
			me._ht_video_vimeo_icon__img.style.visibility='inherit';
			me._ht_video_vimeo_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_vimeo_icon']=false;
		}
		me._ht_video_vimeo_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_bg.appendChild(me._ht_video_vimeo_icon);
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_bg);
		el=me._ht_video_vimeo_custom_image=document.createElement('div');
		els=me._ht_video_vimeo_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_vimeo_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_vimeo_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_vimeo_custom_image.ggAltText));
			me._ht_video_vimeo_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_vimeo_custom_image.ggText_untranslated = img;
			me._ht_video_vimeo_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_vimeo_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_vimeo_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_vimeo_custom_image.ggSubElement.src='';
			me._ht_video_vimeo_custom_image.ggSubElement.src=me._ht_video_vimeo_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_vimeo_custom_image.ggText != player._(me._ht_video_vimeo_custom_image.ggText_untranslated)) {
				me._ht_video_vimeo_custom_image.ggText = player._(me._ht_video_vimeo_custom_image.ggText_untranslated);
				me._ht_video_vimeo_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_vimeo_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_custom_image.style.transition='';
				if (me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_custom_image.style.visibility=(Number(me._ht_video_vimeo_custom_image.style.opacity)>0||!me._ht_video_vimeo_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_custom_image.ggSubElement.src=me._ht_video_vimeo_custom_image.ggText;
					me._ht_video_vimeo_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_vimeo_custom_image.style.visibility="hidden";
					me._ht_video_vimeo_custom_image.ggSubElement.src='';
					me._ht_video_vimeo_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible();
		me._ht_video_vimeo_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_vimeo_custom_image.clientWidth;
			var parentHeight = me._ht_video_vimeo_custom_image.clientHeight;
			var img = me._ht_video_vimeo_custom_image__img;
			var aspectRatioDiv = me._ht_video_vimeo_custom_image.clientWidth / me._ht_video_vimeo_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_vimeo_custom_image.ggScrollbars || currentWidth < me._ht_video_vimeo_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_vimeo_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_vimeo_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_vimeo_custom_image.ggScrollbars || currentHeight < me._ht_video_vimeo_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_vimeo_custom_image.scrollTop=currentHeight / 2 - me._ht_video_vimeo_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_custom_image);
		me._ht_video_vimeo.logicBlock_visible();
		me._ht_video_vimeo_title.logicBlock_visible();
		me._ht_video_vimeo_bg.logicBlock_visible();
		me._ht_video_vimeo_bg.logicBlock_backgroundcolor();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_vimeo_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_vimeo_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_vimeo_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_vimeo_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_vimeo_title.logicBlock_visible();
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo_title.logicBlock_visible();
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo_title.logicBlock_visible();
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_vimeo.logicBlock_visible();
			};
			me.__div = me._ht_video_vimeo;
	};
	function SkinHotspotClass_ht_video_youtube(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 514px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube.style.transition='';
				if (me._ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube.style.visibility=(Number(me._ht_video_youtube.style.opacity)>0||!me._ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube.ggVisible=true;
				}
				else {
					me._ht_video_youtube.style.visibility="hidden";
					me._ht_video_youtube.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible();
		me._ht_video_youtube.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_youtube_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_youtube_hs_popup_vid.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._video_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._video_hs_popup_title.ggUpdateText();
				skin._video_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._youtube_popup_phone.ggInitMedia(player._(me.hotspot.url));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			me._ht_video_youtube_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_youtube']=false;
			me._ht_video_youtube_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_title=document.createElement('div');
		els=me._ht_video_youtube_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_youtube_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(230,230,230,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -42px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='cursor : default;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_youtube_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_youtube_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_youtube_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_youtube_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_youtube'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_title.style.transition='';
				if (me._ht_video_youtube_title.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_title.style.visibility=(Number(me._ht_video_youtube_title.style.opacity)>0||!me._ht_video_youtube_title.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_title.ggVisible=true;
				}
				else {
					me._ht_video_youtube_title.style.visibility="hidden";
					me._ht_video_youtube_title.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_title.logicBlock_visible();
		me._ht_video_youtube_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_title);
		el=me._ht_video_youtube_bg=document.createElement('div');
		el.ggId="ht_video_youtube_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_bg.style.transition='background-color 0s';
				if (me._ht_video_youtube_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_bg.style.visibility="hidden";
					me._ht_video_youtube_bg.ggVisible=false;
				}
				else {
					me._ht_video_youtube_bg.style.visibility=(Number(me._ht_video_youtube_bg.style.opacity)>0||!me._ht_video_youtube_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_bg.logicBlock_visible();
		me._ht_video_youtube_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_youtube_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_youtube_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_youtube_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_youtube_bg.style.transition='background-color 0s';
				if (me._ht_video_youtube_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_youtube_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_video_youtube_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_video_youtube_bg.logicBlock_backgroundcolor();
		me._ht_video_youtube_bg.onmouseover=function (e) {
			me.elementMouseOver['ht_video_youtube_bg']=true;
			me._ht_video_youtube_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_youtube_bg.onmouseout=function (e) {
			me.elementMouseOver['ht_video_youtube_bg']=false;
			me._ht_video_youtube_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_youtube_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_icon=document.createElement('div');
		els=me._ht_video_youtube_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6I2U2ZTZlNiIgZD0iTTM0LjQ4LDI3LjQzdjkuMTRIMjBWMjcuNDNIMzQuNDhNNDQsMzAuMzV2My4zTDQxLjE1LDMyLDQ0LDMwLjM1bTQtNi45Mi05LjUyLDUuNDlWMjMuNDNIMTZWNDAuNTdIMzguNDhWMzUuMDhMND'+
			'gsNDAuNTdWMjMuNDNaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_youtube_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_youtube_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzQuNSwyNy40djkuMUgyMHYtOS4xSDM0LjUgTTQ0LDMwLjR2My4zTDQxLjIsMzJMNDQsMzAuNCBNNDgsMjMuNGwtOS41LDUuNXYtNS41SDE2djE3LjFoMjIuNXYtNS41bDkuNSw1LjUgICBWMjMuNHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_youtube_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_youtube_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon.onmouseover=function (e) {
			me._ht_video_youtube_icon__img.style.visibility='hidden';
			me._ht_video_youtube_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_youtube_icon']=true;
		}
		me._ht_video_youtube_icon.onmouseout=function (e) {
			me._ht_video_youtube_icon__img.style.visibility='inherit';
			me._ht_video_youtube_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_youtube_icon']=false;
		}
		me._ht_video_youtube_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_bg.appendChild(me._ht_video_youtube_icon);
		me._ht_video_youtube.appendChild(me._ht_video_youtube_bg);
		el=me._ht_video_youtube_custom_image=document.createElement('div');
		els=me._ht_video_youtube_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_youtube_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_youtube_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_youtube_custom_image.ggAltText));
			me._ht_video_youtube_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_youtube_custom_image.ggText_untranslated = img;
			me._ht_video_youtube_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_youtube_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_youtube_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_youtube_custom_image.ggSubElement.src='';
			me._ht_video_youtube_custom_image.ggSubElement.src=me._ht_video_youtube_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_youtube_custom_image.ggText != player._(me._ht_video_youtube_custom_image.ggText_untranslated)) {
				me._ht_video_youtube_custom_image.ggText = player._(me._ht_video_youtube_custom_image.ggText_untranslated);
				me._ht_video_youtube_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_youtube_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_custom_image.style.transition='';
				if (me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_custom_image.style.visibility=(Number(me._ht_video_youtube_custom_image.style.opacity)>0||!me._ht_video_youtube_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_custom_image.ggSubElement.src=me._ht_video_youtube_custom_image.ggText;
					me._ht_video_youtube_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_youtube_custom_image.style.visibility="hidden";
					me._ht_video_youtube_custom_image.ggSubElement.src='';
					me._ht_video_youtube_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_custom_image.logicBlock_visible();
		me._ht_video_youtube_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_youtube_custom_image.clientWidth;
			var parentHeight = me._ht_video_youtube_custom_image.clientHeight;
			var img = me._ht_video_youtube_custom_image__img;
			var aspectRatioDiv = me._ht_video_youtube_custom_image.clientWidth / me._ht_video_youtube_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_youtube_custom_image.ggScrollbars || currentWidth < me._ht_video_youtube_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_youtube_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_youtube_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_youtube_custom_image.ggScrollbars || currentHeight < me._ht_video_youtube_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_youtube_custom_image.scrollTop=currentHeight / 2 - me._ht_video_youtube_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_custom_image);
		me._ht_video_youtube.logicBlock_visible();
		me._ht_video_youtube_title.logicBlock_visible();
		me._ht_video_youtube_bg.logicBlock_visible();
		me._ht_video_youtube_bg.logicBlock_backgroundcolor();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_youtube_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_youtube_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_youtube_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_youtube_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_youtube_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_youtube_title.logicBlock_visible();
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube_title.logicBlock_visible();
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube_title.logicBlock_visible();
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_youtube.logicBlock_visible();
			};
			me.__div = me._ht_video_youtube;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_video_youtube') {
				hotspot.skinid = 'ht_video_youtube';
				hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_vimeo') {
				hotspot.skinid = 'ht_video_vimeo';
				hsinst = new SkinHotspotClass_ht_video_vimeo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_url') {
				hotspot.skinid = 'ht_video_url';
				hsinst = new SkinHotspotClass_ht_video_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_file') {
				hotspot.skinid = 'ht_video_file';
				hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_pdf') {
				hotspot.skinid = 'ht_pdf';
				hsinst = new SkinHotspotClass_ht_pdf(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info') {
				hotspot.skinid = 'ht_info';
				hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_image') {
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_url') {
				hotspot.skinid = 'ht_url';
				hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='floor_hotspot') {
				hotspot.skinid = 'floor_hotspot';
				hsinst = new SkinHotspotClass_floor_hotspot(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_image_backup';
				hsinst = new SkinHotspotClass_ht_image_backup(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='//.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; -webkit-text-size-adjust: 100%; } .ggskin{ font-family: "Arial", "Roboto", serif; font-size: 14px;} .ggmarkdown p { margin-top: 0px; } .ggmarkdown a { color: #999; } .ggdefaulthotspot { font-family: "Open Sans"; font-size: 15px; -webkit-filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.7)); filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.7)); } .ggmarkdown h1:first-child, .ggmarkdown h2:first-child, .ggmarkdown h3:first-child, .ggmarkdown h4:first-child { margin-top: 0px; } .ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 1em; margin-bottom: 0.2em; } .ggmarkdown { white-space: normal; } .open_sans { font-family: "Open Sans"; } .ggskin_text>div::-webkit-scrollbar { width: 4px; } .ggskin_text>div { scrollbar-width: thin; } .ripple-effect { width: 30px; height: 30px; border-radius: 50%; box-shadow: 0 0 0 0 #172951; animation: ripple 3s infinite; } @keyframes ripple { 0% { -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.5); box-shadow: 0 0 0 0 rgba(242,242,242); border-radius: 100%; } 70% { -moz-box-shadow: 0 0 0 30px rgba(204, 169, 44, 0); box-shadow: 0 0 0 40px rgba(1, 60, 79, 0); border-radius: 100%; } 100% { -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0); box-shadow: 0 0 0 0 rgba(1, 60, 79, 0); border-radius: 100%; } } @keyframes stretch { 0% { transform: scale(1); } 100% { transform: scale(1.2); } }@font-face { font-family: "Open Sans"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/open-sans-latin-regular.woff2") format("woff2"); } @font-face { font-family: "Open Sans"; font-style: normal; font-weight: 600; src: local(""), url("$(skinbase)fonts/open-sans-latin-600.woff2") format("woff2"); } @font-face { font-family: "Open Sans"; font-style: normal; font-weight: 700; src: local(""), url("$(skinbase)fonts/open-sans-latin-700.woff2") format("woff2"); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};