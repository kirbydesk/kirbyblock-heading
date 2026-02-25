(function() {
  "use strict";
  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const _sfc_main$3 = {
    props: {
      value: String,
      icon: String,
      layout: String
    }
  };
  var _sfc_render$3 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "blockinfo" }, [_c("div", [_c("svg", { staticClass: "k-icon", attrs: { "aria-hidden": "true" } }, [_c("use", { attrs: { "xlink:href": "#icon-" + _vm.icon } })]), _vm._v(" " + _vm._s(_vm.value) + " "), _vm.layout ? _c("span", [_vm._v("(" + _vm._s(_vm.layout) + ")")]) : _vm._e()])]);
  };
  var _sfc_staticRenderFns$3 = [];
  _sfc_render$3._withStripped = true;
  var __component__$3 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$3,
    _sfc_render$3,
    _sfc_staticRenderFns$3,
    false,
    null,
    "26526d24"
  );
  __component__$3.options.__file = "/Users/christian/Projects/kirbydesk/site/plugins/kirby-pagewizard/src/components/blockinfo.vue";
  const pwBlockinfo = __component__$3.exports;
  const _sfc_main$2 = {
    props: {
      value: String,
      content: {
        type: Object,
        default: () => ({})
      },
      alignDefault: { type: String, default: "left" }
    },
    computed: {
      parsedData() {
        var _a;
        const val = ((_a = this.content) == null ? void 0 : _a.tagline) || this.value;
        if (!val) return { text: "", align: this.alignDefault };
        try {
          return typeof val === "string" ? JSON.parse(val) : val;
        } catch (e) {
          return { text: val, align: this.alignDefault };
        }
      },
      text() {
        const { text = "" } = this.parsedData;
        return text;
      },
      align() {
        const { align = this.alignDefault } = this.parsedData;
        return align;
      }
    }
  };
  var _sfc_render$2 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwTagline", attrs: { "data-align": _vm.align } }, [_vm.text ? _c("div", { domProps: { "innerHTML": _vm._s(_vm.text) } }) : _c("div", { staticClass: "placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.tagline.placeholder")) + " ")])]);
  };
  var _sfc_staticRenderFns$2 = [];
  _sfc_render$2._withStripped = true;
  var __component__$2 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$2,
    _sfc_render$2,
    _sfc_staticRenderFns$2,
    false,
    null,
    "2287a490"
  );
  __component__$2.options.__file = "/Users/christian/Projects/kirbydesk/site/plugins/kirby-pagewizard/src/components/tagline.vue";
  const pwTagline = __component__$2.exports;
  const _sfc_main$1 = {
    props: {
      value: String,
      content: {
        type: Object,
        default: () => ({})
      },
      alignDefault: { type: String, default: "left" }
    },
    computed: {
      parsedData() {
        var _a;
        const val = ((_a = this.content) == null ? void 0 : _a.heading) || this.value;
        if (!val) return { text: "", level: "h2", align: this.alignDefault };
        try {
          return typeof val === "string" ? JSON.parse(val) : val;
        } catch (e) {
          return { text: val, level: "h2", align: this.alignDefault };
        }
      },
      text() {
        const { text = "" } = this.parsedData;
        return text;
      },
      level() {
        const { level = "h2" } = this.parsedData;
        return level;
      },
      align() {
        const { align = this.alignDefault } = this.parsedData;
        return align;
      }
    }
  };
  var _sfc_render$1 = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwHeading", attrs: { "data-align": _vm.align, "data-lvl": _vm.level } }, [_vm.text ? _c("div", { domProps: { "innerHTML": _vm._s(_vm.text) } }) : _c("div", { staticClass: "placeholder" }, [_vm._v(" " + _vm._s(_vm.$t("pw.field.heading.placeholder")) + " ")])]);
  };
  var _sfc_staticRenderFns$1 = [];
  _sfc_render$1._withStripped = true;
  var __component__$1 = /* @__PURE__ */ normalizeComponent(
    _sfc_main$1,
    _sfc_render$1,
    _sfc_staticRenderFns$1,
    false,
    null,
    "ad832d63"
  );
  __component__$1.options.__file = "/Users/christian/Projects/kirbydesk/site/plugins/kirby-pagewizard/src/components/heading.vue";
  const pwHeading = __component__$1.exports;
  const pwGridStyle = {
    computed: {
      gridVars() {
        return {
          "--grid-start-sm": Number(this.content.gridoffsetsm),
          "--grid-span-sm": Number(this.content.gridsizesm),
          "--grid-start-md": Number(this.content.gridoffsetmd),
          "--grid-span-md": Number(this.content.gridsizemd),
          "--grid-start-lg": Number(this.content.gridoffsetlg),
          "--grid-span-lg": Number(this.content.gridsizelg),
          "--grid-start-xl": Number(this.content.gridoffsetxl),
          "--grid-span-xl": Number(this.content.gridsizexl)
        };
      }
    }
  };
  const pwColorStyle = {
    data() {
      return {
        colors: null
      };
    },
    async created() {
      try {
        this.colors = await this.$api.get("pagewizard/colors");
      } catch (e) {
        this.colors = null;
      }
    },
    computed: {
      colorVars() {
        if (!this.colors) return {};
        const style = this.content.style || "default";
        const vars = {};
        if (style === "custom") {
          for (const [key, value] of Object.entries(this.colors.default)) {
            vars["--" + key] = value;
          }
          if (this.content.textcolor) {
            vars["--pw-color-text"] = this.content.textcolor;
            vars["--pw-color-heading"] = this.content.textcolor;
            vars["--pw-color-tagline"] = this.content.textcolor;
            vars["--pw-color-link"] = this.content.textcolor;
            vars["--pw-color-quote"] = this.content.textcolor;
            vars["--pw-color-cite"] = this.content.textcolor;
          }
          if (this.content.backgroundcolor) {
            vars["--pw-color-block-background"] = this.content.backgroundcolor;
          }
          const btnStyle = this.content.buttonstyle || "default";
          if (btnStyle === "variant" && this.colors.variant) {
            const btnKeys = Object.keys(this.colors.variant).filter((k) => k.startsWith("pw-color-button"));
            for (const key of btnKeys) {
              vars["--" + key] = this.colors.variant[key];
            }
          }
        } else {
          const palette = style === "variant" ? { ...this.colors.default, ...this.colors.variant } : this.colors.default;
          for (const [key, value] of Object.entries(palette)) {
            vars["--" + key] = value;
          }
        }
        return vars;
      }
    }
  };
  const _sfc_main = {
    components: {
      pwBlockinfo,
      pwTagline,
      pwHeading
    },
    mixins: [pwGridStyle, pwColorStyle],
    data() {
      return {
        settings: {},
        fieldDefaults: {}
      };
    },
    async created() {
      try {
        const response = await this.$api.get("pagewizard/settings/pwheading");
        this.settings = response.settings;
        this.fieldDefaults = response.fields || {};
      } catch (e) {
        this.settings = {};
      }
    }
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "pwPreview", style: _vm.colorVars, attrs: { "data-kirbyblock": "heading", "data-margintop": _vm.content.margintop === true ? "true" : null, "data-marginbottom": _vm.content.marginbottom === true ? "true" : null }, on: { "dblclick": _vm.open } }, [_c("pwBlockinfo", { attrs: { "value": _vm.$t("kirbyblock-heading.name"), "icon": "title" } }), _c("div", { staticClass: "pwGrid" }, [_c("div", { staticClass: "pwGridItem", style: _vm.gridVars, attrs: { "data-paddingtop": _vm.content.paddingtop === true ? "true" : null, "data-paddingright": _vm.content.paddingright === true ? "true" : null, "data-paddingbottom": _vm.content.paddingbottom === true ? "true" : null, "data-paddingleft": _vm.content.paddingleft === true ? "true" : null } }, [_vm.settings.tagline ? _c("pwTagline", { attrs: { "value": _vm.content.tagline, "alignDefault": _vm.fieldDefaults["align-tagline"] } }) : _vm._e(), _vm.settings.heading ? _c("pwHeading", { attrs: { "value": _vm.content.heading, "data-level": _vm.content.level, "alignDefault": _vm.fieldDefaults["align-heading"] } }) : _vm._e()], 1)])], 1);
  };
  var _sfc_staticRenderFns = [];
  _sfc_render._withStripped = true;
  var __component__ = /* @__PURE__ */ normalizeComponent(
    _sfc_main,
    _sfc_render,
    _sfc_staticRenderFns,
    false,
    null,
    null
  );
  __component__.options.__file = "/Users/christian/Projects/kirbydesk/site/plugins/kirbyblock-heading/src/blocks/index.vue";
  const pwheading = __component__.exports;
  panel.plugin("kirbydesk/kirbyblock-heading", {
    blocks: {
      pwheading
    }
  });
})();
