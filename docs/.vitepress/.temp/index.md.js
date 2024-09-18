import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Game Servers Knowledgebase","text":"Tutorials, Guides, Knowledgebase for Gaming Servers","tagline":"Path of Titans Server Guide, Rust Server Guide, Palworld Server Guide, 7 Days To Die Server Guide, Soulmask Server Guide, V Rising Server Guide, The Isle Server Guide,","actions":[{"theme":"brand","text":"Check out our guides","link":"/welcome"}],"image":{"src":"/icon.webp","alt":"GameServersHub.com Official Logo"}},"features":[{"icon":{"src":"/path of titans - 667x260.webp","width":667,"height":260,"alt":"Path Of Titans Background"},"title":"Path Of Titans Guides","details":"Embark on epic quests in the central and eastern zones of Gondwa, and strive to become the best.","link":"./path-of-titans/setup/path-of-titans-how-to-configurate-game-ini"},{"icon":{"src":"/rust - 667x260.webp","width":667,"height":260,"alt":"Rust Background"},"title":"Rust Guides","details":"The only aim in Rust is to survive. Everything wants you to die!","link":"#"},{"icon":{"src":"/palworld - 667x260.webp","width":667,"height":260,"alt":"Palworld Background"},"title":"Palworld Guides","details":"Fight, farm, build and work alongside mysterious creatures called “Pals” open world survival and crafting game!","link":"./palworld/palworld-server-settings"},{"icon":{"src":"/7 days to die - 667x260.webp","width":667,"height":260,"alt":"7 Days To Die Background"},"title":"7 Days To Die Guides","details":"Play the definitive zombie survival sandbox RPG that came first. Navezgane awaits!","link":"#"},{"icon":{"src":"/soulmask - 667x260.webp","width":667,"height":260,"alt":"Soulmask Background"},"title":"Soulmask Guides","details":"Explore and unveil the truths behind the enigmatic mask.","link":"#"},{"icon":{"src":"/v rising - 667x260.webp","width":667,"height":260,"alt":"V Rising Background"},"title":"V Rising Guides","details":"In a world of conflict, only one vampire shall reign supreme. Dare you challenge the throne of Dracula?","link":"#"},{"icon":{"src":"/the isle - 667x260.webp","width":667,"height":260,"alt":"The Isle Background"},"title":"The Isle (Evrima) Guides","details":"Explore vast landscapes of dense forest and open plains, traverse treacherous mountains, and wade through dark swamps where horrors lurk.","link":"#"},{"icon":{"src":"/satisfactory - 667x260.webp","width":667,"height":260,"alt":"Satisfactory Background"},"title":"Satisfactory Guides","details":"Explore an alien planet, create multi-story factories, and enter conveyor belt heaven!","link":"#"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1726618237000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
