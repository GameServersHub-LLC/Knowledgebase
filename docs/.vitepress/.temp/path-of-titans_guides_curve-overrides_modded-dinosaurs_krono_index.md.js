import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Krono","description":"Explore GameServersHub's Gaming Wiki for in-depth info on Path of Titans. Find details on gameplay, features, and updates for the ultimate dino MMO adventure!","frontmatter":{"head":[["meta",{"name":"description","content":"Explore GameServersHub's Gaming Wiki for in-depth info on Path of Titans. Find details on gameplay, features, and updates for the ultimate dino MMO adventure!"}],["meta",{"name":"keywords","content":"Path Of Titans"}]],"title":"Krono"},"headers":[],"relativePath":"path-of-titans/guides/curve-overrides/modded-dinosaurs/krono/index.md","filePath":"path-of-titans/guides/curve-overrides/modded-dinosaurs/krono/index.md","lastUpdated":1726618007000}`);
const _sfc_main = { name: "path-of-titans/guides/curve-overrides/modded-dinosaurs/krono/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="path-of-titans-krono" tabindex="-1">Path of Titans Krono <a class="header-anchor" href="#path-of-titans-krono" aria-label="Permalink to &quot;Path of Titans Krono&quot;">​</a></h1><p>Explore GameServersHub&#39;s Gaming Wiki for in-depth info on Path of Titans. Find details on gameplay, features, and updates for the ultimate dino MMO adventure!</p><p>This your mod? You want your info here? Make a ticket in our <a href="https://discord.gg/gsh" target="_blank" rel="noreferrer">Discord!</a></p><p>Modder&#39;s <a href="#">Discord Link</a></p><h2 id="bloop" tabindex="-1">Bloop <a class="header-anchor" href="#bloop" aria-label="Permalink to &quot;Bloop&quot;">​</a></h2><p><a href="./path-of-titans-bloop" target="_blank"><img src="https://web-cdn.alderongames.com/files/998/conversions/BloopCover1-icon.jpg"></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("path-of-titans/guides/curve-overrides/modded-dinosaurs/krono/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
