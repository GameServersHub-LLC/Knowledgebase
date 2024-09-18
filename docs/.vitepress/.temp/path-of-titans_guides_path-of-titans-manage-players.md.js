import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Player Management","description":"Explore GameServersHub's Gaming Wiki for in-depth info on Path of Titans. Find details on gameplay, features, and updates for the ultimate dino MMO adventure!","frontmatter":{"head":[["meta",{"name":"description","content":"Explore GameServersHub's Gaming Wiki for in-depth info on Path of Titans. Find details on gameplay, features, and updates for the ultimate dino MMO adventure!"}],["meta",{"name":"keywords","content":"Path Of Titans"}]],"title":"Player Management"},"headers":[],"relativePath":"path-of-titans/guides/path-of-titans-manage-players.md","filePath":"path-of-titans/guides/path-of-titans-manage-players.md","lastUpdated":1726616025000}`);
const _sfc_main = { name: "path-of-titans/guides/path-of-titans-manage-players.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="path-of-titans-player-management" tabindex="-1">Path of Titans Player Management <a class="header-anchor" href="#path-of-titans-player-management" aria-label="Permalink to &quot;Path of Titans Player Management&quot;">​</a></h1><p>Managing players on your server is an important part of running a community server. This guide will show you how to manage players on your server using the in-game chat commands and the Spectator Tool.</p><h2 id="kicking-users" tabindex="-1">Kicking Users <a class="header-anchor" href="#kicking-users" aria-label="Permalink to &quot;Kicking Users&quot;">​</a></h2><p>You can easily kick players from your server via the in-game chat commands.</p><h3 id="kicking-players-in-game" tabindex="-1">Kicking Players In-Game <a class="header-anchor" href="#kicking-players-in-game" aria-label="Permalink to &quot;Kicking Players In-Game&quot;">​</a></h3><p>First, log into your server, then there are the two methods you can use to kick players:</p><h4 id="via-chat-commands" tabindex="-1">Via Chat Commands <a class="header-anchor" href="#via-chat-commands" aria-label="Permalink to &quot;Via Chat Commands&quot;">​</a></h4><p>Kick a given user with the optional reason. You can leave the kick reason blank if desired.</p><p><code>/kick &lt;playername&gt; &lt;kick reason&gt;</code></p><blockquote><p>Example: /kick that411guy Spamming the chat.</p><p>Kick a given user with the optional reason.</p></blockquote><h4 id="via-spectation-tool" tabindex="-1">Via Spectation Tool <a class="header-anchor" href="#via-spectation-tool" aria-label="Permalink to &quot;Via Spectation Tool&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("path-of-titans/guides/path-of-titans-manage-players.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pathOfTitansManagePlayers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pathOfTitansManagePlayers as default
};
