

var Http = {
	getUrlSearch: function(){	// 获取URL地址数据
		var arr = decodeURI(location.search).slice(1).split("&");
		var obj = {};
		for(var i=0;i<arr.length;i++){
			var a=arr[i].split("=");
			obj[a[0]]=a[1];
		}
		return obj;
	},
	getUrlParam: function(name) {	// 获取url的参数数据	 name:参数名称
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
		var r = window.location.search.substr(1).match(reg);
		if (r != null){return unescape(r[2]);}
		return null;
	},
	rootPath: function() {			// 自动获取当前服务器IP,端口,主目录入口
		var pathName = window.location.pathname.substring(1);
		var webName = pathName == '' ? '' : pathName.substring(0, pathName
			.indexOf('/'));
		return window.location.protocol + '//' + window.location.host + '/'
		+ webName;
	}
};

var docCookies = {	// Document.cookie 读,写,删除工具方法
	getItem: function (sKey) {
		return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
	},
	setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
		if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
		var sExpires = "";
		if (vEnd) {
			switch (vEnd.constructor) {
				case Number:
				sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
				break;
				case String:
				sExpires = "; expires=" + vEnd;
				break;
				case Date:
				sExpires = "; expires=" + vEnd.toUTCString();
				break;
			}
		}
		document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
		return true;
	},
	removeItem: function (sKey, sPath, sDomain) {
		if (!sKey || !this.hasItem(sKey)) { return false; }
		document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
		return true;
	},
	hasItem: function (sKey) {
		return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
	},
	keys: function () {
		var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
		for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
			return aKeys;
	}
};

// 数组去重
Array.prototype.removeWeight = function(key){
	var newArr = [];
	if(key){
		var json={};
		for(var i=0; i<this.length; i++){
			var k=this[i][key];
			if(!json[k]){
				newArr.push(this[i]);
				json[k] = 1;
			}
		}
		return newArr;
	}else{
		for(var i=0; i<this.length; i++){
			if(newArr.indexOf(this[i])==-1){
				newArr.push(this[i]);
			}
		}
		return newArr;
	}
}
