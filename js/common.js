 /*
 	Price Slider
 */
 ! function(t) {
     "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
 }(function(t) {
     function e(e, s) {
         var n, o, a, r = e.nodeName.toLowerCase();
         return "area" === r ? (n = e.parentNode, o = n.name, e.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']")[0], !!a && i(a)) : !1) : (/input|select|textarea|button|object/.test(r) ? !e.disabled : "a" === r ? e.href || s : s) && i(e)
     }

     function i(e) {
         return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
             return "hidden" === t.css(this, "visibility")
         }).length
     }

     function s(t) {
         for (var e, i; t.length && t[0] !== document;) {
             if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
             t = t.parent()
         }
         return 0
     }

     function n() {
         this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._Nepallog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
             closeText: "Done",
             prevText: "Prev",
             nextText: "Next",
             currentText: "Today",
             monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
             monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
             dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
             dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
             dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
             weekHeader: "Wk",
             dateFormat: "mm/dd/yy",
             firstDay: 0,
             isRTL: !1,
             showMonthAfterYear: !1,
             yearSuffix: ""
         }, this._defaults = {
             showOn: "focus",
             showAnim: "fadeIn",
             showOptions: {},
             defaultDate: null,
             appendText: "",
             buttonText: "...",
             buttonImage: "",
             buttonImageOnly: !1,
             hideIfNoPrevNext: !1,
             navigationAsDateFormat: !1,
             gotoCurrent: !1,
             changeMonth: !1,
             changeYear: !1,
             yearRange: "c-10:c+10",
             showOtherMonths: !1,
             selectOtherMonths: !1,
             showWeek: !1,
             calculateWeek: this.iso8601Week,
             shortYearCutoff: "+10",
             minDate: null,
             maxDate: null,
             duration: "fast",
             beforeShowDay: null,
             beforeShow: null,
             onSelect: null,
             onChangeMonthYear: null,
             onClose: null,
             numberOfMonths: 1,
             showCurrentAtPos: 0,
             stepMonths: 1,
             stepBigMonths: 12,
             altField: "",
             altFormat: "",
             constrainInput: !0,
             showButtonPanel: !1,
             autoSize: !1,
             disabled: !1
         }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = o(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
     }

     function o(e) {
         var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
         return e.delegate(i, "mouseout", function() {
             t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
         }).delegate(i, "mouseover", a)
     }

     function a() {
         t.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
     }

     function r(e, i) {
         t.extend(e, i);
         for (var s in i) null == i[s] && (e[s] = i[s]);
         return e
     }

     function h(t) {
         return function() {
             var e = this.element.val();
             t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
         }
     }
     t.ui = t.ui || {}, t.extend(t.ui, {
         version: "1.11.2",
         keyCode: {
             BACKSPACE: 8,
             COMMA: 188,
             DELETE: 46,
             DOWN: 40,
             END: 35,
             ENTER: 13,
             ESCAPE: 27,
             HOME: 36,
             LEFT: 37,
             PAGE_DOWN: 34,
             PAGE_UP: 33,
             PERIOD: 190,
             RIGHT: 39,
             SPACE: 32,
             TAB: 9,
             UP: 38
         }
     }), t.fn.extend({
         scrollParent: function(e) {
             var i = this.css("position"),
                 s = "absolute" === i,
                 n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                 o = this.parents().filter(function() {
                     var e = t(this);
                     return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                 }).eq(0);
             return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
         },
         uniqueId: function() {
             var t = 0;
             return function() {
                 return this.each(function() {
                     this.id || (this.id = "ui-id-" + ++t)
                 })
             }
         }(),
         removeUniqueId: function() {
             return this.each(function() {
                 /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
             })
         }
     }), t.extend(t.expr[":"], {
         data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
             return function(i) {
                 return !!t.data(i, e)
             }
         }) : function(e, i, s) {
             return !!t.data(e, s[3])
         },
         focusable: function(i) {
             return e(i, !isNaN(t.attr(i, "tabindex")))
         },
         tabbable: function(i) {
             var s = t.attr(i, "tabindex"),
                 n = isNaN(s);
             return (n || s >= 0) && e(i, !n)
         }
     }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(e, i) {
         function s(e, i, s, o) {
             return t.each(n, function() {
                 i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
             }), i
         }
         var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
             o = i.toLowerCase(),
             a = {
                 innerWidth: t.fn.innerWidth,
                 innerHeight: t.fn.innerHeight,
                 outerWidth: t.fn.outerWidth,
                 outerHeight: t.fn.outerHeight
             };
         t.fn["inner" + i] = function(e) {
             return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
                 t(this).css(o, s(this, e) + "px")
             })
         }, t.fn["outer" + i] = function(e, n) {
             return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                 t(this).css(o, s(this, e, !0, n) + "px")
             })
         }
     }), t.fn.addBack || (t.fn.addBack = function(t) {
         return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
     }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
         return function(i) {
             return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
         }
     }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
         focus: function(e) {
             return function(i, s) {
                 return "number" == typeof i ? this.each(function() {
                     var e = this;
                     setTimeout(function() {
                         t(e).focus(), s && s.call(e)
                     }, i)
                 }) : e.apply(this, arguments)
             }
         }(t.fn.focus),
         disableSelection: function() {
             var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
             return function() {
                 return this.bind(t + ".ui-disableSelection", function(t) {
                     t.preventDefault()
                 })
             }
         }(),
         enableSelection: function() {
             return this.unbind(".ui-disableSelection")
         },
         zIndex: function(e) {
             if (void 0 !== e) return this.css("zIndex", e);
             if (this.length)
                 for (var i, s, n = t(this[0]); n.length && n[0] !== document;) {
                     if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                     n = n.parent()
                 }
             return 0
         }
     }), t.ui.plugin = {
         add: function(e, i, s) {
             var n, o = t.ui[e].prototype;
             for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
         },
         call: function(t, e, i, s) {
             var n, o = t.plugins[e];
             if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                 for (n = 0; n < o.length; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
         }
     };
     var l = 0,
         u = Array.prototype.slice;
     t.cleanData = function(e) {
         return function(i) {
             var s, n, o;
             for (o = 0; null != (n = i[o]); o++) try {
                 s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove")
             } catch (a) {}
             e(i)
         }
     }(t.cleanData), t.widget = function(e, i, s) {
         var n, o, a, r, h = {},
             l = e.split(".")[0];
         return e = e.split(".")[1], n = l + "-" + e, s || (s = i, i = t.Widget), t.expr[":"][n.toLowerCase()] = function(e) {
             return !!t.data(e, n)
         }, t[l] = t[l] || {}, o = t[l][e], a = t[l][e] = function(t, e) {
             return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new a(t, e)
         }, t.extend(a, o, {
             version: s.version,
             _proto: t.extend({}, s),
             _childConstructors: []
         }), r = new i, r.options = t.widget.extend({}, r.options), t.each(s, function(e, s) {
             return t.isFunction(s) ? void(h[e] = function() {
                 var t = function() {
                         return i.prototype[e].apply(this, arguments)
                     },
                     n = function(t) {
                         return i.prototype[e].apply(this, t)
                     };
                 return function() {
                     var e, i = this._super,
                         o = this._superApply;
                     return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
                 }
             }()) : void(h[e] = s)
         }), a.prototype = t.widget.extend(r, {
             widgetEventPrefix: o ? r.widgetEventPrefix || e : e
         }, h, {
             constructor: a,
             namespace: l,
             widgetName: e,
             widgetFullName: n
         }), o ? (t.each(o._childConstructors, function(e, i) {
             var s = i.prototype;
             t.widget(s.namespace + "." + s.widgetName, a, i._proto)
         }), delete o._childConstructors) : i._childConstructors.push(a), t.widget.bridge(e, a), a
     }, t.widget.extend = function(e) {
         for (var i, s, n = u.call(arguments, 1), o = 0, a = n.length; a > o; o++)
             for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
         return e
     }, t.widget.bridge = function(e, i) {
         var s = i.prototype.widgetFullName || e;
         t.fn[e] = function(n) {
             var o = "string" == typeof n,
                 a = u.call(arguments, 1),
                 r = this;
             return n = !o && a.length ? t.widget.extend.apply(null, [n].concat(a)) : n, this.each(o ? function() {
                 var i, o = t.data(this, s);
                 return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + n + "'")
             } : function() {
                 var e = t.data(this, s);
                 e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this))
             }), r
         }
     }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
         widgetName: "widget",
         widgetEventPrefix: "",
         defaultElement: "<div>",
         options: {
             disabled: !1,
             create: null
         },
         _createWidget: function(e, i) {
             i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                 remove: function(t) {
                     t.target === i && this.destroy()
                 }
             }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
         },
         _getCreateOptions: t.noop,
         _getCreateEventData: t.noop,
         _create: t.noop,
         _init: t.noop,
         destroy: function() {
             this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
         },
         _destroy: t.noop,
         widget: function() {
             return this.element
         },
         option: function(e, i) {
             var s, n, o, a = e;
             if (0 === arguments.length) return t.widget.extend({}, this.options);
             if ("string" == typeof e)
                 if (a = {}, s = e.split("."), e = s.shift(), s.length) {
                     for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; o < s.length - 1; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                     if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                     n[e] = i
                 } else {
                     if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                     a[e] = i
                 }
             return this._setOptions(a), this
         },
         _setOptions: function(t) {
             var e;
             for (e in t) this._setOption(e, t[e]);
             return this
         },
         _setOption: function(t, e) {
             return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
         },
         enable: function() {
             return this._setOptions({
                 disabled: !1
             })
         },
         disable: function() {
             return this._setOptions({
                 disabled: !0
             })
         },
         _on: function(e, i, s) {
             var n, o = this;
             "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, a) {
                 function r() {
                     return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                 }
                 "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                 var h = s.match(/^([\w:-]*)\s*(.*)$/),
                     l = h[1] + o.eventNamespace,
                     u = h[2];
                 u ? n.delegate(u, l, r) : i.bind(l, r)
             })
         },
         _off: function(e, i) {
             i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
         },
         _delay: function(t, e) {
             function i() {
                 return ("string" == typeof t ? s[t] : t).apply(s, arguments)
             }
             var s = this;
             return setTimeout(i, e || 0)
         },
         _hoverable: function(e) {
             this.hoverable = this.hoverable.add(e), this._on(e, {
                 mouseenter: function(e) {
                     t(e.currentTarget).addClass("ui-state-hover")
                 },
                 mouseleave: function(e) {
                     t(e.currentTarget).removeClass("ui-state-hover")
                 }
             })
         },
         _focusable: function(e) {
             this.focusable = this.focusable.add(e), this._on(e, {
                 focusin: function(e) {
                     t(e.currentTarget).addClass("ui-state-focus")
                 },
                 focusout: function(e) {
                     t(e.currentTarget).removeClass("ui-state-focus")
                 }
             })
         },
         _trigger: function(e, i, s) {
             var n, o, a = this.options[e];
             if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                 for (n in o) n in i || (i[n] = o[n]);
             return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
         }
     }, t.each({
         show: "fadeIn",
         hide: "fadeOut"
     }, function(e, i) {
         t.Widget.prototype["_" + e] = function(s, n, o) {
             "string" == typeof n && (n = {
                 effect: n
             });
             var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
             n = n || {}, "number" == typeof n && (n = {
                 duration: n
             }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                 t(this)[e](), o && o.call(s[0]), i()
             })
         }
     });
     var c = (t.widget, !1);
     t(document).mouseup(function() {
         c = !1
     });
     t.widget("ui.mouse", {
         version: "1.11.2",
         options: {
             cancel: "input,textarea,button,select,option",
             distance: 1,
             delay: 0
         },
         _mouseInit: function() {
             var e = this;
             this.element.bind("mousedown." + this.widgetName, function(t) {
                 return e._mouseDown(t)
             }).bind("click." + this.widgetName, function(i) {
                 return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
             }), this.started = !1
         },
         _mouseDestroy: function() {
             this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
         },
         _mouseDown: function(e) {
             if (!c) {
                 this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                 var i = this,
                     s = 1 === e.which,
                     n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                 return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                     i.mouseDelayMet = !0
                 }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                     return i._mouseMove(t)
                 }, this._mouseUpDelegate = function(t) {
                     return i._mouseUp(t)
                 }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), c = !0, !0)) : !0
             }
         },
         _mouseMove: function(e) {
             if (this._mouseMoved) {
                 if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                 if (!e.which) return this._mouseUp(e)
             }
             return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
         },
         _mouseUp: function(e) {
             return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), c = !1, !1
         },
         _mouseDistanceMet: function(t) {
             return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
         },
         _mouseDelayMet: function() {
             return this.mouseDelayMet
         },
         _mouseStart: function() {},
         _mouseDrag: function() {},
         _mouseStop: function() {},
         _mouseCapture: function() {
             return !0
         }
     });
     ! function() {
         function e(t, e, i) {
             return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
         }

         function i(e, i) {
             return parseInt(t.css(e, i), 10) || 0
         }

         function s(e) {
             var i = e[0];
             return 9 === i.nodeType ? {
                 width: e.width(),
                 height: e.height(),
                 offset: {
                     top: 0,
                     left: 0
                 }
             } : t.isWindow(i) ? {
                 width: e.width(),
                 height: e.height(),
                 offset: {
                     top: e.scrollTop(),
                     left: e.scrollLeft()
                 }
             } : i.preventDefault ? {
                 width: 0,
                 height: 0,
                 offset: {
                     top: i.pageY,
                     left: i.pageX
                 }
             } : {
                 width: e.outerWidth(),
                 height: e.outerHeight(),
                 offset: e.offset()
             }
         }
         t.ui = t.ui || {};
         var n, o, a = Math.max,
             r = Math.abs,
             h = Math.round,
             l = /left|center|right/,
             u = /top|center|bottom/,
             c = /[\+\-]\d+(\.[\d]+)?%?/,
             d = /^\w+/,
             p = /%$/,
             f = t.fn.position;
         t.position = {
                 scrollbarWidth: function() {
                     if (void 0 !== n) return n;
                     var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                         o = s.children()[0];
                     return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i
                 },
                 getScrollInfo: function(e) {
                     var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                         s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                         n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                         o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
                     return {
                         width: o ? t.position.scrollbarWidth() : 0,
                         height: n ? t.position.scrollbarWidth() : 0
                     }
                 },
                 getWithinInfo: function(e) {
                     var i = t(e || window),
                         s = t.isWindow(i[0]),
                         n = !!i[0] && 9 === i[0].nodeType;
                     return {
                         element: i,
                         isWindow: s,
                         isDocument: n,
                         offset: i.offset() || {
                             left: 0,
                             top: 0
                         },
                         scrollLeft: i.scrollLeft(),
                         scrollTop: i.scrollTop(),
                         width: s || n ? i.width() : i.outerWidth(),
                         height: s || n ? i.height() : i.outerHeight()
                     }
                 }
             }, t.fn.position = function(n) {
                 if (!n || !n.of) return f.apply(this, arguments);
                 n = t.extend({}, n);
                 var p, m, g, v, _, b, y = t(n.of),
                     w = t.position.getWithinInfo(n.within),
                     x = t.position.getScrollInfo(w),
                     k = (n.collision || "flip").split(" "),
                     C = {};
                 return b = s(y), y[0].preventDefault && (n.at = "left top"), m = b.width, g = b.height, v = b.offset, _ = t.extend({}, v), t.each(["my", "at"], function() {
                     var t, e, i = (n[this] || "").split(" ");
                     1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", t = c.exec(i[0]), e = c.exec(i[1]), C[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
                 }), 1 === k.length && (k[1] = k[0]), "right" === n.at[0] ? _.left += m : "center" === n.at[0] && (_.left += m / 2), "bottom" === n.at[1] ? _.top += g : "center" === n.at[1] && (_.top += g / 2), p = e(C.at, m, g), _.left += p[0], _.top += p[1], this.each(function() {
                     var s, l, u = t(this),
                         c = u.outerWidth(),
                         d = u.outerHeight(),
                         f = i(this, "marginLeft"),
                         b = i(this, "marginTop"),
                         D = c + f + i(this, "marginRight") + x.width,
                         I = d + b + i(this, "marginBottom") + x.height,
                         T = t.extend({}, _),
                         P = e(C.my, u.outerWidth(), u.outerHeight());
                     "right" === n.my[0] ? T.left -= c : "center" === n.my[0] && (T.left -= c / 2), "bottom" === n.my[1] ? T.top -= d : "center" === n.my[1] && (T.top -= d / 2), T.left += P[0], T.top += P[1], o || (T.left = h(T.left), T.top = h(T.top)), s = {
                         marginLeft: f,
                         marginTop: b
                     }, t.each(["left", "top"], function(e, i) {
                         t.ui.position[k[e]] && t.ui.position[k[e]][i](T, {
                             targetWidth: m,
                             targetHeight: g,
                             elemWidth: c,
                             elemHeight: d,
                             collisionPosition: s,
                             collisionWidth: D,
                             collisionHeight: I,
                             offset: [p[0] + P[0], p[1] + P[1]],
                             my: n.my,
                             at: n.at,
                             within: w,
                             elem: u
                         })
                     }), n.using && (l = function(t) {
                         var e = v.left - T.left,
                             i = e + m - c,
                             s = v.top - T.top,
                             o = s + g - d,
                             h = {
                                 target: {
                                     element: y,
                                     left: v.left,
                                     top: v.top,
                                     width: m,
                                     height: g
                                 },
                                 element: {
                                     element: u,
                                     left: T.left,
                                     top: T.top,
                                     width: c,
                                     height: d
                                 },
                                 horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                 vertical: 0 > o ? "top" : s > 0 ? "bottom" : "middle"
                             };
                         c > m && r(e + i) < m && (h.horizontal = "center"), d > g && r(s + o) < g && (h.vertical = "middle"), h.important = a(r(e), r(i)) > a(r(s), r(o)) ? "horizontal" : "vertical", n.using.call(this, t, h)
                     }), u.offset(t.extend(T, {
                         using: l
                     }))
                 })
             }, t.ui.position = {
                 fit: {
                     left: function(t, e) {
                         var i, s = e.within,
                             n = s.isWindow ? s.scrollLeft : s.offset.left,
                             o = s.width,
                             r = t.left - e.collisionPosition.marginLeft,
                             h = n - r,
                             l = r + e.collisionWidth - o - n;
                         e.collisionWidth > o ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - o - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + o - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = a(t.left - r, t.left)
                     },
                     top: function(t, e) {
                         var i, s = e.within,
                             n = s.isWindow ? s.scrollTop : s.offset.top,
                             o = e.within.height,
                             r = t.top - e.collisionPosition.marginTop,
                             h = n - r,
                             l = r + e.collisionHeight - o - n;
                         e.collisionHeight > o ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - o - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + o - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = a(t.top - r, t.top)
                     }
                 },
                 flip: {
                     left: function(t, e) {
                         var i, s, n = e.within,
                             o = n.offset.left + n.scrollLeft,
                             a = n.width,
                             h = n.isWindow ? n.scrollLeft : n.offset.left,
                             l = t.left - e.collisionPosition.marginLeft,
                             u = l - h,
                             c = l + e.collisionWidth - a - h,
                             d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                             p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                             f = -2 * e.offset[0];
                         0 > u ? (i = t.left + d + p + f + e.collisionWidth - a - o, (0 > i || i < r(u)) && (t.left += d + p + f)) : c > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || r(s) < c) && (t.left += d + p + f))
                     },
                     top: function(t, e) {
                         var i, s, n = e.within,
                             o = n.offset.top + n.scrollTop,
                             a = n.height,
                             h = n.isWindow ? n.scrollTop : n.offset.top,
                             l = t.top - e.collisionPosition.marginTop,
                             u = l - h,
                             c = l + e.collisionHeight - a - h,
                             d = "top" === e.my[1],
                             p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                             f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                             m = -2 * e.offset[1];
                         0 > u ? (s = t.top + p + f + m + e.collisionHeight - a - o, t.top + p + f + m > u && (0 > s || s < r(u)) && (t.top += p + f + m)) : c > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - h, t.top + p + f + m > c && (i > 0 || r(i) < c) && (t.top += p + f + m))
                     }
                 },
                 flipfit: {
                     left: function() {
                         t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                     },
                     top: function() {
                         t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                     }
                 }
             },
             function() {
                 var e, i, s, n, a, r = document.getElementsByTagName("body")[0],
                     h = document.createElement("div");
                 e = document.createElement(r ? "div" : "body"), s = {
                     visibility: "hidden",
                     width: 0,
                     height: 0,
                     border: 0,
                     margin: 0,
                     background: "none"
                 }, r && t.extend(s, {
                     position: "absolute",
                     left: "-1000px",
                     top: "-1000px"
                 });
                 for (a in s) e.style[a] = s[a];
                 e.appendChild(h), i = r || document.documentElement, i.insertBefore(e, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", n = t(h).offset().left, o = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
             }()
     }();
     t.ui.position, t.widget("ui.accordion", {
         version: "1.11.2",
         options: {
             active: 0,
             animate: {},
             collapsible: !1,
             event: "click",
             header: "> li > :first-child,> :not(li):even",
             heightStyle: "auto",
             icons: {
                 activeHeader: "ui-icon-triangle-1-s",
                 header: "ui-icon-triangle-1-e"
             },
             activate: null,
             beforeActivate: null
         },
         hideProps: {
             borderTopWidth: "hide",
             borderBottomWidth: "hide",
             paddingTop: "hide",
             paddingBottom: "hide",
             height: "hide"
         },
         showProps: {
             borderTopWidth: "show",
             borderBottomWidth: "show",
             paddingTop: "show",
             paddingBottom: "show",
             height: "show"
         },
         _create: function() {
             var e = this.options;
             this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
         },
         _getCreateEventData: function() {
             return {
                 header: this.active,
                 panel: this.active.length ? this.active.next() : t()
             }
         },
         _createIcons: function() {
             var e = this.options.icons;
             e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
         },
         _destroyIcons: function() {
             this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
         },
         _destroy: function() {
             var t;
             this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
         },
         _setOption: function(t, e) {
             return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void("disabled" === t && (this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e))))
         },
         _keydown: function(e) {
             if (!e.altKey && !e.ctrlKey) {
                 var i = t.ui.keyCode,
                     s = this.headers.length,
                     n = this.headers.index(e.target),
                     o = !1;
                 switch (e.keyCode) {
                     case i.RIGHT:
                     case i.DOWN:
                         o = this.headers[(n + 1) % s];
                         break;
                     case i.LEFT:
                     case i.UP:
                         o = this.headers[(n - 1 + s) % s];
                         break;
                     case i.SPACE:
                     case i.ENTER:
                         this._eventHandler(e);
                         break;
                     case i.HOME:
                         o = this.headers[0];
                         break;
                     case i.END:
                         o = this.headers[s - 1]
                 }
                 o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), e.preventDefault())
             }
         },
         _panelKeyDown: function(e) {
             e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
         },
         refresh: function() {
             var e = this.options;
             this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
         },
         _processPanels: function() {
             var t = this.headers,
                 e = this.panels;
             this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
         },
         _refresh: function() {
             var e, i = this.options,
                 s = i.heightStyle,
                 n = this.element.parent();
             this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
                 var e = t(this),
                     i = e.uniqueId().attr("id"),
                     s = e.next(),
                     n = s.uniqueId().attr("id");
                 e.attr("aria-controls", n), s.attr("aria-labelledby", i)
             }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                 "aria-selected": "false",
                 "aria-expanded": "false",
                 tabIndex: -1
             }).next().attr({
                 "aria-hidden": "true"
             }).hide(), this.active.length ? this.active.attr({
                 "aria-selected": "true",
                 "aria-expanded": "true",
                 tabIndex: 0
             }).next().attr({
                 "aria-hidden": "false"
             }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function() {
                 var i = t(this),
                     s = i.css("position");
                 "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
             }), this.headers.each(function() {
                 e -= t(this).outerHeight(!0)
             }), this.headers.next().each(function() {
                 t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
             }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() {
                 e = Math.max(e, t(this).css("height", "").height())
             }).height(e))
         },
         _activate: function(e) {
             var i = this._findActive(e)[0];
             i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                 target: i,
                 currentTarget: i,
                 preventDefault: t.noop
             }))
         },
         _findActive: function(e) {
             return "number" == typeof e ? this.headers.eq(e) : t()
         },
         _setupEvents: function(e) {
             var i = {
                 keydown: "_keydown"
             };
             e && t.each(e.split(" "), function(t, e) {
                 i[e] = "_eventHandler"
             }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                 keydown: "_panelKeyDown"
             }), this._hoverable(this.headers), this._focusable(this.headers)
         },
         _eventHandler: function(e) {
             var i = this.options,
                 s = this.active,
                 n = t(e.currentTarget),
                 o = n[0] === s[0],
                 a = o && i.collapsible,
                 r = a ? t() : n.next(),
                 h = s.next(),
                 l = {
                     oldHeader: s,
                     oldPanel: h,
                     newHeader: a ? t() : n,
                     newPanel: r
                 };
             e.preventDefault(), o && !i.collapsible || this._trigger("beforeActivate", e, l) === !1 || (i.active = a ? !1 : this.headers.index(n), this.active = o ? t() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), o || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
         },
         _toggle: function(e) {
             var i = e.newPanel,
                 s = this.prevShow.length ? this.prevShow : e.oldPanel;
             this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
                 "aria-hidden": "true"
             }), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr({
                 tabIndex: -1,
                 "aria-expanded": "false"
             }) : i.length && this.headers.filter(function() {
                 return 0 === t(this).attr("tabIndex")
             }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                 "aria-selected": "true",
                 tabIndex: 0,
                 "aria-expanded": "true"
             })
         },
         _animate: function(t, e, i) {
             var s, n, o, a = this,
                 r = 0,
                 h = t.length && (!e.length || t.index() < e.index()),
                 l = this.options.animate || {},
                 u = h && l.down || l,
                 c = function() {
                     a._toggleComplete(i)
                 };
             return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || l.easing, o = o || u.duration || l.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
                 duration: o,
                 easing: n,
                 step: function(t, e) {
                     e.now = Math.round(t)
                 }
             }), void t.hide().animate(this.showProps, {
                 duration: o,
                 easing: n,
                 complete: c,
                 step: function(t, i) {
                     i.now = Math.round(t), "height" !== i.prop ? r += i.now : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0)
                 }
             })) : e.animate(this.hideProps, o, n, c) : t.animate(this.showProps, o, n, c)
         },
         _toggleComplete: function(t) {
             var e = t.oldPanel;
             e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
         }
     }), t.widget("ui.menu", {
         version: "1.11.2",
         defaultElement: "<ul>",
         delay: 300,
         options: {
             icons: {
                 submenu: "ui-icon-carat-1-e"
             },
             items: "> *",
             menus: "ul",
             position: {
                 my: "left-1 top",
                 at: "right top"
             },
             role: "menu",
             blur: null,
             focus: null,
             select: null
         },
         _create: function() {
             this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                 role: this.options.role,
                 tabIndex: 0
             }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                 "mousedown .ui-menu-item": function(t) {
                     t.preventDefault()
                 },
                 "click .ui-menu-item": function(e) {
                     var i = t(e.target);
                     !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                 },
                 "mouseenter .ui-menu-item": function(e) {
                     if (!this.previousFilter) {
                         var i = t(e.currentTarget);
                         i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                     }
                 },
                 mouseleave: "collapseAll",
                 "mouseleave .ui-menu": "collapseAll",
                 focus: function(t, e) {
                     var i = this.active || this.element.find(this.options.items).eq(0);
                     e || this.focus(t, i)
                 },
                 blur: function(e) {
                     this._delay(function() {
                         t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                     })
                 },
                 keydown: "_keydown"
             }), this.refresh(), this._on(this.document, {
                 click: function(t) {
                     this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                 }
             })
         },
         _destroy: function() {
             this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                 var e = t(this);
                 e.data("ui-menu-submenu-carat") && e.remove()
             }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
         },
         _keydown: function(e) {
             var i, s, n, o, a = !0;
             switch (e.keyCode) {
                 case t.ui.keyCode.PAGE_UP:
                     this.previousPage(e);
                     break;
                 case t.ui.keyCode.PAGE_DOWN:
                     this.nextPage(e);
                     break;
                 case t.ui.keyCode.HOME:
                     this._move("first", "first", e);
                     break;
                 case t.ui.keyCode.END:
                     this._move("last", "last", e);
                     break;
                 case t.ui.keyCode.UP:
                     this.previous(e);
                     break;
                 case t.ui.keyCode.DOWN:
                     this.next(e);
                     break;
                 case t.ui.keyCode.LEFT:
                     this.collapse(e);
                     break;
                 case t.ui.keyCode.RIGHT:
                     this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                     break;
                 case t.ui.keyCode.ENTER:
                 case t.ui.keyCode.SPACE:
                     this._activate(e);
                     break;
                 case t.ui.keyCode.ESCAPE:
                     this.collapse(e);
                     break;
                 default:
                     a = !1, s = this.previousFilter || "", n = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function() {
                         delete this.previousFilter
                     }, 1e3)) : delete this.previousFilter
             }
             a && e.preventDefault()
         },
         _activate: function(t) {
             this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(t) : this.select(t))
         },
         refresh: function() {
             var e, i, s = this,
                 n = this.options.icons.submenu,
                 o = this.element.find(this.options.menus);
             this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), o.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                 role: this.options.role,
                 "aria-hidden": "true",
                 "aria-expanded": "false"
             }).each(function() {
                 var e = t(this),
                     i = e.parent(),
                     s = t("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                 i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"))
             }), e = o.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function() {
                 var e = t(this);
                 s._isDivider(e) && e.addClass("ui-widget-content ui-menu-divider")
             }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                 tabIndex: -1,
                 role: this._itemRole()
             }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
         },
         _itemRole: function() {
             return {
                 menu: "menuitem",
                 listbox: "option"
             }[this.options.role]
         },
         _setOption: function(t, e) {
             "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
         },
         focus: function(t, e) {
             var i, s;
             this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                 this._close()
             }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                 item: e
             })
         },
         _scrollIntoView: function(e) {
             var i, s, n, o, a, r;
             this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
         },
         blur: function(t, e) {
             e || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                 item: this.active
             }))
         },
         _startOpening: function(t) {
             clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                 this._close(), this._open(t)
             }, this.delay))
         },
         _open: function(e) {
             var i = t.extend({ of: this.active
             }, this.options.position);
             clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
         },
         collapseAll: function(e, i) {
             clearTimeout(this.timer), this.timer = this._delay(function() {
                 var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                 s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
             }, this.delay)
         },
         _close: function(t) {
             t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
         },
         _closeOnDocumentClick: function(e) {
             return !t(e.target).closest(".ui-menu").length
         },
         _isDivider: function(t) {
             return !/[^\-\u2014\u2013\s]/.test(t.text())
         },
         collapse: function(t) {
             var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
             e && e.length && (this._close(), this.focus(t, e))
         },
         expand: function(t) {
             var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
             e && e.length && (this._open(e.parent()), this._delay(function() {
                 this.focus(t, e)
             }))
         },
         next: function(t) {
             this._move("next", "first", t)
         },
         previous: function(t) {
             this._move("prev", "last", t)
         },
         isFirstItem: function() {
             return this.active && !this.active.prevAll(".ui-menu-item").length
         },
         isLastItem: function() {
             return this.active && !this.active.nextAll(".ui-menu-item").length
         },
         _move: function(t, e, i) {
             var s;
             this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
         },
         nextPage: function(e) {
             var i, s, n;
             return this.active ? void(this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                 return i = t(this), i.offset().top - s - n < 0
             }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
         },
         previousPage: function(e) {
             var i, s, n;
             return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                 return i = t(this), i.offset().top - s + n > 0
             }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
         },
         _hasScroll: function() {
             return this.element.outerHeight() < this.element.prop("scrollHeight")
         },
         select: function(e) {
             this.active = this.active || t(e.target).closest(".ui-menu-item");
             var i = {
                 item: this.active
             };
             this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
         },
         _filterMenuItems: function(e) {
             var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                 s = new RegExp("^" + i, "i");
             return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                 return s.test(t.trim(t(this).text()))
             })
         }
     });
     t.widget("ui.autocomplete", {
         version: "1.11.2",
         defaultElement: "<input>",
         options: {
             appendTo: null,
             autoFocus: !1,
             delay: 300,
             minLength: 1,
             position: {
                 my: "left top",
                 at: "left bottom",
                 collision: "none"
             },
             source: null,
             change: null,
             close: null,
             focus: null,
             open: null,
             response: null,
             search: null,
             select: null
         },
         requestIndex: 0,
         pending: 0,
         _create: function() {
             var e, i, s, n = this.element[0].nodeName.toLowerCase(),
                 o = "textarea" === n,
                 a = "input" === n;
             this.isMultiLine = o ? !0 : a ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                 keydown: function(n) {
                     if (this.element.prop("readOnly")) return e = !0, s = !0, void(i = !0);
                     e = !1, s = !1, i = !1;
                     var o = t.ui.keyCode;
                     switch (n.keyCode) {
                         case o.PAGE_UP:
                             e = !0, this._move("previousPage", n);
                             break;
                         case o.PAGE_DOWN:
                             e = !0, this._move("nextPage", n);
                             break;
                         case o.UP:
                             e = !0, this._keyEvent("previous", n);
                             break;
                         case o.DOWN:
                             e = !0, this._keyEvent("next", n);
                             break;
                         case o.ENTER:
                             this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                             break;
                         case o.TAB:
                             this.menu.active && this.menu.select(n);
                             break;
                         case o.ESCAPE:
                             this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                             break;
                         default:
                             i = !0, this._searchTimeout(n)
                     }
                 },
                 keypress: function(s) {
                     if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault());
                     if (!i) {
                         var n = t.ui.keyCode;
                         switch (s.keyCode) {
                             case n.PAGE_UP:
                                 this._move("previousPage", s);
                                 break;
                             case n.PAGE_DOWN:
                                 this._move("nextPage", s);
                                 break;
                             case n.UP:
                                 this._keyEvent("previous", s);
                                 break;
                             case n.DOWN:
                                 this._keyEvent("next", s)
                         }
                     }
                 },
                 input: function(t) {
                     return s ? (s = !1, void t.preventDefault()) : void this._searchTimeout(t)
                 },
                 focus: function() {
                     this.selectedItem = null, this.previous = this._value()
                 },
                 blur: function(t) {
                     return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                 }
             }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                 role: null
             }).hide().menu("instance"), this._on(this.menu.element, {
                 mousedown: function(e) {
                     e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                         delete this.cancelBlur
                     });
                     var i = this.menu.element[0];
                     t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                         var e = this;
                         this.document.one("mousedown", function(s) {
                             s.target === e.element[0] || s.target === i || t.contains(i, s.target) || e.close()
                         })
                     })
                 },
                 menufocus: function(e, i) {
                     var s, n;
                     return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                         t(e.target).trigger(e.originalEvent)
                     })) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                         item: n
                     }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, void(s && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion))))
                 },
                 menuselect: function(t, e) {
                     var i = e.item.data("ui-autocomplete-item"),
                         s = this.previous;
                     this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
                         this.previous = s, this.selectedItem = i
                     })), !1 !== this._trigger("select", t, {
                         item: i
                     }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                 }
             }), this.liveRegion = t("<span>", {
                 role: "status",
                 "aria-live": "assertive",
                 "aria-relevant": "additions"
             }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                 beforeunload: function() {
                     this.element.removeAttr("autocomplete")
                 }
             })
         },
         _destroy: function() {
             clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
         },
         _setOption: function(t, e) {
             this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
         },
         _appendTo: function() {
             var e = this.options.appendTo;
             return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
         },
         _initSource: function() {
             var e, i, s = this;
             t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
                 s(t.ui.autocomplete.filter(e, i.term))
             }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
                 s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                     url: i,
                     data: e,
                     dataType: "json",
                     success: function(t) {
                         n(t)
                     },
                     error: function() {
                         n([])
                     }
                 })
             }) : this.source = this.options.source
         },
         _searchTimeout: function(t) {
             clearTimeout(this.searching), this.searching = this._delay(function() {
                 var e = this.term === this._value(),
                     i = this.menu.element.is(":visible"),
                     s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                 (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t))
             }, this.options.delay)
         },
         search: function(t, e) {
             return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
         },
         _search: function(t) {
             this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                 term: t
             }, this._response())
         },
         _response: function() {
             var e = ++this.requestIndex;
             return t.proxy(function(t) {
                 e === this.requestIndex && this.__response(t), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
             }, this)
         },
         __response: function(t) {
             t && (t = this._normalize(t)), this._trigger("response", null, {
                 content: t
             }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
         },
         close: function(t) {
             this.cancelSearch = !0, this._close(t)
         },
         _close: function(t) {
             this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
         },
         _change: function(t) {
             this.previous !== this._value() && this._trigger("change", t, {
                 item: this.selectedItem
             })
         },
         _normalize: function(e) {
             return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                 return "string" == typeof e ? {
                     label: e,
                     value: e
                 } : t.extend({}, e, {
                     label: e.label || e.value,
                     value: e.value || e.label
                 })
             })
         },
         _suggest: function(e) {
             var i = this.menu.element.empty();
             this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element
             }, this.options.position)), this.options.autoFocus && this.menu.next()
         },
         _resizeMenu: function() {
             var t = this.menu.element;
             t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
         },
         _renderMenu: function(e, i) {
             var s = this;
             t.each(i, function(t, i) {
                 s._renderItemData(e, i)
             })
         },
         _renderItemData: function(t, e) {
             return this._renderItem(t, e).data("ui-autocomplete-item", e)
         },
         _renderItem: function(e, i) {
             return t("<li>").text(i.label).appendTo(e)
         },
         _move: function(t, e) {
             return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
         },
         widget: function() {
             return this.menu.element
         },
         _value: function() {
             return this.valueMethod.apply(this.element, arguments)
         },
         _keyEvent: function(t, e) {
             (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
         }
     }), t.extend(t.ui.autocomplete, {
         escapeRegex: function(t) {
             return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
         },
         filter: function(e, i) {
             var s = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
             return t.grep(e, function(t) {
                 return s.test(t.label || t.value || t)
             })
         }
     }), t.widget("ui.autocomplete", t.ui.autocomplete, {
         options: {
             messages: {
                 noResults: "No search results.",
                 results: function(t) {
                     return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                 }
             }
         },
         __response: function(e) {
             var i;
             this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
         }
     });
     var d, p = (t.ui.autocomplete, "ui-button ui-widget ui-state-default ui-corner-all"),
         f = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
         m = function() {
             var e = t(this);
             setTimeout(function() {
                 e.find(":ui-button").button("refresh")
             }, 1)
         },
         g = function(e) {
             var i = e.name,
                 s = e.form,
                 n = t([]);
             return i && (i = i.replace(/'/g, "\\'"), n = s ? t(s).find("[name='" + i + "'][type=radio]") : t("[name='" + i + "'][type=radio]", e.ownerDocument).filter(function() {
                 return !this.form
             })), n
         };
     t.widget("ui.button", {
         version: "1.11.2",
         defaultElement: "<button>",
         options: {
             disabled: null,
             text: !0,
             label: null,
             icons: {
                 primary: null,
                 secondary: null
             }
         },
         _create: function() {
             this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, m), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
             var e = this,
                 i = this.options,
                 s = "checkbox" === this.type || "radio" === this.type,
                 n = s ? "" : "ui-state-active";
             null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                 i.disabled || this === d && t(this).addClass("ui-state-active")
             }).bind("mouseleave" + this.eventNamespace, function() {
                 i.disabled || t(this).removeClass(n)
             }).bind("click" + this.eventNamespace, function(t) {
                 i.disabled && (t.preventDefault(), t.stopImmediatePropagation())
             }), this._on({
                 focus: function() {
                     this.buttonElement.addClass("ui-state-focus")
                 },
                 blur: function() {
                     this.buttonElement.removeClass("ui-state-focus")
                 }
             }), s && this.element.bind("change" + this.eventNamespace, function() {
                 e.refresh()
             }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                 return i.disabled ? !1 : void 0
             }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                 if (i.disabled) return !1;
                 t(this).addClass("ui-state-active"), e.buttonElement.attr("aria-pressed", "true");
                 var s = e.element[0];
                 g(s).not(s).map(function() {
                     return t(this).button("widget")[0]
                 }).removeClass("ui-state-active").attr("aria-pressed", "false")
             }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                 return i.disabled ? !1 : (t(this).addClass("ui-state-active"), d = this, void e.document.one("mouseup", function() {
                     d = null
                 }))
             }).bind("mouseup" + this.eventNamespace, function() {
                 return i.disabled ? !1 : void t(this).removeClass("ui-state-active")
             }).bind("keydown" + this.eventNamespace, function(e) {
                 return i.disabled ? !1 : void((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"))
             }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                 t(this).removeClass("ui-state-active")
             }), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                 e.keyCode === t.ui.keyCode.SPACE && t(this).click()
             })), this._setOption("disabled", i.disabled), this._resetButton()
         },
         _determineButtonType: function() {
             var t, e, i;
             this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
         },
         widget: function() {
             return this.buttonElement
         },
         _destroy: function() {
             this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(p + " ui-state-active " + f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
         },
         _setOption: function(t, e) {
             return this._super(t, e), "disabled" === t ? (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), void(e && this.buttonElement.removeClass("checkbox" === this.type || "radio" === this.type ? "ui-state-focus" : "ui-state-focus ui-state-active"))) : void this._resetButton()
         },
         refresh: function() {
             var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
             e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? g(this.element[0]).each(function() {
                 t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
             }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
         },
         _resetButton: function() {
             if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
             var e = this.buttonElement.removeClass(f),
                 i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                 s = this.options.icons,
                 n = s.primary && s.secondary,
                 o = [];
             s.primary || s.secondary ? (this.options.text && o.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (o.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : o.push("ui-button-text-only"), e.addClass(o.join(" "))
         }
     }), t.widget("ui.buttonset", {
         version: "1.11.2",
         options: {
             items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
         },
         _create: function() {
             this.element.addClass("ui-buttonset")
         },
         _init: function() {
             this.refresh()
         },
         _setOption: function(t, e) {
             "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
         },
         refresh: function() {
             var e = "rtl" === this.element.css("direction"),
                 i = this.element.find(this.options.items),
                 s = i.filter(":ui-button");
             i.not(":ui-button").button(), s.button("refresh"), this.buttons = i.map(function() {
                 return t(this).button("widget")[0]
             }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
         },
         _destroy: function() {
             this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                 return t(this).button("widget")[0]
             }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
         }
     });
     t.ui.button;
     t.extend(t.ui, {
         datepicker: {
             version: "1.11.2"
         }
     });
     var v;
     t.extend(n.prototype, {
         markerClassName: "hasDatepicker",
         maxRows: 4,
         _widgetDatepicker: function() {
             return this.dpDiv
         },
         setDefaults: function(t) {
             return r(this._defaults, t || {}), this
         },
         _attachDatepicker: function(e, i) {
             var s, n, o;
             s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
         },
         _newInst: function(e, i) {
             var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
             return {
                 id: s,
                 input: e,
                 selectedDay: 0,
                 selectedMonth: 0,
                 selectedYear: 0,
                 drawMonth: 0,
                 drawYear: 0,
                 inline: i,
                 dpDiv: i ? o(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
             }
         },
         _connectDatepicker: function(e, i) {
             var s = t(e);
             i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
         },
         _attachments: function(e, i) {
             var s, n, o, a = this._get(i, "appendText"),
                 r = this._get(i, "isRTL");
             i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                 src: o,
                 alt: n,
                 title: n
             }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                 src: o,
                 alt: n,
                 title: n
             }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.click(function() {
                 return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
             }))
         },
         _autoSize: function(t) {
             if (this._get(t, "autoSize") && !t.inline) {
                 var e, i, s, n, o = new Date(2009, 11, 20),
                     a = this._get(t, "dateFormat");
                 a.match(/[DM]/) && (e = function(t) {
                     for (i = 0, s = 0, n = 0; n < t.length; n++) t[n].length > i && (i = t[n].length, s = n);
                     return s
                 }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
             }
         },
         _inlineDatepicker: function(e, i) {
             var s = t(e);
             s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
         },
         _dialogDatepicker: function(e, i, s, n, o) {
             var a, h, l, u, c, d = this._dialogInst;
             return d || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), r(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._Nepallog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
         },
         _destroyDatepicker: function(e) {
             var i, s = t(e),
                 n = t.data(e, "datepicker");
             s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
         },
         _enableDatepicker: function(e) {
             var i, s, n = t(e),
                 o = t.data(e, "datepicker");
             n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() {
                 this.disabled = !1
             }).end().filter("img").css({
                 opacity: "1.0",
                 cursor: ""
             })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                 return t === e ? null : t
             }))
         },
         _disableDatepicker: function(e) {
             var i, s, n = t(e),
                 o = t.data(e, "datepicker");
             n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() {
                 this.disabled = !0
             }).end().filter("img").css({
                 opacity: "0.5",
                 cursor: "default"
             })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                 return t === e ? null : t
             }), this._disabledInputs[this._disabledInputs.length] = e)
         },
         _isDisabledDatepicker: function(t) {
             if (!t) return !1;
             for (var e = 0; e < this._disabledInputs.length; e++)
                 if (this._disabledInputs[e] === t) return !0;
             return !1
         },
         _getInst: function(e) {
             try {
                 return t.data(e, "datepicker")
             } catch (i) {
                 throw "Missing instance data for this datepicker"
             }
         },
         _optionDatepicker: function(e, i, s) {
             var n, o, a, h, l = this._getInst(e);
             return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), void(l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), a = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), r(l.settings, n), null !== a && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, a)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l))))
         },
         _changeDatepicker: function(t, e, i) {
             this._optionDatepicker(t, e, i)
         },
         _refreshDatepicker: function(t) {
             var e = this._getInst(t);
             e && this._updateDatepicker(e)
         },
         _setDateDatepicker: function(t, e) {
             var i = this._getInst(t);
             i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
         },
         _getDateDatepicker: function(t, e) {
             var i = this._getInst(t);
             return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
         },
         _doKeyDown: function(e) {
             var i, s, n, o = t.datepicker._getInst(e.target),
                 a = !0,
                 r = o.dpDiv.is(".ui-datepicker-rtl");
             if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                 case 9:
                     t.datepicker._hideDatepicker(), a = !1;
                     break;
                 case 13:
                     return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
                 case 27:
                     t.datepicker._hideDatepicker();
                     break;
                 case 33:
                     t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                     break;
                 case 34:
                     t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                     break;
                 case 35:
                     (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                     break;
                 case 36:
                     (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                     break;
                 case 37:
                     (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                     break;
                 case 38:
                     (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                     break;
                 case 39:
                     (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                     break;
                 case 40:
                     (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                     break;
                 default:
                     a = !1
             } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
             a && (e.preventDefault(), e.stopPropagation())
         },
         _doKeyPress: function(e) {
             var i, s, n = t.datepicker._getInst(e.target);
             return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
         },
         _doKeyUp: function(e) {
             var i, s = t.datepicker._getInst(e.target);
             if (s.input.val() !== s.lastVal) try {
                 i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
             } catch (n) {}
             return !0
         },
         _showDatepicker: function(e) {
             if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                 var i, n, o, a, h, l, u;
                 i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(i, "beforeShow"), o = n ? n.apply(e, [e, i]) : {}, o !== !1 && (r(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._Nepallog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), a = !1, t(e).parents().each(function() {
                     return a |= "fixed" === t(this).css("position"), !a
                 }), h = {
                     left: t.datepicker._pos[0],
                     top: t.datepicker._pos[1]
                 }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                     position: "absolute",
                     display: "block",
                     top: "-1000px"
                 }), t.datepicker._updateDatepicker(i), h = t.datepicker._checkOffset(i, h, a), i.dpDiv.css({
                     position: t.datepicker._Nepallog && t.blockUI ? "static" : a ? "fixed" : "absolute",
                     display: "none",
                     left: h.left + "px",
                     top: h.top + "px"
                 }), i.inline || (l = t.datepicker._get(i, "showAnim"), u = t.datepicker._get(i, "duration"), i.dpDiv.css("z-index", s(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i))
             }
         },
         _updateDatepicker: function(e) {
             this.maxRows = 4, v = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
             var i, s = this._getNumberOfMonths(e),
                 n = s[1],
                 o = 17,
                 r = e.dpDiv.find("." + this._dayOverClass + " a");
             r.length > 0 && a.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", o * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                 i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
             }, 0))
         },
         _shouldFocusInput: function(t) {
             return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
         },
         _checkOffset: function(e, i, s) {
             var n = e.dpDiv.outerWidth(),
                 o = e.dpDiv.outerHeight(),
                 a = e.input ? e.input.outerWidth() : 0,
                 r = e.input ? e.input.outerHeight() : 0,
                 h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
                 l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
             return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i
         },
         _findPos: function(e) {
             for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
             return i = t(e).offset(), [i.left, i.top]
         },
         _hideDatepicker: function(e) {
             var i, s, n, o, a = this._curInst;
             !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function() {
                 t.datepicker._tidyDialog(a)
             }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._Nepallog && (this._dialogInput.css({
                 position: "absolute",
                 left: "0",
                 top: "-100px"
             }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._Nepallog = !1)
         },
         _tidyDialog: function(t) {
             t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
         },
         _checkExternalClick: function(e) {
             if (t.datepicker._curInst) {
                 var i = t(e.target),
                     s = t.datepicker._getInst(i[0]);
                 (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._Nepallog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
             }
         },
         _adjustDate: function(e, i, s) {
             var n = t(e),
                 o = this._getInst(n[0]);
             this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
         },
         _gotoToday: function(e) {
             var i, s = t(e),
                 n = this._getInst(s[0]);
             this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
         },
         _selectMonthYear: function(e, i, s) {
             var n = t(e),
                 o = this._getInst(n[0]);
             o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
         },
         _selectDay: function(e, i, s, n) {
             var o, a = t(e);
             t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
         },
         _clearDate: function(e) {
             var i = t(e);
             this._selectDate(i, "")
         },
         _selectDate: function(e, i) {
             var s, n = t(e),
                 o = this._getInst(n[0]);
             i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.focus(), this._lastInput = null)
         },
         _updateAlternate: function(e) {
             var i, s, n, o = this._get(e, "altField");
             o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).each(function() {
                 t(this).val(n)
             }))
         },
         noWeekends: function(t) {
             var e = t.getDay();
             return [e > 0 && 6 > e, ""]
         },
         iso8601Week: function(t) {
             var e, i = new Date(t.getTime());
             return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
         },
         parseDate: function(e, i, s) {
             if (null == e || null == i) throw "Invalid arguments";
             if (i = "object" == typeof i ? i.toString() : i + "", "" === i) return null;
             var n, o, a, r, h = 0,
                 l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                 u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
                 c = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                 d = (s ? s.dayNames : null) || this._defaults.dayNames,
                 p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                 f = (s ? s.monthNames : null) || this._defaults.monthNames,
                 m = -1,
                 g = -1,
                 v = -1,
                 _ = -1,
                 b = !1,
                 y = function(t) {
                     var i = n + 1 < e.length && e.charAt(n + 1) === t;
                     return i && n++, i
                 },
                 w = function(t) {
                     var e = y(t),
                         s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                         n = "y" === t ? s : 1,
                         o = new RegExp("^\\d{" + n + "," + s + "}"),
                         a = i.substring(h).match(o);
                     if (!a) throw "Missing number at position " + h;
                     return h += a[0].length, parseInt(a[0], 10)
                 },
                 x = function(e, s, n) {
                     var o = -1,
                         a = t.map(y(e) ? n : s, function(t, e) {
                             return [
                                 [e, t]
                             ]
                         }).sort(function(t, e) {
                             return -(t[1].length - e[1].length)
                         });
                     if (t.each(a, function(t, e) {
                             var s = e[1];
                             return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], h += s.length, !1) : void 0
                         }), -1 !== o) return o + 1;
                     throw "Unknown name at position " + h
                 },
                 k = function() {
                     if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h;
                     h++
                 };
             for (n = 0; n < e.length; n++)
                 if (b) "'" !== e.charAt(n) || y("'") ? k() : b = !1;
                 else switch (e.charAt(n)) {
                     case "d":
                         v = w("d");
                         break;
                     case "D":
                         x("D", c, d);
                         break;
                     case "o":
                         _ = w("o");
                         break;
                     case "m":
                         g = w("m");
                         break;
                     case "M":
                         g = x("M", p, f);
                         break;
                     case "y":
                         m = w("y");
                         break;
                     case "@":
                         r = new Date(w("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                         break;
                     case "!":
                         r = new Date((w("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                         break;
                     case "'":
                         y("'") ? k() : b = !0;
                         break;
                     default:
                         k()
                 }
             if (h < i.length && (a = i.substr(h), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
             if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), _ > -1)
                 for (g = 1, v = _;;) {
                     if (o = this._getDaysInMonth(m, g - 1), o >= v) break;
                     g++, v -= o
                 }
             if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
             return r
         },
         ATOM: "yy-mm-dd",
         COOKIE: "D, dd M yy",
         ISO_8601: "yy-mm-dd",
         RFC_822: "D, d M y",
         RFC_850: "DD, dd-M-y",
         RFC_1036: "D, d M y",
         RFC_1123: "D, d M yy",
         RFC_2822: "D, d M yy",
         RSS: "D, d M y",
         TICKS: "!",
         TIMESTAMP: "@",
         W3C: "yy-mm-dd",
         _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
         formatDate: function(t, e, i) {
             if (!e) return "";
             var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                 o = (i ? i.dayNames : null) || this._defaults.dayNames,
                 a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                 r = (i ? i.monthNames : null) || this._defaults.monthNames,
                 h = function(e) {
                     var i = s + 1 < t.length && t.charAt(s + 1) === e;
                     return i && s++, i
                 },
                 l = function(t, e, i) {
                     var s = "" + e;
                     if (h(t))
                         for (; s.length < i;) s = "0" + s;
                     return s
                 },
                 u = function(t, e, i, s) {
                     return h(t) ? s[e] : i[e]
                 },
                 c = "",
                 d = !1;
             if (e)
                 for (s = 0; s < t.length; s++)
                     if (d) "'" !== t.charAt(s) || h("'") ? c += t.charAt(s) : d = !1;
                     else switch (t.charAt(s)) {
                         case "d":
                             c += l("d", e.getDate(), 2);
                             break;
                         case "D":
                             c += u("D", e.getDay(), n, o);
                             break;
                         case "o":
                             c += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                             break;
                         case "m":
                             c += l("m", e.getMonth() + 1, 2);
                             break;
                         case "M":
                             c += u("M", e.getMonth(), a, r);
                             break;
                         case "y":
                             c += h("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                             break;
                         case "@":
                             c += e.getTime();
                             break;
                         case "!":
                             c += 1e4 * e.getTime() + this._ticksTo1970;
                             break;
                         case "'":
                             h("'") ? c += "'" : d = !0;
                             break;
                         default:
                             c += t.charAt(s)
                     }
             return c
         },
         _possibleChars: function(t) {
             var e, i = "",
                 s = !1,
                 n = function(i) {
                     var s = e + 1 < t.length && t.charAt(e + 1) === i;
                     return s && e++, s
                 };
             for (e = 0; e < t.length; e++)
                 if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                 else switch (t.charAt(e)) {
                     case "d":
                     case "m":
                     case "y":
                     case "@":
                         i += "0123456789";
                         break;
                     case "D":
                     case "M":
                         return null;
                     case "'":
                         n("'") ? i += "'" : s = !0;
                         break;
                     default:
                         i += t.charAt(e)
                 }
             return i
         },
         _get: function(t, e) {
             return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
         },
         _setDateFromField: function(t, e) {
             if (t.input.val() !== t.lastVal) {
                 var i = this._get(t, "dateFormat"),
                     s = t.lastVal = t.input ? t.input.val() : null,
                     n = this._getDefaultDate(t),
                     o = n,
                     a = this._getFormatConfig(t);
                 try {
                     o = this.parseDate(i, s, a) || n
                 } catch (r) {
                     s = e ? "" : s
                 }
                 t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
             }
         },
         _getDefaultDate: function(t) {
             return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
         },
         _determineDate: function(e, i, s) {
             var n = function(t) {
                     var e = new Date;
                     return e.setDate(e.getDate() + t), e
                 },
                 o = function(i) {
                     try {
                         return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                     } catch (s) {}
                     for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
                         switch (l[2] || "d") {
                             case "d":
                             case "D":
                                 r += parseInt(l[1], 10);
                                 break;
                             case "w":
                             case "W":
                                 r += 7 * parseInt(l[1], 10);
                                 break;
                             case "m":
                             case "M":
                                 a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
                                 break;
                             case "y":
                             case "Y":
                                 o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
                         }
                         l = h.exec(i)
                     }
                     return new Date(o, a, r)
                 },
                 a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
             return a = a && "Invalid Date" === a.toString() ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
         },
         _daylightSavingAdjust: function(t) {
             return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
         },
         _setDate: function(t, e, i) {
             var s = !e,
                 n = t.selectedMonth,
                 o = t.selectedYear,
                 a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
             t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
         },
         _getDate: function(t) {
             var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
             return e
         },
         _attachHandlers: function(e) {
             var i = this._get(e, "stepMonths"),
                 s = "#" + e.id.replace(/\\\\/g, "\\");
             e.dpDiv.find("[data-handler]").map(function() {
                 var e = {
                     prev: function() {
                         t.datepicker._adjustDate(s, -i, "M")
                     },
                     next: function() {
                         t.datepicker._adjustDate(s, +i, "M")
                     },
                     hide: function() {
                         t.datepicker._hideDatepicker()
                     },
                     today: function() {
                         t.datepicker._gotoToday(s)
                     },
                     selectDay: function() {
                         return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                     },
                     selectMonth: function() {
                         return t.datepicker._selectMonthYear(s, this, "M"), !1
                     },
                     selectYear: function() {
                         return t.datepicker._selectMonthYear(s, this, "Y"), !1
                     }
                 };
                 t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
             })
         },
         _generateHTML: function(t) {
             var e, i, s, n, o, a, r, h, l, u, c, d, p, f, m, g, v, _, b, y, w, x, k, C, D, I, T, P, M, S, z, H, A, N, E, W, O, F, R, L = new Date,
                 Y = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
                 B = this._get(t, "isRTL"),
                 j = this._get(t, "showButtonPanel"),
                 q = this._get(t, "hideIfNoPrevNext"),
                 K = this._get(t, "navigationAsDateFormat"),
                 U = this._getNumberOfMonths(t),
                 V = this._get(t, "showCurrentAtPos"),
                 X = this._get(t, "stepMonths"),
                 $ = 1 !== U[0] || 1 !== U[1],
                 G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                 Q = this._getMinMaxDate(t, "min"),
                 J = this._getMinMaxDate(t, "max"),
                 Z = t.drawMonth - V,
                 te = t.drawYear;
             if (0 > Z && (Z += 12, te--), J)
                 for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);
             for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - X, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + X, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : Y, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (B ? "" : h) + "</div>" : "", u = parseInt(this._get(t, "firstDay"), 10), u = isNaN(u) ? 0 : u, c = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", x = 0; x < U[0]; x++) {
                 for (k = "", this.maxRows = 4, C = 0; C < U[1]; C++) {
                     if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), I = " ui-corner-all", T = "", $) {
                         if (T += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                             case 0:
                                 T += " ui-datepicker-group-first", I = " ui-corner-" + (B ? "right" : "left");
                                 break;
                             case U[1] - 1:
                                 T += " ui-datepicker-group-last", I = " ui-corner-" + (B ? "left" : "right");
                                 break;
                             default:
                                 T += " ui-datepicker-group-middle", I = ""
                         }
                         T += "'>"
                     }
                     for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === x ? B ? o : s : "") + (/all|right/.test(I) && 0 === x ? B ? s : o : "") + this._generateMonthYearHeader(t, Z, te, Q, J, x > 0 || C > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", P = c ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) M = (w + u) % 7, P += "<th scope='col'" + ((w + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[M] + "'>" + p[M] + "</span></th>";
                     for (T += P + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), z = (this._getFirstDayOfMonth(te, Z) - u + 7) % 7, H = Math.ceil((z + S) / 7), A = $ && this.maxRows > H ? this.maxRows : H, this.maxRows = A, N = this._daylightSavingAdjust(new Date(te, Z, 1 - z)), E = 0; A > E; E++) {
                         for (T += "<tr>", W = c ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(N) + "</td>" : "", w = 0; 7 > w; w++) O = g ? g.apply(t.input ? t.input[0] : null, [N]) : [!0, ""], F = N.getMonth() !== Z, R = F && !_ || !O[0] || Q && Q > N || J && N > J, W += "<td class='" + ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (N.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === N.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !v ? "" : " " + O[1] + (N.getTime() === G.getTime() ? " " + this._currentClass : "") + (N.getTime() === Y.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + N.getMonth() + "' data-year='" + N.getFullYear() + "'") + ">" + (F && !v ? "&#xa0;" : R ? "<span class='ui-state-default'>" + N.getDate() + "</span>" : "<a class='ui-state-default" + (N.getTime() === Y.getTime() ? " ui-state-highlight" : "") + (N.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + N.getDate() + "</a>") + "</td>", N.setDate(N.getDate() + 1), N = this._daylightSavingAdjust(N);
                         T += W + "</tr>"
                     }
                     Z++, Z > 11 && (Z = 0, te++), T += "</tbody></table>" + ($ ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += T
                 }
                 y += k
             }
             return y += l, t._keyEvent = !1, y
         },
         _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
             var h, l, u, c, d, p, f, m, g = this._get(t, "changeMonth"),
                 v = this._get(t, "changeYear"),
                 _ = this._get(t, "showMonthAfterYear"),
                 b = "<div class='ui-datepicker-title'>",
                 y = "";
             if (o || !g) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
             else {
                 for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!h || u >= s.getMonth()) && (!l || u <= n.getMonth()) && (y += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + r[u] + "</option>");
                 y += "</select>"
             }
             if (_ || (b += y + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml)
                 if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                 else {
                     for (c = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
                             var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                             return isNaN(e) ? d : e
                         }, f = p(c[0]), m = Math.max(f, p(c[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                     t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                 }
             return b += this._get(t, "yearSuffix"), _ && (b += (!o && g && v ? "" : "&#xa0;") + y), b += "</div>"
         },
         _adjustInstDate: function(t, e, i) {
             var s = t.drawYear + ("Y" === i ? e : 0),
                 n = t.drawMonth + ("M" === i ? e : 0),
                 o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                 a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
             t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
         },
         _restrictMinMax: function(t, e) {
             var i = this._getMinMaxDate(t, "min"),
                 s = this._getMinMaxDate(t, "max"),
                 n = i && i > e ? i : e;
             return s && n > s ? s : n
         },
         _notifyChange: function(t) {
             var e = this._get(t, "onChangeMonthYear");
             e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
         },
         _getNumberOfMonths: function(t) {
             var e = this._get(t, "numberOfMonths");
             return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
         },
         _getMinMaxDate: function(t, e) {
             return this._determineDate(t, this._get(t, e + "Date"), null)
         },
         _getDaysInMonth: function(t, e) {
             return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
         },
         _getFirstDayOfMonth: function(t, e) {
             return new Date(t, e, 1).getDay()
         },
         _canAdjustMonth: function(t, e, i, s) {
             var n = this._getNumberOfMonths(t),
                 o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
             return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
         },
         _isInRange: function(t, e) {
             var i, s, n = this._getMinMaxDate(t, "min"),
                 o = this._getMinMaxDate(t, "max"),
                 a = null,
                 r = null,
                 h = this._get(t, "yearRange");
             return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || e.getFullYear() <= r)
         },
         _getFormatConfig: function(t) {
             var e = this._get(t, "shortYearCutoff");
             return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                 shortYearCutoff: e,
                 dayNamesShort: this._get(t, "dayNamesShort"),
                 dayNames: this._get(t, "dayNames"),
                 monthNamesShort: this._get(t, "monthNamesShort"),
                 monthNames: this._get(t, "monthNames")
             }
         },
         _formatDate: function(t, e, i, s) {
             e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
             var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
             return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
         }
     }), t.fn.datepicker = function(e) {
         if (!this.length) return this;
         t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
         var i = Array.prototype.slice.call(arguments, 1);
         return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
             "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
         }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
     }, t.datepicker = new n, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.11.2";
     t.datepicker;
     t.widget("ui.draggable", t.ui.mouse, {
         version: "1.11.2",
         widgetEventPrefix: "drag",
         options: {
             addClasses: !0,
             appendTo: "parent",
             axis: !1,
             connectToSortable: !1,
             containment: !1,
             cursor: "auto",
             cursorAt: !1,
             grid: !1,
             handle: !1,
             helper: "original",
             iframeFix: !1,
             opacity: !1,
             refreshPositions: !1,
             revert: !1,
             revertDuration: 500,
             scope: "default",
             scroll: !0,
             scrollSensitivity: 20,
             scrollSpeed: 20,
             snap: !1,
             snapMode: "both",
             snapTolerance: 20,
             stack: !1,
             zIndex: !1,
             drag: null,
             start: null,
             stop: null
         },
         _create: function() {
             "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
         },
         _setOption: function(t, e) {
             this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
         },
         _destroy: function() {
             return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
         },
         _mouseCapture: function(e) {
             var i = this.options;
             return this._blurActiveElement(e), this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
         },
         _blockFrames: function(e) {
             this.iframeBlocks = this.document.find(e).map(function() {
                 var e = t(this);
                 return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
             })
         },
         _unblockFrames: function() {
             this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
         },
         _blurActiveElement: function(e) {
             var i = this.document[0];
             if (this.handleElement.is(e.target)) try {
                 i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && t(i.activeElement).blur()
             } catch (s) {}
         },
         _mouseStart: function(e) {
             var i = this.options;
             return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                 return "fixed" === t(this).css("position")
             }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._normalizeRightBottom(), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
         },
         _refreshOffsets: function(t) {
             this.offset = {
                 top: this.positionAbs.top - this.margins.top,
                 left: this.positionAbs.left - this.margins.left,
                 scroll: !1,
                 parent: this._getParentOffset(),
                 relative: this._getRelativeOffset()
             }, this.offset.click = {
                 left: t.pageX - this.offset.left,
                 top: t.pageY - this.offset.top
             }
         },
         _mouseDrag: function(e, i) {
             if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                 var s = this._uiHash();
                 if (this._trigger("drag", e, s) === !1) return this._mouseUp({}), !1;
                 this.position = s.position
             }
             return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
         },
         _mouseStop: function(e) {
             var i = this,
                 s = !1;
             return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                 i._trigger("stop", e) !== !1 && i._clear()
             }) : this._trigger("stop", e) !== !1 && this._clear(), !1
         },
         _mouseUp: function(e) {
             return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.focus(), t.ui.mouse.prototype._mouseUp.call(this, e)
         },
         cancel: function() {
             return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
         },
         _getHandle: function(e) {
             return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
         },
         _setHandleClassName: function() {
             this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
         },
         _removeHandleClassName: function() {
             this.handleElement.removeClass("ui-draggable-handle")
         },
         _createHelper: function(e) {
             var i = this.options,
                 s = t.isFunction(i.helper),
                 n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
             return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
         },
         _setPositionRelative: function() {
             /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
         },
         _adjustOffsetFromHelper: function(e) {
             "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                 left: +e[0],
                 top: +e[1] || 0
             }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
         },
         _isRootNode: function(t) {
             return /(html|body)/i.test(t.tagName) || t === this.document[0]
         },
         _getParentOffset: function() {
             var e = this.offsetParent.offset(),
                 i = this.document[0];
             return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                 top: 0,
                 left: 0
             }), {
                 top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                 left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
             }
         },
         _getRelativeOffset: function() {
             if ("relative" !== this.cssPosition) return {
                 top: 0,
                 left: 0
             };
             var t = this.element.position(),
                 e = this._isRootNode(this.scrollParent[0]);
             return {
                 top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                 left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
             }
         },
         _cacheMargins: function() {
             this.margins = {
                 left: parseInt(this.element.css("marginLeft"), 10) || 0,
                 top: parseInt(this.element.css("marginTop"), 10) || 0,
                 right: parseInt(this.element.css("marginRight"), 10) || 0,
                 bottom: parseInt(this.element.css("marginBottom"), 10) || 0
             }
         },
         _cacheHelperProportions: function() {
             this.helperProportions = {
                 width: this.helper.outerWidth(),
                 height: this.helper.outerHeight()
             }
         },
         _setContainment: function() {
             var e, i, s, n = this.options,
                 o = this.document[0];
             return this.relativeContainer = null, n.containment ? "window" === n.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void(this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], void(s && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
         },
         _convertPositionTo: function(t, e) {
             e || (e = this.position);
             var i = "absolute" === t ? 1 : -1,
                 s = this._isRootNode(this.scrollParent[0]);
             return {
                 top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                 left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
             }
         },
         _generatePosition: function(t, e) {
             var i, s, n, o, a = this.options,
                 r = this._isRootNode(this.scrollParent[0]),
                 h = t.pageX,
                 l = t.pageY;
             return r && this.offset.scroll || (this.offset.scroll = {
                 top: this.scrollParent.scrollTop(),
                 left: this.scrollParent.scrollLeft()
             }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), {
                 top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                 left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
             }
         },
         _clear: function() {
             this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
         },
         _normalizeRightBottom: function() {
             "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
         },
         _trigger: function(e, i, s) {
             return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s)
         },
         plugins: {},
         _uiHash: function() {
             return {
                 helper: this.helper,
                 position: this.position,
                 originalPosition: this.originalPosition,
                 offset: this.positionAbs
             }
         }
     }), t.ui.plugin.add("draggable", "connectToSortable", {
         start: function(e, i, s) {
             var n = t.extend({}, i, {
                 item: s.element
             });
             s.sortables = [], t(s.options.connectToSortable).each(function() {
                 var i = t(this).sortable("instance");
                 i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
             })
         },
         stop: function(e, i, s) {
             var n = t.extend({}, i, {
                 item: s.element
             });
             s.cancelHelperRemoval = !1, t.each(s.sortables, function() {
                 var t = this;
                 t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                     position: t.placeholder.css("position"),
                     top: t.placeholder.css("top"),
                     left: t.placeholder.css("left")
                 }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
             })
         },
         drag: function(e, i, s) {
             t.each(s.sortables, function() {
                 var n = !1,
                     o = this;
                 o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function() {
                     return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n
                 })), n ? (o.isOver || (o.isOver = 1, o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
                     return i.helper[0]
                 }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function() {
                     this.refreshPositions()
                 }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function() {
                     this.refreshPositions()
                 }))
             })
         }
     }), t.ui.plugin.add("draggable", "cursor", {
         start: function(e, i, s) {
             var n = t("body"),
                 o = s.options;
             n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor)
         },
         stop: function(e, i, s) {
             var n = s.options;
             n._cursor && t("body").css("cursor", n._cursor)
         }
     }), t.ui.plugin.add("draggable", "opacity", {
         start: function(e, i, s) {
             var n = t(i.helper),
                 o = s.options;
             n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
         },
         stop: function(e, i, s) {
             var n = s.options;
             n._opacity && t(i.helper).css("opacity", n._opacity)
         }
     }), t.ui.plugin.add("draggable", "scroll", {
         start: function(t, e, i) {
             i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
         },
         drag: function(e, i, s) {
             var n = s.options,
                 o = !1,
                 a = s.scrollParentNotHidden[0],
                 r = s.document[0];
             a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
         }
     }), t.ui.plugin.add("draggable", "snap", {
         start: function(e, i, s) {
             var n = s.options;
             s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                 var e = t(this),
                     i = e.offset();
                 this !== s.element[0] && s.snapElements.push({
                     item: this,
                     width: e.outerWidth(),
                     height: e.outerHeight(),
                     top: i.top,
                     left: i.left
                 })
             })
         },
         drag: function(e, i, s) {
             var n, o, a, r, h, l, u, c, d, p, f = s.options,
                 m = f.snapTolerance,
                 g = i.offset.left,
                 v = g + s.helperProportions.width,
                 _ = i.offset.top,
                 b = _ + s.helperProportions.height;
             for (d = s.snapElements.length - 1; d >= 0; d--) h = s.snapElements[d].left - s.margins.left, l = h + s.snapElements[d].width, u = s.snapElements[d].top - s.margins.top, c = u + s.snapElements[d].height, h - m > v || g > l + m || u - m > b || _ > c + m || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
                 snapItem: s.snapElements[d].item
             })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = Math.abs(u - b) <= m, o = Math.abs(c - _) <= m, a = Math.abs(h - v) <= m, r = Math.abs(l - g) <= m, n && (i.position.top = s._convertPositionTo("relative", {
                 top: u - s.helperProportions.height,
                 left: 0
             }).top), o && (i.position.top = s._convertPositionTo("relative", {
                 top: c,
                 left: 0
             }).top), a && (i.position.left = s._convertPositionTo("relative", {
                 top: 0,
                 left: h - s.helperProportions.width
             }).left), r && (i.position.left = s._convertPositionTo("relative", {
                 top: 0,
                 left: l
             }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = Math.abs(u - _) <= m, o = Math.abs(c - b) <= m, a = Math.abs(h - g) <= m, r = Math.abs(l - v) <= m, n && (i.position.top = s._convertPositionTo("relative", {
                 top: u,
                 left: 0
             }).top), o && (i.position.top = s._convertPositionTo("relative", {
                 top: c - s.helperProportions.height,
                 left: 0
             }).top), a && (i.position.left = s._convertPositionTo("relative", {
                 top: 0,
                 left: h
             }).left), r && (i.position.left = s._convertPositionTo("relative", {
                 top: 0,
                 left: l - s.helperProportions.width
             }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
                 snapItem: s.snapElements[d].item
             })), s.snapElements[d].snapping = n || o || a || r || p)
         }
     }), t.ui.plugin.add("draggable", "stack", {
         start: function(e, i, s) {
             var n, o = s.options,
                 a = t.makeArray(t(o.stack)).sort(function(e, i) {
                     return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                 });
             a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
                 t(this).css("zIndex", n + e)
             }), this.css("zIndex", n + a.length))
         }
     }), t.ui.plugin.add("draggable", "zIndex", {
         start: function(e, i, s) {
             var n = t(i.helper),
                 o = s.options;
             n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
         },
         stop: function(e, i, s) {
             var n = s.options;
             n._zIndex && t(i.helper).css("zIndex", n._zIndex)
         }
     });
     t.ui.draggable;
     t.widget("ui.resizable", t.ui.mouse, {
         version: "1.11.2",
         widgetEventPrefix: "resize",
         options: {
             alsoResize: !1,
             animate: !1,
             animateDuration: "slow",
             animateEasing: "swing",
             aspectRatio: !1,
             autoHide: !1,
             containment: !1,
             ghost: !1,
             grid: !1,
             handles: "e,s,se",
             helper: !1,
             maxHeight: null,
             maxWidth: null,
             minHeight: 10,
             minWidth: 10,
             zIndex: 90,
             resize: null,
             start: null,
             stop: null
         },
         _num: function(t) {
             return parseInt(t, 10) || 0
         },
         _isNumber: function(t) {
             return !isNaN(parseInt(t, 10))
         },
         _hasScroll: function(e, i) {
             if ("hidden" === t(e).css("overflow")) return !1;
             var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                 n = !1;
             return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
         },
         _create: function() {
             var e, i, s, n, o, a = this,
                 r = this.options;
             if (this.element.addClass("ui-resizable"), t.extend(this, {
                     _aspectRatio: !!r.aspectRatio,
                     aspectRatio: r.aspectRatio,
                     originalElement: this.element,
                     _proportionallyResizeElements: [],
                     _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
                 }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                     position: this.element.css("position"),
                     width: this.element.outerWidth(),
                     height: this.element.outerHeight(),
                     top: this.element.css("top"),
                     left: this.element.css("left")
                 })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                     marginLeft: this.originalElement.css("marginLeft"),
                     marginTop: this.originalElement.css("marginTop"),
                     marginRight: this.originalElement.css("marginRight"),
                     marginBottom: this.originalElement.css("marginBottom")
                 }), this.originalElement.css({
                     marginLeft: 0,
                     marginTop: 0,
                     marginRight: 0,
                     marginBottom: 0
                 }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                     position: "static",
                     zoom: 1,
                     display: "block"
                 })), this.originalElement.css({
                     margin: this.originalElement.css("margin")
                 }), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
                     n: ".ui-resizable-n",
                     e: ".ui-resizable-e",
                     s: ".ui-resizable-s",
                     w: ".ui-resizable-w",
                     se: ".ui-resizable-se",
                     sw: ".ui-resizable-sw",
                     ne: ".ui-resizable-ne",
                     nw: ".ui-resizable-nw"
                 } : "e,s,se"), this.handles.constructor === String)
                 for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; i < e.length; i++) s = t.trim(e[i]), o = "ui-resizable-" + s, n = t("<div class='ui-resizable-handle " + o + "'></div>"), n.css({
                     zIndex: r.zIndex
                 }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
             this._renderAxis = function(e) {
                 var i, s, n, o;
                 e = e || this.element;
                 for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = this.element.children(this.handles[i]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), t(this.handles[i]).length
             }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                 a.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = n && n[1] ? n[1] : "se")
             }), r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                 r.disabled || (t(this).removeClass("ui-resizable-autohide"), a._handles.show())
             }).mouseleave(function() {
                 r.disabled || a.resizing || (t(this).addClass("ui-resizable-autohide"), a._handles.hide())
             })), this._mouseInit()
         },
         _destroy: function() {
             this._mouseDestroy();
             var e, i = function(e) {
                 t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
             };
             return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                 position: e.css("position"),
                 width: e.outerWidth(),
                 height: e.outerHeight(),
                 top: e.css("top"),
                 left: e.css("left")
             }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
         },
         _mouseCapture: function(e) {
             var i, s, n = !1;
             for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
             return !this.options.disabled && n
         },
         _mouseStart: function(e) {
             var i, s, n, o = this.options,
                 a = this.element;
             return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                 left: i,
                 top: s
             }, this.size = this._helper ? {
                 width: this.helper.width(),
                 height: this.helper.height()
             } : {
                 width: a.width(),
                 height: a.height()
             }, this.originalSize = this._helper ? {
                 width: a.outerWidth(),
                 height: a.outerHeight()
             } : {
                 width: a.width(),
                 height: a.height()
             }, this.sizeDiff = {
                 width: a.outerWidth() - a.width(),
                 height: a.outerHeight() - a.height()
             }, this.originalPosition = {
                 left: i,
                 top: s
             }, this.originalMousePosition = {
                 left: e.pageX,
                 top: e.pageY
             }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), a.addClass("ui-resizable-resizing"), this._propagate("start", e), !0
         },
         _mouseDrag: function(e) {
             var i, s, n = this.originalMousePosition,
                 o = this.axis,
                 a = e.pageX - n.left || 0,
                 r = e.pageY - n.top || 0,
                 h = this._change[o];
             return this._updatePrevProperties(), h ? (i = h.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1
         },
         _mouseStop: function(e) {
             this.resizing = !1;
             var i, s, n, o, a, r, h, l = this.options,
                 u = this;
             return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, o = s ? 0 : u.sizeDiff.width, a = {
                 width: u.helper.width() - o,
                 height: u.helper.height() - n
             }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, {
                 top: h,
                 left: r
             })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
         },
         _updatePrevProperties: function() {
             this.prevPosition = {
                 top: this.position.top,
                 left: this.position.left
             }, this.prevSize = {
                 width: this.size.width,
                 height: this.size.height
             }
         },
         _applyChanges: function() {
             var t = {};
             return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
         },
         _updateVirtualBoundaries: function(t) {
             var e, i, s, n, o, a = this.options;
             o = {
                 minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                 maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                 minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                 maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
             }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), i < o.maxWidth && (o.maxWidth = i), n < o.maxHeight && (o.maxHeight = n)), this._vBoundaries = o
         },
         _updateCache: function(t) {
             this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
         },
         _updateRatio: function(t) {
             var e = this.position,
                 i = this.size,
                 s = this.axis;
             return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
         },
         _respectSize: function(t) {
             var e = this._vBoundaries,
                 i = this.axis,
                 s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                 n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                 o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                 a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                 r = this.originalPosition.left + this.originalSize.width,
                 h = this.position.top + this.size.height,
                 l = /sw|nw|w/.test(i),
                 u = /nw|ne|n/.test(i);
             return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && u && (t.top = h - e.minHeight), n && u && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
         },
         _getPaddingPlusBorderDimensions: function(t) {
             for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseInt(s[e], 10) || 0, i[e] += parseInt(n[e], 10) || 0;
             return {
                 height: i[0] + i[2],
                 width: i[1] + i[3]
             }
         },
         _proportionallyResize: function() {
             if (this._proportionallyResizeElements.length)
                 for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                     height: i.height() - this.outerDimensions.height || 0,
                     width: i.width() - this.outerDimensions.width || 0
                 })
         },
         _renderProxy: function() {
             var e = this.element,
                 i = this.options;
             this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                 width: this.element.outerWidth() - 1,
                 height: this.element.outerHeight() - 1,
                 position: "absolute",
                 left: this.elementOffset.left + "px",
                 top: this.elementOffset.top + "px",
                 zIndex: ++i.zIndex
             }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
         },
         _change: {
             e: function(t, e) {
                 return {
                     width: this.originalSize.width + e
                 }
             },
             w: function(t, e) {
                 var i = this.originalSize,
                     s = this.originalPosition;
                 return {
                     left: s.left + e,
                     width: i.width - e
                 }
             },
             n: function(t, e, i) {
                 var s = this.originalSize,
                     n = this.originalPosition;
                 return {
                     top: n.top + i,
                     height: s.height - i
                 }
             },
             s: function(t, e, i) {
                 return {
                     height: this.originalSize.height + i
                 }
             },
             se: function(e, i, s) {
                 return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
             },
             sw: function(e, i, s) {
                 return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
             },
             ne: function(e, i, s) {
                 return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
             },
             nw: function(e, i, s) {
                 return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
             }
         },
         _propagate: function(e, i) {
             t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
         },
         plugins: {},
         ui: function() {
             return {
                 originalElement: this.originalElement,
                 element: this.element,
                 helper: this.helper,
                 position: this.position,
                 size: this.size,
                 originalSize: this.originalSize,
                 originalPosition: this.originalPosition
             }
         }
     }), t.ui.plugin.add("resizable", "animate", {
         stop: function(e) {
             var i = t(this).resizable("instance"),
                 s = i.options,
                 n = i._proportionallyResizeElements,
                 o = n.length && /textarea/i.test(n[0].nodeName),
                 a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                 r = o ? 0 : i.sizeDiff.width,
                 h = {
                     width: i.size.width - r,
                     height: i.size.height - a
                 },
                 l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                 u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
             i.element.animate(t.extend(h, u && l ? {
                 top: u,
                 left: l
             } : {}), {
                 duration: s.animateDuration,
                 easing: s.animateEasing,
                 step: function() {
                     var s = {
                         width: parseInt(i.element.css("width"), 10),
                         height: parseInt(i.element.css("height"), 10),
                         top: parseInt(i.element.css("top"), 10),
                         left: parseInt(i.element.css("left"), 10)
                     };
                     n && n.length && t(n[0]).css({
                         width: s.width,
                         height: s.height
                     }), i._updateCache(s), i._propagate("resize", e)
                 }
             })
         }
     }), t.ui.plugin.add("resizable", "containment", {
         start: function() {
             var e, i, s, n, o, a, r, h = t(this).resizable("instance"),
                 l = h.options,
                 u = h.element,
                 c = l.containment,
                 d = c instanceof t ? c.get(0) : /parent/.test(c) ? u.parent().get(0) : c;
             d && (h.containerElement = t(d), /document/.test(c) || c === document ? (h.containerOffset = {
                 left: 0,
                 top: 0
             }, h.containerPosition = {
                 left: 0,
                 top: 0
             }, h.parentData = {
                 element: t(document),
                 left: 0,
                 top: 0,
                 width: t(document).width(),
                 height: t(document).height() || document.body.parentNode.scrollHeight
             }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
                 i[t] = h._num(e.css("padding" + s))
             }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
                 height: e.innerHeight() - i[3],
                 width: e.innerWidth() - i[1]
             }, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, a = h._hasScroll(d, "left") ? d.scrollWidth : o, r = h._hasScroll(d) ? d.scrollHeight : n, h.parentData = {
                 element: d,
                 left: s.left,
                 top: s.top,
                 width: a,
                 height: r
             }))
         },
         resize: function(e) {
             var i, s, n, o, a = t(this).resizable("instance"),
                 r = a.options,
                 h = a.containerOffset,
                 l = a.position,
                 u = a._aspectRatio || e.shiftKey,
                 c = {
                     top: 0,
                     left: 0
                 },
                 d = a.containerElement,
                 p = !0;
             d[0] !== document && /static/.test(d.css("position")) && (c = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - c.left), u && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), u && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? h.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - c.left : a.offset.left - h.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - c.top : a.offset.top - h.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, u && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, u && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
         },
         stop: function() {
             var e = t(this).resizable("instance"),
                 i = e.options,
                 s = e.containerOffset,
                 n = e.containerPosition,
                 o = e.containerElement,
                 a = t(e.helper),
                 r = a.offset(),
                 h = a.outerWidth() - e.sizeDiff.width,
                 l = a.outerHeight() - e.sizeDiff.height;
             e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                 left: r.left - n.left - s.left,
                 width: h,
                 height: l
             }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                 left: r.left - n.left - s.left,
                 width: h,
                 height: l
             })
         }
     }), t.ui.plugin.add("resizable", "alsoResize", {
         start: function() {
             var e = t(this).resizable("instance"),
                 i = e.options,
                 s = function(e) {
                     t(e).each(function() {
                         var e = t(this);
                         e.data("ui-resizable-alsoresize", {
                             width: parseInt(e.width(), 10),
                             height: parseInt(e.height(), 10),
                             left: parseInt(e.css("left"), 10),
                             top: parseInt(e.css("top"), 10)
                         })
                     })
                 };
             "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function(t) {
                 s(t)
             })
         },
         resize: function(e, i) {
             var s = t(this).resizable("instance"),
                 n = s.options,
                 o = s.originalSize,
                 a = s.originalPosition,
                 r = {
                     height: s.size.height - o.height || 0,
                     width: s.size.width - o.width || 0,
                     top: s.position.top - a.top || 0,
                     left: s.position.left - a.left || 0
                 },
                 h = function(e, s) {
                     t(e).each(function() {
                         var e = t(this),
                             n = t(this).data("ui-resizable-alsoresize"),
                             o = {},
                             a = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                         t.each(a, function(t, e) {
                             var i = (n[e] || 0) + (r[e] || 0);
                             i && i >= 0 && (o[e] = i || null)
                         }), e.css(o)
                     })
                 };
             "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function(t, e) {
                 h(t, e)
             })
         },
         stop: function() {
             t(this).removeData("resizable-alsoresize")
         }
     }), t.ui.plugin.add("resizable", "ghost", {
         start: function() {
             var e = t(this).resizable("instance"),
                 i = e.options,
                 s = e.size;
             e.ghost = e.originalElement.clone(), e.ghost.css({
                 opacity: .25,
                 display: "block",
                 position: "relative",
                 height: s.height,
                 width: s.width,
                 margin: 0,
                 left: 0,
                 top: 0
             }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
         },
         resize: function() {
             var e = t(this).resizable("instance");
             e.ghost && e.ghost.css({
                 position: "relative",
                 height: e.size.height,
                 width: e.size.width
             })
         },
         stop: function() {
             var e = t(this).resizable("instance");
             e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
         }
     }), t.ui.plugin.add("resizable", "grid", {
         resize: function() {
             var e, i = t(this).resizable("instance"),
                 s = i.options,
                 n = i.size,
                 o = i.originalSize,
                 a = i.originalPosition,
                 r = i.axis,
                 h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                 l = h[0] || 1,
                 u = h[1] || 1,
                 c = Math.round((n.width - o.width) / l) * l,
                 d = Math.round((n.height - o.height) / u) * u,
                 p = o.width + c,
                 f = o.height + d,
                 m = s.maxWidth && s.maxWidth < p,
                 g = s.maxHeight && s.maxHeight < f,
                 v = s.minWidth && s.minWidth > p,
                 _ = s.minHeight && s.minHeight > f;
             s.grid = h, v && (p += l), _ && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - c) : ((0 >= f - u || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = u - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - l > 0 ? (i.size.width = p, i.position.left = a.left - c) : (p = u - e.height, i.size.width = p, i.position.left = a.left + o.width - p))
         }
     });
     t.ui.resizable, t.widget("ui.dialog", {
         version: "1.11.2",
         options: {
             appendTo: "body",
             autoOpen: !0,
             buttons: [],
             closeOnEscape: !0,
             closeText: "Close",
             dialogClass: "",
             draggable: !0,
             hide: null,
             height: "auto",
             maxHeight: null,
             maxWidth: null,
             minHeight: 150,
             minWidth: 150,
             modal: !1,
             position: {
                 my: "center",
                 at: "center",
                 of: window,
                 collision: "fit",
                 using: function(e) {
                     var i = t(this).css(e).offset().top;
                     0 > i && t(this).css("top", e.top - i)
                 }
             },
             resizable: !0,
             show: null,
             title: null,
             width: 300,
             beforeClose: null,
             close: null,
             drag: null,
             dragStart: null,
             dragStop: null,
             focus: null,
             open: null,
             resize: null,
             resizeStart: null,
             resizeStop: null
         },
         sizeRelatedOptions: {
             buttons: !0,
             height: !0,
             maxHeight: !0,
             maxWidth: !0,
             minHeight: !0,
             minWidth: !0,
             width: !0
         },
         resizableRelatedOptions: {
             maxHeight: !0,
             maxWidth: !0,
             minHeight: !0,
             minWidth: !0
         },
         _create: function() {
             this.originalCss = {
                 display: this.element[0].style.display,
                 width: this.element[0].style.width,
                 minHeight: this.element[0].style.minHeight,
                 maxHeight: this.element[0].style.maxHeight,
                 height: this.element[0].style.height
             }, this.originalPosition = {
                 parent: this.element.parent(),
                 index: this.element.parent().children().index(this.element)
             }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
         },
         _init: function() {
             this.options.autoOpen && this.open()
         },
         _appendTo: function() {
             var e = this.options.appendTo;
             return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
         },
         _destroy: function() {
             var t, e = this.originalPosition;
             this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
         },
         widget: function() {
             return this.uiDialog
         },
         disable: t.noop,
         enable: t.noop,
         close: function(e) {
             var i, s = this;
             if (this._isOpen && this._trigger("beforeClose", e) !== !1) {
                 if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                     i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && t(i).blur()
                 } catch (n) {}
                 this._hide(this.uiDialog, this.options.hide, function() {
                     s._trigger("close", e)
                 })
             }
         },
         isOpen: function() {
             return this._isOpen
         },
         moveToTop: function() {
             this._moveToTop()
         },
         _moveToTop: function(e, i) {
             var s = !1,
                 n = this.uiDialog.siblings(".ui-front:visible").map(function() {
                     return +t(this).css("z-index")
                 }).get(),
                 o = Math.max.apply(null, n);
             return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s
         },
         open: function() {
             var e = this;
             return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                 e._focusTabbable(), e._trigger("focus")
             }), this._makeFocusTarget(), void this._trigger("open"))
         },
         _focusTabbable: function() {
             var t = this._focusedElement;
             t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
         },
         _keepFocus: function(e) {
             function i() {
                 var e = this.document[0].activeElement,
                     i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                 i || this._focusTabbable()
             }
             e.preventDefault(), i.call(this), this._delay(i)
         },
         _createWrapper: function() {
             this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                 tabIndex: -1,
                 role: "dialog"
             }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                 keydown: function(e) {
                     if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                     if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                         var i = this.uiDialog.find(":tabbable"),
                             s = i.filter(":first"),
                             n = i.filter(":last");
                         e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                             n.focus()
                         }), e.preventDefault()) : (this._delay(function() {
                             s.focus()
                         }), e.preventDefault())
                     }
                 },
                 mousedown: function(t) {
                     this._moveToTop(t) && this._focusTabbable()
                 }
             }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                 "aria-describedby": this.element.uniqueId().attr("id")
             })
         },
         _createTitlebar: function() {
             var e;
             this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                 mousedown: function(e) {
                     t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                 }
             }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                 label: this.options.closeText,
                 icons: {
                     primary: "ui-icon-closethick"
                 },
                 text: !1
             }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                 click: function(t) {
                     t.preventDefault(), this.close(t)
                 }
             }), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({
                 "aria-labelledby": e.attr("id")
             })
         },
         _title: function(t) {
             this.options.title || t.html("&#160;"), t.text(this.options.title)
         },
         _createButtonPane: function() {
             this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
         },
         _createButtons: function() {
             var e = this,
                 i = this.options.buttons;
             return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(i, function(i, s) {
                 var n, o;
                 s = t.isFunction(s) ? {
                     click: s,
                     text: i
                 } : s, s = t.extend({
                     type: "button"
                 }, s), n = s.click, s.click = function() {
                     n.apply(e.element[0], arguments)
                 }, o = {
                     icons: s.icons,
                     text: s.showText
                 }, delete s.icons, delete s.showText, t("<button></button>", s).button(o).appendTo(e.uiButtonSet)
             }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
         },
         _makeDraggable: function() {
             function e(t) {
                 return {
                     position: t.position,
                     offset: t.offset
                 }
             }
             var i = this,
                 s = this.options;
             this.uiDialog.draggable({
                 cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                 handle: ".ui-dialog-titlebar",
                 containment: "document",
                 start: function(s, n) {
                     t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
                 },
                 drag: function(t, s) {
                     i._trigger("drag", t, e(s))
                 },
                 stop: function(n, o) {
                     var a = o.offset.left - i.document.scrollLeft(),
                         r = o.offset.top - i.document.scrollTop();
                     s.position = {
                         my: "left top",
                         at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                         of: i.window
                     }, t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o))
                 }
             })
         },
         _makeResizable: function() {
             function e(t) {
                 return {
                     originalPosition: t.originalPosition,
                     originalSize: t.originalSize,
                     position: t.position,
                     size: t.size
                 }
             }
             var i = this,
                 s = this.options,
                 n = s.resizable,
                 o = this.uiDialog.css("position"),
                 a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
             this.uiDialog.resizable({
                 cancel: ".ui-dialog-content",
                 containment: "document",
                 alsoResize: this.element,
                 maxWidth: s.maxWidth,
                 maxHeight: s.maxHeight,
                 minWidth: s.minWidth,
                 minHeight: this._minHeight(),
                 handles: a,
                 start: function(s, n) {
                     t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
                 },
                 resize: function(t, s) {
                     i._trigger("resize", t, e(s))
                 },
                 stop: function(n, o) {
                     var a = i.uiDialog.offset(),
                         r = a.left - i.document.scrollLeft(),
                         h = a.top - i.document.scrollTop();
                     s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
                         my: "left top",
                         at: "left" + (r >= 0 ? "+" : "") + r + " top" + (h >= 0 ? "+" : "") + h,
                         of: i.window
                     }, t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o))
                 }
             }).css("position", o)
         },
         _trackFocus: function() {
             this._on(this.widget(), {
                 focusin: function(e) {
                     this._makeFocusTarget(), this._focusedElement = t(e.target)
                 }
             })
         },
         _makeFocusTarget: function() {
             this._untrackInstance(), this._trackingInstances().unshift(this)
         },
         _untrackInstance: function() {
             var e = this._trackingInstances(),
                 i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
         },
         _trackingInstances: function() {
             var t = this.document.data("ui-dialog-instances");
             return t || (t = [], this.document.data("ui-dialog-instances", t)), t
         },
         _minHeight: function() {
             var t = this.options;
             return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
         },
         _position: function() {
             var t = this.uiDialog.is(":visible");
             t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
         },
         _setOptions: function(e) {
             var i = this,
                 s = !1,
                 n = {};
             t.each(e, function(t, e) {
                 i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e)
             }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
         },
         _setOption: function(t, e) {
             var i, s, n = this.uiDialog;
             "dialogClass" === t && n.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                 label: "" + e
             }), "draggable" === t && (i = n.is(":data(ui-draggable)"), i && !e && n.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (s = n.is(":data(ui-resizable)"), s && !e && n.resizable("destroy"), s && "string" == typeof e && n.resizable("option", "handles", e), s || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
         },
         _size: function() {
             var t, e, i, s = this.options;
             this.element.show().css({
                 width: "auto",
                 minHeight: 0,
                 maxHeight: "none",
                 height: 0
             }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                 height: "auto",
                 width: s.width
             }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
                 minHeight: e,
                 maxHeight: i,
                 height: "auto"
             }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
         },
         _blockFrames: function() {
             this.iframeBlocks = this.document.find("iframe").map(function() {
                 var e = t(this);
                 return t("<div>").css({
                     position: "absolute",
                     width: e.outerWidth(),
                     height: e.outerHeight()
                 }).appendTo(e.parent()).offset(e.offset())[0]
             })
         },
         _unblockFrames: function() {
             this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
         },
         _allowInteraction: function(e) {
             return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
         },
         _createOverlay: function() {
             if (this.options.modal) {
                 var e = !0;
                 this._delay(function() {
                     e = !1
                 }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                     focusin: function(t) {
                         e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                     }
                 }), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                     mousedown: "_keepFocus"
                 }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
             }
         },
         _destroyOverlay: function() {
             if (this.options.modal && this.overlay) {
                 var t = this.document.data("ui-dialog-overlays") - 1;
                 t ? this.document.data("ui-dialog-overlays", t) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
             }
         }
     });
     t.widget("ui.droppable", {
         version: "1.11.2",
         widgetEventPrefix: "drop",
         options: {
             accept: "*",
             activeClass: !1,
             addClasses: !0,
             greedy: !1,
             hoverClass: !1,
             scope: "default",
             tolerance: "intersect",
             activate: null,
             deactivate: null,
             drop: null,
             out: null,
             over: null
         },
         _create: function() {
             var e, i = this.options,
                 s = i.accept;
             this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) {
                 return t.is(s)
             }, this.proportions = function() {
                 return arguments.length ? void(e = arguments[0]) : e ? e : e = {
                     width: this.element[0].offsetWidth,
                     height: this.element[0].offsetHeight
                 }
             }, this._addToManager(i.scope), i.addClasses && this.element.addClass("ui-droppable")
         },
         _addToManager: function(e) {
             t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
         },
         _splice: function(t) {
             for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
         },
         _destroy: function() {
             var e = t.ui.ddmanager.droppables[this.options.scope];
             this._splice(e), this.element.removeClass("ui-droppable ui-droppable-disabled")
         },
         _setOption: function(e, i) {
             if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
                 return t.is(i)
             };
             else if ("scope" === e) {
                 var s = t.ui.ddmanager.droppables[this.options.scope];
                 this._splice(s), this._addToManager(i)
             }
             this._super(e, i)
         },
         _activate: function(e) {
             var i = t.ui.ddmanager.current;
             this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
         },
         _deactivate: function(e) {
             var i = t.ui.ddmanager.current;
             this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
         },
         _over: function(e) {
             var i = t.ui.ddmanager.current;
             i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
         },
         _out: function(e) {
             var i = t.ui.ddmanager.current;
             i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
         },
         _drop: function(e, i) {
             var s = i || t.ui.ddmanager.current,
                 n = !1;
             return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                 var i = t(this).droppable("instance");
                 return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(i, {
                     offset: i.element.offset()
                 }), i.options.tolerance, e) ? (n = !0, !1) : void 0
             }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1
         },
         ui: function(t) {
             return {
                 draggable: t.currentItem || t.element,
                 helper: t.helper,
                 position: t.position,
                 offset: t.positionAbs
             }
         }
     }), t.ui.intersect = function() {
         function t(t, e, i) {
             return t >= e && e + i > t
         }
         return function(e, i, s, n) {
             if (!i.offset) return !1;
             var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                 a = (e.positionAbs || e.position.absolute).top + e.margins.top,
                 r = o + e.helperProportions.width,
                 h = a + e.helperProportions.height,
                 l = i.offset.left,
                 u = i.offset.top,
                 c = l + i.proportions().width,
                 d = u + i.proportions().height;
             switch (s) {
                 case "fit":
                     return o >= l && c >= r && a >= u && d >= h;
                 case "intersect":
                     return l < o + e.helperProportions.width / 2 && r - e.helperProportions.width / 2 < c && u < a + e.helperProportions.height / 2 && h - e.helperProportions.height / 2 < d;
                 case "pointer":
                     return t(n.pageY, u, i.proportions().height) && t(n.pageX, l, i.proportions().width);
                 case "touch":
                     return (a >= u && d >= a || h >= u && d >= h || u > a && h > d) && (o >= l && c >= o || r >= l && c >= r || l > o && r > c);
                 default:
                     return !1
             }
         }
     }(), t.ui.ddmanager = {
         current: null,
         droppables: {
             "default": []
         },
         prepareOffsets: function(e, i) {
             var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                 a = i ? i.type : null,
                 r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
             t: for (s = 0; s < o.length; s++)
                 if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
                     for (n = 0; n < r.length; n++)
                         if (r[n] === o[s].element[0]) {
                             o[s].proportions().height = 0;
                             continue t
                         }
                     o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
                         width: o[s].element[0].offsetWidth,
                         height: o[s].element[0].offsetHeight
                     }))
                 }
         },
         drop: function(e, i) {
             var s = !1;
             return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                 this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
             }), s
         },
         dragStart: function(e, i) {
             e.element.parentsUntil("body").bind("scroll.droppable", function() {
                 e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
             })
         },
         drag: function(e, i) {
             e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                 if (!this.options.disabled && !this.greedyChild && this.visible) {
                     var s, n, o, a = t.ui.intersect(e, this, this.options.tolerance, i),
                         r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                     r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
                         return t(this).droppable("instance").options.scope === n
                     }), o.length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                 }
             })
         },
         dragStop: function(e, i) {
             e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
         }
     };
     var _ = (t.ui.droppable, "ui-effects-"),
         b = t;
     t.effects = {
             effect: {}
         },
         function(t, e) {
             function i(t, e, i) {
                 var s = c[e.type] || {};
                 return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : s.max < t ? s.max : t)
             }

             function s(e) {
                 var i = l(),
                     s = i._rgba = [];
                 return e = e.toLowerCase(), f(h, function(t, n) {
                     var o, a = n.re.exec(e),
                         r = a && n.parse(a),
                         h = n.space || "rgba";
                     return r ? (o = i[h](r), i[u[h].cache] = o[u[h].cache], s = i._rgba = o._rgba, !1) : void 0
                 }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), i) : o[e]
             }

             function n(t, e, i) {
                 return i = (i + 1) % 1, 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
             }
             var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                 r = /^([\-+])=\s*(\d+\.?\d*)/,
                 h = [{
                     re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                     parse: function(t) {
                         return [t[1], t[2], t[3], t[4]]
                     }
                 }, {
                     re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                     parse: function(t) {
                         return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                     }
                 }, {
                     re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                     parse: function(t) {
                         return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                     }
                 }, {
                     re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                     parse: function(t) {
                         return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                     }
                 }, {
                     re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                     space: "hsla",
                     parse: function(t) {
                         return [t[1], t[2] / 100, t[3] / 100, t[4]]
                     }
                 }],
                 l = t.Color = function(e, i, s, n) {
                     return new t.Color.fn.parse(e, i, s, n)
                 },
                 u = {
                     rgba: {
                         props: {
                             red: {
                                 idx: 0,
                                 type: "byte"
                             },
                             green: {
                                 idx: 1,
                                 type: "byte"
                             },
                             blue: {
                                 idx: 2,
                                 type: "byte"
                             }
                         }
                     },
                     hsla: {
                         props: {
                             hue: {
                                 idx: 0,
                                 type: "degrees"
                             },
                             saturation: {
                                 idx: 1,
                                 type: "percent"
                             },
                             lightness: {
                                 idx: 2,
                                 type: "percent"
                             }
                         }
                     }
                 },
                 c = {
                     "byte": {
                         floor: !0,
                         max: 255
                     },
                     percent: {
                         max: 1
                     },
                     degrees: {
                         mod: 360,
                         floor: !0
                     }
                 },
                 d = l.support = {},
                 p = t("<p>")[0],
                 f = t.each;
             p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function(t, e) {
                 e.cache = "_" + t, e.props.alpha = {
                     idx: 3,
                     type: "percent",
                     def: 1
                 }
             }), l.fn = t.extend(l.prototype, {
                 parse: function(n, a, r, h) {
                     if (n === e) return this._rgba = [null, null, null, null], this;
                     (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
                     var c = this,
                         d = t.type(n),
                         p = this._rgba = [];
                     return a !== e && (n = [n, a, r, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(u.rgba.props, function(t, e) {
                         p[e.idx] = i(n[e.idx], e)
                     }), this) : "object" === d ? (n instanceof l ? f(u, function(t, e) {
                         n[e.cache] && (c[e.cache] = n[e.cache].slice())
                     }) : f(u, function(e, s) {
                         var o = s.cache;
                         f(s.props, function(t, e) {
                             if (!c[o] && s.to) {
                                 if ("alpha" === t || null == n[t]) return;
                                 c[o] = s.to(c._rgba)
                             }
                             c[o][e.idx] = i(n[t], e, !0)
                         }), c[o] && t.inArray(null, c[o].slice(0, 3)) < 0 && (c[o][3] = 1, s.from && (c._rgba = s.from(c[o])))
                     }), this) : void 0
                 },
                 is: function(t) {
                     var e = l(t),
                         i = !0,
                         s = this;
                     return f(u, function(t, n) {
                         var o, a = e[n.cache];
                         return a && (o = s[n.cache] || n.to && n.to(s._rgba) || [], f(n.props, function(t, e) {
                             return null != a[e.idx] ? i = a[e.idx] === o[e.idx] : void 0
                         })), i
                     }), i
                 },
                 _space: function() {
                     var t = [],
                         e = this;
                     return f(u, function(i, s) {
                         e[s.cache] && t.push(i)
                     }), t.pop()
                 },
                 transition: function(t, e) {
                     var s = l(t),
                         n = s._space(),
                         o = u[n],
                         a = 0 === this.alpha() ? l("transparent") : this,
                         r = a[o.cache] || o.to(a._rgba),
                         h = r.slice();
                     return s = s[o.cache], f(o.props, function(t, n) {
                         var o = n.idx,
                             a = r[o],
                             l = s[o],
                             u = c[n.type] || {};
                         null !== l && (null === a ? h[o] = l : (u.mod && (l - a > u.mod / 2 ? a += u.mod : a - l > u.mod / 2 && (a -= u.mod)), h[o] = i((l - a) * e + a, n)))
                     }), this[n](h)
                 },
                 blend: function(e) {
                     if (1 === this._rgba[3]) return this;
                     var i = this._rgba.slice(),
                         s = i.pop(),
                         n = l(e)._rgba;
                     return l(t.map(i, function(t, e) {
                         return (1 - s) * n[e] + s * t
                     }))
                 },
                 toRgbaString: function() {
                     var e = "rgba(",
                         i = t.map(this._rgba, function(t, e) {
                             return null == t ? e > 2 ? 1 : 0 : t
                         });
                     return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                 },
                 toHslaString: function() {
                     var e = "hsla(",
                         i = t.map(this.hsla(), function(t, e) {
                             return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                         });
                     return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                 },
                 toHexString: function(e) {
                     var i = this._rgba.slice(),
                         s = i.pop();
                     return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                         return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                     }).join("")
                 },
                 toString: function() {
                     return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                 }
             }), l.fn.parse.prototype = l.fn, u.hsla.to = function(t) {
                 if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                 var e, i, s = t[0] / 255,
                     n = t[1] / 255,
                     o = t[2] / 255,
                     a = t[3],
                     r = Math.max(s, n, o),
                     h = Math.min(s, n, o),
                     l = r - h,
                     u = r + h,
                     c = .5 * u;
                 return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= c ? l / u : l / (2 - u), [Math.round(e) % 360, i, c, null == a ? 1 : a]
             }, u.hsla.from = function(t) {
                 if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                 var e = t[0] / 360,
                     i = t[1],
                     s = t[2],
                     o = t[3],
                     a = .5 >= s ? s * (1 + i) : s + i - s * i,
                     r = 2 * s - a;
                 return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
             }, f(u, function(s, n) {
                 var o = n.props,
                     a = n.cache,
                     h = n.to,
                     u = n.from;
                 l.fn[s] = function(s) {
                     if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice();
                     var n, r = t.type(s),
                         c = "array" === r || "object" === r ? s : arguments,
                         d = this[a].slice();
                     return f(o, function(t, e) {
                         var s = c["object" === r ? t : e.idx];
                         null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                     }), u ? (n = l(u(d)), n[a] = d, n) : l(d)
                 }, f(o, function(e, i) {
                     l.fn[e] || (l.fn[e] = function(n) {
                         var o, a = t.type(n),
                             h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
                             l = this[h](),
                             u = l[i.idx];
                         return "undefined" === a ? u : ("function" === a && (n = n.call(this, u), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = u + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
                     })
                 })
             }), l.hook = function(e) {
                 var i = e.split(" ");
                 f(i, function(e, i) {
                     t.cssHooks[i] = {
                         set: function(e, n) {
                             var o, a, r = "";
                             if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                                 if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
                                     for (a = "backgroundColor" === i ? e.parentNode : e;
                                         ("" === r || "transparent" === r) && a && a.style;) try {
                                         r = t.css(a, "backgroundColor"), a = a.parentNode
                                     } catch (h) {}
                                     n = n.blend(r && "transparent" !== r ? r : "_default")
                                 }
                                 n = n.toRgbaString()
                             }
                             try {
                                 e.style[i] = n
                             } catch (h) {}
                         }
                     }, t.fx.step[i] = function(e) {
                         e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                     }
                 })
             }, l.hook(a), t.cssHooks.borderColor = {
                 expand: function(t) {
                     var e = {};
                     return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                         e["border" + s + "Color"] = t
                     }), e
                 }
             }, o = t.Color.names = {
                 aqua: "#00ffff",
                 black: "#000000",
                 blue: "#0000ff",
                 fuchsia: "#ff00ff",
                 gray: "#808080",
                 green: "#008000",
                 lime: "#00ff00",
                 maroon: "#800000",
                 navy: "#000080",
                 olive: "#808000",
                 purple: "#800080",
                 red: "#ff0000",
                 silver: "#c0c0c0",
                 teal: "#008080",
                 white: "#ffffff",
                 yellow: "#ffff00",
                 transparent: [null, null, null, 0],
                 _default: "#ffffff"
             }
         }(b),
         function() {
             function e(e) {
                 var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                     o = {};
                 if (n && n.length && n[0] && n[n[0]])
                     for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
                 else
                     for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
                 return o
             }

             function i(e, i) {
                 var s, o, a = {};
                 for (s in i) o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
                 return a
             }
             var s = ["add", "remove", "toggle"],
                 n = {
                     border: 1,
                     borderBottom: 1,
                     borderColor: 1,
                     borderLeft: 1,
                     borderRight: 1,
                     borderTop: 1,
                     borderWidth: 1,
                     margin: 1,
                     padding: 1
                 };
             t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                 t.fx.step[i] = function(t) {
                     ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (b.style(t.elem, i, t.end), t.setAttr = !0)
                 }
             }), t.fn.addBack || (t.fn.addBack = function(t) {
                 return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
             }), t.effects.animateClass = function(n, o, a, r) {
                 var h = t.speed(o, a, r);
                 return this.queue(function() {
                     var o, a = t(this),
                         r = a.attr("class") || "",
                         l = h.children ? a.find("*").addBack() : a;
                     l = l.map(function() {
                         var i = t(this);
                         return {
                             el: i,
                             start: e(this)
                         }
                     }), o = function() {
                         t.each(s, function(t, e) {
                             n[e] && a[e + "Class"](n[e])
                         })
                     }, o(), l = l.map(function() {
                         return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
                     }), a.attr("class", r), l = l.map(function() {
                         var e = this,
                             i = t.Deferred(),
                             s = t.extend({}, h, {
                                 queue: !1,
                                 complete: function() {
                                     i.resolve(e)
                                 }
                             });
                         return this.el.animate(this.diff, s), i.promise()
                     }), t.when.apply(t, l.get()).done(function() {
                         o(), t.each(arguments, function() {
                             var e = this.el;
                             t.each(this.diff, function(t) {
                                 e.css(t, "")
                             })
                         }), h.complete.call(a[0])
                     })
                 })
             }, t.fn.extend({
                 addClass: function(e) {
                     return function(i, s, n, o) {
                         return s ? t.effects.animateClass.call(this, {
                             add: i
                         }, s, n, o) : e.apply(this, arguments)
                     }
                 }(t.fn.addClass),
                 removeClass: function(e) {
                     return function(i, s, n, o) {
                         return arguments.length > 1 ? t.effects.animateClass.call(this, {
                             remove: i
                         }, s, n, o) : e.apply(this, arguments)
                     }
                 }(t.fn.removeClass),
                 toggleClass: function(e) {
                     return function(i, s, n, o, a) {
                         return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
                             add: i
                         } : {
                             remove: i
                         }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                             toggle: i
                         }, s, n, o)
                     }
                 }(t.fn.toggleClass),
                 switchClass: function(e, i, s, n, o) {
                     return t.effects.animateClass.call(this, {
                         add: i,
                         remove: e
                     }, s, n, o)
                 }
             })
         }(),
         function() {
             function e(e, i, s, n) {
                 return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                     effect: e
                 }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
             }

             function i(e) {
                 return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
             }
             t.extend(t.effects, {
                 version: "1.11.2",
                 save: function(t, e) {
                     for (var i = 0; i < e.length; i++) null !== e[i] && t.data(_ + e[i], t[0].style[e[i]])
                 },
                 restore: function(t, e) {
                     var i, s;
                     for (s = 0; s < e.length; s++) null !== e[s] && (i = t.data(_ + e[s]), void 0 === i && (i = ""), t.css(e[s], i))
                 },
                 setMode: function(t, e) {
                     return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                 },
                 getBaseline: function(t, e) {
                     var i, s;
                     switch (t[0]) {
                         case "top":
                             i = 0;
                             break;
                         case "middle":
                             i = .5;
                             break;
                         case "bottom":
                             i = 1;
                             break;
                         default:
                             i = t[0] / e.height
                     }
                     switch (t[1]) {
                         case "left":
                             s = 0;
                             break;
                         case "center":
                             s = .5;
                             break;
                         case "right":
                             s = 1;
                             break;
                         default:
                             s = t[1] / e.width
                     }
                     return {
                         x: s,
                         y: i
                     }
                 },
                 createWrapper: function(e) {
                     if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                     var i = {
                             width: e.outerWidth(!0),
                             height: e.outerHeight(!0),
                             "float": e.css("float")
                         },
                         s = t("<div></div>").addClass("ui-effects-wrapper").css({
                             fontSize: "100%",
                             background: "transparent",
                             border: "none",
                             margin: 0,
                             padding: 0
                         }),
                         n = {
                             width: e.width(),
                             height: e.height()
                         },
                         o = document.activeElement;
                     try {
                         o.id
                     } catch (a) {
                         o = document.body
                     }
                     return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({
                         position: "relative"
                     }), e.css({
                         position: "relative"
                     })) : (t.extend(i, {
                         position: e.css("position"),
                         zIndex: e.css("z-index")
                     }), t.each(["top", "left", "bottom", "right"], function(t, s) {
                         i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                     }), e.css({
                         position: "relative",
                         top: 0,
                         left: 0,
                         right: "auto",
                         bottom: "auto"
                     })), e.css(n), s.css(i).show()
                 },
                 removeWrapper: function(e) {
                     var i = document.activeElement;
                     return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                 },
                 setTransition: function(e, i, s, n) {
                     return n = n || {}, t.each(i, function(t, i) {
                         var o = e.cssUnit(i);
                         o[0] > 0 && (n[i] = o[0] * s + o[1])
                     }), n
                 }
             }), t.fn.extend({
                 effect: function() {
                     function i(e) {
                         function i() {
                             t.isFunction(o) && o.call(n[0]), t.isFunction(e) && e()
                         }
                         var n = t(this),
                             o = s.complete,
                             r = s.mode;
                         (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), i()) : a.call(n[0], s, i)
                     }
                     var s = e.apply(this, arguments),
                         n = s.mode,
                         o = s.queue,
                         a = t.effects.effect[s.effect];
                     return t.fx.off || !a ? n ? this[n](s.duration, s.complete) : this.each(function() {
                         s.complete && s.complete.call(this)
                     }) : o === !1 ? this.each(i) : this.queue(o || "fx", i)
                 },
                 show: function(t) {
                     return function(s) {
                         if (i(s)) return t.apply(this, arguments);
                         var n = e.apply(this, arguments);
                         return n.mode = "show", this.effect.call(this, n)
                     }
                 }(t.fn.show),
                 hide: function(t) {
                     return function(s) {
                         if (i(s)) return t.apply(this, arguments);
                         var n = e.apply(this, arguments);
                         return n.mode = "hide", this.effect.call(this, n)
                     }
                 }(t.fn.hide),
                 toggle: function(t) {
                     return function(s) {
                         if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
                         var n = e.apply(this, arguments);
                         return n.mode = "toggle", this.effect.call(this, n)
                     }
                 }(t.fn.toggle),
                 cssUnit: function(e) {
                     var i = this.css(e),
                         s = [];
                     return t.each(["em", "px", "%", "pt"], function(t, e) {
                         i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                     }), s
                 }
             })
         }(),
         function() {
             var e = {};
             t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
                 e[i] = function(e) {
                     return Math.pow(e, t + 2)
                 }
             }), t.extend(e, {
                 Sine: function(t) {
                     return 1 - Math.cos(t * Math.PI / 2)
                 },
                 Circ: function(t) {
                     return 1 - Math.sqrt(1 - t * t)
                 },
                 Elastic: function(t) {
                     return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                 },
                 Back: function(t) {
                     return t * t * (3 * t - 2)
                 },
                 Bounce: function(t) {
                     for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                     return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                 }
             }), t.each(e, function(e, i) {
                 t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                     return 1 - i(1 - t)
                 }, t.easing["easeInOut" + e] = function(t) {
                     return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                 }
             })
         }();
     t.effects, t.effects.effect.blind = function(e, i) {
         var s, n, o, a = t(this),
             r = /up|down|vertical/,
             h = /up|left|vertical|horizontal/,
             l = ["position", "top", "bottom", "left", "right", "height", "width"],
             u = t.effects.setMode(a, e.mode || "hide"),
             c = e.direction || "up",
             d = r.test(c),
             p = d ? "height" : "width",
             f = d ? "top" : "left",
             m = h.test(c),
             g = {},
             v = "show" === u;
         a.parent().is(".ui-effects-wrapper") ? t.effects.save(a.parent(), l) : t.effects.save(a, l), a.show(), s = t.effects.createWrapper(a).css({
             overflow: "hidden"
         }), n = s[p](), o = parseFloat(s.css(f)) || 0, g[p] = v ? n : 0, m || (a.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
             position: "absolute"
         }), g[f] = v ? o : n + o), v && (s.css(p, 0), m || s.css(f, o + n)), s.animate(g, {
             duration: e.duration,
             easing: e.easing,
             queue: !1,
             complete: function() {
                 "hide" === u && a.hide(), t.effects.restore(a, l), t.effects.removeWrapper(a), i()
             }
         })
     }, t.effects.effect.bounce = function(e, i) {
         var s, n, o, a = t(this),
             r = ["position", "top", "bottom", "left", "right", "height", "width"],
             h = t.effects.setMode(a, e.mode || "effect"),
             l = "hide" === h,
             u = "show" === h,
             c = e.direction || "up",
             d = e.distance,
             p = e.times || 5,
             f = 2 * p + (u || l ? 1 : 0),
             m = e.duration / f,
             g = e.easing,
             v = "up" === c || "down" === c ? "top" : "left",
             _ = "up" === c || "left" === c,
             b = a.queue(),
             y = b.length;
         for ((u || l) && r.push("opacity"), t.effects.save(a, r), a.show(), t.effects.createWrapper(a), d || (d = a["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (o = {
                 opacity: 1
             }, o[v] = 0, a.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(o, m, g)), l && (d /= Math.pow(2, p - 1)), o = {}, o[v] = 0, s = 0; p > s; s++) n = {}, n[v] = (_ ? "-=" : "+=") + d, a.animate(n, m, g).animate(o, m, g), d = l ? 2 * d : d / 2;
         l && (n = {
             opacity: 0
         }, n[v] = (_ ? "-=" : "+=") + d, a.animate(n, m, g)), a.queue(function() {
             l && a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i()
         }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), a.dequeue()
     }, t.effects.effect.clip = function(e, i) {
         var s, n, o, a = t(this),
             r = ["position", "top", "bottom", "left", "right", "height", "width"],
             h = t.effects.setMode(a, e.mode || "hide"),
             l = "show" === h,
             u = e.direction || "vertical",
             c = "vertical" === u,
             d = c ? "height" : "width",
             p = c ? "top" : "left",
             f = {};
         t.effects.save(a, r), a.show(), s = t.effects.createWrapper(a).css({
             overflow: "hidden"
         }), n = "IMG" === a[0].tagName ? s : a, o = n[d](), l && (n.css(d, 0), n.css(p, o / 2)), f[d] = l ? o : 0, f[p] = l ? 0 : o / 2, n.animate(f, {
             queue: !1,
             duration: e.duration,
             easing: e.easing,
             complete: function() {
                 l || a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i()
             }
         })
     }, t.effects.effect.drop = function(e, i) {
         var s, n = t(this),
             o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
             a = t.effects.setMode(n, e.mode || "hide"),
             r = "show" === a,
             h = e.direction || "left",
             l = "up" === h || "down" === h ? "top" : "left",
             u = "up" === h || "left" === h ? "pos" : "neg",
             c = {
                 opacity: r ? 1 : 0
             };
         t.effects.save(n, o), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === u ? -s : s), c[l] = (r ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + s, n.animate(c, {
             queue: !1,
             duration: e.duration,
             easing: e.easing,
             complete: function() {
                 "hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
             }
         })
     }, t.effects.effect.explode = function(e, i) {
         function s() {
             b.push(this), b.length === c * d && n()
         }

         function n() {
             p.css({
                 visibility: "visible"
             }), t(b).remove(), m || p.hide(), i()
         }
         var o, a, r, h, l, u, c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
             d = c,
             p = t(this),
             f = t.effects.setMode(p, e.mode || "hide"),
             m = "show" === f,
             g = p.show().css("visibility", "hidden").offset(),
             v = Math.ceil(p.outerWidth() / d),
             _ = Math.ceil(p.outerHeight() / c),
             b = [];
         for (o = 0; c > o; o++)
             for (h = g.top + o * _, u = o - (c - 1) / 2, a = 0; d > a; a++) r = g.left + a * v, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                 position: "absolute",
                 visibility: "visible",
                 left: -a * v,
                 top: -o * _
             }).parent().addClass("ui-effects-explode").css({
                 position: "absolute",
                 overflow: "hidden",
                 width: v,
                 height: _,
                 left: r + (m ? l * v : 0),
                 top: h + (m ? u * _ : 0),
                 opacity: m ? 0 : 1
             }).animate({
                 left: r + (m ? 0 : l * v),
                 top: h + (m ? 0 : u * _),
                 opacity: m ? 1 : 0
             }, e.duration || 500, e.easing, s)
     }, t.effects.effect.fade = function(e, i) {
         var s = t(this),
             n = t.effects.setMode(s, e.mode || "toggle");
         s.animate({
             opacity: n
         }, {
             queue: !1,
             duration: e.duration,
             easing: e.easing,
             complete: i
         })
     }, t.effects.effect.fold = function(e, i) {
         var s, n, o = t(this),
             a = ["position", "top", "bottom", "left", "right", "height", "width"],
             r = t.effects.setMode(o, e.mode || "hide"),
             h = "show" === r,
             l = "hide" === r,
             u = e.size || 15,
             c = /([0-9]+)%/.exec(u),
             d = !!e.horizFirst,
             p = h !== d,
             f = p ? ["width", "height"] : ["height", "width"],
             m = e.duration / 2,
             g = {},
             v = {};
         t.effects.save(o, a), o.show(), s = t.effects.createWrapper(o).css({
             overflow: "hidden"
         }), n = p ? [s.width(), s.height()] : [s.height(), s.width()], c && (u = parseInt(c[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(d ? {
             height: 0,
             width: u
         } : {
             height: u,
             width: 0
         }), g[f[0]] = h ? n[0] : u, v[f[1]] = h ? n[1] : 0, s.animate(g, m, e.easing).animate(v, m, e.easing, function() {
             l && o.hide(), t.effects.restore(o, a), t.effects.removeWrapper(o), i()
         })
     }, t.effects.effect.highlight = function(e, i) {
         var s = t(this),
             n = ["backgroundImage", "backgroundColor", "opacity"],
             o = t.effects.setMode(s, e.mode || "show"),
             a = {
                 backgroundColor: s.css("backgroundColor")
             };
         "hide" === o && (a.opacity = 0), t.effects.save(s, n), s.show().css({
             backgroundImage: "none",
             backgroundColor: e.color || "#ffff99"
         }).animate(a, {
             queue: !1,
             duration: e.duration,
             easing: e.easing,
             complete: function() {
                 "hide" === o && s.hide(), t.effects.restore(s, n), i()
             }
         })
     }, t.effects.effect.size = function(e, i) {
         var s, n, o, a = t(this),
             r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
             h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
             l = ["width", "height", "overflow"],
             u = ["fontSize"],
             c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
             d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
             p = t.effects.setMode(a, e.mode || "effect"),
             f = e.restore || "effect" !== p,
             m = e.scale || "both",
             g = e.origin || ["middle", "center"],
             v = a.css("position"),
             _ = f ? r : h,
             b = {
                 height: 0,
                 width: 0,
                 outerHeight: 0,
                 outerWidth: 0
             };
         "show" === p && a.show(), s = {
             height: a.height(),
             width: a.width(),
             outerHeight: a.outerHeight(),
             outerWidth: a.outerWidth()
         }, "toggle" === e.mode && "show" === p ? (a.from = e.to || b, a.to = e.from || s) : (a.from = e.from || ("show" === p ? b : s), a.to = e.to || ("hide" === p ? b : s)), o = {
             from: {
                 y: a.from.height / s.height,
                 x: a.from.width / s.width
             },
             to: {
                 y: a.to.height / s.height,
                 x: a.to.width / s.width
             }
         }, ("box" === m || "both" === m) && (o.from.y !== o.to.y && (_ = _.concat(c), a.from = t.effects.setTransition(a, c, o.from.y, a.from), a.to = t.effects.setTransition(a, c, o.to.y, a.to)), o.from.x !== o.to.x && (_ = _.concat(d), a.from = t.effects.setTransition(a, d, o.from.x, a.from), a.to = t.effects.setTransition(a, d, o.to.x, a.to))), ("content" === m || "both" === m) && o.from.y !== o.to.y && (_ = _.concat(u).concat(l), a.from = t.effects.setTransition(a, u, o.from.y, a.from), a.to = t.effects.setTransition(a, u, o.to.y, a.to)), t.effects.save(a, _), a.show(), t.effects.createWrapper(a), a.css("overflow", "hidden").css(a.from), g && (n = t.effects.getBaseline(g, s), a.from.top = (s.outerHeight - a.outerHeight()) * n.y, a.from.left = (s.outerWidth - a.outerWidth()) * n.x, a.to.top = (s.outerHeight - a.to.outerHeight) * n.y, a.to.left = (s.outerWidth - a.to.outerWidth) * n.x), a.css(a.from), ("content" === m || "both" === m) && (c = c.concat(["marginTop", "marginBottom"]).concat(u), d = d.concat(["marginLeft", "marginRight"]), l = r.concat(c).concat(d), a.find("*[width]").each(function() {
             var i = t(this),
                 s = {
                     height: i.height(),
                     width: i.width(),
                     outerHeight: i.outerHeight(),
                     outerWidth: i.outerWidth()
                 };
             f && t.effects.save(i, l), i.from = {
                 height: s.height * o.from.y,
                 width: s.width * o.from.x,
                 outerHeight: s.outerHeight * o.from.y,
                 outerWidth: s.outerWidth * o.from.x
             }, i.to = {
                 height: s.height * o.to.y,
                 width: s.width * o.to.x,
                 outerHeight: s.height * o.to.y,
                 outerWidth: s.width * o.to.x
             }, o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, c, o.from.y, i.from), i.to = t.effects.setTransition(i, c, o.to.y, i.to)), o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, d, o.from.x, i.from), i.to = t.effects.setTransition(i, d, o.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
                 f && t.effects.restore(i, l)
             })
         })), a.animate(a.to, {
             queue: !1,
             duration: e.duration,
             easing: e.easing,
             complete: function() {
                 0 === a.to.opacity && a.css("opacity", a.from.opacity), "hide" === p && a.hide(), t.effects.restore(a, _), f || ("static" === v ? a.css({
                     position: "relative",
                     top: a.to.top,
                     left: a.to.left
                 }) : t.each(["top", "left"], function(t, e) {
                     a.css(e, function(e, i) {
                         var s = parseInt(i, 10),
                             n = t ? a.to.left : a.to.top;
                         return "auto" === i ? n + "px" : s + n + "px"
                     })
                 })), t.effects.removeWrapper(a), i()
             }
         })
     }, t.effects.effect.scale = function(e, i) {
         var s = t(this),
             n = t.extend(!0, {}, e),
             o = t.effects.setMode(s, e.mode || "effect"),
             a = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
             r = e.direction || "both",
             h = e.origin,
             l = {
                 height: s.height(),
                 width: s.width(),
                 outerHeight: s.outerHeight(),
                 outerWidth: s.outerWidth()
             },
             u = {
                 y: "horizontal" !== r ? a / 100 : 1,
                 x: "vertical" !== r ? a / 100 : 1
             };
         n.effect = "size", n.queue = !1, n.complete = i, "effect" !== o && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === o ? {
             height: 0,
             width: 0,
             outerHeight: 0,
             outerWidth: 0
         } : l), n.to = {
             height: l.height * u.y,
             width: l.width * u.x,
             outerHeight: l.outerHeight * u.y,
             outerWidth: l.outerWidth * u.x
         }, n.fade && ("show" === o && (n.from.opacity = 0, n.to.opacity = 1), "hide" === o && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
     }, t.effects.effect.puff = function(e, i) {
         var s = t(this),
             n = t.effects.setMode(s, e.mode || "hide"),
             o = "hide" === n,
             a = parseInt(e.percent, 10) || 150,
             r = a / 100,
             h = {
                 height: s.height(),
                 width: s.width(),
                 outerHeight: s.outerHeight(),
                 outerWidth: s.outerWidth()
             };
         t.extend(e, {
             effect: "scale",
             queue: !1,
             fade: !0,
             mode: n,
             complete: i,
             percent: o ? a : 100,
             from: o ? h : {
                 height: h.height * r,
                 width: h.width * r,
                 outerHeight: h.outerHeight * r,
                 outerWidth: h.outerWidth * r
             }
         }), s.effect(e)
     }, t.effects.effect.pulsate = function(e, i) {
         var s, n = t(this),
             o = t.effects.setMode(n, e.mode || "show"),
             a = "show" === o,
             r = "hide" === o,
             h = a || "hide" === o,
             l = 2 * (e.times || 5) + (h ? 1 : 0),
             u = e.duration / l,
             c = 0,
             d = n.queue(),
             p = d.length;
         for ((a || !n.is(":visible")) && (n.css("opacity", 0).show(), c = 1), s = 1; l > s; s++) n.animate({
             opacity: c
         }, u, e.easing), c = 1 - c;
         n.animate({
             opacity: c
         }, u, e.easing), n.queue(function() {
             r && n.hide(), i()
         }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, l + 1))), n.dequeue()
     }, t.effects.effect.shake = function(e, i) {
         var s, n = t(this),
             o = ["position", "top", "bottom", "left", "right", "height", "width"],
             a = t.effects.setMode(n, e.mode || "effect"),
             r = e.direction || "left",
             h = e.distance || 20,
             l = e.times || 3,
             u = 2 * l + 1,
             c = Math.round(e.duration / u),
             d = "up" === r || "down" === r ? "top" : "left",
             p = "up" === r || "left" === r,
             f = {},
             m = {},
             g = {},
             v = n.queue(),
             _ = v.length;
         for (t.effects.save(n, o), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + h, m[d] = (p ? "+=" : "-=") + 2 * h, g[d] = (p ? "-=" : "+=") + 2 * h, n.animate(f, c, e.easing), s = 1; l > s; s++) n.animate(m, c, e.easing).animate(g, c, e.easing);
         n.animate(m, c, e.easing).animate(f, c / 2, e.easing).queue(function() {
             "hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
         }), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, u + 1))), n.dequeue()
     }, t.effects.effect.slide = function(e, i) {
         var s, n = t(this),
             o = ["position", "top", "bottom", "left", "right", "width", "height"],
             a = t.effects.setMode(n, e.mode || "show"),
             r = "show" === a,
             h = e.direction || "left",
             l = "up" === h || "down" === h ? "top" : "left",
             u = "up" === h || "left" === h,
             c = {};
         t.effects.save(n, o), n.show(), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({
             overflow: "hidden"
         }), r && n.css(l, u ? isNaN(s) ? "-" + s : -s : s), c[l] = (r ? u ? "+=" : "-=" : u ? "-=" : "+=") + s, n.animate(c, {
             queue: !1,
             duration: e.duration,
             easing: e.easing,
             complete: function() {
                 "hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
             }
         })
     }, t.effects.effect.transfer = function(e, i) {
         var s = t(this),
             n = t(e.to),
             o = "fixed" === n.css("position"),
             a = t("body"),
             r = o ? a.scrollTop() : 0,
             h = o ? a.scrollLeft() : 0,
             l = n.offset(),
             u = {
                 top: l.top - r,
                 left: l.left - h,
                 height: n.innerHeight(),
                 width: n.innerWidth()
             },
             c = s.offset(),
             d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
                 top: c.top - r,
                 left: c.left - h,
                 height: s.innerHeight(),
                 width: s.innerWidth(),
                 position: o ? "fixed" : "absolute"
             }).animate(u, e.duration, e.easing, function() {
                 d.remove(), i()
             })
     }, t.widget("ui.progressbar", {
         version: "1.11.2",
         options: {
             max: 100,
             value: 0,
             change: null,
             complete: null
         },
         min: 0,
         _create: function() {
             this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                 role: "progressbar",
                 "aria-valuemin": this.min
             }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
         },
         _destroy: function() {
             this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
         },
         value: function(t) {
             return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
         },
         _constrainedValue: function(t) {
             return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
         },
         _setOptions: function(t) {
             var e = t.value;
             delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
         },
         _setOption: function(t, e) {
             "max" === t && (e = Math.max(this.min, e)), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
         },
         _percentage: function() {
             return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
         },
         _refreshValue: function() {
             var e = this.options.value,
                 i = this._percentage();
             this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                 "aria-valuemax": this.options.max,
                 "aria-valuenow": e
             }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
         }
     }), t.widget("ui.selectable", t.ui.mouse, {
         version: "1.11.2",
         options: {
             appendTo: "body",
             autoRefresh: !0,
             distance: 0,
             filter: "*",
             tolerance: "touch",
             selected: null,
             selecting: null,
             start: null,
             stop: null,
             unselected: null,
             unselecting: null
         },
         _create: function() {
             var e, i = this;
             this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                 e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function() {
                     var e = t(this),
                         i = e.offset();
                     t.data(this, "selectable-item", {
                         element: this,
                         $element: e,
                         left: i.left,
                         top: i.top,
                         right: i.left + e.outerWidth(),
                         bottom: i.top + e.outerHeight(),
                         startselected: !1,
                         selected: e.hasClass("ui-selected"),
                         selecting: e.hasClass("ui-selecting"),
                         unselecting: e.hasClass("ui-unselecting")
                     })
                 })
             }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
         },
         _destroy: function() {
             this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
         },
         _mouseStart: function(e) {
             var i = this,
                 s = this.options;
             this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                 left: e.pageX,
                 top: e.pageY,
                 width: 0,
                 height: 0
             }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                 var s = t.data(this, "selectable-item");
                 s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
                     unselecting: s.element
                 }))
             }), t(e.target).parents().addBack().each(function() {
                 var s, n = t.data(this, "selectable-item");
                 return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
                     selecting: n.element
                 }) : i._trigger("unselecting", e, {
                     unselecting: n.element
                 }), !1) : void 0
             }))
         },
         _mouseDrag: function(e) {
             if (this.dragged = !0, !this.options.disabled) {
                 var i, s = this,
                     n = this.options,
                     o = this.opos[0],
                     a = this.opos[1],
                     r = e.pageX,
                     h = e.pageY;
                 return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({
                     left: o,
                     top: a,
                     width: r - o,
                     height: h - a
                 }), this.selectees.each(function() {
                     var i = t.data(this, "selectable-item"),
                         l = !1;
                     i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || i.right < o || i.top > h || i.bottom < a) : "fit" === n.tolerance && (l = i.left > o && i.right < r && i.top > a && i.bottom < h), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
                         selecting: i.element
                     }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
                         unselecting: i.element
                     }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
                         unselecting: i.element
                     })))))
                 }), !1
             }
         },
         _mouseStop: function(e) {
             var i = this;
             return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                 var s = t.data(this, "selectable-item");
                 s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
                     unselected: s.element
                 })
             }), t(".ui-selecting", this.element[0]).each(function() {
                 var s = t.data(this, "selectable-item");
                 s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                     selected: s.element
                 })
             }), this._trigger("stop", e), this.helper.remove(), !1
         }
     }), t.widget("ui.selectmenu", {
         version: "1.11.2",
         defaultElement: "<select>",
         options: {
             appendTo: null,
             disabled: null,
             icons: {
                 button: "ui-icon-triangle-1-s"
             },
             position: {
                 my: "left top",
                 at: "left bottom",
                 collision: "none"
             },
             width: null,
             change: null,
             close: null,
             focus: null,
             open: null,
             select: null
         },
         _create: function() {
             var t = this.element.uniqueId().attr("id");
             this.ids = {
                 element: t,
                 button: t + "-button",
                 menu: t + "-menu"
             }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
         },
         _drawButton: function() {
             var e = this,
                 i = this.element.attr("tabindex");
             this.label = t("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
                 click: function(t) {
                     this.button.focus(), t.preventDefault()
                 }
             }), this.element.hide(), this.button = t("<span>", {
                 "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                 tabindex: i || this.options.disabled ? -1 : 0,
                 id: this.ids.button,
                 role: "combobox",
                 "aria-expanded": "false",
                 "aria-autocomplete": "list",
                 "aria-owns": this.ids.menu,
                 "aria-haspopup": "true"
             }).insertAfter(this.element), t("<span>", {
                 "class": "ui-icon " + this.options.icons.button
             }).prependTo(this.button), this.buttonText = t("<span>", {
                 "class": "ui-selectmenu-text"
             }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                 e.menuItems || e._refreshMenu()
             }), this._hoverable(this.button), this._focusable(this.button)
         },
         _drawMenu: function() {
             var e = this;
             this.menu = t("<ul>", {
                 "aria-hidden": "true",
                 "aria-labelledby": this.ids.button,
                 id: this.ids.menu
             }), this.menuWrap = t("<div>", {
                 "class": "ui-selectmenu-menu ui-front"
             }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                 role: "listbox",
                 select: function(t, i) {
                     t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
                 },
                 focus: function(t, i) {
                     var s = i.item.data("ui-selectmenu-item");
                     null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
                         item: s
                     }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
                 }
             }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                 return !1
             }, this.menuInstance._isDivider = function() {
                 return !1
             }
         },
         refresh: function() {
             this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
         },
         _refreshMenu: function() {
             this.menu.empty();
             var t, e = this.element.find("option");
             e.length && (this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
         },
         open: function(t) {
             this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))
         },
         _position: function() {
             this.menuWrap.position(t.extend({ of: this.button
             }, this.options.position))
         },
         close: function(t) {
             this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
         },
         widget: function() {
             return this.button
         },
         menuWidget: function() {
             return this.menu
         },
         _renderMenu: function(e, i) {
             var s = this,
                 n = "";
             t.each(i, function(i, o) {
                 o.optgroup !== n && (t("<li>", {
                     "class": "ui-selectmenu-optgroup ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                     text: o.optgroup
                 }).appendTo(e), n = o.optgroup), s._renderItemData(e, o)
             })
         },
         _renderItemData: function(t, e) {
             return this._renderItem(t, e).data("ui-selectmenu-item", e)
         },
         _renderItem: function(e, i) {
             var s = t("<li>");
             return i.disabled && s.addClass("ui-state-disabled"), this._setText(s, i.label), s.appendTo(e)
         },
         _setText: function(t, e) {
             e ? t.text(e) : t.html("&#160;")
         },
         _move: function(t, e) {
             var i, s, n = ".ui-menu-item";
             this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), s.length && this.menuInstance.focus(e, s)
         },
         _getSelectedItem: function() {
             return this.menuItems.eq(this.element[0].selectedIndex)
         },
         _toggle: function(t) {
             this[this.isOpen ? "close" : "open"](t)
         },
         _setSelection: function() {
             var t;
             this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
         },
         _documentClick: {
             mousedown: function(e) {
                 this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(e))
             }
         },
         _buttonEvents: {
             mousedown: function() {
                 var t;
                 window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
             },
             click: function(t) {
                 this._setSelection(), this._toggle(t)
             },
             keydown: function(e) {
                 var i = !0;
                 switch (e.keyCode) {
                     case t.ui.keyCode.TAB:
                     case t.ui.keyCode.ESCAPE:
                         this.close(e), i = !1;
                         break;
                     case t.ui.keyCode.ENTER:
                         this.isOpen && this._selectFocusedItem(e);
                         break;
                     case t.ui.keyCode.UP:
                         e.altKey ? this._toggle(e) : this._move("prev", e);
                         break;
                     case t.ui.keyCode.DOWN:
                         e.altKey ? this._toggle(e) : this._move("next", e);
                         break;
                     case t.ui.keyCode.SPACE:
                         this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                         break;
                     case t.ui.keyCode.LEFT:
                         this._move("prev", e);
                         break;
                     case t.ui.keyCode.RIGHT:
                         this._move("next", e);
                         break;
                     case t.ui.keyCode.HOME:
                     case t.ui.keyCode.PAGE_UP:
                         this._move("first", e);
                         break;
                     case t.ui.keyCode.END:
                     case t.ui.keyCode.PAGE_DOWN:
                         this._move("last", e);
                         break;
                     default:
                         this.menu.trigger(e), i = !1
                 }
                 i && e.preventDefault()
             }
         },
         _selectFocusedItem: function(t) {
             var e = this.menuItems.eq(this.focusIndex);
             e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
         },
         _select: function(t, e) {
             var i = this.element[0].selectedIndex;
             this.element[0].selectedIndex = t.index, this._setText(this.buttonText, t.label), this._setAria(t), this._trigger("select", e, {
                 item: t
             }), t.index !== i && this._trigger("change", e, {
                 item: t
             }), this.close(e)
         },
         _setAria: function(t) {
             var e = this.menuItems.eq(t.index).attr("id");
             this.button.attr({
                 "aria-labelledby": e,
                 "aria-activedescendant": e
             }), this.menu.attr("aria-activedescendant", e)
         },
         _setOption: function(t, e) {
             "icons" === t && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button), this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "disabled" === t && (this.menuInstance.option("disabled", e), this.button.toggleClass("ui-state-disabled", e).attr("aria-disabled", e), this.element.prop("disabled", e), e ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === t && this._resizeButton()
         },
         _appendTo: function() {
             var e = this.options.appendTo;
             return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
         },
         _toggleAttr: function() {
             this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
         },
         _resizeButton: function() {
             var t = this.options.width;
             t || (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t)
         },
         _resizeMenu: function() {
             this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
         },
         _getCreateOptions: function() {
             return {
                 disabled: this.element.prop("disabled")
             }
         },
         _parseOptions: function(e) {
             var i = [];
             e.each(function(e, s) {
                 var n = t(s),
                     o = n.parent("optgroup");
                 i.push({
                     element: n,
                     index: e,
                     value: n.attr("value"),
                     label: n.text(),
                     optgroup: o.attr("label") || "",
                     disabled: o.prop("disabled") || n.prop("disabled")
                 })
             }), this.items = i
         },
         _destroy: function() {
             this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
         }
     }), t.widget("ui.slider", t.ui.mouse, {
         version: "1.11.2",
         widgetEventPrefix: "slide",
         options: {
             animate: !1,
             distance: 0,
             max: 100,
             min: 0,
             orientation: "horizontal",
             range: !1,
             step: 1,
             value: 0,
             values: null,
             change: null,
             slide: null,
             start: null,
             stop: null
         },
         numPages: 5,
         _create: function() {
             this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
         },
         _refresh: function() {
             this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
         },
         _createHandles: function() {
             var e, i, s = this.options,
                 n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                 o = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                 a = [];
             for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) a.push(o);
             this.handles = n.add(t(a.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                 t(this).data("ui-slider-handle-index", e)
             })
         },
         _createRange: function() {
             var e = this.options,
                 i = "";
             e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                 left: "",
                 bottom: ""
             }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
         },
         _setupEvents: function() {
             this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
         },
         _destroy: function() {
             this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
         },
         _mouseCapture: function(e) {
             var i, s, n, o, a, r, h, l, u = this,
                 c = this.options;
             return c.disabled ? !1 : (this.elementSize = {
                 width: this.element.outerWidth(),
                 height: this.element.outerHeight()
             }, this.elementOffset = this.element.offset(), i = {
                 x: e.pageX,
                 y: e.pageY
             }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                 var i = Math.abs(s - u.values(e));
                 (n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i, o = t(this), a = e)
             }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, o.addClass("ui-state-active").focus(), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                 left: 0,
                 top: 0
             } : {
                 left: e.pageX - h.left - o.width() / 2,
                 top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
             }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
         },
         _mouseStart: function() {
             return !0
         },
         _mouseDrag: function(t) {
             var e = {
                     x: t.pageX,
                     y: t.pageY
                 },
                 i = this._normValueFromMouse(e);
             return this._slide(t, this._handleIndex, i), !1
         },
         _mouseStop: function(t) {
             return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
         },
         _detectOrientation: function() {
             this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
         },
         _normValueFromMouse: function(t) {
             var e, i, s, n, o;
             return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
         },
         _start: function(t, e) {
             var i = {
                 handle: this.handles[e],
                 value: this.value()
             };
             return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
         },
         _slide: function(t, e, i) {
             var s, n, o;
             this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, o = this._trigger("slide", t, {
                 handle: this.handles[e],
                 value: i,
                 values: n
             }), s = this.values(e ? 0 : 1), o !== !1 && this.values(e, i))) : i !== this.value() && (o = this._trigger("slide", t, {
                 handle: this.handles[e],
                 value: i
             }), o !== !1 && this.value(i))
         },
         _stop: function(t, e) {
             var i = {
                 handle: this.handles[e],
                 value: this.value()
             };
             this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
         },
         _change: function(t, e) {
             if (!this._keySliding && !this._mouseSliding) {
                 var i = {
                     handle: this.handles[e],
                     value: this.value()
                 };
                 this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
             }
         },
         value: function(t) {
             return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
         },
         values: function(e, i) {
             var s, n, o;
             if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
             if (!arguments.length) return this._values();
             if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
             for (s = this.options.values, n = arguments[0], o = 0; o < s.length; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
             this._refreshValue()
         },
         _setOption: function(e, i) {
             var s, n = 0;
             switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!i), this._super(e, i), e) {
                 case "orientation":
                     this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                     break;
                 case "value":
                     this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                     break;
                 case "values":
                     for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                     this._animateOff = !1;
                     break;
                 case "step":
                 case "min":
                 case "max":
                     this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                     break;
                 case "range":
                     this._animateOff = !0, this._refresh(), this._animateOff = !1
             }
         },
         _value: function() {
             var t = this.options.value;
             return t = this._trimAlignValue(t)
         },
         _values: function(t) {
             var e, i, s;
             if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
             if (this.options.values && this.options.values.length) {
                 for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
                 return i
             }
             return []
         },
         _trimAlignValue: function(t) {
             if (t <= this._valueMin()) return this._valueMin();
             if (t >= this._valueMax()) return this._valueMax();
             var e = this.options.step > 0 ? this.options.step : 1,
                 i = (t - this._valueMin()) % e,
                 s = t - i;
             return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
         },
         _calculateNewMax: function() {
             var t = (this.options.max - this._valueMin()) % this.options.step;
             this.max = this.options.max - t
         },
         _valueMin: function() {
             return this.options.min
         },
         _valueMax: function() {
             return this.max
         },
         _refreshValue: function() {
             var e, i, s, n, o, a = this.options.range,
                 r = this.options,
                 h = this,
                 l = this._animateOff ? !1 : r.animate,
                 u = {};
             this.options.values && this.options.values.length ? this.handles.each(function(s) {
                 i = (h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin()) * 100, u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                     left: i + "%"
                 }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                     width: i - e + "%"
                 }, {
                     queue: !1,
                     duration: r.animate
                 })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                     bottom: i + "%"
                 }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                     height: i - e + "%"
                 }, {
                     queue: !1,
                     duration: r.animate
                 }))), e = i
             }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? (s - n) / (o - n) * 100 : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                 width: i + "%"
             }, r.animate), "max" === a && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
                 width: 100 - i + "%"
             }, {
                 queue: !1,
                 duration: r.animate
             }), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                 height: i + "%"
             }, r.animate), "max" === a && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
                 height: 100 - i + "%"
             }, {
                 queue: !1,
                 duration: r.animate
             }))
         },
         _handleEvents: {
             keydown: function(e) {
                 var i, s, n, o, a = t(e.target).data("ui-slider-handle-index");
                 switch (e.keyCode) {
                     case t.ui.keyCode.HOME:
                     case t.ui.keyCode.END:
                     case t.ui.keyCode.PAGE_UP:
                     case t.ui.keyCode.PAGE_DOWN:
                     case t.ui.keyCode.UP:
                     case t.ui.keyCode.RIGHT:
                     case t.ui.keyCode.DOWN:
                     case t.ui.keyCode.LEFT:
                         if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), i = this._start(e, a), i === !1)) return
                 }
                 switch (o = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(a) : this.value(), e.keyCode) {
                     case t.ui.keyCode.HOME:
                         n = this._valueMin();
                         break;
                     case t.ui.keyCode.END:
                         n = this._valueMax();
                         break;
                     case t.ui.keyCode.PAGE_UP:
                         n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                         break;
                     case t.ui.keyCode.PAGE_DOWN:
                         n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                         break;
                     case t.ui.keyCode.UP:
                     case t.ui.keyCode.RIGHT:
                         if (s === this._valueMax()) return;
                         n = this._trimAlignValue(s + o);
                         break;
                     case t.ui.keyCode.DOWN:
                     case t.ui.keyCode.LEFT:
                         if (s === this._valueMin()) return;
                         n = this._trimAlignValue(s - o)
                 }
                 this._slide(e, a, n)
             },
             keyup: function(e) {
                 var i = t(e.target).data("ui-slider-handle-index");
                 this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
             }
         }
     }), t.widget("ui.sortable", t.ui.mouse, {
         version: "1.11.2",
         widgetEventPrefix: "sort",
         ready: !1,
         options: {
             appendTo: "parent",
             axis: !1,
             connectWith: !1,
             containment: !1,
             cursor: "auto",
             cursorAt: !1,
             dropOnEmpty: !0,
             forcePlaceholderSize: !1,
             forceHelperSize: !1,
             grid: !1,
             handle: !1,
             helper: "original",
             items: "> *",
             opacity: !1,
             placeholder: !1,
             revert: !1,
             scroll: !0,
             scrollSensitivity: 20,
             scrollSpeed: 20,
             scope: "default",
             tolerance: "intersect",
             zIndex: 1e3,
             activate: null,
             beforeStop: null,
             change: null,
             deactivate: null,
             out: null,
             over: null,
             receive: null,
             remove: null,
             sort: null,
             start: null,
             stop: null,
             update: null
         },
         _isOverAxis: function(t, e, i) {
             return t >= e && e + i > t
         },
         _isFloating: function(t) {
             return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
         },
         _create: function() {
             var t = this.options;
             this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || this._isFloating(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
         },
         _setOption: function(t, e) {
             this._super(t, e), "handle" === t && this._setHandleClassName()
         },
         _setHandleClassName: function() {
             this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), t.each(this.items, function() {
                 (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
             })
         },
         _destroy: function() {
             this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
             for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
             return this
         },
         _mouseCapture: function(e, i) {
             var s = null,
                 n = !1,
                 o = this;
             return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                 return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0
             }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s && (!this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
                 this === e.target && (n = !0)
             }), n)) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1)
         },
         _mouseStart: function(e, i, s) {
             var n, o, a = this.options;
             if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                     top: this.offset.top - this.margins.top,
                     left: this.offset.left - this.margins.left
                 }, t.extend(this.offset, {
                     click: {
                         left: e.pageX - this.offset.left,
                         top: e.pageY - this.offset.top
                     },
                     parent: this._getParentOffset(),
                     relative: this._getRelativeOffset()
                 }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                     prev: this.currentItem.prev()[0],
                     parent: this.currentItem.parent()[0]
                 }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                 for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
             return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
         },
         _mouseDrag: function(e) {
             var i, s, n, o, a = this.options,
                 r = !1;
             for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                 if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                     if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                     this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                     break
                 }
             return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
         },
         _mouseStop: function(e, i) {
             if (e) {
                 if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                     var s = this,
                         n = this.placeholder.offset(),
                         o = this.options.axis,
                         a = {};
                     o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                         s._clear(e)
                     })
                 } else this._clear(e, i);
                 return !1
             }
         },
         cancel: function() {
             if (this.dragging) {
                 this._mouseUp({
                     target: null
                 }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                 for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
             }
             return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                 helper: null,
                 dragging: !1,
                 reverting: !1,
                 _noFinalSort: null
             }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
         },
         serialize: function(e) {
             var i = this._getItemsAsjQuery(e && e.connected),
                 s = [];
             return e = e || {}, t(i).each(function() {
                 var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                 i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
             }), !s.length && e.key && s.push(e.key + "="), s.join("&")
         },
         toArray: function(e) {
             var i = this._getItemsAsjQuery(e && e.connected),
                 s = [];
             return e = e || {}, i.each(function() {
                 s.push(t(e.item || this).attr(e.attribute || "id") || "")
             }), s
         },
         _intersectsWith: function(t) {
             var e = this.positionAbs.left,
                 i = e + this.helperProportions.width,
                 s = this.positionAbs.top,
                 n = s + this.helperProportions.height,
                 o = t.left,
                 a = o + t.width,
                 r = t.top,
                 h = r + t.height,
                 l = this.offset.click.top,
                 u = this.offset.click.left,
                 c = "x" === this.options.axis || s + l > r && h > s + l,
                 d = "y" === this.options.axis || e + u > o && a > e + u,
                 p = c && d;
             return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < h
         },
         _intersectsWithPointer: function(t) {
             var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                 i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                 s = e && i,
                 n = this._getDragVerticalDirection(),
                 o = this._getDragHorizontalDirection();
             return s ? this.floating ? o && "right" === o || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1
         },
         _intersectsWithSides: function(t) {
             var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                 i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                 s = this._getDragVerticalDirection(),
                 n = this._getDragHorizontalDirection();
             return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
         },
         _getDragVerticalDirection: function() {
             var t = this.positionAbs.top - this.lastPositionAbs.top;
             return 0 !== t && (t > 0 ? "down" : "up")
         },
         _getDragHorizontalDirection: function() {
             var t = this.positionAbs.left - this.lastPositionAbs.left;
             return 0 !== t && (t > 0 ? "right" : "left")
         },
         refresh: function(t) {
             return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
         },
         _connectWith: function() {
             var t = this.options;
             return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
         },
         _getItemsAsjQuery: function(e) {
             function i() {
                 r.push(this)
             }
             var s, n, o, a, r = [],
                 h = [],
                 l = this._connectWith();
             if (l && e)
                 for (s = l.length - 1; s >= 0; s--)
                     for (o = t(l[s]), n = o.length - 1; n >= 0; n--) a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
             for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                     options: this.options,
                     item: this.currentItem
                 }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
             return t(r)
         },
         _removeCurrentsFromItems: function() {
             var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
             this.items = t.grep(this.items, function(t) {
                 for (var i = 0; i < e.length; i++)
                     if (e[i] === t.item[0]) return !1;
                 return !0
             })
         },
         _refreshItems: function(e) {
             this.items = [], this.containers = [this];
             var i, s, n, o, a, r, h, l, u = this.items,
                 c = [
                     [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                         item: this.currentItem
                     }) : t(this.options.items, this.element), this]
                 ],
                 d = this._connectWith();
             if (d && this.ready)
                 for (i = d.length - 1; i >= 0; i--)
                     for (n = t(d[i]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (c.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                         item: this.currentItem
                     }) : t(o.options.items, o.element), o]), this.containers.push(o));
             for (i = c.length - 1; i >= 0; i--)
                 for (a = c[i][1], r = c[i][0], s = 0, l = r.length; l > s; s++) h = t(r[s]), h.data(this.widgetName + "-item", a), u.push({
                     item: h,
                     instance: a,
                     width: 0,
                     height: 0,
                     left: 0,
                     top: 0
                 })
         },
         refreshPositions: function(e) {
             this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
             var i, s, n, o;
             for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
             if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
             else
                 for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
             return this
         },
         _createPlaceholder: function(e) {
             e = e || this;
             var i, s = e.options;
             s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                 element: function() {
                     var s = e.currentItem[0].nodeName.toLowerCase(),
                         n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                     return "tr" === s ? e.currentItem.children().each(function() {
                         t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
                     }) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                 },
                 update: function(t, n) {
                     (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                 }
             }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
         },
         _contactContainers: function(e) {
             var i, s, n, o, a, r, h, l, u, c, d = null,
                 p = null;
             for (i = this.containers.length - 1; i >= 0; i--)
                 if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                     if (this._intersectsWith(this.containers[i].containerCache)) {
                         if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                         d = this.containers[i], p = i
                     } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
             if (d)
                 if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                 else {
                     for (n = 1e4, o = null, u = d.floating || this._isFloating(this.currentItem), a = u ? "left" : "top", r = u ? "width" : "height", c = u ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a], l = !1, e[c] - h > this.items[s][r] / 2 && (l = !0), Math.abs(e[c] - h) < n && (n = Math.abs(e[c] - h), o = this.items[s], this.direction = l ? "up" : "down"));
                     if (!o && !this.options.dropOnEmpty) return;
                     if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                     o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                 }
         },
         _createHelper: function(e) {
             var i = this.options,
                 s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
             return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                 width: this.currentItem[0].style.width,
                 height: this.currentItem[0].style.height,
                 position: this.currentItem.css("position"),
                 top: this.currentItem.css("top"),
                 left: this.currentItem.css("left")
             }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
         },
         _adjustOffsetFromHelper: function(e) {
             "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                 left: +e[0],
                 top: +e[1] || 0
             }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
         },
         _getParentOffset: function() {
             this.offsetParent = this.helper.offsetParent();
             var e = this.offsetParent.offset();
             return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                 top: 0,
                 left: 0
             }), {
                 top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                 left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
             }
         },
         _getRelativeOffset: function() {
             if ("relative" === this.cssPosition) {
                 var t = this.currentItem.position();
                 return {
                     top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                     left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                 }
             }
             return {
                 top: 0,
                 left: 0
             }
         },
         _cacheMargins: function() {
             this.margins = {
                 left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                 top: parseInt(this.currentItem.css("marginTop"), 10) || 0
             }
         },
         _cacheHelperProportions: function() {
             this.helperProportions = {
                 width: this.helper.outerWidth(),
                 height: this.helper.outerHeight()
             }
         },
         _setContainment: function() {
             var e, i, s, n = this.options;
             "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
         },
         _convertPositionTo: function(e, i) {
             i || (i = this.position);
             var s = "absolute" === e ? 1 : -1,
                 n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                 o = /(html|body)/i.test(n[0].tagName);
             return {
                 top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                 left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
             }
         },
         _generatePosition: function(e) {
             var i, s, n = this.options,
                 o = e.pageX,
                 a = e.pageY,
                 r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                 h = /(html|body)/i.test(r[0].tagName);
             return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                 top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                 left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
             }
         },
         _rearrange: function(t, e, i, s) {
             i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
             var n = this.counter;
             this._delay(function() {
                 n === this.counter && this.refreshPositions(!s)
             })
         },
         _clear: function(t, e) {
             function i(t, e, i) {
                 return function(s) {
                     i._trigger(t, s, e._uiHash(e))
                 }
             }
             this.reverting = !1;
             var s, n = [];
             if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                 for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                 this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
             } else this.currentItem.show();
             for (this.fromOutside && !e && n.push(function(t) {
                     this._trigger("receive", t, this._uiHash(this.fromOutside))
                 }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                     this._trigger("update", t, this._uiHash())
                 }), this !== this.currentContainer && (e || (n.push(function(t) {
                     this._trigger("remove", t, this._uiHash())
                 }), n.push(function(t) {
                     return function(e) {
                         t._trigger("receive", e, this._uiHash(this))
                     }
                 }.call(this, this.currentContainer)), n.push(function(t) {
                     return function(e) {
                         t._trigger("update", e, this._uiHash(this))
                     }
                 }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
             if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                 for (s = 0; s < n.length; s++) n[s].call(this, t);
                 this._trigger("stop", t, this._uiHash())
             }
             return this.fromOutside = !1, !this.cancelHelperRemoval
         },
         _trigger: function() {
             t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
         },
         _uiHash: function(e) {
             var i = e || this;
             return {
                 helper: i.helper,
                 placeholder: i.placeholder || t([]),
                 position: i.position,
                 originalPosition: i.originalPosition,
                 offset: i.positionAbs,
                 item: i.currentItem,
                 sender: e ? e.element : null
             }
         }
     }), t.widget("ui.spinner", {
         version: "1.11.2",
         defaultElement: "<input>",
         widgetEventPrefix: "spin",
         options: {
             culture: null,
             icons: {
                 down: "ui-icon-triangle-1-s",
                 up: "ui-icon-triangle-1-n"
             },
             incremental: !0,
             max: null,
             min: null,
             numberFormat: null,
             page: 10,
             step: 1,
             change: null,
             spin: null,
             start: null,
             stop: null
         },
         _create: function() {
             this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                 beforeunload: function() {
                     this.element.removeAttr("autocomplete")
                 }
             })
         },
         _getCreateOptions: function() {
             var e = {},
                 i = this.element;
             return t.each(["min", "max", "step"], function(t, s) {
                 var n = i.attr(s);
                 void 0 !== n && n.length && (e[s] = n)
             }), e
         },
         _events: {
             keydown: function(t) {
                 this._start(t) && this._keydown(t) && t.preventDefault()
             },
             keyup: "_stop",
             focus: function() {
                 this.previous = this.element.val()
             },
             blur: function(t) {
                 return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
             },
             mousewheel: function(t, e) {
                 if (e) {
                     if (!this.spinning && !this._start(t)) return !1;
                     this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                         this.spinning && this._stop(t)
                     }, 100), t.preventDefault()
                 }
             },
             "mousedown .ui-spinner-button": function(e) {
                 function i() {
                     var t = this.element[0] === this.document[0].activeElement;
                     t || (this.element.focus(), this.previous = s, this._delay(function() {
                         this.previous = s
                     }))
                 }
                 var s;
                 s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                     delete this.cancelBlur, i.call(this)
                 }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
             },
             "mouseup .ui-spinner-button": "_stop",
             "mouseenter .ui-spinner-button": function(e) {
                 return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
             },
             "mouseleave .ui-spinner-button": "_stop"
         },
         _draw: function() {
             var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
             this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
         },
         _keydown: function(e) {
             var i = this.options,
                 s = t.ui.keyCode;
             switch (e.keyCode) {
                 case s.UP:
                     return this._repeat(null, 1, e), !0;
                 case s.DOWN:
                     return this._repeat(null, -1, e), !0;
                 case s.PAGE_UP:
                     return this._repeat(null, i.page, e), !0;
                 case s.PAGE_DOWN:
                     return this._repeat(null, -i.page, e), !0
             }
             return !1
         },
         _uiSpinnerHtml: function() {
             return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
         },
         _buttonHtml: function() {
             return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
         },
         _start: function(t) {
             return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
         },
         _repeat: function(t, e, i) {
             t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                 this._repeat(40, e, i)
             }, t), this._spin(e * this.options.step, i)
         },
         _spin: function(t, e) {
             var i = this.value() || 0;
             this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
                 value: i
             }) === !1 || (this._value(i), this.counter++)
         },
         _increment: function(e) {
             var i = this.options.incremental;
             return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
         },
         _precision: function() {
             var t = this._precisionOf(this.options.step);
             return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
         },
         _precisionOf: function(t) {
             var e = t.toString(),
                 i = e.indexOf(".");
             return -1 === i ? 0 : e.length - i - 1
         },
         _adjustValue: function(t) {
             var e, i, s = this.options;
             return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && t < s.min ? s.min : t
         },
         _stop: function(t) {
             this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
         },
         _setOption: function(t, e) {
             if ("culture" === t || "numberFormat" === t) {
                 var i = this._parse(this.element.val());
                 return this.options[t] = e, void this.element.val(this._format(i))
             }("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), this.buttons.button(e ? "disable" : "enable"))
         },
         _setOptions: h(function(t) {
             this._super(t)
         }),
         _parse: function(t) {
             return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
         },
         _format: function(t) {
             return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
         },
         _refresh: function() {
             this.element.attr({
                 "aria-valuemin": this.options.min,
                 "aria-valuemax": this.options.max,
                 "aria-valuenow": this._parse(this.element.val())
             })
         },
         isValid: function() {
             var t = this.value();
             return null === t ? !1 : t === this._adjustValue(t)
         },
         _value: function(t, e) {
             var i;
             "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
         },
         _destroy: function() {
             this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
         },
         stepUp: h(function(t) {
             this._stepUp(t)
         }),
         _stepUp: function(t) {
             this._start() && (this._spin((t || 1) * this.options.step), this._stop())
         },
         stepDown: h(function(t) {
             this._stepDown(t)
         }),
         _stepDown: function(t) {
             this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
         },
         pageUp: h(function(t) {
             this._stepUp((t || 1) * this.options.page)
         }),
         pageDown: h(function(t) {
             this._stepDown((t || 1) * this.options.page)
         }),
         value: function(t) {
             return arguments.length ? void h(this._value).call(this, t) : this._parse(this.element.val())
         },
         widget: function() {
             return this.uiSpinner
         }
     }), t.widget("ui.tabs", {
         version: "1.11.2",
         delay: 300,
         options: {
             active: null,
             collapsible: !1,
             event: "click",
             heightStyle: "content",
             hide: null,
             show: null,
             activate: null,
             beforeActivate: null,
             beforeLoad: null,
             load: null
         },
         _isLocal: function() {
             var t = /#.*$/;
             return function(e) {
                 var i, s;
                 e = e.cloneNode(!1), i = e.href.replace(t, ""), s = location.href.replace(t, "");
                 try {
                     i = decodeURIComponent(i)
                 } catch (n) {}
                 try {
                     s = decodeURIComponent(s)
                 } catch (n) {}
                 return e.hash.length > 1 && i === s
             }
         }(),
         _create: function() {
             var e = this,
                 i = this.options;
             this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                 return e.tabs.index(t)
             }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
         },
         _initialActive: function() {
             var e = this.options.active,
                 i = this.options.collapsible,
                 s = location.hash.substring(1);
             return null === e && (s && this.tabs.each(function(i, n) {
                 return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0
             }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
         },
         _getCreateEventData: function() {
             return {
                 tab: this.active,
                 panel: this.active.length ? this._getPanelForTab(this.active) : t()
             }
         },
         _tabKeydown: function(e) {
             var i = t(this.document[0].activeElement).closest("li"),
                 s = this.tabs.index(i),
                 n = !0;
             if (!this._handlePageNav(e)) {
                 switch (e.keyCode) {
                     case t.ui.keyCode.RIGHT:
                     case t.ui.keyCode.DOWN:
                         s++;
                         break;
                     case t.ui.keyCode.UP:
                     case t.ui.keyCode.LEFT:
                         n = !1, s--;
                         break;
                     case t.ui.keyCode.END:
                         s = this.anchors.length - 1;
                         break;
                     case t.ui.keyCode.HOME:
                         s = 0;
                         break;
                     case t.ui.keyCode.SPACE:
                         return e.preventDefault(), clearTimeout(this.activating), void this._activate(s);
                     case t.ui.keyCode.ENTER:
                         return e.preventDefault(), clearTimeout(this.activating), void this._activate(s === this.options.active ? !1 : s);
                     default:
                         return
                 }
                 e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() {
                     this.option("active", s)
                 }, this.delay))
             }
         },
         _panelKeydown: function(e) {
             this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
         },
         _handlePageNav: function(e) {
             return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
         },
         _findNextTab: function(e, i) {
             function s() {
                 return e > n && (e = 0), 0 > e && (e = n), e
             }
             for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
             return e
         },
         _focusNextTab: function(t, e) {
             return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
         },
         _setOption: function(t, e) {
             return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
         },
         _sanitizeSelector: function(t) {
             return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
         },
         refresh: function() {
             var e = this.options,
                 i = this.tablist.children(":has(a[href])");
             e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                 return i.index(t)
             }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
         },
         _refresh: function() {
             this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                 "aria-selected": "false",
                 "aria-expanded": "false",
                 tabIndex: -1
             }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                 "aria-hidden": "true"
             }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                 "aria-selected": "true",
                 "aria-expanded": "true",
                 tabIndex: 0
             }), this._getPanelForTab(this.active).show().attr({
                 "aria-hidden": "false"
             })) : this.tabs.eq(0).attr("tabIndex", 0)
         },
         _processTabs: function() {
             var e = this,
                 i = this.tabs,
                 s = this.anchors,
                 n = this.panels;
             this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(e) {
                 t(this).is(".ui-state-disabled") && e.preventDefault()
             }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                 t(this).closest("li").is(".ui-state-disabled") && this.blur()
             }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                 role: "tab",
                 tabIndex: -1
             }), this.anchors = this.tabs.map(function() {
                 return t("a", this)[0]
             }).addClass("ui-tabs-anchor").attr({
                 role: "presentation",
                 tabIndex: -1
             }), this.panels = t(), this.anchors.each(function(i, s) {
                 var n, o, a, r = t(s).uniqueId().attr("id"),
                     h = t(s).closest("li"),
                     l = h.attr("aria-controls");
                 e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = h.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), l && h.data("ui-tabs-aria-controls", l), h.attr({
                     "aria-controls": a,
                     "aria-labelledby": r
                 }), o.attr("aria-labelledby", r)
             }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
         },
         _getList: function() {
             return this.tablist || this.element.find("ol,ul").eq(0)
         },
         _createPanel: function(e) {
             return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
         },
         _setupDisabled: function(e) {
             t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
             for (var i, s = 0; i = this.tabs[s]; s++) e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
             this.options.disabled = e
         },
         _setupEvents: function(e) {
             var i = {};
             e && t.each(e.split(" "), function(t, e) {
                 i[e] = "_eventHandler"
             }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                 click: function(t) {
                     t.preventDefault()
                 }
             }), this._on(this.anchors, i), this._on(this.tabs, {
                 keydown: "_tabKeydown"
             }), this._on(this.panels, {
                 keydown: "_panelKeydown"
             }), this._focusable(this.tabs), this._hoverable(this.tabs)
         },
         _setupHeightStyle: function(e) {
             var i, s = this.element.parent();
             "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                 var e = t(this),
                     s = e.css("position");
                 "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
             }), this.element.children().not(this.panels).each(function() {
                 i -= t(this).outerHeight(!0)
             }), this.panels.each(function() {
                 t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
             }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                 i = Math.max(i, t(this).height("").height())
             }).height(i))
         },
         _eventHandler: function(e) {
             var i = this.options,
                 s = this.active,
                 n = t(e.currentTarget),
                 o = n.closest("li"),
                 a = o[0] === s[0],
                 r = a && i.collapsible,
                 h = r ? t() : this._getPanelForTab(o),
                 l = s.length ? this._getPanelForTab(s) : t(),
                 u = {
                     oldTab: s,
                     oldPanel: l,
                     newTab: r ? t() : o,
                     newPanel: h
                 };
             e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, u) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, u))
         },
         _toggle: function(e, i) {
             function s() {
                 o.running = !1, o._trigger("activate", e, i)
             }

             function n() {
                 i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s())
             }
             var o = this,
                 a = i.newPanel,
                 r = i.oldPanel;
             this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                 i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
             }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                 "aria-selected": "false",
                 "aria-expanded": "false"
             }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                 return 0 === t(this).attr("tabIndex")
             }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                 "aria-selected": "true",
                 "aria-expanded": "true",
                 tabIndex: 0
             })
         },
         _activate: function(e) {
             var i, s = this._findActive(e);
             s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                 target: i,
                 currentTarget: i,
                 preventDefault: t.noop
             }))
         },
         _findActive: function(e) {
             return e === !1 ? t() : this.tabs.eq(e)
         },
         _getIndex: function(t) {
             return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
         },
         _destroy: function() {
             this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                 t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
             }), this.tabs.each(function() {
                 var e = t(this),
                     i = e.data("ui-tabs-aria-controls");
                 i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
             }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
         },
         enable: function(e) {
             var i = this.options.disabled;
             i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                 return t !== e ? t : null
             }) : t.map(this.tabs, function(t, i) {
                 return i !== e ? i : null
             })), this._setupDisabled(i))
         },
         disable: function(e) {
             var i = this.options.disabled;
             if (i !== !0) {
                 if (void 0 === e) i = !0;
                 else {
                     if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                     i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                 }
                 this._setupDisabled(i)
             }
         },
         load: function(e, i) {
             e = this._getIndex(e);
             var s = this,
                 n = this.tabs.eq(e),
                 o = n.find(".ui-tabs-anchor"),
                 a = this._getPanelForTab(n),
                 r = {
                     tab: n,
                     panel: a
                 };
             this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.success(function(t) {
                 setTimeout(function() {
                     a.html(t), s._trigger("load", i, r)
                 }, 1)
             }).complete(function(t, e) {
                 setTimeout(function() {
                     "abort" === e && s.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
                 }, 1)
             })))
         },
         _ajaxSettings: function(e, i, s) {
             var n = this;
             return {
                 url: e.attr("href"),
                 beforeSend: function(e, o) {
                     return n._trigger("beforeLoad", i, t.extend({
                         jqXHR: e,
                         ajaxSettings: o
                     }, s))
                 }
             }
         },
         _getPanelForTab: function(e) {
             var i = t(e).attr("aria-controls");
             return this.element.find(this._sanitizeSelector("#" + i))
         }
     }), t.widget("", {
         version: "1.11.2",
         options: {
             content: function() {
                 var e = t(this).attr("title") || "";
                 return t("<a>").text(e).html()
             },
             hide: !0,
             items: "[title]:not([disabled])",
             position: {
                 my: "left top+15",
                 at: "left bottom",
                 collision: "flipfit flip"
             },
             show: !0,
             tooltipClass: null,
             track: !1,
             close: null,
             open: null
         },
         _addDescribedBy: function(e, i) {
             var s = (e.attr("aria-describedby") || "").split(/\s+/);
             s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
         },
         _removeDescribedBy: function(e) {
             var i = e.data("ui-tooltip-id"),
                 s = (e.attr("aria-describedby") || "").split(/\s+/),
                 n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
         },
         _create: function() {
             this._on({
                 mouseover: "open",
                 focusin: "open"
             }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = t("<div>").attr({
                 role: "log",
                 "aria-live": "assertive",
                 "aria-relevant": "additions"
             }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
         },
         _setOption: function(e, i) {
             var s = this;
             return "disabled" === e ? (this[i ? "_disable" : "_enable"](), void(this.options[e] = i)) : (this._super(e, i), void("content" === e && t.each(this.tooltips, function(t, e) {
                 s._updateContent(e.element)
             })))
         },
         _disable: function() {
             var e = this;
             t.each(this.tooltips, function(i, s) {
                 var n = t.Event("blur");
                 n.target = n.currentTarget = s.element[0], e.close(n, !0)
             }), this.element.find(this.options.items).addBack().each(function() {
                 var e = t(this);
                 e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).removeAttr("title")
             })
         },
         _enable: function() {
             this.element.find(this.options.items).addBack().each(function() {
                 var e = t(this);
                 e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
             })
         },
         open: function(e) {
             var i = this,
                 s = t(e ? e.target : this.element).closest(this.options.items);
             s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
                 var e, s = t(this);
                 s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                     element: this,
                     title: s.attr("title")
                 }, s.attr("title", ""))
             }), this._updateContent(s, e))
         },
         _updateContent: function(t, e) {
             var i, s = this.options.content,
                 n = this,
                 o = e ? e.type : null;
             return "string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function(i) {
                 t.data("ui-tooltip-open") && n._delay(function() {
                     e && (e.type = o), this._open(e, t, i)
                 })
             }), void(i && this._open(e, t, i)))
         },
         _open: function(e, i, s) {
             function n(t) {
                 u.of = t, a.is(":hidden") || a.position(u)
             }
             var o, a, r, h, l, u = t.extend({}, this.options.position);
             if (s) {
                 if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(s);
                 i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), s.clone ? (l = s.clone(), l.removeAttr("id").find("[id]").removeAttr("id")) : l = s, t("<div>").html(l).appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                     mousemove: n
                 }), n(e)) : a.position(t.extend({ of: i
                 }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                     a.is(":visible") && (n(u.of), clearInterval(h))
                 }, t.fx.interval)), this._trigger("open", e, {
                     tooltip: a
                 }), r = {
                     keyup: function(e) {
                         if (e.keyCode === t.ui.keyCode.ESCAPE) {
                             var s = t.Event(e);
                             s.currentTarget = i[0], this.close(s, !0)
                         }
                     }
                 }, i[0] !== this.element[0] && (r.remove = function() {
                     this._removeTooltip(a)
                 }), e && "mouseover" !== e.type || (r.mouseleave = "close"), e && "focusin" !== e.type || (r.focusout = "close"), this._on(!0, i, r)
             }
         },
         close: function(e) {
             var i, s = this,
                 n = t(e ? e.currentTarget : this.element),
                 o = this._find(n);
             o && (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                 s._removeTooltip(t(this))
             }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                 t(i.element).attr("title", i.title), delete s.parents[e]
             }), o.closing = !0, this._trigger("close", e, {
                 tooltip: i
             }), o.hiding || (o.closing = !1)))
         },
         _tooltip: function(e) {
             var i = t("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                 s = i.uniqueId().attr("id");
             return t("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[s] = {
                 element: e,
                 tooltip: i
             }
         },
         _find: function(t) {
             var e = t.data("ui-tooltip-id");
             return e ? this.tooltips[e] : null
         },
         _removeTooltip: function(t) {
             t.remove(), delete this.tooltips[t.attr("id")]
         },
         _destroy: function() {
             var e = this;
             t.each(this.tooltips, function(i, s) {
                 var n = t.Event("blur"),
                     o = s.element;
                 n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
             }), this.liveRegion.remove()
         }
     })
 });

 /*! jQuery UI - v1.9.2 - 2012-11-23 */
 (function(e, t) {
     function i(t, n) {
         var r, i, o, u = t.nodeName.toLowerCase();
         return "area" === u ? (r = t.parentNode, i = r.name, !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0], !!o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
     }

     function s(t) {
         return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function() {
             return e.css(this, "visibility") === "hidden"
         }).length
     }
     var n = 0,
         r = /^ui-id-\d+$/;
     e.ui = e.ui || {};
     if (e.ui.version) return;
     e.extend(e.ui, {
             version: "1.9.2",
             keyCode: {
                 BACKSPACE: 8,
                 COMMA: 188,
                 DELETE: 46,
                 DOWN: 40,
                 END: 35,
                 ENTER: 13,
                 ESCAPE: 27,
                 HOME: 36,
                 LEFT: 37,
                 NUMPAD_ADD: 107,
                 NUMPAD_DECIMAL: 110,
                 NUMPAD_DIVIDE: 111,
                 NUMPAD_ENTER: 108,
                 NUMPAD_MULTIPLY: 106,
                 NUMPAD_SUBTRACT: 109,
                 PAGE_DOWN: 34,
                 PAGE_UP: 33,
                 PERIOD: 190,
                 RIGHT: 39,
                 SPACE: 32,
                 TAB: 9,
                 UP: 38
             }
         }), e.fn.extend({
             _focus: e.fn.focus,
             focus: function(t, n) {
                 return typeof t == "number" ? this.each(function() {
                     var r = this;
                     setTimeout(function() {
                         e(r).focus(), n && n.call(r)
                     }, t)
                 }) : this._focus.apply(this, arguments)
             },
             scrollParent: function() {
                 var t;
                 return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
                     return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                 }).eq(0) : t = this.parents().filter(function() {
                     return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                 }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
             },
             zIndex: function(n) {
                 if (n !== t) return this.css("zIndex", n);
                 if (this.length) {
                     var r = e(this[0]),
                         i, s;
                     while (r.length && r[0] !== document) {
                         i = r.css("position");
                         if (i === "absolute" || i === "relative" || i === "fixed") {
                             s = parseInt(r.css("zIndex"), 10);
                             if (!isNaN(s) && s !== 0) return s
                         }
                         r = r.parent()
                     }
                 }
                 return 0
             },
             uniqueId: function() {
                 return this.each(function() {
                     this.id || (this.id = "ui-id-" + ++n)
                 })
             },
             removeUniqueId: function() {
                 return this.each(function() {
                     r.test(this.id) && e(this).removeAttr("id")
                 })
             }
         }), e.extend(e.expr[":"], {
             data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                 return function(n) {
                     return !!e.data(n, t)
                 }
             }) : function(t, n, r) {
                 return !!e.data(t, r[3])
             },
             focusable: function(t) {
                 return i(t, !isNaN(e.attr(t, "tabindex")))
             },
             tabbable: function(t) {
                 var n = e.attr(t, "tabindex"),
                     r = isNaN(n);
                 return (r || n >= 0) && i(t, !r)
             }
         }), e(function() {
             var t = document.body,
                 n = t.appendChild(n = document.createElement("div"));
             n.offsetHeight, e.extend(n.style, {
                 minHeight: "100px",
                 height: "auto",
                 padding: 0,
                 borderWidth: 0
             }), e.support.minHeight = n.offsetHeight === 100, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
         }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
             function u(t, n, r, s) {
                 return e.each(i, function() {
                     n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
                 }), n
             }
             var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                 s = r.toLowerCase(),
                 o = {
                     innerWidth: e.fn.innerWidth,
                     innerHeight: e.fn.innerHeight,
                     outerWidth: e.fn.outerWidth,
                     outerHeight: e.fn.outerHeight
                 };
             e.fn["inner" + r] = function(n) {
                 return n === t ? o["inner" + r].call(this) : this.each(function() {
                     e(this).css(s, u(this, n) + "px")
                 })
             }, e.fn["outer" + r] = function(t, n) {
                 return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function() {
                     e(this).css(s, u(this, t, !0, n) + "px")
                 })
             }
         }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
             return function(n) {
                 return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
             }
         }(e.fn.removeData)),
         function() {
             var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
             e.ui.ie = t.length ? !0 : !1, e.ui.ie6 = parseFloat(t[1], 10) === 6
         }(), e.fn.extend({
             disableSelection: function() {
                 return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                     e.preventDefault()
                 })
             },
             enableSelection: function() {
                 return this.unbind(".ui-disableSelection")
             }
         }), e.extend(e.ui, {
             plugin: {
                 add: function(t, n, r) {
                     var i, s = e.ui[t].prototype;
                     for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
                 },
                 call: function(e, t, n) {
                     var r, i = e.plugins[t];
                     if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
                     for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n)
                 }
             },
             contains: e.contains,
             hasScroll: function(t, n) {
                 if (e(t).css("overflow") === "hidden") return !1;
                 var r = n && n === "left" ? "scrollLeft" : "scrollTop",
                     i = !1;
                 return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
             },
             isOverAxis: function(e, t, n) {
                 return e > t && e < t + n
             },
             isOver: function(t, n, r, i, s, o) {
                 return e.ui.isOverAxis(t, r, s) && e.ui.isOverAxis(n, i, o)
             }
         })
 })(jQuery),
 function(e, t) {
     var n = 0,
         r = Array.prototype.slice,
         i = e.cleanData;
     e.cleanData = function(t) {
         for (var n = 0, r;
             (r = t[n]) != null; n++) try {
             e(r).triggerHandler("remove")
         } catch (s) {}
         i(t)
     }, e.widget = function(t, n, r) {
         var i, s, o, u, a = t.split(".")[0];
         t = t.split(".")[1], i = a + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
             return !!e.data(t, i)
         }, e[a] = e[a] || {}, s = e[a][t], o = e[a][t] = function(e, t) {
             if (!this._createWidget) return new o(e, t);
             arguments.length && this._createWidget(e, t)
         }, e.extend(o, s, {
             version: r.version,
             _proto: e.extend({}, r),
             _childConstructors: []
         }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, i) {
             e.isFunction(i) && (r[t] = function() {
                 var e = function() {
                         return n.prototype[t].apply(this, arguments)
                     },
                     r = function(e) {
                         return n.prototype[t].apply(this, e)
                     };
                 return function() {
                     var t = this._super,
                         n = this._superApply,
                         s;
                     return this._super = e, this._superApply = r, s = i.apply(this, arguments), this._super = t, this._superApply = n, s
                 }
             }())
         }), o.prototype = e.widget.extend(u, {
             widgetEventPrefix: s ? u.widgetEventPrefix : t
         }, r, {
             constructor: o,
             namespace: a,
             widgetName: t,
             widgetBaseClass: i,
             widgetFullName: i
         }), s ? (e.each(s._childConstructors, function(t, n) {
             var r = n.prototype;
             e.widget(r.namespace + "." + r.widgetName, o, n._proto)
         }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o)
     }, e.widget.extend = function(n) {
         var i = r.call(arguments, 1),
             s = 0,
             o = i.length,
             u, a;
         for (; s < o; s++)
             for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
         return n
     }, e.widget.bridge = function(n, i) {
         var s = i.prototype.widgetFullName || n;
         e.fn[n] = function(o) {
             var u = typeof o == "string",
                 a = r.call(arguments, 1),
                 f = this;
             return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function() {
                 var r, i = e.data(this, s);
                 if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
                 if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance");
                 r = i[o].apply(i, a);
                 if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get()) : r, !1
             }) : this.each(function() {
                 var t = e.data(this, s);
                 t ? t.option(o || {})._init() : e.data(this, s, new i(o, this))
             }), f
         }
     }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
         widgetName: "widget",
         widgetEventPrefix: "",
         defaultElement: "<div>",
         options: {
             disabled: !1,
             create: null
         },
         _createWidget: function(t, r) {
             r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetName, this), e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
                 remove: function(e) {
                     e.target === r && this.destroy()
                 }
             }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
         },
         _getCreateOptions: e.noop,
         _getCreateEventData: e.noop,
         _create: e.noop,
         _init: e.noop,
         destroy: function() {
             this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
         },
         _destroy: e.noop,
         widget: function() {
             return this.element
         },
         option: function(n, r) {
             var i = n,
                 s, o, u;
             if (arguments.length === 0) return e.widget.extend({}, this.options);
             if (typeof n == "string") {
                 i = {}, s = n.split("."), n = s.shift();
                 if (s.length) {
                     o = i[n] = e.widget.extend({}, this.options[n]);
                     for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]];
                     n = s.pop();
                     if (r === t) return o[n] === t ? null : o[n];
                     o[n] = r
                 } else {
                     if (r === t) return this.options[n] === t ? null : this.options[n];
                     i[n] = r
                 }
             }
             return this._setOptions(i), this
         },
         _setOptions: function(e) {
             var t;
             for (t in e) this._setOption(t, e[t]);
             return this
         },
         _setOption: function(e, t) {
             return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
         },
         enable: function() {
             return this._setOption("disabled", !1)
         },
         disable: function() {
             return this._setOption("disabled", !0)
         },
         _on: function(t, n, r) {
             var i, s = this;
             typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
                 function u() {
                     if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return;
                     return (typeof o == "string" ? s[o] : o).apply(s, arguments)
                 }
                 typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                 var a = r.match(/^(\w+)\s*(.*)$/),
                     f = a[1] + s.eventNamespace,
                     l = a[2];
                 l ? i.delegate(l, f, u) : n.bind(f, u)
             })
         },
         _off: function(e, t) {
             t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
         },
         _delay: function(e, t) {
             function n() {
                 return (typeof e == "string" ? r[e] : e).apply(r, arguments)
             }
             var r = this;
             return setTimeout(n, t || 0)
         },
         _hoverable: function(t) {
             this.hoverable = this.hoverable.add(t), this._on(t, {
                 mouseenter: function(t) {
                     e(t.currentTarget).addClass("ui-state-hover")
                 },
                 mouseleave: function(t) {
                     e(t.currentTarget).removeClass("ui-state-hover")
                 }
             })
         },
         _focusable: function(t) {
             this.focusable = this.focusable.add(t), this._on(t, {
                 focusin: function(t) {
                     e(t.currentTarget).addClass("ui-state-focus")
                 },
                 focusout: function(t) {
                     e(t.currentTarget).removeClass("ui-state-focus")
                 }
             })
         },
         _trigger: function(t, n, r) {
             var i, s, o = this.options[t];
             r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
             if (s)
                 for (i in s) i in n || (n[i] = s[i]);
             return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
         }
     }, e.each({
         show: "fadeIn",
         hide: "fadeOut"
     }, function(t, n) {
         e.Widget.prototype["_" + t] = function(r, i, s) {
             typeof i == "string" && (i = {
                 effect: i
             });
             var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
             i = i || {}, typeof i == "number" && (i = {
                 duration: i
             }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && (e.effects.effect[u] || e.uiBackCompat !== !1 && e.effects[u]) ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
                 e(this)[t](), s && s.call(r[0]), n()
             })
         }
     }), e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function() {
         return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
     })
 }(jQuery),
 function(e, t) {
     var n = !1;
     e(document).mouseup(function(e) {
         n = !1
     }), e.widget("ui.mouse", {
         version: "1.9.2",
         options: {
             cancel: "input,textarea,button,select,option",
             distance: 1,
             delay: 0
         },
         _mouseInit: function() {
             var t = this;
             this.element.bind("mousedown." + this.widgetName, function(e) {
                 return t._mouseDown(e)
             }).bind("click." + this.widgetName, function(n) {
                 if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
             }), this.started = !1
         },
         _mouseDestroy: function() {
             this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
         },
         _mouseDown: function(t) {
             if (n) return;
             this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
             var r = this,
                 i = t.which === 1,
                 s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
             if (!i || s || !this._mouseCapture(t)) return !0;
             this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                 r.mouseDelayMet = !0
             }, this.options.delay));
             if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                 this._mouseStarted = this._mouseStart(t) !== !1;
                 if (!this._mouseStarted) return t.preventDefault(), !0
             }
             return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                 return r._mouseMove(e)
             }, this._mouseUpDelegate = function(e) {
                 return r._mouseUp(e)
             }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0
         },
         _mouseMove: function(t) {
             return !e.ui.ie || document.documentMode >= 9 || !!t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
         },
         _mouseUp: function(t) {
             return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
         },
         _mouseDistanceMet: function(e) {
             return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
         },
         _mouseDelayMet: function(e) {
             return this.mouseDelayMet
         },
         _mouseStart: function(e) {},
         _mouseDrag: function(e) {},
         _mouseStop: function(e) {},
         _mouseCapture: function(e) {
             return !0
         }
     })
 }(jQuery),
 function(e, t) {
     e.widget("ui.draggable", e.ui.mouse, {
         version: "1.9.2",
         widgetEventPrefix: "drag",
         options: {
             addClasses: !0,
             appendTo: "parent",
             axis: !1,
             connectToSortable: !1,
             containment: !1,
             cursor: "auto",
             cursorAt: !1,
             grid: !1,
             handle: !1,
             helper: "original",
             iframeFix: !1,
             opacity: !1,
             refreshPositions: !1,
             revert: !1,
             revertDuration: 500,
             scope: "default",
             scroll: !0,
             scrollSensitivity: 20,
             scrollSpeed: 20,
             snap: !1,
             snapMode: "both",
             snapTolerance: 20,
             stack: !1,
             zIndex: !1
         },
         _create: function() {
             this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
         },
         _destroy: function() {
             this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
         },
         _mouseCapture: function(t) {
             var n = this.options;
             return this.helper || n.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
                 e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                     width: this.offsetWidth + "px",
                     height: this.offsetHeight + "px",
                     position: "absolute",
                     opacity: "0.001",
                     zIndex: 1e3
                 }).css(e(this).offset()).appendTo("body")
             }), !0) : !1)
         },
         _mouseStart: function(t) {
             var n = this.options;
             return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                 top: this.offset.top - this.margins.top,
                 left: this.offset.left - this.margins.left
             }, e.extend(this.offset, {
                 click: {
                     left: t.pageX - this.offset.left,
                     top: t.pageY - this.offset.top
                 },
                 parent: this._getParentOffset(),
                 relative: this._getRelativeOffset()
             }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), n.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
         },
         _mouseDrag: function(t, n) {
             this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
             if (!n) {
                 var r = this._uiHash();
                 if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                 this.position = r.position
             }
             if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
             if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
             return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
         },
         _mouseStop: function(t) {
             var n = !1;
             e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), this.dropped && (n = this.dropped, this.dropped = !1);
             var r = this.element[0],
                 i = !1;
             while (r && (r = r.parentNode)) r == document && (i = !0);
             if (!i && this.options.helper === "original") return !1;
             if (this.options.revert == "invalid" && !n || this.options.revert == "valid" && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n)) {
                 var s = this;
                 e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                     s._trigger("stop", t) !== !1 && s._clear()
                 })
             } else this._trigger("stop", t) !== !1 && this._clear();
             return !1
         },
         _mouseUp: function(t) {
             return e("div.ui-draggable-iframeFix").each(function() {
                 this.parentNode.removeChild(this)
             }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
         },
         cancel: function() {
             return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
         },
         _getHandle: function(t) {
             var n = !this.options.handle || !e(this.options.handle, this.element).length ? !0 : !1;
             return e(this.options.handle, this.element).find("*").andSelf().each(function() {
                 this == t.target && (n = !0)
             }), n
         },
         _createHelper: function(t) {
             var n = this.options,
                 r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
             return r.parents("body").length || r.appendTo(n.appendTo == "parent" ? this.element[0].parentNode : n.appendTo), r[0] != this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"), r
         },
         _adjustOffsetFromHelper: function(t) {
             typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                 left: +t[0],
                 top: +t[1] || 0
             }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
         },
         _getParentOffset: function() {
             this.offsetParent = this.helper.offsetParent();
             var t = this.offsetParent.offset();
             this.cssPosition == "absolute" && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
             if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.ui.ie) t = {
                 top: 0,
                 left: 0
             };
             return {
                 top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                 left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
             }
         },
         _getRelativeOffset: function() {
             if (this.cssPosition == "relative") {
                 var e = this.element.position();
                 return {
                     top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                     left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                 }
             }
             return {
                 top: 0,
                 left: 0
             }
         },
         _cacheMargins: function() {
             this.margins = {
                 left: parseInt(this.element.css("marginLeft"), 10) || 0,
                 top: parseInt(this.element.css("marginTop"), 10) || 0,
                 right: parseInt(this.element.css("marginRight"), 10) || 0,
                 bottom: parseInt(this.element.css("marginBottom"), 10) || 0
             }
         },
         _cacheHelperProportions: function() {
             this.helperProportions = {
                 width: this.helper.outerWidth(),
                 height: this.helper.outerHeight()
             }
         },
         _setContainment: function() {
             var t = this.options;
             t.containment == "parent" && (t.containment = this.helper[0].parentNode);
             if (t.containment == "document" || t.containment == "window") this.containment = [t.containment == "document" ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t.containment == "document" ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (t.containment == "document" ? 0 : e(window).scrollLeft()) + e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (t.containment == "document" ? 0 : e(window).scrollTop()) + (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
             if (!/^(document|window|parent)$/.test(t.containment) && t.containment.constructor != Array) {
                 var n = e(t.containment),
                     r = n[0];
                 if (!r) return;
                 var i = n.offset(),
                     s = e(r).css("overflow") != "hidden";
                 this.containment = [(parseInt(e(r).css("borderLeftWidth"), 10) || 0) + (parseInt(e(r).css("paddingLeft"), 10) || 0), (parseInt(e(r).css("borderTopWidth"), 10) || 0) + (parseInt(e(r).css("paddingTop"), 10) || 0), (s ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(e(r).css("borderLeftWidth"), 10) || 0) - (parseInt(e(r).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(e(r).css("borderTopWidth"), 10) || 0) - (parseInt(e(r).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n
             } else t.containment.constructor == Array && (this.containment = t.containment)
         },
         _convertPositionTo: function(t, n) {
             n || (n = this.position);
             var r = t == "absolute" ? 1 : -1,
                 i = this.options,
                 s = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                 o = /(html|body)/i.test(s[0].tagName);
             return {
                 top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * r,
                 left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * r
             }
         },
         _generatePosition: function(t) {
             var n = this.options,
                 r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                 i = /(html|body)/i.test(r[0].tagName),
                 s = t.pageX,
                 o = t.pageY;
             if (this.originalPosition) {
                 var u;
                 if (this.containment) {
                     if (this.relative_container) {
                         var a = this.relative_container.offset();
                         u = [this.containment[0] + a.left, this.containment[1] + a.top, this.containment[2] + a.left, this.containment[3] + a.top]
                     } else u = this.containment;
                     t.pageX - this.offset.click.left < u[0] && (s = u[0] + this.offset.click.left), t.pageY - this.offset.click.top < u[1] && (o = u[1] + this.offset.click.top), t.pageX - this.offset.click.left > u[2] && (s = u[2] + this.offset.click.left), t.pageY - this.offset.click.top > u[3] && (o = u[3] + this.offset.click.top)
                 }
                 if (n.grid) {
                     var f = n.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1] : this.originalPageY;
                     o = u ? f - this.offset.click.top < u[1] || f - this.offset.click.top > u[3] ? f - this.offset.click.top < u[1] ? f + n.grid[1] : f - n.grid[1] : f : f;
                     var l = n.grid[0] ? this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0] : this.originalPageX;
                     s = u ? l - this.offset.click.left < u[0] || l - this.offset.click.left > u[2] ? l - this.offset.click.left < u[0] ? l + n.grid[0] : l - n.grid[0] : l : l
                 }
             }
             return {
                 top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                 left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
             }
         },
         _clear: function() {
             this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
         },
         _trigger: function(t, n, r) {
             return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r]), t == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r)
         },
         plugins: {},
         _uiHash: function(e) {
             return {
                 helper: this.helper,
                 position: this.position,
                 originalPosition: this.originalPosition,
                 offset: this.positionAbs
             }
         }
     }), e.ui.plugin.add("draggable", "connectToSortable", {
         start: function(t, n) {
             var r = e(this).data("draggable"),
                 i = r.options,
                 s = e.extend({}, n, {
                     item: r.element
                 });
             r.sortables = [], e(i.connectToSortable).each(function() {
                 var n = e.data(this, "sortable");
                 n && !n.options.disabled && (r.sortables.push({
                     instance: n,
                     shouldRevert: n.options.revert
                 }), n.refreshPositions(), n._trigger("activate", t, s))
             })
         },
         stop: function(t, n) {
             var r = e(this).data("draggable"),
                 i = e.extend({}, n, {
                     item: r.element
                 });
             e.each(r.sortables, function() {
                 this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper == "original" && this.instance.currentItem.css({
                     top: "auto",
                     left: "auto"
                 })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
             })
         },
         drag: function(t, n) {
             var r = e(this).data("draggable"),
                 i = this,
                 s = function(t) {
                     var n = this.offset.click.top,
                         r = this.offset.click.left,
                         i = this.positionAbs.top,
                         s = this.positionAbs.left,
                         o = t.height,
                         u = t.width,
                         a = t.top,
                         f = t.left;
                     return e.ui.isOver(i + n, s + r, a, f, o, u)
                 };
             e.each(r.sortables, function(s) {
                 var o = !1,
                     u = this;
                 this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, e.each(r.sortables, function() {
                     return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this != u && this.instance._intersectsWith(this.instance.containerCache) && e.ui.contains(u.instance.element[0], this.instance.element[0]) && (o = !1), o
                 })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                     return n.helper[0]
                 }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
             })
         }
     }), e.ui.plugin.add("draggable", "cursor", {
         start: function(t, n) {
             var r = e("body"),
                 i = e(this).data("draggable").options;
             r.css("cursor") && (i._cursor = r.css("cursor")), r.css("cursor", i.cursor)
         },
         stop: function(t, n) {
             var r = e(this).data("draggable").options;
             r._cursor && e("body").css("cursor", r._cursor)
         }
     }), e.ui.plugin.add("draggable", "opacity", {
         start: function(t, n) {
             var r = e(n.helper),
                 i = e(this).data("draggable").options;
             r.css("opacity") && (i._opacity = r.css("opacity")), r.css("opacity", i.opacity)
         },
         stop: function(t, n) {
             var r = e(this).data("draggable").options;
             r._opacity && e(n.helper).css("opacity", r._opacity)
         }
     }), e.ui.plugin.add("draggable", "scroll", {
         start: function(t, n) {
             var r = e(this).data("draggable");
             r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML" && (r.overflowOffset = r.scrollParent.offset())
         },
         drag: function(t, n) {
             var r = e(this).data("draggable"),
                 i = r.options,
                 s = !1;
             if (r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML") {
                 if (!i.axis || i.axis != "x") r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop - i.scrollSpeed);
                 if (!i.axis || i.axis != "y") r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft - i.scrollSpeed)
             } else {
                 if (!i.axis || i.axis != "x") t.pageY - e(document).scrollTop() < i.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed));
                 if (!i.axis || i.axis != "y") t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed))
             }
             s !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(r, t)
         }
     }), e.ui.plugin.add("draggable", "snap", {
         start: function(t, n) {
             var r = e(this).data("draggable"),
                 i = r.options;
             r.snapElements = [], e(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function() {
                 var t = e(this),
                     n = t.offset();
                 this != r.element[0] && r.snapElements.push({
                     item: this,
                     width: t.outerWidth(),
                     height: t.outerHeight(),
                     top: n.top,
                     left: n.left
                 })
             })
         },
         drag: function(t, n) {
             var r = e(this).data("draggable"),
                 i = r.options,
                 s = i.snapTolerance,
                 o = n.offset.left,
                 u = o + r.helperProportions.width,
                 a = n.offset.top,
                 f = a + r.helperProportions.height;
             for (var l = r.snapElements.length - 1; l >= 0; l--) {
                 var c = r.snapElements[l].left,
                     h = c + r.snapElements[l].width,
                     p = r.snapElements[l].top,
                     d = p + r.snapElements[l].height;
                 if (!(c - s < o && o < h + s && p - s < a && a < d + s || c - s < o && o < h + s && p - s < f && f < d + s || c - s < u && u < h + s && p - s < a && a < d + s || c - s < u && u < h + s && p - s < f && f < d + s)) {
                     r.snapElements[l].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, e.extend(r._uiHash(), {
                         snapItem: r.snapElements[l].item
                     })), r.snapElements[l].snapping = !1;
                     continue
                 }
                 if (i.snapMode != "inner") {
                     var v = Math.abs(p - f) <= s,
                         m = Math.abs(d - a) <= s,
                         g = Math.abs(c - u) <= s,
                         y = Math.abs(h - o) <= s;
                     v && (n.position.top = r._convertPositionTo("relative", {
                         top: p - r.helperProportions.height,
                         left: 0
                     }).top - r.margins.top), m && (n.position.top = r._convertPositionTo("relative", {
                         top: d,
                         left: 0
                     }).top - r.margins.top), g && (n.position.left = r._convertPositionTo("relative", {
                         top: 0,
                         left: c - r.helperProportions.width
                     }).left - r.margins.left), y && (n.position.left = r._convertPositionTo("relative", {
                         top: 0,
                         left: h
                     }).left - r.margins.left)
                 }
                 var b = v || m || g || y;
                 if (i.snapMode != "outer") {
                     var v = Math.abs(p - a) <= s,
                         m = Math.abs(d - f) <= s,
                         g = Math.abs(c - o) <= s,
                         y = Math.abs(h - u) <= s;
                     v && (n.position.top = r._convertPositionTo("relative", {
                         top: p,
                         left: 0
                     }).top - r.margins.top), m && (n.position.top = r._convertPositionTo("relative", {
                         top: d - r.helperProportions.height,
                         left: 0
                     }).top - r.margins.top), g && (n.position.left = r._convertPositionTo("relative", {
                         top: 0,
                         left: c
                     }).left - r.margins.left), y && (n.position.left = r._convertPositionTo("relative", {
                         top: 0,
                         left: h - r.helperProportions.width
                     }).left - r.margins.left)
                 }!r.snapElements[l].snapping && (v || m || g || y || b) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, e.extend(r._uiHash(), {
                     snapItem: r.snapElements[l].item
                 })), r.snapElements[l].snapping = v || m || g || y || b
             }
         }
     }), e.ui.plugin.add("draggable", "stack", {
         start: function(t, n) {
             var r = e(this).data("draggable").options,
                 i = e.makeArray(e(r.stack)).sort(function(t, n) {
                     return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                 });
             if (!i.length) return;
             var s = parseInt(i[0].style.zIndex) || 0;
             e(i).each(function(e) {
                 this.style.zIndex = s + e
             }), this[0].style.zIndex = s + i.length
         }
     }), e.ui.plugin.add("draggable", "zIndex", {
         start: function(t, n) {
             var r = e(n.helper),
                 i = e(this).data("draggable").options;
             r.css("zIndex") && (i._zIndex = r.css("zIndex")), r.css("zIndex", i.zIndex)
         },
         stop: function(t, n) {
             var r = e(this).data("draggable").options;
             r._zIndex && e(n.helper).css("zIndex", r._zIndex)
         }
     })
 }(jQuery),
 function(e, t) {
     e.widget("ui.droppable", {
         version: "1.9.2",
         widgetEventPrefix: "drop",
         options: {
             accept: "*",
             activeClass: !1,
             addClasses: !0,
             greedy: !1,
             hoverClass: !1,
             scope: "default",
             tolerance: "intersect"
         },
         _create: function() {
             var t = this.options,
                 n = t.accept;
             this.isover = 0, this.isout = 1, this.accept = e.isFunction(n) ? n : function(e) {
                 return e.is(n)
             }, this.proportions = {
                 width: this.element[0].offsetWidth,
                 height: this.element[0].offsetHeight
             }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
         },
         _destroy: function() {
             var t = e.ui.ddmanager.droppables[this.options.scope];
             for (var n = 0; n < t.length; n++) t[n] == this && t.splice(n, 1);
             this.element.removeClass("ui-droppable ui-droppable-disabled")
         },
         _setOption: function(t, n) {
             t == "accept" && (this.accept = e.isFunction(n) ? n : function(e) {
                 return e.is(n)
             }), e.Widget.prototype._setOption.apply(this, arguments)
         },
         _activate: function(t) {
             var n = e.ui.ddmanager.current;
             this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n))
         },
         _deactivate: function(t) {
             var n = e.ui.ddmanager.current;
             this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n))
         },
         _over: function(t) {
             var n = e.ui.ddmanager.current;
             if (!n || (n.currentItem || n.element)[0] == this.element[0]) return;
             this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
         },
         _out: function(t) {
             var n = e.ui.ddmanager.current;
             if (!n || (n.currentItem || n.element)[0] == this.element[0]) return;
             this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
         },
         _drop: function(t, n) {
             var r = n || e.ui.ddmanager.current;
             if (!r || (r.currentItem || r.element)[0] == this.element[0]) return !1;
             var i = !1;
             return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                 var t = e.data(this, "droppable");
                 if (t.options.greedy && !t.options.disabled && t.options.scope == r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(t, {
                         offset: t.element.offset()
                     }), t.options.tolerance)) return i = !0, !1
             }), i ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1
         },
         ui: function(e) {
             return {
                 draggable: e.currentItem || e.element,
                 helper: e.helper,
                 position: e.position,
                 offset: e.positionAbs
             }
         }
     }), e.ui.intersect = function(t, n, r) {
         if (!n.offset) return !1;
         var i = (t.positionAbs || t.position.absolute).left,
             s = i + t.helperProportions.width,
             o = (t.positionAbs || t.position.absolute).top,
             u = o + t.helperProportions.height,
             a = n.offset.left,
             f = a + n.proportions.width,
             l = n.offset.top,
             c = l + n.proportions.height;
         switch (r) {
             case "fit":
                 return a <= i && s <= f && l <= o && u <= c;
             case "intersect":
                 return a < i + t.helperProportions.width / 2 && s - t.helperProportions.width / 2 < f && l < o + t.helperProportions.height / 2 && u - t.helperProportions.height / 2 < c;
             case "pointer":
                 var h = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
                     p = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top,
                     d = e.ui.isOver(p, h, l, a, n.proportions.height, n.proportions.width);
                 return d;
             case "touch":
                 return (o >= l && o <= c || u >= l && u <= c || o < l && u > c) && (i >= a && i <= f || s >= a && s <= f || i < a && s > f);
             default:
                 return !1
         }
     }, e.ui.ddmanager = {
         current: null,
         droppables: {
             "default": []
         },
         prepareOffsets: function(t, n) {
             var r = e.ui.ddmanager.droppables[t.options.scope] || [],
                 i = n ? n.type : null,
                 s = (t.currentItem || t.element).find(":data(droppable)").andSelf();
             e: for (var o = 0; o < r.length; o++) {
                 if (r[o].options.disabled || t && !r[o].accept.call(r[o].element[0], t.currentItem || t.element)) continue;
                 for (var u = 0; u < s.length; u++)
                     if (s[u] == r[o].element[0]) {
                         r[o].proportions.height = 0;
                         continue e
                     }
                 r[o].visible = r[o].element.css("display") != "none";
                 if (!r[o].visible) continue;
                 i == "mousedown" && r[o]._activate.call(r[o], n), r[o].offset = r[o].element.offset(), r[o].proportions = {
                     width: r[o].element[0].offsetWidth,
                     height: r[o].element[0].offsetHeight
                 }
             }
         },
         drop: function(t, n) {
             var r = !1;
             return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                 if (!this.options) return;
                 !this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, n) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, n))
             }), r
         },
         dragStart: function(t, n) {
             t.element.parentsUntil("body").bind("scroll.droppable", function() {
                 t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
             })
         },
         drag: function(t, n) {
             t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                 if (this.options.disabled || this.greedyChild || !this.visible) return;
                 var r = e.ui.intersect(t, this, this.options.tolerance),
                     i = !r && this.isover == 1 ? "isout" : r && this.isover == 0 ? "isover" : null;
                 if (!i) return;
                 var s;
                 if (this.options.greedy) {
                     var o = this.options.scope,
                         u = this.element.parents(":data(droppable)").filter(function() {
                             return e.data(this, "droppable").options.scope === o
                         });
                     u.length && (s = e.data(u[0], "droppable"), s.greedyChild = i == "isover" ? 1 : 0)
                 }
                 s && i == "isover" && (s.isover = 0, s.isout = 1, s._out.call(s, n)), this[i] = 1, this[i == "isout" ? "isover" : "isout"] = 0, this[i == "isover" ? "_over" : "_out"].call(this, n), s && i == "isout" && (s.isout = 0, s.isover = 1, s._over.call(s, n))
             })
         },
         dragStop: function(t, n) {
             t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
         }
     }
 }(jQuery),
 function(e, t) {
     e.widget("ui.resizable", e.ui.mouse, {
         version: "1.9.2",
         widgetEventPrefix: "resize",
         options: {
             alsoResize: !1,
             animate: !1,
             animateDuration: "slow",
             animateEasing: "swing",
             aspectRatio: !1,
             autoHide: !1,
             containment: !1,
             ghost: !1,
             grid: !1,
             handles: "e,s,se",
             helper: !1,
             maxHeight: null,
             maxWidth: null,
             minHeight: 10,
             minWidth: 10,
             zIndex: 1e3
         },
         _create: function() {
             var t = this,
                 n = this.options;
             this.element.addClass("ui-resizable"), e.extend(this, {
                 _aspectRatio: !!n.aspectRatio,
                 aspectRatio: n.aspectRatio,
                 originalElement: this.element,
                 _proportionallyResizeElements: [],
                 _helper: n.helper || n.ghost || n.animate ? n.helper || "ui-resizable-helper" : null
             }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                 position: this.element.css("position"),
                 width: this.element.outerWidth(),
                 height: this.element.outerHeight(),
                 top: this.element.css("top"),
                 left: this.element.css("left")
             })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                 marginLeft: this.originalElement.css("marginLeft"),
                 marginTop: this.originalElement.css("marginTop"),
                 marginRight: this.originalElement.css("marginRight"),
                 marginBottom: this.originalElement.css("marginBottom")
             }), this.originalElement.css({
                 marginLeft: 0,
                 marginTop: 0,
                 marginRight: 0,
                 marginBottom: 0
             }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                 position: "static",
                 zoom: 1,
                 display: "block"
             })), this.originalElement.css({
                 margin: this.originalElement.css("margin")
             }), this._proportionallyResize()), this.handles = n.handles || (e(".ui-resizable-handle", this.element).length ? {
                 n: ".ui-resizable-n",
                 e: ".ui-resizable-e",
                 s: ".ui-resizable-s",
                 w: ".ui-resizable-w",
                 se: ".ui-resizable-se",
                 sw: ".ui-resizable-sw",
                 ne: ".ui-resizable-ne",
                 nw: ".ui-resizable-nw"
             } : "e,s,se");
             if (this.handles.constructor == String) {
                 this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
                 var r = this.handles.split(",");
                 this.handles = {};
                 for (var i = 0; i < r.length; i++) {
                     var s = e.trim(r[i]),
                         o = "ui-resizable-" + s,
                         u = e('<div class="ui-resizable-handle ' + o + '"></div>');
                     u.css({
                         zIndex: n.zIndex
                     }), "se" == s && u.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(u)
                 }
             }
             this._renderAxis = function(t) {
                 t = t || this.element;
                 for (var n in this.handles) {
                     this.handles[n].constructor == String && (this.handles[n] = e(this.handles[n], this.element).show());
                     if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                         var r = e(this.handles[n], this.element),
                             i = 0;
                         i = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth();
                         var s = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join("");
                         t.css(s, i), this._proportionallyResize()
                     }
                     if (!e(this.handles[n]).length) continue
                 }
             }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                 if (!t.resizing) {
                     if (this.className) var e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                     t.axis = e && e[1] ? e[1] : "se"
                 }
             }), n.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                 if (n.disabled) return;
                 e(this).removeClass("ui-resizable-autohide"), t._handles.show()
             }).mouseleave(function() {
                 if (n.disabled) return;
                 t.resizing || (e(this).addClass("ui-resizable-autohide"), t._handles.hide())
             })), this._mouseInit()
         },
         _destroy: function() {
             this._mouseDestroy();
             var t = function(t) {
                 e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
             };
             if (this.elementIsWrapper) {
                 t(this.element);
                 var n = this.element;
                 this.originalElement.css({
                     position: n.css("position"),
                     width: n.outerWidth(),
                     height: n.outerHeight(),
                     top: n.css("top"),
                     left: n.css("left")
                 }).insertAfter(n), n.remove()
             }
             return this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
         },
         _mouseCapture: function(t) {
             var n = !1;
             for (var r in this.handles) e(this.handles[r])[0] == t.target && (n = !0);
             return !this.options.disabled && n
         },
         _mouseStart: function(t) {
             var r = this.options,
                 i = this.element.position(),
                 s = this.element;
             this.resizing = !0, this.documentScroll = {
                 top: e(document).scrollTop(),
                 left: e(document).scrollLeft()
             }, (s.is(".ui-draggable") || /absolute/.test(s.css("position"))) && s.css({
                 position: "absolute",
                 top: i.top,
                 left: i.left
             }), this._renderProxy();
             var o = n(this.helper.css("left")),
                 u = n(this.helper.css("top"));
             r.containment && (o += e(r.containment).scrollLeft() || 0, u += e(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                 left: o,
                 top: u
             }, this.size = this._helper ? {
                 width: s.outerWidth(),
                 height: s.outerHeight()
             } : {
                 width: s.width(),
                 height: s.height()
             }, this.originalSize = this._helper ? {
                 width: s.outerWidth(),
                 height: s.outerHeight()
             } : {
                 width: s.width(),
                 height: s.height()
             }, this.originalPosition = {
                 left: o,
                 top: u
             }, this.sizeDiff = {
                 width: s.outerWidth() - s.width(),
                 height: s.outerHeight() - s.height()
             }, this.originalMousePosition = {
                 left: t.pageX,
                 top: t.pageY
             }, this.aspectRatio = typeof r.aspectRatio == "number" ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
             var a = e(".ui-resizable-" + this.axis).css("cursor");
             return e("body").css("cursor", a == "auto" ? this.axis + "-resize" : a), s.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
         },
         _mouseDrag: function(e) {
             var t = this.helper,
                 n = this.options,
                 r = {},
                 i = this,
                 s = this.originalMousePosition,
                 o = this.axis,
                 u = e.pageX - s.left || 0,
                 a = e.pageY - s.top || 0,
                 f = this._change[o];
             if (!f) return !1;
             var l = f.apply(this, [e, u, a]);
             this._updateVirtualBoundaries(e.shiftKey);
             if (this._aspectRatio || e.shiftKey) l = this._updateRatio(l, e);
             return l = this._respectSize(l, e), this._propagate("resize", e), t.css({
                 top: this.position.top + "px",
                 left: this.position.left + "px",
                 width: this.size.width + "px",
                 height: this.size.height + "px"
             }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(l), this._trigger("resize", e, this.ui()), !1
         },
         _mouseStop: function(t) {
             this.resizing = !1;
             var n = this.options,
                 r = this;
             if (this._helper) {
                 var i = this._proportionallyResizeElements,
                     s = i.length && /textarea/i.test(i[0].nodeName),
                     o = s && e.ui.hasScroll(i[0], "left") ? 0 : r.sizeDiff.height,
                     u = s ? 0 : r.sizeDiff.width,
                     a = {
                         width: r.helper.width() - u,
                         height: r.helper.height() - o
                     },
                     f = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null,
                     l = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
                 n.animate || this.element.css(e.extend(a, {
                     top: l,
                     left: f
                 })), r.helper.height(r.size.height), r.helper.width(r.size.width), this._helper && !n.animate && this._proportionallyResize()
             }
             return e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
         },
         _updateVirtualBoundaries: function(e) {
             var t = this.options,
                 n, i, s, o, u;
             u = {
                 minWidth: r(t.minWidth) ? t.minWidth : 0,
                 maxWidth: r(t.maxWidth) ? t.maxWidth : Infinity,
                 minHeight: r(t.minHeight) ? t.minHeight : 0,
                 maxHeight: r(t.maxHeight) ? t.maxHeight : Infinity
             };
             if (this._aspectRatio || e) n = u.minHeight * this.aspectRatio, s = u.minWidth / this.aspectRatio, i = u.maxHeight * this.aspectRatio, o = u.maxWidth / this.aspectRatio, n > u.minWidth && (u.minWidth = n), s > u.minHeight && (u.minHeight = s), i < u.maxWidth && (u.maxWidth = i), o < u.maxHeight && (u.maxHeight = o);
             this._vBoundaries = u
         },
         _updateCache: function(e) {
             var t = this.options;
             this.offset = this.helper.offset(), r(e.left) && (this.position.left = e.left), r(e.top) && (this.position.top = e.top), r(e.height) && (this.size.height = e.height), r(e.width) && (this.size.width = e.width)
         },
         _updateRatio: function(e, t) {
             var n = this.options,
                 i = this.position,
                 s = this.size,
                 o = this.axis;
             return r(e.height) ? e.width = e.height * this.aspectRatio : r(e.width) && (e.height = e.width / this.aspectRatio), o == "sw" && (e.left = i.left + (s.width - e.width), e.top = null), o == "nw" && (e.top = i.top + (s.height - e.height), e.left = i.left + (s.width - e.width)), e
         },
         _respectSize: function(e, t) {
             var n = this.helper,
                 i = this._vBoundaries,
                 s = this._aspectRatio || t.shiftKey,
                 o = this.axis,
                 u = r(e.width) && i.maxWidth && i.maxWidth < e.width,
                 a = r(e.height) && i.maxHeight && i.maxHeight < e.height,
                 f = r(e.width) && i.minWidth && i.minWidth > e.width,
                 l = r(e.height) && i.minHeight && i.minHeight > e.height;
             f && (e.width = i.minWidth), l && (e.height = i.minHeight), u && (e.width = i.maxWidth), a && (e.height = i.maxHeight);
             var c = this.originalPosition.left + this.originalSize.width,
                 h = this.position.top + this.size.height,
                 p = /sw|nw|w/.test(o),
                 d = /nw|ne|n/.test(o);
             f && p && (e.left = c - i.minWidth), u && p && (e.left = c - i.maxWidth), l && d && (e.top = h - i.minHeight), a && d && (e.top = h - i.maxHeight);
             var v = !e.width && !e.height;
             return v && !e.left && e.top ? e.top = null : v && !e.top && e.left && (e.left = null), e
         },
         _proportionallyResize: function() {
             var t = this.options;
             if (!this._proportionallyResizeElements.length) return;
             var n = this.helper || this.element;
             for (var r = 0; r < this._proportionallyResizeElements.length; r++) {
                 var i = this._proportionallyResizeElements[r];
                 if (!this.borderDif) {
                     var s = [i.css("borderTopWidth"), i.css("borderRightWidth"), i.css("borderBottomWidth"), i.css("borderLeftWidth")],
                         o = [i.css("paddingTop"), i.css("paddingRight"), i.css("paddingBottom"), i.css("paddingLeft")];
                     this.borderDif = e.map(s, function(e, t) {
                         var n = parseInt(e, 10) || 0,
                             r = parseInt(o[t], 10) || 0;
                         return n + r
                     })
                 }
                 i.css({
                     height: n.height() - this.borderDif[0] - this.borderDif[2] || 0,
                     width: n.width() - this.borderDif[1] - this.borderDif[3] || 0
                 })
             }
         },
         _renderProxy: function() {
             var t = this.element,
                 n = this.options;
             this.elementOffset = t.offset();
             if (this._helper) {
                 this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
                 var r = e.ui.ie6 ? 1 : 0,
                     i = e.ui.ie6 ? 2 : -1;
                 this.helper.addClass(this._helper).css({
                     width: this.element.outerWidth() + i,
                     height: this.element.outerHeight() + i,
                     position: "absolute",
                     left: this.elementOffset.left - r + "px",
                     top: this.elementOffset.top - r + "px",
                     zIndex: ++n.zIndex
                 }), this.helper.appendTo("body").disableSelection()
             } else this.helper = this.element
         },
         _change: {
             e: function(e, t, n) {
                 return {
                     width: this.originalSize.width + t
                 }
             },
             w: function(e, t, n) {
                 var r = this.options,
                     i = this.originalSize,
                     s = this.originalPosition;
                 return {
                     left: s.left + t,
                     width: i.width - t
                 }
             },
             n: function(e, t, n) {
                 var r = this.options,
                     i = this.originalSize,
                     s = this.originalPosition;
                 return {
                     top: s.top + n,
                     height: i.height - n
                 }
             },
             s: function(e, t, n) {
                 return {
                     height: this.originalSize.height + n
                 }
             },
             se: function(t, n, r) {
                 return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
             },
             sw: function(t, n, r) {
                 return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
             },
             ne: function(t, n, r) {
                 return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
             },
             nw: function(t, n, r) {
                 return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
             }
         },
         _propagate: function(t, n) {
             e.ui.plugin.call(this, t, [n, this.ui()]), t != "resize" && this._trigger(t, n, this.ui())
         },
         plugins: {},
         ui: function() {
             return {
                 originalElement: this.originalElement,
                 element: this.element,
                 helper: this.helper,
                 position: this.position,
                 size: this.size,
                 originalSize: this.originalSize,
                 originalPosition: this.originalPosition
             }
         }
     }), e.ui.plugin.add("resizable", "alsoResize", {
         start: function(t, n) {
             var r = e(this).data("resizable"),
                 i = r.options,
                 s = function(t) {
                     e(t).each(function() {
                         var t = e(this);
                         t.data("resizable-alsoresize", {
                             width: parseInt(t.width(), 10),
                             height: parseInt(t.height(), 10),
                             left: parseInt(t.css("left"), 10),
                             top: parseInt(t.css("top"), 10)
                         })
                     })
                 };
             typeof i.alsoResize == "object" && !i.alsoResize.parentNode ? i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function(e) {
                 s(e)
             }) : s(i.alsoResize)
         },
         resize: function(t, n) {
             var r = e(this).data("resizable"),
                 i = r.options,
                 s = r.originalSize,
                 o = r.originalPosition,
                 u = {
                     height: r.size.height - s.height || 0,
                     width: r.size.width - s.width || 0,
                     top: r.position.top - o.top || 0,
                     left: r.position.left - o.left || 0
                 },
                 a = function(t, r) {
                     e(t).each(function() {
                         var t = e(this),
                             i = e(this).data("resizable-alsoresize"),
                             s = {},
                             o = r && r.length ? r : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                         e.each(o, function(e, t) {
                             var n = (i[t] || 0) + (u[t] || 0);
                             n && n >= 0 && (s[t] = n || null)
                         }), t.css(s)
                     })
                 };
             typeof i.alsoResize == "object" && !i.alsoResize.nodeType ? e.each(i.alsoResize, function(e, t) {
                 a(e, t)
             }) : a(i.alsoResize)
         },
         stop: function(t, n) {
             e(this).removeData("resizable-alsoresize")
         }
     }), e.ui.plugin.add("resizable", "animate", {
         stop: function(t, n) {
             var r = e(this).data("resizable"),
                 i = r.options,
                 s = r._proportionallyResizeElements,
                 o = s.length && /textarea/i.test(s[0].nodeName),
                 u = o && e.ui.hasScroll(s[0], "left") ? 0 : r.sizeDiff.height,
                 a = o ? 0 : r.sizeDiff.width,
                 f = {
                     width: r.size.width - a,
                     height: r.size.height - u
                 },
                 l = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null,
                 c = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
             r.element.animate(e.extend(f, c && l ? {
                 top: c,
                 left: l
             } : {}), {
                 duration: i.animateDuration,
                 easing: i.animateEasing,
                 step: function() {
                     var n = {
                         width: parseInt(r.element.css("width"), 10),
                         height: parseInt(r.element.css("height"), 10),
                         top: parseInt(r.element.css("top"), 10),
                         left: parseInt(r.element.css("left"), 10)
                     };
                     s && s.length && e(s[0]).css({
                         width: n.width,
                         height: n.height
                     }), r._updateCache(n), r._propagate("resize", t)
                 }
             })
         }
     }), e.ui.plugin.add("resizable", "containment", {
         start: function(t, r) {
             var i = e(this).data("resizable"),
                 s = i.options,
                 o = i.element,
                 u = s.containment,
                 a = u instanceof e ? u.get(0) : /parent/.test(u) ? o.parent().get(0) : u;
             if (!a) return;
             i.containerElement = e(a);
             if (/document/.test(u) || u == document) i.containerOffset = {
                 left: 0,
                 top: 0
             }, i.containerPosition = {
                 left: 0,
                 top: 0
             }, i.parentData = {
                 element: e(document),
                 left: 0,
                 top: 0,
                 width: e(document).width(),
                 height: e(document).height() || document.body.parentNode.scrollHeight
             };
             else {
                 var f = e(a),
                     l = [];
                 e(["Top", "Right", "Left", "Bottom"]).each(function(e, t) {
                     l[e] = n(f.css("padding" + t))
                 }), i.containerOffset = f.offset(), i.containerPosition = f.position(), i.containerSize = {
                     height: f.innerHeight() - l[3],
                     width: f.innerWidth() - l[1]
                 };
                 var c = i.containerOffset,
                     h = i.containerSize.height,
                     p = i.containerSize.width,
                     d = e.ui.hasScroll(a, "left") ? a.scrollWidth : p,
                     v = e.ui.hasScroll(a) ? a.scrollHeight : h;
                 i.parentData = {
                     element: a,
                     left: c.left,
                     top: c.top,
                     width: d,
                     height: v
                 }
             }
         },
         resize: function(t, n) {
             var r = e(this).data("resizable"),
                 i = r.options,
                 s = r.containerSize,
                 o = r.containerOffset,
                 u = r.size,
                 a = r.position,
                 f = r._aspectRatio || t.shiftKey,
                 l = {
                     top: 0,
                     left: 0
                 },
                 c = r.containerElement;
             c[0] != document && /static/.test(c.css("position")) && (l = o), a.left < (r._helper ? o.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - o.left : r.position.left - l.left), f && (r.size.height = r.size.width / r.aspectRatio), r.position.left = i.helper ? o.left : 0), a.top < (r._helper ? o.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - o.top : r.position.top), f && (r.size.width = r.size.height * r.aspectRatio), r.position.top = r._helper ? o.top : 0), r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top;
             var h = Math.abs((r._helper ? r.offset.left - l.left : r.offset.left - l.left) + r.sizeDiff.width),
                 p = Math.abs((r._helper ? r.offset.top - l.top : r.offset.top - o.top) + r.sizeDiff.height),
                 d = r.containerElement.get(0) == r.element.parent().get(0),
                 v = /relative|absolute/.test(r.containerElement.css("position"));
             d && v && (h -= r.parentData.left), h + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - h, f && (r.size.height = r.size.width / r.aspectRatio)), p + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - p, f && (r.size.width = r.size.height * r.aspectRatio))
         },
         stop: function(t, n) {
             var r = e(this).data("resizable"),
                 i = r.options,
                 s = r.position,
                 o = r.containerOffset,
                 u = r.containerPosition,
                 a = r.containerElement,
                 f = e(r.helper),
                 l = f.offset(),
                 c = f.outerWidth() - r.sizeDiff.width,
                 h = f.outerHeight() - r.sizeDiff.height;
             r._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
                 left: l.left - u.left - o.left,
                 width: c,
                 height: h
             }), r._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
                 left: l.left - u.left - o.left,
                 width: c,
                 height: h
             })
         }
     }), e.ui.plugin.add("resizable", "ghost", {
         start: function(t, n) {
             var r = e(this).data("resizable"),
                 i = r.options,
                 s = r.size;
             r.ghost = r.originalElement.clone(), r.ghost.css({
                 opacity: .25,
                 display: "block",
                 position: "relative",
                 height: s.height,
                 width: s.width,
                 margin: 0,
                 left: 0,
                 top: 0
             }).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : ""), r.ghost.appendTo(r.helper)
         },
         resize: function(t, n) {
             var r = e(this).data("resizable"),
                 i = r.options;
             r.ghost && r.ghost.css({
                 position: "relative",
                 height: r.size.height,
                 width: r.size.width
             })
         },
         stop: function(t, n) {
             var r = e(this).data("resizable"),
                 i = r.options;
             r.ghost && r.helper && r.helper.get(0).removeChild(r.ghost.get(0))
         }
     }), e.ui.plugin.add("resizable", "grid", {
         resize: function(t, n) {
             var r = e(this).data("resizable"),
                 i = r.options,
                 s = r.size,
                 o = r.originalSize,
                 u = r.originalPosition,
                 a = r.axis,
                 f = i._aspectRatio || t.shiftKey;
             i.grid = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid;
             var l = Math.round((s.width - o.width) / (i.grid[0] || 1)) * (i.grid[0] || 1),
                 c = Math.round((s.height - o.height) / (i.grid[1] || 1)) * (i.grid[1] || 1);
             /^(se|s|e)$/.test(a) ? (r.size.width = o.width + l, r.size.height = o.height + c) : /^(ne)$/.test(a) ? (r.size.width = o.width + l, r.size.height = o.height + c, r.position.top = u.top - c) : /^(sw)$/.test(a) ? (r.size.width = o.width + l, r.size.height = o.height + c, r.position.left = u.left - l) : (r.size.width = o.width + l, r.size.height = o.height + c, r.position.top = u.top - c, r.position.left = u.left - l)
         }
     });
     var n = function(e) {
             return parseInt(e, 10) || 0
         },
         r = function(e) {
             return !isNaN(parseInt(e, 10))
         }
 }(jQuery),
 function(e, t) {
     e.widget("ui.selectable", e.ui.mouse, {
         version: "1.9.2",
         options: {
             appendTo: "body",
             autoRefresh: !0,
             distance: 0,
             filter: "*",
             tolerance: "touch"
         },
         _create: function() {
             var t = this;
             this.element.addClass("ui-selectable"), this.dragged = !1;
             var n;
             this.refresh = function() {
                 n = e(t.options.filter, t.element[0]), n.addClass("ui-selectee"), n.each(function() {
                     var t = e(this),
                         n = t.offset();
                     e.data(this, "selectable-item", {
                         element: this,
                         $element: t,
                         left: n.left,
                         top: n.top,
                         right: n.left + t.outerWidth(),
                         bottom: n.top + t.outerHeight(),
                         startselected: !1,
                         selected: t.hasClass("ui-selected"),
                         selecting: t.hasClass("ui-selecting"),
                         unselecting: t.hasClass("ui-unselecting")
                     })
                 })
             }, this.refresh(), this.selectees = n.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
         },
         _destroy: function() {
             this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
         },
         _mouseStart: function(t) {
             var n = this;
             this.opos = [t.pageX, t.pageY];
             if (this.options.disabled) return;
             var r = this.options;
             this.selectees = e(r.filter, this.element[0]), this._trigger("start", t), e(r.appendTo).append(this.helper), this.helper.css({
                 left: t.clientX,
                 top: t.clientY,
                 width: 0,
                 height: 0
             }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                 var r = e.data(this, "selectable-item");
                 r.startselected = !0, !t.metaKey && !t.ctrlKey && (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, n._trigger("unselecting", t, {
                     unselecting: r.element
                 }))
             }), e(t.target).parents().andSelf().each(function() {
                 var r = e.data(this, "selectable-item");
                 if (r) {
                     var i = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected");
                     return r.$element.removeClass(i ? "ui-unselecting" : "ui-selected").addClass(i ? "ui-selecting" : "ui-unselecting"), r.unselecting = !i, r.selecting = i, r.selected = i, i ? n._trigger("selecting", t, {
                         selecting: r.element
                     }) : n._trigger("unselecting", t, {
                         unselecting: r.element
                     }), !1
                 }
             })
         },
         _mouseDrag: function(t) {
             var n = this;
             this.dragged = !0;
             if (this.options.disabled) return;
             var r = this.options,
                 i = this.opos[0],
                 s = this.opos[1],
                 o = t.pageX,
                 u = t.pageY;
             if (i > o) {
                 var a = o;
                 o = i, i = a
             }
             if (s > u) {
                 var a = u;
                 u = s, s = a
             }
             return this.helper.css({
                 left: i,
                 top: s,
                 width: o - i,
                 height: u - s
             }), this.selectees.each(function() {
                 var a = e.data(this, "selectable-item");
                 if (!a || a.element == n.element[0]) return;
                 var f = !1;
                 r.tolerance == "touch" ? f = !(a.left > o || a.right < i || a.top > u || a.bottom < s) : r.tolerance == "fit" && (f = a.left > i && a.right < o && a.top > s && a.bottom < u), f ? (a.selected && (a.$element.removeClass("ui-selected"), a.selected = !1), a.unselecting && (a.$element.removeClass("ui-unselecting"), a.unselecting = !1), a.selecting || (a.$element.addClass("ui-selecting"), a.selecting = !0, n._trigger("selecting", t, {
                     selecting: a.element
                 }))) : (a.selecting && ((t.metaKey || t.ctrlKey) && a.startselected ? (a.$element.removeClass("ui-selecting"), a.selecting = !1, a.$element.addClass("ui-selected"), a.selected = !0) : (a.$element.removeClass("ui-selecting"), a.selecting = !1, a.startselected && (a.$element.addClass("ui-unselecting"), a.unselecting = !0), n._trigger("unselecting", t, {
                     unselecting: a.element
                 }))), a.selected && !t.metaKey && !t.ctrlKey && !a.startselected && (a.$element.removeClass("ui-selected"), a.selected = !1, a.$element.addClass("ui-unselecting"), a.unselecting = !0, n._trigger("unselecting", t, {
                     unselecting: a.element
                 })))
             }), !1
         },
         _mouseStop: function(t) {
             var n = this;
             this.dragged = !1;
             var r = this.options;
             return e(".ui-unselecting", this.element[0]).each(function() {
                 var r = e.data(this, "selectable-item");
                 r.$element.removeClass("ui-unselecting"), r.unselecting = !1, r.startselected = !1, n._trigger("unselected", t, {
                     unselected: r.element
                 })
             }), e(".ui-selecting", this.element[0]).each(function() {
                 var r = e.data(this, "selectable-item");
                 r.$element.removeClass("ui-selecting").addClass("ui-selected"), r.selecting = !1, r.selected = !0, r.startselected = !0, n._trigger("selected", t, {
                     selected: r.element
                 })
             }), this._trigger("stop", t), this.helper.remove(), !1
         }
     })
 }(jQuery),
 function(e, t) {
     e.widget("ui.sortable", e.ui.mouse, {
         version: "1.9.2",
         widgetEventPrefix: "sort",
         ready: !1,
         options: {
             appendTo: "parent",
             axis: !1,
             connectWith: !1,
             containment: !1,
             cursor: "auto",
             cursorAt: !1,
             dropOnEmpty: !0,
             forcePlaceholderSize: !1,
             forceHelperSize: !1,
             grid: !1,
             handle: !1,
             helper: "original",
             items: "> *",
             opacity: !1,
             placeholder: !1,
             revert: !1,
             scroll: !0,
             scrollSensitivity: 20,
             scrollSpeed: 20,
             scope: "default",
             tolerance: "intersect",
             zIndex: 1e3
         },
         _create: function() {
             var e = this.options;
             this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? e.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
         },
         _destroy: function() {
             this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
             for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
             return this
         },
         _setOption: function(t, n) {
             t === "disabled" ? (this.options[t] = n, this.widget().toggleClass("ui-sortable-disabled", !!n)) : e.Widget.prototype._setOption.apply(this, arguments)
         },
         _mouseCapture: function(t, n) {
             var r = this;
             if (this.reverting) return !1;
             if (this.options.disabled || this.options.type == "static") return !1;
             this._refreshItems(t);
             var i = null,
                 s = e(t.target).parents().each(function() {
                     if (e.data(this, r.widgetName + "-item") == r) return i = e(this), !1
                 });
             e.data(t.target, r.widgetName + "-item") == r && (i = e(t.target));
             if (!i) return !1;
             if (this.options.handle && !n) {
                 var o = !1;
                 e(this.options.handle, i).find("*").andSelf().each(function() {
                     this == t.target && (o = !0)
                 });
                 if (!o) return !1
             }
             return this.currentItem = i, this._removeCurrentsFromItems(), !0
         },
         _mouseStart: function(t, n, r) {
             var i = this.options;
             this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                 top: this.offset.top - this.margins.top,
                 left: this.offset.left - this.margins.left
             }, e.extend(this.offset, {
                 click: {
                     left: t.pageX - this.offset.left,
                     top: t.pageY - this.offset.top
                 },
                 parent: this._getParentOffset(),
                 relative: this._getRelativeOffset()
             }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this.domPosition = {
                 prev: this.currentItem.prev()[0],
                 parent: this.currentItem.parent()[0]
             }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), i.containment && this._setContainment(), i.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", i.cursor)), i.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", i.opacity)), i.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", i.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
             if (!r)
                 for (var s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", t, this._uiHash(this));
             return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
         },
         _mouseDrag: function(t) {
             this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
             if (this.options.scroll) {
                 var n = this.options,
                     r = !1;
                 this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - this.overflowOffset.top < n.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - n.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - this.overflowOffset.left < n.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - n.scrollSpeed)) : (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed)), t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed))), r !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
             }
             this.positionAbs = this._convertPositionTo("absolute");
             if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
             if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
             for (var i = this.items.length - 1; i >= 0; i--) {
                 var s = this.items[i],
                     o = s.item[0],
                     u = this._intersectsWithPointer(s);
                 if (!u) continue;
                 if (s.instance !== this.currentContainer) continue;
                 if (o != this.currentItem[0] && this.placeholder[u == 1 ? "next" : "prev"]()[0] != o && !e.contains(this.placeholder[0], o) && (this.options.type == "semi-dynamic" ? !e.contains(this.element[0], o) : !0)) {
                     this.direction = u == 1 ? "down" : "up";
                     if (this.options.tolerance != "pointer" && !this._intersectsWithSides(s)) break;
                     this._rearrange(t, s), this._trigger("change", t, this._uiHash());
                     break
                 }
             }
             return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
         },
         _mouseStop: function(t, n) {
             if (!t) return;
             e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t);
             if (this.options.revert) {
                 var r = this,
                     i = this.placeholder.offset();
                 this.reverting = !0, e(this.helper).animate({
                     left: i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                     top: i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                 }, parseInt(this.options.revert, 10) || 500, function() {
                     r._clear(t)
                 })
             } else this._clear(t, n);
             return !1
         },
         cancel: function() {
             if (this.dragging) {
                 this._mouseUp({
                     target: null
                 }), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                 for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
             }
             return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                 helper: null,
                 dragging: !1,
                 reverting: !1,
                 _noFinalSort: null
             }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
         },
         serialize: function(t) {
             var n = this._getItemsAsjQuery(t && t.connected),
                 r = [];
             return t = t || {}, e(n).each(function() {
                 var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                 n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
             }), !r.length && t.key && r.push(t.key + "="), r.join("&")
         },
         toArray: function(t) {
             var n = this._getItemsAsjQuery(t && t.connected),
                 r = [];
             return t = t || {}, n.each(function() {
                 r.push(e(t.item || this).attr(t.attribute || "id") || "")
             }), r
         },
         _intersectsWith: function(e) {
             var t = this.positionAbs.left,
                 n = t + this.helperProportions.width,
                 r = this.positionAbs.top,
                 i = r + this.helperProportions.height,
                 s = e.left,
                 o = s + e.width,
                 u = e.top,
                 a = u + e.height,
                 f = this.offset.click.top,
                 l = this.offset.click.left,
                 c = r + f > u && r + f < a && t + l > s && t + l < o;
             return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? c : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a
         },
         _intersectsWithPointer: function(t) {
             var n = this.options.axis === "x" || e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                 r = this.options.axis === "y" || e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                 i = n && r,
                 s = this._getDragVerticalDirection(),
                 o = this._getDragHorizontalDirection();
             return i ? this.floating ? o && o == "right" || s == "down" ? 2 : 1 : s && (s == "down" ? 2 : 1) : !1
         },
         _intersectsWithSides: function(t) {
             var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                 r = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                 i = this._getDragVerticalDirection(),
                 s = this._getDragHorizontalDirection();
             return this.floating && s ? s == "right" && r || s == "left" && !r : i && (i == "down" && n || i == "up" && !n)
         },
         _getDragVerticalDirection: function() {
             var e = this.positionAbs.top - this.lastPositionAbs.top;
             return e != 0 && (e > 0 ? "down" : "up")
         },
         _getDragHorizontalDirection: function() {
             var e = this.positionAbs.left - this.lastPositionAbs.left;
             return e != 0 && (e > 0 ? "right" : "left")
         },
         refresh: function(e) {
             return this._refreshItems(e), this.refreshPositions(), this
         },
         _connectWith: function() {
             var e = this.options;
             return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
         },
         _getItemsAsjQuery: function(t) {
             var n = [],
                 r = [],
                 i = this._connectWith();
             if (i && t)
                 for (var s = i.length - 1; s >= 0; s--) {
                     var o = e(i[s]);
                     for (var u = o.length - 1; u >= 0; u--) {
                         var a = e.data(o[u], this.widgetName);
                         a && a != this && !a.options.disabled && r.push([e.isFunction(a.options.items) ? a.options.items.call(a.element) : e(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a])
                     }
                 }
             r.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                 options: this.options,
                 item: this.currentItem
             }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
             for (var s = r.length - 1; s >= 0; s--) r[s][0].each(function() {
                 n.push(this)
             });
             return e(n)
         },
         _removeCurrentsFromItems: function() {
             var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
             this.items = e.grep(this.items, function(e) {
                 for (var n = 0; n < t.length; n++)
                     if (t[n] == e.item[0]) return !1;
                 return !0
             })
         },
         _refreshItems: function(t) {
             this.items = [], this.containers = [this];
             var n = this.items,
                 r = [
                     [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                         item: this.currentItem
                     }) : e(this.options.items, this.element), this]
                 ],
                 i = this._connectWith();
             if (i && this.ready)
                 for (var s = i.length - 1; s >= 0; s--) {
                     var o = e(i[s]);
                     for (var u = o.length - 1; u >= 0; u--) {
                         var a = e.data(o[u], this.widgetName);
                         a && a != this && !a.options.disabled && (r.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {
                             item: this.currentItem
                         }) : e(a.options.items, a.element), a]), this.containers.push(a))
                     }
                 }
             for (var s = r.length - 1; s >= 0; s--) {
                 var f = r[s][1],
                     l = r[s][0];
                 for (var u = 0, c = l.length; u < c; u++) {
                     var h = e(l[u]);
                     h.data(this.widgetName + "-item", f), n.push({
                         item: h,
                         instance: f,
                         width: 0,
                         height: 0,
                         left: 0,
                         top: 0
                     })
                 }
             }
         },
         refreshPositions: function(t) {
             this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
             for (var n = this.items.length - 1; n >= 0; n--) {
                 var r = this.items[n];
                 if (r.instance != this.currentContainer && this.currentContainer && r.item[0] != this.currentItem[0]) continue;
                 var i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item;
                 t || (r.width = i.outerWidth(), r.height = i.outerHeight());
                 var s = i.offset();
                 r.left = s.left, r.top = s.top
             }
             if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
             else
                 for (var n = this.containers.length - 1; n >= 0; n--) {
                     var s = this.containers[n].element.offset();
                     this.containers[n].containerCache.left = s.left, this.containers[n].containerCache.top = s.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight()
                 }
             return this
         },
         _createPlaceholder: function(t) {
             t = t || this;
             var n = t.options;
             if (!n.placeholder || n.placeholder.constructor == String) {
                 var r = n.placeholder;
                 n.placeholder = {
                     element: function() {
                         var n = e(document.createElement(t.currentItem[0].nodeName)).addClass(r || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                         return r || (n.style.visibility = "hidden"), n
                     },
                     update: function(e, i) {
                         if (r && !n.forcePlaceholderSize) return;
                         i.height() || i.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), i.width() || i.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10))
                     }
                 }
             }
             t.placeholder = e(n.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), n.placeholder.update(t, t.placeholder)
         },
         _contactContainers: function(t) {
             var n = null,
                 r = null;
             for (var i = this.containers.length - 1; i >= 0; i--) {
                 if (e.contains(this.currentItem[0], this.containers[i].element[0])) continue;
                 if (this._intersectsWith(this.containers[i].containerCache)) {
                     if (n && e.contains(this.containers[i].element[0], n.element[0])) continue;
                     n = this.containers[i], r = i
                 } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0)
             }
             if (!n) return;
             if (this.containers.length === 1) this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1;
             else {
                 var s = 1e4,
                     o = null,
                     u = this.containers[r].floating ? "left" : "top",
                     a = this.containers[r].floating ? "width" : "height",
                     f = this.positionAbs[u] + this.offset.click[u];
                 for (var l = this.items.length - 1; l >= 0; l--) {
                     if (!e.contains(this.containers[r].element[0], this.items[l].item[0])) continue;
                     if (this.items[l].item[0] == this.currentItem[0]) continue;
                     var c = this.items[l].item.offset()[u],
                         h = !1;
                     Math.abs(c - f) > Math.abs(c + this.items[l][a] - f) && (h = !0, c += this.items[l][a]), Math.abs(c - f) < s && (s = Math.abs(c - f), o = this.items[l], this.direction = h ? "up" : "down")
                 }
                 if (!o && !this.options.dropOnEmpty) return;
                 this.currentContainer = this.containers[r], o ? this._rearrange(t, o, null, !0) : this._rearrange(t, null, this.containers[r].element, !0), this._trigger("change", t, this._uiHash()), this.containers[r]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1
             }
         },
         _createHelper: function(t) {
             var n = this.options,
                 r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : n.helper == "clone" ? this.currentItem.clone() : this.currentItem;
             return r.parents("body").length || e(n.appendTo != "parent" ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(r[0]), r[0] == this.currentItem[0] && (this._storedCSS = {
                 width: this.currentItem[0].style.width,
                 height: this.currentItem[0].style.height,
                 position: this.currentItem.css("position"),
                 top: this.currentItem.css("top"),
                 left: this.currentItem.css("left")
             }), (r[0].style.width == "" || n.forceHelperSize) && r.width(this.currentItem.width()), (r[0].style.height == "" || n.forceHelperSize) && r.height(this.currentItem.height()), r
         },
         _adjustOffsetFromHelper: function(t) {
             typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                 left: +t[0],
                 top: +t[1] || 0
             }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
         },
         _getParentOffset: function() {
             this.offsetParent = this.helper.offsetParent();
             var t = this.offsetParent.offset();
             this.cssPosition == "absolute" && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
             if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.ui.ie) t = {
                 top: 0,
                 left: 0
             };
             return {
                 top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                 left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
             }
         },
         _getRelativeOffset: function() {
             if (this.cssPosition == "relative") {
                 var e = this.currentItem.position();
                 return {
                     top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                     left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                 }
             }
             return {
                 top: 0,
                 left: 0
             }
         },
         _cacheMargins: function() {
             this.margins = {
                 left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                 top: parseInt(this.currentItem.css("marginTop"), 10) || 0
             }
         },
         _cacheHelperProportions: function() {
             this.helperProportions = {
                 width: this.helper.outerWidth(),
                 height: this.helper.outerHeight()
             }
         },
         _setContainment: function() {
             var t = this.options;
             t.containment == "parent" && (t.containment = this.helper[0].parentNode);
             if (t.containment == "document" || t.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
             if (!/^(document|window|parent)$/.test(t.containment)) {
                 var n = e(t.containment)[0],
                     r = e(t.containment).offset(),
                     i = e(n).css("overflow") != "hidden";
                 this.containment = [r.left + (parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (i ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (i ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
             }
         },
         _convertPositionTo: function(t, n) {
             n || (n = this.position);
             var r = t == "absolute" ? 1 : -1,
                 i = this.options,
                 s = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                 o = /(html|body)/i.test(s[0].tagName);
             return {
                 top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * r,
                 left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * r
             }
         },
         _generatePosition: function(t) {
             var n = this.options,
                 r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                 i = /(html|body)/i.test(r[0].tagName);
             this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
             var s = t.pageX,
                 o = t.pageY;
             if (this.originalPosition) {
                 this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top));
                 if (n.grid) {
                     var u = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1];
                     o = this.containment ? u - this.offset.click.top < this.containment[1] || u - this.offset.click.top > this.containment[3] ? u - this.offset.click.top < this.containment[1] ? u + n.grid[1] : u - n.grid[1] : u : u;
                     var a = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0];
                     s = this.containment ? a - this.offset.click.left < this.containment[0] || a - this.offset.click.left > this.containment[2] ? a - this.offset.click.left < this.containment[0] ? a + n.grid[0] : a - n.grid[0] : a : a
                 }
             }
             return {
                 top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                 left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
             }
         },
         _rearrange: function(e, t, n, r) {
             n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
             var i = this.counter;
             this._delay(function() {
                 i == this.counter && this.refreshPositions(!r)
             })
         },
         _clear: function(t, n) {
             this.reverting = !1;
             var r = [];
             !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
             if (this.helper[0] == this.currentItem[0]) {
                 for (var i in this._storedCSS)
                     if (this._storedCSS[i] == "auto" || this._storedCSS[i] == "static") this._storedCSS[i] = "";
                 this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
             } else this.currentItem.show();
             this.fromOutside && !n && r.push(function(e) {
                 this._trigger("receive", e, this._uiHash(this.fromOutside))
             }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !n && r.push(function(e) {
                 this._trigger("update", e, this._uiHash())
             }), this !== this.currentContainer && (n || (r.push(function(e) {
                 this._trigger("remove", e, this._uiHash())
             }), r.push(function(e) {
                 return function(t) {
                     e._trigger("receive", t, this._uiHash(this))
                 }
             }.call(this, this.currentContainer)), r.push(function(e) {
                 return function(t) {
                     e._trigger("update", t, this._uiHash(this))
                 }
             }.call(this, this.currentContainer))));
             for (var i = this.containers.length - 1; i >= 0; i--) n || r.push(function(e) {
                 return function(t) {
                     e._trigger("deactivate", t, this._uiHash(this))
                 }
             }.call(this, this.containers[i])), this.containers[i].containerCache.over && (r.push(function(e) {
                 return function(t) {
                     e._trigger("out", t, this._uiHash(this))
                 }
             }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
             this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
             if (this.cancelHelperRemoval) {
                 if (!n) {
                     this._trigger("beforeStop", t, this._uiHash());
                     for (var i = 0; i < r.length; i++) r[i].call(this, t);
                     this._trigger("stop", t, this._uiHash())
                 }
                 return this.fromOutside = !1, !1
             }
             n || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
             if (!n) {
                 for (var i = 0; i < r.length; i++) r[i].call(this, t);
                 this._trigger("stop", t, this._uiHash())
             }
             return this.fromOutside = !1, !0
         },
         _trigger: function() {
             e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
         },
         _uiHash: function(t) {
             var n = t || this;
             return {
                 helper: n.helper,
                 placeholder: n.placeholder || e([]),
                 position: n.position,
                 originalPosition: n.originalPosition,
                 offset: n.positionAbs,
                 item: n.currentItem,
                 sender: t ? t.element : null
             }
         }
     })
 }(jQuery), jQuery.effects || function(e, t) {
         var n = e.uiBackCompat !== !1,
             r = "ui-effects-";
         e.effects = {
                 effect: {}
             },
             function(t, n) {
                 function p(e, t, n) {
                     var r = a[t.type] || {};
                     return e == null ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
                 }

                 function d(e) {
                     var n = o(),
                         r = n._rgba = [];
                     return e = e.toLowerCase(), h(s, function(t, i) {
                         var s, o = i.re.exec(e),
                             a = o && i.parse(o),
                             f = i.space || "rgba";
                         if (a) return s = n[f](a), n[u[f].cache] = s[u[f].cache], r = n._rgba = s._rgba, !1
                     }), r.length ? (r.join() === "0,0,0,0" && t.extend(r, c.transparent), n) : c[e]
                 }

                 function v(e, t, n) {
                     return n = (n + 1) % 1, n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
                 }
                 var r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
                     i = /^([\-+])=\s*(\d+\.?\d*)/,
                     s = [{
                         re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                         parse: function(e) {
                             return [e[1], e[2], e[3], e[4]]
                         }
                     }, {
                         re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                         parse: function(e) {
                             return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
                         }
                     }, {
                         re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                         parse: function(e) {
                             return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                         }
                     }, {
                         re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                         parse: function(e) {
                             return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                         }
                     }, {
                         re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                         space: "hsla",
                         parse: function(e) {
                             return [e[1], e[2] / 100, e[3] / 100, e[4]]
                         }
                     }],
                     o = t.Color = function(e, n, r, i) {
                         return new t.Color.fn.parse(e, n, r, i)
                     },
                     u = {
                         rgba: {
                             props: {
                                 red: {
                                     idx: 0,
                                     type: "byte"
                                 },
                                 green: {
                                     idx: 1,
                                     type: "byte"
                                 },
                                 blue: {
                                     idx: 2,
                                     type: "byte"
                                 }
                             }
                         },
                         hsla: {
                             props: {
                                 hue: {
                                     idx: 0,
                                     type: "degrees"
                                 },
                                 saturation: {
                                     idx: 1,
                                     type: "percent"
                                 },
                                 lightness: {
                                     idx: 2,
                                     type: "percent"
                                 }
                             }
                         }
                     },
                     a = {
                         "byte": {
                             floor: !0,
                             max: 255
                         },
                         percent: {
                             max: 1
                         },
                         degrees: {
                             mod: 360,
                             floor: !0
                         }
                     },
                     f = o.support = {},
                     l = t("<p>")[0],
                     c, h = t.each;
                 l.style.cssText = "background-color:rgba(1,1,1,.5)", f.rgba = l.style.backgroundColor.indexOf("rgba") > -1, h(u, function(e, t) {
                     t.cache = "_" + e, t.props.alpha = {
                         idx: 3,
                         type: "percent",
                         def: 1
                     }
                 }), o.fn = t.extend(o.prototype, {
                     parse: function(r, i, s, a) {
                         if (r === n) return this._rgba = [null, null, null, null], this;
                         if (r.jquery || r.nodeType) r = t(r).css(i), i = n;
                         var f = this,
                             l = t.type(r),
                             v = this._rgba = [];
                         i !== n && (r = [r, i, s, a], l = "array");
                         if (l === "string") return this.parse(d(r) || c._default);
                         if (l === "array") return h(u.rgba.props, function(e, t) {
                             v[t.idx] = p(r[t.idx], t)
                         }), this;
                         if (l === "object") return r instanceof o ? h(u, function(e, t) {
                             r[t.cache] && (f[t.cache] = r[t.cache].slice())
                         }) : h(u, function(t, n) {
                             var i = n.cache;
                             h(n.props, function(e, t) {
                                 if (!f[i] && n.to) {
                                     if (e === "alpha" || r[e] == null) return;
                                     f[i] = n.to(f._rgba)
                                 }
                                 f[i][t.idx] = p(r[e], t, !0)
                             }), f[i] && e.inArray(null, f[i].slice(0, 3)) < 0 && (f[i][3] = 1, n.from && (f._rgba = n.from(f[i])))
                         }), this
                     },
                     is: function(e) {
                         var t = o(e),
                             n = !0,
                             r = this;
                         return h(u, function(e, i) {
                             var s, o = t[i.cache];
                             return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [], h(i.props, function(e, t) {
                                 if (o[t.idx] != null) return n = o[t.idx] === s[t.idx], n
                             })), n
                         }), n
                     },
                     _space: function() {
                         var e = [],
                             t = this;
                         return h(u, function(n, r) {
                             t[r.cache] && e.push(n)
                         }), e.pop()
                     },
                     transition: function(e, t) {
                         var n = o(e),
                             r = n._space(),
                             i = u[r],
                             s = this.alpha() === 0 ? o("transparent") : this,
                             f = s[i.cache] || i.to(s._rgba),
                             l = f.slice();
                         return n = n[i.cache], h(i.props, function(e, r) {
                             var i = r.idx,
                                 s = f[i],
                                 o = n[i],
                                 u = a[r.type] || {};
                             if (o === null) return;
                             s === null ? l[i] = o : (u.mod && (o - s > u.mod / 2 ? s += u.mod : s - o > u.mod / 2 && (s -= u.mod)), l[i] = p((o - s) * t + s, r))
                         }), this[r](l)
                     },
                     blend: function(e) {
                         if (this._rgba[3] === 1) return this;
                         var n = this._rgba.slice(),
                             r = n.pop(),
                             i = o(e)._rgba;
                         return o(t.map(n, function(e, t) {
                             return (1 - r) * i[t] + r * e
                         }))
                     },
                     toRgbaString: function() {
                         var e = "rgba(",
                             n = t.map(this._rgba, function(e, t) {
                                 return e == null ? t > 2 ? 1 : 0 : e
                             });
                         return n[3] === 1 && (n.pop(), e = "rgb("), e + n.join() + ")"
                     },
                     toHslaString: function() {
                         var e = "hsla(",
                             n = t.map(this.hsla(), function(e, t) {
                                 return e == null && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(e * 100) + "%"), e
                             });
                         return n[3] === 1 && (n.pop(), e = "hsl("), e + n.join() + ")"
                     },
                     toHexString: function(e) {
                         var n = this._rgba.slice(),
                             r = n.pop();
                         return e && n.push(~~(r * 255)), "#" + t.map(n, function(e) {
                             return e = (e || 0).toString(16), e.length === 1 ? "0" + e : e
                         }).join("")
                     },
                     toString: function() {
                         return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
                     }
                 }), o.fn.parse.prototype = o.fn, u.hsla.to = function(e) {
                     if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
                     var t = e[0] / 255,
                         n = e[1] / 255,
                         r = e[2] / 255,
                         i = e[3],
                         s = Math.max(t, n, r),
                         o = Math.min(t, n, r),
                         u = s - o,
                         a = s + o,
                         f = a * .5,
                         l, c;
                     return o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240, f === 0 || f === 1 ? c = f : f <= .5 ? c = u / a : c = u / (2 - a), [Math.round(l) % 360, c, f, i == null ? 1 : i]
                 }, u.hsla.from = function(e) {
                     if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
                     var t = e[0] / 360,
                         n = e[1],
                         r = e[2],
                         i = e[3],
                         s = r <= .5 ? r * (1 + n) : r + n - r * n,
                         o = 2 * r - s;
                     return [Math.round(v(o, s, t + 1 / 3) * 255), Math.round(v(o, s, t) * 255), Math.round(v(o, s, t - 1 / 3) * 255), i]
                 }, h(u, function(e, r) {
                     var s = r.props,
                         u = r.cache,
                         a = r.to,
                         f = r.from;
                     o.fn[e] = function(e) {
                         a && !this[u] && (this[u] = a(this._rgba));
                         if (e === n) return this[u].slice();
                         var r, i = t.type(e),
                             l = i === "array" || i === "object" ? e : arguments,
                             c = this[u].slice();
                         return h(s, function(e, t) {
                             var n = l[i === "object" ? e : t.idx];
                             n == null && (n = c[t.idx]), c[t.idx] = p(n, t)
                         }), f ? (r = o(f(c)), r[u] = c, r) : o(c)
                     }, h(s, function(n, r) {
                         if (o.fn[n]) return;
                         o.fn[n] = function(s) {
                             var o = t.type(s),
                                 u = n === "alpha" ? this._hsla ? "hsla" : "rgba" : e,
                                 a = this[u](),
                                 f = a[r.idx],
                                 l;
                             return o === "undefined" ? f : (o === "function" && (s = s.call(this, f), o = t.type(s)), s == null && r.empty ? this : (o === "string" && (l = i.exec(s), l && (s = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))), a[r.idx] = s, this[u](a)))
                         }
                     })
                 }), h(r, function(e, n) {
                     t.cssHooks[n] = {
                         set: function(e, r) {
                             var i, s, u = "";
                             if (t.type(r) !== "string" || (i = d(r))) {
                                 r = o(i || r);
                                 if (!f.rgba && r._rgba[3] !== 1) {
                                     s = n === "backgroundColor" ? e.parentNode : e;
                                     while ((u === "" || u === "transparent") && s && s.style) try {
                                         u = t.css(s, "backgroundColor"), s = s.parentNode
                                     } catch (a) {}
                                     r = r.blend(u && u !== "transparent" ? u : "_default")
                                 }
                                 r = r.toRgbaString()
                             }
                             try {
                                 e.style[n] = r
                             } catch (l) {}
                         }
                     }, t.fx.step[n] = function(e) {
                         e.colorInit || (e.start = o(e.elem, n), e.end = o(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
                     }
                 }), t.cssHooks.borderColor = {
                     expand: function(e) {
                         var t = {};
                         return h(["Top", "Right", "Bottom", "Left"], function(n, r) {
                             t["border" + r + "Color"] = e
                         }), t
                     }
                 }, c = t.Color.names = {
                     aqua: "#00ffff",
                     black: "#000000",
                     blue: "#0000ff",
                     fuchsia: "#ff00ff",
                     gray: "#808080",
                     green: "#008000",
                     lime: "#00ff00",
                     maroon: "#800000",
                     navy: "#000080",
                     olive: "#808000",
                     purple: "#800080",
                     red: "#ff0000",
                     silver: "#c0c0c0",
                     teal: "#008080",
                     white: "#ffffff",
                     yellow: "#ffff00",
                     transparent: [null, null, null, 0],
                     _default: "#ffffff"
                 }
             }(jQuery),
             function() {
                 function i() {
                     var t = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                         n = {},
                         r, i;
                     if (t && t.length && t[0] && t[t[0]]) {
                         i = t.length;
                         while (i--) r = t[i], typeof t[r] == "string" && (n[e.camelCase(r)] = t[r])
                     } else
                         for (r in t) typeof t[r] == "string" && (n[r] = t[r]);
                     return n
                 }

                 function s(t, n) {
                     var i = {},
                         s, o;
                     for (s in n) o = n[s], t[s] !== o && !r[s] && (e.fx.step[s] || !isNaN(parseFloat(o))) && (i[s] = o);
                     return i
                 }
                 var n = ["add", "remove", "toggle"],
                     r = {
                         border: 1,
                         borderBottom: 1,
                         borderColor: 1,
                         borderLeft: 1,
                         borderRight: 1,
                         borderTop: 1,
                         borderWidth: 1,
                         margin: 1,
                         padding: 1
                     };
                 e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, n) {
                     e.fx.step[n] = function(e) {
                         if (e.end !== "none" && !e.setAttr || e.pos === 1 && !e.setAttr) jQuery.style(e.elem, n, e.end), e.setAttr = !0
                     }
                 }), e.effects.animateClass = function(t, r, o, u) {
                     var a = e.speed(r, o, u);
                     return this.queue(function() {
                         var r = e(this),
                             o = r.attr("class") || "",
                             u, f = a.children ? r.find("*").andSelf() : r;
                         f = f.map(function() {
                             var t = e(this);
                             return {
                                 el: t,
                                 start: i.call(this)
                             }
                         }), u = function() {
                             e.each(n, function(e, n) {
                                 t[n] && r[n + "Class"](t[n])
                             })
                         }, u(), f = f.map(function() {
                             return this.end = i.call(this.el[0]), this.diff = s(this.start, this.end), this
                         }), r.attr("class", o), f = f.map(function() {
                             var t = this,
                                 n = e.Deferred(),
                                 r = jQuery.extend({}, a, {
                                     queue: !1,
                                     complete: function() {
                                         n.resolve(t)
                                     }
                                 });
                             return this.el.animate(this.diff, r), n.promise()
                         }), e.when.apply(e, f.get()).done(function() {
                             u(), e.each(arguments, function() {
                                 var t = this.el;
                                 e.each(this.diff, function(e) {
                                     t.css(e, "")
                                 })
                             }), a.complete.call(r[0])
                         })
                     })
                 }, e.fn.extend({
                     _addClass: e.fn.addClass,
                     addClass: function(t, n, r, i) {
                         return n ? e.effects.animateClass.call(this, {
                             add: t
                         }, n, r, i) : this._addClass(t)
                     },
                     _removeClass: e.fn.removeClass,
                     removeClass: function(t, n, r, i) {
                         return n ? e.effects.animateClass.call(this, {
                             remove: t
                         }, n, r, i) : this._removeClass(t)
                     },
                     _toggleClass: e.fn.toggleClass,
                     toggleClass: function(n, r, i, s, o) {
                         return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.call(this, r ? {
                             add: n
                         } : {
                             remove: n
                         }, i, s, o) : this._toggleClass(n, r) : e.effects.animateClass.call(this, {
                             toggle: n
                         }, r, i, s)
                     },
                     switchClass: function(t, n, r, i, s) {
                         return e.effects.animateClass.call(this, {
                             add: n,
                             remove: t
                         }, r, i, s)
                     }
                 })
             }(),
             function() {
                 function i(t, n, r, i) {
                     e.isPlainObject(t) && (n = t, t = t.effect), t = {
                         effect: t
                     }, n == null && (n = {}), e.isFunction(n) && (i = n, r = null, n = {});
                     if (typeof n == "number" || e.fx.speeds[n]) i = r, r = n, n = {};
                     return e.isFunction(r) && (i = r, r = null), n && e.extend(t, n), r = r || n.duration, t.duration = e.fx.off ? 0 : typeof r == "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default, t.complete = i || n.complete, t
                 }

                 function s(t) {
                     return !t || typeof t == "number" || e.fx.speeds[t] ? !0 : typeof t == "string" && !e.effects.effect[t] ? n && e.effects[t] ? !1 : !0 : !1
                 }
                 e.extend(e.effects, {
                     version: "1.9.2",
                     save: function(e, t) {
                         for (var n = 0; n < t.length; n++) t[n] !== null && e.data(r + t[n], e[0].style[t[n]])
                     },
                     restore: function(e, n) {
                         var i, s;
                         for (s = 0; s < n.length; s++) n[s] !== null && (i = e.data(r + n[s]), i === t && (i = ""), e.css(n[s], i))
                     },
                     setMode: function(e, t) {
                         return t === "toggle" && (t = e.is(":hidden") ? "show" : "hide"), t
                     },
                     getBaseline: function(e, t) {
                         var n, r;
                         switch (e[0]) {
                             case "top":
                                 n = 0;
                                 break;
                             case "middle":
                                 n = .5;
                                 break;
                             case "bottom":
                                 n = 1;
                                 break;
                             default:
                                 n = e[0] / t.height
                         }
                         switch (e[1]) {
                             case "left":
                                 r = 0;
                                 break;
                             case "center":
                                 r = .5;
                                 break;
                             case "right":
                                 r = 1;
                                 break;
                             default:
                                 r = e[1] / t.width
                         }
                         return {
                             x: r,
                             y: n
                         }
                     },
                     createWrapper: function(t) {
                         if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                         var n = {
                                 width: t.outerWidth(!0),
                                 height: t.outerHeight(!0),
                                 "float": t.css("float")
                             },
                             r = e("<div></div>").addClass("ui-effects-wrapper").css({
                                 fontSize: "100%",
                                 background: "transparent",
                                 border: "none",
                                 margin: 0,
                                 padding: 0
                             }),
                             i = {
                                 width: t.width(),
                                 height: t.height()
                             },
                             s = document.activeElement;
                         try {
                             s.id
                         } catch (o) {
                             s = document.body
                         }
                         return t.wrap(r), (t[0] === s || e.contains(t[0], s)) && e(s).focus(), r = t.parent(), t.css("position") === "static" ? (r.css({
                             position: "relative"
                         }), t.css({
                             position: "relative"
                         })) : (e.extend(n, {
                             position: t.css("position"),
                             zIndex: t.css("z-index")
                         }), e.each(["top", "left", "bottom", "right"], function(e, r) {
                             n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
                         }), t.css({
                             position: "relative",
                             top: 0,
                             left: 0,
                             right: "auto",
                             bottom: "auto"
                         })), t.css(i), r.css(n).show()
                     },
                     removeWrapper: function(t) {
                         var n = document.activeElement;
                         return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), t
                     },
                     setTransition: function(t, n, r, i) {
                         return i = i || {}, e.each(n, function(e, n) {
                             var s = t.cssUnit(n);
                             s[0] > 0 && (i[n] = s[0] * r + s[1])
                         }), i
                     }
                 }), e.fn.extend({
                     effect: function() {
                         function a(n) {
                             function u() {
                                 e.isFunction(i) && i.call(r[0]), e.isFunction(n) && n()
                             }
                             var r = e(this),
                                 i = t.complete,
                                 s = t.mode;
                             (r.is(":hidden") ? s === "hide" : s === "show") ? u(): o.call(r[0], t, u)
                         }
                         var t = i.apply(this, arguments),
                             r = t.mode,
                             s = t.queue,
                             o = e.effects.effect[t.effect],
                             u = !o && n && e.effects[t.effect];
                         return e.fx.off || !o && !u ? r ? this[r](t.duration, t.complete) : this.each(function() {
                             t.complete && t.complete.call(this)
                         }) : o ? s === !1 ? this.each(a) : this.queue(s || "fx", a) : u.call(this, {
                             options: t,
                             duration: t.duration,
                             callback: t.complete,
                             mode: t.mode
                         })
                     },
                     _show: e.fn.show,
                     show: function(e) {
                         if (s(e)) return this._show.apply(this, arguments);
                         var t = i.apply(this, arguments);
                         return t.mode = "show", this.effect.call(this, t)
                     },
                     _hide: e.fn.hide,
                     hide: function(e) {
                         if (s(e)) return this._hide.apply(this, arguments);
                         var t = i.apply(this, arguments);
                         return t.mode = "hide", this.effect.call(this, t)
                     },
                     __toggle: e.fn.toggle,
                     toggle: function(t) {
                         if (s(t) || typeof t == "boolean" || e.isFunction(t)) return this.__toggle.apply(this, arguments);
                         var n = i.apply(this, arguments);
                         return n.mode = "toggle", this.effect.call(this, n)
                     },
                     cssUnit: function(t) {
                         var n = this.css(t),
                             r = [];
                         return e.each(["em", "px", "%", "pt"], function(e, t) {
                             n.indexOf(t) > 0 && (r = [parseFloat(n), t])
                         }), r
                     }
                 })
             }(),
             function() {
                 var t = {};
                 e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, n) {
                     t[n] = function(t) {
                         return Math.pow(t, e + 2)
                     }
                 }), e.extend(t, {
                     Sine: function(e) {
                         return 1 - Math.cos(e * Math.PI / 2)
                     },
                     Circ: function(e) {
                         return 1 - Math.sqrt(1 - e * e)
                     },
                     Elastic: function(e) {
                         return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
                     },
                     Back: function(e) {
                         return e * e * (3 * e - 2)
                     },
                     Bounce: function(e) {
                         var t, n = 4;
                         while (e < ((t = Math.pow(2, --n)) - 1) / 11);
                         return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
                     }
                 }), e.each(t, function(t, n) {
                     e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function(e) {
                         return 1 - n(1 - e)
                     }, e.easing["easeInOut" + t] = function(e) {
                         return e < .5 ? n(e * 2) / 2 : 1 - n(e * -2 + 2) / 2
                     }
                 })
             }()
     }(jQuery),
     function(e, t) {
         var n = 0,
             r = {},
             i = {};
         r.height = r.paddingTop = r.paddingBottom = r.borderTopWidth = r.borderBottomWidth = "hide", i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "show", e.widget("ui.accordion", {
             version: "1.9.2",
             options: {
                 active: 0,
                 animate: {},
                 collapsible: !1,
                 event: "click",
                 header: "> li > :first-child,> :not(li):even",
                 heightStyle: "auto",
                 icons: {
                     activeHeader: "ui-icon-triangle-1-s",
                     header: "ui-icon-triangle-1-e"
                 },
                 activate: null,
                 beforeActivate: null
             },
             _create: function() {
                 var t = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++n),
                     r = this.options;
                 this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset"), this.headers = this.element.find(r.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this._hoverable(this.headers), this._focusable(this.headers), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), !r.collapsible && (r.active === !1 || r.active == null) && (r.active = 0), r.active < 0 && (r.active += this.headers.length), this.active = this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"), this.active.next().addClass("ui-accordion-content-active").show(), this._createIcons(), this.refresh(), this.element.attr("role", "tablist"), this.headers.attr("role", "tab").each(function(n) {
                     var r = e(this),
                         i = r.attr("id"),
                         s = r.next(),
                         o = s.attr("id");
                     i || (i = t + "-header-" + n, r.attr("id", i)), o || (o = t + "-panel-" + n, s.attr("id", o)), r.attr("aria-controls", o), s.attr("aria-labelledby", i)
                 }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                     "aria-selected": "false",
                     tabIndex: -1
                 }).next().attr({
                     "aria-expanded": "false",
                     "aria-hidden": "true"
                 }).hide(), this.active.length ? this.active.attr({
                     "aria-selected": "true",
                     tabIndex: 0
                 }).next().attr({
                     "aria-expanded": "true",
                     "aria-hidden": "false"
                 }) : this.headers.eq(0).attr("tabIndex", 0), this._on(this.headers, {
                     keydown: "_keydown"
                 }), this._on(this.headers.next(), {
                     keydown: "_panelKeyDown"
                 }), this._setupEvents(r.event)
             },
             _getCreateEventData: function() {
                 return {
                     header: this.active,
                     content: this.active.length ? this.active.next() : e()
                 }
             },
             _createIcons: function() {
                 var t = this.options.icons;
                 t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
             },
             _destroyIcons: function() {
                 this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
             },
             _destroy: function() {
                 var e;
                 this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                     /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                 }), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                     /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                 }), this.options.heightStyle !== "content" && e.css("height", "")
             },
             _setOption: function(e, t) {
                 if (e === "active") {
                     this._activate(t);
                     return
                 }
                 e === "event" && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), e === "collapsible" && !t && this.options.active === !1 && this._activate(0), e === "icons" && (this._destroyIcons(), t && this._createIcons()), e === "disabled" && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)
             },
             _keydown: function(t) {
                 if (t.altKey || t.ctrlKey) return;
                 var n = e.ui.keyCode,
                     r = this.headers.length,
                     i = this.headers.index(t.target),
                     s = !1;
                 switch (t.keyCode) {
                     case n.RIGHT:
                     case n.DOWN:
                         s = this.headers[(i + 1) % r];
                         break;
                     case n.LEFT:
                     case n.UP:
                         s = this.headers[(i - 1 + r) % r];
                         break;
                     case n.SPACE:
                     case n.ENTER:
                         this._eventHandler(t);
                         break;
                     case n.HOME:
                         s = this.headers[0];
                         break;
                     case n.END:
                         s = this.headers[r - 1]
                 }
                 s && (e(t.target).attr("tabIndex", -1), e(s).attr("tabIndex", 0), s.focus(), t.preventDefault())
             },
             _panelKeyDown: function(t) {
                 t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
             },
             refresh: function() {
                 var t, n, r = this.options.heightStyle,
                     i = this.element.parent();
                 r === "fill" ? (e.support.minHeight || (n = i.css("overflow"), i.css("overflow", "hidden")), t = i.height(), this.element.siblings(":visible").each(function() {
                     var n = e(this),
                         r = n.css("position");
                     if (r === "absolute" || r === "fixed") return;
                     t -= n.outerHeight(!0)
                 }), n && i.css("overflow", n), this.headers.each(function() {
                     t -= e(this).outerHeight(!0)
                 }), this.headers.next().each(function() {
                     e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
                 }).css("overflow", "auto")) : r === "auto" && (t = 0, this.headers.next().each(function() {
                     t = Math.max(t, e(this).css("height", "").height())
                 }).height(t))
             },
             _activate: function(t) {
                 var n = this._findActive(t)[0];
                 if (n === this.active[0]) return;
                 n = n || this.active[0], this._eventHandler({
                     target: n,
                     currentTarget: n,
                     preventDefault: e.noop
                 })
             },
             _findActive: function(t) {
                 return typeof t == "number" ? this.headers.eq(t) : e()
             },
             _setupEvents: function(t) {
                 var n = {};
                 if (!t) return;
                 e.each(t.split(" "), function(e, t) {
                     n[t] = "_eventHandler"
                 }), this._on(this.headers, n)
             },
             _eventHandler: function(t) {
                 var n = this.options,
                     r = this.active,
                     i = e(t.currentTarget),
                     s = i[0] === r[0],
                     o = s && n.collapsible,
                     u = o ? e() : i.next(),
                     a = r.next(),
                     f = {
                         oldHeader: r,
                         oldPanel: a,
                         newHeader: o ? e() : i,
                         newPanel: u
                     };
                 t.preventDefault();
                 if (s && !n.collapsible || this._trigger("beforeActivate", t, f) === !1) return;
                 n.active = o ? !1 : this.headers.index(i), this.active = s ? e() : i, this._toggle(f), r.removeClass("ui-accordion-header-active ui-state-active"), n.icons && r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header), s || (i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), n.icons && i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader), i.next().addClass("ui-accordion-content-active"))
             },
             _toggle: function(t) {
                 var n = t.newPanel,
                     r = this.prevShow.length ? this.prevShow : t.oldPanel;
                 this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = n, this.prevHide = r, this.options.animate ? this._animate(n, r, t) : (r.hide(), n.show(), this._toggleComplete(t)), r.attr({
                     "aria-expanded": "false",
                     "aria-hidden": "true"
                 }), r.prev().attr("aria-selected", "false"), n.length && r.length ? r.prev().attr("tabIndex", -1) : n.length && this.headers.filter(function() {
                     return e(this).attr("tabIndex") === 0
                 }).attr("tabIndex", -1), n.attr({
                     "aria-expanded": "true",
                     "aria-hidden": "false"
                 }).prev().attr({
                     "aria-selected": "true",
                     tabIndex: 0
                 })
             },
             _animate: function(e, t, n) {
                 var s, o, u, a = this,
                     f = 0,
                     l = e.length && (!t.length || e.index() < t.index()),
                     c = this.options.animate || {},
                     h = l && c.down || c,
                     p = function() {
                         a._toggleComplete(n)
                     };
                 typeof h == "number" && (u = h), typeof h == "string" && (o = h), o = o || h.easing || c.easing, u = u || h.duration || c.duration;
                 if (!t.length) return e.animate(i, u, o, p);
                 if (!e.length) return t.animate(r, u, o, p);
                 s = e.show().outerHeight(), t.animate(r, {
                     duration: u,
                     easing: o,
                     step: function(e, t) {
                         t.now = Math.round(e)
                     }
                 }), e.hide().animate(i, {
                     duration: u,
                     easing: o,
                     complete: p,
                     step: function(e, n) {
                         n.now = Math.round(e), n.prop !== "height" ? f += n.now : a.options.heightStyle !== "content" && (n.now = Math.round(s - t.outerHeight() - f), f = 0)
                     }
                 })
             },
             _toggleComplete: function(e) {
                 var t = e.oldPanel;
                 t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
             }
         }), e.uiBackCompat !== !1 && (function(e, t) {
             e.extend(t.options, {
                 navigation: !1,
                 navigationFilter: function() {
                     return this.href.toLowerCase() === location.href.toLowerCase()
                 }
             });
             var n = t._create;
             t._create = function() {
                 if (this.options.navigation) {
                     var t = this,
                         r = this.element.find(this.options.header),
                         i = r.next(),
                         s = r.add(i).find("a").filter(this.options.navigationFilter)[0];
                     s && r.add(i).each(function(n) {
                         if (e.contains(this, s)) return t.options.active = Math.floor(n / 2), !1
                     })
                 }
                 n.call(this)
             }
         }(jQuery, jQuery.ui.accordion.prototype), function(e, t) {
             e.extend(t.options, {
                 heightStyle: null,
                 autoHeight: !0,
                 clearStyle: !1,
                 fillSpace: !1
             });
             var n = t._create,
                 r = t._setOption;
             e.extend(t, {
                 _create: function() {
                     this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(), n.call(this)
                 },
                 _setOption: function(e) {
                     if (e === "autoHeight" || e === "clearStyle" || e === "fillSpace") this.options.heightStyle = this._mergeHeightStyle();
                     r.apply(this, arguments)
                 },
                 _mergeHeightStyle: function() {
                     var e = this.options;
                     if (e.fillSpace) return "fill";
                     if (e.clearStyle) return "content";
                     if (e.autoHeight) return "auto"
                 }
             })
         }(jQuery, jQuery.ui.accordion.prototype), function(e, t) {
             e.extend(t.options.icons, {
                 activeHeader: null,
                 headerSelected: "ui-icon-triangle-1-s"
             });
             var n = t._createIcons;
             t._createIcons = function() {
                 this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected), n.call(this)
             }
         }(jQuery, jQuery.ui.accordion.prototype), function(e, t) {
             t.activate = t._activate;
             var n = t._findActive;
             t._findActive = function(e) {
                 return e === -1 && (e = !1), e && typeof e != "number" && (e = this.headers.index(this.headers.filter(e)), e === -1 && (e = !1)), n.call(this, e)
             }
         }(jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh, function(e, t) {
             e.extend(t.options, {
                 change: null,
                 changestart: null
             });
             var n = t._trigger;
             t._trigger = function(e, t, r) {
                 var i = n.apply(this, arguments);
                 return i ? (e === "beforeActivate" ? i = n.call(this, "changestart", t, {
                     oldHeader: r.oldHeader,
                     oldContent: r.oldPanel,
                     newHeader: r.newHeader,
                     newContent: r.newPanel
                 }) : e === "activate" && (i = n.call(this, "change", t, {
                     oldHeader: r.oldHeader,
                     oldContent: r.oldPanel,
                     newHeader: r.newHeader,
                     newContent: r.newPanel
                 })), i) : !1
             }
         }(jQuery, jQuery.ui.accordion.prototype), function(e, t) {
             e.extend(t.options, {
                 animate: null,
                 animated: "slide"
             });
             var n = t._create;
             t._create = function() {
                 var e = this.options;
                 e.animate === null && (e.animated ? e.animated === "slide" ? e.animate = 300 : e.animated === "bounceslide" ? e.animate = {
                     duration: 200,
                     down: {
                         easing: "easeOutBounce",
                         duration: 1e3
                     }
                 } : e.animate = e.animated : e.animate = !1), n.call(this)
             }
         }(jQuery, jQuery.ui.accordion.prototype))
     }(jQuery),
     function(e, t) {
         var n = 0;
         e.widget("ui.autocomplete", {
             version: "1.9.2",
             defaultElement: "<input>",
             options: {
                 appendTo: "body",
                 autoFocus: !1,
                 delay: 300,
                 minLength: 1,
                 position: {
                     my: "left top",
                     at: "left bottom",
                     collision: "none"
                 },
                 source: null,
                 change: null,
                 close: null,
                 focus: null,
                 open: null,
                 response: null,
                 search: null,
                 select: null
             },
             pending: 0,
             _create: function() {
                 var t, n, r;
                 this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                     keydown: function(i) {
                         if (this.element.prop("readOnly")) {
                             t = !0, r = !0, n = !0;
                             return
                         }
                         t = !1, r = !1, n = !1;
                         var s = e.ui.keyCode;
                         switch (i.keyCode) {
                             case s.PAGE_UP:
                                 t = !0, this._move("previousPage", i);
                                 break;
                             case s.PAGE_DOWN:
                                 t = !0, this._move("nextPage", i);
                                 break;
                             case s.UP:
                                 t = !0, this._keyEvent("previous", i);
                                 break;
                             case s.DOWN:
                                 t = !0, this._keyEvent("next", i);
                                 break;
                             case s.ENTER:
                             case s.NUMPAD_ENTER:
                                 this.menu.active && (t = !0, i.preventDefault(), this.menu.select(i));
                                 break;
                             case s.TAB:
                                 this.menu.active && this.menu.select(i);
                                 break;
                             case s.ESCAPE:
                                 this.menu.element.is(":visible") && (this._value(this.term), this.close(i), i.preventDefault());
                                 break;
                             default:
                                 n = !0, this._searchTimeout(i)
                         }
                     },
                     keypress: function(r) {
                         if (t) {
                             t = !1, r.preventDefault();
                             return
                         }
                         if (n) return;
                         var i = e.ui.keyCode;
                         switch (r.keyCode) {
                             case i.PAGE_UP:
                                 this._move("previousPage", r);
                                 break;
                             case i.PAGE_DOWN:
                                 this._move("nextPage", r);
                                 break;
                             case i.UP:
                                 this._keyEvent("previous", r);
                                 break;
                             case i.DOWN:
                                 this._keyEvent("next", r)
                         }
                     },
                     input: function(e) {
                         if (r) {
                             r = !1, e.preventDefault();
                             return
                         }
                         this._searchTimeout(e)
                     },
                     focus: function() {
                         this.selectedItem = null, this.previous = this._value()
                     },
                     blur: function(e) {
                         if (this.cancelBlur) {
                             delete this.cancelBlur;
                             return
                         }
                         clearTimeout(this.searching), this.close(e), this._change(e)
                     }
                 }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                     input: e(),
                     role: null
                 }).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {
                     mousedown: function(t) {
                         t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                             delete this.cancelBlur
                         });
                         var n = this.menu.element[0];
                         e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                             var t = this;
                             this.document.one("mousedown", function(r) {
                                 r.target !== t.element[0] && r.target !== n && !e.contains(n, r.target) && t.close()
                             })
                         })
                     },
                     menufocus: function(t, n) {
                         if (this.isNewMenu) {
                             this.isNewMenu = !1;
                             if (t.originalEvent && /^mouse/.test(t.originalEvent.type)) {
                                 this.menu.blur(), this.document.one("mousemove", function() {
                                     e(t.target).trigger(t.originalEvent)
                                 });
                                 return
                             }
                         }
                         var r = n.item.data("ui-autocomplete-item") || n.item.data("item.autocomplete");
                         !1 !== this._trigger("focus", t, {
                             item: r
                         }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value) : this.liveRegion.text(r.value)
                     },
                     menuselect: function(e, t) {
                         var n = t.item.data("ui-autocomplete-item") || t.item.data("item.autocomplete"),
                             r = this.previous;
                         this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function() {
                             this.previous = r, this.selectedItem = n
                         })), !1 !== this._trigger("select", e, {
                             item: n
                         }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                     }
                 }), this.liveRegion = e("<span>", {
                     role: "status",
                     "aria-live": "polite"
                 }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), e.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, {
                     beforeunload: function() {
                         this.element.removeAttr("autocomplete")
                     }
                 })
             },
             _destroy: function() {
                 clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
             },
             _setOption: function(e, t) {
                 this._super(e, t), e === "source" && this._initSource(), e === "appendTo" && this.menu.element.appendTo(this.document.find(t || "body")[0]), e === "disabled" && t && this.xhr && this.xhr.abort()
             },
             _isMultiLine: function() {
                 return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
             },
             _initSource: function() {
                 var t, n, r = this;
                 e.isArray(this.options.source) ? (t = this.options.source, this.source = function(n, r) {
                     r(e.ui.autocomplete.filter(t, n.term))
                 }) : typeof this.options.source == "string" ? (n = this.options.source, this.source = function(t, i) {
                     r.xhr && r.xhr.abort(), r.xhr = e.ajax({
                         url: n,
                         data: t,
                         dataType: "json",
                         success: function(e) {
                             i(e)
                         },
                         error: function() {
                             i([])
                         }
                     })
                 }) : this.source = this.options.source
             },
             _searchTimeout: function(e) {
                 clearTimeout(this.searching), this.searching = this._delay(function() {
                     this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
                 }, this.options.delay)
             },
             search: function(e, t) {
                 e = e != null ? e : this._value(), this.term = this._value();
                 if (e.length < this.options.minLength) return this.close(t);
                 if (this._trigger("search", t) === !1) return;
                 return this._search(e)
             },
             _search: function(e) {
                 this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                     term: e
                 }, this._response())
             },
             _response: function() {
                 var e = this,
                     t = ++n;
                 return function(r) {
                     t === n && e.__response(r), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
                 }
             },
             __response: function(e) {
                 e && (e = this._normalize(e)), this._trigger("response", null, {
                     content: e
                 }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
             },
             close: function(e) {
                 this.cancelSearch = !0, this._close(e)
             },
             _close: function(e) {
                 this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
             },
             _change: function(e) {
                 this.previous !== this._value() && this._trigger("change", e, {
                     item: this.selectedItem
                 })
             },
             _normalize: function(t) {
                 return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                     return typeof t == "string" ? {
                         label: t,
                         value: t
                     } : e.extend({
                         label: t.label || t.value,
                         value: t.value || t.label
                     }, t)
                 })
             },
             _suggest: function(t) {
                 var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
                 this._renderMenu(n, t), this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({ of: this.element
                 }, this.options.position)), this.options.autoFocus && this.menu.next()
             },
             _resizeMenu: function() {
                 var e = this.menu.element;
                 e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
             },
             _renderMenu: function(t, n) {
                 var r = this;
                 e.each(n, function(e, n) {
                     r._renderItemData(t, n)
                 })
             },
             _renderItemData: function(e, t) {
                 return this._renderItem(e, t).data("ui-autocomplete-item", t)
             },
             _renderItem: function(t, n) {
                 return e("<li>").append(e("<a>").text(n.label)).appendTo(t)
             },
             _move: function(e, t) {
                 if (!this.menu.element.is(":visible")) {
                     this.search(null, t);
                     return
                 }
                 if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) {
                     this._value(this.term), this.menu.blur();
                     return
                 }
                 this.menu[e](t)
             },
             widget: function() {
                 return this.menu.element
             },
             _value: function() {
                 return this.valueMethod.apply(this.element, arguments)
             },
             _keyEvent: function(e, t) {
                 if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(e, t), t.preventDefault()
             }
         }), e.extend(e.ui.autocomplete, {
             escapeRegex: function(e) {
                 return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
             },
             filter: function(t, n) {
                 var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
                 return e.grep(t, function(e) {
                     return r.test(e.label || e.value || e)
                 })
             }
         }), e.widget("ui.autocomplete", e.ui.autocomplete, {
             options: {
                 messages: {
                     noResults: "No search results.",
                     results: function(e) {
                         return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                     }
                 }
             },
             __response: function(e) {
                 var t;
                 this._superApply(arguments);
                 if (this.options.disabled || this.cancelSearch) return;
                 e && e.length ? t = this.options.messages.results(e.length) : t = this.options.messages.noResults, this.liveRegion.text(t)
             }
         })
     }(jQuery),
     function(e, t) {
         var n, r, i, s, o = "ui-button ui-widget ui-state-default ui-corner-all",
             u = "ui-state-hover ui-state-active ",
             a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
             f = function() {
                 var t = e(this).find(":ui-button");
                 setTimeout(function() {
                     t.button("refresh")
                 }, 1)
             },
             l = function(t) {
                 var n = t.name,
                     r = t.form,
                     i = e([]);
                 return n && (r ? i = e(r).find("[name='" + n + "']") : i = e("[name='" + n + "']", t.ownerDocument).filter(function() {
                     return !this.form
                 })), i
             };
         e.widget("ui.button", {
             version: "1.9.2",
             defaultElement: "<button>",
             options: {
                 disabled: null,
                 text: !0,
                 label: null,
                 icons: {
                     primary: null,
                     secondary: null
                 }
             },
             _create: function() {
                 this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, f), typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                 var t = this,
                     u = this.options,
                     a = this.type === "checkbox" || this.type === "radio",
                     c = a ? "" : "ui-state-active",
                     h = "ui-state-focus";
                 u.label === null && (u.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                     if (u.disabled) return;
                     this === n && e(this).addClass("ui-state-active")
                 }).bind("mouseleave" + this.eventNamespace, function() {
                     if (u.disabled) return;
                     e(this).removeClass(c)
                 }).bind("click" + this.eventNamespace, function(e) {
                     u.disabled && (e.preventDefault(), e.stopImmediatePropagation())
                 }), this.element.bind("focus" + this.eventNamespace, function() {
                     t.buttonElement.addClass(h)
                 }).bind("blur" + this.eventNamespace, function() {
                     t.buttonElement.removeClass(h)
                 }), a && (this.element.bind("change" + this.eventNamespace, function() {
                     if (s) return;
                     t.refresh()
                 }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(e) {
                     if (u.disabled) return;
                     s = !1, r = e.pageX, i = e.pageY
                 }).bind("mouseup" + this.eventNamespace, function(e) {
                     if (u.disabled) return;
                     if (r !== e.pageX || i !== e.pageY) s = !0
                 })), this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                     if (u.disabled || s) return !1;
                     e(this).toggleClass("ui-state-active"), t.buttonElement.attr("aria-pressed", t.element[0].checked)
                 }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                     if (u.disabled || s) return !1;
                     e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                     var n = t.element[0];
                     l(n).not(n).map(function() {
                         return e(this).button("widget")[0]
                     }).removeClass("ui-state-active").attr("aria-pressed", "false")
                 }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                     if (u.disabled) return !1;
                     e(this).addClass("ui-state-active"), n = this, t.document.one("mouseup", function() {
                         n = null
                     })
                 }).bind("mouseup" + this.eventNamespace, function() {
                     if (u.disabled) return !1;
                     e(this).removeClass("ui-state-active")
                 }).bind("keydown" + this.eventNamespace, function(t) {
                     if (u.disabled) return !1;
                     (t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active")
                 }).bind("keyup" + this.eventNamespace, function() {
                     e(this).removeClass("ui-state-active")
                 }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                     t.keyCode === e.ui.keyCode.SPACE && e(this).click()
                 })), this._setOption("disabled", u.disabled), this._resetButton()
             },
             _determineButtonType: function() {
                 var e, t, n;
                 this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", this.type === "checkbox" || this.type === "radio" ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), n = this.element.is(":checked"), n && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", n)) : this.buttonElement = this.element
             },
             widget: function() {
                 return this.buttonElement
             },
             _destroy: function() {
                 this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " " + u + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
             },
             _setOption: function(e, t) {
                 this._super(e, t);
                 if (e === "disabled") {
                     t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1);
                     return
                 }
                 this._resetButton()
             },
             refresh: function() {
                 var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                 t !== this.options.disabled && this._setOption("disabled", t), this.type === "radio" ? l(this.element[0]).each(function() {
                     e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                 }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
             },
             _resetButton: function() {
                 if (this.type === "input") {
                     this.options.label && this.element.val(this.options.label);
                     return
                 }
                 var t = this.buttonElement.removeClass(a),
                     n = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                     r = this.options.icons,
                     i = r.primary && r.secondary,
                     s = [];
                 r.primary || r.secondary ? (this.options.text && s.push("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")), r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"), r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"), this.options.text || (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(n)))) : s.push("ui-button-text-only"), t.addClass(s.join(" "))
             }
         }), e.widget("ui.buttonset", {
             version: "1.9.2",
             options: {
                 items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
             },
             _create: function() {
                 this.element.addClass("ui-buttonset")
             },
             _init: function() {
                 this.refresh()
             },
             _setOption: function(e, t) {
                 e === "disabled" && this.buttons.button("option", e, t), this._super(e, t)
             },
             refresh: function() {
                 var t = this.element.css("direction") === "rtl";
                 this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                     return e(this).button("widget")[0]
                 }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
             },
             _destroy: function() {
                 this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                     return e(this).button("widget")[0]
                 }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
             }
         })
     }(jQuery),
     function($, undefined) {
         function Datepicker() {
             this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._Nepallog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                 closeText: "Done",
                 prevText: "Prev",
                 nextText: "Next",
                 currentText: "Today",
                 monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                 monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                 dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                 dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                 dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                 weekHeader: "Wk",
                 dateFormat: "mm/dd/yy",
                 firstDay: 0,
                 isRTL: !1,
                 showMonthAfterYear: !1,
                 yearSuffix: ""
             }, this._defaults = {
                 showOn: "focus",
                 showAnim: "fadeIn",
                 showOptions: {},
                 defaultDate: null,
                 appendText: "",
                 buttonText: "...",
                 buttonImage: "",
                 buttonImageOnly: !1,
                 hideIfNoPrevNext: !1,
                 navigationAsDateFormat: !1,
                 gotoCurrent: !1,
                 changeMonth: !1,
                 changeYear: !1,
                 yearRange: "c-10:c+10",
                 showOtherMonths: !1,
                 selectOtherMonths: !1,
                 showWeek: !1,
                 calculateWeek: this.iso8601Week,
                 shortYearCutoff: "+10",
                 minDate: null,
                 maxDate: null,
                 duration: "fast",
                 beforeShowDay: null,
                 beforeShow: null,
                 onSelect: null,
                 onChangeMonthYear: null,
                 onClose: null,
                 numberOfMonths: 1,
                 showCurrentAtPos: 0,
                 stepMonths: 1,
                 stepBigMonths: 12,
                 altField: "",
                 altFormat: "",
                 constrainInput: !0,
                 showButtonPanel: !1,
                 autoSize: !1,
                 disabled: !1
             }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
         }

         function bindHover(e) {
             var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
             return e.delegate(t, "mouseout", function() {
                 $(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && $(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && $(this).removeClass("ui-datepicker-next-hover")
             }).delegate(t, "mouseover", function() {
                 $.datepicker._isDisabledDatepicker(instActive.inline ? e.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && $(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && $(this).addClass("ui-datepicker-next-hover"))
             })
         }

         function extendRemove(e, t) {
             $.extend(e, t);
             for (var n in t)
                 if (t[n] == null || t[n] == undefined) e[n] = t[n];
             return e
         }
         $.extend($.ui, {
             datepicker: {
                 version: "1.9.2"
             }
         });
         var PROP_NAME = "datepicker",
             dpuuid = (new Date).getTime(),
             instActive;
         $.extend(Datepicker.prototype, {
             markerClassName: "hasDatepicker",
             maxRows: 4,
             log: function() {
                 this.debug && console.log.apply("", arguments)
             },
             _widgetDatepicker: function() {
                 return this.dpDiv
             },
             setDefaults: function(e) {
                 return extendRemove(this._defaults, e || {}), this
             },
             _attachDatepicker: function(target, settings) {
                 var inlineSettings = null;
                 for (var attrName in this._defaults) {
                     var attrValue = target.getAttribute("date:" + attrName);
                     if (attrValue) {
                         inlineSettings = inlineSettings || {};
                         try {
                             inlineSettings[attrName] = eval(attrValue)
                         } catch (err) {
                             inlineSettings[attrName] = attrValue
                         }
                     }
                 }
                 var nodeName = target.nodeName.toLowerCase(),
                     inline = nodeName == "div" || nodeName == "span";
                 target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
                 var inst = this._newInst($(target), inline);
                 inst.settings = $.extend({}, settings || {}, inlineSettings || {}), nodeName == "input" ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
             },
             _newInst: function(e, t) {
                 var n = e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
                 return {
                     id: n,
                     input: e,
                     selectedDay: 0,
                     selectedMonth: 0,
                     selectedYear: 0,
                     drawMonth: 0,
                     drawYear: 0,
                     inline: t,
                     dpDiv: t ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
                 }
             },
             _connectDatepicker: function(e, t) {
                 var n = $(e);
                 t.append = $([]), t.trigger = $([]);
                 if (n.hasClass(this.markerClassName)) return;
                 this._attachments(n, t), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(e, n, r) {
                     t.settings[n] = r
                 }).bind("getData.datepicker", function(e, n) {
                     return this._get(t, n)
                 }), this._autoSize(t), $.data(e, PROP_NAME, t), t.settings.disabled && this._disableDatepicker(e)
             },
             _attachments: function(e, t) {
                 var n = this._get(t, "appendText"),
                     r = this._get(t, "isRTL");
                 t.append && t.append.remove(), n && (t.append = $('<span class="' + this._appendClass + '">' + n + "</span>"), e[r ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
                 var i = this._get(t, "showOn");
                 (i == "focus" || i == "both") && e.focus(this._showDatepicker);
                 if (i == "button" || i == "both") {
                     var s = this._get(t, "buttonText"),
                         o = this._get(t, "buttonImage");
                     t.trigger = $(this._get(t, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                         src: o,
                         alt: s,
                         title: s
                     }) : $('<button type="button"></button>').addClass(this._triggerClass).html(o == "" ? s : $("<img/>").attr({
                         src: o,
                         alt: s,
                         title: s
                     }))), e[r ? "before" : "after"](t.trigger), t.trigger.click(function() {
                         return $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != e[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(e[0])) : $.datepicker._showDatepicker(e[0]), !1
                     })
                 }
             },
             _autoSize: function(e) {
                 if (this._get(e, "autoSize") && !e.inline) {
                     var t = new Date(2009, 11, 20),
                         n = this._get(e, "dateFormat");
                     if (n.match(/[DM]/)) {
                         var r = function(e) {
                             var t = 0,
                                 n = 0;
                             for (var r = 0; r < e.length; r++) e[r].length > t && (t = e[r].length, n = r);
                             return n
                         };
                         t.setMonth(r(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(r(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
                     }
                     e.input.attr("size", this._formatDate(e, t).length)
                 }
             },
             _inlineDatepicker: function(e, t) {
                 var n = $(e);
                 if (n.hasClass(this.markerClassName)) return;
                 n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function(e, n, r) {
                     t.settings[n] = r
                 }).bind("getData.datepicker", function(e, n) {
                     return this._get(t, n)
                 }), $.data(e, PROP_NAME, t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block")
             },
             _dialogDatepicker: function(e, t, n, r, i) {
                 var s = this._dialogInst;
                 if (!s) {
                     this.uuid += 1;
                     var o = "dp" + this.uuid;
                     this._dialogInput = $('<input type="text" id="' + o + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {}, $.data(this._dialogInput[0], PROP_NAME, s)
                 }
                 extendRemove(s.settings, r || {}), t = t && t.constructor == Date ? this._formatDate(s, t) : t, this._dialogInput.val(t), this._pos = i ? i.length ? i : [i.pageX, i.pageY] : null;
                 if (!this._pos) {
                     var u = document.documentElement.clientWidth,
                         a = document.documentElement.clientHeight,
                         f = document.documentElement.scrollLeft || document.body.scrollLeft,
                         l = document.documentElement.scrollTop || document.body.scrollTop;
                     this._pos = [u / 2 - 100 + f, a / 2 - 150 + l]
                 }
                 return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = n, this._Nepallog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, s), this
             },
             _destroyDatepicker: function(e) {
                 var t = $(e),
                     n = $.data(e, PROP_NAME);
                 if (!t.hasClass(this.markerClassName)) return;
                 var r = e.nodeName.toLowerCase();
                 $.removeData(e, PROP_NAME), r == "input" ? (n.append.remove(), n.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r == "div" || r == "span") && t.removeClass(this.markerClassName).empty()
             },
             _enableDatepicker: function(e) {
                 var t = $(e),
                     n = $.data(e, PROP_NAME);
                 if (!t.hasClass(this.markerClassName)) return;
                 var r = e.nodeName.toLowerCase();
                 if (r == "input") e.disabled = !1, n.trigger.filter("button").each(function() {
                     this.disabled = !1
                 }).end().filter("img").css({
                     opacity: "1.0",
                     cursor: ""
                 });
                 else if (r == "div" || r == "span") {
                     var i = t.children("." + this._inlineClass);
                     i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
                 }
                 this._disabledInputs = $.map(this._disabledInputs, function(t) {
                     return t == e ? null : t
                 })
             },
             _disableDatepicker: function(e) {
                 var t = $(e),
                     n = $.data(e, PROP_NAME);
                 if (!t.hasClass(this.markerClassName)) return;
                 var r = e.nodeName.toLowerCase();
                 if (r == "input") e.disabled = !0, n.trigger.filter("button").each(function() {
                     this.disabled = !0
                 }).end().filter("img").css({
                     opacity: "0.5",
                     cursor: "default"
                 });
                 else if (r == "div" || r == "span") {
                     var i = t.children("." + this._inlineClass);
                     i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
                 }
                 this._disabledInputs = $.map(this._disabledInputs, function(t) {
                     return t == e ? null : t
                 }), this._disabledInputs[this._disabledInputs.length] = e
             },
             _isDisabledDatepicker: function(e) {
                 if (!e) return !1;
                 for (var t = 0; t < this._disabledInputs.length; t++)
                     if (this._disabledInputs[t] == e) return !0;
                 return !1
             },
             _getInst: function(e) {
                 try {
                     return $.data(e, PROP_NAME)
                 } catch (t) {
                     throw "Missing instance data for this datepicker"
                 }
             },
             _optionDatepicker: function(e, t, n) {
                 var r = this._getInst(e);
                 if (arguments.length == 2 && typeof t == "string") return t == "defaults" ? $.extend({}, $.datepicker._defaults) : r ? t == "all" ? $.extend({}, r.settings) : this._get(r, t) : null;
                 var i = t || {};
                 typeof t == "string" && (i = {}, i[t] = n);
                 if (r) {
                     this._curInst == r && this._hideDatepicker();
                     var s = this._getDateDatepicker(e, !0),
                         o = this._getMinMaxDate(r, "min"),
                         u = this._getMinMaxDate(r, "max");
                     extendRemove(r.settings, i), o !== null && i.dateFormat !== undefined && i.minDate === undefined && (r.settings.minDate = this._formatDate(r, o)), u !== null && i.dateFormat !== undefined && i.maxDate === undefined && (r.settings.maxDate = this._formatDate(r, u)), this._attachments($(e), r), this._autoSize(r), this._setDate(r, s), this._updateAlternate(r), this._updateDatepicker(r)
                 }
             },
             _changeDatepicker: function(e, t, n) {
                 this._optionDatepicker(e, t, n)
             },
             _refreshDatepicker: function(e) {
                 var t = this._getInst(e);
                 t && this._updateDatepicker(t)
             },
             _setDateDatepicker: function(e, t) {
                 var n = this._getInst(e);
                 n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
             },
             _getDateDatepicker: function(e, t) {
                 var n = this._getInst(e);
                 return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
             },
             _doKeyDown: function(e) {
                 var t = $.datepicker._getInst(e.target),
                     n = !0,
                     r = t.dpDiv.is(".ui-datepicker-rtl");
                 t._keyEvent = !0;
                 if ($.datepicker._datepickerShowing) switch (e.keyCode) {
                     case 9:
                         $.datepicker._hideDatepicker(), n = !1;
                         break;
                     case 13:
                         var i = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
                         i[0] && $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, i[0]);
                         var s = $.datepicker._get(t, "onSelect");
                         if (s) {
                             var o = $.datepicker._formatDate(t);
                             s.apply(t.input ? t.input[0] : null, [o, t])
                         } else $.datepicker._hideDatepicker();
                         return !1;
                     case 27:
                         $.datepicker._hideDatepicker();
                         break;
                     case 33:
                         $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                         break;
                     case 34:
                         $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                         break;
                     case 35:
                         (e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), n = e.ctrlKey || e.metaKey;
                         break;
                     case 36:
                         (e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), n = e.ctrlKey || e.metaKey;
                         break;
                     case 37:
                         (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                         break;
                     case 38:
                         (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), n = e.ctrlKey || e.metaKey;
                         break;
                     case 39:
                         (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                         break;
                     case 40:
                         (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), n = e.ctrlKey || e.metaKey;
                         break;
                     default:
                         n = !1
                 } else e.keyCode == 36 && e.ctrlKey ? $.datepicker._showDatepicker(this) : n = !1;
                 n && (e.preventDefault(), e.stopPropagation())
             },
             _doKeyPress: function(e) {
                 var t = $.datepicker._getInst(e.target);
                 if ($.datepicker._get(t, "constrainInput")) {
                     var n = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
                         r = String.fromCharCode(e.charCode == undefined ? e.keyCode : e.charCode);
                     return e.ctrlKey || e.metaKey || r < " " || !n || n.indexOf(r) > -1
                 }
             },
             _doKeyUp: function(e) {
                 var t = $.datepicker._getInst(e.target);
                 if (t.input.val() != t.lastVal) try {
                     var n = $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, $.datepicker._getFormatConfig(t));
                     n && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t))
                 } catch (r) {
                     $.datepicker.log(r)
                 }
                 return !0
             },
             _showDatepicker: function(e) {
                 e = e.target || e, e.nodeName.toLowerCase() != "input" && (e = $("input", e.parentNode)[0]);
                 if ($.datepicker._isDisabledDatepicker(e) || $.datepicker._lastInput == e) return;
                 var t = $.datepicker._getInst(e);
                 $.datepicker._curInst && $.datepicker._curInst != t && ($.datepicker._curInst.dpDiv.stop(!0, !0), t && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                 var n = $.datepicker._get(t, "beforeShow"),
                     r = n ? n.apply(e, [e, t]) : {};
                 if (r === !1) return;
                 extendRemove(t.settings, r), t.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(t), $.datepicker._Nepallog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
                 var i = !1;
                 $(e).parents().each(function() {
                     return i |= $(this).css("position") == "fixed", !i
                 });
                 var s = {
                     left: $.datepicker._pos[0],
                     top: $.datepicker._pos[1]
                 };
                 $.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
                     position: "absolute",
                     display: "block",
                     top: "-1000px"
                 }), $.datepicker._updateDatepicker(t), s = $.datepicker._checkOffset(t, s, i), t.dpDiv.css({
                     position: $.datepicker._Nepallog && $.blockUI ? "static" : i ? "fixed" : "absolute",
                     display: "none",
                     left: s.left + "px",
                     top: s.top + "px"
                 });
                 if (!t.inline) {
                     var o = $.datepicker._get(t, "showAnim"),
                         u = $.datepicker._get(t, "duration"),
                         a = function() {
                             var e = t.dpDiv.find("iframe.ui-datepicker-cover");
                             if (!!e.length) {
                                 var n = $.datepicker._getBorders(t.dpDiv);
                                 e.css({
                                     left: -n[0],
                                     top: -n[1],
                                     width: t.dpDiv.outerWidth(),
                                     height: t.dpDiv.outerHeight()
                                 })
                             }
                         };
                     t.dpDiv.zIndex($(e).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[o] || $.effects[o]) ? t.dpDiv.show(o, $.datepicker._get(t, "showOptions"), u, a) : t.dpDiv[o || "show"](o ? u : null, a), (!o || !u) && a(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), $.datepicker._curInst = t
                 }
             },
             _updateDatepicker: function(e) {
                 this.maxRows = 4;
                 var t = $.datepicker._getBorders(e.dpDiv);
                 instActive = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                 var n = e.dpDiv.find("iframe.ui-datepicker-cover");
                 !n.length || n.css({
                     left: -t[0],
                     top: -t[1],
                     width: e.dpDiv.outerWidth(),
                     height: e.dpDiv.outerHeight()
                 }), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                 var r = this._getNumberOfMonths(e),
                     i = r[1],
                     s = 17;
                 e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), i > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", s * i + "em"), e.dpDiv[(r[0] != 1 || r[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus();
                 if (e.yearshtml) {
                     var o = e.yearshtml;
                     setTimeout(function() {
                         o === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), o = e.yearshtml = null
                     }, 0)
                 }
             },
             _getBorders: function(e) {
                 var t = function(e) {
                     return {
                         thin: 1,
                         medium: 2,
                         thick: 3
                     }[e] || e
                 };
                 return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
             },
             _checkOffset: function(e, t, n) {
                 var r = e.dpDiv.outerWidth(),
                     i = e.dpDiv.outerHeight(),
                     s = e.input ? e.input.outerWidth() : 0,
                     o = e.input ? e.input.outerHeight() : 0,
                     u = document.documentElement.clientWidth + (n ? 0 : $(document).scrollLeft()),
                     a = document.documentElement.clientHeight + (n ? 0 : $(document).scrollTop());
                 return t.left -= this._get(e, "isRTL") ? r - s : 0, t.left -= n && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= n && t.top == e.input.offset().top + o ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + r > u && u > r ? Math.abs(t.left + r - u) : 0), t.top -= Math.min(t.top, t.top + i > a && a > i ? Math.abs(i + o) : 0), t
             },
             _findPos: function(e) {
                 var t = this._getInst(e),
                     n = this._get(t, "isRTL");
                 while (e && (e.type == "hidden" || e.nodeType != 1 || $.expr.filters.hidden(e))) e = e[n ? "previousSibling" : "nextSibling"];
                 var r = $(e).offset();
                 return [r.left, r.top]
             },
             _hideDatepicker: function(e) {
                 var t = this._curInst;
                 if (!t || e && t != $.data(e, PROP_NAME)) return;
                 if (this._datepickerShowing) {
                     var n = this._get(t, "showAnim"),
                         r = this._get(t, "duration"),
                         i = function() {
                             $.datepicker._tidyDialog(t)
                         };
                     $.effects && ($.effects.effect[n] || $.effects[n]) ? t.dpDiv.hide(n, $.datepicker._get(t, "showOptions"), r, i) : t.dpDiv[n == "slideDown" ? "slideUp" : n == "fadeIn" ? "fadeOut" : "hide"](n ? r : null, i), n || i(), this._datepickerShowing = !1;
                     var s = this._get(t, "onClose");
                     s && s.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._lastInput = null, this._Nepallog && (this._dialogInput.css({
                         position: "absolute",
                         left: "0",
                         top: "-100px"
                     }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._Nepallog = !1
                 }
             },
             _tidyDialog: function(e) {
                 e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
             },
             _checkExternalClick: function(e) {
                 if (!$.datepicker._curInst) return;
                 var t = $(e.target),
                     n = $.datepicker._getInst(t[0]);
                 (t[0].id != $.datepicker._mainDivId && t.parents("#" + $.datepicker._mainDivId).length == 0 && !t.hasClass($.datepicker.markerClassName) && !t.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._Nepallog || !$.blockUI) || t.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != n) && $.datepicker._hideDatepicker()
             },
             _adjustDate: function(e, t, n) {
                 var r = $(e),
                     i = this._getInst(r[0]);
                 if (this._isDisabledDatepicker(r[0])) return;
                 this._adjustInstDate(i, t + (n == "M" ? this._get(i, "showCurrentAtPos") : 0), n), this._updateDatepicker(i)
             },
             _gotoToday: function(e) {
                 var t = $(e),
                     n = this._getInst(t[0]);
                 if (this._get(n, "gotoCurrent") && n.currentDay) n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear;
                 else {
                     var r = new Date;
                     n.selectedDay = r.getDate(), n.drawMonth = n.selectedMonth = r.getMonth(), n.drawYear = n.selectedYear = r.getFullYear()
                 }
                 this._notifyChange(n), this._adjustDate(t)
             },
             _selectMonthYear: function(e, t, n) {
                 var r = $(e),
                     i = this._getInst(r[0]);
                 i["selected" + (n == "M" ? "Month" : "Year")] = i["draw" + (n == "M" ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(i), this._adjustDate(r)
             },
             _selectDay: function(e, t, n, r) {
                 var i = $(e);
                 if ($(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(i[0])) return;
                 var s = this._getInst(i[0]);
                 s.selectedDay = s.currentDay = $("a", r).html(), s.selectedMonth = s.currentMonth = t, s.selectedYear = s.currentYear = n, this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
             },
             _clearDate: function(e) {
                 var t = $(e),
                     n = this._getInst(t[0]);
                 this._selectDate(t, "")
             },
             _selectDate: function(e, t) {
                 var n = $(e),
                     r = this._getInst(n[0]);
                 t = t != null ? t : this._formatDate(r), r.input && r.input.val(t), this._updateAlternate(r);
                 var i = this._get(r, "onSelect");
                 i ? i.apply(r.input ? r.input[0] : null, [t, r]) : r.input && r.input.trigger("change"), r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], typeof r.input[0] != "object" && r.input.focus(), this._lastInput = null)
             },
             _updateAlternate: function(e) {
                 var t = this._get(e, "altField");
                 if (t) {
                     var n = this._get(e, "altFormat") || this._get(e, "dateFormat"),
                         r = this._getDate(e),
                         i = this.formatDate(n, r, this._getFormatConfig(e));
                     $(t).each(function() {
                         $(this).val(i)
                     })
                 }
             },
             noWeekends: function(e) {
                 var t = e.getDay();
                 return [t > 0 && t < 6, ""]
             },
             iso8601Week: function(e) {
                 var t = new Date(e.getTime());
                 t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                 var n = t.getTime();
                 return t.setMonth(0), t.setDate(1), Math.floor(Math.round((n - t) / 864e5) / 7) + 1
             },
             parseDate: function(e, t, n) {
                 if (e == null || t == null) throw "Invalid arguments";
                 t = typeof t == "object" ? t.toString() : t + "";
                 if (t == "") return null;
                 var r = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                 r = typeof r != "string" ? r : (new Date).getFullYear() % 100 + parseInt(r, 10);
                 var i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                     s = (n ? n.dayNames : null) || this._defaults.dayNames,
                     o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                     u = (n ? n.monthNames : null) || this._defaults.monthNames,
                     a = -1,
                     f = -1,
                     l = -1,
                     c = -1,
                     h = !1,
                     p = function(t) {
                         var n = y + 1 < e.length && e.charAt(y + 1) == t;
                         return n && y++, n
                     },
                     d = function(e) {
                         var n = p(e),
                             r = e == "@" ? 14 : e == "!" ? 20 : e == "y" && n ? 4 : e == "o" ? 3 : 2,
                             i = new RegExp("^\\d{1," + r + "}"),
                             s = t.substring(g).match(i);
                         if (!s) throw "Missing number at position " + g;
                         return g += s[0].length, parseInt(s[0], 10)
                     },
                     v = function(e, n, r) {
                         var i = $.map(p(e) ? r : n, function(e, t) {
                                 return [
                                     [t, e]
                                 ]
                             }).sort(function(e, t) {
                                 return -(e[1].length - t[1].length)
                             }),
                             s = -1;
                         $.each(i, function(e, n) {
                             var r = n[1];
                             if (t.substr(g, r.length).toLowerCase() == r.toLowerCase()) return s = n[0], g += r.length, !1
                         });
                         if (s != -1) return s + 1;
                         throw "Unknown name at position " + g
                     },
                     m = function() {
                         if (t.charAt(g) != e.charAt(y)) throw "Unexpected literal at position " + g;
                         g++
                     },
                     g = 0;
                 for (var y = 0; y < e.length; y++)
                     if (h) e.charAt(y) == "'" && !p("'") ? h = !1 : m();
                     else switch (e.charAt(y)) {
                         case "d":
                             l = d("d");
                             break;
                         case "D":
                             v("D", i, s);
                             break;
                         case "o":
                             c = d("o");
                             break;
                         case "m":
                             f = d("m");
                             break;
                         case "M":
                             f = v("M", o, u);
                             break;
                         case "y":
                             a = d("y");
                             break;
                         case "@":
                             var b = new Date(d("@"));
                             a = b.getFullYear(), f = b.getMonth() + 1, l = b.getDate();
                             break;
                         case "!":
                             var b = new Date((d("!") - this._ticksTo1970) / 1e4);
                             a = b.getFullYear(), f = b.getMonth() + 1, l = b.getDate();
                             break;
                         case "'":
                             p("'") ? m() : h = !0;
                             break;
                         default:
                             m()
                     }
                 if (g < t.length) {
                     var w = t.substr(g);
                     if (!/^\s+/.test(w)) throw "Extra/unparsed characters found in date: " + w
                 }
                 a == -1 ? a = (new Date).getFullYear() : a < 100 && (a += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (a <= r ? 0 : -100));
                 if (c > -1) {
                     f = 1, l = c;
                     do {
                         var E = this._getDaysInMonth(a, f - 1);
                         if (l <= E) break;
                         f++, l -= E
                     } while (!0)
                 }
                 var b = this._daylightSavingAdjust(new Date(a, f - 1, l));
                 if (b.getFullYear() != a || b.getMonth() + 1 != f || b.getDate() != l) throw "Invalid date";
                 return b
             },
             ATOM: "yy-mm-dd",
             COOKIE: "D, dd M yy",
             ISO_8601: "yy-mm-dd",
             RFC_822: "D, d M y",
             RFC_850: "DD, dd-M-y",
             RFC_1036: "D, d M y",
             RFC_1123: "D, d M yy",
             RFC_2822: "D, d M yy",
             RSS: "D, d M y",
             TICKS: "!",
             TIMESTAMP: "@",
             W3C: "yy-mm-dd",
             _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
             formatDate: function(e, t, n) {
                 if (!t) return "";
                 var r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                     i = (n ? n.dayNames : null) || this._defaults.dayNames,
                     s = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                     o = (n ? n.monthNames : null) || this._defaults.monthNames,
                     u = function(t) {
                         var n = h + 1 < e.length && e.charAt(h + 1) == t;
                         return n && h++, n
                     },
                     a = function(e, t, n) {
                         var r = "" + t;
                         if (u(e))
                             while (r.length < n) r = "0" + r;
                         return r
                     },
                     f = function(e, t, n, r) {
                         return u(e) ? r[t] : n[t]
                     },
                     l = "",
                     c = !1;
                 if (t)
                     for (var h = 0; h < e.length; h++)
                         if (c) e.charAt(h) == "'" && !u("'") ? c = !1 : l += e.charAt(h);
                         else switch (e.charAt(h)) {
                             case "d":
                                 l += a("d", t.getDate(), 2);
                                 break;
                             case "D":
                                 l += f("D", t.getDay(), r, i);
                                 break;
                             case "o":
                                 l += a("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
                                 break;
                             case "m":
                                 l += a("m", t.getMonth() + 1, 2);
                                 break;
                             case "M":
                                 l += f("M", t.getMonth(), s, o);
                                 break;
                             case "y":
                                 l += u("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                                 break;
                             case "@":
                                 l += t.getTime();
                                 break;
                             case "!":
                                 l += t.getTime() * 1e4 + this._ticksTo1970;
                                 break;
                             case "'":
                                 u("'") ? l += "'" : c = !0;
                                 break;
                             default:
                                 l += e.charAt(h)
                         }
                 return l
             },
             _possibleChars: function(e) {
                 var t = "",
                     n = !1,
                     r = function(t) {
                         var n = i + 1 < e.length && e.charAt(i + 1) == t;
                         return n && i++, n
                     };
                 for (var i = 0; i < e.length; i++)
                     if (n) e.charAt(i) == "'" && !r("'") ? n = !1 : t += e.charAt(i);
                     else switch (e.charAt(i)) {
                         case "d":
                         case "m":
                         case "y":
                         case "@":
                             t += "0123456789";
                             break;
                         case "D":
                         case "M":
                             return null;
                         case "'":
                             r("'") ? t += "'" : n = !0;
                             break;
                         default:
                             t += e.charAt(i)
                     }
                 return t
             },
             _get: function(e, t) {
                 return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
             },
             _setDateFromField: function(e, t) {
                 if (e.input.val() == e.lastVal) return;
                 var n = this._get(e, "dateFormat"),
                     r = e.lastVal = e.input ? e.input.val() : null,
                     i, s;
                 i = s = this._getDefaultDate(e);
                 var o = this._getFormatConfig(e);
                 try {
                     i = this.parseDate(n, r, o) || s
                 } catch (u) {
                     this.log(u), r = t ? "" : r
                 }
                 e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = r ? i.getDate() : 0, e.currentMonth = r ? i.getMonth() : 0, e.currentYear = r ? i.getFullYear() : 0, this._adjustInstDate(e)
             },
             _getDefaultDate: function(e) {
                 return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
             },
             _determineDate: function(e, t, n) {
                 var r = function(e) {
                         var t = new Date;
                         return t.setDate(t.getDate() + e), t
                     },
                     i = function(t) {
                         try {
                             return $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), t, $.datepicker._getFormatConfig(e))
                         } catch (n) {}
                         var r = (t.toLowerCase().match(/^c/) ? $.datepicker._getDate(e) : null) || new Date,
                             i = r.getFullYear(),
                             s = r.getMonth(),
                             o = r.getDate(),
                             u = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                             a = u.exec(t);
                         while (a) {
                             switch (a[2] || "d") {
                                 case "d":
                                 case "D":
                                     o += parseInt(a[1], 10);
                                     break;
                                 case "w":
                                 case "W":
                                     o += parseInt(a[1], 10) * 7;
                                     break;
                                 case "m":
                                 case "M":
                                     s += parseInt(a[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(i, s));
                                     break;
                                 case "y":
                                 case "Y":
                                     i += parseInt(a[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(i, s))
                             }
                             a = u.exec(t)
                         }
                         return new Date(i, s, o)
                     },
                     s = t == null || t === "" ? n : typeof t == "string" ? i(t) : typeof t == "number" ? isNaN(t) ? n : r(t) : new Date(t.getTime());
                 return s = s && s.toString() == "Invalid Date" ? n : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
             },
             _daylightSavingAdjust: function(e) {
                 return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
             },
             _setDate: function(e, t, n) {
                 var r = !t,
                     i = e.selectedMonth,
                     s = e.selectedYear,
                     o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
                 e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), (i != e.selectedMonth || s != e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
             },
             _getDate: function(e) {
                 var t = !e.currentYear || e.input && e.input.val() == "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                 return t
             },
             _attachHandlers: function(e) {
                 var t = this._get(e, "stepMonths"),
                     n = "#" + e.id.replace(/\\\\/g, "\\");
                 e.dpDiv.find("[data-handler]").map(function() {
                     var e = {
                         prev: function() {
                             window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n, -t, "M")
                         },
                         next: function() {
                             window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n, +t, "M")
                         },
                         hide: function() {
                             window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                         },
                         today: function() {
                             window["DP_jQuery_" + dpuuid].datepicker._gotoToday(n)
                         },
                         selectDay: function() {
                             return window["DP_jQuery_" + dpuuid].datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                         },
                         selectMonth: function() {
                             return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n, this, "M"), !1
                         },
                         selectYear: function() {
                             return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n, this, "Y"), !1
                         }
                     };
                     $(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                 })
             },
             _generateHTML: function(e) {
                 var t = new Date;
                 t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
                 var n = this._get(e, "isRTL"),
                     r = this._get(e, "showButtonPanel"),
                     i = this._get(e, "hideIfNoPrevNext"),
                     s = this._get(e, "navigationAsDateFormat"),
                     o = this._getNumberOfMonths(e),
                     u = this._get(e, "showCurrentAtPos"),
                     a = this._get(e, "stepMonths"),
                     f = o[0] != 1 || o[1] != 1,
                     l = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                     c = this._getMinMaxDate(e, "min"),
                     h = this._getMinMaxDate(e, "max"),
                     p = e.drawMonth - u,
                     d = e.drawYear;
                 p < 0 && (p += 12, d--);
                 if (h) {
                     var v = this._daylightSavingAdjust(new Date(h.getFullYear(), h.getMonth() - o[0] * o[1] + 1, h.getDate()));
                     v = c && v < c ? c : v;
                     while (this._daylightSavingAdjust(new Date(d, p, 1)) > v) p--, p < 0 && (p = 11, d--)
                 }
                 e.drawMonth = p, e.drawYear = d;
                 var m = this._get(e, "prevText");
                 m = s ? this.formatDate(m, this._daylightSavingAdjust(new Date(d, p - a, 1)), this._getFormatConfig(e)) : m;
                 var g = this._canAdjustMonth(e, -1, d, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>" : i ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>",
                     y = this._get(e, "nextText");
                 y = s ? this.formatDate(y, this._daylightSavingAdjust(new Date(d, p + a, 1)), this._getFormatConfig(e)) : y;
                 var b = this._canAdjustMonth(e, 1, d, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + y + "</span></a>" : i ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + y + "</span></a>",
                     w = this._get(e, "currentText"),
                     E = this._get(e, "gotoCurrent") && e.currentDay ? l : t;
                 w = s ? this.formatDate(w, E, this._getFormatConfig(e)) : w;
                 var S = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(e, "closeText") + "</button>",
                     x = r ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (n ? S : "") + (this._isInRange(e, E) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + w + "</button>" : "") + (n ? "" : S) + "</div>" : "",
                     T = parseInt(this._get(e, "firstDay"), 10);
                 T = isNaN(T) ? 0 : T;
                 var N = this._get(e, "showWeek"),
                     C = this._get(e, "dayNames"),
                     k = this._get(e, "dayNamesShort"),
                     L = this._get(e, "dayNamesMin"),
                     A = this._get(e, "monthNames"),
                     O = this._get(e, "monthNamesShort"),
                     M = this._get(e, "beforeShowDay"),
                     _ = this._get(e, "showOtherMonths"),
                     D = this._get(e, "selectOtherMonths"),
                     P = this._get(e, "calculateWeek") || this.iso8601Week,
                     H = this._getDefaultDate(e),
                     B = "";
                 for (var j = 0; j < o[0]; j++) {
                     var F = "";
                     this.maxRows = 4;
                     for (var I = 0; I < o[1]; I++) {
                         var q = this._daylightSavingAdjust(new Date(d, p, e.selectedDay)),
                             R = " ui-corner-all",
                             U = "";
                         if (f) {
                             U += '<div class="ui-datepicker-group';
                             if (o[1] > 1) switch (I) {
                                 case 0:
                                     U += " ui-datepicker-group-first", R = " ui-corner-" + (n ? "right" : "left");
                                     break;
                                 case o[1] - 1:
                                     U += " ui-datepicker-group-last", R = " ui-corner-" + (n ? "left" : "right");
                                     break;
                                 default:
                                     U += " ui-datepicker-group-middle", R = ""
                             }
                             U += '">'
                         }
                         U += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + R + '">' + (/all|left/.test(R) && j == 0 ? n ? b : g : "") + (/all|right/.test(R) && j == 0 ? n ? g : b : "") + this._generateMonthYearHeader(e, p, d, c, h, j > 0 || I > 0, A, O) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
                         var z = N ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "";
                         for (var W = 0; W < 7; W++) {
                             var X = (W + T) % 7;
                             z += "<th" + ((W + T + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + C[X] + '">' + L[X] + "</span></th>"
                         }
                         U += z + "</tr></thead><tbody>";
                         var V = this._getDaysInMonth(d, p);
                         d == e.selectedYear && p == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, V));
                         var J = (this._getFirstDayOfMonth(d, p) - T + 7) % 7,
                             K = Math.ceil((J + V) / 7),
                             Q = f ? this.maxRows > K ? this.maxRows : K : K;
                         this.maxRows = Q;
                         var G = this._daylightSavingAdjust(new Date(d, p, 1 - J));
                         for (var Y = 0; Y < Q; Y++) {
                             U += "<tr>";
                             var Z = N ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(G) + "</td>" : "";
                             for (var W = 0; W < 7; W++) {
                                 var et = M ? M.apply(e.input ? e.input[0] : null, [G]) : [!0, ""],
                                     tt = G.getMonth() != p,
                                     nt = tt && !D || !et[0] || c && G < c || h && G > h;
                                 Z += '<td class="' + ((W + T + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (tt ? " ui-datepicker-other-month" : "") + (G.getTime() == q.getTime() && p == e.selectedMonth && e._keyEvent || H.getTime() == G.getTime() && H.getTime() == q.getTime() ? " " + this._dayOverClass : "") + (nt ? " " + this._unselectableClass + " ui-state-disabled" : "") + (tt && !_ ? "" : " " + et[1] + (G.getTime() == l.getTime() ? " " + this._currentClass : "") + (G.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!tt || _) && et[2] ? ' title="' + et[2] + '"' : "") + (nt ? "" : ' data-handler="selectDay" data-event="click" data-month="' + G.getMonth() + '" data-year="' + G.getFullYear() + '"') + ">" + (tt && !_ ? "&#xa0;" : nt ? '<span class="ui-state-default">' + G.getDate() + "</span>" : '<a class="ui-state-default' + (G.getTime() == t.getTime() ? " ui-state-highlight" : "") + (G.getTime() == l.getTime() ? " ui-state-active" : "") + (tt ? " ui-priority-secondary" : "") + '" href="#">' + G.getDate() + "</a>") + "</td>", G.setDate(G.getDate() + 1), G = this._daylightSavingAdjust(G)
                             }
                             U += Z + "</tr>"
                         }
                         p++, p > 11 && (p = 0, d++), U += "</tbody></table>" + (f ? "</div>" + (o[0] > 0 && I == o[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), F += U
                     }
                     B += F
                 }
                 return B += x + ($.ui.ie6 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, B
             },
             _generateMonthYearHeader: function(e, t, n, r, i, s, o, u) {
                 var a = this._get(e, "changeMonth"),
                     f = this._get(e, "changeYear"),
                     l = this._get(e, "showMonthAfterYear"),
                     c = '<div class="ui-datepicker-title">',
                     h = "";
                 if (s || !a) h += '<span class="ui-datepicker-month">' + o[t] + "</span>";
                 else {
                     var p = r && r.getFullYear() == n,
                         d = i && i.getFullYear() == n;
                     h += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                     for (var v = 0; v < 12; v++)(!p || v >= r.getMonth()) && (!d || v <= i.getMonth()) && (h += '<option value="' + v + '"' + (v == t ? ' selected="selected"' : "") + ">" + u[v] + "</option>");
                     h += "</select>"
                 }
                 l || (c += h + (s || !a || !f ? "&#xa0;" : ""));
                 if (!e.yearshtml) {
                     e.yearshtml = "";
                     if (s || !f) c += '<span class="ui-datepicker-year">' + n + "</span>";
                     else {
                         var m = this._get(e, "yearRange").split(":"),
                             g = (new Date).getFullYear(),
                             y = function(e) {
                                 var t = e.match(/c[+-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? g + parseInt(e, 10) : parseInt(e, 10);
                                 return isNaN(t) ? g : t
                             },
                             b = y(m[0]),
                             w = Math.max(b, y(m[1] || ""));
                         b = r ? Math.max(b, r.getFullYear()) : b, w = i ? Math.min(w, i.getFullYear()) : w, e.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
                         for (; b <= w; b++) e.yearshtml += '<option value="' + b + '"' + (b == n ? ' selected="selected"' : "") + ">" + b + "</option>";
                         e.yearshtml += "</select>", c += e.yearshtml, e.yearshtml = null
                     }
                 }
                 return c += this._get(e, "yearSuffix"), l && (c += (s || !a || !f ? "&#xa0;" : "") + h), c += "</div>", c
             },
             _adjustInstDate: function(e, t, n) {
                 var r = e.drawYear + (n == "Y" ? t : 0),
                     i = e.drawMonth + (n == "M" ? t : 0),
                     s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n == "D" ? t : 0),
                     o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
                 e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), (n == "M" || n == "Y") && this._notifyChange(e)
             },
             _restrictMinMax: function(e, t) {
                 var n = this._getMinMaxDate(e, "min"),
                     r = this._getMinMaxDate(e, "max"),
                     i = n && t < n ? n : t;
                 return i = r && i > r ? r : i, i
             },
             _notifyChange: function(e) {
                 var t = this._get(e, "onChangeMonthYear");
                 t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
             },
             _getNumberOfMonths: function(e) {
                 var t = this._get(e, "numberOfMonths");
                 return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
             },
             _getMinMaxDate: function(e, t) {
                 return this._determineDate(e, this._get(e, t + "Date"), null)
             },
             _getDaysInMonth: function(e, t) {
                 return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
             },
             _getFirstDayOfMonth: function(e, t) {
                 return (new Date(e, t, 1)).getDay()
             },
             _canAdjustMonth: function(e, t, n, r) {
                 var i = this._getNumberOfMonths(e),
                     s = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1));
                 return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
             },
             _isInRange: function(e, t) {
                 var n = this._getMinMaxDate(e, "min"),
                     r = this._getMinMaxDate(e, "max");
                 return (!n || t.getTime() >= n.getTime()) && (!r || t.getTime() <= r.getTime())
             },
             _getFormatConfig: function(e) {
                 var t = this._get(e, "shortYearCutoff");
                 return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                     shortYearCutoff: t,
                     dayNamesShort: this._get(e, "dayNamesShort"),
                     dayNames: this._get(e, "dayNames"),
                     monthNamesShort: this._get(e, "monthNamesShort"),
                     monthNames: this._get(e, "monthNames")
                 }
             },
             _formatDate: function(e, t, n, r) {
                 t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
                 var i = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                 return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
             }
         }), $.fn.datepicker = function(e) {
             if (!this.length) return this;
             $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
             var t = Array.prototype.slice.call(arguments, 1);
             return typeof e != "string" || e != "isDisabled" && e != "getDate" && e != "widget" ? e == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t)) : this.each(function() {
                 typeof e == "string" ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this].concat(t)) : $.datepicker._attachDatepicker(this, e)
             }) : $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t))
         }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.9.2", window["DP_jQuery_" + dpuuid] = $
     }(jQuery),
     function(e, t) {
         var n = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
             r = {
                 buttons: !0,
                 height: !0,
                 maxHeight: !0,
                 maxWidth: !0,
                 minHeight: !0,
                 minWidth: !0,
                 width: !0
             },
             i = {
                 maxHeight: !0,
                 maxWidth: !0,
                 minHeight: !0,
                 minWidth: !0
             };
         e.widget("ui.dialog", {
             version: "1.9.2",
             options: {
                 autoOpen: !0,
                 buttons: {},
                 closeOnEscape: !0,
                 closeText: "close",
                 dialogClass: "",
                 draggable: !0,
                 hide: null,
                 height: "auto",
                 maxHeight: !1,
                 maxWidth: !1,
                 minHeight: 150,
                 minWidth: 150,
                 modal: !1,
                 position: {
                     my: "center",
                     at: "center",
                     of: window,
                     collision: "fit",
                     using: function(t) {
                         var n = e(this).css(t).offset().top;
                         n < 0 && e(this).css("top", t.top - n)
                     }
                 },
                 resizable: !0,
                 show: null,
                 stack: !0,
                 title: "",
                 width: 300,
                 zIndex: 1e3
             },
             _create: function() {
                 this.originalTitle = this.element.attr("title"), typeof this.originalTitle != "string" && (this.originalTitle = ""), this.oldPosition = {
                     parent: this.element.parent(),
                     index: this.element.parent().children().index(this.element)
                 }, this.options.title = this.options.title || this.originalTitle;
                 var t = this,
                     r = this.options,
                     i = r.title || "&#160;",
                     s, o, u, a, f;
                 s = (this.uiDialog = e("<div>")).addClass(n + r.dialogClass).css({
                     display: "none",
                     outline: 0,
                     zIndex: r.zIndex
                 }).attr("tabIndex", -1).keydown(function(n) {
                     r.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === e.ui.keyCode.ESCAPE && (t.close(n), n.preventDefault())
                 }).mousedown(function(e) {
                     t.moveToTop(!1, e)
                 }).appendTo("body"), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s), o = (this.uiDialogTitlebar = e("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function() {
                     s.focus()
                 }).prependTo(s), u = e("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function(e) {
                     e.preventDefault(), t.close(e)
                 }).appendTo(o), (this.uiDialogTitlebarCloseText = e("<span>")).addClass("ui-icon ui-icon-closethick").text(r.closeText).appendTo(u), a = e("<span>").uniqueId().addClass("ui-dialog-title").html(i).prependTo(o), f = (this.uiDialogButtonPane = e("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), (this.uiButtonSet = e("<div>")).addClass("ui-dialog-buttonset").appendTo(f), s.attr({
                     role: "dialog",
                     "aria-labelledby": a.attr("id")
                 }), o.find("*").add(o).disableSelection(), this._hoverable(u), this._focusable(u), r.draggable && e.fn.draggable && this._makeDraggable(), r.resizable && e.fn.resizable && this._makeResizable(), this._createButtons(r.buttons), this._isOpen = !1, e.fn.bgiframe && s.bgiframe(), this._on(s, {
                     keydown: function(t) {
                         if (!r.modal || t.keyCode !== e.ui.keyCode.TAB) return;
                         var n = e(":tabbable", s),
                             i = n.filter(":first"),
                             o = n.filter(":last");
                         if (t.target === o[0] && !t.shiftKey) return i.focus(1), !1;
                         if (t.target === i[0] && t.shiftKey) return o.focus(1), !1
                     }
                 })
             },
             _init: function() {
                 this.options.autoOpen && this.open()
             },
             _destroy: function() {
                 var e, t = this.oldPosition;
                 this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
             },
             widget: function() {
                 return this.uiDialog
             },
             close: function(t) {
                 var n = this,
                     r, i;
                 if (!this._isOpen) return;
                 if (!1 === this._trigger("beforeClose", t)) return;
                 return this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this._hide(this.uiDialog, this.options.hide, function() {
                     n._trigger("close", t)
                 }) : (this.uiDialog.hide(), this._trigger("close", t)), e.ui.dialog.overlay.resize(), this.options.modal && (r = 0, e(".ui-dialog").each(function() {
                     this !== n.uiDialog[0] && (i = e(this).css("z-index"), isNaN(i) || (r = Math.max(r, i)))
                 }), e.ui.dialog.maxZ = r), this
             },
             isOpen: function() {
                 return this._isOpen
             },
             moveToTop: function(t, n) {
                 var r = this.options,
                     i;
                 return r.modal && !t || !r.stack && !r.modal ? this._trigger("focus", n) : (r.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = r.zIndex), this.overlay && (e.ui.dialog.maxZ += 1, e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ, this.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ)), i = {
                     scrollTop: this.element.scrollTop(),
                     scrollLeft: this.element.scrollLeft()
                 }, e.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", e.ui.dialog.maxZ), this.element.attr(i), this._trigger("focus", n), this)
             },
             open: function() {
                 if (this._isOpen) return;
                 var t, n = this.options,
                     r = this.uiDialog;
                 return this._size(), this._position(n.position), r.show(n.show), this.overlay = n.modal ? new e.ui.dialog.overlay(this) : null, this.moveToTop(!0), t = this.element.find(":tabbable"), t.length || (t = this.uiDialogButtonPane.find(":tabbable"), t.length || (t = r)), t.eq(0).focus(), this._isOpen = !0, this._trigger("open"), this
             },
             _createButtons: function(t) {
                 var n = this,
                     r = !1;
                 this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), typeof t == "object" && t !== null && e.each(t, function() {
                     return !(r = !0)
                 }), r ? (e.each(t, function(t, r) {
                     var i, s;
                     r = e.isFunction(r) ? {
                         click: r,
                         text: t
                     } : r, r = e.extend({
                         type: "button"
                     }, r), s = r.click, r.click = function() {
                         s.apply(n.element[0], arguments)
                     }, i = e("<button></button>", r).appendTo(n.uiButtonSet), e.fn.button && i.button()
                 }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
             },
             _makeDraggable: function() {
                 function r(e) {
                     return {
                         position: e.position,
                         offset: e.offset
                     }
                 }
                 var t = this,
                     n = this.options;
                 this.uiDialog.draggable({
                     cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                     handle: ".ui-dialog-titlebar",
                     containment: "document",
                     start: function(n, i) {
                         e(this).addClass("ui-dialog-dragging"), t._trigger("dragStart", n, r(i))
                     },
                     drag: function(e, n) {
                         t._trigger("drag", e, r(n))
                     },
                     stop: function(i, s) {
                         n.position = [s.position.left - t.document.scrollLeft(), s.position.top - t.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), t._trigger("dragStop", i, r(s)), e.ui.dialog.overlay.resize()
                     }
                 })
             },
             _makeResizable: function(n) {
                 function u(e) {
                     return {
                         originalPosition: e.originalPosition,
                         originalSize: e.originalSize,
                         position: e.position,
                         size: e.size
                     }
                 }
                 n = n === t ? this.options.resizable : n;
                 var r = this,
                     i = this.options,
                     s = this.uiDialog.css("position"),
                     o = typeof n == "string" ? n : "n,e,s,w,se,sw,ne,nw";
                 this.uiDialog.resizable({
                     cancel: ".ui-dialog-content",
                     containment: "document",
                     alsoResize: this.element,
                     maxWidth: i.maxWidth,
                     maxHeight: i.maxHeight,
                     minWidth: i.minWidth,
                     minHeight: this._minHeight(),
                     handles: o,
                     start: function(t, n) {
                         e(this).addClass("ui-dialog-resizing"), r._trigger("resizeStart", t, u(n))
                     },
                     resize: function(e, t) {
                         r._trigger("resize", e, u(t))
                     },
                     stop: function(t, n) {
                         e(this).removeClass("ui-dialog-resizing"), i.height = e(this).height(), i.width = e(this).width(), r._trigger("resizeStop", t, u(n)), e.ui.dialog.overlay.resize()
                     }
                 }).css("position", s).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
             },
             _minHeight: function() {
                 var e = this.options;
                 return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
             },
             _position: function(t) {
                 var n = [],
                     r = [0, 0],
                     i;
                 if (t) {
                     if (typeof t == "string" || typeof t == "object" && "0" in t) n = t.split ? t.split(" ") : [t[0], t[1]], n.length === 1 && (n[1] = n[0]), e.each(["left", "top"], function(e, t) {
                         +n[e] === n[e] && (r[e] = n[e], n[e] = t)
                     }), t = {
                         my: n[0] + (r[0] < 0 ? r[0] : "+" + r[0]) + " " + n[1] + (r[1] < 0 ? r[1] : "+" + r[1]),
                         at: n.join(" ")
                     };
                     t = e.extend({}, e.ui.dialog.prototype.options.position, t)
                 } else t = e.ui.dialog.prototype.options.position;
                 i = this.uiDialog.is(":visible"), i || this.uiDialog.show(), this.uiDialog.position(t), i || this.uiDialog.hide()
             },
             _setOptions: function(t) {
                 var n = this,
                     s = {},
                     o = !1;
                 e.each(t, function(e, t) {
                     n._setOption(e, t), e in r && (o = !0), e in i && (s[e] = t)
                 }), o && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", s)
             },
             _setOption: function(t, r) {
                 var i, s, o = this.uiDialog;
                 switch (t) {
                     case "buttons":
                         this._createButtons(r);
                         break;
                     case "closeText":
                         this.uiDialogTitlebarCloseText.text("" + r);
                         break;
                     case "dialogClass":
                         o.removeClass(this.options.dialogClass).addClass(n + r);
                         break;
                     case "disabled":
                         r ? o.addClass("ui-dialog-disabled") : o.removeClass("ui-dialog-disabled");
                         break;
                     case "draggable":
                         i = o.is(":data(draggable)"), i && !r && o.draggable("destroy"), !i && r && this._makeDraggable();
                         break;
                     case "position":
                         this._position(r);
                         break;
                     case "resizable":
                         s = o.is(":data(resizable)"), s && !r && o.resizable("destroy"), s && typeof r == "string" && o.resizable("option", "handles", r), !s && r !== !1 && this._makeResizable(r);
                         break;
                     case "title":
                         e(".ui-dialog-title", this.uiDialogTitlebar).html("" + (r || "&#160;"))
                 }
                 this._super(t, r)
             },
             _size: function() {
                 var t, n, r, i = this.options,
                     s = this.uiDialog.is(":visible");
                 this.element.show().css({
                     width: "auto",
                     minHeight: 0,
                     height: 0
                 }), i.minWidth > i.width && (i.width = i.minWidth), t = this.uiDialog.css({
                     height: "auto",
                     width: i.width
                 }).outerHeight(), n = Math.max(0, i.minHeight - t), i.height === "auto" ? e.support.minHeight ? this.element.css({
                     minHeight: n,
                     height: "auto"
                 }) : (this.uiDialog.show(), r = this.element.css("height", "auto").height(), s || this.uiDialog.hide(), this.element.height(Math.max(r, n))) : this.element.height(Math.max(i.height - t, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
             }
         }), e.extend(e.ui.dialog, {
             uuid: 0,
             maxZ: 0,
             getTitleId: function(e) {
                 var t = e.attr("id");
                 return t || (this.uuid += 1, t = this.uuid), "ui-dialog-title-" + t
             },
             overlay: function(t) {
                 this.$el = e.ui.dialog.overlay.create(t)
             }
         }), e.extend(e.ui.dialog.overlay, {
             instances: [],
             oldInstances: [],
             maxZ: 0,
             events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(e) {
                 return e + ".dialog-overlay"
             }).join(" "),
             create: function(t) {
                 this.instances.length === 0 && (setTimeout(function() {
                     e.ui.dialog.overlay.instances.length && e(document).bind(e.ui.dialog.overlay.events, function(t) {
                         if (e(t.target).zIndex() < e.ui.dialog.overlay.maxZ) return !1
                     })
                 }, 1), e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize));
                 var n = this.oldInstances.pop() || e("<div>").addClass("ui-widget-overlay");
                 return e(document).bind("keydown.dialog-overlay", function(r) {
                     var i = e.ui.dialog.overlay.instances;
                     i.length !== 0 && i[i.length - 1] === n && t.options.closeOnEscape && !r.isDefaultPrevented() && r.keyCode && r.keyCode === e.ui.keyCode.ESCAPE && (t.close(r), r.preventDefault())
                 }), n.appendTo(document.body).css({
                     width: this.width(),
                     height: this.height()
                 }), e.fn.bgiframe && n.bgiframe(), this.instances.push(n), n
             },
             destroy: function(t) {
                 var n = e.inArray(t, this.instances),
                     r = 0;
                 n !== -1 && this.oldInstances.push(this.instances.splice(n, 1)[0]), this.instances.length === 0 && e([document, window]).unbind(".dialog-overlay"), t.height(0).width(0).remove(), e.each(this.instances, function() {
                     r = Math.max(r, this.css("z-index"))
                 }), this.maxZ = r
             },
             height: function() {
                 var t, n;
                 return e.ui.ie ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), n = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), t < n ? e(window).height() + "px" : t + "px") : e(document).height() + "px"
             },
             width: function() {
                 var t, n;
                 return e.ui.ie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), n = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), t < n ? e(window).width() + "px" : t + "px") : e(document).width() + "px"
             },
             resize: function() {
                 var t = e([]);
                 e.each(e.ui.dialog.overlay.instances, function() {
                     t = t.add(this)
                 }), t.css({
                     width: 0,
                     height: 0
                 }).css({
                     width: e.ui.dialog.overlay.width(),
                     height: e.ui.dialog.overlay.height()
                 })
             }
         }), e.extend(e.ui.dialog.overlay.prototype, {
             destroy: function() {
                 e.ui.dialog.overlay.destroy(this.$el)
             }
         })
     }(jQuery),
     function(e, t) {
         var n = /up|down|vertical/,
             r = /up|left|vertical|horizontal/;
         e.effects.effect.blind = function(t, i) {
             var s = e(this),
                 o = ["position", "top", "bottom", "left", "right", "height", "width"],
                 u = e.effects.setMode(s, t.mode || "hide"),
                 a = t.direction || "up",
                 f = n.test(a),
                 l = f ? "height" : "width",
                 c = f ? "top" : "left",
                 h = r.test(a),
                 p = {},
                 d = u === "show",
                 v, m, g;
             s.parent().is(".ui-effects-wrapper") ? e.effects.save(s.parent(), o) : e.effects.save(s, o), s.show(), v = e.effects.createWrapper(s).css({
                 overflow: "hidden"
             }), m = v[l](), g = parseFloat(v.css(c)) || 0, p[l] = d ? m : 0, h || (s.css(f ? "bottom" : "right", 0).css(f ? "top" : "left", "auto").css({
                 position: "absolute"
             }), p[c] = d ? g : m + g), d && (v.css(l, 0), h || v.css(c, g + m)), v.animate(p, {
                 duration: t.duration,
                 easing: t.easing,
                 queue: !1,
                 complete: function() {
                     u === "hide" && s.hide(), e.effects.restore(s, o), e.effects.removeWrapper(s), i()
                 }
             })
         }
     }(jQuery),
     function(e, t) {
         e.effects.effect.bounce = function(t, n) {
             var r = e(this),
                 i = ["position", "top", "bottom", "left", "right", "height", "width"],
                 s = e.effects.setMode(r, t.mode || "effect"),
                 o = s === "hide",
                 u = s === "show",
                 a = t.direction || "up",
                 f = t.distance,
                 l = t.times || 5,
                 c = l * 2 + (u || o ? 1 : 0),
                 h = t.duration / c,
                 p = t.easing,
                 d = a === "up" || a === "down" ? "top" : "left",
                 v = a === "up" || a === "left",
                 m, g, y, b = r.queue(),
                 w = b.length;
             (u || o) && i.push("opacity"), e.effects.save(r, i), r.show(), e.effects.createWrapper(r), f || (f = r[d === "top" ? "outerHeight" : "outerWidth"]() / 3), u && (y = {
                 opacity: 1
             }, y[d] = 0, r.css("opacity", 0).css(d, v ? -f * 2 : f * 2).animate(y, h, p)), o && (f /= Math.pow(2, l - 1)), y = {}, y[d] = 0;
             for (m = 0; m < l; m++) g = {}, g[d] = (v ? "-=" : "+=") + f, r.animate(g, h, p).animate(y, h, p), f = o ? f * 2 : f / 2;
             o && (g = {
                 opacity: 0
             }, g[d] = (v ? "-=" : "+=") + f, r.animate(g, h, p)), r.queue(function() {
                 o && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
             }), w > 1 && b.splice.apply(b, [1, 0].concat(b.splice(w, c + 1))), r.dequeue()
         }
     }(jQuery),
     function(e, t) {
         e.effects.effect.clip = function(t, n) {
             var r = e(this),
                 i = ["position", "top", "bottom", "left", "right", "height", "width"],
                 s = e.effects.setMode(r, t.mode || "hide"),
                 o = s === "show",
                 u = t.direction || "vertical",
                 a = u === "vertical",
                 f = a ? "height" : "width",
                 l = a ? "top" : "left",
                 c = {},
                 h, p, d;
             e.effects.save(r, i), r.show(), h = e.effects.createWrapper(r).css({
                 overflow: "hidden"
             }), p = r[0].tagName === "IMG" ? h : r, d = p[f](), o && (p.css(f, 0), p.css(l, d / 2)), c[f] = o ? d : 0, c[l] = o ? 0 : d / 2, p.animate(c, {
                 queue: !1,
                 duration: t.duration,
                 easing: t.easing,
                 complete: function() {
                     o || r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
                 }
             })
         }
     }(jQuery),
     function(e, t) {
         e.effects.effect.drop = function(t, n) {
             var r = e(this),
                 i = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                 s = e.effects.setMode(r, t.mode || "hide"),
                 o = s === "show",
                 u = t.direction || "left",
                 a = u === "up" || u === "down" ? "top" : "left",
                 f = u === "up" || u === "left" ? "pos" : "neg",
                 l = {
                     opacity: o ? 1 : 0
                 },
                 c;
             e.effects.save(r, i), r.show(), e.effects.createWrapper(r), c = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0) / 2, o && r.css("opacity", 0).css(a, f === "pos" ? -c : c), l[a] = (o ? f === "pos" ? "+=" : "-=" : f === "pos" ? "-=" : "+=") + c, r.animate(l, {
                 queue: !1,
                 duration: t.duration,
                 easing: t.easing,
                 complete: function() {
                     s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
                 }
             })
         }
     }(jQuery),
     function(e, t) {
         e.effects.effect.explode = function(t, n) {
             function y() {
                 c.push(this), c.length === r * i && b()
             }

             function b() {
                 s.css({
                     visibility: "visible"
                 }), e(c).remove(), u || s.hide(), n()
             }
             var r = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
                 i = r,
                 s = e(this),
                 o = e.effects.setMode(s, t.mode || "hide"),
                 u = o === "show",
                 a = s.show().css("visibility", "hidden").offset(),
                 f = Math.ceil(s.outerWidth() / i),
                 l = Math.ceil(s.outerHeight() / r),
                 c = [],
                 h, p, d, v, m, g;
             for (h = 0; h < r; h++) {
                 v = a.top + h * l, g = h - (r - 1) / 2;
                 for (p = 0; p < i; p++) d = a.left + p * f, m = p - (i - 1) / 2, s.clone().appendTo("body").wrap("<div></div>").css({
                     position: "absolute",
                     visibility: "visible",
                     left: -p * f,
                     top: -h * l
                 }).parent().addClass("ui-effects-explode").css({
                     position: "absolute",
                     overflow: "hidden",
                     width: f,
                     height: l,
                     left: d + (u ? m * f : 0),
                     top: v + (u ? g * l : 0),
                     opacity: u ? 0 : 1
                 }).animate({
                     left: d + (u ? 0 : m * f),
                     top: v + (u ? 0 : g * l),
                     opacity: u ? 1 : 0
                 }, t.duration || 500, t.easing, y)
             }
         }
     }(jQuery),
     function(e, t) {
         e.effects.effect.fade = function(t, n) {
             var r = e(this),
                 i = e.effects.setMode(r, t.mode || "toggle");
             r.animate({
                 opacity: i
             }, {
                 queue: !1,
                 duration: t.duration,
                 easing: t.easing,
                 complete: n
             })
         }
     }(jQuery),
     function(e, t) {
         e.effects.effect.fold = function(t, n) {
             var r = e(this),
                 i = ["position", "top", "bottom", "left", "right", "height", "width"],
                 s = e.effects.setMode(r, t.mode || "hide"),
                 o = s === "show",
                 u = s === "hide",
                 a = t.size || 15,
                 f = /([0-9]+)%/.exec(a),
                 l = !!t.horizFirst,
                 c = o !== l,
                 h = c ? ["width", "height"] : ["height", "width"],
                 p = t.duration / 2,
                 d, v, m = {},
                 g = {};
             e.effects.save(r, i), r.show(), d = e.effects.createWrapper(r).css({
                 overflow: "hidden"
             }), v = c ? [d.width(), d.height()] : [d.height(), d.width()], f && (a = parseInt(f[1], 10) / 100 * v[u ? 0 : 1]), o && d.css(l ? {
                 height: 0,
                 width: a
             } : {
                 height: a,
                 width: 0
             }), m[h[0]] = o ? v[0] : a, g[h[1]] = o ? v[1] : 0, d.animate(m, p, t.easing).animate(g, p, t.easing, function() {
                 u && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
             })
         }
     }(jQuery),
     function(e, t) {
         e.effects.effect.highlight = function(t, n) {
             var r = e(this),
                 i = ["backgroundImage", "backgroundColor", "opacity"],
                 s = e.effects.setMode(r, t.mode || "show"),
                 o = {
                     backgroundColor: r.css("backgroundColor")
                 };
             s === "hide" && (o.opacity = 0), e.effects.save(r, i), r.show().css({
                 backgroundImage: "none",
                 backgroundColor: t.color || "#ffff99"
             }).animate(o, {
                 queue: !1,
                 duration: t.duration,
                 easing: t.easing,
                 complete: function() {
                     s === "hide" && r.hide(), e.effects.restore(r, i), n()
                 }
             })
         }
     }(jQuery),
     function(e, t) {
         e.effects.effect.pulsate = function(t, n) {
             var r = e(this),
                 i = e.effects.setMode(r, t.mode || "show"),
                 s = i === "show",
                 o = i === "hide",
                 u = s || i === "hide",
                 a = (t.times || 5) * 2 + (u ? 1 : 0),
                 f = t.duration / a,
                 l = 0,
                 c = r.queue(),
                 h = c.length,
                 p;
             if (s || !r.is(":visible")) r.css("opacity", 0).show(), l = 1;
             for (p = 1; p < a; p++) r.animate({
                 opacity: l
             }, f, t.easing), l = 1 - l;
             r.animate({
                 opacity: l
             }, f, t.easing), r.queue(function() {
                 o && r.hide(), n()
             }), h > 1 && c.splice.apply(c, [1, 0].concat(c.splice(h, a + 1))), r.dequeue()
         }
     }(jQuery),
     function(e, t) {
         e.effects.effect.puff = function(t, n) {
             var r = e(this),
                 i = e.effects.setMode(r, t.mode || "hide"),
                 s = i === "hide",
                 o = parseInt(t.percent, 10) || 150,
                 u = o / 100,
                 a = {
                     height: r.height(),
                     width: r.width(),
                     outerHeight: r.outerHeight(),
                     outerWidth: r.outerWidth()
                 };
             e.extend(t, {
                 effect: "scale",
                 queue: !1,
                 fade: !0,
                 mode: i,
                 complete: n,
                 percent: s ? o : 100,
                 from: s ? a : {
                     height: a.height * u,
                     width: a.width * u,
                     outerHeight: a.outerHeight * u,
                     outerWidth: a.outerWidth * u
                 }
             }), r.effect(t)
         }, e.effects.effect.scale = function(t, n) {
             var r = e(this),
                 i = e.extend(!0, {}, t),
                 s = e.effects.setMode(r, t.mode || "effect"),
                 o = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : s === "hide" ? 0 : 100),
                 u = t.direction || "both",
                 a = t.origin,
                 f = {
                     height: r.height(),
                     width: r.width(),
                     outerHeight: r.outerHeight(),
                     outerWidth: r.outerWidth()
                 },
                 l = {
                     y: u !== "horizontal" ? o / 100 : 1,
                     x: u !== "vertical" ? o / 100 : 1
                 };
             i.effect = "size", i.queue = !1, i.complete = n, s !== "effect" && (i.origin = a || ["middle", "center"], i.restore = !0), i.from = t.from || (s === "show" ? {
                 height: 0,
                 width: 0,
                 outerHeight: 0,
                 outerWidth: 0
             } : f), i.to = {
                 height: f.height * l.y,
                 width: f.width * l.x,
                 outerHeight: f.outerHeight * l.y,
                 outerWidth: f.outerWidth * l.x
             }, i.fade && (s === "show" && (i.from.opacity = 0, i.to.opacity = 1), s === "hide" && (i.from.opacity = 1, i.to.opacity = 0)), r.effect(i)
         }, e.effects.effect.size = function(t, n) {
             var r, i, s, o = e(this),
                 u = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                 a = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                 f = ["width", "height", "overflow"],
                 l = ["fontSize"],
                 c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                 h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                 p = e.effects.setMode(o, t.mode || "effect"),
                 d = t.restore || p !== "effect",
                 v = t.scale || "both",
                 m = t.origin || ["middle", "center"],
                 g = o.css("position"),
                 y = d ? u : a,
                 b = {
                     height: 0,
                     width: 0,
                     outerHeight: 0,
                     outerWidth: 0
                 };
             p === "show" && o.show(), r = {
                 height: o.height(),
                 width: o.width(),
                 outerHeight: o.outerHeight(),
                 outerWidth: o.outerWidth()
             }, t.mode === "toggle" && p === "show" ? (o.from = t.to || b, o.to = t.from || r) : (o.from = t.from || (p === "show" ? b : r), o.to = t.to || (p === "hide" ? b : r)), s = {
                 from: {
                     y: o.from.height / r.height,
                     x: o.from.width / r.width
                 },
                 to: {
                     y: o.to.height / r.height,
                     x: o.to.width / r.width
                 }
             };
             if (v === "box" || v === "both") s.from.y !== s.to.y && (y = y.concat(c), o.from = e.effects.setTransition(o, c, s.from.y, o.from), o.to = e.effects.setTransition(o, c, s.to.y, o.to)), s.from.x !== s.to.x && (y = y.concat(h), o.from = e.effects.setTransition(o, h, s.from.x, o.from), o.to = e.effects.setTransition(o, h, s.to.x, o.to));
             (v === "content" || v === "both") && s.from.y !== s.to.y && (y = y.concat(l).concat(f), o.from = e.effects.setTransition(o, l, s.from.y, o.from), o.to = e.effects.setTransition(o, l, s.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (i = e.effects.getBaseline(m, r), o.from.top = (r.outerHeight - o.outerHeight()) * i.y, o.from.left = (r.outerWidth - o.outerWidth()) * i.x, o.to.top = (r.outerHeight - o.to.outerHeight) * i.y, o.to.left = (r.outerWidth - o.to.outerWidth) * i.x), o.css(o.from);
             if (v === "content" || v === "both") c = c.concat(["marginTop", "marginBottom"]).concat(l), h = h.concat(["marginLeft", "marginRight"]), f = u.concat(c).concat(h), o.find("*[width]").each(function() {
                 var n = e(this),
                     r = {
                         height: n.height(),
                         width: n.width(),
                         outerHeight: n.outerHeight(),
                         outerWidth: n.outerWidth()
                     };
                 d && e.effects.save(n, f), n.from = {
                     height: r.height * s.from.y,
                     width: r.width * s.from.x,
                     outerHeight: r.outerHeight * s.from.y,
                     outerWidth: r.outerWidth * s.from.x
                 }, n.to = {
                     height: r.height * s.to.y,
                     width: r.width * s.to.x,
                     outerHeight: r.height * s.to.y,
                     outerWidth: r.width * s.to.x
                 }, s.from.y !== s.to.y && (n.from = e.effects.setTransition(n, c, s.from.y, n.from), n.to = e.effects.setTransition(n, c, s.to.y, n.to)), s.from.x !== s.to.x && (n.from = e.effects.setTransition(n, h, s.from.x, n.from), n.to = e.effects.setTransition(n, h, s.to.x, n.to)), n.css(n.from), n.animate(n.to, t.duration, t.easing, function() {
                     d && e.effects.restore(n, f)
                 })
             });
             o.animate(o.to, {
                 queue: !1,
                 duration: t.duration,
                 easing: t.easing,
                 complete: function() {
                     o.to.opacity === 0 && o.css("opacity", o.from.opacity), p === "hide" && o.hide(), e.effects.restore(o, y), d || (g === "static" ? o.css({
                         position: "relative",
                         top: o.to.top,
                         left: o.to.left
                     }) : e.each(["top", "left"], function(e, t) {
                         o.css(t, function(t, n) {
                             var r = parseInt(n, 10),
                                 i = e ? o.to.left : o.to.top;
                             return n === "auto" ? i + "px" : r + i + "px"
                         })
                     })), e.effects.removeWrapper(o), n()
                 }
             })
         }
     }(jQuery),
     function(e, t) {
         e.effects.effect.shake = function(t, n) {
             var r = e(this),
                 i = ["position", "top", "bottom", "left", "right", "height", "width"],
                 s = e.effects.setMode(r, t.mode || "effect"),
                 o = t.direction || "left",
                 u = t.distance || 20,
                 a = t.times || 3,
                 f = a * 2 + 1,
                 l = Math.round(t.duration / f),
                 c = o === "up" || o === "down" ? "top" : "left",
                 h = o === "up" || o === "left",
                 p = {},
                 d = {},
                 v = {},
                 m, g = r.queue(),
                 y = g.length;
             e.effects.save(r, i), r.show(), e.effects.createWrapper(r), p[c] = (h ? "-=" : "+=") + u, d[c] = (h ? "+=" : "-=") + u * 2, v[c] = (h ? "-=" : "+=") + u * 2, r.animate(p, l, t.easing);
             for (m = 1; m < a; m++) r.animate(d, l, t.easing).animate(v, l, t.easing);
             r.animate(d, l, t.easing).animate(p, l / 2, t.easing).queue(function() {
                 s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
             }), y > 1 && g.splice.apply(g, [1, 0].concat(g.splice(y, f + 1))), r.dequeue()
         }
     }(jQuery),
     function(e, t) {
         e.effects.effect.slide = function(t, n) {
             var r = e(this),
                 i = ["position", "top", "bottom", "left", "right", "width", "height"],
                 s = e.effects.setMode(r, t.mode || "show"),
                 o = s === "show",
                 u = t.direction || "left",
                 a = u === "up" || u === "down" ? "top" : "left",
                 f = u === "up" || u === "left",
                 l, c = {};
             e.effects.save(r, i), r.show(), l = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(r).css({
                 overflow: "hidden"
             }), o && r.css(a, f ? isNaN(l) ? "-" + l : -l : l), c[a] = (o ? f ? "+=" : "-=" : f ? "-=" : "+=") + l, r.animate(c, {
                 queue: !1,
                 duration: t.duration,
                 easing: t.easing,
                 complete: function() {
                     s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
                 }
             })
         }
     }(jQuery),
     function(e, t) {
         e.effects.effect.transfer = function(t, n) {
             var r = e(this),
                 i = e(t.to),
                 s = i.css("position") === "fixed",
                 o = e("body"),
                 u = s ? o.scrollTop() : 0,
                 a = s ? o.scrollLeft() : 0,
                 f = i.offset(),
                 l = {
                     top: f.top - u,
                     left: f.left - a,
                     height: i.innerHeight(),
                     width: i.innerWidth()
                 },
                 c = r.offset(),
                 h = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.className).css({
                     top: c.top - u,
                     left: c.left - a,
                     height: r.innerHeight(),
                     width: r.innerWidth(),
                     position: s ? "fixed" : "absolute"
                 }).animate(l, t.duration, t.easing, function() {
                     h.remove(), n()
                 })
         }
     }(jQuery),
     function(e, t) {
         var n = !1;
         e.widget("ui.menu", {
             version: "1.9.2",
             defaultElement: "<ul>",
             delay: 300,
             options: {
                 icons: {
                     submenu: "ui-icon-carat-1-e"
                 },
                 menus: "ul",
                 position: {
                     my: "left top",
                     at: "right top"
                 },
                 role: "menu",
                 blur: null,
                 focus: null,
                 select: null
             },
             _create: function() {
                 this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                     role: this.options.role,
                     tabIndex: 0
                 }).bind("click" + this.eventNamespace, e.proxy(function(e) {
                     this.options.disabled && e.preventDefault()
                 }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                     "mousedown .ui-menu-item > a": function(e) {
                         e.preventDefault()
                     },
                     "click .ui-state-disabled > a": function(e) {
                         e.preventDefault()
                     },
                     "click .ui-menu-item:has(a)": function(t) {
                         var r = e(t.target).closest(".ui-menu-item");
                         !n && r.not(".ui-state-disabled").length && (n = !0, this.select(t), r.has(".ui-menu").length ? this.expand(t) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                     },
                     "mouseenter .ui-menu-item": function(t) {
                         var n = e(t.currentTarget);
                         n.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, n)
                     },
                     mouseleave: "collapseAll",
                     "mouseleave .ui-menu": "collapseAll",
                     focus: function(e, t) {
                         var n = this.active || this.element.children(".ui-menu-item").eq(0);
                         t || this.focus(e, n)
                     },
                     blur: function(t) {
                         this._delay(function() {
                             e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                         })
                     },
                     keydown: "_keydown"
                 }), this.refresh(), this._on(this.document, {
                     click: function(t) {
                         e(t.target).closest(".ui-menu").length || this.collapseAll(t), n = !1
                     }
                 })
             },
             _destroy: function() {
                 this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                     var t = e(this);
                     t.data("ui-menu-submenu-carat") && t.remove()
                 }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
             },
             _keydown: function(t) {
                 function a(e) {
                     return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                 }
                 var n, r, i, s, o, u = !0;
                 switch (t.keyCode) {
                     case e.ui.keyCode.PAGE_UP:
                         this.previousPage(t);
                         break;
                     case e.ui.keyCode.PAGE_DOWN:
                         this.nextPage(t);
                         break;
                     case e.ui.keyCode.HOME:
                         this._move("first", "first", t);
                         break;
                     case e.ui.keyCode.END:
                         this._move("last", "last", t);
                         break;
                     case e.ui.keyCode.UP:
                         this.previous(t);
                         break;
                     case e.ui.keyCode.DOWN:
                         this.next(t);
                         break;
                     case e.ui.keyCode.LEFT:
                         this.collapse(t);
                         break;
                     case e.ui.keyCode.RIGHT:
                         this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                         break;
                     case e.ui.keyCode.ENTER:
                     case e.ui.keyCode.SPACE:
                         this._activate(t);
                         break;
                     case e.ui.keyCode.ESCAPE:
                         this.collapse(t);
                         break;
                     default:
                         u = !1, r = this.previousFilter || "", i = String.fromCharCode(t.keyCode), s = !1, clearTimeout(this.filterTimer), i === r ? s = !0 : i = r + i, o = new RegExp("^" + a(i), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                             return o.test(e(this).children("a").text())
                         }), n = s && n.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : n, n.length || (i = String.fromCharCode(t.keyCode), o = new RegExp("^" + a(i), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                             return o.test(e(this).children("a").text())
                         })), n.length ? (this.focus(t, n), n.length > 1 ? (this.previousFilter = i, this.filterTimer = this._delay(function() {
                             delete this.previousFilter
                         }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                 }
                 u && t.preventDefault()
             },
             _activate: function(e) {
                 this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
             },
             refresh: function() {
                 var t, n = this.options.icons.submenu,
                     r = this.element.find(this.options.menus);
                 r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                     role: this.options.role,
                     "aria-hidden": "true",
                     "aria-expanded": "false"
                 }).each(function() {
                     var t = e(this),
                         r = t.prev("a"),
                         i = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                     r.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", r.attr("id"))
                 }), t = r.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                     tabIndex: -1,
                     role: this._itemRole()
                 }), t.children(":not(.ui-menu-item)").each(function() {
                     var t = e(this);
                     /[^\-—–\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
                 }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
             },
             _itemRole: function() {
                 return {
                     menu: "menuitem",
                     listbox: "option"
                 }[this.options.role]
             },
             focus: function(e, t) {
                 var n, r;
                 this.blur(e, e && e.type === "focus"), this._scrollIntoView(t), this.active = t.first(), r = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", r.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && e.type === "keydown" ? this._close() : this.timer = this._delay(function() {
                     this._close()
                 }, this.delay), n = t.children(".ui-menu"), n.length && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, {
                     item: t
                 })
             },
             _scrollIntoView: function(t) {
                 var n, r, i, s, o, u;
                 this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - n - r, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), u = t.height(), i < 0 ? this.activeMenu.scrollTop(s + i) : i + u > o && this.activeMenu.scrollTop(s + i - o + u))
             },
             blur: function(e, t) {
                 t || clearTimeout(this.timer);
                 if (!this.active) return;
                 this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
                     item: this.active
                 })
             },
             _startOpening: function(e) {
                 clearTimeout(this.timer);
                 if (e.attr("aria-hidden") !== "true") return;
                 this.timer = this._delay(function() {
                     this._close(), this._open(e)
                 }, this.delay)
             },
             _open: function(t) {
                 var n = e.extend({ of: this.active
                 }, this.options.position);
                 clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
             },
             collapseAll: function(t, n) {
                 clearTimeout(this.timer), this.timer = this._delay(function() {
                     var r = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                     r.length || (r = this.element), this._close(r), this.blur(t), this.activeMenu = r
                 }, this.delay)
             },
             _close: function(e) {
                 e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
             },
             collapse: function(e) {
                 var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                 t && t.length && (this._close(), this.focus(e, t))
             },
             expand: function(e) {
                 var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                 t && t.length && (this._open(t.parent()), this._delay(function() {
                     this.focus(e, t)
                 }))
             },
             next: function(e) {
                 this._move("next", "first", e)
             },
             previous: function(e) {
                 this._move("prev", "last", e)
             },
             isFirstItem: function() {
                 return this.active && !this.active.prevAll(".ui-menu-item").length
             },
             isLastItem: function() {
                 return this.active && !this.active.nextAll(".ui-menu-item").length
             },
             _move: function(e, t, n) {
                 var r;
                 this.active && (e === "first" || e === "last" ? r = this.active[e === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : r = this.active[e + "All"](".ui-menu-item").eq(0));
                 if (!r || !r.length || !this.active) r = this.activeMenu.children(".ui-menu-item")[t]();
                 this.focus(n, r)
             },
             nextPage: function(t) {
                 var n, r, i;
                 if (!this.active) {
                     this.next(t);
                     return
                 }
                 if (this.isLastItem()) return;
                 this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                     return n = e(this), n.offset().top - r - i < 0
                 }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())
             },
             previousPage: function(t) {
                 var n, r, i;
                 if (!this.active) {
                     this.next(t);
                     return
                 }
                 if (this.isFirstItem()) return;
                 this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                     return n = e(this), n.offset().top - r + i > 0
                 }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())
             },
             _hasScroll: function() {
                 return this.element.outerHeight() < this.element.prop("scrollHeight")
             },
             select: function(t) {
                 this.active = this.active || e(t.target).closest(".ui-menu-item");
                 var n = {
                     item: this.active
                 };
                 this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, n)
             }
         })
     }(jQuery),
     function(e, t) {
         function h(e, t, n) {
             return [parseInt(e[0], 10) * (l.test(e[0]) ? t / 100 : 1), parseInt(e[1], 10) * (l.test(e[1]) ? n / 100 : 1)]
         }

         function p(t, n) {
             return parseInt(e.css(t, n), 10) || 0
         }
         e.ui = e.ui || {};
         var n, r = Math.max,
             i = Math.abs,
             s = Math.round,
             o = /left|center|right/,
             u = /top|center|bottom/,
             a = /[\+\-]\d+%?/,
             f = /^\w+/,
             l = /%$/,
             c = e.fn.position;
         e.position = {
                 scrollbarWidth: function() {
                     if (n !== t) return n;
                     var r, i, s = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                         o = s.children()[0];
                     return e("body").append(s), r = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, r === i && (i = s[0].clientWidth), s.remove(), n = r - i
                 },
                 getScrollInfo: function(t) {
                     var n = t.isWindow ? "" : t.element.css("overflow-x"),
                         r = t.isWindow ? "" : t.element.css("overflow-y"),
                         i = n === "scroll" || n === "auto" && t.width < t.element[0].scrollWidth,
                         s = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
                     return {
                         width: i ? e.position.scrollbarWidth() : 0,
                         height: s ? e.position.scrollbarWidth() : 0
                     }
                 },
                 getWithinInfo: function(t) {
                     var n = e(t || window),
                         r = e.isWindow(n[0]);
                     return {
                         element: n,
                         isWindow: r,
                         offset: n.offset() || {
                             left: 0,
                             top: 0
                         },
                         scrollLeft: n.scrollLeft(),
                         scrollTop: n.scrollTop(),
                         width: r ? n.width() : n.outerWidth(),
                         height: r ? n.height() : n.outerHeight()
                     }
                 }
             }, e.fn.position = function(t) {
                 if (!t || !t.of) return c.apply(this, arguments);
                 t = e.extend({}, t);
                 var n, l, d, v, m, g = e(t.of),
                     y = e.position.getWithinInfo(t.within),
                     b = e.position.getScrollInfo(y),
                     w = g[0],
                     E = (t.collision || "flip").split(" "),
                     S = {};
                 return w.nodeType === 9 ? (l = g.width(), d = g.height(), v = {
                     top: 0,
                     left: 0
                 }) : e.isWindow(w) ? (l = g.width(), d = g.height(), v = {
                     top: g.scrollTop(),
                     left: g.scrollLeft()
                 }) : w.preventDefault ? (t.at = "left top", l = d = 0, v = {
                     top: w.pageY,
                     left: w.pageX
                 }) : (l = g.outerWidth(), d = g.outerHeight(), v = g.offset()), m = e.extend({}, v), e.each(["my", "at"], function() {
                     var e = (t[this] || "").split(" "),
                         n, r;
                     e.length === 1 && (e = o.test(e[0]) ? e.concat(["center"]) : u.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = o.test(e[0]) ? e[0] : "center", e[1] = u.test(e[1]) ? e[1] : "center", n = a.exec(e[0]), r = a.exec(e[1]), S[this] = [n ? n[0] : 0, r ? r[0] : 0], t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]]
                 }), E.length === 1 && (E[1] = E[0]), t.at[0] === "right" ? m.left += l : t.at[0] === "center" && (m.left += l / 2), t.at[1] === "bottom" ? m.top += d : t.at[1] === "center" && (m.top += d / 2), n = h(S.at, l, d), m.left += n[0], m.top += n[1], this.each(function() {
                     var o, u, a = e(this),
                         f = a.outerWidth(),
                         c = a.outerHeight(),
                         w = p(this, "marginLeft"),
                         x = p(this, "marginTop"),
                         T = f + w + p(this, "marginRight") + b.width,
                         N = c + x + p(this, "marginBottom") + b.height,
                         C = e.extend({}, m),
                         k = h(S.my, a.outerWidth(), a.outerHeight());
                     t.my[0] === "right" ? C.left -= f : t.my[0] === "center" && (C.left -= f / 2), t.my[1] === "bottom" ? C.top -= c : t.my[1] === "center" && (C.top -= c / 2), C.left += k[0], C.top += k[1], e.support.offsetFractions || (C.left = s(C.left), C.top = s(C.top)), o = {
                         marginLeft: w,
                         marginTop: x
                     }, e.each(["left", "top"], function(r, i) {
                         e.ui.position[E[r]] && e.ui.position[E[r]][i](C, {
                             targetWidth: l,
                             targetHeight: d,
                             elemWidth: f,
                             elemHeight: c,
                             collisionPosition: o,
                             collisionWidth: T,
                             collisionHeight: N,
                             offset: [n[0] + k[0], n[1] + k[1]],
                             my: t.my,
                             at: t.at,
                             within: y,
                             elem: a
                         })
                     }), e.fn.bgiframe && a.bgiframe(), t.using && (u = function(e) {
                         var n = v.left - C.left,
                             s = n + l - f,
                             o = v.top - C.top,
                             u = o + d - c,
                             h = {
                                 target: {
                                     element: g,
                                     left: v.left,
                                     top: v.top,
                                     width: l,
                                     height: d
                                 },
                                 element: {
                                     element: a,
                                     left: C.left,
                                     top: C.top,
                                     width: f,
                                     height: c
                                 },
                                 horizontal: s < 0 ? "left" : n > 0 ? "right" : "center",
                                 vertical: u < 0 ? "top" : o > 0 ? "bottom" : "middle"
                             };
                         l < f && i(n + s) < l && (h.horizontal = "center"), d < c && i(o + u) < d && (h.vertical = "middle"), r(i(n), i(s)) > r(i(o), i(u)) ? h.important = "horizontal" : h.important = "vertical", t.using.call(this, e, h)
                     }), a.offset(e.extend(C, {
                         using: u
                     }))
                 })
             }, e.ui.position = {
                 fit: {
                     left: function(e, t) {
                         var n = t.within,
                             i = n.isWindow ? n.scrollLeft : n.offset.left,
                             s = n.width,
                             o = e.left - t.collisionPosition.marginLeft,
                             u = i - o,
                             a = o + t.collisionWidth - s - i,
                             f;
                         t.collisionWidth > s ? u > 0 && a <= 0 ? (f = e.left + u + t.collisionWidth - s - i, e.left += u - f) : a > 0 && u <= 0 ? e.left = i : u > a ? e.left = i + s - t.collisionWidth : e.left = i : u > 0 ? e.left += u : a > 0 ? e.left -= a : e.left = r(e.left - o, e.left)
                     },
                     top: function(e, t) {
                         var n = t.within,
                             i = n.isWindow ? n.scrollTop : n.offset.top,
                             s = t.within.height,
                             o = e.top - t.collisionPosition.marginTop,
                             u = i - o,
                             a = o + t.collisionHeight - s - i,
                             f;
                         t.collisionHeight > s ? u > 0 && a <= 0 ? (f = e.top + u + t.collisionHeight - s - i, e.top += u - f) : a > 0 && u <= 0 ? e.top = i : u > a ? e.top = i + s - t.collisionHeight : e.top = i : u > 0 ? e.top += u : a > 0 ? e.top -= a : e.top = r(e.top - o, e.top)
                     }
                 },
                 flip: {
                     left: function(e, t) {
                         var n = t.within,
                             r = n.offset.left + n.scrollLeft,
                             s = n.width,
                             o = n.isWindow ? n.scrollLeft : n.offset.left,
                             u = e.left - t.collisionPosition.marginLeft,
                             a = u - o,
                             f = u + t.collisionWidth - s - o,
                             l = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
                             c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
                             h = -2 * t.offset[0],
                             p, d;
                         if (a < 0) {
                             p = e.left + l + c + h + t.collisionWidth - s - r;
                             if (p < 0 || p < i(a)) e.left += l + c + h
                         } else if (f > 0) {
                             d = e.left - t.collisionPosition.marginLeft + l + c + h - o;
                             if (d > 0 || i(d) < f) e.left += l + c + h
                         }
                     },
                     top: function(e, t) {
                         var n = t.within,
                             r = n.offset.top + n.scrollTop,
                             s = n.height,
                             o = n.isWindow ? n.scrollTop : n.offset.top,
                             u = e.top - t.collisionPosition.marginTop,
                             a = u - o,
                             f = u + t.collisionHeight - s - o,
                             l = t.my[1] === "top",
                             c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
                             h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
                             p = -2 * t.offset[1],
                             d, v;
                         a < 0 ? (v = e.top + c + h + p + t.collisionHeight - s - r, e.top + c + h + p > a && (v < 0 || v < i(a)) && (e.top += c + h + p)) : f > 0 && (d = e.top - t.collisionPosition.marginTop + c + h + p - o, e.top + c + h + p > f && (d > 0 || i(d) < f) && (e.top += c + h + p))
                     }
                 },
                 flipfit: {
                     left: function() {
                         e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                     },
                     top: function() {
                         e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                     }
                 }
             },
             function() {
                 var t, n, r, i, s, o = document.getElementsByTagName("body")[0],
                     u = document.createElement("div");
                 t = document.createElement(o ? "div" : "body"), r = {
                     visibility: "hidden",
                     width: 0,
                     height: 0,
                     border: 0,
                     margin: 0,
                     background: "none"
                 }, o && e.extend(r, {
                     position: "absolute",
                     left: "-1000px",
                     top: "-1000px"
                 });
                 for (s in r) t.style[s] = r[s];
                 t.appendChild(u), n = o || document.documentElement, n.insertBefore(t, n.firstChild), u.style.cssText = "position: absolute; left: 10.7432222px;", i = e(u).offset().left, e.support.offsetFractions = i > 10 && i < 11, t.innerHTML = "", n.removeChild(t)
             }(), e.uiBackCompat !== !1 && function(e) {
                 var n = e.fn.position;
                 e.fn.position = function(r) {
                     if (!r || !r.offset) return n.call(this, r);
                     var i = r.offset.split(" "),
                         s = r.at.split(" ");
                     return i.length === 1 && (i[1] = i[0]), /^\d/.test(i[0]) && (i[0] = "+" + i[0]), /^\d/.test(i[1]) && (i[1] = "+" + i[1]), s.length === 1 && (/left|center|right/.test(s[0]) ? s[1] = "center" : (s[1] = s[0], s[0] = "center")), n.call(this, e.extend(r, {
                         at: s[0] + i[0] + " " + s[1] + i[1],
                         offset: t
                     }))
                 }
             }(jQuery)
     }(jQuery),
     function(e, t) {
         e.widget("ui.progressbar", {
             version: "1.9.2",
             options: {
                 value: 0,
                 max: 100
             },
             min: 0,
             _create: function() {
                 this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                     role: "progressbar",
                     "aria-valuemin": this.min,
                     "aria-valuemax": this.options.max,
                     "aria-valuenow": this._value()
                 }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
             },
             _destroy: function() {
                 this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
             },
             value: function(e) {
                 return e === t ? this._value() : (this._setOption("value", e), this)
             },
             _setOption: function(e, t) {
                 e === "value" && (this.options.value = t, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), this._super(e, t)
             },
             _value: function() {
                 var e = this.options.value;
                 return typeof e != "number" && (e = 0), Math.min(this.options.max, Math.max(this.min, e))
             },
             _percentage: function() {
                 return 100 * this._value() / this.options.max
             },
             _refreshValue: function() {
                 var e = this.value(),
                     t = this._percentage();
                 this.oldValue !== e && (this.oldValue = e, this._trigger("change")), this.valueDiv.toggle(e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(t.toFixed(0) + "%"), this.element.attr("aria-valuenow", e)
             }
         })
     }(jQuery),
     function(e, t) {
         var n = 5;
         e.widget("ui.slider", e.ui.mouse, {
             version: "1.9.2",
             widgetEventPrefix: "slide",
             options: {
                 animate: !1,
                 distance: 0,
                 max: 100,
                 min: 0,
                 orientation: "horizontal",
                 range: !1,
                 step: 1,
                 value: 0,
                 values: null
             },
             _create: function() {
                 var t, r, i = this.options,
                     s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                     o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                     u = [];
                 this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (i.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), i.range && (i.range === !0 && (i.values || (i.values = [this._valueMin(), this._valueMin()]), i.values.length && i.values.length !== 2 && (i.values = [i.values[0], i.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (i.range === "min" || i.range === "max" ? " ui-slider-range-" + i.range : ""))), r = i.values && i.values.length || 1;
                 for (t = s.length; t < r; t++) u.push(o);
                 this.handles = s.add(e(u.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(e) {
                     e.preventDefault()
                 }).mouseenter(function() {
                     i.disabled || e(this).addClass("ui-state-hover")
                 }).mouseleave(function() {
                     e(this).removeClass("ui-state-hover")
                 }).focus(function() {
                     i.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
                 }).blur(function() {
                     e(this).removeClass("ui-state-focus")
                 }), this.handles.each(function(t) {
                     e(this).data("ui-slider-handle-index", t)
                 }), this._on(this.handles, {
                     keydown: function(t) {
                         var r, i, s, o, u = e(t.target).data("ui-slider-handle-index");
                         switch (t.keyCode) {
                             case e.ui.keyCode.HOME:
                             case e.ui.keyCode.END:
                             case e.ui.keyCode.PAGE_UP:
                             case e.ui.keyCode.PAGE_DOWN:
                             case e.ui.keyCode.UP:
                             case e.ui.keyCode.RIGHT:
                             case e.ui.keyCode.DOWN:
                             case e.ui.keyCode.LEFT:
                                 t.preventDefault();
                                 if (!this._keySliding) {
                                     this._keySliding = !0, e(t.target).addClass("ui-state-active"), r = this._start(t, u);
                                     if (r === !1) return
                                 }
                         }
                         o = this.options.step, this.options.values && this.options.values.length ? i = s = this.values(u) : i = s = this.value();
                         switch (t.keyCode) {
                             case e.ui.keyCode.HOME:
                                 s = this._valueMin();
                                 break;
                             case e.ui.keyCode.END:
                                 s = this._valueMax();
                                 break;
                             case e.ui.keyCode.PAGE_UP:
                                 s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n);
                                 break;
                             case e.ui.keyCode.PAGE_DOWN:
                                 s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n);
                                 break;
                             case e.ui.keyCode.UP:
                             case e.ui.keyCode.RIGHT:
                                 if (i === this._valueMax()) return;
                                 s = this._trimAlignValue(i + o);
                                 break;
                             case e.ui.keyCode.DOWN:
                             case e.ui.keyCode.LEFT:
                                 if (i === this._valueMin()) return;
                                 s = this._trimAlignValue(i - o)
                         }
                         this._slide(t, u, s)
                     },
                     keyup: function(t) {
                         var n = e(t.target).data("ui-slider-handle-index");
                         this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"))
                     }
                 }), this._refreshValue(), this._animateOff = !1
             },
             _destroy: function() {
                 this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
             },
             _mouseCapture: function(t) {
                 var n, r, i, s, o, u, a, f, l = this,
                     c = this.options;
                 return c.disabled ? !1 : (this.elementSize = {
                     width: this.element.outerWidth(),
                     height: this.element.outerHeight()
                 }, this.elementOffset = this.element.offset(), n = {
                     x: t.pageX,
                     y: t.pageY
                 }, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                     var n = Math.abs(r - l.values(t));
                     i > n && (i = n, s = e(this), o = t)
                 }), c.range === !0 && this.values(1) === c.min && (o += 1, s = e(this.handles[o])), u = this._start(t, o), u === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), f = !e(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = f ? {
                     left: 0,
                     top: 0
                 } : {
                     left: t.pageX - a.left - s.width() / 2,
                     top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
                 }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, r), this._animateOff = !0, !0))
             },
             _mouseStart: function() {
                 return !0
             },
             _mouseDrag: function(e) {
                 var t = {
                         x: e.pageX,
                         y: e.pageY
                     },
                     n = this._normValueFromMouse(t);
                 return this._slide(e, this._handleIndex, n), !1
             },
             _mouseStop: function(e) {
                 return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
             },
             _detectOrientation: function() {
                 this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
             },
             _normValueFromMouse: function(e) {
                 var t, n, r, i, s;
                 return this.orientation === "horizontal" ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), r < 0 && (r = 0), this.orientation === "vertical" && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s)
             },
             _start: function(e, t) {
                 var n = {
                     handle: this.handles[t],
                     value: this.value()
                 };
                 return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
             },
             _slide: function(e, t, n) {
                 var r, i, s;
                 this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, {
                     handle: this.handles[t],
                     value: n,
                     values: i
                 }), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n, !0))) : n !== this.value() && (s = this._trigger("slide", e, {
                     handle: this.handles[t],
                     value: n
                 }), s !== !1 && this.value(n))
             },
             _stop: function(e, t) {
                 var n = {
                     handle: this.handles[t],
                     value: this.value()
                 };
                 this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
             },
             _change: function(e, t) {
                 if (!this._keySliding && !this._mouseSliding) {
                     var n = {
                         handle: this.handles[t],
                         value: this.value()
                     };
                     this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("change", e, n)
                 }
             },
             value: function(e) {
                 if (arguments.length) {
                     this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0);
                     return
                 }
                 return this._value()
             },
             values: function(t, n) {
                 var r, i, s;
                 if (arguments.length > 1) {
                     this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t);
                     return
                 }
                 if (!arguments.length) return this._values();
                 if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                 r = this.options.values, i = arguments[0];
                 for (s = 0; s < r.length; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s);
                 this._refreshValue()
             },
             _setOption: function(t, n) {
                 var r, i = 0;
                 e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments);
                 switch (t) {
                     case "disabled":
                         n ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                         break;
                     case "orientation":
                         this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                         break;
                     case "value":
                         this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                         break;
                     case "values":
                         this._animateOff = !0, this._refreshValue();
                         for (r = 0; r < i; r += 1) this._change(null, r);
                         this._animateOff = !1;
                         break;
                     case "min":
                     case "max":
                         this._animateOff = !0, this._refreshValue(), this._animateOff = !1
                 }
             },
             _value: function() {
                 var e = this.options.value;
                 return e = this._trimAlignValue(e), e
             },
             _values: function(e) {
                 var t, n, r;
                 if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t), t;
                 n = this.options.values.slice();
                 for (r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(n[r]);
                 return n
             },
             _trimAlignValue: function(e) {
                 if (e <= this._valueMin()) return this._valueMin();
                 if (e >= this._valueMax()) return this._valueMax();
                 var t = this.options.step > 0 ? this.options.step : 1,
                     n = (e - this._valueMin()) % t,
                     r = e - n;
                 return Math.abs(n) * 2 >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
             },
             _valueMin: function() {
                 return this.options.min
             },
             _valueMax: function() {
                 return this.options.max
             },
             _refreshValue: function() {
                 var t, n, r, i, s, o = this.options.range,
                     u = this.options,
                     a = this,
                     f = this._animateOff ? !1 : u.animate,
                     l = {};
                 this.options.values && this.options.values.length ? this.handles.each(function(r) {
                     n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, l[a.orientation === "horizontal" ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate), a.options.range === !0 && (a.orientation === "horizontal" ? (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({
                         left: n + "%"
                     }, u.animate), r === 1 && a.range[f ? "animate" : "css"]({
                         width: n - t + "%"
                     }, {
                         queue: !1,
                         duration: u.animate
                     })) : (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({
                         bottom: n + "%"
                     }, u.animate), r === 1 && a.range[f ? "animate" : "css"]({
                         height: n - t + "%"
                     }, {
                         queue: !1,
                         duration: u.animate
                     }))), t = n
                 }) : (r = this.value(), i = this._valueMin(), s = this._valueMax(), n = s !== i ? (r - i) / (s - i) * 100 : 0, l[this.orientation === "horizontal" ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate), o === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[f ? "animate" : "css"]({
                     width: n + "%"
                 }, u.animate), o === "max" && this.orientation === "horizontal" && this.range[f ? "animate" : "css"]({
                     width: 100 - n + "%"
                 }, {
                     queue: !1,
                     duration: u.animate
                 }), o === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[f ? "animate" : "css"]({
                     height: n + "%"
                 }, u.animate), o === "max" && this.orientation === "vertical" && this.range[f ? "animate" : "css"]({
                     height: 100 - n + "%"
                 }, {
                     queue: !1,
                     duration: u.animate
                 }))
             }
         })
     }(jQuery),
     function(e) {
         function t(e) {
             return function() {
                 var t = this.element.val();
                 e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
             }
         }
         e.widget("ui.spinner", {
             version: "1.9.2",
             defaultElement: "<input>",
             widgetEventPrefix: "spin",
             options: {
                 culture: null,
                 icons: {
                     down: "ui-icon-triangle-1-s",
                     up: "ui-icon-triangle-1-n"
                 },
                 incremental: !0,
                 max: null,
                 min: null,
                 numberFormat: null,
                 page: 10,
                 step: 1,
                 change: null,
                 spin: null,
                 start: null,
                 stop: null
             },
             _create: function() {
                 this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                     beforeunload: function() {
                         this.element.removeAttr("autocomplete")
                     }
                 })
             },
             _getCreateOptions: function() {
                 var t = {},
                     n = this.element;
                 return e.each(["min", "max", "step"], function(e, r) {
                     var i = n.attr(r);
                     i !== undefined && i.length && (t[r] = i)
                 }), t
             },
             _events: {
                 keydown: function(e) {
                     this._start(e) && this._keydown(e) && e.preventDefault()
                 },
                 keyup: "_stop",
                 focus: function() {
                     this.previous = this.element.val()
                 },
                 blur: function(e) {
                     if (this.cancelBlur) {
                         delete this.cancelBlur;
                         return
                     }
                     this._refresh(), this.previous !== this.element.val() && this._trigger("change", e)
                 },
                 mousewheel: function(e, t) {
                     if (!t) return;
                     if (!this.spinning && !this._start(e)) return !1;
                     this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                         this.spinning && this._stop(e)
                     }, 100), e.preventDefault()
                 },
                 "mousedown .ui-spinner-button": function(t) {
                     function r() {
                         var e = this.element[0] === this.document[0].activeElement;
                         e || (this.element.focus(), this.previous = n, this._delay(function() {
                             this.previous = n
                         }))
                     }
                     var n;
                     n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), r.call(this), this.cancelBlur = !0, this._delay(function() {
                         delete this.cancelBlur, r.call(this)
                     });
                     if (this._start(t) === !1) return;
                     this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                 },
                 "mouseup .ui-spinner-button": "_stop",
                 "mouseenter .ui-spinner-button": function(t) {
                     if (!e(t.currentTarget).hasClass("ui-state-active")) return;
                     if (this._start(t) === !1) return !1;
                     this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                 },
                 "mouseleave .ui-spinner-button": "_stop"
             },
             _draw: function() {
                 var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                 this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(e.height() * .5) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
             },
             _keydown: function(t) {
                 var n = this.options,
                     r = e.ui.keyCode;
                 switch (t.keyCode) {
                     case r.UP:
                         return this._repeat(null, 1, t), !0;
                     case r.DOWN:
                         return this._repeat(null, -1, t), !0;
                     case r.PAGE_UP:
                         return this._repeat(null, n.page, t), !0;
                     case r.PAGE_DOWN:
                         return this._repeat(null, -n.page, t), !0
                 }
                 return !1
             },
             _uiSpinnerHtml: function() {
                 return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
             },
             _buttonHtml: function() {
                 return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
             },
             _start: function(e) {
                 return !this.spinning && this._trigger("start", e) === !1 ? !1 : (this.counter || (this.counter = 1), this.spinning = !0, !0)
             },
             _repeat: function(e, t, n) {
                 e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                     this._repeat(40, t, n)
                 }, e), this._spin(t * this.options.step, n)
             },
             _spin: function(e, t) {
                 var n = this.value() || 0;
                 this.counter || (this.counter = 1), n = this._adjustValue(n + e * this._increment(this.counter));
                 if (!this.spinning || this._trigger("spin", t, {
                         value: n
                     }) !== !1) this._value(n), this.counter++
             },
             _increment: function(t) {
                 var n = this.options.incremental;
                 return n ? e.isFunction(n) ? n(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
             },
             _precision: function() {
                 var e = this._precisionOf(this.options.step);
                 return this.options.min !== null && (e = Math.max(e, this._precisionOf(this.options.min))), e
             },
             _precisionOf: function(e) {
                 var t = e.toString(),
                     n = t.indexOf(".");
                 return n === -1 ? 0 : t.length - n - 1
             },
             _adjustValue: function(e) {
                 var t, n, r = this.options;
                 return t = r.min !== null ? r.min : 0, n = e - t, n = Math.round(n / r.step) * r.step, e = t + n, e = parseFloat(e.toFixed(this._precision())), r.max !== null && e > r.max ? r.max : r.min !== null && e < r.min ? r.min : e
             },
             _stop: function(e) {
                 if (!this.spinning) return;
                 clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e)
             },
             _setOption: function(e, t) {
                 if (e === "culture" || e === "numberFormat") {
                     var n = this._parse(this.element.val());
                     this.options[e] = t, this.element.val(this._format(n));
                     return
                 }(e === "max" || e === "min" || e === "step") && typeof t == "string" && (t = this._parse(t)), this._super(e, t), e === "disabled" && (t ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
             },
             _setOptions: t(function(e) {
                 this._super(e), this._value(this.element.val())
             }),
             _parse: function(e) {
                 return typeof e == "string" && e !== "" && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), e === "" || isNaN(e) ? null : e
             },
             _format: function(e) {
                 return e === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
             },
             _refresh: function() {
                 this.element.attr({
                     "aria-valuemin": this.options.min,
                     "aria-valuemax": this.options.max,
                     "aria-valuenow": this._parse(this.element.val())
                 })
             },
             _value: function(e, t) {
                 var n;
                 e !== "" && (n = this._parse(e), n !== null && (t || (n = this._adjustValue(n)), e = this._format(n))), this.element.val(e), this._refresh()
             },
             _destroy: function() {
                 this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
             },
             stepUp: t(function(e) {
                 this._stepUp(e)
             }),
             _stepUp: function(e) {
                 this._spin((e || 1) * this.options.step)
             },
             stepDown: t(function(e) {
                 this._stepDown(e)
             }),
             _stepDown: function(e) {
                 this._spin((e || 1) * -this.options.step)
             },
             pageUp: t(function(e) {
                 this._stepUp((e || 1) * this.options.page)
             }),
             pageDown: t(function(e) {
                 this._stepDown((e || 1) * this.options.page)
             }),
             value: function(e) {
                 if (!arguments.length) return this._parse(this.element.val());
                 t(this._value).call(this, e)
             },
             widget: function() {
                 return this.uiSpinner
             }
         })
     }(jQuery),
     function(e, t) {
         function i() {
             return ++n
         }

         function s(e) {
             return e.hash.length > 1 && e.href.replace(r, "") === location.href.replace(r, "").replace(/\s/g, "%20")
         }
         var n = 0,
             r = /#.*$/;
         e.widget("ui.tabs", {
             version: "1.9.2",
             delay: 300,
             options: {
                 active: null,
                 collapsible: !1,
                 event: "click",
                 heightStyle: "content",
                 hide: null,
                 show: null,
                 activate: null,
                 beforeActivate: null,
                 beforeLoad: null,
                 load: null
             },
             _create: function() {
                 var t = this,
                     n = this.options,
                     r = n.active,
                     i = location.hash.substring(1);
                 this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(t) {
                     e(this).is(".ui-state-disabled") && t.preventDefault()
                 }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                     e(this).closest("li").is(".ui-state-disabled") && this.blur()
                 }), this._processTabs();
                 if (r === null) {
                     i && this.tabs.each(function(t, n) {
                         if (e(n).attr("aria-controls") === i) return r = t, !1
                     }), r === null && (r = this.tabs.index(this.tabs.filter(".ui-tabs-active")));
                     if (r === null || r === -1) r = this.tabs.length ? 0 : !1
                 }
                 r !== !1 && (r = this.tabs.index(this.tabs.eq(r)), r === -1 && (r = n.collapsible ? !1 : 0)), n.active = r, !n.collapsible && n.active === !1 && this.anchors.length && (n.active = 0), e.isArray(n.disabled) && (n.disabled = e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function(e) {
                     return t.tabs.index(e)
                 }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(this.options.active) : this.active = e(), this._refresh(), this.active.length && this.load(n.active)
             },
             _getCreateEventData: function() {
                 return {
                     tab: this.active,
                     panel: this.active.length ? this._getPanelForTab(this.active) : e()
                 }
             },
             _tabKeydown: function(t) {
                 var n = e(this.document[0].activeElement).closest("li"),
                     r = this.tabs.index(n),
                     i = !0;
                 if (this._handlePageNav(t)) return;
                 switch (t.keyCode) {
                     case e.ui.keyCode.RIGHT:
                     case e.ui.keyCode.DOWN:
                         r++;
                         break;
                     case e.ui.keyCode.UP:
                     case e.ui.keyCode.LEFT:
                         i = !1, r--;
                         break;
                     case e.ui.keyCode.END:
                         r = this.anchors.length - 1;
                         break;
                     case e.ui.keyCode.HOME:
                         r = 0;
                         break;
                     case e.ui.keyCode.SPACE:
                         t.preventDefault(), clearTimeout(this.activating), this._activate(r);
                         return;
                     case e.ui.keyCode.ENTER:
                         t.preventDefault(), clearTimeout(this.activating), this._activate(r === this.options.active ? !1 : r);
                         return;
                     default:
                         return
                 }
                 t.preventDefault(), clearTimeout(this.activating), r = this._focusNextTab(r, i), t.ctrlKey || (n.attr("aria-selected", "false"), this.tabs.eq(r).attr("aria-selected", "true"), this.activating = this._delay(function() {
                     this.option("active", r)
                 }, this.delay))
             },
             _panelKeydown: function(t) {
                 if (this._handlePageNav(t)) return;
                 t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
             },
             _handlePageNav: function(t) {
                 if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP) return this._activate(this._focusNextTab(this.options.active - 1, !1)), !0;
                 if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN) return this._activate(this._focusNextTab(this.options.active + 1, !0)), !0
             },
             _findNextTab: function(t, n) {
                 function i() {
                     return t > r && (t = 0), t < 0 && (t = r), t
                 }
                 var r = this.tabs.length - 1;
                 while (e.inArray(i(), this.options.disabled) !== -1) t = n ? t + 1 : t - 1;
                 return t
             },
             _focusNextTab: function(e, t) {
                 return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
             },
             _setOption: function(e, t) {
                 if (e === "active") {
                     this._activate(t);
                     return
                 }
                 if (e === "disabled") {
                     this._setupDisabled(t);
                     return
                 }
                 this._super(e, t), e === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t), !t && this.options.active === !1 && this._activate(0)), e === "event" && this._setupEvents(t), e === "heightStyle" && this._setupHeightStyle(t)
             },
             _tabId: function(e) {
                 return e.attr("aria-controls") || "ui-tabs-" + i()
             },
             _sanitizeSelector: function(e) {
                 return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
             },
             refresh: function() {
                 var t = this.options,
                     n = this.tablist.children(":has(a[href])");
                 t.disabled = e.map(n.filter(".ui-state-disabled"), function(e) {
                     return n.index(e)
                 }), this._processTabs(), t.active === !1 || !this.anchors.length ? (t.active = !1, this.active = e()) : this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active), this._refresh()
             },
             _refresh: function() {
                 this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                     "aria-selected": "false",
                     tabIndex: -1
                 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                     "aria-expanded": "false",
                     "aria-hidden": "true"
                 }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                     "aria-selected": "true",
                     tabIndex: 0
                 }), this._getPanelForTab(this.active).show().attr({
                     "aria-expanded": "true",
                     "aria-hidden": "false"
                 })) : this.tabs.eq(0).attr("tabIndex", 0)
             },
             _processTabs: function() {
                 var t = this;
                 this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                     role: "tab",
                     tabIndex: -1
                 }), this.anchors = this.tabs.map(function() {
                     return e("a", this)[0]
                 }).addClass("ui-tabs-anchor").attr({
                     role: "presentation",
                     tabIndex: -1
                 }), this.panels = e(), this.anchors.each(function(n, r) {
                     var i, o, u, a = e(r).uniqueId().attr("id"),
                         f = e(r).closest("li"),
                         l = f.attr("aria-controls");
                     s(r) ? (i = r.hash, o = t.element.find(t._sanitizeSelector(i))) : (u = t._tabId(f), i = "#" + u, o = t.element.find(i), o.length || (o = t._createPanel(u), o.insertAfter(t.panels[n - 1] || t.tablist)), o.attr("aria-live", "polite")), o.length && (t.panels = t.panels.add(o)), l && f.data("ui-tabs-aria-controls", l), f.attr({
                         "aria-controls": i.substring(1),
                         "aria-labelledby": a
                     }), o.attr("aria-labelledby", a)
                 }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
             },
             _getList: function() {
                 return this.element.find("ol,ul").eq(0)
             },
             _createPanel: function(t) {
                 return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
             },
             _setupDisabled: function(t) {
                 e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
                 for (var n = 0, r; r = this.tabs[n]; n++) t === !0 || e.inArray(n, t) !== -1 ? e(r).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                 this.options.disabled = t
             },
             _setupEvents: function(t) {
                 var n = {
                     click: function(e) {
                         e.preventDefault()
                     }
                 };
                 t && e.each(t.split(" "), function(e, t) {
                     n[t] = "_eventHandler"
                 }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, n), this._on(this.tabs, {
                     keydown: "_tabKeydown"
                 }), this._on(this.panels, {
                     keydown: "_panelKeydown"
                 }), this._focusable(this.tabs), this._hoverable(this.tabs)
             },
             _setupHeightStyle: function(t) {
                 var n, r, i = this.element.parent();
                 t === "fill" ? (e.support.minHeight || (r = i.css("overflow"), i.css("overflow", "hidden")), n = i.height(), this.element.siblings(":visible").each(function() {
                     var t = e(this),
                         r = t.css("position");
                     if (r === "absolute" || r === "fixed") return;
                     n -= t.outerHeight(!0)
                 }), r && i.css("overflow", r), this.element.children().not(this.panels).each(function() {
                     n -= e(this).outerHeight(!0)
                 }), this.panels.each(function() {
                     e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
                 }).css("overflow", "auto")) : t === "auto" && (n = 0, this.panels.each(function() {
                     n = Math.max(n, e(this).height("").height())
                 }).height(n))
             },
             _eventHandler: function(t) {
                 var n = this.options,
                     r = this.active,
                     i = e(t.currentTarget),
                     s = i.closest("li"),
                     o = s[0] === r[0],
                     u = o && n.collapsible,
                     a = u ? e() : this._getPanelForTab(s),
                     f = r.length ? this._getPanelForTab(r) : e(),
                     l = {
                         oldTab: r,
                         oldPanel: f,
                         newTab: u ? e() : s,
                         newPanel: a
                     };
                 t.preventDefault();
                 if (s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !n.collapsible || this._trigger("beforeActivate", t, l) === !1) return;
                 n.active = u ? !1 : this.tabs.index(s), this.active = o ? e() : s, this.xhr && this.xhr.abort(), !f.length && !a.length && e.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), t), this._toggle(t, l)
             },
             _toggle: function(t, n) {
                 function o() {
                     r.running = !1, r._trigger("activate", t, n)
                 }

                 function u() {
                     n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), i.length && r.options.show ? r._show(i, r.options.show, o) : (i.show(), o())
                 }
                 var r = this,
                     i = n.newPanel,
                     s = n.oldPanel;
                 this.running = !0, s.length && this.options.hide ? this._hide(s, this.options.hide, function() {
                     n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), u()
                 }) : (n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s.hide(), u()), s.attr({
                     "aria-expanded": "false",
                     "aria-hidden": "true"
                 }), n.oldTab.attr("aria-selected", "false"), i.length && s.length ? n.oldTab.attr("tabIndex", -1) : i.length && this.tabs.filter(function() {
                     return e(this).attr("tabIndex") === 0
                 }).attr("tabIndex", -1), i.attr({
                     "aria-expanded": "true",
                     "aria-hidden": "false"
                 }), n.newTab.attr({
                     "aria-selected": "true",
                     tabIndex: 0
                 })
             },
             _activate: function(t) {
                 var n, r = this._findActive(t);
                 if (r[0] === this.active[0]) return;
                 r.length || (r = this.active), n = r.find(".ui-tabs-anchor")[0], this._eventHandler({
                     target: n,
                     currentTarget: n,
                     preventDefault: e.noop
                 })
             },
             _findActive: function(t) {
                 return t === !1 ? e() : this.tabs.eq(t)
             },
             _getIndex: function(e) {
                 return typeof e == "string" && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
             },
             _destroy: function() {
                 this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                     e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                 }), this.tabs.each(function() {
                     var t = e(this),
                         n = t.data("ui-tabs-aria-controls");
                     n ? t.attr("aria-controls", n) : t.removeAttr("aria-controls")
                 }), this.panels.show(), this.options.heightStyle !== "content" && this.panels.css("height", "")
             },
             enable: function(n) {
                 var r = this.options.disabled;
                 if (r === !1) return;
                 n === t ? r = !1 : (n = this._getIndex(n), e.isArray(r) ? r = e.map(r, function(e) {
                     return e !== n ? e : null
                 }) : r = e.map(this.tabs, function(e, t) {
                     return t !== n ? t : null
                 })), this._setupDisabled(r)
             },
             disable: function(n) {
                 var r = this.options.disabled;
                 if (r === !0) return;
                 if (n === t) r = !0;
                 else {
                     n = this._getIndex(n);
                     if (e.inArray(n, r) !== -1) return;
                     e.isArray(r) ? r = e.merge([n], r).sort() : r = [n]
                 }
                 this._setupDisabled(r)
             },
             load: function(t, n) {
                 t = this._getIndex(t);
                 var r = this,
                     i = this.tabs.eq(t),
                     o = i.find(".ui-tabs-anchor"),
                     u = this._getPanelForTab(i),
                     a = {
                         tab: i,
                         panel: u
                     };
                 if (s(o[0])) return;
                 this.xhr = e.ajax(this._ajaxSettings(o, n, a)), this.xhr && this.xhr.statusText !== "canceled" && (i.addClass("ui-tabs-loading"), u.attr("aria-busy", "true"), this.xhr.success(function(e) {
                     setTimeout(function() {
                         u.html(e), r._trigger("load", n, a)
                     }, 1)
                 }).complete(function(e, t) {
                     setTimeout(function() {
                         t === "abort" && r.panels.stop(!1, !0), i.removeClass("ui-tabs-loading"), u.removeAttr("aria-busy"), e === r.xhr && delete r.xhr
                     }, 1)
                 }))
             },
             _ajaxSettings: function(t, n, r) {
                 var i = this;
                 return {
                     url: t.attr("href"),
                     beforeSend: function(t, s) {
                         return i._trigger("beforeLoad", n, e.extend({
                             jqXHR: t,
                             ajaxSettings: s
                         }, r))
                     }
                 }
             },
             _getPanelForTab: function(t) {
                 var n = e(t).attr("aria-controls");
                 return this.element.find(this._sanitizeSelector("#" + n))
             }
         }), e.uiBackCompat !== !1 && (e.ui.tabs.prototype._ui = function(e, t) {
             return {
                 tab: e,
                 panel: t,
                 index: this.anchors.index(e)
             }
         }, e.widget("ui.tabs", e.ui.tabs, {
             url: function(e, t) {
                 this.anchors.eq(e).attr("href", t)
             }
         }), e.widget("ui.tabs", e.ui.tabs, {
             options: {
                 ajaxOptions: null,
                 cache: !1
             },
             _create: function() {
                 this._super();
                 var t = this;
                 this._on({
                     tabsbeforeload: function(n, r) {
                         if (e.data(r.tab[0], "cache.tabs")) {
                             n.preventDefault();
                             return
                         }
                         r.jqXHR.success(function() {
                             t.options.cache && e.data(r.tab[0], "cache.tabs", !0)
                         })
                     }
                 })
             },
             _ajaxSettings: function(t, n, r) {
                 var i = this.options.ajaxOptions;
                 return e.extend({}, i, {
                     error: function(e, t) {
                         try {
                             i.error(e, t, r.tab.closest("li").index(), r.tab[0])
                         } catch (n) {}
                     }
                 }, this._superApply(arguments))
             },
             _setOption: function(e, t) {
                 e === "cache" && t === !1 && this.anchors.removeData("cache.tabs"), this._super(e, t)
             },
             _destroy: function() {
                 this.anchors.removeData("cache.tabs"), this._super()
             },
             url: function(e) {
                 this.anchors.eq(e).removeData("cache.tabs"), this._superApply(arguments)
             }
         }), e.widget("ui.tabs", e.ui.tabs, {
             abort: function() {
                 this.xhr && this.xhr.abort()
             }
         }), e.widget("ui.tabs", e.ui.tabs, {
             options: {
                 spinner: "<em>Loading&#8230;</em>"
             },
             _create: function() {
                 this._super(), this._on({
                     tabsbeforeload: function(e, t) {
                         if (e.target !== this.element[0] || !this.options.spinner) return;
                         var n = t.tab.find("span"),
                             r = n.html();
                         n.html(this.options.spinner), t.jqXHR.complete(function() {
                             n.html(r)
                         })
                     }
                 })
             }
         }), e.widget("ui.tabs", e.ui.tabs, {
             options: {
                 enable: null,
                 disable: null
             },
             enable: function(t) {
                 var n = this.options,
                     r;
                 if (t && n.disabled === !0 || e.isArray(n.disabled) && e.inArray(t, n.disabled) !== -1) r = !0;
                 this._superApply(arguments), r && this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t]))
             },
             disable: function(t) {
                 var n = this.options,
                     r;
                 if (t && n.disabled === !1 || e.isArray(n.disabled) && e.inArray(t, n.disabled) === -1) r = !0;
                 this._superApply(arguments), r && this._trigger("disable", null, this._ui(this.anchors[t], this.panels[t]))
             }
         }), e.widget("ui.tabs", e.ui.tabs, {
             options: {
                 add: null,
                 remove: null,
                 tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
             },
             add: function(n, r, i) {
                 i === t && (i = this.anchors.length);
                 var s, o, u = this.options,
                     a = e(u.tabTemplate.replace(/#\{href\}/g, n).replace(/#\{label\}/g, r)),
                     f = n.indexOf("#") ? this._tabId(a) : n.replace("#", "");
                 return a.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0), a.attr("aria-controls", f), s = i >= this.tabs.length, o = this.element.find("#" + f), o.length || (o = this._createPanel(f), s ? i > 0 ? o.insertAfter(this.panels.eq(-1)) : o.appendTo(this.element) : o.insertBefore(this.panels[i])), o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(), s ? a.appendTo(this.tablist) : a.insertBefore(this.tabs[i]), u.disabled = e.map(u.disabled, function(e) {
                     return e >= i ? ++e : e
                 }), this.refresh(), this.tabs.length === 1 && u.active === !1 && this.option("active", 0), this._trigger("add", null, this._ui(this.anchors[i], this.panels[i])), this
             },
             remove: function(t) {
                 t = this._getIndex(t);
                 var n = this.options,
                     r = this.tabs.eq(t).remove(),
                     i = this._getPanelForTab(r).remove();
                 return r.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(t + (t + 1 < this.anchors.length ? 1 : -1)), n.disabled = e.map(e.grep(n.disabled, function(e) {
                     return e !== t
                 }), function(e) {
                     return e >= t ? --e : e
                 }), this.refresh(), this._trigger("remove", null, this._ui(r.find("a")[0], i[0])), this
             }
         }), e.widget("ui.tabs", e.ui.tabs, {
             length: function() {
                 return this.anchors.length
             }
         }), e.widget("ui.tabs", e.ui.tabs, {
             options: {
                 idPrefix: "ui-tabs-"
             },
             _tabId: function(t) {
                 var n = t.is("li") ? t.find("a[href]") : t;
                 return n = n[0], e(n).closest("li").attr("aria-controls") || n.title && n.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + i()
             }
         }), e.widget("ui.tabs", e.ui.tabs, {
             options: {
                 panelTemplate: "<div></div>"
             },
             _createPanel: function(t) {
                 return e(this.options.panelTemplate).attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
             }
         }), e.widget("ui.tabs", e.ui.tabs, {
             _create: function() {
                 var e = this.options;
                 e.active === null && e.selected !== t && (e.active = e.selected === -1 ? !1 : e.selected), this._super(), e.selected = e.active, e.selected === !1 && (e.selected = -1)
             },
             _setOption: function(e, t) {
                 if (e !== "selected") return this._super(e, t);
                 var n = this.options;
                 this._super("active", t === -1 ? !1 : t), n.selected = n.active, n.selected === !1 && (n.selected = -1)
             },
             _eventHandler: function() {
                 this._superApply(arguments), this.options.selected = this.options.active, this.options.selected === !1 && (this.options.selected = -1)
             }
         }), e.widget("ui.tabs", e.ui.tabs, {
             options: {
                 show: null,
                 select: null
             },
             _create: function() {
                 this._super(), this.options.active !== !1 && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
             },
             _trigger: function(e, t, n) {
                 var r, i, s = this._superApply(arguments);
                 return s ? (e === "beforeActivate" ? (r = n.newTab.length ? n.newTab : n.oldTab, i = n.newPanel.length ? n.newPanel : n.oldPanel, s = this._super("select", t, {
                     tab: r.find(".ui-tabs-anchor")[0],
                     panel: i[0],
                     index: r.closest("li").index()
                 })) : e === "activate" && n.newTab.length && (s = this._super("show", t, {
                     tab: n.newTab.find(".ui-tabs-anchor")[0],
                     panel: n.newPanel[0],
                     index: n.newTab.closest("li").index()
                 })), s) : !1
             }
         }), e.widget("ui.tabs", e.ui.tabs, {
             select: function(e) {
                 e = this._getIndex(e);
                 if (e === -1) {
                     if (!this.options.collapsible || this.options.selected === -1) return;
                     e = this.options.selected
                 }
                 this.anchors.eq(e).trigger(this.options.event + this.eventNamespace)
             }
         }), function() {
             var t = 0;
             e.widget("ui.tabs", e.ui.tabs, {
                 options: {
                     cookie: null
                 },
                 _create: function() {
                     var e = this.options,
                         t;
                     e.active == null && e.cookie && (t = parseInt(this._cookie(), 10), t === -1 && (t = !1), e.active = t), this._super()
                 },
                 _cookie: function(n) {
                     var r = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++t)];
                     return arguments.length && (r.push(n === !1 ? -1 : n), r.push(this.options.cookie)), e.cookie.apply(null, r)
                 },
                 _refresh: function() {
                     this._super(), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
                 },
                 _eventHandler: function() {
                     this._superApply(arguments), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
                 },
                 _destroy: function() {
                     this._super(), this.options.cookie && this._cookie(null, this.options.cookie)
                 }
             })
         }(), e.widget("ui.tabs", e.ui.tabs, {
             _trigger: function(t, n, r) {
                 var i = e.extend({}, r);
                 return t === "load" && (i.panel = i.panel[0], i.tab = i.tab.find(".ui-tabs-anchor")[0]), this._super(t, n, i)
             }
         }), e.widget("ui.tabs", e.ui.tabs, {
             options: {
                 fx: null
             },
             _getFx: function() {
                 var t, n, r = this.options.fx;
                 return r && (e.isArray(r) ? (t = r[0], n = r[1]) : t = n = r), r ? {
                     show: n,
                     hide: t
                 } : null
             },
             _toggle: function(e, t) {
                 function o() {
                     n.running = !1, n._trigger("activate", e, t)
                 }

                 function u() {
                     t.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), r.length && s.show ? r.animate(s.show, s.show.duration, function() {
                         o()
                     }) : (r.show(), o())
                 }
                 var n = this,
                     r = t.newPanel,
                     i = t.oldPanel,
                     s = this._getFx();
                 if (!s) return this._super(e, t);
                 n.running = !0, i.length && s.hide ? i.animate(s.hide, s.hide.duration, function() {
                     t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), u()
                 }) : (t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), i.hide(), u())
             }
         }))
     }(jQuery),
     function(e) {
         function n(t, n) {
             var r = (t.attr("aria-describedby") || "").split(/\s+/);
             r.push(n), t.data("ui-tooltip-id", n).attr("aria-describedby", e.trim(r.join(" ")))
         }

         function r(t) {
             var n = t.data("ui-tooltip-id"),
                 r = (t.attr("aria-describedby") || "").split(/\s+/),
                 i = e.inArray(n, r);
             i !== -1 && r.splice(i, 1), t.removeData("ui-tooltip-id"), r = e.trim(r.join(" ")), r ? t.attr("aria-describedby", r) : t.removeAttr("aria-describedby")
         }
         var t = 0;
         e.widget("ui.tooltip", {
             version: "1.9.2",
             options: {
                 content: function() {
                     return e(this).attr("title")
                 },
                 hide: !0,
                 items: "[title]:not([disabled])",
                 position: {
                     my: "left top+15",
                     at: "left bottom",
                     collision: "flipfit flip"
                 },
                 show: !0,
                 tooltipClass: null,
                 track: !1,
                 close: null,
                 open: null
             },
             _create: function() {
                 this._on({
                     mouseover: "open",
                     focusin: "open"
                 }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
             },
             _setOption: function(t, n) {
                 var r = this;
                 if (t === "disabled") {
                     this[n ? "_disable" : "_enable"](), this.options[t] = n;
                     return
                 }
                 this._super(t, n), t === "content" && e.each(this.tooltips, function(e, t) {
                     r._updateContent(t)
                 })
             },
             _disable: function() {
                 var t = this;
                 e.each(this.tooltips, function(n, r) {
                     var i = e.Event("blur");
                     i.target = i.currentTarget = r[0], t.close(i, !0)
                 }), this.element.find(this.options.items).andSelf().each(function() {
                     var t = e(this);
                     t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
                 })
             },
             _enable: function() {
                 this.element.find(this.options.items).andSelf().each(function() {
                     var t = e(this);
                     t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                 })
             },
             open: function(t) {
                 var n = this,
                     r = e(t ? t.target : this.element).closest(this.options.items);
                 if (!r.length || r.data("ui-tooltip-id")) return;
                 r.attr("title") && r.data("ui-tooltip-title", r.attr("title")), r.data("ui-tooltip-open", !0), t && t.type === "mouseover" && r.parents().each(function() {
                     var t = e(this),
                         r;
                     t.data("ui-tooltip-open") && (r = e.Event("blur"), r.target = r.currentTarget = this, n.close(r, !0)), t.attr("title") && (t.uniqueId(), n.parents[this.id] = {
                         element: this,
                         title: t.attr("title")
                     }, t.attr("title", ""))
                 }), this._updateContent(r, t)
             },
             _updateContent: function(e, t) {
                 var n, r = this.options.content,
                     i = this,
                     s = t ? t.type : null;
                 if (typeof r == "string") return this._open(t, e, r);
                 n = r.call(e[0], function(n) {
                     if (!e.data("ui-tooltip-open")) return;
                     i._delay(function() {
                         t && (t.type = s), this._open(t, e, n)
                     })
                 }), n && this._open(t, e, n)
             },
             _open: function(t, r, i) {
                 function f(e) {
                     a.of = e;
                     if (s.is(":hidden")) return;
                     s.position(a)
                 }
                 var s, o, u, a = e.extend({}, this.options.position);
                 if (!i) return;
                 s = this._find(r);
                 if (s.length) {
                     s.find(".ui-tooltip-content").html(i);
                     return
                 }
                 r.is("[title]") && (t && t.type === "mouseover" ? r.attr("title", "") : r.removeAttr("title")), s = this._tooltip(r), n(r, s.attr("id")), s.find(".ui-tooltip-content").html(i), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                     mousemove: f
                 }), f(t)) : s.position(e.extend({ of: r
                 }, this.options.position)), s.hide(), this._show(s, this.options.show), this.options.show && this.options.show.delay && (u = setInterval(function() {
                     s.is(":visible") && (f(a.of), clearInterval(u))
                 }, e.fx.interval)), this._trigger("open", t, {
                     tooltip: s
                 }), o = {
                     keyup: function(t) {
                         if (t.keyCode === e.ui.keyCode.ESCAPE) {
                             var n = e.Event(t);
                             n.currentTarget = r[0], this.close(n, !0)
                         }
                     },
                     remove: function() {
                         this._removeTooltip(s)
                     }
                 };
                 if (!t || t.type === "mouseover") o.mouseleave = "close";
                 if (!t || t.type === "focusin") o.focusout = "close";
                 this._on(!0, r, o)
             },
             close: function(t) {
                 var n = this,
                     i = e(t ? t.currentTarget : this.element),
                     s = this._find(i);
                 if (this.closing) return;
                 i.data("ui-tooltip-title") && i.attr("title", i.data("ui-tooltip-title")), r(i), s.stop(!0), this._hide(s, this.options.hide, function() {
                     n._removeTooltip(e(this))
                 }), i.removeData("ui-tooltip-open"), this._off(i, "mouseleave focusout keyup"), i[0] !== this.element[0] && this._off(i, "remove"), this._off(this.document, "mousemove"), t && t.type === "mouseleave" && e.each(this.parents, function(t, r) {
                     e(r.element).attr("title", r.title), delete n.parents[t]
                 }), this.closing = !0, this._trigger("close", t, {
                     tooltip: s
                 }), this.closing = !1
             },
             _tooltip: function(n) {
                 var r = "ui-tooltip-" + t++,
                     i = e("<div>").attr({
                         id: r,
                         role: "tooltip"
                     }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
                 return e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), e.fn.bgiframe && i.bgiframe(), this.tooltips[r] = n, i
             },
             _find: function(t) {
                 var n = t.data("ui-tooltip-id");
                 return n ? e("#" + n) : e()
             },
             _removeTooltip: function(e) {
                 e.remove(), delete this.tooltips[e.attr("id")]
             },
             _destroy: function() {
                 var t = this;
                 e.each(this.tooltips, function(n, r) {
                     var i = e.Event("blur");
                     i.target = i.currentTarget = r[0], t.close(i, !0), e("#" + n).remove(), r.data("ui-tooltip-title") && (r.attr("title", r.data("ui-tooltip-title")), r.removeData("ui-tooltip-title"))
                 })
             }
         })
     }(jQuery);

 /* select box it */
 ! function(t) {
     "use strict";
     t(window.jQuery, window, document)
 }(function(t, e, o, s) {
     "use strict";
     t.widget("selectBox.selectBoxIt", {
         VERSION: "3.8.1",
         options: {
             showEffect: "none",
             showEffectOptions: {},
             showEffectSpeed: "medium",
             hideEffect: "none",
             hideEffectOptions: {},
             hideEffectSpeed: "medium",
             showFirstOption: !0,
             defaultText: "",
             defaultIcon: "",
             downArrowIcon: "",
             theme: "default",
             keydownOpen: !0,
             isMobile: function() {
                 var t = navigator.userAgent || navigator.vendor || e.opera;
                 return /iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(t)
             },
             "native": !1,
             aggressiveChange: !1,
             selectWhenHidden: !0,
             viewport: t(e),
             similarSearch: !1,
             copyAttributes: ["title", "rel"],
             copyClasses: "button",
             nativeMousedown: !1,
             customShowHideEvent: !1,
             autoWidth: !0,
             html: !0,
             populate: "",
             dynamicPositioning: !0,
             hideCurrent: !1
         },
         getThemes: function() {
             var e = this,
                 o = t(e.element).attr("data-theme") || "c";
             return {
                 bootstrap: {
                     focus: "active",
                     hover: "",
                     enabled: "enabled",
                     disabled: "disabled",
                     arrow: "caret",
                     button: "btn",
                     list: "dropdown-menu",
                     container: "bootstrap",
                     open: "open"
                 },
                 jqueryui: {
                     focus: "ui-state-focus",
                     hover: "ui-state-hover",
                     enabled: "ui-state-enabled",
                     disabled: "ui-state-disabled",
                     arrow: "ui-icon ui-icon-triangle-1-s",
                     button: "ui-widget ui-state-default",
                     list: "ui-widget ui-widget-content",
                     container: "jqueryui",
                     open: "selectboxit-open"
                 },
                 jquerymobile: {
                     focus: "ui-btn-down-" + o,
                     hover: "ui-btn-hover-" + o,
                     enabled: "ui-enabled",
                     disabled: "ui-disabled",
                     arrow: "ui-icon ui-icon-arrow-d ui-icon-shadow",
                     button: "ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-" + o,
                     list: "ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-" + o,
                     container: "jquerymobile",
                     open: "selectboxit-open"
                 },
                 "default": {
                     focus: "selectboxit-focus",
                     hover: "selectboxit-hover",
                     enabled: "selectboxit-enabled",
                     disabled: "selectboxit-disabled",
                     arrow: "selectboxit-default-arrow",
                     button: "selectboxit-btn",
                     list: "selectboxit-list",
                     container: "selectboxit-container",
                     open: "selectboxit-open"
                 }
             }
         },
         isDeferred: function(e) {
             return t.isPlainObject(e) && e.promise && e.done
         },
         _create: function(e) {
             var s = this,
                 i = s.options.populate,
                 n = s.options.theme;
             return s.element.is("select") ? (s.widgetProto = t.Widget.prototype, s.originalElem = s.element[0], s.selectBox = s.element, s.options.populate && s.add && !e && s.add(i), s.selectItems = s.element.find("option"), s.firstSelectItem = s.selectItems.slice(0, 1), s.documentHeight = t(o).height(), s.theme = t.isPlainObject(n) ? t.extend({}, s.getThemes()["default"], n) : s.getThemes()[n] ? s.getThemes()[n] : s.getThemes()["default"], s.currentFocus = 0, s.blur = !0, s.textArray = [], s.currentIndex = 0, s.currentText = "", s.flipped = !1, e || (s.selectBoxStyles = s.selectBox.attr("style")), s._createDropdownButton()._createUnorderedList()._copyAttributes()._replaceSelectBox()._addClasses(s.theme)._eventHandlers(), s.originalElem.disabled && s.disable && s.disable(), s._ariaAccessibility && s._ariaAccessibility(), s.isMobile = s.options.isMobile(), s._mobile && s._mobile(), s.options["native"] && this._applyNativeSelect(), s.triggerEvent("create"), s) : void 0
         },
         _createDropdownButton: function() {
             var e = this,
                 o = e.originalElemId = e.originalElem.id || "",
                 s = e.originalElemValue = e.originalElem.value || "",
                 i = e.originalElemName = e.originalElem.name || "",
                 n = e.options.copyClasses,
                 r = e.selectBox.attr("class") || "";
             return e.dropdownText = t("<span/>", {
                 id: o && o + "SelectBoxItText",
                 "class": "selectboxit-text",
                 unselectable: "on",
                 text: e.firstSelectItem.text()
             }).attr("data-val", s), e.dropdownImageContainer = t("<span/>", {
                 "class": "selectboxit-option-icon-container"
             }), e.dropdownImage = t("<i/>", {
                 id: o && o + "SelectBoxItDefaultIcon",
                 "class": "selectboxit-default-icon",
                 unselectable: "on"
             }), e.dropdown = t("<span/>", {
                 id: o && o + "SelectBoxIt",
                 "class": "selectboxit " + ("button" === n ? r : "") + " " + (e.selectBox.prop("disabled") ? e.theme.disabled : e.theme.enabled),
                 name: i,
                 tabindex: e.selectBox.attr("tabindex") || "0",
                 unselectable: "on"
             }).append(e.dropdownImageContainer.append(e.dropdownImage)).append(e.dropdownText), e.dropdownContainer = t("<span/>", {
                 id: o && o + "SelectBoxItContainer",
                 "class": "selectboxit-container " + e.theme.container + " " + ("container" === n ? r : "")
             }).append(e.dropdown), e
         },
         _createUnorderedList: function() {
             var e, o, s, i, n, r, a, l, d, c, u, p, h, b = this,
                 f = "",
                 m = b.originalElemId || "",
                 x = t("<ul/>", {
                     id: m && m + "SelectBoxItOptions",
                     "class": "selectboxit-options",
                     tabindex: -1
                 });
             if (b.options.showFirstOption || (b.selectItems.first().attr("disabled", "disabled"), b.selectItems = b.selectBox.find("option").slice(1)), b.selectItems.each(function(m) {
                     p = t(this), o = "", s = "", e = p.prop("disabled"), i = p.attr("data-icon") || "", n = p.attr("data-iconurl") || "", r = n ? "selectboxit-option-icon-url" : "", a = n ? "style=\"background-image:url('" + n + "');\"" : "", l = p.attr("data-selectedtext"), d = p.attr("data-text"), u = d ? d : p.text(), h = p.parent(), h.is("optgroup") && (o = "selectboxit-optgroup-option", 0 === p.index() && (s = '<span class="selectboxit-optgroup-header ' + h.first().attr("class") + '"data-disabled="true">' + h.first().attr("label") + "</span>")), p.attr("value", this.value), f += s + '<li data-id="' + m + '" data-val="' + this.value + '" data-disabled="' + e + '" class="' + o + " selectboxit-option " + (t(this).attr("class") || "") + '"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon ' + i + " " + (r || b.theme.container) + '"' + a + "></i></span>" + (b.options.html ? u : b.htmlEscape(u)) + "</a></li>", c = p.attr("data-search"), b.textArray[m] = e ? "" : c ? c : u, this.selected && (b._setText(b.dropdownText, l || u), b.currentFocus = m)
                 }), b.options.defaultText || b.selectBox.attr("data-text")) {
                 var g = b.options.defaultText || b.selectBox.attr("data-text");
                 b._setText(b.dropdownText, g), b.options.defaultText = g
             }
             return x.append(f), b.list = x, b.dropdownContainer.append(b.list), b.listItems = b.list.children("li"), b.listAnchors = b.list.find("a"), b.listItems.first().addClass("selectboxit-option-first"), b.listItems.last().addClass("selectboxit-option-last"), b.list.find("li[data-disabled='true']").not(".optgroupHeader").addClass(b.theme.disabled), b.dropdownImage.addClass(b.selectBox.attr("data-icon") || b.options.defaultIcon || b.listItems.eq(b.currentFocus).find("i").attr("class")), b.dropdownImage.attr("style", b.listItems.eq(b.currentFocus).find("i").attr("style")), b
         },
         _replaceSelectBox: function() {
             var e, o, i, n = this,
                 r = n.originalElem.id || "",
                 a = n.selectBox.attr("data-size"),
                 l = n.listSize = a === s ? "auto" : "0" === a ? "auto" : +a;
             return n.selectBox.css("display", "none").after(n.dropdownContainer), n.dropdownContainer.appendTo("body").addClass("selectboxit-rendering"), e = n.dropdown.height(), n.downArrow = t("<i/>", {
                 id: r && r + "SelectBoxItArrow",
                 "class": "selectboxit-arrow",
                 unselectable: "on"
             }), n.downArrowContainer = t("<span/>", {
                 id: r && r + "SelectBoxItArrowContainer",
                 "class": "selectboxit-arrow-container",
                 unselectable: "on"
             }).append(n.downArrow), n.dropdown.append(n.downArrowContainer), n.listItems.removeClass("selectboxit-selected").eq(n.currentFocus).addClass("selectboxit-selected"), o = n.downArrowContainer.outerWidth(!0), i = n.dropdownImage.outerWidth(!0), n.options.autoWidth && (n.dropdown.css({
                 width: "auto"
             }).css({
                 width: n.list.outerWidth(!0) + o + i
             }), n.list.css({
                 "min-width": n.dropdown.width()
             })), n.dropdownText.css({
                 "max-width": n.dropdownContainer.outerWidth(!0) - (o + i)
             }), n.selectBox.after(n.dropdownContainer), n.dropdownContainer.removeClass("selectboxit-rendering"), "number" === t.type(l) && (n.maxHeight = n.listAnchors.outerHeight(!0) * l), n
         },
         _scrollToView: function(t) {
             var e = this,
                 o = e.listItems.eq(e.currentFocus),
                 s = e.list.scrollTop(),
                 i = o.height(),
                 n = o.position().top,
                 r = Math.abs(n),
                 a = e.list.height();
             return "search" === t ? i > a - n ? e.list.scrollTop(s + (n - (a - i))) : -1 > n && e.list.scrollTop(n - i) : "up" === t ? -1 > n && e.list.scrollTop(s - r) : "down" === t && i > a - n && e.list.scrollTop(s + (r - a + i)), e
         },
         _callbackSupport: function(e) {
             var o = this;
             return t.isFunction(e) && e.call(o, o.dropdown), o
         },
         _setText: function(t, e) {
             var o = this;
             return o.options.html ? t.html(e) : t.text(e), o
         },
         open: function(t) {
             var e = this,
                 o = e.options.showEffect,
                 s = e.options.showEffectSpeed,
                 i = e.options.showEffectOptions,
                 n = e.options["native"],
                 r = e.isMobile;
             return !e.listItems.length || e.dropdown.hasClass(e.theme.disabled) ? e : (n || r || this.list.is(":visible") || (e.triggerEvent("open"), e._dynamicPositioning && e.options.dynamicPositioning && e._dynamicPositioning(), "none" === o ? e.list.show() : "show" === o || "slideDown" === o || "fadeIn" === o ? e.list[o](s) : e.list.show(o, i, s), e.list.promise().done(function() {
                 e._scrollToView("search"), e.triggerEvent("opened")
             })), e._callbackSupport(t), e)
         },
         close: function(t) {
             var e = this,
                 o = e.options.hideEffect,
                 s = e.options.hideEffectSpeed,
                 i = e.options.hideEffectOptions,
                 n = e.options["native"],
                 r = e.isMobile;
             return n || r || !e.list.is(":visible") || (e.triggerEvent("close"), "none" === o ? e.list.hide() : "hide" === o || "slideUp" === o || "fadeOut" === o ? e.list[o](s) : e.list.hide(o, i, s), e.list.promise().done(function() {
                 e.triggerEvent("closed")
             })), e._callbackSupport(t), e
         },
         toggle: function() {
             var t = this,
                 e = t.list.is(":visible");
             e ? t.close() : e || t.open()
         },
         _keyMappings: {
             38: "up",
             40: "down",
             13: "enter",
             8: "backspace",
             9: "tab",
             32: "space",
             27: "esc"
         },
         _keydownMethods: function() {
             var t = this,
                 e = t.list.is(":visible") || !t.options.keydownOpen;
             return {
                 down: function() {
                     t.moveDown && e && t.moveDown()
                 },
                 up: function() {
                     t.moveUp && e && t.moveUp()
                 },
                 enter: function() {
                     var e = t.listItems.eq(t.currentFocus);
                     t._update(e), "true" !== e.attr("data-preventclose") && t.close(), t.triggerEvent("enter")
                 },
                 tab: function() {
                     t.triggerEvent("tab-blur"), t.close()
                 },
                 backspace: function() {
                     t.triggerEvent("backspace")
                 },
                 esc: function() {
                     t.close()
                 }
             }
         },
         _eventHandlers: function() {
             var e, o, s = this,
                 i = s.options.nativeMousedown,
                 n = s.options.customShowHideEvent,
                 r = s.focusClass,
                 a = s.hoverClass,
                 l = s.openClass;
             return this.dropdown.on({
                 "click.selectBoxIt": function() {
                     s.dropdown.trigger("focus", !0), s.originalElem.disabled || (s.triggerEvent("click"), i || n || s.toggle())
                 },
                 "mousedown.selectBoxIt": function() {
                     t(this).data("mdown", !0), s.triggerEvent("mousedown"), i && !n && s.toggle()
                 },
                 "mouseup.selectBoxIt": function() {
                     s.triggerEvent("mouseup")
                 },
                 "blur.selectBoxIt": function() {
                     s.blur && (s.triggerEvent("blur"), s.close(), t(this).removeClass(r))
                 },
                 "focus.selectBoxIt": function(e, o) {
                     var i = t(this).data("mdown");
                     t(this).removeData("mdown"), i || o || setTimeout(function() {
                         s.triggerEvent("tab-focus")
                     }, 0), o || (t(this).hasClass(s.theme.disabled) || t(this).addClass(r), s.triggerEvent("focus"))
                 },
                 "keydown.selectBoxIt": function(t) {
                     var e = s._keyMappings[t.keyCode],
                         o = s._keydownMethods()[e];
                     o && (o(), !s.options.keydownOpen || "up" !== e && "down" !== e || s.open()), o && "tab" !== e && t.preventDefault()
                 },
                 "keypress.selectBoxIt": function(t) {
                     var e = t.charCode || t.keyCode,
                         o = s._keyMappings[t.charCode || t.keyCode],
                         i = String.fromCharCode(e);
                     s.search && (!o || o && "space" === o) && s.search(i, !0, !0), "space" === o && t.preventDefault()
                 },
                 "mouseenter.selectBoxIt": function() {
                     s.triggerEvent("mouseenter")
                 },
                 "mouseleave.selectBoxIt": function() {
                     s.triggerEvent("mouseleave")
                 }
             }), s.list.on({
                 "mouseover.selectBoxIt": function() {
                     s.blur = !1
                 },
                 "mouseout.selectBoxIt": function() {
                     s.blur = !0
                 },
                 "focusin.selectBoxIt": function() {
                     s.dropdown.trigger("focus", !0)
                 }
             }), s.list.on({
                 "mousedown.selectBoxIt": function() {
                     s._update(t(this)), s.triggerEvent("option-click"), "false" === t(this).attr("data-disabled") && "true" !== t(this).attr("data-preventclose") && s.close(), setTimeout(function() {
                         s.dropdown.trigger("focus", !0)
                     }, 0)
                 },
                 "focusin.selectBoxIt": function() {
                     s.listItems.not(t(this)).removeAttr("data-active"), t(this).attr("data-active", "");
                     var e = s.list.is(":hidden");
                     (s.options.searchWhenHidden && e || s.options.aggressiveChange || e && s.options.selectWhenHidden) && s._update(t(this)), t(this).addClass(r)
                 },
                 "mouseup.selectBoxIt": function() {
                     i && !n && (s._update(t(this)), s.triggerEvent("option-mouseup"), "false" === t(this).attr("data-disabled") && "true" !== t(this).attr("data-preventclose") && s.close())
                 },
                 "mouseenter.selectBoxIt": function() {
                     "false" === t(this).attr("data-disabled") && (s.listItems.removeAttr("data-active"), t(this).addClass(r).attr("data-active", ""), s.listItems.not(t(this)).removeClass(r), t(this).addClass(r), s.currentFocus = +t(this).attr("data-id"))
                 },
                 "mouseleave.selectBoxIt": function() {
                     "false" === t(this).attr("data-disabled") && (s.listItems.not(t(this)).removeClass(r).removeAttr("data-active"), t(this).addClass(r), s.currentFocus = +t(this).attr("data-id"))
                 },
                 "blur.selectBoxIt": function() {
                     t(this).removeClass(r)
                 }
             }, ".selectboxit-option"), s.list.on({
                 "click.selectBoxIt": function(t) {
                     t.preventDefault()
                 }
             }, "a"), s.selectBox.on({
                 "change.selectBoxIt, internal-change.selectBoxIt": function(t, i) {
                     var n, r;
                     i || (n = s.list.find('li[data-val="' + s.originalElem.value + '"]'), n.length && (s.listItems.eq(s.currentFocus).removeClass(s.focusClass), s.currentFocus = +n.attr("data-id"))), n = s.listItems.eq(s.currentFocus), r = n.attr("data-selectedtext"), e = n.attr("data-text"), o = e ? e : n.find("a").text(), s._setText(s.dropdownText, r || o), s.dropdownText.attr("data-val", s.originalElem.value), n.find("i").attr("class") && (s.dropdownImage.attr("class", n.find("i").attr("class")).addClass("selectboxit-default-icon"), s.dropdownImage.attr("style", n.find("i").attr("style"))), s.triggerEvent("changed")
                 },
                 "disable.selectBoxIt": function() {
                     s.dropdown.addClass(s.theme.disabled)
                 },
                 "enable.selectBoxIt": function() {
                     s.dropdown.removeClass(s.theme.disabled)
                 },
                 "open.selectBoxIt": function() {
                     var t, e = s.list.find("li[data-val='" + s.dropdownText.attr("data-val") + "']");
                     e.length || (e = s.listItems.not("[data-disabled=true]").first()), s.currentFocus = +e.attr("data-id"), t = s.listItems.eq(s.currentFocus), s.dropdown.addClass(l).removeClass(a).addClass(r), s.listItems.removeClass(s.selectedClass).removeAttr("data-active").not(t).removeClass(r), t.addClass(s.selectedClass).addClass(r), s.options.hideCurrent && (s.listItems.show(), t.hide())
                 },
                 "close.selectBoxIt": function() {
                     s.dropdown.removeClass(l)
                 },
                 "blur.selectBoxIt": function() {
                     s.dropdown.removeClass(r)
                 },
                 "mouseenter.selectBoxIt": function() {
                     t(this).hasClass(s.theme.disabled) || s.dropdown.addClass(a)
                 },
                 "mouseleave.selectBoxIt": function() {
                     s.dropdown.removeClass(a)
                 },
                 destroy: function(t) {
                     t.preventDefault(), t.stopPropagation()
                 }
             }), s
         },
         _update: function(t) {
             var e, o, s, i = this,
                 n = i.options.defaultText || i.selectBox.attr("data-text"),
                 r = i.listItems.eq(i.currentFocus);
             "false" === t.attr("data-disabled") && (e = i.listItems.eq(i.currentFocus).attr("data-selectedtext"), o = r.attr("data-text"), s = o ? o : r.text(), (n && i.options.html ? i.dropdownText.html() === n : i.dropdownText.text() === n) && i.selectBox.val() === t.attr("data-val") ? i.triggerEvent("change") : (i.selectBox.val(t.attr("data-val")), i.currentFocus = +t.attr("data-id"), i.originalElem.value !== i.dropdownText.attr("data-val") && i.triggerEvent("change")))
         },
         _addClasses: function(t) {
             var e = this,
                 o = (e.focusClass = t.focus, e.hoverClass = t.hover, t.button),
                 s = t.list,
                 i = t.arrow,
                 n = t.container;
             return e.openClass = t.open, e.selectedClass = "selectboxit-selected", e.downArrow.addClass(e.selectBox.attr("data-downarrow") || e.options.downArrowIcon || i), e.dropdownContainer.addClass(n), e.dropdown.addClass(o), e.list.addClass(s), e
         },
         refresh: function(t, e) {
             var o = this;
             return o._destroySelectBoxIt()._create(!0), e || o.triggerEvent("refresh"), o._callbackSupport(t), o
         },
         htmlEscape: function(t) {
             return String(t).replace(/&/g, "&").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
         },
         triggerEvent: function(t) {
             var e = this,
                 o = e.options.showFirstOption ? e.currentFocus : e.currentFocus - 1 >= 0 ? e.currentFocus : 0;
             return e.selectBox.trigger(t, {
                 selectbox: e.selectBox,
                 selectboxOption: e.selectItems.eq(o),
                 dropdown: e.dropdown,
                 dropdownOption: e.listItems.eq(e.currentFocus)
             }), e
         },
         _copyAttributes: function() {
             var t = this;
             return t._addSelectBoxAttributes && t._addSelectBoxAttributes(), t
         },
         _realOuterWidth: function(t) {
             if (t.is(":visible")) return t.outerWidth(!0);
             var e, o = t.clone();
             return o.css({
                 visibility: "hidden",
                 display: "block",
                 position: "absolute"
             }).appendTo("body"), e = o.outerWidth(!0), o.remove(), e
         }
     });
     var i = t.selectBox.selectBoxIt.prototype;
     i.add = function(e, o) {
         this._populate(e, function(e) {
             var s, i, n = this,
                 r = t.type(e),
                 a = 0,
                 l = [],
                 d = n._isJSON(e),
                 c = d && n._parseJSON(e);
             if (e && ("array" === r || d && c.data && "array" === t.type(c.data)) || "object" === r && e.data && "array" === t.type(e.data)) {
                 for (n._isJSON(e) && (e = c), e.data && (e = e.data), i = e.length; i - 1 >= a; a += 1) s = e[a], t.isPlainObject(s) ? l.push(t("<option/>", s)) : "string" === t.type(s) && l.push(t("<option/>", {
                     text: s,
                     value: s
                 }));
                 n.selectBox.append(l)
             } else e && "string" === r && !n._isJSON(e) ? n.selectBox.append(e) : e && "object" === r ? n.selectBox.append(t("<option/>", e)) : e && n._isJSON(e) && t.isPlainObject(n._parseJSON(e)) && n.selectBox.append(t("<option/>", n._parseJSON(e)));
             return n.dropdown ? n.refresh(function() {
                 n._callbackSupport(o)
             }, !0) : n._callbackSupport(o), n
         })
     }, i._parseJSON = function(e) {
         return JSON && JSON.parse && JSON.parse(e) || t.parseJSON(e)
     }, i._isJSON = function(t) {
         var e, o = this;
         try {
             return e = o._parseJSON(t), !0
         } catch (s) {
             return !1
         }
     }, i._populate = function(e, o) {
         var s = this;
         return e = t.isFunction(e) ? e.call() : e, s.isDeferred(e) ? e.done(function(t) {
             o.call(s, t)
         }) : o.call(s, e), s
     }, i._ariaAccessibility = function() {
         var e = this,
             o = t("label[for='" + e.originalElem.id + "']");
         return e.dropdownContainer.attr({
             role: "combobox",
             "aria-autocomplete": "list",
             "aria-haspopup": "true",
             "aria-expanded": "false",
             "aria-owns": e.list[0].id
         }), e.dropdownText.attr({
             "aria-live": "polite"
         }), e.dropdown.on({
             "disable.selectBoxIt": function() {
                 e.dropdownContainer.attr("aria-disabled", "true")
             },
             "enable.selectBoxIt": function() {
                 e.dropdownContainer.attr("aria-disabled", "false")
             }
         }), o.length && e.dropdownContainer.attr("aria-labelledby", o[0].id), e.list.attr({
             role: "listbox",
             "aria-hidden": "true"
         }), e.listItems.attr({
             role: "option"
         }), e.selectBox.on({
             "open.selectBoxIt": function() {
                 e.list.attr("aria-hidden", "false"), e.dropdownContainer.attr("aria-expanded", "true")
             },
             "close.selectBoxIt": function() {
                 e.list.attr("aria-hidden", "true"), e.dropdownContainer.attr("aria-expanded", "false")
             }
         }), e
     }, i._addSelectBoxAttributes = function() {
         var e = this;
         return e._addAttributes(e.selectBox.prop("attributes"), e.dropdown), e.selectItems.each(function(o) {
             e._addAttributes(t(this).prop("attributes"), e.listItems.eq(o))
         }), e
     }, i._addAttributes = function(e, o) {
         var s = this,
             i = s.options.copyAttributes;
         return e.length && t.each(e, function(e, s) {
             var n = s.name.toLowerCase(),
                 r = s.value;
             "null" === r || -1 === t.inArray(n, i) && -1 === n.indexOf("data") || o.attr(n, r)
         }), s
     }, i.destroy = function(t) {
         var e = this;
         return e._destroySelectBoxIt(), e.widgetProto.destroy.call(e), e._callbackSupport(t), e
     }, i._destroySelectBoxIt = function() {
         var e = this;
         return e.dropdown.off(".selectBoxIt"), t.contains(e.dropdownContainer[0], e.originalElem) && e.dropdownContainer.before(e.selectBox), e.dropdownContainer.remove(), e.selectBox.removeAttr("style").attr("style", e.selectBoxStyles), e.triggerEvent("destroy"), e
     }, i.disable = function(t) {
         var e = this;
         return e.options.disabled || (e.close(), e.selectBox.attr("disabled", "disabled"), e.dropdown.removeAttr("tabindex").removeClass(e.theme.enabled).addClass(e.theme.disabled), e.setOption("disabled", !0), e.triggerEvent("disable")), e._callbackSupport(t), e
     }, i.disableOption = function(e, o) {
         var s, i, n, r = this,
             a = t.type(e);
         return "number" === a && (r.close(), s = r.selectBox.find("option").eq(e), r.triggerEvent("disable-option"), s.attr("disabled", "disabled"), r.listItems.eq(e).attr("data-disabled", "true").addClass(r.theme.disabled), r.currentFocus === e && (i = r.listItems.eq(r.currentFocus).nextAll("li").not("[data-disabled='true']").first().length, n = r.listItems.eq(r.currentFocus).prevAll("li").not("[data-disabled='true']").first().length, i ? r.moveDown() : n ? r.moveUp() : r.disable())), r._callbackSupport(o), r
     }, i._isDisabled = function() {
         var t = this;
         return t.originalElem.disabled && t.disable(), t
     }, i._dynamicPositioning = function() {
         var e = this;
         if ("number" === t.type(e.listSize)) e.list.css("max-height", e.maxHeight || "none");
         else {
             var o = e.dropdown.offset().top,
                 s = e.list.data("max-height") || e.list.outerHeight(),
                 i = e.dropdown.outerHeight(),
                 n = e.options.viewport,
                 r = n.height(),
                 a = t.isWindow(n.get(0)) ? n.scrollTop() : n.offset().top,
                 l = r + a >= o + i + s,
                 d = !l;
             if (e.list.data("max-height") || e.list.data("max-height", e.list.outerHeight()), d)
                 if (e.dropdown.offset().top - a >= s) e.list.css("max-height", s), e.list.css("top", e.dropdown.position().top - e.list.outerHeight());
                 else {
                     var c = Math.abs(o + i + s - (r + a)),
                         u = Math.abs(e.dropdown.offset().top - a - s);
                     u > c ? (e.list.css("max-height", s - c - i / 2), e.list.css("top", "auto")) : (e.list.css("max-height", s - u - i / 2), e.list.css("top", e.dropdown.position().top - e.list.outerHeight()))
                 }
             else e.list.css("max-height", s), e.list.css("top", "auto")
         }
         return e
     }, i.enable = function(t) {
         var e = this;
         return e.options.disabled && (e.triggerEvent("enable"), e.selectBox.removeAttr("disabled"), e.dropdown.attr("tabindex", 0).removeClass(e.theme.disabled).addClass(e.theme.enabled), e.setOption("disabled", !1), e._callbackSupport(t)), e
     }, i.enableOption = function(e, o) {
         var s, i = this,
             n = t.type(e);
         return "number" === n && (s = i.selectBox.find("option").eq(e), i.triggerEvent("enable-option"), s.removeAttr("disabled"), i.listItems.eq(e).attr("data-disabled", "false").removeClass(i.theme.disabled)), i._callbackSupport(o), i
     }, i.moveDown = function(t) {
         var e = this;
         e.currentFocus += 1;
         var o = "true" === e.listItems.eq(e.currentFocus).attr("data-disabled") ? !0 : !1,
             s = e.listItems.eq(e.currentFocus).nextAll("li").not("[data-disabled='true']").first().length;
         if (e.currentFocus === e.listItems.length) e.currentFocus -= 1;
         else {
             if (o && s) return e.listItems.eq(e.currentFocus - 1).blur(), void e.moveDown();
             o && !s ? e.currentFocus -= 1 : (e.listItems.eq(e.currentFocus - 1).blur().end().eq(e.currentFocus).focusin(), e._scrollToView("down"), e.triggerEvent("moveDown"))
         }
         return e._callbackSupport(t), e
     }, i.moveUp = function(t) {
         var e = this;
         e.currentFocus -= 1;
         var o = "true" === e.listItems.eq(e.currentFocus).attr("data-disabled") ? !0 : !1,
             s = e.listItems.eq(e.currentFocus).prevAll("li").not("[data-disabled='true']").first().length;
         if (-1 === e.currentFocus) e.currentFocus += 1;
         else {
             if (o && s) return e.listItems.eq(e.currentFocus + 1).blur(), void e.moveUp();
             o && !s ? e.currentFocus += 1 : (e.listItems.eq(this.currentFocus + 1).blur().end().eq(e.currentFocus).focusin(), e._scrollToView("up"), e.triggerEvent("moveUp"))
         }
         return e._callbackSupport(t), e
     }, i._setCurrentSearchOption = function(t) {
         var e = this;
         return (e.options.aggressiveChange || e.options.selectWhenHidden || e.listItems.eq(t).is(":visible")) && e.listItems.eq(t).data("disabled") !== !0 && (e.listItems.eq(e.currentFocus).blur(), e.currentIndex = t, e.currentFocus = t, e.listItems.eq(e.currentFocus).focusin(), e._scrollToView("search"), e.triggerEvent("search")), e
     }, i._searchAlgorithm = function(t, e) {
         var o, s, i, n, r = this,
             a = !1,
             l = r.textArray,
             d = r.currentText;
         for (o = t, i = l.length; i > o; o += 1) {
             for (n = l[o], s = 0; i > s; s += 1) - 1 !== l[s].search(e) && (a = !0, s = i);
             if (a || (r.currentText = r.currentText.charAt(r.currentText.length - 1).replace(/[|()\[{.+*?$\\]/g, "\\$0"), d = r.currentText), e = new RegExp(d, "gi"), d.length < 3) {
                 if (e = new RegExp(d.charAt(0), "gi"), -1 !== n.charAt(0).search(e)) return r._setCurrentSearchOption(o), (n.substring(0, d.length).toLowerCase() !== d.toLowerCase() || r.options.similarSearch) && (r.currentIndex += 1), !1
             } else if (-1 !== n.search(e)) return r._setCurrentSearchOption(o), !1;
             if (n.toLowerCase() === r.currentText.toLowerCase()) return r._setCurrentSearchOption(o), r.currentText = "", !1
         }
         return !0
     }, i.search = function(t, e, o) {
         var s = this;
         o ? s.currentText += t.replace(/[|()\[{.+*?$\\]/g, "\\$0") : s.currentText = t.replace(/[|()\[{.+*?$\\]/g, "\\$0");
         var i = s._searchAlgorithm(s.currentIndex, new RegExp(s.currentText, "gi"));
         return i && s._searchAlgorithm(0, s.currentText), s._callbackSupport(e), s
     }, i._updateMobileText = function() {
         var t, e, o, s = this;
         t = s.selectBox.find("option").filter(":selected"), e = t.attr("data-text"), o = e ? e : t.text(), s._setText(s.dropdownText, o), s.list.find('li[data-val="' + t.val() + '"]').find("i").attr("class") && s.dropdownImage.attr("class", s.list.find('li[data-val="' + t.val() + '"]').find("i").attr("class")).addClass("selectboxit-default-icon")
     }, i._applyNativeSelect = function() {
         var t = this;
         return t.dropdownContainer.append(t.selectBox), t.dropdown.attr("tabindex", "-1"), t.selectBox.css({
             display: "block",
             visibility: "visible",
             width: t._realOuterWidth(t.dropdown),
             height: t.dropdown.outerHeight(),
             opacity: "0",
             position: "absolute",
             top: "0",
             left: "0",
             cursor: "pointer",
             "z-index": "999999",
             margin: t.dropdown.css("margin"),
             padding: "0",
             "-webkit-appearance": "menulist-button"
         }), t.originalElem.disabled && t.triggerEvent("disable"), this
     }, i._mobileEvents = function() {
         var t = this;
         t.selectBox.on({
             "changed.selectBoxIt": function() {
                 t.hasChanged = !0, t._updateMobileText(), t.triggerEvent("option-click")
             },
             "mousedown.selectBoxIt": function() {
                 t.hasChanged || !t.options.defaultText || t.originalElem.disabled || (t._updateMobileText(), t.triggerEvent("option-click"))
             },
             "enable.selectBoxIt": function() {
                 t.selectBox.removeClass("selectboxit-rendering")
             },
             "disable.selectBoxIt": function() {
                 t.selectBox.addClass("selectboxit-rendering")
             }
         })
     }, i._mobile = function() {
         var t = this;
         return t.isMobile && (t._applyNativeSelect(), t._mobileEvents()), this
     }, i.remove = function(e, o) {
         var s, i, n = this,
             r = t.type(e),
             a = 0,
             l = "";
         if ("array" === r) {
             for (i = e.length; i - 1 >= a; a += 1) s = e[a], "number" === t.type(s) && (l += l.length ? ", option:eq(" + s + ")" : "option:eq(" + s + ")");
             n.selectBox.find(l).remove()
         } else "number" === r ? n.selectBox.find("option").eq(e).remove() : n.selectBox.find("option").remove();
         return n.dropdown ? n.refresh(function() {
             n._callbackSupport(o)
         }, !0) : n._callbackSupport(o), n
     }, i.selectOption = function(e, o) {
         var s = this,
             i = t.type(e);
         return "number" === i ? s.selectBox.val(s.selectItems.eq(e).val()).change() : "string" === i && s.selectBox.val(e).change(), s._callbackSupport(o), s
     }, i.setOption = function(e, o, s) {
         var i = this;
         return "string" === t.type(e) && (i.options[e] = o), i.refresh(function() {
             i._callbackSupport(s)
         }, !0), i
     }, i.setOptions = function(e, o) {
         var s = this;
         return t.isPlainObject(e) && (s.options = t.extend({}, s.options, e)), s.refresh(function() {
             s._callbackSupport(o)
         }, !0), s
     }, i.wait = function(t, e) {
         var o = this;
         return o.widgetProto._delay.call(o, e, t), o
     }, $(".styled-select select").selectBoxIt()
 });

 /* jquery fancybox */
 ! function(e, t, n, i) {
     "use strict";
     var o = n("html"),
         a = n(e),
         r = n(t),
         s = n.fancybox = function() {
             s.open.apply(this, arguments)
         },
         l = navigator.userAgent.match(/msie/i),
         c = null,
         d = t.createTouch !== i,
         p = function(e) {
             return e && e.hasOwnProperty && e instanceof n
         },
         h = function(e) {
             return e && "string" === n.type(e)
         },
         f = function(e) {
             return h(e) && e.indexOf("%") > 0
         },
         u = function(e) {
             return e && !(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
         },
         g = function(e, t) {
             var n = parseInt(e, 10) || 0;
             return t && f(e) && (n = s.getViewport()[t] / 100 * n), Math.ceil(n)
         },
         m = function(e, t) {
             return g(e, t) + "px"
         };
     n.extend(s, {
         version: "2.1.5",
         defaults: {
             padding: 15,
             margin: 20,
             width: 800,
             height: 600,
             minWidth: 100,
             minHeight: 100,
             maxWidth: 9999,
             maxHeight: 9999,
             pixelRatio: 1,
             autoSize: !0,
             autoHeight: !1,
             autoWidth: !1,
             autoResize: !0,
             autoCenter: !d,
             fitToView: !0,
             aspectRatio: !1,
             topRatio: .5,
             leftRatio: .5,
             scrolling: "auto",
             wrapCSS: "",
             arrows: !0,
             closeBtn: !0,
             closeClick: !1,
             nextClick: !1,
             mouseWheel: !0,
             autoPlay: !1,
             playSpeed: 3e3,
             preload: 3,
             modal: !1,
             loop: !0,
             ajax: {
                 dataType: "html",
                 headers: {
                     "X-fancyBox": !0
                 }
             },
             iframe: {
                 scrolling: "auto",
                 preload: !0
             },
             swf: {
                 wmode: "transparent",
                 allowfullscreen: "true",
                 allowscriptaccess: "always"
             },
             keys: {
                 next: {
                     13: "left",
                     34: "up",
                     39: "left",
                     40: "up"
                 },
                 prev: {
                     8: "right",
                     33: "down",
                     37: "right",
                     38: "down"
                 },
                 close: [27],
                 play: [32],
                 toggle: [70]
             },
             direction: {
                 next: "left",
                 prev: "right"
             },
             scrollOutside: !0,
             index: 0,
             type: null,
             href: null,
             content: null,
             title: null,
             tpl: {
                 wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                 image: '<img class="fancybox-image" src="{href}" alt="" />',
                 iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                 error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                 closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                 next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                 prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
             },
             openEffect: "fade",
             openSpeed: 250,
             openEasing: "swing",
             openOpacity: !0,
             openMethod: "zoomIn",
             closeEffect: "fade",
             closeSpeed: 250,
             closeEasing: "swing",
             closeOpacity: !0,
             closeMethod: "zoomOut",
             nextEffect: "elastic",
             nextSpeed: 250,
             nextEasing: "swing",
             nextMethod: "changeIn",
             prevEffect: "elastic",
             prevSpeed: 250,
             prevEasing: "swing",
             prevMethod: "changeOut",
             helpers: {
                 overlay: !0,
                 title: !0
             },
             onCancel: n.noop,
             beforeLoad: n.noop,
             afterLoad: n.noop,
             beforeShow: n.noop,
             afterShow: n.noop,
             beforeChange: n.noop,
             beforeClose: n.noop,
             afterClose: n.noop
         },
         group: {},
         opts: {},
         previous: null,
         coming: null,
         current: null,
         isActive: !1,
         isOpen: !1,
         isOpened: !1,
         wrap: null,
         skin: null,
         outer: null,
         inner: null,
         player: {
             timer: null,
             isActive: !1
         },
         ajaxLoad: null,
         imgPreload: null,
         transitions: {},
         helpers: {},
         open: function(e, t) {
             return e && (n.isPlainObject(t) || (t = {}), !1 !== s.close(!0)) ? (n.isArray(e) || (e = p(e) ? n(e).get() : [e]), n.each(e, function(o, a) {
                 var r, l, c, d, f, u, g, m = {};
                 "object" === n.type(a) && (a.nodeType && (a = n(a)), p(a) ? (m = {
                     href: a.data("fancybox-href") || a.attr("href"),
                     title: a.data("fancybox-title") || a.attr("title"),
                     isDom: !0,
                     element: a
                 }, n.metadata && n.extend(!0, m, a.metadata())) : m = a), r = t.href || m.href || (h(a) ? a : null), l = t.title !== i ? t.title : m.title || "", c = t.content || m.content, d = c ? "html" : t.type || m.type, !d && m.isDom && (d = a.data("fancybox-type"), d || (f = a.prop("class").match(/fancybox\.(\w+)/), d = f ? f[1] : null)), h(r) && (d || (s.isImage(r) ? d = "image" : s.isSWF(r) ? d = "swf" : "#" === r.charAt(0) ? d = "inline" : h(a) && (d = "html", c = a)), "ajax" === d && (u = r.split(/\s+/, 2), r = u.shift(), g = u.shift())), c || ("inline" === d ? r ? c = n(h(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r) : m.isDom && (c = a) : "html" === d ? c = r : d || r || !m.isDom || (d = "inline", c = a)), n.extend(m, {
                     href: r,
                     type: d,
                     content: c,
                     title: l,
                     selector: g
                 }), e[o] = m
             }), s.opts = n.extend(!0, {}, s.defaults, t), t.keys !== i && (s.opts.keys = t.keys ? n.extend({}, s.defaults.keys, t.keys) : !1), s.group = e, s._start(s.opts.index)) : void 0
         },
         cancel: function() {
             var e = s.coming;
             e && !1 !== s.trigger("onCancel") && (s.hideLoading(), s.ajaxLoad && s.ajaxLoad.abort(), s.ajaxLoad = null, s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), s.coming = null, s.current || s._afterZoomOut(e))
         },
         close: function(e) {
             s.cancel(), !1 !== s.trigger("beforeClose") && (s.unbindEvents(), s.isActive && (s.isOpen && e !== !0 ? (s.isOpen = s.isOpened = !1, s.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), s.wrap.stop(!0, !0).removeClass("fancybox-opened"), s.transitions[s.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), s._afterZoomOut())))
         },
         play: function(e) {
             var t = function() {
                     clearTimeout(s.player.timer)
                 },
                 n = function() {
                     t(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed))
                 },
                 i = function() {
                     t(), r.unbind(".player"), s.player.isActive = !1, s.trigger("onPlayEnd")
                 },
                 o = function() {
                     s.current && (s.current.loop || s.current.index < s.group.length - 1) && (s.player.isActive = !0, r.bind({
                         "onCancel.player beforeClose.player": i,
                         "onUpdate.player": n,
                         "beforeLoad.player": t
                     }), n(), s.trigger("onPlayStart"))
                 };
             e === !0 || !s.player.isActive && e !== !1 ? o() : i()
         },
         next: function(e) {
             var t = s.current;
             t && (h(e) || (e = t.direction.next), s.jumpto(t.index + 1, e, "next"))
         },
         prev: function(e) {
             var t = s.current;
             t && (h(e) || (e = t.direction.prev), s.jumpto(t.index - 1, e, "prev"))
         },
         jumpto: function(e, t, n) {
             var o = s.current;
             o && (e = g(e), s.direction = t || o.direction[e >= o.index ? "next" : "prev"], s.router = n || "jumpto", o.loop && (0 > e && (e = o.group.length + e % o.group.length), e %= o.group.length), o.group[e] !== i && (s.cancel(), s._start(e)))
         },
         reposition: function(e, t) {
             var i, o = s.current,
                 a = o ? o.wrap : null;
             a && (i = s._getPosition(t), e && "scroll" === e.type ? (delete i.position, a.stop(!0, !0).animate(i, 200)) : (a.css(i), o.pos = n.extend({}, o.dim, i)))
         },
         update: function(e) {
             var t = e && e.type,
                 n = !t || "orientationchange" === t;
             n && (clearTimeout(c), c = null), s.isOpen && !c && (c = setTimeout(function() {
                 var i = s.current;
                 i && !s.isClosing && (s.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && i.autoResize) && s._setDimension(), "scroll" === t && i.canShrink || s.reposition(e), s.trigger("onUpdate"), c = null)
             }, n && !d ? 0 : 300))
         },
         toggle: function(e) {
             s.isOpen && (s.current.fitToView = "boolean" === n.type(e) ? e : !s.current.fitToView, d && (s.wrap.removeAttr("style").addClass("fancybox-tmp"), s.trigger("onUpdate")), s.update())
         },
         hideLoading: function() {
             r.unbind(".loading"), n("#fancybox-loading").remove()
         },
         showLoading: function() {
             var e, t;
             s.hideLoading(), e = n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"), r.bind("keydown.loading", function(e) {
                 27 === (e.which || e.keyCode) && (e.preventDefault(), s.cancel())
             }), s.defaults.fixed || (t = s.getViewport(), e.css({
                 position: "absolute",
                 top: .5 * t.h + t.y,
                 left: .5 * t.w + t.x
             }))
         },
         getViewport: function() {
             var t = s.current && s.current.locked || !1,
                 n = {
                     x: a.scrollLeft(),
                     y: a.scrollTop()
                 };
             return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = d && e.innerWidth ? e.innerWidth : a.width(), n.h = d && e.innerHeight ? e.innerHeight : a.height()), n
         },
         unbindEvents: function() {
             s.wrap && p(s.wrap) && s.wrap.unbind(".fb"), r.unbind(".fb"), a.unbind(".fb")
         },
         bindEvents: function() {
             var e, t = s.current;
             t && (a.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), s.update), e = t.keys, e && r.bind("keydown.fb", function(o) {
                 var a = o.which || o.keyCode,
                     r = o.target || o.srcElement;
                 return 27 === a && s.coming ? !1 : void(o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || r && (r.type || n(r).is("[contenteditable]")) || n.each(e, function(e, r) {
                     return t.group.length > 1 && r[a] !== i ? (s[e](r[a]), o.preventDefault(), !1) : n.inArray(a, r) > -1 ? (s[e](), o.preventDefault(), !1) : void 0
                 }))
             }), n.fn.mousewheel && t.mouseWheel && s.wrap.bind("mousewheel.fb", function(e, i, o, a) {
                 for (var r = e.target || null, l = n(r), c = !1; l.length && !(c || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) c = u(l[0]), l = n(l).parent();
                 0 === i || c || s.group.length > 1 && !t.canShrink && (a > 0 || o > 0 ? s.prev(a > 0 ? "down" : "left") : (0 > a || 0 > o) && s.next(0 > a ? "up" : "right"), e.preventDefault())
             }))
         },
         trigger: function(e, t) {
             var i, o = t || s.coming || s.current;
             if (o) {
                 if (n.isFunction(o[e]) && (i = o[e].apply(o, Array.prototype.slice.call(arguments, 1))), i === !1) return !1;
                 o.helpers && n.each(o.helpers, function(t, i) {
                     i && s.helpers[t] && n.isFunction(s.helpers[t][e]) && s.helpers[t][e](n.extend(!0, {}, s.helpers[t].defaults, i), o)
                 }), r.trigger(e)
             }
         },
         isImage: function(e) {
             return h(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
         },
         isSWF: function(e) {
             return h(e) && e.match(/\.(swf)((\?|#).*)?$/i)
         },
         _start: function(e) {
             var t, i, o, a, r, l = {};
             if (e = g(e), t = s.group[e] || null, !t) return !1;
             if (l = n.extend(!0, {}, s.opts, t), a = l.margin, r = l.padding, "number" === n.type(a) && (l.margin = [a, a, a, a]), "number" === n.type(r) && (l.padding = [r, r, r, r]), l.modal && n.extend(!0, l, {
                     closeBtn: !1,
                     closeClick: !1,
                     nextClick: !1,
                     arrows: !1,
                     mouseWheel: !1,
                     keys: null,
                     helpers: {
                         overlay: {
                             closeClick: !1
                         }
                     }
                 }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = s.group, l.index = e, s.coming = l, !1 === s.trigger("beforeLoad")) return void(s.coming = null);
             if (o = l.type, i = l.href, !o) return s.coming = null, s.current && s.router && "jumpto" !== s.router ? (s.current.index = e, s[s.router](s.direction)) : !1;
             if (s.isActive = !0, ("image" === o || "swf" === o) && (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === o && (l.aspectRatio = !0), "iframe" === o && d && (l.scrolling = "scroll"), l.wrap = n(l.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), n.extend(l, {
                     skin: n(".fancybox-skin", l.wrap),
                     outer: n(".fancybox-outer", l.wrap),
                     inner: n(".fancybox-inner", l.wrap)
                 }), n.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                     l.skin.css("padding" + t, m(l.padding[e]))
                 }), s.trigger("onReady"), "inline" === o || "html" === o) {
                 if (!l.content || !l.content.length) return s._error("content")
             } else if (!i) return s._error("href");
             "image" === o ? s._loadImage() : "ajax" === o ? s._loadAjax() : "iframe" === o ? s._loadIframe() : s._afterLoad()
         },
         _error: function(e) {
             n.extend(s.coming, {
                 type: "html",
                 autoWidth: !0,
                 autoHeight: !0,
                 minWidth: 0,
                 minHeight: 0,
                 scrolling: "no",
                 hasError: e,
                 content: s.coming.tpl.error
             }), s._afterLoad()
         },
         _loadImage: function() {
             var e = s.imgPreload = new Image;
             e.onload = function() {
                 this.onload = this.onerror = null, s.coming.width = this.width / s.opts.pixelRatio, s.coming.height = this.height / s.opts.pixelRatio, s._afterLoad()
             }, e.onerror = function() {
                 this.onload = this.onerror = null, s._error("image")
             }, e.src = s.coming.href, e.complete !== !0 && s.showLoading()
         },
         _loadAjax: function() {
             var e = s.coming;
             s.showLoading(), s.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                 url: e.href,
                 error: function(e, t) {
                     s.coming && "abort" !== t ? s._error("ajax", e) : s.hideLoading()
                 },
                 success: function(t, n) {
                     "success" === n && (e.content = t, s._afterLoad())
                 }
             }))
         },
         _loadIframe: function() {
             var e = s.coming,
                 t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", d ? "auto" : e.iframe.scrolling).attr("src", e.href);
             n(e.wrap).bind("onReset", function() {
                 try {
                     n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                 } catch (e) {}
             }), e.iframe.preload && (s.showLoading(), t.one("load", function() {
                 n(this).data("ready", 1), d || n(this).bind("load.fb", s.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), s._afterLoad()
             })), e.content = t.appendTo(e.inner), e.iframe.preload || s._afterLoad()
         },
         _preloadImages: function() {
             var e, t, n = s.group,
                 i = s.current,
                 o = n.length,
                 a = i.preload ? Math.min(i.preload, o - 1) : 0;
             for (t = 1; a >= t; t += 1) e = n[(i.index + t) % o], "image" === e.type && e.href && ((new Image).src = e.href)
         },
         _afterLoad: function() {
             var e, t, i, o, a, r, l = s.coming,
                 c = s.current,
                 d = "fancybox-placeholder";
             if (s.hideLoading(), l && s.isActive !== !1) {
                 if (!1 === s.trigger("afterLoad", l, c)) return l.wrap.stop(!0).trigger("onReset").remove(), void(s.coming = null);
                 switch (c && (s.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), s.unbindEvents(), e = l, t = l.content, i = l.type, o = l.scrolling, n.extend(s, {
                     wrap: e.wrap,
                     skin: e.skin,
                     outer: e.outer,
                     inner: e.inner,
                     current: e,
                     previous: c
                 }), a = e.href, i) {
                     case "inline":
                     case "ajax":
                     case "html":
                         e.selector ? t = n("<div>").html(t).find(e.selector) : p(t) && (t.data(d) || t.data(d, n('<div class="' + d + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function() {
                             n(this).find(t).length && t.hide().replaceAll(t.data(d)).data(d, !1)
                         }));
                         break;
                     case "image":
                         t = e.tpl.image.replace("{href}", a);
                         break;
                     case "swf":
                         t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + a + '"></param>', r = "", n.each(e.swf, function(e, n) {
                             t += '<param name="' + e + '" value="' + n + '"></param>', r += " " + e + '="' + n + '"'
                         }), t += '<embed src="' + a + '" type="application/x-shockwave-flash" width="100%" height="100%"' + r + "></embed></object>"
                 }
                 p(t) && t.parent().is(e.inner) || e.inner.append(t), s.trigger("beforeShow"), e.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o), s._setDimension(), s.reposition(), s.isOpen = !1, s.coming = null, s.bindEvents(), s.isOpened ? c.prevMethod && s.transitions[c.prevMethod]() : n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), s.transitions[s.isOpened ? e.nextMethod : e.openMethod](), s._preloadImages()
             }
         },
         _setDimension: function() {
             var e, t, i, o, a, r, l, c, d, p, h, u, y, x, v, w = s.getViewport(),
                 b = 0,
                 k = !1,
                 C = !1,
                 O = s.wrap,
                 W = s.skin,
                 _ = s.inner,
                 S = s.current,
                 T = S.width,
                 L = S.height,
                 E = S.minWidth,
                 R = S.minHeight,
                 j = S.maxWidth,
                 P = S.maxHeight,
                 H = S.scrolling,
                 M = S.scrollOutside ? S.scrollbarWidth : 0,
                 A = S.margin,
                 I = g(A[1] + A[3]),
                 D = g(A[0] + A[2]);
             if (O.add(W).add(_).width("auto").height("auto").removeClass("fancybox-tmp"), e = g(W.outerWidth(!0) - W.width()), t = g(W.outerHeight(!0) - W.height()), i = I + e, o = D + t, a = f(T) ? (w.w - i) * g(T) / 100 : T, r = f(L) ? (w.h - o) * g(L) / 100 : L, "iframe" === S.type) {
                 if (x = S.content, S.autoHeight && 1 === x.data("ready")) try {
                     x[0].contentWindow.document.location && (_.width(a).height(9999), v = x.contents().find("body"), M && v.css("overflow-x", "hidden"), r = v.outerHeight(!0))
                 } catch (z) {}
             } else(S.autoWidth || S.autoHeight) && (_.addClass("fancybox-tmp"), S.autoWidth || _.width(a), S.autoHeight || _.height(r), S.autoWidth && (a = _.width()), S.autoHeight && (r = _.height()), _.removeClass("fancybox-tmp"));
             if (T = g(a), L = g(r), d = a / r, E = g(f(E) ? g(E, "w") - i : E), j = g(f(j) ? g(j, "w") - i : j), R = g(f(R) ? g(R, "h") - o : R), P = g(f(P) ? g(P, "h") - o : P), l = j, c = P, S.fitToView && (j = Math.min(w.w - i, j), P = Math.min(w.h - o, P)), u = w.w - I, y = w.h - D, S.aspectRatio ? (T > j && (T = j, L = g(T / d)), L > P && (L = P, T = g(L * d)), E > T && (T = E, L = g(T / d)), R > L && (L = R, T = g(L * d))) : (T = Math.max(E, Math.min(T, j)), S.autoHeight && "iframe" !== S.type && (_.width(T), L = _.height()), L = Math.max(R, Math.min(L, P))), S.fitToView)
                 if (_.width(T).height(L), O.width(T + e), p = O.width(), h = O.height(), S.aspectRatio)
                     for (;
                         (p > u || h > y) && T > E && L > R && !(b++ > 19);) L = Math.max(R, Math.min(P, L - 10)), T = g(L * d), E > T && (T = E, L = g(T / d)), T > j && (T = j, L = g(T / d)), _.width(T).height(L), O.width(T + e), p = O.width(), h = O.height();
                 else T = Math.max(E, Math.min(T, T - (p - u))), L = Math.max(R, Math.min(L, L - (h - y)));
             M && "auto" === H && r > L && u > T + e + M && (T += M), _.width(T).height(L), O.width(T + e), p = O.width(), h = O.height(), k = (p > u || h > y) && T > E && L > R, C = S.aspectRatio ? l > T && c > L && a > T && r > L : (l > T || c > L) && (a > T || r > L), n.extend(S, {
                 dim: {
                     width: m(p),
                     height: m(h)
                 },
                 origWidth: a,
                 origHeight: r,
                 canShrink: k,
                 canExpand: C,
                 wPadding: e,
                 hPadding: t,
                 wrapSpace: h - W.outerHeight(!0),
                 skinSpace: W.height() - L
             }), !x && S.autoHeight && L > R && P > L && !C && _.height("auto")
         },
         _getPosition: function(e) {
             var t = s.current,
                 n = s.getViewport(),
                 i = t.margin,
                 o = s.wrap.width() + i[1] + i[3],
                 a = s.wrap.height() + i[0] + i[2],
                 r = {
                     position: "absolute",
                     top: i[0],
                     left: i[3]
                 };
             return t.autoCenter && t.fixed && !e && a <= n.h && o <= n.w ? r.position = "fixed" : t.locked || (r.top += n.y, r.left += n.x), r.top = m(Math.max(r.top, r.top + (n.h - a) * t.topRatio)), r.left = m(Math.max(r.left, r.left + (n.w - o) * t.leftRatio)), r
         },
         _afterZoomIn: function() {
             var e = s.current;
             e && (s.isOpen = s.isOpened = !0, s.wrap.css("overflow", "visible").addClass("fancybox-opened"), s.update(), (e.closeClick || e.nextClick && s.group.length > 1) && s.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                 n(t.target).is("a") || n(t.target).parent().is("a") || (t.preventDefault(), s[e.closeClick ? "close" : "next"]())
             }), e.closeBtn && n(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb", function(e) {
                 e.preventDefault(), s.close()
             }), e.arrows && s.group.length > 1 && ((e.loop || e.index > 0) && n(e.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev), (e.loop || e.index < s.group.length - 1) && n(e.tpl.next).appendTo(s.outer).bind("click.fb", s.next)), s.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? s.opts.autoPlay && !s.player.isActive && (s.opts.autoPlay = !1, s.play()) : s.play(!1))
         },
         _afterZoomOut: function(e) {
             e = e || s.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(s, {
                 group: {},
                 opts: {},
                 router: !1,
                 current: null,
                 isActive: !1,
                 isOpened: !1,
                 isOpen: !1,
                 isClosing: !1,
                 wrap: null,
                 skin: null,
                 outer: null,
                 inner: null
             }), s.trigger("afterClose", e)
         }
     }), s.transitions = {
         getOrigPosition: function() {
             var e = s.current,
                 t = e.element,
                 n = e.orig,
                 i = {},
                 o = 50,
                 a = 50,
                 r = e.hPadding,
                 l = e.wPadding,
                 c = s.getViewport();
             return !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t)), p(n) ? (i = n.offset(), n.is("img") && (o = n.outerWidth(), a = n.outerHeight())) : (i.top = c.y + (c.h - a) * e.topRatio, i.left = c.x + (c.w - o) * e.leftRatio), ("fixed" === s.wrap.css("position") || e.locked) && (i.top -= c.y, i.left -= c.x), i = {
                 top: m(i.top - r * e.topRatio),
                 left: m(i.left - l * e.leftRatio),
                 width: m(o + l),
                 height: m(a + r)
             }
         },
         step: function(e, t) {
             var n, i, o, a = t.prop,
                 r = s.current,
                 l = r.wrapSpace,
                 c = r.skinSpace;
             ("width" === a || "height" === a) && (n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), s.isClosing && (n = 1 - n), i = "width" === a ? r.wPadding : r.hPadding, o = e - i, s.skin[a](g("width" === a ? o : o - l * n)), s.inner[a](g("width" === a ? o : o - l * n - c * n)))
         },
         zoomIn: function() {
             var e = s.current,
                 t = e.pos,
                 i = e.openEffect,
                 o = "elastic" === i,
                 a = n.extend({
                     opacity: 1
                 }, t);
             delete a.position, o ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === i && (t.opacity = .1), s.wrap.css(t).animate(a, {
                 duration: "none" === i ? 0 : e.openSpeed,
                 easing: e.openEasing,
                 step: o ? this.step : null,
                 complete: s._afterZoomIn
             })
         },
         zoomOut: function() {
             var e = s.current,
                 t = e.closeEffect,
                 n = "elastic" === t,
                 i = {
                     opacity: .1
                 };
             n && (i = this.getOrigPosition(), e.closeOpacity && (i.opacity = .1)), s.wrap.animate(i, {
                 duration: "none" === t ? 0 : e.closeSpeed,
                 easing: e.closeEasing,
                 step: n ? this.step : null,
                 complete: s._afterZoomOut
             })
         },
         changeIn: function() {
             var e, t = s.current,
                 n = t.nextEffect,
                 i = t.pos,
                 o = {
                     opacity: 1
                 },
                 a = s.direction,
                 r = 200;
             i.opacity = .1, "elastic" === n && (e = "down" === a || "up" === a ? "top" : "left", "down" === a || "right" === a ? (i[e] = m(g(i[e]) - r), o[e] = "+=" + r + "px") : (i[e] = m(g(i[e]) + r), o[e] = "-=" + r + "px")), "none" === n ? s._afterZoomIn() : s.wrap.css(i).animate(o, {
                 duration: t.nextSpeed,
                 easing: t.nextEasing,
                 complete: s._afterZoomIn
             })
         },
         changeOut: function() {
             var e = s.previous,
                 t = e.prevEffect,
                 i = {
                     opacity: .1
                 },
                 o = s.direction,
                 a = 200;
             "elastic" === t && (i["down" === o || "up" === o ? "top" : "left"] = ("up" === o || "left" === o ? "-" : "+") + "=" + a + "px"), e.wrap.animate(i, {
                 duration: "none" === t ? 0 : e.prevSpeed,
                 easing: e.prevEasing,
                 complete: function() {
                     n(this).trigger("onReset").remove()
                 }
             })
         }
     }, s.helpers.overlay = {
         defaults: {
             closeClick: !0,
             speedOut: 200,
             showEarly: !0,
             css: {},
             locked: !d,
             fixed: !0
         },
         overlay: null,
         fixed: !1,
         el: n("html"),
         create: function(e) {
             e = n.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(s.coming ? s.coming.parent : e.parent), this.fixed = !1, e.fixed && s.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
         },
         open: function(e) {
             var t = this;
             e = n.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (a.bind("resize.overlay", n.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
                 return n(e.target).hasClass("fancybox-overlay") ? (s.isActive ? s.close() : t.close(), !1) : void 0
             }), this.overlay.css(e.css).show()
         },
         close: function() {
             var e, t;
             a.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), e = a.scrollTop(), t = a.scrollLeft(), this.el.removeClass("fancybox-lock"), a.scrollTop(e).scrollLeft(t)), n(".fancybox-overlay").remove().hide(), n.extend(this, {
                 overlay: null,
                 fixed: !1
             })
         },
         update: function() {
             var e, n = "100%";
             this.overlay.width(n).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), r.width() > e && (n = r.width())) : r.width() > a.width() && (n = r.width()), this.overlay.width(n).height(r.height())
         },
         onReady: function(e, t) {
             var i = this.overlay;
             n(".fancybox-overlay").stop(!0, !0), i || this.create(e), e.locked && this.fixed && t.fixed && (i || (this.margin = r.height() > a.height() ? n("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1), e.showEarly === !0 && this.beforeShow.apply(this, arguments)
         },
         beforeShow: function(e, t) {
             var i, o;
             t.locked && (this.margin !== !1 && (n("*").filter(function() {
                 return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
             }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), i = a.scrollTop(), o = a.scrollLeft(), this.el.addClass("fancybox-lock"), a.scrollTop(i).scrollLeft(o)), this.open(e)
         },
         onUpdate: function() {
             this.fixed || this.update()
         },
         afterClose: function(e) {
             this.overlay && !s.coming && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
         }
     }, s.helpers.title = {
         defaults: {
             type: "float",
             position: "bottom"
         },
         beforeShow: function(e) {
             var t, i, o = s.current,
                 a = o.title,
                 r = e.type;
             if (n.isFunction(a) && (a = a.call(o.element, o)), h(a) && "" !== n.trim(a)) {
                 switch (t = n('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + a + "</div>"), r) {
                     case "inside":
                         i = s.skin;
                         break;
                     case "outside":
                         i = s.wrap;
                         break;
                     case "over":
                         i = s.inner;
                         break;
                     default:
                         i = s.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), s.current.margin[2] += Math.abs(g(t.css("margin-bottom")))
                 }
                 t["top" === e.position ? "prependTo" : "appendTo"](i)
             }
         }
     }, n.fn.fancybox = function(e) {
         var t, i = n(this),
             o = this.selector || "",
             a = function(a) {
                 var r, l, c = n(this).blur(),
                     d = t;
                 a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || c.is(".fancybox-wrap") || (r = e.groupAttr || "data-fancybox-group", l = c.attr(r), l || (r = "rel", l = c.get(0)[r]), l && "" !== l && "nofollow" !== l && (c = o.length ? n(o) : i, c = c.filter("[" + r + '="' + l + '"]'), d = c.index(this)), e.index = d, s.open(c, e) !== !1 && a.preventDefault())
             };
         return e = e || {}, t = e.index || 0, o && e.live !== !1 ? r.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", a) : i.unbind("click.fb-start").bind("click.fb-start", a), this.filter("[data-fancybox-start=1]").trigger("click"), this
     }, r.ready(function() {
         var t, a;
         n.scrollbarWidth === i && (n.scrollbarWidth = function() {
             var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                 t = e.children(),
                 i = t.innerWidth() - t.height(99).innerWidth();
             return e.remove(), i
         }), n.support.fixedPosition === i && (n.support.fixedPosition = function() {
             var e = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                 t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
             return e.remove(), t
         }()), n.extend(s.defaults, {
             scrollbarWidth: n.scrollbarWidth(),
             fixed: n.support.fixedPosition,
             parent: n("body")
         }), t = n(e).width(), o.addClass("fancybox-lock-test"), a = n(e).width(), o.removeClass("fancybox-lock-test"), n("<style type='text/css'>.fancybox-margin{margin-right:" + (a - t) + "px;}</style>").appendTo("head")
     })
 }(window, document, jQuery);

 /* jquery fancybox media */
 ! function(e) {
     "use strict";
     var a = e.fancybox,
         t = function(a, t, o) {
             return o = o || "", "object" === e.type(o) && (o = e.param(o, !0)), e.each(t, function(e, t) {
                 a = a.replace("$" + e, t || "")
             }), o.length && (a += (a.indexOf("?") > 0 ? "&" : "?") + o), a
         };
     a.helpers.media = {
         defaults: {
             youtube: {
                 matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                 params: {
                     autoplay: 1,
                     autohide: 1,
                     fs: 1,
                     rel: 0,
                     hd: 1,
                     wmode: "opaque",
                     enablejsapi: 1
                 },
                 type: "iframe",
                 url: "//www.youtube.com/embed/$3"
             },
             vimeo: {
                 matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                 params: {
                     autoplay: 1,
                     hd: 1,
                     show_title: 1,
                     show_byline: 1,
                     show_portrait: 0,
                     fullscreen: 1
                 },
                 type: "iframe",
                 url: "//player.vimeo.com/video/$1"
             },
             metacafe: {
                 matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                 params: {
                     autoPlay: "yes"
                 },
                 type: "swf",
                 url: function(a, t, o) {
                     return o.swf.flashVars = "playerVars=" + e.param(t, !0), "//www.metacafe.com/fplayer/" + a[1] + "/.swf"
                 }
             },
             dailymotion: {
                 matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                 params: {
                     additionalInfos: 0,
                     autoStart: 1
                 },
                 type: "swf",
                 url: "//www.dailymotion.com/swf/video/$1"
             },
             twitvid: {
                 matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                 params: {
                     autoplay: 0
                 },
                 type: "iframe",
                 url: "//www.twitvid.com/embed.php?guid=$1"
             },
             twitpic: {
                 matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                 type: "image",
                 url: "//twitpic.com/show/full/$1/"
             },
             instagram: {
                 matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                 type: "image",
                 url: "//$1/p/$2/media/?size=l"
             },
             google_maps: {
                 matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                 type: "iframe",
                 url: function(e) {
                     return "//maps.google." + e[1] + "/" + e[3] + e[4] + "&output=" + (e[4].indexOf("layer=c") > 0 ? "svembed" : "embed")
                 }
             }
         },
         beforeLoad: function(a, o) {
             var i, r, m, l, c = o.href || "",
                 p = !1;
             for (i in a)
                 if (a.hasOwnProperty(i) && (r = a[i], m = c.match(r.matcher))) {
                     p = r.type, l = e.extend(!0, {}, r.params, o[i] || (e.isPlainObject(a[i]) ? a[i].params : null)), c = "function" === e.type(r.url) ? r.url.call(this, m, l, o) : t(r.url, m, l);
                     break
                 }
             p && (o.href = c, o.type = p, o.autoHeight = !1)
         }
     }
 }(jQuery);


 /* owl carousel */
 ! function(t, e, i, s) {
     function n(e, i) {
         this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this.drag = t.extend({}, p), this.state = t.extend({}, u), this.e = t.extend({}, g), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(n.Plugins, t.proxy(function(t, e) {
             this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
         }, this)), t.each(n.Pipe, t.proxy(function(e, i) {
             this._pipe.push({
                 filter: i.filter,
                 run: t.proxy(i.run, this)
             })
         }, this)), this.setup(), this.initialize()
     }

     function o(t) {
         if (t.touches !== s) return {
             x: t.touches[0].pageX,
             y: t.touches[0].pageY
         };
         if (t.touches === s) {
             if (t.pageX !== s) return {
                 x: t.pageX,
                 y: t.pageY
             };
             if (t.pageX === s) return {
                 x: t.clientX,
                 y: t.clientY
             }
         }
     }

     function r(t) {
         var e, s, n = i.createElement("div"),
             o = t;
         for (e in o)
             if (s = o[e], "undefined" != typeof n.style[s]) return n = null, [s, e];
         return [!1]
     }

     function a() {
         return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
     }

     function h() {
         return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
     }

     function l() {
         return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
     }

     function c() {
         return "ontouchstart" in e || !!navigator.msMaxTouchPoints
     }

     function d() {
         return e.navigator.msPointerEnabled
     }
     var p, u, g;
     p = {
         start: 0,
         startX: 0,
         startY: 0,
         current: 0,
         currentX: 0,
         currentY: 0,
         offsetX: 0,
         offsetY: 0,
         distance: null,
         startTime: 0,
         endTime: 0,
         updatedX: 0,
         targetEl: null
     }, u = {
         isTouch: !1,
         isScrolling: !1,
         isSwiping: !1,
         direction: !1,
         inMotion: !1
     }, g = {
         _onDragStart: null,
         _onDragMove: null,
         _onDragEnd: null,
         _transitionEnd: null,
         _resizer: null,
         _responsiveCall: null,
         _goToLoop: null,
         _checkVisibile: null
     }, n.Defaults = {
         items: 3,
         loop: !1,
         center: !1,
         mouseDrag: !0,
         touchDrag: !0,
         pullDrag: !0,
         freeDrag: !1,
         margin: 0,
         stagePadding: 0,
         merge: !1,
         mergeFit: !0,
         autoWidth: !1,
         startPosition: 0,
         rtl: !1,
         smartSpeed: 250,
         fluidSpeed: !1,
         dragEndSpeed: !1,
         responsive: {},
         responsiveRefreshRate: 200,
         responsiveBaseElement: e,
         responsiveClass: !1,
         fallbackEasing: "swing",
         info: !1,
         nestedItemSelector: !1,
         itemElement: "div",
         stageElement: "div",
         themeClass: "owl-theme",
         baseClass: "owl-carousel",
         itemClass: "owl-item",
         centerClass: "center",
         activeClass: "active"
     }, n.Width = {
         Default: "default",
         Inner: "inner",
         Outer: "outer"
     }, n.Plugins = {}, n.Pipe = [{
         filter: ["width", "items", "settings"],
         run: function(t) {
             t.current = this._items && this._items[this.relative(this._current)]
         }
     }, {
         filter: ["items", "settings"],
         run: function() {
             var t = this._clones,
                 e = this.$stage.children(".cloned");
             (e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
         }
     }, {
         filter: ["items", "settings"],
         run: function() {
             var t, e, i = this._clones,
                 s = this._items,
                 n = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
             for (t = 0, e = Math.abs(n / 2); e > t; t++) n > 0 ? (this.$stage.children().eq(s.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(s[i[i.length - 1]].clone().addClass("cloned")), i.push(s.length - 1 - (i.length - 1) / 2), this.$stage.prepend(s[i[i.length - 1]].clone().addClass("cloned")))
         }
     }, {
         filter: ["width", "items", "settings"],
         run: function() {
             var t, e, i, s = this.settings.rtl ? 1 : -1,
                 n = (this.width() / this.settings.items).toFixed(3),
                 o = 0;
             for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : n * t) * s, this._coordinates.push(o)
         }
     }, {
         filter: ["width", "items", "settings"],
         run: function() {
             var e, i, s = (this.width() / this.settings.items).toFixed(3),
                 n = {
                     width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                     "padding-left": this.settings.stagePadding || "",
                     "padding-right": this.settings.stagePadding || ""
                 };
             if (this.$stage.css(n), n = {
                     width: this.settings.autoWidth ? "auto" : s - this.settings.margin
                 }, n[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) {
                     return t > 1
                 }).length > 0)
                 for (e = 0, i = this._coordinates.length; i > e; e++) n.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(n);
             else this.$stage.children().css(n)
         }
     }, {
         filter: ["width", "items", "settings"],
         run: function(t) {
             t.current && this.reset(this.$stage.children().index(t.current))
         }
     }, {
         filter: ["position"],
         run: function() {
             this.animate(this.coordinates(this._current))
         }
     }, {
         filter: ["width", "position", "items", "settings"],
         run: function() {
             var t, e, i, s, n = this.settings.rtl ? 1 : -1,
                 o = 2 * this.settings.stagePadding,
                 r = this.coordinates(this.current()) + o,
                 a = r + this.width() * n,
                 h = [];
             for (i = 0, s = this._coordinates.length; s > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
             this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
         }
     }], n.prototype.initialize = function() {
         if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
             var e, i, n;
             if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(i).width(), e.length && 0 >= n) return this.preloadAutoWidthImages(e), !1
         }
         this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
     }, n.prototype.setup = function() {
         var e = this.viewport(),
             i = this.options.responsive,
             s = -1,
             n = null;
         i ? (t.each(i, function(t) {
             e >= t && t > s && (s = Number(t))
         }), n = t.extend({}, this.options, i[s]), delete n.responsive, n.responsiveClass && this.$element.attr("class", function(t, e) {
             return e.replace(/\b owl-responsive-\S+/g, "")
         }).addClass("owl-responsive-" + s)) : n = t.extend({}, this.options), (null === this.settings || this._breakpoint !== s) && (this.trigger("change", {
             property: {
                 name: "settings",
                 value: n
             }
         }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
             property: {
                 name: "settings",
                 value: this.settings
             }
         }))
     }, n.prototype.optionsLogic = function() {
         this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
     }, n.prototype.prepare = function(e) {
         var i = this.trigger("prepare", {
             content: e
         });
         return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
             content: i.data
         }), i.data
     }, n.prototype.update = function() {
         for (var e = 0, i = this._pipe.length, s = t.proxy(function(t) {
                 return this[t]
             }, this._invalidated), n = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
         this._invalidated = {}
     }, n.prototype.width = function(t) {
         switch (t = t || n.Width.Default) {
             case n.Width.Inner:
             case n.Width.Outer:
                 return this._width;
             default:
                 return this._width - 2 * this.settings.stagePadding + this.settings.margin
         }
     }, n.prototype.refresh = function() {
         if (0 === this._items.length) return !1;
         (new Date).getTime();
         this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed")
     }, n.prototype.eventsCall = function() {
         this.e._onDragStart = t.proxy(function(t) {
             this.onDragStart(t)
         }, this), this.e._onDragMove = t.proxy(function(t) {
             this.onDragMove(t)
         }, this), this.e._onDragEnd = t.proxy(function(t) {
             this.onDragEnd(t)
         }, this), this.e._onResize = t.proxy(function(t) {
             this.onResize(t)
         }, this), this.e._transitionEnd = t.proxy(function(t) {
             this.transitionEnd(t)
         }, this), this.e._preventClick = t.proxy(function(t) {
             this.preventClick(t)
         }, this)
     }, n.prototype.onThrottledResize = function() {
         e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
     }, n.prototype.onResize = function() {
         return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
     }, n.prototype.eventsRouter = function(t) {
         var e = t.type;
         "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
     }, n.prototype.internalEvents = function() {
         var i = (c(), d());
         this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) {
             this.eventsRouter(t)
         }, this)), this.$stage.on("dragstart", function() {
             return !1
         }), this.$stage.get(0).onselectstart = function() {
             return !1
         }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function(t) {
             this.eventsRouter(t)
         }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
     }, n.prototype.onDragStart = function(s) {
         var n, r, a, h;
         if (n = s.originalEvent || s || e.event, 3 === n.which || this.state.isTouch) return !1;
         if ("mousedown" === n.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = o(n).x, a = o(n).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) h = this.getTransformProperty(), this.drag.offsetX = h, this.animate(h), this.state.inMotion = !0;
         else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
         this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = n.target || n.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) {
             this.eventsRouter(t)
         }, this))
     }, n.prototype.onDragMove = function(t) {
         var i, n, r, a, h, l;
         this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, n = o(i).x, r = o(i).y, this.drag.currentX = n - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), h = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), l = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + l), h + l)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== s ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
     }, n.prototype.onDragEnd = function(e) {
         var s, n, o;
         if (this.state.isTouch) {
             if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
             this.drag.endTime = (new Date).getTime(), s = this.drag.endTime - this.drag.startTime, n = Math.abs(this.drag.distance), (n > 3 || s > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
         }
     }, n.prototype.removeClick = function(i) {
         this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() {
             t(i).off("click.preventClick")
         }, 300)
     }, n.prototype.preventClick = function(e) {
         e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
     }, n.prototype.getTransformProperty = function() {
         var t, i;
         return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12]
     }, n.prototype.closest = function(e) {
         var i = -1,
             s = 30,
             n = this.width(),
             o = this.coordinates();
         return this.settings.freeDrag || t.each(o, t.proxy(function(t, r) {
             return e > r - s && r + s > e ? i = t : this.op(e, "<", r) && this.op(e, ">", o[t + 1] || r - n) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
         }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
     }, n.prototype.animate = function(e) {
         this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
             transform: "translate3d(" + e + "px,0px, 0px)",
             transition: this.speed() / 1e3 + "s"
         }) : this.state.isTouch ? this.$stage.css({
             left: e + "px"
         }) : this.$stage.animate({
             left: e
         }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() {
             this.state.inMotion && this.transitionEnd()
         }, this))
     }, n.prototype.current = function(t) {
         if (t === s) return this._current;
         if (0 === this._items.length) return s;
         if (t = this.normalize(t), this._current !== t) {
             var e = this.trigger("change", {
                 property: {
                     name: "position",
                     value: t
                 }
             });
             e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                 property: {
                     name: "position",
                     value: this._current
                 }
             })
         }
         return this._current
     }, n.prototype.invalidate = function(t) {
         this._invalidated[t] = !0
     }, n.prototype.reset = function(t) {
         t = this.normalize(t), t !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
     }, n.prototype.normalize = function(e, i) {
         var n = i ? this._items.length : this._items.length + this._clones.length;
         return !t.isNumeric(e) || 1 > n ? s : e = this._clones.length ? (e % n + n) % n : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
     }, n.prototype.relative = function(t) {
         return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
     }, n.prototype.maximum = function(t) {
         var e, i, s, n = 0,
             o = this.settings;
         if (t) return this._items.length - 1;
         if (!o.loop && o.center) e = this._items.length - 1;
         else if (o.loop || o.center)
             if (o.loop || o.center) e = this._items.length + o.items;
             else {
                 if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";
                 for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                     (s = this.coordinates(n)) && !(s * revert >= i);) e = ++n
             }
         else e = this._items.length - o.items;
         return e
     }, n.prototype.minimum = function(t) {
         return t ? 0 : this._clones.length / 2
     }, n.prototype.items = function(t) {
         return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
     }, n.prototype.mergers = function(t) {
         return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
     }, n.prototype.clones = function(e) {
         var i = this._clones.length / 2,
             n = i + this._items.length,
             o = function(t) {
                 return t % 2 === 0 ? n + t / 2 : i - (t + 1) / 2
             };
         return e === s ? t.map(this._clones, function(t, e) {
             return o(e)
         }) : t.map(this._clones, function(t, i) {
             return t === e ? o(i) : null
         })
     }, n.prototype.speed = function(t) {
         return t !== s && (this._speed = t), this._speed
     }, n.prototype.coordinates = function(e) {
         var i = null;
         return e === s ? t.map(this._coordinates, t.proxy(function(t, e) {
             return this.coordinates(e)
         }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
     }, n.prototype.duration = function(t, e, i) {
         return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
     }, n.prototype.to = function(i, s) {
         if (this.settings.loop) {
             var n = i - this.relative(this.current()),
                 o = this.current(),
                 r = this.current(),
                 a = this.current() + n,
                 h = 0 > r - a ? !0 : !1,
                 l = this._clones.length + this._items.length;
             a < this.settings.items && h === !1 ? (o = r + this._items.length, this.reset(o)) : a >= l - this.settings.items && h === !0 && (o = r - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() {
                 this.speed(this.duration(this.current(), o + n, s)), this.current(o + n), this.update()
             }, this), 30)
         } else this.speed(this.duration(this.current(), i, s)), this.current(i), this.update()
     }, n.prototype.next = function(t) {
         t = t || !1, this.to(this.relative(this.current()) + 1, t)
     }, n.prototype.prev = function(t) {
         t = t || !1, this.to(this.relative(this.current()) - 1, t)
     }, n.prototype.transitionEnd = function(t) {
         return t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
     }, n.prototype.viewport = function() {
         var s;
         if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width();
         else if (e.innerWidth) s = e.innerWidth;
         else {
             if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
             s = i.documentElement.clientWidth
         }
         return s
     }, n.prototype.replace = function(e) {
         this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
             return 1 === this.nodeType
         }).each(t.proxy(function(t, e) {
             e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
         }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
     }, n.prototype.add = function(t, e) {
         e = e === s ? this._items.length : this.normalize(e, !0), this.trigger("add", {
             content: t,
             position: e
         }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
             content: t,
             position: e
         })
     }, n.prototype.remove = function(t) {
         t = this.normalize(t, !0), t !== s && (this.trigger("remove", {
             content: this._items[t],
             position: t
         }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
             content: null,
             position: t
         }))
     }, n.prototype.addTriggerableEvents = function() {
         var e = t.proxy(function(e, i) {
             return t.proxy(function(t) {
                 t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
             }, this)
         }, this);
         t.each({
             next: this.next,
             prev: this.prev,
             to: this.to,
             destroy: this.destroy,
             refresh: this.refresh,
             replace: this.replace,
             add: this.add,
             remove: this.remove
         }, t.proxy(function(t, i) {
             this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
         }, this))
     }, n.prototype.watchVisibility = function() {
         function i(t) {
             return t.offsetWidth > 0 && t.offsetHeight > 0
         }

         function s() {
             i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
         }
         i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(s, this), 500))
     }, n.prototype.preloadAutoWidthImages = function(e) {
         var i, s, n, o;
         i = 0, s = this, e.each(function(r, a) {
             n = t(a), o = new Image, o.onload = function() {
                 i++, n.attr("src", o.src), n.css("opacity", 1), i >= e.length && (s.state.imagesLoaded = !0, s.initialize())
             }, o.src = n.attr("src") || n.attr("data-src") || n.attr("data-src-retina")
         })
     }, n.prototype.destroy = function() {
         this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
         for (var s in this._plugins) this._plugins[s].destroy();
         (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
             return !1
         })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
     }, n.prototype.op = function(t, e, i) {
         var s = this.settings.rtl;
         switch (e) {
             case "<":
                 return s ? t > i : i > t;
             case ">":
                 return s ? i > t : t > i;
             case ">=":
                 return s ? i >= t : t >= i;
             case "<=":
                 return s ? t >= i : i >= t
         }
     }, n.prototype.on = function(t, e, i, s) {
         t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
     }, n.prototype.off = function(t, e, i, s) {
         t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
     }, n.prototype.trigger = function(e, i, s) {
         var n = {
                 item: {
                     count: this._items.length,
                     index: this.current()
                 }
             },
             o = t.camelCase(t.grep(["on", e, s], function(t) {
                 return t
             }).join("-").toLowerCase()),
             r = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
                 relatedTarget: this
             }, n, i));
         return this._supress[e] || (t.each(this._plugins, function(t, e) {
             e.onTrigger && e.onTrigger(r)
         }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, r)), r
     }, n.prototype.suppress = function(e) {
         t.each(e, t.proxy(function(t, e) {
             this._supress[e] = !0
         }, this))
     }, n.prototype.release = function(e) {
         t.each(e, t.proxy(function(t, e) {
             delete this._supress[e]
         }, this))
     }, n.prototype.browserSupport = function() {
         if (this.support3d = l(), this.support3d) {
             this.transformVendor = h();
             var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
             this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
         }
         this.state.orientation = e.orientation
     }, t.fn.owlCarousel = function(e) {
         return this.each(function() {
             t(this).data("owlCarousel") || t(this).data("owlCarousel", new n(this, e))
         })
     }, t.fn.owlCarousel.Constructor = n
 }(window.Zepto || window.jQuery, window, document),
 function(t, e, i, s) {
     var n = function(e) {
         this._core = e, this._loaded = [], this._handlers = {
             "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                 if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                     for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && -1 * s || 0, o = (e.property && e.property.value || this._core.current()) + n, r = this._core.clones().length, a = t.proxy(function(t, e) {
                             this.load(e)
                         }, this); n++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o++)), a)
             }, this)
         }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
     };
     n.Defaults = {
         lazyLoad: !1
     }, n.prototype.load = function(i) {
         var s = this._core.$stage.children().eq(i),
             n = s && s.find(".owl-lazy");
         !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function(i, s) {
             var n, o = t(s),
                 r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
             this._core.trigger("load", {
                 element: o,
                 url: r
             }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                 o.css("opacity", 1), this._core.trigger("loaded", {
                     element: o,
                     url: r
                 }, "lazy")
             }, this)).attr("src", r) : (n = new Image, n.onload = t.proxy(function() {
                 o.css({
                     "background-image": "url(" + r + ")",
                     opacity: "1"
                 }), this._core.trigger("loaded", {
                     element: o,
                     url: r
                 }, "lazy")
             }, this), n.src = r)
         }, this)), this._loaded.push(s.get(0)))
     }, n.prototype.destroy = function() {
         var t, e;
         for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
         for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
     }, t.fn.owlCarousel.Constructor.Plugins.Lazy = n
 }(window.Zepto || window.jQuery, window, document),
 function(t, e, i, s) {
     var n = function(e) {
         this._core = e, this._handlers = {
             "initialized.owl.carousel": t.proxy(function() {
                 this._core.settings.autoHeight && this.update()
             }, this),
             "changed.owl.carousel": t.proxy(function(t) {
                 this._core.settings.autoHeight && "position" == t.property.name && this.update()
             }, this),
             "loaded.owl.lazy": t.proxy(function(t) {
                 this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
             }, this)
         }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
     };
     n.Defaults = {
         autoHeight: !1,
         autoHeightClass: "owl-height"
     }, n.prototype.update = function() {
         this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
     }, n.prototype.destroy = function() {
         var t, e;
         for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
         for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
     }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
 }(window.Zepto || window.jQuery, window, document),
 function(t, e, i, s) {
     var n = function(e) {
         this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
             "resize.owl.carousel": t.proxy(function(t) {
                 this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
             }, this),
             "refresh.owl.carousel changed.owl.carousel": t.proxy(function(t) {
                 this._playing && this.stop()
             }, this),
             "prepared.owl.carousel": t.proxy(function(e) {
                 var i = t(e.content).find(".owl-video");
                 i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
             }, this)
         }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
             this.play(t)
         }, this))
     };
     n.Defaults = {
         video: !1,
         videoHeight: !1,
         videoWidth: !1
     }, n.prototype.fetch = function(t, e) {
         var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
             s = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
             n = t.attr("data-width") || this._core.settings.videoWidth,
             o = t.attr("data-height") || this._core.settings.videoHeight,
             r = t.attr("href");
         if (!r) throw new Error("Missing video URL.");
         if (s = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), s[3].indexOf("youtu") > -1) i = "youtube";
         else {
             if (!(s[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
             i = "vimeo"
         }
         s = s[6], this._videos[r] = {
             type: i,
             id: s,
             width: n,
             height: o
         }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
     }, n.prototype.thumbnail = function(e, i) {
         var s, n, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
             a = e.find("img"),
             h = "src",
             l = "",
             c = this._core.settings,
             d = function(t) {
                 n = '<div class="owl-video-play-icon"></div>', s = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + h + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after(n)
             };
         return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (h = "data-src", l = "owl-lazy"), a.length ? (d(a.attr(h)), a.remove(), !1) : void("youtube" === i.type ? (o = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(o)) : "vimeo" === i.type && t.ajax({
             type: "GET",
             url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
             jsonp: "callback",
             dataType: "jsonp",
             success: function(t) {
                 o = t[0].thumbnail_large, d(o)
             }
         }))
     }, n.prototype.stop = function() {
         this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
     }, n.prototype.play = function(e) {
         this._core.trigger("play", null, "video"), this._playing && this.stop();
         var i, s, n = t(e.target || e.srcElement),
             o = n.closest("." + this._core.settings.itemClass),
             r = this._videos[o.attr("data-video")],
             a = r.width || "100%",
             h = r.height || this._core.$stage.height();
         "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + h + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, s = t('<div style="height:' + h + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), n.after(s)
     }, n.prototype.isInFullScreen = function() {
         var s = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
         return s && t(s).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), s && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== e.orientation ? (this._core.state.orientation = e.orientation, !1) : !0
     }, n.prototype.destroy = function() {
         var t, e;
         this._core.$element.off("click.owl.video");
         for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
         for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
     }, t.fn.owlCarousel.Constructor.Plugins.Video = n
 }(window.Zepto || window.jQuery, window, document),
 function(t, e, i, s) {
     var n = function(e) {
         this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = {
             "change.owl.carousel": t.proxy(function(t) {
                 "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
             }, this),
             "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                 this.swapping = "translated" == t.type
             }, this),
             "translate.owl.carousel": t.proxy(function(t) {
                 this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
             }, this)
         }, this.core.$element.on(this.handlers)
     };
     n.Defaults = {
         animateOut: !1,
         animateIn: !1
     }, n.prototype.swap = function() {
         if (1 === this.core.settings.items && this.core.support3d) {
             this.core.speed(0);
             var e, i = t.proxy(this.clear, this),
                 s = this.core.$stage.children().eq(this.previous),
                 n = this.core.$stage.children().eq(this.next),
                 o = this.core.settings.animateIn,
                 r = this.core.settings.animateOut;
             this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.css({
                 left: e + "px"
             }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), o && n.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
         }
     }, n.prototype.clear = function(e) {
         t(e.target).css({
             left: ""
         }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
     }, n.prototype.destroy = function() {
         var t, e;
         for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
         for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
     }, t.fn.owlCarousel.Constructor.Plugins.Animate = n
 }(window.Zepto || window.jQuery, window, document),
 function(t, e, i, s) {
     var n = function(e) {
         this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options),
             this.handlers = {
                 "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
                     this.autoplay()
                 }, this),
                 "play.owl.autoplay": t.proxy(function(t, e, i) {
                     this.play(e, i)
                 }, this),
                 "stop.owl.autoplay": t.proxy(function() {
                     this.stop()
                 }, this),
                 "mouseover.owl.autoplay": t.proxy(function() {
                     this.core.settings.autoplayHoverPause && this.pause()
                 }, this),
                 "mouseleave.owl.autoplay": t.proxy(function() {
                     this.core.settings.autoplayHoverPause && this.autoplay()
                 }, this)
             }, this.core.$element.on(this.handlers)
     };
     n.Defaults = {
         autoplay: !1,
         autoplayTimeout: 5e3,
         autoplayHoverPause: !1,
         autoplaySpeed: !1
     }, n.prototype.autoplay = function() {
         this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() {
             this.play()
         }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
     }, n.prototype.play = function(t, s) {
         return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
     }, n.prototype.stop = function() {
         e.clearInterval(this.interval)
     }, n.prototype.pause = function() {
         e.clearInterval(this.interval)
     }, n.prototype.destroy = function() {
         var t, i;
         e.clearInterval(this.interval);
         for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
         for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
     }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
 }(window.Zepto || window.jQuery, window, document),
 function(t, e, i, s) {
     "use strict";
     var n = function(e) {
         this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
             next: this._core.next,
             prev: this._core.prev,
             to: this._core.to
         }, this._handlers = {
             "prepared.owl.carousel": t.proxy(function(e) {
                 this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
             }, this),
             "add.owl.carousel": t.proxy(function(e) {
                 this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
             }, this),
             "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) {
                 this._core.settings.dotsData && this._templates.splice(t.position, 1)
             }, this),
             "change.owl.carousel": t.proxy(function(t) {
                 if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                     var e = this._core.current(),
                         i = this._core.maximum(),
                         s = this._core.minimum();
                     t.data = t.property.value > i ? e >= i ? s : i : t.property.value < s ? i : t.property.value
                 }
             }, this),
             "changed.owl.carousel": t.proxy(function(t) {
                 "position" == t.property.name && this.draw()
             }, this),
             "refreshed.owl.carousel": t.proxy(function() {
                 this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
             }, this)
         }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
     };
     n.Defaults = {
         nav: !1,
         navRewind: !0,
         navText: ["prev", "next"],
         navSpeed: !1,
         navElement: "div",
         navContainer: !1,
         navContainerClass: "owl-nav",
         navClass: ["owl-prev", "owl-next"],
         slideBy: 1,
         dotClass: "owl-dot",
         dotsClass: "owl-dots",
         dots: !0,
         dotsEach: !1,
         dotData: !1,
         dotsSpeed: !1,
         dotsContainer: !1,
         controlsClass: "owl-controls"
     }, n.prototype.initialize = function() {
         var e, i, s = this._core.settings;
         s.dotsData || (this._templates = [t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]), s.navContainer && s.dotsContainer || (this._controls.$container = t("<div>").addClass(s.controlsClass).appendTo(this.$element)), this._controls.$indicators = s.dotsContainer ? t(s.dotsContainer) : t("<div>").hide().addClass(s.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
             var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
             e.preventDefault(), this.to(i, s.dotsSpeed)
         }, this)), e = s.navContainer ? t(s.navContainer) : t("<div>").addClass(s.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + s.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).hide().prependTo(e).on("click", t.proxy(function(t) {
             this.prev(s.navSpeed)
         }, this)), this._controls.$next.addClass(s.navClass[1]).html(s.navText[1]).hide().appendTo(e).on("click", t.proxy(function(t) {
             this.next(s.navSpeed)
         }, this));
         for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
     }, n.prototype.destroy = function() {
         var t, e, i, s;
         for (t in this._handlers) this.$element.off(t, this._handlers[t]);
         for (e in this._controls) this._controls[e].remove();
         for (s in this.overides) this._core[s] = this._overrides[s];
         for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
     }, n.prototype.update = function() {
         var t, e, i, s = this._core.settings,
             n = this._core.clones().length / 2,
             o = n + this._core.items().length,
             r = s.center || s.autoWidth || s.dotData ? 1 : s.dotsEach || s.items;
         if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
             for (this._pages = [], t = n, e = 0, i = 0; o > t; t++)(e >= r || 0 === e) && (this._pages.push({
                 start: t - n,
                 end: t - n + r - 1
             }), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
     }, n.prototype.draw = function() {
         var e, i, s = "",
             n = this._core.settings,
             o = (this._core.$stage.children(), this._core.relative(this._core.current()));
         if (!n.nav || n.loop || n.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(n.nav), this._controls.$next.toggle(n.nav), n.dots) {
             if (e = this._pages.length - this._controls.$indicators.children().length, n.dotData && 0 !== e) {
                 for (i = 0; i < this._controls.$indicators.children().length; i++) s += this._templates[this._core.relative(i)];
                 this._controls.$indicators.html(s)
             } else e > 0 ? (s = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(s)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
             this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
         }
         this._controls.$indicators.toggle(n.dots)
     }, n.prototype.onTrigger = function(e) {
         var i = this._core.settings;
         e.page = {
             index: t.inArray(this.current(), this._pages),
             count: this._pages.length,
             size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
         }
     }, n.prototype.current = function() {
         var e = this._core.relative(this._core.current());
         return t.grep(this._pages, function(t) {
             return t.start <= e && t.end >= e
         }).pop()
     }, n.prototype.getPosition = function(e) {
         var i, s, n = this._core.settings;
         return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
     }, n.prototype.next = function(e) {
         t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
     }, n.prototype.prev = function(e) {
         t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
     }, n.prototype.to = function(e, i, s) {
         var n;
         s ? t.proxy(this._overrides.to, this._core)(e, i) : (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i))
     }, t.fn.owlCarousel.Constructor.Plugins.Navigation = n
 }(window.Zepto || window.jQuery, window, document),
 function(t, e, i, s) {
     "use strict";
     var n = function(i) {
         this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
             "initialized.owl.carousel": t.proxy(function() {
                 "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
             }, this),
             "prepared.owl.carousel": t.proxy(function(e) {
                 var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                 this._hashes[i] = e.content
             }, this)
         }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
             var t = e.location.hash.substring(1),
                 i = this._core.$stage.children(),
                 s = this._hashes[t] && i.index(this._hashes[t]) || 0;
             return t ? void this._core.to(s, !1, !0) : !1
         }, this))
     };
     n.Defaults = {
         URLhashListener: !1
     }, n.prototype.destroy = function() {
         var i, s;
         t(e).off("hashchange.owl.navigation");
         for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
         for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
     }, t.fn.owlCarousel.Constructor.Plugins.Hash = n
 }(window.Zepto || window.jQuery, window, document);


 /* isotope */
 ! function(a) {
     function b() {}

     function c(a) {
         function c(b) {
             b.prototype.option || (b.prototype.option = function(b) {
                 a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
             })
         }

         function e(b, c) {
             a.fn[b] = function(e) {
                 if ("string" == typeof e) {
                     for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                         var j = this[h],
                             k = a.data(j, b);
                         if (k)
                             if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                 var l = k[e].apply(k, g);
                                 if (void 0 !== l) return l
                             } else f("no such method '" + e + "' for " + b + " instance");
                         else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                     }
                     return this
                 }
                 return this.each(function() {
                     var d = a.data(this, b);
                     d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                 })
             }
         }
         if (a) {
             var f = "undefined" == typeof console ? b : function(a) {
                 console.error(a)
             };
             return a.bridget = function(a, b) {
                 c(b), e(a, b)
             }, a.bridget
         }
     }
     var d = Array.prototype.slice;
     "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
 }(window),
 function(a) {
     function b(b) {
         var c = a.event;
         return c.target = c.target || c.srcElement || b, c
     }
     var c = document.documentElement,
         d = function() {};
     c.addEventListener ? d = function(a, b, c) {
         a.addEventListener(b, c, !1)
     } : c.attachEvent && (d = function(a, c, d) {
         a[c + d] = d.handleEvent ? function() {
             var c = b(a);
             d.handleEvent.call(d, c)
         } : function() {
             var c = b(a);
             d.call(a, c)
         }, a.attachEvent("on" + c, a[c + d])
     });
     var e = function() {};
     c.removeEventListener ? e = function(a, b, c) {
         a.removeEventListener(b, c, !1)
     } : c.detachEvent && (e = function(a, b, c) {
         a.detachEvent("on" + b, a[b + c]);
         try {
             delete a[b + c]
         } catch (d) {
             a[b + c] = void 0
         }
     });
     var f = {
         bind: d,
         unbind: e
     };
     "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
 }(window),
 function() {
     "use strict";

     function a() {}

     function b(a, b) {
         for (var c = a.length; c--;)
             if (a[c].listener === b) return c;
         return -1
     }

     function c(a) {
         return function() {
             return this[a].apply(this, arguments)
         }
     }
     var d = a.prototype,
         e = this,
         f = e.EventEmitter;
     d.getListeners = function(a) {
         var b, c, d = this._getEvents();
         if (a instanceof RegExp) {
             b = {};
             for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
         } else b = d[a] || (d[a] = []);
         return b
     }, d.flattenListeners = function(a) {
         var b, c = [];
         for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
         return c
     }, d.getListenersAsObject = function(a) {
         var b, c = this.getListeners(a);
         return c instanceof Array && (b = {}, b[a] = c), b || c
     }, d.addListener = function(a, c) {
         var d, e = this.getListenersAsObject(a),
             f = "object" == typeof c;
         for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
             listener: c,
             once: !1
         });
         return this
     }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
         return this.addListener(a, {
             listener: b,
             once: !0
         })
     }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
         return this.getListeners(a), this
     }, d.defineEvents = function(a) {
         for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
         return this
     }, d.removeListener = function(a, c) {
         var d, e, f = this.getListenersAsObject(a);
         for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
         return this
     }, d.off = c("removeListener"), d.addListeners = function(a, b) {
         return this.manipulateListeners(!1, a, b)
     }, d.removeListeners = function(a, b) {
         return this.manipulateListeners(!0, a, b)
     }, d.manipulateListeners = function(a, b, c) {
         var d, e, f = a ? this.removeListener : this.addListener,
             g = a ? this.removeListeners : this.addListeners;
         if ("object" != typeof b || b instanceof RegExp)
             for (d = c.length; d--;) f.call(this, b, c[d]);
         else
             for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
         return this
     }, d.removeEvent = function(a) {
         var b, c = typeof a,
             d = this._getEvents();
         if ("string" === c) delete d[a];
         else if (a instanceof RegExp)
             for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
         else delete this._events;
         return this
     }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
         var c, d, e, f, g = this.getListenersAsObject(a);
         for (e in g)
             if (g.hasOwnProperty(e))
                 for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
         return this
     }, d.trigger = c("emitEvent"), d.emit = function(a) {
         var b = Array.prototype.slice.call(arguments, 1);
         return this.emitEvent(a, b)
     }, d.setOnceReturnValue = function(a) {
         return this._onceReturnValue = a, this
     }, d._getOnceReturnValue = function() {
         return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
     }, d._getEvents = function() {
         return this._events || (this._events = {})
     }, a.noConflict = function() {
         return e.EventEmitter = f, a
     }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
         return a
     }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
 }.call(this),
     function(a) {
         function b(a) {
             if (a) {
                 if ("string" == typeof d[a]) return a;
                 a = a.charAt(0).toUpperCase() + a.slice(1);
                 for (var b, e = 0, f = c.length; f > e; e++)
                     if (b = c[e] + a, "string" == typeof d[b]) return b
             }
         }
         var c = "Webkit Moz ms Ms O".split(" "),
             d = document.documentElement.style;
         "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
             return b
         }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
     }(window),
     function(a, b) {
         function c(a) {
             var b = parseFloat(a),
                 c = -1 === a.indexOf("%") && !isNaN(b);
             return c && b
         }

         function d() {}

         function e() {
             for (var a = {
                     width: 0,
                     height: 0,
                     innerWidth: 0,
                     innerHeight: 0,
                     outerWidth: 0,
                     outerHeight: 0
                 }, b = 0, c = h.length; c > b; b++) {
                 var d = h[b];
                 a[d] = 0
             }
             return a
         }

         function f(b) {
             function d() {
                 if (!m) {
                     m = !0;
                     var d = a.getComputedStyle;
                     if (j = function() {
                             var a = d ? function(a) {
                                 return d(a, null)
                             } : function(a) {
                                 return a.currentStyle
                             };
                             return function(b) {
                                 var c = a(b);
                                 return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                             }
                         }(), k = b("boxSizing")) {
                         var e = document.createElement("div");
                         e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                         var f = document.body || document.documentElement;
                         f.appendChild(e);
                         var h = j(e);
                         l = 200 === c(h.width), f.removeChild(e)
                     }
                 }
             }

             function f(a) {
                 if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                     var b = j(a);
                     if ("none" === b.display) return e();
                     var f = {};
                     f.width = a.offsetWidth, f.height = a.offsetHeight;
                     for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
                         var o = h[m],
                             p = b[o];
                         p = i(a, p);
                         var q = parseFloat(p);
                         f[o] = isNaN(q) ? 0 : q
                     }
                     var r = f.paddingLeft + f.paddingRight,
                         s = f.paddingTop + f.paddingBottom,
                         t = f.marginLeft + f.marginRight,
                         u = f.marginTop + f.marginBottom,
                         v = f.borderLeftWidth + f.borderRightWidth,
                         w = f.borderTopWidth + f.borderBottomWidth,
                         x = g && l,
                         y = c(b.width);
                     y !== !1 && (f.width = y + (x ? 0 : r + v));
                     var z = c(b.height);
                     return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
                 }
             }

             function i(b, c) {
                 if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
                 var d = b.style,
                     e = d.left,
                     f = b.runtimeStyle,
                     g = f && f.left;
                 return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
             }
             var j, k, l, m = !1;
             return f
         }
         var g = "undefined" == typeof console ? d : function(a) {
                 console.error(a)
             },
             h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
         "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
     }(window),
     function(a) {
         function b(a) {
             "function" == typeof a && (b.isReady ? a() : g.push(a))
         }

         function c(a) {
             var c = "readystatechange" === a.type && "complete" !== f.readyState;
             b.isReady || c || d()
         }

         function d() {
             b.isReady = !0;
             for (var a = 0, c = g.length; c > a; a++) {
                 var d = g[a];
                 d()
             }
         }

         function e(e) {
             return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
         }
         var f = a.document,
             g = [];
         b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
     }(window),
     function(a) {
         "use strict";

         function b(a, b) {
             return a[g](b)
         }

         function c(a) {
             if (!a.parentNode) {
                 var b = document.createDocumentFragment();
                 b.appendChild(a)
             }
         }

         function d(a, b) {
             c(a);
             for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
                 if (d[e] === a) return !0;
             return !1
         }

         function e(a, d) {
             return c(a), b(a, d)
         }
         var f, g = function() {
             if (a.matches) return "matches";
             if (a.matchesSelector) return "matchesSelector";
             for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
                 var e = b[c],
                     f = e + "MatchesSelector";
                 if (a[f]) return f
             }
         }();
         if (g) {
             var h = document.createElement("div"),
                 i = b(h, "div");
             f = i ? b : e
         } else f = d;
         "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
             return f
         }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
     }(Element.prototype),
     function(a, b) {
         "use strict";
         "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(c, d) {
             return b(a, c, d)
         }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
     }(window, function(a, b, c) {
         var d = {};
         d.extend = function(a, b) {
             for (var c in b) a[c] = b[c];
             return a
         }, d.modulo = function(a, b) {
             return (a % b + b) % b
         };
         var e = Object.prototype.toString;
         d.isArray = function(a) {
             return "[object Array]" == e.call(a)
         }, d.makeArray = function(a) {
             var b = [];
             if (d.isArray(a)) b = a;
             else if (a && "number" == typeof a.length)
                 for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
             else b.push(a);
             return b
         }, d.indexOf = Array.prototype.indexOf ? function(a, b) {
             return a.indexOf(b)
         } : function(a, b) {
             for (var c = 0, d = a.length; d > c; c++)
                 if (a[c] === b) return c;
             return -1
         }, d.removeFrom = function(a, b) {
             var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
         }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
             return a instanceof HTMLElement
         } : function(a) {
             return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
         }, d.setText = function() {
             function a(a, c) {
                 b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
             }
             var b;
             return a
         }(), d.getParent = function(a, b) {
             for (; a != document.body;)
                 if (a = a.parentNode, c(a, b)) return a
         }, d.getQueryElement = function(a) {
             return "string" == typeof a ? document.querySelector(a) : a
         }, d.handleEvent = function(a) {
             var b = "on" + a.type;
             this[b] && this[b](a)
         }, d.filterFindElements = function(a, b) {
             a = d.makeArray(a);
             for (var e = [], f = 0, g = a.length; g > f; f++) {
                 var h = a[f];
                 if (d.isElement(h))
                     if (b) {
                         c(h, b) && e.push(h);
                         for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
                     } else e.push(h)
             }
             return e
         }, d.debounceMethod = function(a, b, c) {
             var d = a.prototype[b],
                 e = b + "Timeout";
             a.prototype[b] = function() {
                 var a = this[e];
                 a && clearTimeout(a);
                 var b = arguments,
                     f = this;
                 this[e] = setTimeout(function() {
                     d.apply(f, b), delete f[e]
                 }, c || 100)
             }
         }, d.toDashed = function(a) {
             return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                 return b + "-" + c
             }).toLowerCase()
         };
         var f = a.console;
         return d.htmlInit = function(c, e) {
             b(function() {
                 for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                     var k, l = g[i],
                         m = l.getAttribute(h);
                     try {
                         k = m && JSON.parse(m)
                     } catch (n) {
                         f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                         continue
                     }
                     var o = new c(l, k),
                         p = a.jQuery;
                     p && p.data(l, e, o)
                 }
             })
         }, d
     }),
     function(a, b) {
         "use strict";
         "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(c, d, e, f) {
             return b(a, c, d, e, f)
         }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
     }(window, function(a, b, c, d, e) {
         "use strict";

         function f(a) {
             for (var b in a) return !1;
             return b = null, !0
         }

         function g(a, b) {
             a && (this.element = a, this.layout = b, this.position = {
                 x: 0,
                 y: 0
             }, this._create())
         }

         function h(a) {
             return a.replace(/([A-Z])/g, function(a) {
                 return "-" + a.toLowerCase()
             })
         }
         var i = a.getComputedStyle,
             j = i ? function(a) {
                 return i(a, null)
             } : function(a) {
                 return a.currentStyle
             },
             k = d("transition"),
             l = d("transform"),
             m = k && l,
             n = !!d("perspective"),
             o = {
                 WebkitTransition: "webkitTransitionEnd",
                 MozTransition: "transitionend",
                 OTransition: "otransitionend",
                 transition: "transitionend"
             }[k],
             p = ["transform", "transition", "transitionDuration", "transitionProperty"],
             q = function() {
                 for (var a = {}, b = 0, c = p.length; c > b; b++) {
                     var e = p[b],
                         f = d(e);
                     f && f !== e && (a[e] = f)
                 }
                 return a
             }();
         e.extend(g.prototype, b.prototype), g.prototype._create = function() {
             this._transn = {
                 ingProperties: {},
                 clean: {},
                 onEnd: {}
             }, this.css({
                 position: "absolute"
             })
         }, g.prototype.handleEvent = function(a) {
             var b = "on" + a.type;
             this[b] && this[b](a)
         }, g.prototype.getSize = function() {
             this.size = c(this.element)
         }, g.prototype.css = function(a) {
             var b = this.element.style;
             for (var c in a) {
                 var d = q[c] || c;
                 b[d] = a[c]
             }
         }, g.prototype.getPosition = function() {
             var a = j(this.element),
                 b = this.layout.options,
                 c = b.isOriginLeft,
                 d = b.isOriginTop,
                 e = a[c ? "left" : "right"],
                 f = a[d ? "top" : "bottom"],
                 g = this.layout.size,
                 h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
                 i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
             h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
         }, g.prototype.layoutPosition = function() {
             var a = this.layout.size,
                 b = this.layout.options,
                 c = {},
                 d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
                 e = b.isOriginLeft ? "left" : "right",
                 f = b.isOriginLeft ? "right" : "left",
                 g = this.position.x + a[d];
             c[e] = this.getXValue(g), c[f] = "";
             var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
                 i = b.isOriginTop ? "top" : "bottom",
                 j = b.isOriginTop ? "bottom" : "top",
                 k = this.position.y + a[h];
             c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
         }, g.prototype.getXValue = function(a) {
             var b = this.layout.options;
             return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
         }, g.prototype.getYValue = function(a) {
             var b = this.layout.options;
             return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
         }, g.prototype._transitionTo = function(a, b) {
             this.getPosition();
             var c = this.position.x,
                 d = this.position.y,
                 e = parseInt(a, 10),
                 f = parseInt(b, 10),
                 g = e === this.position.x && f === this.position.y;
             if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
             var h = a - c,
                 i = b - d,
                 j = {};
             j.transform = this.getTranslate(h, i), this.transition({
                 to: j,
                 onTransitionEnd: {
                     transform: this.layoutPosition
                 },
                 isCleaning: !0
             })
         }, g.prototype.getTranslate = function(a, b) {
             var c = this.layout.options;
             return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
         }, g.prototype.goTo = function(a, b) {
             this.setPosition(a, b), this.layoutPosition()
         }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function(a, b) {
             this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
         }, g.prototype._nonTransition = function(a) {
             this.css(a.to), a.isCleaning && this._removeStyles(a.to);
             for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
         }, g.prototype._transition = function(a) {
             if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
             var b = this._transn;
             for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
             for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
             if (a.from) {
                 this.css(a.from);
                 var d = this.element.offsetHeight;
                 d = null
             }
             this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
         };
         var r = "opacity," + h(q.transform || "transform");
         g.prototype.enableTransition = function() {
             this.isTransitioning || (this.css({
                 transitionProperty: r,
                 transitionDuration: this.layout.options.transitionDuration
             }), this.element.addEventListener(o, this, !1))
         }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function(a) {
             this.ontransitionend(a)
         }, g.prototype.onotransitionend = function(a) {
             this.ontransitionend(a)
         };
         var s = {
             "-webkit-transform": "transform",
             "-moz-transform": "transform",
             "-o-transform": "transform"
         };
         g.prototype.ontransitionend = function(a) {
             if (a.target === this.element) {
                 var b = this._transn,
                     c = s[a.propertyName] || a.propertyName;
                 if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                     var d = b.onEnd[c];
                     d.call(this), delete b.onEnd[c]
                 }
                 this.emitEvent("transitionEnd", [this])
             }
         }, g.prototype.disableTransition = function() {
             this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
         }, g.prototype._removeStyles = function(a) {
             var b = {};
             for (var c in a) b[c] = "";
             this.css(b)
         };
         var t = {
             transitionProperty: "",
             transitionDuration: ""
         };
         return g.prototype.removeTransitionStyles = function() {
             this.css(t)
         }, g.prototype.removeElem = function() {
             this.element.parentNode.removeChild(this.element), this.css({
                 display: ""
             }), this.emitEvent("remove", [this])
         }, g.prototype.remove = function() {
             if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
             var a = this;
             this.once("transitionEnd", function() {
                 a.removeElem()
             }), this.hide()
         }, g.prototype.reveal = function() {
             delete this.isHidden, this.css({
                 display: ""
             });
             var a = this.layout.options,
                 b = {},
                 c = this.getHideRevealTransitionEndProperty("visibleStyle");
             b[c] = this.onRevealTransitionEnd, this.transition({
                 from: a.hiddenStyle,
                 to: a.visibleStyle,
                 isCleaning: !0,
                 onTransitionEnd: b
             })
         }, g.prototype.onRevealTransitionEnd = function() {
             this.isHidden || this.emitEvent("reveal")
         }, g.prototype.getHideRevealTransitionEndProperty = function(a) {
             var b = this.layout.options[a];
             if (b.opacity) return "opacity";
             for (var c in b) return c
         }, g.prototype.hide = function() {
             this.isHidden = !0, this.css({
                 display: ""
             });
             var a = this.layout.options,
                 b = {},
                 c = this.getHideRevealTransitionEndProperty("hiddenStyle");
             b[c] = this.onHideTransitionEnd, this.transition({
                 from: a.visibleStyle,
                 to: a.hiddenStyle,
                 isCleaning: !0,
                 onTransitionEnd: b
             })
         }, g.prototype.onHideTransitionEnd = function() {
             this.isHidden && (this.css({
                 display: "none"
             }), this.emitEvent("hide"))
         }, g.prototype.destroy = function() {
             this.css({
                 position: "",
                 left: "",
                 right: "",
                 top: "",
                 bottom: "",
                 transition: "",
                 transform: ""
             })
         }, g
     }),
     function(a, b) {
         "use strict";
         "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f, g) {
             return b(a, c, d, e, f, g)
         }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
     }(window, function(a, b, c, d, e, f) {
         "use strict";

         function g(a, b) {
             var c = e.getQueryElement(a);
             if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
             this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
             var d = ++k;
             this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
         }
         var h = a.console,
             i = a.jQuery,
             j = function() {},
             k = 0,
             l = {};
         return g.namespace = "outlayer", g.Item = f, g.defaults = {
             containerStyle: {
                 position: "relative"
             },
             isInitLayout: !0,
             isOriginLeft: !0,
             isOriginTop: !0,
             isResizeBound: !0,
             isResizingContainer: !0,
             transitionDuration: "0.4s",
             hiddenStyle: {
                 opacity: 0,
                 transform: "scale(0.001)"
             },
             visibleStyle: {
                 opacity: 1,
                 transform: "scale(1)"
             }
         }, e.extend(g.prototype, c.prototype), g.prototype.option = function(a) {
             e.extend(this.options, a)
         }, g.prototype._create = function() {
             this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
         }, g.prototype.reloadItems = function() {
             this.items = this._itemize(this.element.children)
         }, g.prototype._itemize = function(a) {
             for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                 var g = b[e],
                     h = new c(g, this);
                 d.push(h)
             }
             return d
         }, g.prototype._filterFindItemElements = function(a) {
             return e.filterFindElements(a, this.options.itemSelector)
         }, g.prototype.getItemElements = function() {
             for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
             return a
         }, g.prototype.layout = function() {
             this._resetLayout(), this._manageStamps();
             var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
             this.layoutItems(this.items, a), this._isLayoutInited = !0
         }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
             this.getSize()
         }, g.prototype.getSize = function() {
             this.size = d(this.element)
         }, g.prototype._getMeasurement = function(a, b) {
             var c, f = this.options[a];
             f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
         }, g.prototype.layoutItems = function(a, b) {
             a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
         }, g.prototype._getItemsForLayout = function(a) {
             for (var b = [], c = 0, d = a.length; d > c; c++) {
                 var e = a[c];
                 e.isIgnored || b.push(e)
             }
             return b
         }, g.prototype._layoutItems = function(a, b) {
             if (this._emitCompleteOnItems("layout", a), a && a.length) {
                 for (var c = [], d = 0, e = a.length; e > d; d++) {
                     var f = a[d],
                         g = this._getItemLayoutPosition(f);
                     g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
                 }
                 this._processLayoutQueue(c)
             }
         }, g.prototype._getItemLayoutPosition = function() {
             return {
                 x: 0,
                 y: 0
             }
         }, g.prototype._processLayoutQueue = function(a) {
             for (var b = 0, c = a.length; c > b; b++) {
                 var d = a[b];
                 this._positionItem(d.item, d.x, d.y, d.isInstant)
             }
         }, g.prototype._positionItem = function(a, b, c, d) {
             d ? a.goTo(b, c) : a.moveTo(b, c)
         }, g.prototype._postLayout = function() {
             this.resizeContainer()
         }, g.prototype.resizeContainer = function() {
             if (this.options.isResizingContainer) {
                 var a = this._getContainerSize();
                 a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
             }
         }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function(a, b) {
             if (void 0 !== a) {
                 var c = this.size;
                 c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
             }
         }, g.prototype._emitCompleteOnItems = function(a, b) {
             function c() {
                 e.dispatchEvent(a + "Complete", null, [b])
             }

             function d() {
                 g++, g === f && c()
             }
             var e = this,
                 f = b.length;
             if (!b || !f) return void c();
             for (var g = 0, h = 0, i = b.length; i > h; h++) {
                 var j = b[h];
                 j.once(a, d)
             }
         }, g.prototype.dispatchEvent = function(a, b, c) {
             var d = b ? [b].concat(c) : c;
             if (this.emitEvent(a, d), i)
                 if (this.$element = this.$element || i(this.element), b) {
                     var e = i.Event(b);
                     e.type = a, this.$element.trigger(e, c)
                 } else this.$element.trigger(a, c)
         }, g.prototype.ignore = function(a) {
             var b = this.getItem(a);
             b && (b.isIgnored = !0)
         }, g.prototype.unignore = function(a) {
             var b = this.getItem(a);
             b && delete b.isIgnored
         }, g.prototype.stamp = function(a) {
             if (a = this._find(a)) {
                 this.stamps = this.stamps.concat(a);
                 for (var b = 0, c = a.length; c > b; b++) {
                     var d = a[b];
                     this.ignore(d)
                 }
             }
         }, g.prototype.unstamp = function(a) {
             if (a = this._find(a))
                 for (var b = 0, c = a.length; c > b; b++) {
                     var d = a[b];
                     e.removeFrom(this.stamps, d), this.unignore(d)
                 }
         }, g.prototype._find = function(a) {
             return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
         }, g.prototype._manageStamps = function() {
             if (this.stamps && this.stamps.length) {
                 this._getBoundingRect();
                 for (var a = 0, b = this.stamps.length; b > a; a++) {
                     var c = this.stamps[a];
                     this._manageStamp(c)
                 }
             }
         }, g.prototype._getBoundingRect = function() {
             var a = this.element.getBoundingClientRect(),
                 b = this.size;
             this._boundingRect = {
                 left: a.left + b.paddingLeft + b.borderLeftWidth,
                 top: a.top + b.paddingTop + b.borderTopWidth,
                 right: a.right - (b.paddingRight + b.borderRightWidth),
                 bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
             }
         }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function(a) {
             var b = a.getBoundingClientRect(),
                 c = this._boundingRect,
                 e = d(a),
                 f = {
                     left: b.left - c.left - e.marginLeft,
                     top: b.top - c.top - e.marginTop,
                     right: c.right - b.right - e.marginRight,
                     bottom: c.bottom - b.bottom - e.marginBottom
                 };
             return f
         }, g.prototype.handleEvent = function(a) {
             var b = "on" + a.type;
             this[b] && this[b](a)
         }, g.prototype.bindResize = function() {
             this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
         }, g.prototype.unbindResize = function() {
             this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
         }, g.prototype.onresize = function() {
             function a() {
                 b.resize(), delete b.resizeTimeout
             }
             this.resizeTimeout && clearTimeout(this.resizeTimeout);
             var b = this;
             this.resizeTimeout = setTimeout(a, 100)
         }, g.prototype.resize = function() {
             this.isResizeBound && this.needsResizeLayout() && this.layout()
         }, g.prototype.needsResizeLayout = function() {
             var a = d(this.element),
                 b = this.size && a;
             return b && a.innerWidth !== this.size.innerWidth
         }, g.prototype.addItems = function(a) {
             var b = this._itemize(a);
             return b.length && (this.items = this.items.concat(b)), b
         }, g.prototype.appended = function(a) {
             var b = this.addItems(a);
             b.length && (this.layoutItems(b, !0), this.reveal(b))
         }, g.prototype.prepended = function(a) {
             var b = this._itemize(a);
             if (b.length) {
                 var c = this.items.slice(0);
                 this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
             }
         }, g.prototype.reveal = function(a) {
             this._emitCompleteOnItems("reveal", a);
             for (var b = a && a.length, c = 0; b && b > c; c++) {
                 var d = a[c];
                 d.reveal()
             }
         }, g.prototype.hide = function(a) {
             this._emitCompleteOnItems("hide", a);
             for (var b = a && a.length, c = 0; b && b > c; c++) {
                 var d = a[c];
                 d.hide()
             }
         }, g.prototype.revealItemElements = function(a) {
             var b = this.getItems(a);
             this.reveal(b)
         }, g.prototype.hideItemElements = function(a) {
             var b = this.getItems(a);
             this.hide(b)
         }, g.prototype.getItem = function(a) {
             for (var b = 0, c = this.items.length; c > b; b++) {
                 var d = this.items[b];
                 if (d.element === a) return d
             }
         }, g.prototype.getItems = function(a) {
             a = e.makeArray(a);
             for (var b = [], c = 0, d = a.length; d > c; c++) {
                 var f = a[c],
                     g = this.getItem(f);
                 g && b.push(g)
             }
             return b
         }, g.prototype.remove = function(a) {
             var b = this.getItems(a);
             if (this._emitCompleteOnItems("remove", b), b && b.length)
                 for (var c = 0, d = b.length; d > c; c++) {
                     var f = b[c];
                     f.remove(), e.removeFrom(this.items, f)
                 }
         }, g.prototype.destroy = function() {
             var a = this.element.style;
             a.height = "", a.position = "", a.width = "";
             for (var b = 0, c = this.items.length; c > b; b++) {
                 var d = this.items[b];
                 d.destroy()
             }
             this.unbindResize();
             var e = this.element.outlayerGUID;
             delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
         }, g.data = function(a) {
             a = e.getQueryElement(a);
             var b = a && a.outlayerGUID;
             return b && l[b]
         }, g.create = function(a, b) {
             function c() {
                 g.apply(this, arguments)
             }
             return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function() {
                 f.apply(this, arguments)
             }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
         }, g.Item = f, g
     }),
     function(a, b) {
         "use strict";
         "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
     }(window, function(a) {
         "use strict";

         function b() {
             a.Item.apply(this, arguments)
         }
         b.prototype = new a.Item, b.prototype._create = function() {
             this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
         }, b.prototype.updateSortData = function() {
             if (!this.isIgnored) {
                 this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                 var a = this.layout.options.getSortData,
                     b = this.layout._sorters;
                 for (var c in a) {
                     var d = b[c];
                     this.sortData[c] = d(this.element, this)
                 }
             }
         };
         var c = b.prototype.destroy;
         return b.prototype.destroy = function() {
             c.apply(this, arguments), this.css({
                 display: ""
             })
         }, b
     }),
     function(a, b) {
         "use strict";
         "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
     }(window, function(a, b) {
         "use strict";

         function c(a) {
             this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
         }
         return function() {
             function a(a) {
                 return function() {
                     return b.prototype[a].apply(this.isotope, arguments)
                 }
             }
             for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
                 var g = d[e];
                 c.prototype[g] = a(g)
             }
         }(), c.prototype.needsVerticalResizeLayout = function() {
             var b = a(this.isotope.element),
                 c = this.isotope.size && b;
             return c && b.innerHeight != this.isotope.size.innerHeight
         }, c.prototype._getMeasurement = function() {
             this.isotope._getMeasurement.apply(this, arguments)
         }, c.prototype.getColumnWidth = function() {
             this.getSegmentSize("column", "Width")
         }, c.prototype.getRowHeight = function() {
             this.getSegmentSize("row", "Height")
         }, c.prototype.getSegmentSize = function(a, b) {
             var c = a + b,
                 d = "outer" + b;
             if (this._getMeasurement(c, d), !this[c]) {
                 var e = this.getFirstItemSize();
                 this[c] = e && e[d] || this.isotope.size["inner" + b]
             }
         }, c.prototype.getFirstItemSize = function() {
             var b = this.isotope.filteredItems[0];
             return b && b.element && a(b.element)
         }, c.prototype.layout = function() {
             this.isotope.layout.apply(this.isotope, arguments)
         }, c.prototype.getSize = function() {
             this.isotope.getSize(), this.size = this.isotope.size
         }, c.modes = {}, c.create = function(a, b) {
             function d() {
                 c.apply(this, arguments)
             }
             return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
         }, c
     }),
     function(a, b) {
         "use strict";
         "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
     }(window, function(a, b, c) {
         var d = a.create("masonry");
         return d.prototype._resetLayout = function() {
             this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
             var a = this.cols;
             for (this.colYs = []; a--;) this.colYs.push(0);
             this.maxY = 0
         }, d.prototype.measureColumns = function() {
             if (this.getContainerWidth(), !this.columnWidth) {
                 var a = this.items[0],
                     c = a && a.element;
                 this.columnWidth = c && b(c).outerWidth || this.containerWidth
             }
             var d = this.columnWidth += this.gutter,
                 e = this.containerWidth + this.gutter,
                 f = e / d,
                 g = d - e % d,
                 h = g && 1 > g ? "round" : "floor";
             f = Math[h](f), this.cols = Math.max(f, 1)
         }, d.prototype.getContainerWidth = function() {
             var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                 c = b(a);
             this.containerWidth = c && c.innerWidth
         }, d.prototype._getItemLayoutPosition = function(a) {
             a.getSize();
             var b = a.size.outerWidth % this.columnWidth,
                 d = b && 1 > b ? "round" : "ceil",
                 e = Math[d](a.size.outerWidth / this.columnWidth);
             e = Math.min(e, this.cols);
             for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
                     x: this.columnWidth * h,
                     y: g
                 }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
             return i
         }, d.prototype._getColGroup = function(a) {
             if (2 > a) return this.colYs;
             for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                 var e = this.colYs.slice(d, d + a);
                 b[d] = Math.max.apply(Math, e)
             }
             return b
         }, d.prototype._manageStamp = function(a) {
             var c = b(a),
                 d = this._getElementOffset(a),
                 e = this.options.isOriginLeft ? d.left : d.right,
                 f = e + c.outerWidth,
                 g = Math.floor(e / this.columnWidth);
             g = Math.max(0, g);
             var h = Math.floor(f / this.columnWidth);
             h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
             for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
         }, d.prototype._getContainerSize = function() {
             this.maxY = Math.max.apply(Math, this.colYs);
             var a = {
                 height: this.maxY
             };
             return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
         }, d.prototype._getContainerFitWidth = function() {
             for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
             return (this.cols - a) * this.columnWidth - this.gutter
         }, d.prototype.needsResizeLayout = function() {
             var a = this.containerWidth;
             return this.getContainerWidth(), a !== this.containerWidth
         }, d
     }),
     function(a, b) {
         "use strict";
         "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
     }(window, function(a, b) {
         "use strict";

         function c(a, b) {
             for (var c in b) a[c] = b[c];
             return a
         }
         var d = a.create("masonry"),
             e = d.prototype._getElementOffset,
             f = d.prototype.layout,
             g = d.prototype._getMeasurement;
         c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
         var h = d.prototype.measureColumns;
         d.prototype.measureColumns = function() {
             this.items = this.isotope.filteredItems, h.call(this)
         };
         var i = d.prototype._manageStamp;
         return d.prototype._manageStamp = function() {
             this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
         }, d
     }),
     function(a, b) {
         "use strict";
         "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
     }(window, function(a) {
         "use strict";
         var b = a.create("fitRows");
         return b.prototype._resetLayout = function() {
             this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
         }, b.prototype._getItemLayoutPosition = function(a) {
             a.getSize();
             var b = a.size.outerWidth + this.gutter,
                 c = this.isotope.size.innerWidth + this.gutter;
             0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
             var d = {
                 x: this.x,
                 y: this.y
             };
             return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
         }, b.prototype._getContainerSize = function() {
             return {
                 height: this.maxY
             }
         }, b
     }),
     function(a, b) {
         "use strict";
         "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
     }(window, function(a) {
         "use strict";
         var b = a.create("vertical", {
             horizontalAlignment: 0
         });
         return b.prototype._resetLayout = function() {
             this.y = 0
         }, b.prototype._getItemLayoutPosition = function(a) {
             a.getSize();
             var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
                 c = this.y;
             return this.y += a.size.outerHeight, {
                 x: b,
                 y: c
             }
         }, b.prototype._getContainerSize = function() {
             return {
                 height: this.y
             }
         }, b
     }),
     function(a, b) {
         "use strict";
         "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(c, d, e, f, g, h) {
             return b(a, c, d, e, f, g, h)
         }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
     }(window, function(a, b, c, d, e, f, g) {
         function h(a, b) {
             return function(c, d) {
                 for (var e = 0, f = a.length; f > e; e++) {
                     var g = a[e],
                         h = c.sortData[g],
                         i = d.sortData[g];
                     if (h > i || i > h) {
                         var j = void 0 !== b[g] ? b[g] : b,
                             k = j ? 1 : -1;
                         return (h > i ? 1 : -1) * k
                     }
                 }
                 return 0
             }
         }
         var i = a.jQuery,
             j = String.prototype.trim ? function(a) {
                 return a.trim()
             } : function(a) {
                 return a.replace(/^\s+|\s+$/g, "")
             },
             k = document.documentElement,
             l = k.textContent ? function(a) {
                 return a.textContent
             } : function(a) {
                 return a.innerText
             },
             m = b.create("isotope", {
                 layoutMode: "masonry",
                 isJQueryFiltering: !0,
                 sortAscending: !0
             });
         m.Item = f, m.LayoutMode = g, m.prototype._create = function() {
             this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
             for (var a in g.modes) this._initLayoutMode(a)
         }, m.prototype.reloadItems = function() {
             this.itemGUID = 0, b.prototype.reloadItems.call(this)
         }, m.prototype._itemize = function() {
             for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
                 var e = a[c];
                 e.id = this.itemGUID++
             }
             return this._updateItemsSortData(a), a
         }, m.prototype._initLayoutMode = function(a) {
             var b = g.modes[a],
                 c = this.options[a] || {};
             this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
         }, m.prototype.layout = function() {
             return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
         }, m.prototype._layout = function() {
             var a = this._getIsInstant();
             this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
         }, m.prototype.arrange = function(a) {
             function b() {
                 d.reveal(c.needReveal), d.hide(c.needHide)
             }
             this.option(a), this._getIsInstant();
             var c = this._filter(this.items);
             this.filteredItems = c.matches;
             var d = this;
             this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
         }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function() {
             var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
             return this._isInstant = a, a
         }, m.prototype._bindArrangeComplete = function() {
             function a() {
                 b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
             }
             var b, c, d, e = this;
             this.once("layoutComplete", function() {
                 b = !0, a()
             }), this.once("hideComplete", function() {
                 c = !0, a()
             }), this.once("revealComplete", function() {
                 d = !0, a()
             })
         }, m.prototype._filter = function(a) {
             var b = this.options.filter;
             b = b || "*";
             for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
                 var i = a[g];
                 if (!i.isIgnored) {
                     var j = f(i);
                     j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
                 }
             }
             return {
                 matches: c,
                 needReveal: d,
                 needHide: e
             }
         }, m.prototype._getFilterTest = function(a) {
             return i && this.options.isJQueryFiltering ? function(b) {
                 return i(b.element).is(a)
             } : "function" == typeof a ? function(b) {
                 return a(b.element)
             } : function(b) {
                 return d(b.element, a)
             }
         }, m.prototype.updateSortData = function(a) {
             var b;
             a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
         }, m.prototype._getSorters = function() {
             var a = this.options.getSortData;
             for (var b in a) {
                 var c = a[b];
                 this._sorters[b] = n(c)
             }
         }, m.prototype._updateItemsSortData = function(a) {
             for (var b = a && a.length, c = 0; b && b > c; c++) {
                 var d = a[c];
                 d.updateSortData()
             }
         };
         var n = function() {
             function a(a) {
                 if ("string" != typeof a) return a;
                 var c = j(a).split(" "),
                     d = c[0],
                     e = d.match(/^\[(.+)\]$/),
                     f = e && e[1],
                     g = b(f, d),
                     h = m.sortDataParsers[c[1]];
                 return a = h ? function(a) {
                     return a && h(g(a))
                 } : function(a) {
                     return a && g(a)
                 }
             }

             function b(a, b) {
                 var c;
                 return c = a ? function(b) {
                     return b.getAttribute(a)
                 } : function(a) {
                     var c = a.querySelector(b);
                     return c && l(c)
                 }
             }
             return a
         }();
         m.sortDataParsers = {
             parseInt: function(a) {
                 return parseInt(a, 10)
             },
             parseFloat: function(a) {
                 return parseFloat(a)
             }
         }, m.prototype._sort = function() {
             var a = this.options.sortBy;
             if (a) {
                 var b = [].concat.apply(a, this.sortHistory),
                     c = h(b, this.options.sortAscending);
                 this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
             }
         }, m.prototype._mode = function() {
             var a = this.options.layoutMode,
                 b = this.modes[a];
             if (!b) throw new Error("No layout mode: " + a);
             return b.options = this.options[a], b
         }, m.prototype._resetLayout = function() {
             b.prototype._resetLayout.call(this), this._mode()._resetLayout()
         }, m.prototype._getItemLayoutPosition = function(a) {
             return this._mode()._getItemLayoutPosition(a)
         }, m.prototype._manageStamp = function(a) {
             this._mode()._manageStamp(a)
         }, m.prototype._getContainerSize = function() {
             return this._mode()._getContainerSize()
         }, m.prototype.needsResizeLayout = function() {
             return this._mode().needsResizeLayout()
         }, m.prototype.appended = function(a) {
             var b = this.addItems(a);
             if (b.length) {
                 var c = this._filterRevealAdded(b);
                 this.filteredItems = this.filteredItems.concat(c)
             }
         }, m.prototype.prepended = function(a) {
             var b = this._itemize(a);
             if (b.length) {
                 this._resetLayout(), this._manageStamps();
                 var c = this._filterRevealAdded(b);
                 this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
             }
         }, m.prototype._filterRevealAdded = function(a) {
             var b = this._filter(a);
             return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
         }, m.prototype.insert = function(a) {
             var b = this.addItems(a);
             if (b.length) {
                 var c, d, e = b.length;
                 for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
                 var f = this._filter(b).matches;
                 for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
                 for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
                 this.reveal(f)
             }
         };
         var o = m.prototype.remove;
         return m.prototype.remove = function(a) {
             a = e.makeArray(a);
             var b = this.getItems(a);
             o.call(this, a);
             var c = b && b.length;
             if (c)
                 for (var d = 0; c > d; d++) {
                     var f = b[d];
                     e.removeFrom(this.filteredItems, f)
                 }
         }, m.prototype.shuffle = function() {
             for (var a = 0, b = this.items.length; b > a; a++) {
                 var c = this.items[a];
                 c.sortData.random = Math.random()
             }
             this.options.sortBy = "random", this._sort(), this._layout()
         }, m.prototype._noTransition = function(a) {
             var b = this.options.transitionDuration;
             this.options.transitionDuration = 0;
             var c = a.call(this);
             return this.options.transitionDuration = b, c
         }, m.prototype.getFilteredItemElements = function() {
             for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
             return a
         }, m
     });

 /* Responsive Slides */
 ! function(t, n, e) {
     t.fn.responsiveSlides = function(a) {
         var s = t.extend({
             auto: !0,
             speed: 500,
             timeout: 4e3,
             pager: !1,
             nav: !1,
             random: !1,
             pause: !1,
             pauseControls: !0,
             prevText: "Previous",
             nextText: "Next",
             maxwidth: "",
             navContainer: "",
             manualControls: "",
             namespace: "rslides",
             before: t.noop,
             after: t.noop
         }, a);
         return this.each(function() {
             e++;
             var o, i, r, l, u, c, f = t(this),
                 d = 0,
                 p = f.children(),
                 h = p.size(),
                 m = parseFloat(s.speed),
                 v = parseFloat(s.timeout),
                 C = parseFloat(s.maxwidth),
                 x = s.namespace,
                 y = x + e,
                 b = x + "_nav " + y + "_nav",
                 g = x + "_here",
                 w = y + "_on",
                 _ = y + "_s",
                 I = t("<ul class='" + x + "_tabs " + y + "_tabs' />"),
                 q = {
                     "float": "left",
                     position: "relative",
                     opacity: 1,
                     zIndex: 2
                 },
                 z = {
                     "float": "none",
                     position: "absolute",
                     opacity: 0,
                     zIndex: 1
                 },
                 T = function() {
                     var t = (document.body || document.documentElement).style,
                         n = "transition";
                     if ("string" == typeof t[n]) return !0;
                     o = ["Moz", "Webkit", "Khtml", "O", "ms"];
                     var e, n = n.charAt(0).toUpperCase() + n.substr(1);
                     for (e = 0; e < o.length; e++)
                         if ("string" == typeof t[o[e] + n]) return !0;
                     return !1
                 }(),
                 k = function(n) {
                     s.before(n), T ? (p.removeClass(w).css(z).eq(n).addClass(w).css(q), d = n, setTimeout(function() {
                         s.after(n)
                     }, m)) : p.stop().fadeOut(m, function() {
                         t(this).removeClass(w).css(z).css("opacity", 1)
                     }).eq(n).fadeIn(m, function() {
                         t(this).addClass(w).css(q), s.after(n), d = n
                     })
                 };
             if (s.random && (p.sort(function() {
                     return Math.round(Math.random()) - .5
                 }), f.empty().append(p)), p.each(function(t) {
                     this.id = _ + t
                 }), f.addClass(x + " " + y), a && a.maxwidth && f.css("max-width", C), p.hide().css(z).eq(0).addClass(w).css(q).show(), T && p.show().css({
                     "-webkit-transition": "opacity " + m + "ms ease-in-out",
                     "-moz-transition": "opacity " + m + "ms ease-in-out",
                     "-o-transition": "opacity " + m + "ms ease-in-out",
                     transition: "opacity " + m + "ms ease-in-out"
                 }), 1 < p.size()) {
                 if (m + 100 > v) return;
                 if (s.pager && !s.manualControls) {
                     var F = [];
                     p.each(function(t) {
                         t += 1, F += "<li><a href='#' class='" + _ + t + "'></a></li>"
                     }), I.append(F), a.navContainer ? t(s.navContainer).append(I) : f.after(I)
                 }
                 if (s.manualControls && (I = t(s.manualControls), I.addClass(x + "_tabs " + y + "_tabs")), (s.pager || s.manualControls) && I.find("li").each(function(n) {
                         t(this).addClass(_ + (n + 1))
                     }), (s.pager || s.manualControls) && (c = I.find("a"), i = function(t) {
                         c.closest("li").removeClass(g).eq(t).addClass(g)
                     }), s.auto && (r = function() {
                         u = setInterval(function() {
                             p.stop(!0, !0);
                             var t = h > d + 1 ? d + 1 : 0;
                             (s.pager || s.manualControls) && i(t), k(t)
                         }, v)
                     })(), l = function() {
                         s.auto && (clearInterval(u), r())
                     }, s.pause && f.hover(function() {
                         clearInterval(u)
                     }, function() {
                         l()
                     }), (s.pager || s.manualControls) && (c.bind("click", function(n) {
                         n.preventDefault(), s.pauseControls || l(), n = c.index(this), d === n || t("." + w).queue("fx").length || (i(n), k(n))
                     }).eq(0).closest("li").addClass(g), s.pauseControls && c.hover(function() {
                         clearInterval(u)
                     }, function() {
                         l()
                     })), s.nav) {
                     x = "<a href='#' class='" + b + " prev'>" + s.prevText + "</a><a href='#' class='" + b + " next'>" + s.nextText + "</a>", a.navContainer ? t(s.navContainer).append(x) : f.after(x);
                     var y = t("." + y + "_nav"),
                         M = y.filter(".prev");
                     y.bind("click", function(n) {
                         if (n.preventDefault(), n = t("." + w), !n.queue("fx").length) {
                             var e = p.index(n);
                             n = e - 1, e = h > e + 1 ? d + 1 : 0, k(t(this)[0] === M[0] ? n : e), (s.pager || s.manualControls) && i(t(this)[0] === M[0] ? n : e), s.pauseControls || l()
                         }
                     }), s.pauseControls && y.hover(function() {
                         clearInterval(u)
                     }, function() {
                         l()
                     })
                 }
             }
             if ("undefined" == typeof document.body.style.maxWidth && a.maxwidth) {
                 var D = function() {
                     f.css("width", "100%"), f.width() > C && f.css("width", C)
                 };
                 D(), t(n).bind("resize", function() {
                     D()
                 })
             }
         })
     }
 }(jQuery, this, 0);

 /* Easy Responsive Tabs */
 ! function(a) {
     a.fn.extend({
         easyResponsiveTabs: function(t) {
             var e = {
                     type: "default",
                     width: "auto",
                     fit: !0,
                     closed: !1,
                     activate: function() {}
                 },
                 t = a.extend(e, t),
                 s = t,
                 i = s.type,
                 n = s.fit,
                 r = s.width,
                 c = "vertical",
                 o = "accordion",
                 d = window.location.hash,
                 l = !(!window.history || !history.replaceState);
             a(this).bind("tabactivate", function(a, e) {
                 "function" == typeof t.activate && t.activate.call(e, a)
             }), this.each(function() {
                 function e() {
                     i == c && s.addClass("resp-vtabs"), 1 == n && s.css({
                         width: "100%",
                         margin: "0px"
                     }), i == o && (s.addClass("resp-easy-accordion"), s.find(".resp-tabs-list").css("display", "none"))
                 }
                 var s = a(this),
                     p = s.find("ul.resp-tabs-list"),
                     b = s.attr("id");
                 s.find("ul.resp-tabs-list li").addClass("resp-tab-item"), s.css({
                     display: "block",
                     width: r
                 }), s.find(".resp-tabs-container > div").addClass("resp-tab-content"), e();
                 var v;
                 s.find(".resp-tab-content").before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");
                 var f = 0;
                 s.find(".resp-accordion").each(function() {
                     v = a(this);
                     var t = s.find(".resp-tab-item:eq(" + f + ")"),
                         e = s.find(".resp-accordion:eq(" + f + ")");
                     e.append(t.html()), e.data(t.data()), v.attr("aria-controls", "tab_item-" + f), f++
                 });
                 var h, u = 0;
                 s.find(".resp-tab-item").each(function() {
                     $tabItem = a(this), $tabItem.attr("aria-controls", "tab_item-" + u), $tabItem.attr("role", "tab");
                     var t = 0;
                     s.find(".resp-tab-content").each(function() {
                         h = a(this), h.attr("aria-labelledby", "tab_item-" + t), t++
                     }), u++
                 });
                 var C = 0;
                 if ("" != d) {
                     var m = d.match(new RegExp(b + "([0-9]+)"));
                     null !== m && 2 === m.length && (C = parseInt(m[1], 10) - 1, C > u && (C = 0))
                 }
                 a(s.find(".resp-tab-item")[C]).addClass("resp-tab-active"), t.closed === !0 || "accordion" === t.closed && !p.is(":visible") || "tabs" === t.closed && p.is(":visible") ? a(s.find(".resp-tab-content")[C]).addClass("resp-tab-content-active resp-accordion-closed") : (a(s.find(".resp-accordion")[C]).addClass("resp-tab-active"), a(s.find(".resp-tab-content")[C]).addClass("resp-tab-content-active").attr("style", "display:block")), s.find("[role=tab]").each(function() {
                     var t = a(this);
                     t.click(function() {
                         var t = a(this),
                             e = t.attr("aria-controls");
                         if (t.hasClass("resp-accordion") && t.hasClass("resp-tab-active")) return s.find(".resp-tab-content-active").slideUp("", function() {
                             a(this).addClass("resp-accordion-closed")
                         }), t.removeClass("resp-tab-active"), !1;
                         if (!t.hasClass("resp-tab-active") && t.hasClass("resp-accordion") ? (s.find(".resp-tab-active").removeClass("resp-tab-active"), s.find(".resp-tab-content-active").slideUp().removeClass("resp-tab-content-active resp-accordion-closed"), s.find("[aria-controls=" + e + "]").addClass("resp-tab-active"), s.find(".resp-tab-content[aria-labelledby = " + e + "]").slideDown().addClass("resp-tab-content-active")) : (s.find(".resp-tab-active").removeClass("resp-tab-active"), s.find(".resp-tab-content-active").removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"), s.find("[aria-controls=" + e + "]").addClass("resp-tab-active"), s.find(".resp-tab-content[aria-labelledby = " + e + "]").addClass("resp-tab-content-active").attr("style", "display:block")), t.trigger("tabactivate", t), l) {
                             var i = window.location.hash,
                                 n = b + (parseInt(e.substring(9), 10) + 1).toString();
                             if ("" != i) {
                                 var r = new RegExp(b + "[0-9]+");
                                 n = null != i.match(r) ? i.replace(r, n) : i + "|" + n
                             } else n = "#" + n;
                             history.replaceState(null, null, n)
                         }
                     })
                 }), a(window).resize(function() {
                     s.find(".resp-accordion-closed").removeAttr("style")
                 })
             })
         }
     })
 }(jQuery);

 /* Jquery Appear */
 ! function(e) {
     "use strict";

     function r() {
         n = !1;
         for (var r = 0; r < i.length; r++) {
             var a = e(i[r]).filter(function() {
                 return e(this).is(":appeared")
             });
             if (a.trigger("appear", [a]), t) {
                 var o = t.not(a);
                 o.trigger("disappear", [o])
             }
             t = a
         }
     }
     var t, i = [],
         a = !1,
         n = !1,
         o = {
             interval: 250,
             force_process: !1
         },
         f = e(window);
     e.expr[":"].appeared = function(r) {
         var t = e(r);
         if (!t.is(":visible")) return !1;
         var i = f.scrollLeft(),
             a = f.scrollTop(),
             n = t.offset(),
             o = n.left,
             s = n.top;
         return s + t.height() >= a && s - (t.data("appear-top-offset") || 0) <= a + f.height() && o + t.width() >= i && o - (t.data("appear-left-offset") || 0) <= i + f.width() ? !0 : !1
     }, e.fn.extend({
         appear: function(t) {
             var f = e.extend({}, o, t || {}),
                 s = this.selector || this;
             if (!a) {
                 var p = function() {
                     n || (n = !0, setTimeout(r, f.interval))
                 };
                 e(window).scroll(p).resize(p), a = !0
             }
             return f.force_process && setTimeout(r, f.interval), i.push(s), e(s)
         }
     }), e.extend({
         force_appear: function() {
             return a ? (r(), !0) : !1
         }
     })
 }(jQuery);