(function (k) {
    var n = document, b = k.location, h = k.performance;
    var a = {
        getInfo: function () {
            var d = {};
            if (window.innerWidth) {
                d.ww = window.innerWidth
            } else {
                if ((document.body) && (document.body.clientWidth)) {
                    d.ww = document.body.clientWidth
                }
            }
            if (window.innerHeight) {
                d.wh = window.innerHeight
            } else {
                if ((document.body) && (document.body.clientHeight)) {
                    d.wh = document.body.clientHeight
                }
            }
            if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
                d.wh = document.documentElement.clientHeight;
                d.ww = document.documentElement.clientWidth
            }
            if (window && window.screen) {
                d.sh = window.screen.height || 0;
                d.sw = window.screen.width || 0;
                d.cd = window.screen.colorDepth || 0
            }
            if (navigator) {
                d.ua = navigator.userAgent || "";
                d.lang = navigator.language || ""
            }
            return d
        }, unique: function () {
            var e = (new Date()).getTime() + "-", d = 0;
            return e + (d++)
        }, imgLog: function (e) {
            var d = new Image();
            var o = "_img_" + Math.random();
            window[o] = d;
            d.onload = d.onerror = function () {
                window[o] = null
            };
            d.src = e
        }, sendInfo: function (o) {
            var q = this.getInfo() || {};
            q.rd = this.unique();
            var e = "";
            for (var p in q) {
                if (e != "") {
                    e += "&"
                }
                e += p + "=" + encodeURIComponent(q[p])
            }
            e += "&hc=" + this.detectHeadlessChrome();
            e += "&pj=" + this.detectPhantomjs();
            var o = o || {};
            e += "&namespace=" + o.namespace;
            var d = "//callback.58.com/fwdata/receive.gif?" + e;
            this.imgLog(d)
        }, sendfeInfo: function (o) {
            var e = "";
            o.forEach(function (r, q, p) {
                if (e != "") {
                    e += "&"
                }
                e += q + "=" + encodeURIComponent(r)
            });
            var d = "//callback.58.com/fwdata/fe.gif?" + e;
            this.imgLog(d)
        }, addMap: function (o, e, d) {
            var p = o.get(e);
            if (p) {
                o.set(e, p + d + "")
            } else {
                o.set(e, d + "")
            }
        }, oct2Hex: function (d) {
            var e = parseInt(d).toString(16);
            if (e.length < 2) {
                e = "0" + e
            }
            return e
        }, bin2Hex: function (d) {
            var e = parseInt(d, 2).toString(16);
            if (e.length < 2) {
                e = "0" + e
            }
            return e
        }, detectHeadlessChrome: function () {
            if (/Chrome/.test(window.navigator.userAgent) && (/HeadlessChrome/.test(window.navigator.userAgent) || navigator.language == "" || window.outerWidth == "0" || window.outerHeight == "0")) {
                return "1"
            }
            return "0"
        }, detectPhantomjs: function () {
            var d = this;
            if (window.callPhantom || window._phantom || /PhantomJS/.test(window.navigator.userAgent)) {
                return "1"
            } else {
                return "0"
            }
            if (!d.isIE()) {
                if (!(navigator.plugins instanceof PluginArray) || navigator.plugins.length == 0) {
                    return "1"
                } else {
                    return "0"
                }
            }
        }, isIE: function () {
            if (navigator.appName === "Microsoft Internet Explorer") {
                return true
            } else {
                if (navigator.appName === "Netscape" && /Trident/.test(navigator.userAgent)) {
                    return true
                }
            }
            return false
        }
    };

    function c() {
        this.elements = new Array();
        this.size = function () {
            return this.elements.length
        }, this.isEmpty = function () {
            return (this.elements.length < 1)
        }, this.clear = function () {
            this.elements = new Array()
        }, this.put = function (o, e) {
            if (this.containsKey(o) == true) {
                if (this.containsValue(e)) {
                    if (this.remove(o) == true) {
                        this.elements.push({key: o, value: e})
                    }
                } else {
                    this.elements.push({key: o, value: e})
                }
            } else {
                this.elements.push({key: o, value: e})
            }
        }, this.set = function (o, e) {
            if (this.containsKey(o) == true) {
                if (this.remove(o) == true) {
                    this.elements.push({key: o, value: e})
                }
            } else {
                this.elements.push({key: o, value: e})
            }
        }, this.remove = function (o) {
            var q = false;
            try {
                for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].key == o) {
                        this.elements.splice(i, 1);
                        return true
                    }
                }
            } catch (p) {
                q = false
            }
            return q
        }, this.get = function (o) {
            try {
                for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].key == o) {
                        return this.elements[i].value
                    }
                }
            } catch (p) {
                return null
            }
        }, this.setValue = function (p, o) {
            var r = false;
            try {
                for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].key == p) {
                        this.elements[i].value = o;
                        return true
                    }
                }
            } catch (q) {
                r = false
            }
            return r
        }, this.element = function (e) {
            if (e < 0 || e >= this.elements.length) {
                return null
            }
            return this.elements[e]
        }, this.containsKey = function (o) {
            var q = false;
            try {
                for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].key == o) {
                        q = true
                    }
                }
            } catch (p) {
                q = false
            }
            return q
        }, this.has = function (o) {
            var q = false;
            try {
                for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].key == o) {
                        q = true
                    }
                }
            } catch (p) {
                q = false
            }
            return q
        }, this.containsValue = function (o) {
            var q = false;
            try {
                for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].value == o) {
                        q = true
                    }
                }
            } catch (p) {
                q = false
            }
            return q
        }, this.keys = function () {
            var e = new Array();
            for (i = 0; i < this.elements.length; i++) {
                e.push(this.elements[i].key)
            }
            return e
        }, this.values = function () {
            var e = new Array();
            for (i = 0; i < this.elements.length; i++) {
                e.push(this.elements[i].value)
            }
            return e
        };
        this.forEach = function d(r, o) {
            o = o || window;
            var q = new Array();
            for (var e = 0; e < this.elements.length; e++) {
                if (typeof r === "function") {
                    var p = r.call(o, this.elements[e].value, this.elements[e].key, this.elements);
                    q.push(this.elements[e].value)
                }
            }
            return q
        }
    }

    var f = window.xxfwConfig;
    a.sendInfo(f);
    var l = document.createElement("script");
    l.type = "text/javascript";
    l.src = "//j1.58cdn.com.cn/resource/xxzl/xxfw/engine.min.js";
    document.getElementsByTagName("head")[0].appendChild(l);
    l.onload = function () {
        new Test(function (o) {
            var p = new c();
            var e = o.results.split(",");
            for (var j = 0, len = e.length; j < len; j++) {
                var d = e[j].split("=");
                var q = d[0].split(".");
                a.addMap(p, q[0], d[1] != 0 ? "1" : "0")
            }
            a.sendfeInfo(p)
        }, function (d) {
            console.log(d)
        })
    };
    try {
        window["xzfzcallback"] = function (d) {
            if (d && d.status && d.status == "success") {
                document.cookie = "xzfzqtoken=" + encodeURIComponent(d.token) + ";path=/"
            }
        };
        var m = function () {
            var e = "https://";
            var d = document.createElement("script");
            d.src = e + "j1.58cdn.com.cn/resource/xxzl/tracker/xzdfp.js?from=weba_fzq&clientType=1&callback=xzfzcallback";
            document.body.appendChild(d)
        };
        if (window.addEventListener) {
            window.addEventListener("load", m, false)
        } else {
            if (window.attachEvent) {
                window.attachEvent("onload", m)
            } else {
                window.onload = m
            }
        }
    } catch (g) {
    }
})(window);