var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { bU as BaseStyle, bV as script$7, d6 as getWidth, dh as getHeight, cg as getOuterWidth, di as getOuterHeight, dg as isRTL, da as getVNodeProp, dj as isArray, o as openBlock, f as createElementBlock, bs as mergeProps, F as Fragment, D as renderList, y as createBlock, C as resolveDynamicComponent, m as createBaseVNode, B as createCommentVNode, A as renderSlot, bY as getAttribute, bX as findSingle, bZ as focus, cs as equals, c0 as Ripple, r as resolveDirective, i as withDirectives, z as withCtx, Y as normalizeClass, d7 as getOffset, cp as script$8, c2 as script$9, cr as isNotEmpty, ca as script$a, c1 as UniqueComponentId, cb as ZIndex, cq as resolveFieldData, cl as OverlayEventBus, cw as isEmpty, cc as addStyle, cf as relativePosition, ch as absolutePosition, cd as ConnectedOverlayScrollHandler, ce as isTouchDevice, cx as findLastIndex, b4 as script$b, cZ as script$c, co as script$d, b$ as script$e, cy as script$f, ai as script$g, c3 as resolveComponent, n as normalizeStyle, k as createVNode, E as toDisplayString, bW as Transition, cD as createSlots, ah as createTextVNode } from "./index-CPKzxmd_.js";
var theme$2 = /* @__PURE__ */ __name(function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-splitter {\n    display: flex;\n    flex-wrap: nowrap;\n    border: 1px solid ".concat(dt("splitter.border.color"), ";\n    background: ").concat(dt("splitter.background"), ";\n    border-radius: ").concat(dt("border.radius.md"), ";\n    color: ").concat(dt("splitter.color"), ";\n}\n\n.p-splitter-vertical {\n    flex-direction: column;\n}\n\n.p-splitter-gutter {\n    flex-grow: 0;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    background: ").concat(dt("splitter.gutter.background"), ";\n}\n\n.p-splitter-gutter-handle {\n    border-radius: ").concat(dt("splitter.handle.border.radius"), ";\n    background: ").concat(dt("splitter.handle.background"), ";\n    transition: outline-color ").concat(dt("splitter.transition.duration"), ", box-shadow ").concat(dt("splitter.transition.duration"), ";\n    outline-color: transparent;\n}\n\n.p-splitter-gutter-handle:focus-visible {\n    box-shadow: ").concat(dt("splitter.handle.focus.ring.shadow"), ";\n    outline: ").concat(dt("splitter.handle.focus.ring.width"), " ").concat(dt("splitter.handle.focus.ring.style"), " ").concat(dt("splitter.handle.focus.ring.color"), ";\n    outline-offset: ").concat(dt("splitter.handle.focus.ring.offset"), ";\n}\n\n.p-splitter-horizontal.p-splitter-resizing {\n    cursor: col-resize;\n    user-select: none;\n}\n\n.p-splitter-vertical.p-splitter-resizing {\n    cursor: row-resize;\n    user-select: none;\n}\n\n.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {\n    height: ").concat(dt("splitter.handle.size"), ";\n    width: 100%;\n}\n\n.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {\n    width: ").concat(dt("splitter.handle.size"), ";\n    height: 100%;\n}\n\n.p-splitter-horizontal > .p-splitter-gutter {\n    cursor: col-resize;\n}\n\n.p-splitter-vertical > .p-splitter-gutter {\n    cursor: row-resize;\n}\n\n.p-splitterpanel {\n    flex-grow: 1;\n    overflow: hidden;\n}\n\n.p-splitterpanel-nested {\n    display: flex;\n}\n\n.p-splitterpanel .p-splitter {\n    flex-grow: 1;\n    border: 0 none;\n}\n");
}, "theme");
var classes$5 = {
  root: /* @__PURE__ */ __name(function root(_ref2) {
    var props = _ref2.props;
    return ["p-splitter p-component", "p-splitter-" + props.layout];
  }, "root"),
  gutter: "p-splitter-gutter",
  gutterHandle: "p-splitter-gutter-handle"
};
var inlineStyles$1 = {
  root: /* @__PURE__ */ __name(function root2(_ref3) {
    var props = _ref3.props;
    return [{
      display: "flex",
      "flex-wrap": "nowrap"
    }, props.layout === "vertical" ? {
      "flex-direction": "column"
    } : ""];
  }, "root")
};
var SplitterStyle = BaseStyle.extend({
  name: "splitter",
  theme: theme$2,
  classes: classes$5,
  inlineStyles: inlineStyles$1
});
var script$1$5 = {
  name: "BaseSplitter",
  "extends": script$7,
  props: {
    layout: {
      type: String,
      "default": "horizontal"
    },
    gutterSize: {
      type: Number,
      "default": 4
    },
    stateKey: {
      type: String,
      "default": null
    },
    stateStorage: {
      type: String,
      "default": "session"
    },
    step: {
      type: Number,
      "default": 5
    }
  },
  style: SplitterStyle,
  provide: /* @__PURE__ */ __name(function provide() {
    return {
      $pcSplitter: this,
      $parentInstance: this
    };
  }, "provide")
};
function _toConsumableArray$1(r) {
  return _arrayWithoutHoles$1(r) || _iterableToArray$1(r) || _unsupportedIterableToArray$1(r) || _nonIterableSpread$1();
}
__name(_toConsumableArray$1, "_toConsumableArray$1");
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
__name(_nonIterableSpread$1, "_nonIterableSpread$1");
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
__name(_unsupportedIterableToArray$1, "_unsupportedIterableToArray$1");
function _iterableToArray$1(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
__name(_iterableToArray$1, "_iterableToArray$1");
function _arrayWithoutHoles$1(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$1(r);
}
__name(_arrayWithoutHoles$1, "_arrayWithoutHoles$1");
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
__name(_arrayLikeToArray$1, "_arrayLikeToArray$1");
var script$6 = {
  name: "Splitter",
  "extends": script$1$5,
  inheritAttrs: false,
  emits: ["resizestart", "resizeend", "resize"],
  dragging: false,
  mouseMoveListener: null,
  mouseUpListener: null,
  touchMoveListener: null,
  touchEndListener: null,
  size: null,
  gutterElement: null,
  startPos: null,
  prevPanelElement: null,
  nextPanelElement: null,
  nextPanelSize: null,
  prevPanelSize: null,
  panelSizes: null,
  prevPanelIndex: null,
  timer: null,
  data: /* @__PURE__ */ __name(function data() {
    return {
      prevSize: null
    };
  }, "data"),
  mounted: /* @__PURE__ */ __name(function mounted() {
    this.initializePanels();
  }, "mounted"),
  beforeUnmount: /* @__PURE__ */ __name(function beforeUnmount() {
    this.clear();
    this.unbindMouseListeners();
  }, "beforeUnmount"),
  methods: {
    isSplitterPanel: /* @__PURE__ */ __name(function isSplitterPanel(child) {
      return child.type.name === "SplitterPanel";
    }, "isSplitterPanel"),
    initializePanels: /* @__PURE__ */ __name(function initializePanels() {
      var _this = this;
      if (this.panels && this.panels.length) {
        var initialized = false;
        if (this.isStateful()) {
          initialized = this.restoreState();
        }
        if (!initialized) {
          var children = _toConsumableArray$1(this.$el.children).filter(function(child) {
            return child.getAttribute("data-pc-name") === "splitterpanel";
          });
          var _panelSizes = [];
          this.panels.map(function(panel, i) {
            var panelInitialSize = panel.props && panel.props.size ? panel.props.size : null;
            var panelSize = panelInitialSize || 100 / _this.panels.length;
            _panelSizes[i] = panelSize;
            children[i].style.flexBasis = "calc(" + panelSize + "% - " + (_this.panels.length - 1) * _this.gutterSize + "px)";
          });
          this.panelSizes = _panelSizes;
          this.prevSize = parseFloat(_panelSizes[0]).toFixed(4);
        }
      }
    }, "initializePanels"),
    onResizeStart: /* @__PURE__ */ __name(function onResizeStart(event, index, isKeyDown) {
      this.gutterElement = event.currentTarget || event.target.parentElement;
      this.size = this.horizontal ? getWidth(this.$el) : getHeight(this.$el);
      if (!isKeyDown) {
        this.dragging = true;
        this.startPos = this.layout === "horizontal" ? event.pageX || event.changedTouches[0].pageX : event.pageY || event.changedTouches[0].pageY;
      }
      this.prevPanelElement = this.gutterElement.previousElementSibling;
      this.nextPanelElement = this.gutterElement.nextElementSibling;
      if (isKeyDown) {
        this.prevPanelSize = this.horizontal ? getOuterWidth(this.prevPanelElement, true) : getOuterHeight(this.prevPanelElement, true);
        this.nextPanelSize = this.horizontal ? getOuterWidth(this.nextPanelElement, true) : getOuterHeight(this.nextPanelElement, true);
      } else {
        this.prevPanelSize = 100 * (this.horizontal ? getOuterWidth(this.prevPanelElement, true) : getOuterHeight(this.prevPanelElement, true)) / this.size;
        this.nextPanelSize = 100 * (this.horizontal ? getOuterWidth(this.nextPanelElement, true) : getOuterHeight(this.nextPanelElement, true)) / this.size;
      }
      this.prevPanelIndex = index;
      this.$emit("resizestart", {
        originalEvent: event,
        sizes: this.panelSizes
      });
      this.$refs.gutter[index].setAttribute("data-p-gutter-resizing", true);
      this.$el.setAttribute("data-p-resizing", true);
    }, "onResizeStart"),
    onResize: /* @__PURE__ */ __name(function onResize(event, step, isKeyDown) {
      var newPos, newPrevPanelSize, newNextPanelSize;
      if (isKeyDown) {
        if (this.horizontal) {
          newPrevPanelSize = 100 * (this.prevPanelSize + step) / this.size;
          newNextPanelSize = 100 * (this.nextPanelSize - step) / this.size;
        } else {
          newPrevPanelSize = 100 * (this.prevPanelSize - step) / this.size;
          newNextPanelSize = 100 * (this.nextPanelSize + step) / this.size;
        }
      } else {
        if (this.horizontal) {
          if (isRTL(this.$el)) {
            newPos = (this.startPos - event.pageX) * 100 / this.size;
          } else {
            newPos = (event.pageX - this.startPos) * 100 / this.size;
          }
        } else {
          newPos = (event.pageY - this.startPos) * 100 / this.size;
        }
        newPrevPanelSize = this.prevPanelSize + newPos;
        newNextPanelSize = this.nextPanelSize - newPos;
      }
      if (this.validateResize(newPrevPanelSize, newNextPanelSize)) {
        this.prevPanelElement.style.flexBasis = "calc(" + newPrevPanelSize + "% - " + (this.panels.length - 1) * this.gutterSize + "px)";
        this.nextPanelElement.style.flexBasis = "calc(" + newNextPanelSize + "% - " + (this.panels.length - 1) * this.gutterSize + "px)";
        this.panelSizes[this.prevPanelIndex] = newPrevPanelSize;
        this.panelSizes[this.prevPanelIndex + 1] = newNextPanelSize;
        this.prevSize = parseFloat(newPrevPanelSize).toFixed(4);
      }
      this.$emit("resize", {
        originalEvent: event,
        sizes: this.panelSizes
      });
    }, "onResize"),
    onResizeEnd: /* @__PURE__ */ __name(function onResizeEnd(event) {
      if (this.isStateful()) {
        this.saveState();
      }
      this.$emit("resizeend", {
        originalEvent: event,
        sizes: this.panelSizes
      });
      this.$refs.gutter.forEach(function(gutter) {
        return gutter.setAttribute("data-p-gutter-resizing", false);
      });
      this.$el.setAttribute("data-p-resizing", false);
      this.clear();
    }, "onResizeEnd"),
    repeat: /* @__PURE__ */ __name(function repeat(event, index, step) {
      this.onResizeStart(event, index, true);
      this.onResize(event, step, true);
    }, "repeat"),
    setTimer: /* @__PURE__ */ __name(function setTimer(event, index, step) {
      var _this2 = this;
      if (!this.timer) {
        this.timer = setInterval(function() {
          _this2.repeat(event, index, step);
        }, 40);
      }
    }, "setTimer"),
    clearTimer: /* @__PURE__ */ __name(function clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }, "clearTimer"),
    onGutterKeyUp: /* @__PURE__ */ __name(function onGutterKeyUp() {
      this.clearTimer();
      this.onResizeEnd();
    }, "onGutterKeyUp"),
    onGutterKeyDown: /* @__PURE__ */ __name(function onGutterKeyDown(event, index) {
      switch (event.code) {
        case "ArrowLeft": {
          if (this.layout === "horizontal") {
            this.setTimer(event, index, this.step * -1);
          }
          event.preventDefault();
          break;
        }
        case "ArrowRight": {
          if (this.layout === "horizontal") {
            this.setTimer(event, index, this.step);
          }
          event.preventDefault();
          break;
        }
        case "ArrowDown": {
          if (this.layout === "vertical") {
            this.setTimer(event, index, this.step * -1);
          }
          event.preventDefault();
          break;
        }
        case "ArrowUp": {
          if (this.layout === "vertical") {
            this.setTimer(event, index, this.step);
          }
          event.preventDefault();
          break;
        }
      }
    }, "onGutterKeyDown"),
    onGutterMouseDown: /* @__PURE__ */ __name(function onGutterMouseDown(event, index) {
      this.onResizeStart(event, index);
      this.bindMouseListeners();
    }, "onGutterMouseDown"),
    onGutterTouchStart: /* @__PURE__ */ __name(function onGutterTouchStart(event, index) {
      this.onResizeStart(event, index);
      this.bindTouchListeners();
      event.preventDefault();
    }, "onGutterTouchStart"),
    onGutterTouchMove: /* @__PURE__ */ __name(function onGutterTouchMove(event) {
      this.onResize(event);
      event.preventDefault();
    }, "onGutterTouchMove"),
    onGutterTouchEnd: /* @__PURE__ */ __name(function onGutterTouchEnd(event) {
      this.onResizeEnd(event);
      this.unbindTouchListeners();
      event.preventDefault();
    }, "onGutterTouchEnd"),
    bindMouseListeners: /* @__PURE__ */ __name(function bindMouseListeners() {
      var _this3 = this;
      if (!this.mouseMoveListener) {
        this.mouseMoveListener = function(event) {
          return _this3.onResize(event);
        };
        document.addEventListener("mousemove", this.mouseMoveListener);
      }
      if (!this.mouseUpListener) {
        this.mouseUpListener = function(event) {
          _this3.onResizeEnd(event);
          _this3.unbindMouseListeners();
        };
        document.addEventListener("mouseup", this.mouseUpListener);
      }
    }, "bindMouseListeners"),
    bindTouchListeners: /* @__PURE__ */ __name(function bindTouchListeners() {
      var _this4 = this;
      if (!this.touchMoveListener) {
        this.touchMoveListener = function(event) {
          return _this4.onResize(event.changedTouches[0]);
        };
        document.addEventListener("touchmove", this.touchMoveListener);
      }
      if (!this.touchEndListener) {
        this.touchEndListener = function(event) {
          _this4.resizeEnd(event);
          _this4.unbindTouchListeners();
        };
        document.addEventListener("touchend", this.touchEndListener);
      }
    }, "bindTouchListeners"),
    validateResize: /* @__PURE__ */ __name(function validateResize(newPrevPanelSize, newNextPanelSize) {
      if (newPrevPanelSize > 100 || newPrevPanelSize < 0) return false;
      if (newNextPanelSize > 100 || newNextPanelSize < 0) return false;
      var prevPanelMinSize = getVNodeProp(this.panels[this.prevPanelIndex], "minSize");
      if (this.panels[this.prevPanelIndex].props && prevPanelMinSize && prevPanelMinSize > newPrevPanelSize) {
        return false;
      }
      var newPanelMinSize = getVNodeProp(this.panels[this.prevPanelIndex + 1], "minSize");
      if (this.panels[this.prevPanelIndex + 1].props && newPanelMinSize && newPanelMinSize > newNextPanelSize) {
        return false;
      }
      return true;
    }, "validateResize"),
    unbindMouseListeners: /* @__PURE__ */ __name(function unbindMouseListeners() {
      if (this.mouseMoveListener) {
        document.removeEventListener("mousemove", this.mouseMoveListener);
        this.mouseMoveListener = null;
      }
      if (this.mouseUpListener) {
        document.removeEventListener("mouseup", this.mouseUpListener);
        this.mouseUpListener = null;
      }
    }, "unbindMouseListeners"),
    unbindTouchListeners: /* @__PURE__ */ __name(function unbindTouchListeners() {
      if (this.touchMoveListener) {
        document.removeEventListener("touchmove", this.touchMoveListener);
        this.touchMoveListener = null;
      }
      if (this.touchEndListener) {
        document.removeEventListener("touchend", this.touchEndListener);
        this.touchEndListener = null;
      }
    }, "unbindTouchListeners"),
    clear: /* @__PURE__ */ __name(function clear() {
      this.dragging = false;
      this.size = null;
      this.startPos = null;
      this.prevPanelElement = null;
      this.nextPanelElement = null;
      this.prevPanelSize = null;
      this.nextPanelSize = null;
      this.gutterElement = null;
      this.prevPanelIndex = null;
    }, "clear"),
    isStateful: /* @__PURE__ */ __name(function isStateful() {
      return this.stateKey != null;
    }, "isStateful"),
    getStorage: /* @__PURE__ */ __name(function getStorage() {
      switch (this.stateStorage) {
        case "local":
          return window.localStorage;
        case "session":
          return window.sessionStorage;
        default:
          throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
      }
    }, "getStorage"),
    saveState: /* @__PURE__ */ __name(function saveState() {
      if (isArray(this.panelSizes)) {
        this.getStorage().setItem(this.stateKey, JSON.stringify(this.panelSizes));
      }
    }, "saveState"),
    restoreState: /* @__PURE__ */ __name(function restoreState() {
      var _this5 = this;
      var storage = this.getStorage();
      var stateString = storage.getItem(this.stateKey);
      if (stateString) {
        this.panelSizes = JSON.parse(stateString);
        var children = _toConsumableArray$1(this.$el.children).filter(function(child) {
          return child.getAttribute("data-pc-name") === "splitterpanel";
        });
        children.forEach(function(child, i) {
          child.style.flexBasis = "calc(" + _this5.panelSizes[i] + "% - " + (_this5.panels.length - 1) * _this5.gutterSize + "px)";
        });
        return true;
      }
      return false;
    }, "restoreState"),
    resetState: /* @__PURE__ */ __name(function resetState() {
      this.initializePanels();
    }, "resetState")
  },
  computed: {
    panels: /* @__PURE__ */ __name(function panels() {
      var _this6 = this;
      var panels2 = [];
      this.$slots["default"]().forEach(function(child) {
        if (_this6.isSplitterPanel(child)) {
          panels2.push(child);
        } else if (child.children instanceof Array) {
          child.children.forEach(function(nestedChild) {
            if (_this6.isSplitterPanel(nestedChild)) {
              panels2.push(nestedChild);
            }
          });
        }
      });
      return panels2;
    }, "panels"),
    gutterStyle: /* @__PURE__ */ __name(function gutterStyle() {
      if (this.horizontal) return {
        width: this.gutterSize + "px"
      };
      else return {
        height: this.gutterSize + "px"
      };
    }, "gutterStyle"),
    horizontal: /* @__PURE__ */ __name(function horizontal() {
      return this.layout === "horizontal";
    }, "horizontal"),
    getPTOptions: /* @__PURE__ */ __name(function getPTOptions() {
      var _this$$parentInstance;
      return {
        context: {
          nested: (_this$$parentInstance = this.$parentInstance) === null || _this$$parentInstance === void 0 ? void 0 : _this$$parentInstance.nestedState
        }
      };
    }, "getPTOptions")
  }
};
var _hoisted_1$2 = ["onMousedown", "onTouchstart", "onTouchmove", "onTouchend"];
var _hoisted_2$2 = ["aria-orientation", "aria-valuenow", "onKeydown"];
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    style: _ctx.sx("root"),
    "data-p-resizing": false
  }, _ctx.ptmi("root", $options.getPTOptions)), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.panels, function(panel, i) {
    return openBlock(), createElementBlock(Fragment, {
      key: i
    }, [(openBlock(), createBlock(resolveDynamicComponent(panel), {
      tabindex: "-1"
    })), i !== $options.panels.length - 1 ? (openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      ref_for: true,
      ref: "gutter",
      "class": _ctx.cx("gutter"),
      role: "separator",
      tabindex: "-1",
      onMousedown: /* @__PURE__ */ __name(function onMousedown($event) {
        return $options.onGutterMouseDown($event, i);
      }, "onMousedown"),
      onTouchstart: /* @__PURE__ */ __name(function onTouchstart($event) {
        return $options.onGutterTouchStart($event, i);
      }, "onTouchstart"),
      onTouchmove: /* @__PURE__ */ __name(function onTouchmove($event) {
        return $options.onGutterTouchMove($event, i);
      }, "onTouchmove"),
      onTouchend: /* @__PURE__ */ __name(function onTouchend($event) {
        return $options.onGutterTouchEnd($event, i);
      }, "onTouchend"),
      "data-p-gutter-resizing": false
    }, _ctx.ptm("gutter")), [createBaseVNode("div", mergeProps({
      "class": _ctx.cx("gutterHandle"),
      tabindex: "0",
      style: [$options.gutterStyle],
      "aria-orientation": _ctx.layout,
      "aria-valuenow": $data.prevSize,
      onKeyup: _cache[0] || (_cache[0] = function() {
        return $options.onGutterKeyUp && $options.onGutterKeyUp.apply($options, arguments);
      }),
      onKeydown: /* @__PURE__ */ __name(function onKeydown2($event) {
        return $options.onGutterKeyDown($event, i);
      }, "onKeydown"),
      ref_for: true
    }, _ctx.ptm("gutterHandle")), null, 16, _hoisted_2$2)], 16, _hoisted_1$2)) : createCommentVNode("", true)], 64);
  }), 128))], 16);
}
__name(render$5, "render$5");
script$6.render = render$5;
var classes$4 = {
  root: /* @__PURE__ */ __name(function root3(_ref) {
    var instance = _ref.instance;
    return ["p-splitterpanel", {
      "p-splitterpanel-nested": instance.isNested
    }];
  }, "root")
};
var SplitterPanelStyle = BaseStyle.extend({
  name: "splitterpanel",
  classes: classes$4
});
var script$1$4 = {
  name: "BaseSplitterPanel",
  "extends": script$7,
  props: {
    size: {
      type: Number,
      "default": null
    },
    minSize: {
      type: Number,
      "default": null
    }
  },
  style: SplitterPanelStyle,
  provide: /* @__PURE__ */ __name(function provide2() {
    return {
      $pcSplitterPanel: this,
      $parentInstance: this
    };
  }, "provide")
};
var script$5 = {
  name: "SplitterPanel",
  "extends": script$1$4,
  inheritAttrs: false,
  data: /* @__PURE__ */ __name(function data2() {
    return {
      nestedState: null
    };
  }, "data"),
  computed: {
    isNested: /* @__PURE__ */ __name(function isNested() {
      var _this = this;
      return this.$slots["default"]().some(function(child) {
        _this.nestedState = child.type.name === "Splitter" ? true : null;
        return _this.nestedState;
      });
    }, "isNested"),
    getPTOptions: /* @__PURE__ */ __name(function getPTOptions2() {
      return {
        context: {
          nested: this.isNested
        }
      };
    }, "getPTOptions")
  }
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root", $options.getPTOptions)), [renderSlot(_ctx.$slots, "default")], 16);
}
__name(render$4, "render$4");
script$5.render = render$4;
var classes$3 = {
  root: /* @__PURE__ */ __name(function root4(_ref) {
    var instance = _ref.instance, props = _ref.props;
    return ["p-tab", {
      "p-tab-active": instance.active,
      "p-disabled": props.disabled
    }];
  }, "root")
};
var TabStyle = BaseStyle.extend({
  name: "tab",
  classes: classes$3
});
var script$1$3 = {
  name: "BaseTab",
  "extends": script$7,
  props: {
    value: {
      type: [String, Number],
      "default": void 0
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    as: {
      type: [String, Object],
      "default": "BUTTON"
    },
    asChild: {
      type: Boolean,
      "default": false
    }
  },
  style: TabStyle,
  provide: /* @__PURE__ */ __name(function provide3() {
    return {
      $pcTab: this,
      $parentInstance: this
    };
  }, "provide")
};
var script$4 = {
  name: "Tab",
  "extends": script$1$3,
  inheritAttrs: false,
  inject: ["$pcTabs", "$pcTabList"],
  methods: {
    onFocus: /* @__PURE__ */ __name(function onFocus() {
      this.$pcTabs.selectOnFocus && this.changeActiveValue();
    }, "onFocus"),
    onClick: /* @__PURE__ */ __name(function onClick() {
      this.changeActiveValue();
    }, "onClick"),
    onKeydown: /* @__PURE__ */ __name(function onKeydown(event) {
      switch (event.code) {
        case "ArrowRight":
          this.onArrowRightKey(event);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "PageDown":
          this.onPageDownKey(event);
          break;
        case "PageUp":
          this.onPageUpKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.onEnterKey(event);
          break;
      }
    }, "onKeydown"),
    onArrowRightKey: /* @__PURE__ */ __name(function onArrowRightKey(event) {
      var nextTab = this.findNextTab(event.currentTarget);
      nextTab ? this.changeFocusedTab(event, nextTab) : this.onHomeKey(event);
      event.preventDefault();
    }, "onArrowRightKey"),
    onArrowLeftKey: /* @__PURE__ */ __name(function onArrowLeftKey(event) {
      var prevTab = this.findPrevTab(event.currentTarget);
      prevTab ? this.changeFocusedTab(event, prevTab) : this.onEndKey(event);
      event.preventDefault();
    }, "onArrowLeftKey"),
    onHomeKey: /* @__PURE__ */ __name(function onHomeKey(event) {
      var firstTab = this.findFirstTab();
      this.changeFocusedTab(event, firstTab);
      event.preventDefault();
    }, "onHomeKey"),
    onEndKey: /* @__PURE__ */ __name(function onEndKey(event) {
      var lastTab = this.findLastTab();
      this.changeFocusedTab(event, lastTab);
      event.preventDefault();
    }, "onEndKey"),
    onPageDownKey: /* @__PURE__ */ __name(function onPageDownKey(event) {
      this.scrollInView(this.findLastTab());
      event.preventDefault();
    }, "onPageDownKey"),
    onPageUpKey: /* @__PURE__ */ __name(function onPageUpKey(event) {
      this.scrollInView(this.findFirstTab());
      event.preventDefault();
    }, "onPageUpKey"),
    onEnterKey: /* @__PURE__ */ __name(function onEnterKey(event) {
      this.changeActiveValue();
      event.preventDefault();
    }, "onEnterKey"),
    findNextTab: /* @__PURE__ */ __name(function findNextTab(tabElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var element = selfCheck ? tabElement : tabElement.nextElementSibling;
      return element ? getAttribute(element, "data-p-disabled") || getAttribute(element, "data-pc-section") === "inkbar" ? this.findNextTab(element) : findSingle(element, '[data-pc-name="tab"]') : null;
    }, "findNextTab"),
    findPrevTab: /* @__PURE__ */ __name(function findPrevTab(tabElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var element = selfCheck ? tabElement : tabElement.previousElementSibling;
      return element ? getAttribute(element, "data-p-disabled") || getAttribute(element, "data-pc-section") === "inkbar" ? this.findPrevTab(element) : findSingle(element, '[data-pc-name="tab"]') : null;
    }, "findPrevTab"),
    findFirstTab: /* @__PURE__ */ __name(function findFirstTab() {
      return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild, true);
    }, "findFirstTab"),
    findLastTab: /* @__PURE__ */ __name(function findLastTab() {
      return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild, true);
    }, "findLastTab"),
    changeActiveValue: /* @__PURE__ */ __name(function changeActiveValue() {
      this.$pcTabs.updateValue(this.value);
    }, "changeActiveValue"),
    changeFocusedTab: /* @__PURE__ */ __name(function changeFocusedTab(event, element) {
      focus(element);
      this.scrollInView(element);
    }, "changeFocusedTab"),
    scrollInView: /* @__PURE__ */ __name(function scrollInView(element) {
      var _element$scrollIntoVi;
      element === null || element === void 0 || (_element$scrollIntoVi = element.scrollIntoView) === null || _element$scrollIntoVi === void 0 || _element$scrollIntoVi.call(element, {
        block: "nearest"
      });
    }, "scrollInView")
  },
  computed: {
    active: /* @__PURE__ */ __name(function active() {
      var _this$$pcTabs;
      return equals((_this$$pcTabs = this.$pcTabs) === null || _this$$pcTabs === void 0 ? void 0 : _this$$pcTabs.d_value, this.value);
    }, "active"),
    id: /* @__PURE__ */ __name(function id() {
      var _this$$pcTabs2;
      return "".concat((_this$$pcTabs2 = this.$pcTabs) === null || _this$$pcTabs2 === void 0 ? void 0 : _this$$pcTabs2.id, "_tab_").concat(this.value);
    }, "id"),
    ariaControls: /* @__PURE__ */ __name(function ariaControls() {
      var _this$$pcTabs3;
      return "".concat((_this$$pcTabs3 = this.$pcTabs) === null || _this$$pcTabs3 === void 0 ? void 0 : _this$$pcTabs3.id, "_tabpanel_").concat(this.value);
    }, "ariaControls"),
    attrs: /* @__PURE__ */ __name(function attrs() {
      return mergeProps(this.asAttrs, this.a11yAttrs, this.ptmi("root", this.ptParams));
    }, "attrs"),
    asAttrs: /* @__PURE__ */ __name(function asAttrs() {
      return this.as === "BUTTON" ? {
        type: "button",
        disabled: this.disabled
      } : void 0;
    }, "asAttrs"),
    a11yAttrs: /* @__PURE__ */ __name(function a11yAttrs() {
      return {
        id: this.id,
        tabindex: this.active ? this.$pcTabs.tabindex : -1,
        role: "tab",
        "aria-selected": this.active,
        "aria-controls": this.ariaControls,
        "data-pc-name": "tab",
        "data-p-disabled": this.disabled,
        "data-p-active": this.active,
        onFocus: this.onFocus,
        onKeydown: this.onKeydown
      };
    }, "a11yAttrs"),
    ptParams: /* @__PURE__ */ __name(function ptParams() {
      return {
        context: {
          active: this.active
        }
      };
    }, "ptParams")
  },
  directives: {
    ripple: Ripple
  }
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return !_ctx.asChild ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    "class": _ctx.cx("root"),
    onClick: $options.onClick
  }, $options.attrs), {
    "default": withCtx(function() {
      return [renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class", "onClick"])), [[_directive_ripple]]) : renderSlot(_ctx.$slots, "default", {
    key: 1,
    "class": normalizeClass(_ctx.cx("root")),
    active: $options.active,
    a11yAttrs: $options.a11yAttrs,
    onClick: $options.onClick
  });
}
__name(render$3, "render$3");
script$4.render = render$3;
var classes$2 = {
  root: "p-tablist",
  content: /* @__PURE__ */ __name(function content(_ref) {
    var instance = _ref.instance;
    return ["p-tablist-content", {
      "p-tablist-viewport": instance.$pcTabs.scrollable
    }];
  }, "content"),
  tabList: "p-tablist-tab-list",
  activeBar: "p-tablist-active-bar",
  prevButton: "p-tablist-prev-button p-tablist-nav-button",
  nextButton: "p-tablist-next-button p-tablist-nav-button"
};
var TabListStyle = BaseStyle.extend({
  name: "tablist",
  classes: classes$2
});
var script$1$2 = {
  name: "BaseTabList",
  "extends": script$7,
  props: {},
  style: TabListStyle,
  provide: /* @__PURE__ */ __name(function provide4() {
    return {
      $pcTabList: this,
      $parentInstance: this
    };
  }, "provide")
};
var script$3 = {
  name: "TabList",
  "extends": script$1$2,
  inheritAttrs: false,
  inject: ["$pcTabs"],
  data: /* @__PURE__ */ __name(function data3() {
    return {
      isPrevButtonEnabled: false,
      isNextButtonEnabled: true
    };
  }, "data"),
  resizeObserver: void 0,
  watch: {
    showNavigators: /* @__PURE__ */ __name(function showNavigators(newValue) {
      newValue ? this.bindResizeObserver() : this.unbindResizeObserver();
    }, "showNavigators"),
    activeValue: {
      flush: "post",
      handler: /* @__PURE__ */ __name(function handler() {
        this.updateInkBar();
      }, "handler")
    }
  },
  mounted: /* @__PURE__ */ __name(function mounted2() {
    var _this = this;
    this.$nextTick(function() {
      _this.updateInkBar();
    });
    if (this.showNavigators) {
      this.updateButtonState();
      this.bindResizeObserver();
    }
  }, "mounted"),
  updated: /* @__PURE__ */ __name(function updated() {
    this.showNavigators && this.updateButtonState();
  }, "updated"),
  beforeUnmount: /* @__PURE__ */ __name(function beforeUnmount2() {
    this.unbindResizeObserver();
  }, "beforeUnmount"),
  methods: {
    onScroll: /* @__PURE__ */ __name(function onScroll(event) {
      this.showNavigators && this.updateButtonState();
      event.preventDefault();
    }, "onScroll"),
    onPrevButtonClick: /* @__PURE__ */ __name(function onPrevButtonClick() {
      var content2 = this.$refs.content;
      var buttonWidths = this.getVisibleButtonWidths();
      var width = getWidth(content2) - buttonWidths;
      var currentScrollLeft = Math.abs(content2.scrollLeft);
      var scrollStep = width * 0.8;
      var targetScrollLeft = currentScrollLeft - scrollStep;
      var scrollLeft = Math.max(targetScrollLeft, 0);
      content2.scrollLeft = isRTL(content2) ? -1 * scrollLeft : scrollLeft;
    }, "onPrevButtonClick"),
    onNextButtonClick: /* @__PURE__ */ __name(function onNextButtonClick() {
      var content2 = this.$refs.content;
      var buttonWidths = this.getVisibleButtonWidths();
      var width = getWidth(content2) - buttonWidths;
      var currentScrollLeft = Math.abs(content2.scrollLeft);
      var scrollStep = width * 0.8;
      var targetScrollLeft = currentScrollLeft + scrollStep;
      var maxScrollLeft = content2.scrollWidth - width;
      var scrollLeft = Math.min(targetScrollLeft, maxScrollLeft);
      content2.scrollLeft = isRTL(content2) ? -1 * scrollLeft : scrollLeft;
    }, "onNextButtonClick"),
    bindResizeObserver: /* @__PURE__ */ __name(function bindResizeObserver() {
      var _this2 = this;
      this.resizeObserver = new ResizeObserver(function() {
        return _this2.updateButtonState();
      });
      this.resizeObserver.observe(this.$refs.list);
    }, "bindResizeObserver"),
    unbindResizeObserver: /* @__PURE__ */ __name(function unbindResizeObserver() {
      var _this$resizeObserver;
      (_this$resizeObserver = this.resizeObserver) === null || _this$resizeObserver === void 0 || _this$resizeObserver.unobserve(this.$refs.list);
      this.resizeObserver = void 0;
    }, "unbindResizeObserver"),
    updateInkBar: /* @__PURE__ */ __name(function updateInkBar() {
      var _this$$refs = this.$refs, content2 = _this$$refs.content, inkbar = _this$$refs.inkbar, tabs = _this$$refs.tabs;
      var activeTab = findSingle(content2, '[data-pc-name="tab"][data-p-active="true"]');
      if (this.$pcTabs.isVertical()) {
        inkbar.style.height = getOuterHeight(activeTab) + "px";
        inkbar.style.top = getOffset(activeTab).top - getOffset(tabs).top + "px";
      } else {
        inkbar.style.width = getOuterWidth(activeTab) + "px";
        inkbar.style.left = getOffset(activeTab).left - getOffset(tabs).left + "px";
      }
    }, "updateInkBar"),
    updateButtonState: /* @__PURE__ */ __name(function updateButtonState() {
      var _this$$refs2 = this.$refs, list = _this$$refs2.list, content2 = _this$$refs2.content;
      var scrollTop = content2.scrollTop, scrollWidth = content2.scrollWidth, scrollHeight = content2.scrollHeight, offsetWidth = content2.offsetWidth, offsetHeight = content2.offsetHeight;
      var scrollLeft = Math.abs(content2.scrollLeft);
      var _ref = [getWidth(content2), getHeight(content2)], width = _ref[0], height = _ref[1];
      if (this.$pcTabs.isVertical()) {
        this.isPrevButtonEnabled = scrollTop !== 0;
        this.isNextButtonEnabled = list.offsetHeight >= offsetHeight && parseInt(scrollTop) !== scrollHeight - height;
      } else {
        this.isPrevButtonEnabled = scrollLeft !== 0;
        this.isNextButtonEnabled = list.offsetWidth >= offsetWidth && parseInt(scrollLeft) !== scrollWidth - width;
      }
    }, "updateButtonState"),
    getVisibleButtonWidths: /* @__PURE__ */ __name(function getVisibleButtonWidths() {
      var _this$$refs3 = this.$refs, prevButton = _this$$refs3.prevButton, nextButton = _this$$refs3.nextButton;
      var width = 0;
      if (this.showNavigators) {
        width = ((prevButton === null || prevButton === void 0 ? void 0 : prevButton.offsetWidth) || 0) + ((nextButton === null || nextButton === void 0 ? void 0 : nextButton.offsetWidth) || 0);
      }
      return width;
    }, "getVisibleButtonWidths")
  },
  computed: {
    templates: /* @__PURE__ */ __name(function templates() {
      return this.$pcTabs.$slots;
    }, "templates"),
    activeValue: /* @__PURE__ */ __name(function activeValue() {
      return this.$pcTabs.d_value;
    }, "activeValue"),
    showNavigators: /* @__PURE__ */ __name(function showNavigators2() {
      return this.$pcTabs.scrollable && this.$pcTabs.showNavigators;
    }, "showNavigators"),
    prevButtonAriaLabel: /* @__PURE__ */ __name(function prevButtonAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.previous : void 0;
    }, "prevButtonAriaLabel"),
    nextButtonAriaLabel: /* @__PURE__ */ __name(function nextButtonAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.next : void 0;
    }, "nextButtonAriaLabel")
  },
  components: {
    ChevronLeftIcon: script$8,
    ChevronRightIcon: script$9
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1$1 = ["aria-label", "tabindex"];
var _hoisted_2$1 = ["aria-orientation"];
var _hoisted_3$1 = ["aria-label", "tabindex"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "list",
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [$options.showNavigators && $data.isPrevButtonEnabled ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    ref: "prevButton",
    "class": _ctx.cx("prevButton"),
    "aria-label": $options.prevButtonAriaLabel,
    tabindex: $options.$pcTabs.tabindex,
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.onPrevButtonClick && $options.onPrevButtonClick.apply($options, arguments);
    })
  }, _ctx.ptm("prevButton"), {
    "data-pc-group-section": "navigator"
  }), [(openBlock(), createBlock(resolveDynamicComponent($options.templates.previcon || "ChevronLeftIcon"), mergeProps({
    "aria-hidden": "true"
  }, _ctx.ptm("prevIcon")), null, 16))], 16, _hoisted_1$1)), [[_directive_ripple]]) : createCommentVNode("", true), createBaseVNode("div", mergeProps({
    ref: "content",
    "class": _ctx.cx("content"),
    onScroll: _cache[1] || (_cache[1] = function() {
      return $options.onScroll && $options.onScroll.apply($options, arguments);
    })
  }, _ctx.ptm("content")), [createBaseVNode("div", mergeProps({
    ref: "tabs",
    "class": _ctx.cx("tabList"),
    role: "tablist",
    "aria-orientation": $options.$pcTabs.orientation || "horizontal"
  }, _ctx.ptm("tabList")), [renderSlot(_ctx.$slots, "default"), createBaseVNode("span", mergeProps({
    ref: "inkbar",
    "class": _ctx.cx("activeBar"),
    role: "presentation",
    "aria-hidden": "true"
  }, _ctx.ptm("activeBar")), null, 16)], 16, _hoisted_2$1)], 16), $options.showNavigators && $data.isNextButtonEnabled ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 1,
    ref: "nextButton",
    "class": _ctx.cx("nextButton"),
    "aria-label": $options.nextButtonAriaLabel,
    tabindex: $options.$pcTabs.tabindex,
    onClick: _cache[2] || (_cache[2] = function() {
      return $options.onNextButtonClick && $options.onNextButtonClick.apply($options, arguments);
    })
  }, _ctx.ptm("nextButton"), {
    "data-pc-group-section": "navigator"
  }), [(openBlock(), createBlock(resolveDynamicComponent($options.templates.nexticon || "ChevronRightIcon"), mergeProps({
    "aria-hidden": "true"
  }, _ctx.ptm("nextIcon")), null, 16))], 16, _hoisted_3$1)), [[_directive_ripple]]) : createCommentVNode("", true)], 16);
}
__name(render$2, "render$2");
script$3.render = render$2;
var theme$1 = /* @__PURE__ */ __name(function theme2(_ref) {
  _ref.dt;
  return "\n.p-buttongroup {\n    display: inline-flex;\n}\n\n.p-buttongroup .p-button {\n    margin: 0;\n}\n\n.p-buttongroup .p-button:not(:last-child),\n.p-buttongroup .p-button:not(:last-child):hover {\n    border-inline-end: 0 none;\n}\n\n.p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {\n    border-radius: 0;\n}\n\n.p-buttongroup .p-button:first-of-type:not(:only-of-type) {\n    border-start-end-radius: 0;\n    border-end-end-radius: 0;\n}\n\n.p-buttongroup .p-button:last-of-type:not(:only-of-type) {\n    border-start-start-radius: 0;\n    border-end-start-radius: 0;\n}\n\n.p-buttongroup .p-button:focus {\n    position: relative;\n    z-index: 1;\n}\n";
}, "theme");
var classes$1 = {
  root: "p-buttongroup p-component"
};
var ButtonGroupStyle = BaseStyle.extend({
  name: "buttongroup",
  theme: theme$1,
  classes: classes$1
});
var script$1$1 = {
  name: "BaseButtonGroup",
  "extends": script$7,
  style: ButtonGroupStyle,
  provide: /* @__PURE__ */ __name(function provide5() {
    return {
      $pcButtonGroup: this,
      $parentInstance: this
    };
  }, "provide")
};
var script$2 = {
  name: "ButtonGroup",
  "extends": script$1$1,
  inheritAttrs: false
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("root"),
    role: "group"
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
__name(render$1, "render$1");
script$2.render = render$1;
var theme3 = /* @__PURE__ */ __name(function theme4(_ref) {
  var dt = _ref.dt;
  return "\n.p-autocomplete {\n    display: inline-flex;\n}\n\n.p-autocomplete-loader {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n    inset-inline-end: ".concat(dt("autocomplete.padding.x"), ";\n}\n\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {\n    inset-inline-end: calc(").concat(dt("autocomplete.dropdown.width"), " + ").concat(dt("autocomplete.padding.x"), ");\n}\n\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {\n    border-start-end-radius: 0;\n    border-end-end-radius: 0;\n}\n\n.p-autocomplete-dropdown {\n    cursor: pointer;\n    display: inline-flex;\n    user-select: none;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    width: ").concat(dt("autocomplete.dropdown.width"), ";\n    border-start-end-radius: ").concat(dt("autocomplete.dropdown.border.radius"), ";\n    border-end-end-radius: ").concat(dt("autocomplete.dropdown.border.radius"), ";\n    background: ").concat(dt("autocomplete.dropdown.background"), ";\n    border: 1px solid ").concat(dt("autocomplete.dropdown.border.color"), ";\n    border-inline-start: 0 none;\n    color: ").concat(dt("autocomplete.dropdown.color"), ";\n    transition: background ").concat(dt("autocomplete.transition.duration"), ", color ").concat(dt("autocomplete.transition.duration"), ", border-color ").concat(dt("autocomplete.transition.duration"), ", outline-color ").concat(dt("autocomplete.transition.duration"), ", box-shadow ").concat(dt("autocomplete.transition.duration"), ";\n    outline-color: transparent;\n}\n\n.p-autocomplete-dropdown:not(:disabled):hover {\n    background: ").concat(dt("autocomplete.dropdown.hover.background"), ";\n    border-color: ").concat(dt("autocomplete.dropdown.hover.border.color"), ";\n    color: ").concat(dt("autocomplete.dropdown.hover.color"), ";\n}\n\n.p-autocomplete-dropdown:not(:disabled):active {\n    background: ").concat(dt("autocomplete.dropdown.active.background"), ";\n    border-color: ").concat(dt("autocomplete.dropdown.active.border.color"), ";\n    color: ").concat(dt("autocomplete.dropdown.active.color"), ";\n}\n\n.p-autocomplete-dropdown:focus-visible {\n    box-shadow: ").concat(dt("autocomplete.dropdown.focus.ring.shadow"), ";\n    outline: ").concat(dt("autocomplete.dropdown.focus.ring.width"), " ").concat(dt("autocomplete.dropdown.focus.ring.style"), " ").concat(dt("autocomplete.dropdown.focus.ring.color"), ";\n    outline-offset: ").concat(dt("autocomplete.dropdown.focus.ring.offset"), ";\n}\n\n.p-autocomplete .p-autocomplete-overlay {\n    min-width: 100%;\n}\n\n.p-autocomplete-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ").concat(dt("autocomplete.overlay.background"), ";\n    color: ").concat(dt("autocomplete.overlay.color"), ";\n    border: 1px solid ").concat(dt("autocomplete.overlay.border.color"), ";\n    border-radius: ").concat(dt("autocomplete.overlay.border.radius"), ";\n    box-shadow: ").concat(dt("autocomplete.overlay.shadow"), ";\n}\n\n.p-autocomplete-list-container {\n    overflow: auto;\n}\n\n.p-autocomplete-list {\n    margin: 0;\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("autocomplete.list.gap"), ";\n    padding: ").concat(dt("autocomplete.list.padding"), ";\n}\n\n.p-autocomplete-option {\n    cursor: pointer;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    padding: ").concat(dt("autocomplete.option.padding"), ";\n    border: 0 none;\n    color: ").concat(dt("autocomplete.option.color"), ";\n    background: transparent;\n    transition: background ").concat(dt("autocomplete.transition.duration"), ", color ").concat(dt("autocomplete.transition.duration"), ", border-color ").concat(dt("autocomplete.transition.duration"), ";\n    border-radius: ").concat(dt("autocomplete.option.border.radius"), ";\n}\n\n.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {\n    background: ").concat(dt("autocomplete.option.focus.background"), ";\n    color: ").concat(dt("autocomplete.option.focus.color"), ";\n}\n\n.p-autocomplete-option-selected {\n    background: ").concat(dt("autocomplete.option.selected.background"), ";\n    color: ").concat(dt("autocomplete.option.selected.color"), ";\n}\n\n.p-autocomplete-option-selected.p-focus {\n    background: ").concat(dt("autocomplete.option.selected.focus.background"), ";\n    color: ").concat(dt("autocomplete.option.selected.focus.color"), ";\n}\n\n.p-autocomplete-option-group {\n    margin: 0;\n    padding: ").concat(dt("autocomplete.option.group.padding"), ";\n    color: ").concat(dt("autocomplete.option.group.color"), ";\n    background: ").concat(dt("autocomplete.option.group.background"), ";\n    font-weight: ").concat(dt("autocomplete.option.group.font.weight"), ";\n}\n\n.p-autocomplete-input-multiple {\n    margin: 0;\n    list-style-type: none;\n    cursor: text;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    padding: calc(").concat(dt("autocomplete.padding.y"), " / 2) ").concat(dt("autocomplete.padding.x"), ";\n    gap: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n    color: ").concat(dt("autocomplete.color"), ";\n    background: ").concat(dt("autocomplete.background"), ";\n    border: 1px solid ").concat(dt("autocomplete.border.color"), ";\n    border-radius: ").concat(dt("autocomplete.border.radius"), ";\n    width: 100%;\n    transition: background ").concat(dt("autocomplete.transition.duration"), ", color ").concat(dt("autocomplete.transition.duration"), ", border-color ").concat(dt("autocomplete.transition.duration"), ", outline-color ").concat(dt("autocomplete.transition.duration"), ", box-shadow ").concat(dt("autocomplete.transition.duration"), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt("autocomplete.shadow"), ";\n}\n\n.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {\n    border-color: ").concat(dt("autocomplete.hover.border.color"), ";\n}\n\n.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {\n    border-color: ").concat(dt("autocomplete.focus.border.color"), ";\n    box-shadow: ").concat(dt("autocomplete.focus.ring.shadow"), ";\n    outline: ").concat(dt("autocomplete.focus.ring.width"), " ").concat(dt("autocomplete.focus.ring.style"), " ").concat(dt("autocomplete.focus.ring.color"), ";\n    outline-offset: ").concat(dt("autocomplete.focus.ring.offset"), ";\n}\n\n.p-autocomplete.p-invalid .p-autocomplete-input-multiple {\n    border-color: ").concat(dt("autocomplete.invalid.border.color"), ";\n}\n\n.p-variant-filled.p-autocomplete-input-multiple {\n    background: ").concat(dt("autocomplete.filled.background"), ";\n}\n\n.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {\n    background: ").concat(dt("autocomplete.filled.hover.background"), ";\n}\n\n.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {\n    background: ").concat(dt("autocomplete.filled.focus.background"), ";\n}\n\n.p-autocomplete.p-disabled .p-autocomplete-input-multiple {\n    opacity: 1;\n    background: ").concat(dt("autocomplete.disabled.background"), ";\n    color: ").concat(dt("autocomplete.disabled.color"), ";\n}\n\n.p-autocomplete-chip.p-chip {\n    padding-block-start: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n    padding-block-end: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n    border-radius: ").concat(dt("autocomplete.chip.border.radius"), ";\n}\n\n.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {\n    padding-inline-start: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n    padding-inline-end: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n}\n\n.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {\n    background: ").concat(dt("autocomplete.chip.focus.background"), ";\n    color: ").concat(dt("autocomplete.chip.focus.color"), ";\n}\n\n.p-autocomplete-input-chip {\n    flex: 1 1 auto;\n    display: inline-flex;\n    padding-block-start: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n    padding-block-end: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n}\n\n.p-autocomplete-input-chip input {\n    border: 0 none;\n    outline: 0 none;\n    background: transparent;\n    margin: 0;\n    padding: 0;\n    box-shadow: none;\n    border-radius: 0;\n    width: 100%;\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: 1rem;\n    color: inherit;\n}\n\n.p-autocomplete-input-chip input::placeholder {\n    color: ").concat(dt("autocomplete.placeholder.color"), ";\n}\n\n.p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {\n    color: ").concat(dt("autocomplete.invalid.placeholder.color"), ";\n}\n\n.p-autocomplete-empty-message {\n    padding: ").concat(dt("autocomplete.empty.message.padding"), ";\n}\n\n.p-autocomplete-fluid {\n    display: flex;\n}\n\n.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {\n    width: 1%;\n}\n\n.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {\n    width: ").concat(dt("autocomplete.dropdown.sm.width"), ";\n}\n\n.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {\n    font-size: ").concat(dt("form.field.sm.font.size"), ";\n    width: ").concat(dt("form.field.sm.font.size"), ";\n    height: ").concat(dt("form.field.sm.font.size"), ";\n}\n\n.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {\n    width: ").concat(dt("autocomplete.dropdown.lg.width"), ";\n}\n\n.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {\n    font-size: ").concat(dt("form.field.lg.font.size"), ";\n    width: ").concat(dt("form.field.lg.font.size"), ";\n    height: ").concat(dt("form.field.lg.font.size"), ";\n}\n");
}, "theme");
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes = {
  root: /* @__PURE__ */ __name(function root5(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-autocomplete p-component p-inputwrapper", {
      "p-disabled": props.disabled,
      "p-invalid": instance.$invalid,
      "p-focus": instance.focused,
      "p-inputwrapper-filled": instance.$filled || isNotEmpty(instance.inputValue),
      "p-inputwrapper-focus": instance.focused,
      "p-autocomplete-open": instance.overlayVisible,
      "p-autocomplete-fluid": instance.$fluid
    }];
  }, "root"),
  pcInputText: "p-autocomplete-input",
  inputMultiple: /* @__PURE__ */ __name(function inputMultiple(_ref3) {
    _ref3.props;
    var instance = _ref3.instance;
    return ["p-autocomplete-input-multiple", {
      "p-variant-filled": instance.$variant === "filled"
    }];
  }, "inputMultiple"),
  chipItem: /* @__PURE__ */ __name(function chipItem(_ref4) {
    var instance = _ref4.instance, i = _ref4.i;
    return ["p-autocomplete-chip-item", {
      "p-focus": instance.focusedMultipleOptionIndex === i
    }];
  }, "chipItem"),
  pcChip: "p-autocomplete-chip",
  chipIcon: "p-autocomplete-chip-icon",
  inputChip: "p-autocomplete-input-chip",
  loader: "p-autocomplete-loader",
  dropdown: "p-autocomplete-dropdown",
  overlay: "p-autocomplete-overlay p-component",
  listContainer: "p-autocomplete-list-container",
  list: "p-autocomplete-list",
  optionGroup: "p-autocomplete-option-group",
  option: /* @__PURE__ */ __name(function option(_ref5) {
    var instance = _ref5.instance, _option = _ref5.option, i = _ref5.i, getItemOptions = _ref5.getItemOptions;
    return ["p-autocomplete-option", {
      "p-autocomplete-option-selected": instance.isSelected(_option),
      "p-focus": instance.focusedOptionIndex === instance.getOptionIndex(i, getItemOptions),
      "p-disabled": instance.isOptionDisabled(_option)
    }];
  }, "option"),
  emptyMessage: "p-autocomplete-empty-message"
};
var AutoCompleteStyle = BaseStyle.extend({
  name: "autocomplete",
  theme: theme3,
  classes,
  inlineStyles
});
var script$1 = {
  name: "BaseAutoComplete",
  "extends": script$a,
  props: {
    suggestions: {
      type: Array,
      "default": null
    },
    optionLabel: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    scrollHeight: {
      type: String,
      "default": "14rem"
    },
    dropdown: {
      type: Boolean,
      "default": false
    },
    dropdownMode: {
      type: String,
      "default": "blank"
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    loading: {
      type: Boolean,
      "default": false
    },
    placeholder: {
      type: String,
      "default": null
    },
    dataKey: {
      type: String,
      "default": null
    },
    minLength: {
      type: Number,
      "default": 1
    },
    delay: {
      type: Number,
      "default": 300
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    forceSelection: {
      type: Boolean,
      "default": false
    },
    completeOnFocus: {
      type: Boolean,
      "default": false
    },
    inputId: {
      type: String,
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    panelStyle: {
      type: Object,
      "default": null
    },
    panelClass: {
      type: [String, Object],
      "default": null
    },
    overlayStyle: {
      type: Object,
      "default": null
    },
    overlayClass: {
      type: [String, Object],
      "default": null
    },
    dropdownIcon: {
      type: String,
      "default": null
    },
    dropdownClass: {
      type: [String, Object],
      "default": null
    },
    loader: {
      type: String,
      "default": null
    },
    loadingIcon: {
      type: String,
      "default": null
    },
    removeTokenIcon: {
      type: String,
      "default": null
    },
    chipIcon: {
      type: String,
      "default": null
    },
    virtualScrollerOptions: {
      type: Object,
      "default": null
    },
    autoOptionFocus: {
      type: Boolean,
      "default": false
    },
    selectOnFocus: {
      type: Boolean,
      "default": false
    },
    focusOnHover: {
      type: Boolean,
      "default": true
    },
    searchLocale: {
      type: String,
      "default": void 0
    },
    searchMessage: {
      type: String,
      "default": null
    },
    selectionMessage: {
      type: String,
      "default": null
    },
    emptySelectionMessage: {
      type: String,
      "default": null
    },
    emptySearchMessage: {
      type: String,
      "default": null
    },
    showEmptyMessage: {
      type: Boolean,
      "default": true
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    typeahead: {
      type: Boolean,
      "default": true
    },
    ariaLabel: {
      type: String,
      "default": null
    },
    ariaLabelledby: {
      type: String,
      "default": null
    }
  },
  style: AutoCompleteStyle,
  provide: /* @__PURE__ */ __name(function provide6() {
    return {
      $pcAutoComplete: this,
      $parentInstance: this
    };
  }, "provide")
};
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
__name(_typeof$1, "_typeof$1");
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
__name(_toConsumableArray, "_toConsumableArray");
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
__name(_nonIterableSpread, "_nonIterableSpread");
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
__name(_unsupportedIterableToArray, "_unsupportedIterableToArray");
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
__name(_iterableToArray, "_iterableToArray");
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
__name(_arrayWithoutHoles, "_arrayWithoutHoles");
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
__name(_arrayLikeToArray, "_arrayLikeToArray");
var script = {
  name: "AutoComplete",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["change", "focus", "blur", "item-select", "item-unselect", "option-select", "option-unselect", "dropdown-click", "clear", "complete", "before-show", "before-hide", "show", "hide"],
  inject: {
    $pcFluid: {
      "default": null
    }
  },
  outsideClickListener: null,
  resizeListener: null,
  scrollHandler: null,
  overlay: null,
  virtualScroller: null,
  searchTimeout: null,
  dirty: false,
  data: /* @__PURE__ */ __name(function data4() {
    return {
      id: this.$attrs.id,
      clicked: false,
      focused: false,
      focusedOptionIndex: -1,
      focusedMultipleOptionIndex: -1,
      overlayVisible: false,
      searching: false
    };
  }, "data"),
  watch: {
    "$attrs.id": /* @__PURE__ */ __name(function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    }, "$attrsId"),
    suggestions: /* @__PURE__ */ __name(function suggestions() {
      if (this.searching) {
        this.show();
        this.focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
        this.searching = false;
        !this.showEmptyMessage && this.visibleOptions.length === 0 && this.hide();
      }
      this.autoUpdateModel();
    }, "suggestions")
  },
  mounted: /* @__PURE__ */ __name(function mounted3() {
    this.id = this.id || UniqueComponentId();
    this.autoUpdateModel();
  }, "mounted"),
  updated: /* @__PURE__ */ __name(function updated2() {
    if (this.overlayVisible) {
      this.alignOverlay();
    }
  }, "updated"),
  beforeUnmount: /* @__PURE__ */ __name(function beforeUnmount3() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay) {
      ZIndex.clear(this.overlay);
      this.overlay = null;
    }
  }, "beforeUnmount"),
  methods: {
    getOptionIndex: /* @__PURE__ */ __name(function getOptionIndex(index, fn) {
      return this.virtualScrollerDisabled ? index : fn && fn(index)["index"];
    }, "getOptionIndex"),
    getOptionLabel: /* @__PURE__ */ __name(function getOptionLabel(option2) {
      return this.optionLabel ? resolveFieldData(option2, this.optionLabel) : option2;
    }, "getOptionLabel"),
    getOptionValue: /* @__PURE__ */ __name(function getOptionValue(option2) {
      return option2;
    }, "getOptionValue"),
    getOptionRenderKey: /* @__PURE__ */ __name(function getOptionRenderKey(option2, index) {
      return (this.dataKey ? resolveFieldData(option2, this.dataKey) : this.getOptionLabel(option2)) + "_" + index;
    }, "getOptionRenderKey"),
    getPTOptions: /* @__PURE__ */ __name(function getPTOptions3(option2, itemOptions, index, key) {
      return this.ptm(key, {
        context: {
          selected: this.isSelected(option2),
          focused: this.focusedOptionIndex === this.getOptionIndex(index, itemOptions),
          disabled: this.isOptionDisabled(option2)
        }
      });
    }, "getPTOptions"),
    isOptionDisabled: /* @__PURE__ */ __name(function isOptionDisabled(option2) {
      return this.optionDisabled ? resolveFieldData(option2, this.optionDisabled) : false;
    }, "isOptionDisabled"),
    isOptionGroup: /* @__PURE__ */ __name(function isOptionGroup(option2) {
      return this.optionGroupLabel && option2.optionGroup && option2.group;
    }, "isOptionGroup"),
    getOptionGroupLabel: /* @__PURE__ */ __name(function getOptionGroupLabel(optionGroup) {
      return resolveFieldData(optionGroup, this.optionGroupLabel);
    }, "getOptionGroupLabel"),
    getOptionGroupChildren: /* @__PURE__ */ __name(function getOptionGroupChildren(optionGroup) {
      return resolveFieldData(optionGroup, this.optionGroupChildren);
    }, "getOptionGroupChildren"),
    getAriaPosInset: /* @__PURE__ */ __name(function getAriaPosInset(index) {
      var _this = this;
      return (this.optionGroupLabel ? index - this.visibleOptions.slice(0, index).filter(function(option2) {
        return _this.isOptionGroup(option2);
      }).length : index) + 1;
    }, "getAriaPosInset"),
    show: /* @__PURE__ */ __name(function show(isFocus) {
      this.$emit("before-show");
      this.dirty = true;
      this.overlayVisible = true;
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      isFocus && focus(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    }, "show"),
    hide: /* @__PURE__ */ __name(function hide(isFocus) {
      var _this2 = this;
      var _hide = /* @__PURE__ */ __name(function _hide2() {
        var _this2$$refs$focusInp;
        _this2.$emit("before-hide");
        _this2.dirty = isFocus;
        _this2.overlayVisible = false;
        _this2.clicked = false;
        _this2.focusedOptionIndex = -1;
        isFocus && focus(_this2.multiple ? _this2.$refs.focusInput : (_this2$$refs$focusInp = _this2.$refs.focusInput) === null || _this2$$refs$focusInp === void 0 ? void 0 : _this2$$refs$focusInp.$el);
      }, "_hide");
      setTimeout(function() {
        _hide();
      }, 0);
    }, "hide"),
    onFocus: /* @__PURE__ */ __name(function onFocus2(event) {
      if (this.disabled) {
        return;
      }
      if (!this.dirty && this.completeOnFocus) {
        this.search(event, event.target.value, "focus");
      }
      this.dirty = true;
      this.focused = true;
      if (this.overlayVisible) {
        this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
        this.scrollInView(this.focusedOptionIndex);
      }
      this.$emit("focus", event);
    }, "onFocus"),
    onBlur: /* @__PURE__ */ __name(function onBlur(event) {
      var _this$formField$onBlu, _this$formField;
      this.dirty = false;
      this.focused = false;
      this.focusedOptionIndex = -1;
      this.$emit("blur", event);
      (_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField);
    }, "onBlur"),
    onKeyDown: /* @__PURE__ */ __name(function onKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(event);
          break;
        case "ArrowRight":
          this.onArrowRightKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "PageDown":
          this.onPageDownKey(event);
          break;
        case "PageUp":
          this.onPageUpKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event);
          break;
        case "Backspace":
          this.onBackspaceKey(event);
          break;
      }
      this.clicked = false;
    }, "onKeyDown"),
    onInput: /* @__PURE__ */ __name(function onInput(event) {
      var _this3 = this;
      if (this.typeahead) {
        if (this.searchTimeout) {
          clearTimeout(this.searchTimeout);
        }
        var query = event.target.value;
        if (!this.multiple) {
          this.updateModel(event, query);
        }
        if (query.length === 0) {
          this.hide();
          this.$emit("clear");
        } else {
          if (query.length >= this.minLength) {
            this.focusedOptionIndex = -1;
            this.searchTimeout = setTimeout(function() {
              _this3.search(event, query, "input");
            }, this.delay);
          } else {
            this.hide();
          }
        }
      }
    }, "onInput"),
    onChange: /* @__PURE__ */ __name(function onChange(event) {
      var _this4 = this;
      if (this.forceSelection) {
        var valid = false;
        if (this.visibleOptions && !this.multiple) {
          var value = this.multiple ? this.$refs.focusInput.value : this.$refs.focusInput.$el.value;
          var matchedValue = this.visibleOptions.find(function(option2) {
            return _this4.isOptionMatched(option2, value || "");
          });
          if (matchedValue !== void 0) {
            valid = true;
            !this.isSelected(matchedValue) && this.onOptionSelect(event, matchedValue);
          }
        }
        if (!valid) {
          if (this.multiple) this.$refs.focusInput.value = "";
          else this.$refs.focusInput.$el.value = "";
          this.$emit("clear");
          !this.multiple && this.updateModel(event, null);
        }
      }
    }, "onChange"),
    onMultipleContainerFocus: /* @__PURE__ */ __name(function onMultipleContainerFocus() {
      if (this.disabled) {
        return;
      }
      this.focused = true;
    }, "onMultipleContainerFocus"),
    onMultipleContainerBlur: /* @__PURE__ */ __name(function onMultipleContainerBlur() {
      this.focusedMultipleOptionIndex = -1;
      this.focused = false;
    }, "onMultipleContainerBlur"),
    onMultipleContainerKeyDown: /* @__PURE__ */ __name(function onMultipleContainerKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      switch (event.code) {
        case "ArrowLeft":
          this.onArrowLeftKeyOnMultiple(event);
          break;
        case "ArrowRight":
          this.onArrowRightKeyOnMultiple(event);
          break;
        case "Backspace":
          this.onBackspaceKeyOnMultiple(event);
          break;
      }
    }, "onMultipleContainerKeyDown"),
    onContainerClick: /* @__PURE__ */ __name(function onContainerClick(event) {
      this.clicked = true;
      if (this.disabled || this.searching || this.loading || this.isDropdownClicked(event)) {
        return;
      }
      if (!this.overlay || !this.overlay.contains(event.target)) {
        focus(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
      }
    }, "onContainerClick"),
    onDropdownClick: /* @__PURE__ */ __name(function onDropdownClick(event) {
      var query = void 0;
      if (this.overlayVisible) {
        this.hide(true);
      } else {
        var target = this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el;
        focus(target);
        query = target.value;
        if (this.dropdownMode === "blank") this.search(event, "", "dropdown");
        else if (this.dropdownMode === "current") this.search(event, query, "dropdown");
      }
      this.$emit("dropdown-click", {
        originalEvent: event,
        query
      });
    }, "onDropdownClick"),
    onOptionSelect: /* @__PURE__ */ __name(function onOptionSelect(event, option2) {
      var isHide = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      var value = this.getOptionValue(option2);
      if (this.multiple) {
        this.$refs.focusInput.value = "";
        if (!this.isSelected(option2)) {
          this.updateModel(event, [].concat(_toConsumableArray(this.d_value || []), [value]));
        }
      } else {
        this.updateModel(event, value);
      }
      this.$emit("item-select", {
        originalEvent: event,
        value: option2
      });
      this.$emit("option-select", {
        originalEvent: event,
        value: option2
      });
      isHide && this.hide(true);
    }, "onOptionSelect"),
    onOptionMouseMove: /* @__PURE__ */ __name(function onOptionMouseMove(event, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index);
      }
    }, "onOptionMouseMove"),
    onOverlayClick: /* @__PURE__ */ __name(function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.$el
      });
    }, "onOverlayClick"),
    onOverlayKeyDown: /* @__PURE__ */ __name(function onOverlayKeyDown(event) {
      switch (event.code) {
        case "Escape":
          this.onEscapeKey(event);
          break;
      }
    }, "onOverlayKeyDown"),
    onArrowDownKey: /* @__PURE__ */ __name(function onArrowDownKey(event) {
      if (!this.overlayVisible) {
        return;
      }
      var optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      event.preventDefault();
    }, "onArrowDownKey"),
    onArrowUpKey: /* @__PURE__ */ __name(function onArrowUpKey(event) {
      if (!this.overlayVisible) {
        return;
      }
      if (event.altKey) {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        var optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
        event.preventDefault();
      }
    }, "onArrowUpKey"),
    onArrowLeftKey: /* @__PURE__ */ __name(function onArrowLeftKey2(event) {
      var target = event.currentTarget;
      this.focusedOptionIndex = -1;
      if (this.multiple) {
        if (isEmpty(target.value) && this.$filled) {
          focus(this.$refs.multiContainer);
          this.focusedMultipleOptionIndex = this.d_value.length;
        } else {
          event.stopPropagation();
        }
      }
    }, "onArrowLeftKey"),
    onArrowRightKey: /* @__PURE__ */ __name(function onArrowRightKey2(event) {
      this.focusedOptionIndex = -1;
      this.multiple && event.stopPropagation();
    }, "onArrowRightKey"),
    onHomeKey: /* @__PURE__ */ __name(function onHomeKey2(event) {
      var currentTarget = event.currentTarget;
      var len = currentTarget.value.length;
      currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
      this.focusedOptionIndex = -1;
      event.preventDefault();
    }, "onHomeKey"),
    onEndKey: /* @__PURE__ */ __name(function onEndKey2(event) {
      var currentTarget = event.currentTarget;
      var len = currentTarget.value.length;
      currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
      this.focusedOptionIndex = -1;
      event.preventDefault();
    }, "onEndKey"),
    onPageUpKey: /* @__PURE__ */ __name(function onPageUpKey2(event) {
      this.scrollInView(0);
      event.preventDefault();
    }, "onPageUpKey"),
    onPageDownKey: /* @__PURE__ */ __name(function onPageDownKey2(event) {
      this.scrollInView(this.visibleOptions.length - 1);
      event.preventDefault();
    }, "onPageDownKey"),
    onEnterKey: /* @__PURE__ */ __name(function onEnterKey2(event) {
      if (!this.typeahead) {
        if (this.multiple) {
          this.updateModel(event, [].concat(_toConsumableArray(this.d_value || []), [event.target.value]));
          this.$refs.focusInput.value = "";
        }
      } else {
        if (!this.overlayVisible) {
          this.focusedOptionIndex = -1;
          this.onArrowDownKey(event);
        } else {
          if (this.focusedOptionIndex !== -1) {
            this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
          }
          this.hide();
        }
      }
      event.preventDefault();
    }, "onEnterKey"),
    onEscapeKey: /* @__PURE__ */ __name(function onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    }, "onEscapeKey"),
    onTabKey: /* @__PURE__ */ __name(function onTabKey(event) {
      if (this.focusedOptionIndex !== -1) {
        this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
      }
      this.overlayVisible && this.hide();
    }, "onTabKey"),
    onBackspaceKey: /* @__PURE__ */ __name(function onBackspaceKey(event) {
      if (this.multiple) {
        if (isNotEmpty(this.d_value) && !this.$refs.focusInput.value) {
          var removedValue = this.d_value[this.d_value.length - 1];
          var newValue = this.d_value.slice(0, -1);
          this.writeValue(newValue, event);
          this.$emit("item-unselect", {
            originalEvent: event,
            value: removedValue
          });
          this.$emit("option-unselect", {
            originalEvent: event,
            value: removedValue
          });
        }
        event.stopPropagation();
      }
    }, "onBackspaceKey"),
    onArrowLeftKeyOnMultiple: /* @__PURE__ */ __name(function onArrowLeftKeyOnMultiple() {
      this.focusedMultipleOptionIndex = this.focusedMultipleOptionIndex < 1 ? 0 : this.focusedMultipleOptionIndex - 1;
    }, "onArrowLeftKeyOnMultiple"),
    onArrowRightKeyOnMultiple: /* @__PURE__ */ __name(function onArrowRightKeyOnMultiple() {
      this.focusedMultipleOptionIndex++;
      if (this.focusedMultipleOptionIndex > this.d_value.length - 1) {
        this.focusedMultipleOptionIndex = -1;
        focus(this.$refs.focusInput);
      }
    }, "onArrowRightKeyOnMultiple"),
    onBackspaceKeyOnMultiple: /* @__PURE__ */ __name(function onBackspaceKeyOnMultiple(event) {
      if (this.focusedMultipleOptionIndex !== -1) {
        this.removeOption(event, this.focusedMultipleOptionIndex);
      }
    }, "onBackspaceKeyOnMultiple"),
    onOverlayEnter: /* @__PURE__ */ __name(function onOverlayEnter(el) {
      ZIndex.set("overlay", el, this.$primevue.config.zIndex.overlay);
      addStyle(el, {
        position: "absolute",
        top: "0",
        left: "0"
      });
      this.alignOverlay();
    }, "onOverlayEnter"),
    onOverlayAfterEnter: /* @__PURE__ */ __name(function onOverlayAfterEnter() {
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.$emit("show");
    }, "onOverlayAfterEnter"),
    onOverlayLeave: /* @__PURE__ */ __name(function onOverlayLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit("hide");
      this.overlay = null;
    }, "onOverlayLeave"),
    onOverlayAfterLeave: /* @__PURE__ */ __name(function onOverlayAfterLeave(el) {
      ZIndex.clear(el);
    }, "onOverlayAfterLeave"),
    alignOverlay: /* @__PURE__ */ __name(function alignOverlay() {
      var target = this.multiple ? this.$refs.multiContainer : this.$refs.focusInput.$el;
      if (this.appendTo === "self") {
        relativePosition(this.overlay, target);
      } else {
        this.overlay.style.minWidth = getOuterWidth(target) + "px";
        absolutePosition(this.overlay, target);
      }
    }, "alignOverlay"),
    bindOutsideClickListener: /* @__PURE__ */ __name(function bindOutsideClickListener() {
      var _this5 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this5.overlayVisible && _this5.overlay && _this5.isOutsideClicked(event)) {
            _this5.hide();
          }
        };
        document.addEventListener("click", this.outsideClickListener);
      }
    }, "bindOutsideClickListener"),
    unbindOutsideClickListener: /* @__PURE__ */ __name(function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    }, "unbindOutsideClickListener"),
    bindScrollListener: /* @__PURE__ */ __name(function bindScrollListener() {
      var _this6 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, function() {
          if (_this6.overlayVisible) {
            _this6.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    }, "bindScrollListener"),
    unbindScrollListener: /* @__PURE__ */ __name(function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }, "unbindScrollListener"),
    bindResizeListener: /* @__PURE__ */ __name(function bindResizeListener() {
      var _this7 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this7.overlayVisible && !isTouchDevice()) {
            _this7.hide();
          }
        };
        window.addEventListener("resize", this.resizeListener);
      }
    }, "bindResizeListener"),
    unbindResizeListener: /* @__PURE__ */ __name(function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    }, "unbindResizeListener"),
    isOutsideClicked: /* @__PURE__ */ __name(function isOutsideClicked(event) {
      return !this.overlay.contains(event.target) && !this.isInputClicked(event) && !this.isDropdownClicked(event);
    }, "isOutsideClicked"),
    isInputClicked: /* @__PURE__ */ __name(function isInputClicked(event) {
      if (this.multiple) return event.target === this.$refs.multiContainer || this.$refs.multiContainer.contains(event.target);
      else return event.target === this.$refs.focusInput.$el;
    }, "isInputClicked"),
    isDropdownClicked: /* @__PURE__ */ __name(function isDropdownClicked(event) {
      return this.$refs.dropdownButton ? event.target === this.$refs.dropdownButton || this.$refs.dropdownButton.contains(event.target) : false;
    }, "isDropdownClicked"),
    isOptionMatched: /* @__PURE__ */ __name(function isOptionMatched(option2, value) {
      var _this$getOptionLabel;
      return this.isValidOption(option2) && ((_this$getOptionLabel = this.getOptionLabel(option2)) === null || _this$getOptionLabel === void 0 ? void 0 : _this$getOptionLabel.toLocaleLowerCase(this.searchLocale)) === value.toLocaleLowerCase(this.searchLocale);
    }, "isOptionMatched"),
    isValidOption: /* @__PURE__ */ __name(function isValidOption(option2) {
      return isNotEmpty(option2) && !(this.isOptionDisabled(option2) || this.isOptionGroup(option2));
    }, "isValidOption"),
    isValidSelectedOption: /* @__PURE__ */ __name(function isValidSelectedOption(option2) {
      return this.isValidOption(option2) && this.isSelected(option2);
    }, "isValidSelectedOption"),
    isEquals: /* @__PURE__ */ __name(function isEquals(value1, value2) {
      return equals(value1, value2, this.equalityKey);
    }, "isEquals"),
    isSelected: /* @__PURE__ */ __name(function isSelected(option2) {
      var _this8 = this;
      var optionValue = this.getOptionValue(option2);
      return this.multiple ? (this.d_value || []).some(function(value) {
        return _this8.isEquals(value, optionValue);
      }) : this.isEquals(this.d_value, this.getOptionValue(option2));
    }, "isSelected"),
    findFirstOptionIndex: /* @__PURE__ */ __name(function findFirstOptionIndex() {
      var _this9 = this;
      return this.visibleOptions.findIndex(function(option2) {
        return _this9.isValidOption(option2);
      });
    }, "findFirstOptionIndex"),
    findLastOptionIndex: /* @__PURE__ */ __name(function findLastOptionIndex() {
      var _this10 = this;
      return findLastIndex(this.visibleOptions, function(option2) {
        return _this10.isValidOption(option2);
      });
    }, "findLastOptionIndex"),
    findNextOptionIndex: /* @__PURE__ */ __name(function findNextOptionIndex(index) {
      var _this11 = this;
      var matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex(function(option2) {
        return _this11.isValidOption(option2);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    }, "findNextOptionIndex"),
    findPrevOptionIndex: /* @__PURE__ */ __name(function findPrevOptionIndex(index) {
      var _this12 = this;
      var matchedOptionIndex = index > 0 ? findLastIndex(this.visibleOptions.slice(0, index), function(option2) {
        return _this12.isValidOption(option2);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }, "findPrevOptionIndex"),
    findSelectedOptionIndex: /* @__PURE__ */ __name(function findSelectedOptionIndex() {
      var _this13 = this;
      return this.$filled ? this.visibleOptions.findIndex(function(option2) {
        return _this13.isValidSelectedOption(option2);
      }) : -1;
    }, "findSelectedOptionIndex"),
    findFirstFocusedOptionIndex: /* @__PURE__ */ __name(function findFirstFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    }, "findFirstFocusedOptionIndex"),
    findLastFocusedOptionIndex: /* @__PURE__ */ __name(function findLastFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    }, "findLastFocusedOptionIndex"),
    search: /* @__PURE__ */ __name(function search(event, query, source) {
      if (query === void 0 || query === null) {
        return;
      }
      if (source === "input" && query.trim().length === 0) {
        return;
      }
      this.searching = true;
      this.$emit("complete", {
        originalEvent: event,
        query
      });
    }, "search"),
    removeOption: /* @__PURE__ */ __name(function removeOption(event, index) {
      var _this14 = this;
      var removedOption = this.d_value[index];
      var value = this.d_value.filter(function(_, i) {
        return i !== index;
      }).map(function(option2) {
        return _this14.getOptionValue(option2);
      });
      this.updateModel(event, value);
      this.$emit("item-unselect", {
        originalEvent: event,
        value: removedOption
      });
      this.$emit("option-unselect", {
        originalEvent: event,
        value: removedOption
      });
      this.dirty = true;
      focus(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    }, "removeOption"),
    changeFocusedOptionIndex: /* @__PURE__ */ __name(function changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionIndex !== index) {
        this.focusedOptionIndex = index;
        this.scrollInView();
        if (this.selectOnFocus) {
          this.onOptionSelect(event, this.visibleOptions[index], false);
        }
      }
    }, "changeFocusedOptionIndex"),
    scrollInView: /* @__PURE__ */ __name(function scrollInView2() {
      var _this15 = this;
      var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      this.$nextTick(function() {
        var id2 = index !== -1 ? "".concat(_this15.id, "_").concat(index) : _this15.focusedOptionId;
        var element = findSingle(_this15.list, 'li[id="'.concat(id2, '"]'));
        if (element) {
          element.scrollIntoView && element.scrollIntoView({
            block: "nearest",
            inline: "start"
          });
        } else if (!_this15.virtualScrollerDisabled) {
          _this15.virtualScroller && _this15.virtualScroller.scrollToIndex(index !== -1 ? index : _this15.focusedOptionIndex);
        }
      });
    }, "scrollInView"),
    autoUpdateModel: /* @__PURE__ */ __name(function autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.$filled) {
        this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
        this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], false);
      }
    }, "autoUpdateModel"),
    updateModel: /* @__PURE__ */ __name(function updateModel(event, value) {
      this.writeValue(value, event);
      this.$emit("change", {
        originalEvent: event,
        value
      });
    }, "updateModel"),
    flatOptions: /* @__PURE__ */ __name(function flatOptions(options) {
      var _this16 = this;
      return (options || []).reduce(function(result, option2, index) {
        result.push({
          optionGroup: option2,
          group: true,
          index
        });
        var optionGroupChildren = _this16.getOptionGroupChildren(option2);
        optionGroupChildren && optionGroupChildren.forEach(function(o) {
          return result.push(o);
        });
        return result;
      }, []);
    }, "flatOptions"),
    overlayRef: /* @__PURE__ */ __name(function overlayRef(el) {
      this.overlay = el;
    }, "overlayRef"),
    listRef: /* @__PURE__ */ __name(function listRef(el, contentRef) {
      this.list = el;
      contentRef && contentRef(el);
    }, "listRef"),
    virtualScrollerRef: /* @__PURE__ */ __name(function virtualScrollerRef(el) {
      this.virtualScroller = el;
    }, "virtualScrollerRef")
  },
  computed: {
    visibleOptions: /* @__PURE__ */ __name(function visibleOptions() {
      return this.optionGroupLabel ? this.flatOptions(this.suggestions) : this.suggestions || [];
    }, "visibleOptions"),
    inputValue: /* @__PURE__ */ __name(function inputValue() {
      if (this.$filled) {
        if (_typeof$1(this.d_value) === "object") {
          var label = this.getOptionLabel(this.d_value);
          return label != null ? label : this.d_value;
        } else {
          return this.d_value;
        }
      } else {
        return "";
      }
    }, "inputValue"),
    // @deprecated use $filled instead.
    hasSelectedOption: /* @__PURE__ */ __name(function hasSelectedOption() {
      return this.$filled;
    }, "hasSelectedOption"),
    equalityKey: /* @__PURE__ */ __name(function equalityKey() {
      return this.dataKey;
    }, "equalityKey"),
    searchResultMessageText: /* @__PURE__ */ __name(function searchResultMessageText() {
      return isNotEmpty(this.visibleOptions) && this.overlayVisible ? this.searchMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptySearchMessageText;
    }, "searchResultMessageText"),
    searchMessageText: /* @__PURE__ */ __name(function searchMessageText() {
      return this.searchMessage || this.$primevue.config.locale.searchMessage || "";
    }, "searchMessageText"),
    emptySearchMessageText: /* @__PURE__ */ __name(function emptySearchMessageText() {
      return this.emptySearchMessage || this.$primevue.config.locale.emptySearchMessage || "";
    }, "emptySearchMessageText"),
    selectionMessageText: /* @__PURE__ */ __name(function selectionMessageText() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    }, "selectionMessageText"),
    emptySelectionMessageText: /* @__PURE__ */ __name(function emptySelectionMessageText() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    }, "emptySelectionMessageText"),
    selectedMessageText: /* @__PURE__ */ __name(function selectedMessageText() {
      return this.$filled ? this.selectionMessageText.replaceAll("{0}", this.multiple ? this.d_value.length : "1") : this.emptySelectionMessageText;
    }, "selectedMessageText"),
    listAriaLabel: /* @__PURE__ */ __name(function listAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : void 0;
    }, "listAriaLabel"),
    focusedOptionId: /* @__PURE__ */ __name(function focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? "".concat(this.id, "_").concat(this.focusedOptionIndex) : null;
    }, "focusedOptionId"),
    focusedMultipleOptionId: /* @__PURE__ */ __name(function focusedMultipleOptionId() {
      return this.focusedMultipleOptionIndex !== -1 ? "".concat(this.id, "_multiple_option_").concat(this.focusedMultipleOptionIndex) : null;
    }, "focusedMultipleOptionId"),
    ariaSetSize: /* @__PURE__ */ __name(function ariaSetSize() {
      var _this17 = this;
      return this.visibleOptions.filter(function(option2) {
        return !_this17.isOptionGroup(option2);
      }).length;
    }, "ariaSetSize"),
    virtualScrollerDisabled: /* @__PURE__ */ __name(function virtualScrollerDisabled() {
      return !this.virtualScrollerOptions;
    }, "virtualScrollerDisabled"),
    panelId: /* @__PURE__ */ __name(function panelId() {
      return this.id + "_panel";
    }, "panelId")
  },
  components: {
    InputText: script$b,
    VirtualScroller: script$c,
    Portal: script$d,
    ChevronDownIcon: script$e,
    SpinnerIcon: script$f,
    Chip: script$g
  },
  directives: {
    ripple: Ripple
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
__name(_typeof, "_typeof");
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
__name(ownKeys, "ownKeys");
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
__name(_objectSpread, "_objectSpread");
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
__name(_defineProperty, "_defineProperty");
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
__name(_toPropertyKey, "_toPropertyKey");
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
__name(_toPrimitive, "_toPrimitive");
var _hoisted_1 = ["aria-activedescendant"];
var _hoisted_2 = ["id", "aria-label", "aria-setsize", "aria-posinset"];
var _hoisted_3 = ["id", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid"];
var _hoisted_4 = ["disabled", "aria-expanded", "aria-controls"];
var _hoisted_5 = ["id"];
var _hoisted_6 = ["id", "aria-label"];
var _hoisted_7 = ["id"];
var _hoisted_8 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-selected", "data-p-focus", "data-p-disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InputText = resolveComponent("InputText");
  var _component_Chip = resolveComponent("Chip");
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_VirtualScroller = resolveComponent("VirtualScroller");
  var _component_Portal = resolveComponent("Portal");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root"),
    style: _ctx.sx("root"),
    onClick: _cache[11] || (_cache[11] = function() {
      return $options.onContainerClick && $options.onContainerClick.apply($options, arguments);
    })
  }, _ctx.ptmi("root")), [!_ctx.multiple ? (openBlock(), createBlock(_component_InputText, {
    key: 0,
    ref: "focusInput",
    id: _ctx.inputId,
    type: "text",
    name: _ctx.$formName,
    "class": normalizeClass([_ctx.cx("pcInputText"), _ctx.inputClass]),
    style: normalizeStyle(_ctx.inputStyle),
    value: $options.inputValue,
    placeholder: _ctx.placeholder,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    fluid: _ctx.$fluid,
    disabled: _ctx.disabled,
    size: _ctx.size,
    invalid: _ctx.invalid,
    variant: _ctx.variant,
    autocomplete: "off",
    role: "combobox",
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $options.panelId,
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    onFocus: $options.onFocus,
    onBlur: $options.onBlur,
    onKeydown: $options.onKeyDown,
    onInput: $options.onInput,
    onChange: $options.onChange,
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm("pcInputText")
  }, null, 8, ["id", "name", "class", "style", "value", "placeholder", "tabindex", "fluid", "disabled", "size", "invalid", "variant", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "onFocus", "onBlur", "onKeydown", "onInput", "onChange", "unstyled", "pt"])) : createCommentVNode("", true), _ctx.multiple ? (openBlock(), createElementBlock("ul", mergeProps({
    key: 1,
    ref: "multiContainer",
    "class": _ctx.cx("inputMultiple"),
    tabindex: "-1",
    role: "listbox",
    "aria-orientation": "horizontal",
    "aria-activedescendant": $data.focused ? $options.focusedMultipleOptionId : void 0,
    onFocus: _cache[5] || (_cache[5] = function() {
      return $options.onMultipleContainerFocus && $options.onMultipleContainerFocus.apply($options, arguments);
    }),
    onBlur: _cache[6] || (_cache[6] = function() {
      return $options.onMultipleContainerBlur && $options.onMultipleContainerBlur.apply($options, arguments);
    }),
    onKeydown: _cache[7] || (_cache[7] = function() {
      return $options.onMultipleContainerKeyDown && $options.onMultipleContainerKeyDown.apply($options, arguments);
    })
  }, _ctx.ptm("inputMultiple")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.d_value, function(option2, i) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: "".concat(i, "_").concat($options.getOptionLabel(option2)),
      id: $data.id + "_multiple_option_" + i,
      "class": _ctx.cx("chipItem", {
        i
      }),
      role: "option",
      "aria-label": $options.getOptionLabel(option2),
      "aria-selected": true,
      "aria-setsize": _ctx.d_value.length,
      "aria-posinset": i + 1,
      ref_for: true
    }, _ctx.ptm("chipItem")), [renderSlot(_ctx.$slots, "chip", mergeProps({
      "class": _ctx.cx("pcChip"),
      value: option2,
      index: i,
      removeCallback: /* @__PURE__ */ __name(function removeCallback(event) {
        return $options.removeOption(event, i);
      }, "removeCallback"),
      ref_for: true
    }, _ctx.ptm("pcChip")), function() {
      return [createVNode(_component_Chip, {
        "class": normalizeClass(_ctx.cx("pcChip")),
        label: $options.getOptionLabel(option2),
        removeIcon: _ctx.chipIcon || _ctx.removeTokenIcon,
        removable: "",
        unstyled: _ctx.unstyled,
        onRemove: /* @__PURE__ */ __name(function onRemove($event) {
          return $options.removeOption($event, i);
        }, "onRemove"),
        pt: _ctx.ptm("pcChip")
      }, {
        removeicon: withCtx(function() {
          return [renderSlot(_ctx.$slots, _ctx.$slots.chipicon ? "chipicon" : "removetokenicon", {
            "class": normalizeClass(_ctx.cx("chipIcon")),
            index: i,
            removeCallback: /* @__PURE__ */ __name(function removeCallback(event) {
              return $options.removeOption(event, i);
            }, "removeCallback")
          })];
        }),
        _: 2
      }, 1032, ["class", "label", "removeIcon", "unstyled", "onRemove", "pt"])];
    })], 16, _hoisted_2);
  }), 128)), createBaseVNode("li", mergeProps({
    "class": _ctx.cx("inputChip"),
    role: "option"
  }, _ctx.ptm("inputChip")), [createBaseVNode("input", mergeProps({
    ref: "focusInput",
    id: _ctx.inputId,
    type: "text",
    style: _ctx.inputStyle,
    "class": _ctx.inputClass,
    placeholder: _ctx.placeholder,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    disabled: _ctx.disabled,
    autocomplete: "off",
    role: "combobox",
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $data.id + "_list",
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    "aria-invalid": _ctx.invalid || void 0,
    onFocus: _cache[0] || (_cache[0] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    }),
    onInput: _cache[3] || (_cache[3] = function() {
      return $options.onInput && $options.onInput.apply($options, arguments);
    }),
    onChange: _cache[4] || (_cache[4] = function() {
      return $options.onChange && $options.onChange.apply($options, arguments);
    })
  }, _ctx.ptm("input")), null, 16, _hoisted_3)], 16)], 16, _hoisted_1)) : createCommentVNode("", true), $data.searching || _ctx.loading ? renderSlot(_ctx.$slots, _ctx.$slots.loader ? "loader" : "loadingicon", {
    key: 2,
    "class": normalizeClass(_ctx.cx("loader"))
  }, function() {
    return [_ctx.loader || _ctx.loadingIcon ? (openBlock(), createElementBlock("i", mergeProps({
      key: 0,
      "class": ["pi-spin", _ctx.cx("loader"), _ctx.loader, _ctx.loadingIcon],
      "aria-hidden": "true"
    }, _ctx.ptm("loader")), null, 16)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
      key: 1,
      "class": _ctx.cx("loader"),
      spin: "",
      "aria-hidden": "true"
    }, _ctx.ptm("loader")), null, 16, ["class"]))];
  }) : createCommentVNode("", true), renderSlot(_ctx.$slots, _ctx.$slots.dropdown ? "dropdown" : "dropdownbutton", {
    toggleCallback: /* @__PURE__ */ __name(function toggleCallback(event) {
      return $options.onDropdownClick(event);
    }, "toggleCallback")
  }, function() {
    return [_ctx.dropdown ? (openBlock(), createElementBlock("button", mergeProps({
      key: 0,
      ref: "dropdownButton",
      type: "button",
      "class": [_ctx.cx("dropdown"), _ctx.dropdownClass],
      disabled: _ctx.disabled,
      "aria-haspopup": "listbox",
      "aria-expanded": $data.overlayVisible,
      "aria-controls": $options.panelId,
      onClick: _cache[8] || (_cache[8] = function() {
        return $options.onDropdownClick && $options.onDropdownClick.apply($options, arguments);
      })
    }, _ctx.ptm("dropdown")), [renderSlot(_ctx.$slots, "dropdownicon", {
      "class": normalizeClass(_ctx.dropdownIcon)
    }, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.dropdownIcon ? "span" : "ChevronDownIcon"), mergeProps({
        "class": _ctx.dropdownIcon
      }, _ctx.ptm("dropdownIcon")), null, 16, ["class"]))];
    })], 16, _hoisted_4)) : createCommentVNode("", true)];
  }), createBaseVNode("span", mergeProps({
    role: "status",
    "aria-live": "polite",
    "class": "p-hidden-accessible"
  }, _ctx.ptm("hiddenSearchResult"), {
    "data-p-hidden-accessible": true
  }), toDisplayString($options.searchResultMessageText), 17), createVNode(_component_Portal, {
    appendTo: _ctx.appendTo
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-connected-overlay",
        onEnter: $options.onOverlayEnter,
        onAfterEnter: $options.onOverlayAfterEnter,
        onLeave: $options.onOverlayLeave,
        onAfterLeave: $options.onOverlayAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [$data.overlayVisible ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.overlayRef,
            id: $options.panelId,
            "class": [_ctx.cx("overlay"), _ctx.panelClass, _ctx.overlayClass],
            style: _objectSpread(_objectSpread({}, _ctx.panelStyle), _ctx.overlayStyle),
            onClick: _cache[9] || (_cache[9] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            onKeydown: _cache[10] || (_cache[10] = function() {
              return $options.onOverlayKeyDown && $options.onOverlayKeyDown.apply($options, arguments);
            })
          }, _ctx.ptm("overlay")), [renderSlot(_ctx.$slots, "header", {
            value: _ctx.d_value,
            suggestions: $options.visibleOptions
          }), createBaseVNode("div", mergeProps({
            "class": _ctx.cx("listContainer"),
            style: {
              "max-height": $options.virtualScrollerDisabled ? _ctx.scrollHeight : ""
            }
          }, _ctx.ptm("listContainer")), [createVNode(_component_VirtualScroller, mergeProps({
            ref: $options.virtualScrollerRef
          }, _ctx.virtualScrollerOptions, {
            style: {
              height: _ctx.scrollHeight
            },
            items: $options.visibleOptions,
            tabindex: -1,
            disabled: $options.virtualScrollerDisabled,
            pt: _ctx.ptm("virtualScroller")
          }), createSlots({
            content: withCtx(function(_ref) {
              var styleClass = _ref.styleClass, contentRef = _ref.contentRef, items = _ref.items, getItemOptions = _ref.getItemOptions, contentStyle = _ref.contentStyle, itemSize = _ref.itemSize;
              return [createBaseVNode("ul", mergeProps({
                ref: /* @__PURE__ */ __name(function ref(el) {
                  return $options.listRef(el, contentRef);
                }, "ref"),
                id: $data.id + "_list",
                "class": [_ctx.cx("list"), styleClass],
                style: contentStyle,
                role: "listbox",
                "aria-label": $options.listAriaLabel
              }, _ctx.ptm("list")), [(openBlock(true), createElementBlock(Fragment, null, renderList(items, function(option2, i) {
                return openBlock(), createElementBlock(Fragment, {
                  key: $options.getOptionRenderKey(option2, $options.getOptionIndex(i, getItemOptions))
                }, [$options.isOptionGroup(option2) ? (openBlock(), createElementBlock("li", mergeProps({
                  key: 0,
                  id: $data.id + "_" + $options.getOptionIndex(i, getItemOptions),
                  style: {
                    height: itemSize ? itemSize + "px" : void 0
                  },
                  "class": _ctx.cx("optionGroup"),
                  role: "option",
                  ref_for: true
                }, _ctx.ptm("optionGroup")), [renderSlot(_ctx.$slots, "optiongroup", {
                  option: option2.optionGroup,
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function() {
                  return [createTextVNode(toDisplayString($options.getOptionGroupLabel(option2.optionGroup)), 1)];
                })], 16, _hoisted_7)) : withDirectives((openBlock(), createElementBlock("li", mergeProps({
                  key: 1,
                  id: $data.id + "_" + $options.getOptionIndex(i, getItemOptions),
                  style: {
                    height: itemSize ? itemSize + "px" : void 0
                  },
                  "class": _ctx.cx("option", {
                    option: option2,
                    i,
                    getItemOptions
                  }),
                  role: "option",
                  "aria-label": $options.getOptionLabel(option2),
                  "aria-selected": $options.isSelected(option2),
                  "aria-disabled": $options.isOptionDisabled(option2),
                  "aria-setsize": $options.ariaSetSize,
                  "aria-posinset": $options.getAriaPosInset($options.getOptionIndex(i, getItemOptions)),
                  onClick: /* @__PURE__ */ __name(function onClick2($event) {
                    return $options.onOptionSelect($event, option2);
                  }, "onClick"),
                  onMousemove: /* @__PURE__ */ __name(function onMousemove($event) {
                    return $options.onOptionMouseMove($event, $options.getOptionIndex(i, getItemOptions));
                  }, "onMousemove"),
                  "data-p-selected": $options.isSelected(option2),
                  "data-p-focus": $data.focusedOptionIndex === $options.getOptionIndex(i, getItemOptions),
                  "data-p-disabled": $options.isOptionDisabled(option2),
                  ref_for: true
                }, $options.getPTOptions(option2, getItemOptions, i, "option")), [renderSlot(_ctx.$slots, "option", {
                  option: option2,
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function() {
                  return [createTextVNode(toDisplayString($options.getOptionLabel(option2)), 1)];
                })], 16, _hoisted_8)), [[_directive_ripple]])], 64);
              }), 128)), _ctx.showEmptyMessage && (!items || items && items.length === 0) ? (openBlock(), createElementBlock("li", mergeProps({
                key: 0,
                "class": _ctx.cx("emptyMessage"),
                role: "option"
              }, _ctx.ptm("emptyMessage")), [renderSlot(_ctx.$slots, "empty", {}, function() {
                return [createTextVNode(toDisplayString($options.searchResultMessageText), 1)];
              })], 16)) : createCommentVNode("", true)], 16, _hoisted_6)];
            }),
            _: 2
          }, [_ctx.$slots.loader ? {
            name: "loader",
            fn: withCtx(function(_ref2) {
              var options = _ref2.options;
              return [renderSlot(_ctx.$slots, "loader", {
                options
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["style", "items", "disabled", "pt"])], 16), renderSlot(_ctx.$slots, "footer", {
            value: _ctx.d_value,
            suggestions: $options.visibleOptions
          }), createBaseVNode("span", mergeProps({
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenSelectedMessage"), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.selectedMessageText), 17)], 16, _hoisted_5)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16);
}
__name(render, "render");
script.render = render;
export {
  script$6 as a,
  script$3 as b,
  script$4 as c,
  script$2 as d,
  script as e,
  script$5 as s
};
//# sourceMappingURL=index-DJ92rVYf.js.map
