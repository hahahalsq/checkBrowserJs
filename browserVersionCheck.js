(function() {
    var packageName = 'browserVersion';
    if (!window[packageName])
    {
        window[packageName] = {};
    }

        //360浏览器（极速内核）
        function check360() {
            var result = false; 
            for (var key in navigator.plugins) {
                // np-mswmp.dll只在360浏览器下存在
                if (navigator.plugins[key].filename == 'internal-nacl-plugin') {
                    return !result;
                }
            }
            return result;
        }

        //遨游浏览器
        function checkMaxthon() {
            // 默认不是遨游浏览器
            var result = false;
            var navtype=navigator.appVersion; 
            if(navtype.indexOf("Maxthon") >= 0){ 
                result = true
            } 
            else{ 
                result = false 
            }
            return result;
        }

        //获取当前的浏览器
        function getBrowser() {
            // 获取浏览器 userAgent
            var ua = navigator.userAgent;
            // 是否为 Opera
            var isOpera = ua.indexOf('opr') > -1
            // 返回结果
            if (isOpera) { return 'Opera' }

            // 是否为 IE
            var isIE = (ua.indexOf('compatible') > -1) && (ua.indexOf('MSIE') > -1) && !isOpera
            var isIE11 = (ua.indexOf('Trident') > -1) && (ua.indexOf("rv:11.0") > -1)
            // 返回结果
            if (isIE11) { return 'IE11'
            } else if (isIE) {
                // 检测是否匹配
                var re = new RegExp('MSIE (\\d+\\.\\d+);')
                re.test(ua)
                // 获取版本
                var ver = parseFloat(RegExp["$1"])
                // 返回结果
                if (ver == 7) { return 'IE7'
                } else if (ver == 8) { return 'IE8'
                } else if (ver == 9) { return 'IE9'
                } else if (ver == 10) { return 'IE10'
                } else { return "IE" }
            }
            
            //console.log(ua);
            // 是否为 Edge
            var isEdge = ua.indexOf("Edg") > -1
            // 返回结果
            if (isEdge) { return 'Edge' }

            // 是否为 Firefox
            var isFirefox = ua.indexOf("Firefox") > -1
            // 返回结果
            if (isFirefox) { return 'Firefox' }

            // 是否为 Safari
            var isSafari = (ua.indexOf("Safari") > -1) && (ua.indexOf("Chrome") == -1)
            // 返回结果
            if (isSafari) { return "Safari" }

            // 是否为 Chrome
            var isChrome = (ua.indexOf("Chrome") > -1) && (ua.indexOf("Safari") > -1) && (ua.indexOf("Edge") == -1) && (ua.indexOf("QQBrowser") == -1) && (ua.indexOf("2345Explorer") == -1) && (check360() == false) && (checkMaxthon() == false)
            // 返回结果
            if (isChrome) { return 'Chrome' }
            
            // 是否为 QQ
            var isQQ = ua.indexOf("QQBrowser") > -1
            // 返回结果
            if (isQQ) { return 'QQ浏览器' }

            // 是否为傲游浏览器
            var isMaxthon = checkMaxthon()
            // 返回结果
            if (isMaxthon) { return '傲游浏览器' }
            
            // 是否为搜狗浏览器
            var isMaxthon = ua.indexOf("se 2.x") > -1
            // 返回结果
            if (isMaxthon) { return '搜狗浏览器' }
            
          // 是否为2345浏览器
            var is2345Explorer = ua.includes("2345Explorer");
            // 返回结果
            if(is2345Explorer){
                return '2345浏览器';
            }
            
            var is360 = check360() && (ua.indexOf("Safari") > -1)
            if(is360){return '360浏览器'}

            // 都不是
            return ''
        }

        var client = function(){
            // 获取浏览器 userAgent
            var ua = navigator.userAgent;
            // 是否为 Opera
            var isOpera = ua.indexOf('opr') > -1
            // 返回结果
            if (isOpera) { return 'Opera' }

            // 是否为 IE
            var isIE = (ua.indexOf('compatible') > -1) && (ua.indexOf('MSIE') > -1) && !isOpera
            var isIE11 = (ua.indexOf('Trident') > -1) && (ua.indexOf("rv:11.0") > -1)
            // 返回结果
            if (isIE11) { return 'IE11'
            } else if (isIE) {
                // 检测是否匹配
                var re = new RegExp('MSIE (\\d+\\.\\d+);')
                re.test(ua)
                // 获取版本
                var ver = parseFloat(RegExp["$1"])
                // 返回结果
                if (ver == 7) { return 'IE7'
                } else if (ver == 8) { return 'IE8'
                } else if (ver == 9) { return 'IE9'
                } else if (ver == 10) { return 'IE10'
                } else { return "IE" }
            }
            
            //console.log(ua);
            // 是否为 Edge
            var isEdge = ua.indexOf("Edg") > -1
            // 返回结果
            if (isEdge) { return 'Edge' }

            // 是否为 Firefox
            var isFirefox = ua.indexOf("Firefox") > -1
            // 返回结果
            if (isFirefox) { return 'Firefox' }

            // 是否为 Safari
            var isSafari = (ua.indexOf("Safari") > -1) && (ua.indexOf("Chrome") == -1)
            // 返回结果
            if (isSafari) { return "Safari" }

            // 是否为 Chrome
            var isChrome = (ua.indexOf("Chrome") > -1) && (ua.indexOf("Safari") > -1) && (ua.indexOf("Edge") == -1) && (ua.indexOf("QQBrowser") == -1) && (ua.indexOf("2345Explorer") == -1) && (check360() == false) && (checkMaxthon() == false)
            // 返回结果
            if (isChrome) { return 'Chrome' }
            
            // 是否为 QQ
            var isQQ = ua.indexOf("QQBrowser") > -1
            // 返回结果
            if (isQQ) { return 'QQ浏览器' }

            // 是否为傲游浏览器
            var isMaxthon = checkMaxthon()
            // 返回结果
            if (isMaxthon) { return '傲游浏览器' }
            
            // 是否为搜狗浏览器
            var isMaxthon = ua.indexOf("se 2.x") > -1
            // 返回结果
            if (isMaxthon) { return '搜狗浏览器' }
            
          // 是否为2345浏览器
            var is2345Explorer = ua.includes("2345Explorer");
            // 返回结果
            if(is2345Explorer){
                return '2345浏览器';
            }
            
            var is360 = check360() && (ua.indexOf("Safari") > -1)
            if(is360){return '360浏览器'}

            // 都不是
            return ''
        }();

        window[packageName]['browserClient'] = client;
})();