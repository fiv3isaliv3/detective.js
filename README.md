#Detective.js#

Basic browser and os detection based on userAgent strings.

By:

John Leonard - thejohnleonard [at] gmail

##CSS Classes appended to the html tag##

html example for Chrome in OSX
```html
<html class="osx webkit chrome chrome-23">
```
OS Classes :

* OSX : osx
* iOS : ios
* Android : android android-(version#)
* Windows : windows [ windows-8 | windows-7 | windows-vista | windows-xp ]

Browser Classes :

* Chrome : chrome chrome-(version#)
* Safari : safari safari-(version#)
* IE : ie ie-(version#)
* Firefox : firefox firefox-(version#)
* Opera : opera opera-(version#)

Browser Engine Classes :

* Webkit (Safari/Chrome) : webkit
* Trident (IE) : trident
* Gecko (Firefox) : gecko
* Presto (Opera) : presto

Device Classes :

* iPad : ipad
* iPhone : iphone
* iPod : ipod

##The Detective .js object##

```js
// Chrome OSX Example
{
  "browser":{
    "name":"chrome",
    "version":"23",
    "engine":"webkit"
  },
  "os":{
    "name":"osx",
    "version":null
  },
  "device":{
    "name":null
  },
  "isWebkit":true,
  "isChrome":true,
  "isOSX":true
}
``` 

##License##

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

