/**
*
* Detective v0.1 – Simple browser and os detection for javascript.
* github.com/jleonard/detective
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*
* Author      John Leonard
* github      jleonard
*
*/

  window.Detective = {
    browser :{
      name : null,
      version : null,
      engine : null
    },
    os : {
      name : null,
      version : null
    },
    device : {
      name : null
    }
  };

window.onload = function(){

  var regex = navigator.userAgent.match(/Safari/);
  if(regex){
    Detective.browser.engine = "webkit";
    Detective.browser.name = "safari";
    var version = navigator.userAgent.match(/Version\/\d{1,3}/);
    if(version){
      version = version[0].split("/");
      Detective.browser.version = version[1];
    }
    Detective.isWebkit = true;
    Detective.isSafari = true;
  }

  var regex = navigator.userAgent.match(/Opera/);
  if(regex){
    Detective.browser.engine = "presto";
    Detective.browser.name = "opera";
    var version = navigator.userAgent.match(/Version\/\d{1,3}/);
    if(version){
      version = version[0].split("/");
      Detective.browser.version = version[1];
    }
    Detective.isOpera = true;
    Detective.isPresto = true;
  }

  var regex = navigator.userAgent.match(/Chrome\/\d{1,3}/);
  if(regex){
    var version = regex[0].split("/");
    Detective.browser.engine = "webkit";
    Detective.browser.name = "chrome";
    Detective.browser.version = version[1];
    Detective.isWebkit = true;
    Detective.isChrome = true;
  }

  var regex = navigator.userAgent.match(/Firefox\/\d{1,3}.\d{1,3}/);
  if(regex){
    var version = regex[0].split("/");
    Detective.browser.engine = "gecko";
    Detective.browser.name = "firefox";
    Detective.browser.version = version[1];
    Detective.isGecko = true;
    Detective.isFirefox = true;
  }

  var regex = navigator.userAgent.match(/MSIE \d{1,3}/);
  if(regex){
    var version = regex[0].split(" ");
    Detective.browser.engine = "trident";
    Detective.browser.name = "ie";
    Detective.browser.version = version[1];
    Detective.isTrident = true;
    Detective.isIE = true;
  }

  var regex = navigator.userAgent.match(/Windows NT \d{1,3}.\d{1,3}/);
  if(regex){
    Detective.os.name = "windows";
    switch(regex[0]){
      case "Windows NT 6.2":
        Detective.os.version = "8";
      break;
      case "Windows NT 6.1":
        Detective.os.version = "7";
      break;
      case "Windows NT 6.0":
        Detective.os.version = "vista";
      break;
      case "Windows NT 5.1":
        Detective.os.version = "xp";
      break;
    }
  }


  var regex = navigator.userAgent.match(/like Mac OS X/);
  if(regex){
    Detective.os.name = "ios";
    var ipad = navigator.userAgent.match(/iPad/);
    if(ipad){
      Detective.device.name = "ipad";
      Detective.isIpad = true;
    }
    var iphone = navigator.userAgent.match(/iPhone/);
    if(iphone){
      Detective.device.name = "iphone";
      Detective.isIphone = true;
    }
    var ipod = navigator.userAgent.match(/iPod/);
    if(ipod){
      Detective.device.name = "ipod";
      Detective.isIpod = true;
    }
    Detective.isIOS = true;
  }

  var regex = navigator.userAgent.match(/Intel Mac OS X/);
  if(regex){
    Detective.os.name = "osx";
    Detective.isOSX = true;
  }


  var regex = navigator.userAgent.match(/Android \d{1,3}.\d{1,3}/);
  if(regex){
    var version = regex[0].split(" ");
    Detective.os.name = "android";
    Detective.os.version = version[1];
    Detective.isAndroid = true;
  }
  
  var _classes = " ";
  if(Detective.os.name){
    _classes += Detective.os.name;
    if(Detective.os.version){
      _classes += " " + Detective.os.name + "-" + Detective.os.version.replace(".","-");
    }
  }

  if(Detective.device.name){
    _classes += " " + Detective.device.name;
  }

  if(Detective.browser.engine){
    _classes += " " + Detective.browser.engine;
  }

  if(Detective.browser.name){
    _classes += " " + Detective.browser.name;
    if(Detective.browser.version){
      _classes += " " + Detective.browser.name + "-" + Detective.browser.version.replace(".","-");
    }
  }

  var el = document.getElementsByTagName("html");
  el[0].className = el[0].className + _classes;
}