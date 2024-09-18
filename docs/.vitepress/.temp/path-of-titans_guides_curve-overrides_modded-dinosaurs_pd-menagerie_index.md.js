import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"P&D's Menagerie","description":"Explore GameServersHub's Gaming Wiki for in-depth info on Path of Titans. Find details on gameplay, features, and updates for the ultimate dino MMO adventure!","frontmatter":{"head":[["meta",{"name":"description","content":"Explore GameServersHub's Gaming Wiki for in-depth info on Path of Titans. Find details on gameplay, features, and updates for the ultimate dino MMO adventure!"}],["meta",{"name":"keywords","content":"Path Of Titans"}]],"title":"P&D's Menagerie"},"headers":[],"relativePath":"path-of-titans/guides/curve-overrides/modded-dinosaurs/pd-menagerie/index.md","filePath":"path-of-titans/guides/curve-overrides/modded-dinosaurs/pd-menagerie/index.md","lastUpdated":1726618007000}`);
const _sfc_main = { name: "path-of-titans/guides/curve-overrides/modded-dinosaurs/pd-menagerie/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="path-of-titans-p-d-s-menagerie" tabindex="-1">Path of Titans P&amp;D&#39;s Menagerie <a class="header-anchor" href="#path-of-titans-p-d-s-menagerie" aria-label="Permalink to &quot;Path of Titans P&amp;D&#39;s Menagerie&quot;">​</a></h1><p>Introducing P&amp;D&#39;s menagerie! While we do aim for accuracy, we as a team aim for our creatures to provide a unique experience, typically with more fantastical approach to their playstyles!</p><p><a href="https://discord.com/invite/bZnEpPKGtd" target="_blank" rel="noreferrer">Discord Link</a></p><h2 id="pentaceratops" tabindex="-1">Pentaceratops <a class="header-anchor" href="#pentaceratops" aria-label="Permalink to &quot;Pentaceratops&quot;">​</a></h2><p><a href="./path-of-titans-pdpentaceratops" target="_blank"><img src="https://web-cdn.alderongames.com/files/1165/conversions/Penta_Icon_New-icon.jpg"></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("path-of-titans/guides/curve-overrides/modded-dinosaurs/pd-menagerie/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
