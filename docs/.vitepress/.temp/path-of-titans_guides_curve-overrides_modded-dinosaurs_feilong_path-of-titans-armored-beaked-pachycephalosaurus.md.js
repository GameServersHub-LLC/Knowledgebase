import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Not Updated","description":"","frontmatter":{},"headers":[],"relativePath":"path-of-titans/guides/curve-overrides/modded-dinosaurs/feilong/path-of-titans-armored-beaked-pachycephalosaurus.md","filePath":"path-of-titans/guides/curve-overrides/modded-dinosaurs/feilong/path-of-titans-armored-beaked-pachycephalosaurus.md","lastUpdated":1726616025000}');
const _sfc_main = { name: "path-of-titans/guides/curve-overrides/modded-dinosaurs/feilong/path-of-titans-armored-beaked-pachycephalosaurus.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="not-updated" tabindex="-1">Not Updated <a class="header-anchor" href="#not-updated" aria-label="Permalink to &quot;Not Updated&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("path-of-titans/guides/curve-overrides/modded-dinosaurs/feilong/path-of-titans-armored-beaked-pachycephalosaurus.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pathOfTitansArmoredBeakedPachycephalosaurus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pathOfTitansArmoredBeakedPachycephalosaurus as default
};
