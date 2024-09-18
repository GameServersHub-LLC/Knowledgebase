import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Whitelisting","description":"Explore GameServersHub's Gaming Wiki for in-depth info on Path of Titans. Find details on gameplay, features, and updates for the ultimate dino MMO adventure!","frontmatter":{"head":[["meta",{"name":"description","content":"Explore GameServersHub's Gaming Wiki for in-depth info on Path of Titans. Find details on gameplay, features, and updates for the ultimate dino MMO adventure!"}],["meta",{"name":"keywords","content":"Path Of Titans"}]],"title":"Whitelisting"},"headers":[],"relativePath":"path-of-titans/guides/path-of-titans-whitelist.md","filePath":"path-of-titans/guides/path-of-titans-whitelist.md","lastUpdated":1726616025000}`);
const _sfc_main = { name: "path-of-titans/guides/path-of-titans-whitelist.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="path-of-titans-whitelisting" tabindex="-1">Path of Titans Whitelisting <a class="header-anchor" href="#path-of-titans-whitelisting" aria-label="Permalink to &quot;Path of Titans Whitelisting&quot;">​</a></h1><h2 id="about-whitelisting" tabindex="-1">About Whitelisting <a class="header-anchor" href="#about-whitelisting" aria-label="Permalink to &quot;About Whitelisting&quot;">​</a></h2><p>If you have a private server and only want specific players to join, you can create a Whitelist. This is more secure than using a password, as a password can be leaked or shared.</p><p>You can use the <code>bEnforceWhitelist=true</code> option in your <code>Game.ini</code> file to enable the whitelist without kicking users until you are done.</p><ul><li>If you don&#39;t have a whitelist file, or the file is empty, the whitelist will not be enabled.</li><li>The moment you add a user ID to the whitelist text file, the whitelist will come into effect.</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.</p><details class="details custom-block"><summary>Details</summary><p>Changes to server files require a server restart, so we recommend adding whitelisted players with RCON commands or in-game chat commands!</p></details></div><ol><li>In the Saved folder you must create a file called <code>whitelist.txt</code></li><li>Add the whitelisted users for your server in the text file and click &quot;Save&quot;.</li></ol><p>Here is the format for the <code>whitelist.txt</code> file:</p><p><code>PathofTitans/Saved/whitelist.txt</code></p><h2 id="formatting" tabindex="-1">Formatting <a class="header-anchor" href="#formatting" aria-label="Permalink to &quot;Formatting&quot;">​</a></h2><p>Add the Alderon Games ID (AGID) of each whitelisted user on a new line. You can find a player&#39;s AGID by using the Admin Chat Commands or the Spectator Tool.</p><h3 id="example-whitelist-txt" tabindex="-1">Example whitelist.txt <a class="header-anchor" href="#example-whitelist-txt" aria-label="Permalink to &quot;Example whitelist.txt&quot;">​</a></h3><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>123-456-963</span></span>
<span class="line"><span>455-789-426</span></span>
<span class="line"><span>687-653-545</span></span>
<span class="line"><span>123-456-789</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("path-of-titans/guides/path-of-titans-whitelist.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pathOfTitansWhitelist = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pathOfTitansWhitelist as default
};
