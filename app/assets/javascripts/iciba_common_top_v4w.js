

function iciba_common_top_user_show(){

	document.getElementById("iciba_common_top_user_box").style.display="block";

	document.getElementById("iciba_common_top_func_user").className="iciba_common_top_func_a iciba_common_top_func_user iciba_common_top_func_hover"

}

function iciba_common_top_user_hide(){

	document.getElementById("iciba_common_top_user_box").style.display="none";

	document.getElementById("iciba_common_top_func_user").className="iciba_common_top_func_a iciba_common_top_func_user"

}





function getFlashObject_top(movieName) {

	if (window.document[movieName]) {

		return window.document[movieName];

	}

	if (navigator.appName.indexOf("Microsoft Internet")==-1) {

		if (document.embeds && document.embeds[movieName])

		return document.embeds[movieName];

	} else  {

		return document.getElementById(movieName);

	}

}

function dispCofirm(){

	var confirmflag = confirm("您没有安装flash播放插件，所以无法发音，请先安装下吧！");

	if(confirmflag){

		var url = 'http://www.adobe.com/go/getflashplayer';

		var wo = window.open();

		setTimeout(function(){if(wo)wo.location = url;}, 50);

	}

}



var old = null;//存储前一次发音对象

function asplay_top(c){
	var audio = document.createElement("audio");

	if(audio != null && audio.canPlayType && audio.canPlayType("audio/mpeg")){

		if(old){

			old.pause();//如果多次触发发音，则先停止上一次的发音

		}

		//var audio = document.createElement("audio");

		audio.src = c;

		old = audio;

		audio.play();

	}else{

		var asound = getFlashObject_top("asound_top");

		if(asound){

			try{

				asound.SetVariable("f",c);

				asound.GotoFrame(1);

			}catch(e){

				dispCofirm();

			}

		}

	}

}

function asstop_top(){

	var asound = getFlashObject_top("asound_top");

	if(asound){

		asound.GotoFrame(3);

	}

}

var timer = null;

function  iciba_common_top_callback(mp3) {

	asplay_top(mp3);

}

function  iciba_common_top_onSecondDelay(mp3) {

	clearTimeout(timer);

//	var mp3_1 = "iciba_common_top_callback('"+mp3+"')";

//	timer = setTimeout(mp3_1, 100);

	timer = setTimeout(function(){iciba_common_top_callback(mp3); return false;}, 100);

}



var ICIBA_TOP = window.ICIBA_TOP = {

	_module: 1,

	curTab: 1,

	user: {

		id: 0,

		name: "",

		email: "",

		mobile: "",

		stat: {

			status: false,

			email: false,

			mobile: false

		}

	},

	initUserCookie: function() {



		var _ustat;

		var _stat = this.readCookie("_ustat");

		if (typeof _stat == "string") {

			try {

				_ustat = eval("(" + _stat + ")");

				this.user.id = _ustat.i;

				this.user.name = _ustat.n;



				this.user.stat.status = _ustat.s.u;





			} catch(e) {}

		}

		this.showHeaderBar()

	},

	readCookie: function(a) {

		var c = "";

		var b = a + "=";

		if (document.cookie.length > 0) {

			offset = document.cookie.indexOf(b);

			if (offset != -1) {

				offset += b.length;

				end = document.cookie.indexOf(";", offset);

				if (end == -1) {

					end = document.cookie.length

				}

				c = document.cookie.substring(offset, end)

			}

		}

		return decodeURIComponent(c)

	},

	showHeaderBar: function() {

		var c = document.location.href;

		var obj = document.getElementById("iciba_common_top_Login");

		var obj_c = document.getElementById("iciba_common_top_Logon_defined");



		if (this.checkLogin()) {

			var html_obj = obj.innerHTML;

			var html_tmp = "";



			html_tmp ='<div class="iciba_common_top_user" onMouseOver="iciba_common_top_user_show()" onMouseOut="iciba_common_top_user_hide()">';

			html_tmp+= '<a class="iciba_common_top_func_a iciba_common_top_func_user" id="iciba_common_top_func_user" href="http://my.iciba.com/?c=user" target="_blank" ><strong>帐号</strong><b class="iciba_common_top_j"></b></a>';

			html_tmp+= '	 <div class="iciba_common_top_user_box" id="iciba_common_top_user_box">';

			html_tmp+= '		<div class="iciba_common_top_user_line"></div>';

			html_tmp+= '		<div class="iciba_common_top_user_name">';

			html_tmp+= '	<a href="http://my.iciba.com/?c=user" target="_blank"><img src="http://my.iciba.com/index.php?c=avatars&m=display&uid='+this.user.id+'&size=small" onerror="this.onerror=null;this.src=\'http://my.iciba.com/static/images/noavatar_small.gif\'"  width="48" height="48"/></a>';

			html_tmp+= '			<p>ID: <a href="http://my.iciba.com/?c=user" target="_blank">'+this.user.id+'</a></p>';

			if(this.user.name != null && this.user.name != ""){

				html_tmp+= '		    <p>昵称：<a href="http://my.iciba.com/?c=user" target="_blank">'+this.user.name+'</a></p>';

			}else{

				html_tmp+= '		    <p>昵称：<a onclick="iciba_common_top_clickCountIndex(4)" href="http://my.iciba.com/?c=user&m=edit_info" target="_blank">立即设置</a></p>';

			}

			html_tmp+= '		    </div>';

			html_tmp+= '		    <div class="iciba_common_top_user_func">';

			html_tmp+= '		        <a onclick="iciba_common_top_clickCountIndex(5)" href="http://my.iciba.com/?c=user&m=edit_avatar" target="_blank" title="设置头像"><b class="iciba_common_top_user_func_1"></b>设置头像</a>';

			html_tmp+= '		        <a onclick="iciba_common_top_clickCountIndex(6)" href="http://my.iciba.com/?c=user&m=edit_password" target="_blank" title="修改密码"><b class="iciba_common_top_user_func_2"></b>修改密码</a>';

			if(obj_c){

				var returnurl = obj_c.innerHTML;

				html_tmp+= '		        <a href="http://my.iciba.com/?c=logout&returnurl='+ encodeURIComponent(returnurl)+'"  title="退出"><b class="iciba_common_top_user_func_3"></b>退出</a>';



			}else{

				html_tmp+= '		        <a onclick="iciba_common_top_clickCountIndex(7)" href="http://my.iciba.com/?c=logout&returnurl='+ encodeURIComponent(c)+'"  title="退出"><b class="iciba_common_top_user_func_3"></b>退出</a>';



			}

			html_tmp+= '		    </div>';

			html_tmp+= '	</div>';

			html_tmp+= '</div>'+html_obj;

			obj.innerHTML= html_tmp;



			//			alert(obj.innerHTML)

		} else {

			var html_obj = obj.innerHTML;

			obj.innerHTML='<a onclick="iciba_common_top_clickCountIndex(8)" class="iciba_common_top_func_a" href="http://my.iciba.com/?c=login&returnurl=' + encodeURIComponent(c)+'" >登录</a>';

			obj.innerHTML+= '		<a onclick="iciba_common_top_clickCountIndex(9)" class="iciba_common_top_func_a" href="http://my.iciba.com/?c=register&returnurl=' + encodeURIComponent(c)+'">注册</a>'+html_obj;

		}

		document.getElementById("iciba_common_top_func_map").onmouseover=function(){

			document.getElementById("iciba_common_top_func_list").style.display="block";

			document.getElementById("iciba_common_top_func_web").className="iciba_common_top_func_a iciba_common_top_func_web iciba_common_top_func_hover"

		}

		document.getElementById("iciba_common_top_func_map").onmouseout=function(){

			document.getElementById("iciba_common_top_func_list").style.display="none";

			document.getElementById("iciba_common_top_func_web").className="iciba_common_top_func_a iciba_common_top_func_web"

		};

	},

	checkLogin: function() {

		if (this.user.id == 0) {

			return false

		}

		return true

	},

	init: function() {

     //		alert(1);

		//this.initUserCookie();

		//iciba_common_top_box();



	}

};

function iciba_common_top_box(){

	if (document.body.clientWidth<1024){

		document.getElementById("iciba_common_top_box").className="iciba_common_top_box";

		document.getElementById("iciba_common_top").style.width="";

		if(document.body.clientWidth<960){

			document.getElementById("iciba_common_top").style.width=960+"px";

		}

	}else{

		document.getElementById("iciba_common_top_box").className="";

		document.getElementById("iciba_common_top").style.width="";

	}

}

var iciba_common_top_i2 = new Image(0,0);

iciba_common_top_counter = 'http://goto.www.iciba.com/3b87652ba0916c03c634d5db8558d494.php';

function iciba_common_top_rand(num) {

	return Math.floor(Math.random()*num)+1;

}



function iciba_common_top_clickCountIndex(liid) {

	iciba_common_top_i2.src=iciba_common_top_counter+"?"+"sid=23&pid=2870&spid=0&loid=0&aid=8689&liid="+liid+"&rnum="+iciba_common_top_rand(1);

	return true;

}



if (document.all){

	window.attachEvent("onresize",iciba_common_top_box);

}

else{

	window.addEventListener("resize",iciba_common_top_box);

}



ICIBA_TOP.init();
