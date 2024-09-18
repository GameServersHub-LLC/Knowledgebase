import { useSSRContext, unref, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { V as VPTeamPage, a as VPTeamPageTitle, b as VPTeamMembers } from "./VPTeamMembers.nQ5m-b7z.js";
import "./plugin-vue_export-helper.1tPrXgE0.js";
import "@vueuse/core";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"team.md","filePath":"team.md","lastUpdated":1726616025000}');
const __default__ = { name: "team.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const members = [
      {
        avatar: "https://github.com/That411Guy.png",
        name: "Michael H",
        title: "Founder: GameServerHosting",
        links: [
          { icon: "discord", link: "https://discord.gg/gsh" },
          { icon: "x", link: "https://twitter.com/GameServersHub" },
          { icon: "facebook", link: "https://www.facebook.com/people/Gameservershub/61559304243890/" },
          { icon: "instagram", link: "https://www.instagram.com/gameservershub/" },
          { icon: "github", link: "https://github.com/ServersHub" }
        ]
      },
      {
        avatar: "https://github.com/MxLNinjaz.png",
        name: "Josh F",
        title: "Founder: GameServerHosting",
        links: [
          { icon: "discord", link: "https://discord.gg/gsh" },
          { icon: "x", link: "https://twitter.com/GameServersHub" },
          { icon: "facebook", link: "https://www.facebook.com/people/Gameservershub/61559304243890/" },
          { icon: "instagram", link: "https://www.instagram.com/gameservershub/" },
          { icon: "github", link: "https://github.com/ServersHub" }
        ]
      },
      {
        avatar: "https://github.com/GameServersHub.png",
        name: "Samuel D",
        title: "Founder: GameServersHub",
        links: [
          { icon: "discord", link: "https://discord.gg/gsh" },
          { icon: "x", link: "https://twitter.com/GameServersHub" },
          { icon: "facebook", link: "https://www.facebook.com/people/Gameservershub/61559304243890/" },
          { icon: "instagram", link: "https://www.instagram.com/gameservershub/" },
          { icon: "github", link: "https://github.com/ServersHub" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(VPTeamPage), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VPTeamPageTitle), null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Our Team `);
                } else {
                  return [
                    createTextVNode(" Our Team ")
                  ];
                }
              }),
              lead: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}><strong${_scopeId2}>Michael Harrison</strong> – As the CEO of GameServersHosting (GSH), I am dedicated to redefining the standards of server hosting. With a bachelor’s degree in Computer Science and a strong foundation as a self-taught tech enthusiast, I’ve had the privilege of building our client base from the ground up, fostering the trust and loyalty that our customers have in us today.<br${_scopeId2}></p><p${_scopeId2}><br${_scopeId2}>My role is multifaceted—I actively engage with new clients, innovate to enhance client experiences, and develop products that meet the evolving needs of our users. I’m passionate about challenging the status quo in our industry, which I believe has been stagnant for too long, offering overpriced services with outdated technology.<br${_scopeId2}></p><p${_scopeId2}><br${_scopeId2}>Gaming is a passion for many, and I believe in making it accessible to everyone without the burden of excessive costs. <br${_scopeId2}></p><p${_scopeId2}><br${_scopeId2}>My mission is simple: ensure that our clients receive the quality and value they deserve, with state-of-the-art hardware and unparalleled support.<br${_scopeId2}></p><p${_scopeId2}><br${_scopeId2}><strong${_scopeId2}>Josh Fowler</strong> – The Tech Whisperer Josh Fowler is the tech genius behind the scenes, making sure everything runs smoother than a greased lightning bolt. If there&#39;s a tech issue, Josh doesn&#39;t just fix it – he befriends it, negotiates a peace treaty, and convinces it to work better than ever before. With a toolkit that includes a soldering iron and a can-do attitude, Josh is our go-to guy for anything with a circuit board.</p><p${_scopeId2}><br${_scopeId2}></p><p${_scopeId2}><strong${_scopeId2}>Fun Fact</strong>: Josh once built a server out of spare parts from his old microwave and a vintage 90s Walkman. It ran like a charm, though it did occasionally play Spice Girls songs at random intervals.<br${_scopeId2}></p><p${_scopeId2}><br${_scopeId2}><strong${_scopeId2}>Samuel Davis</strong> – The Gaming Guru Samuel Davis, the original founder and creator behind GameServersHub, is our resident gaming aficionado who knows the gaming world inside and out. If there&#39;s a new game, Samuel has not only played it but has also beaten it, found all the Easter eggs, and probably written a strategy guide. He brings this extensive gaming knowledge to ensure our servers provide the ultimate gaming experience for our clients.</p><p${_scopeId2}><br${_scopeId2}></p><p${_scopeId2}><strong${_scopeId2}>Fun Fact</strong>: Samuel can identify a game just by listening to the background music for three seconds. His record is identifying 42 games in one minute, and he&#39;s currently training to break his own world record. Together, these three founders form the backbone of GameServersHub, turning a shared passion for gaming into a thriving business. They bring military precision, tech wizardry, and unparalleled gaming expertise to the table, ensuring that our servers are the best in the business. Whether you need a server that can withstand a zombie apocalypse or just host a friendly game night, Michael, Josh, and Samuel have got you covered.</p>`);
                } else {
                  return [
                    createVNode("p", null, [
                      createVNode("strong", null, "Michael Harrison"),
                      createTextVNode(" – As the CEO of GameServersHosting (GSH), I am dedicated to redefining the standards of server hosting. With a bachelor’s degree in Computer Science and a strong foundation as a self-taught tech enthusiast, I’ve had the privilege of building our client base from the ground up, fostering the trust and loyalty that our customers have in us today."),
                      createVNode("br")
                    ]),
                    createVNode("p", null, [
                      createVNode("br"),
                      createTextVNode("My role is multifaceted—I actively engage with new clients, innovate to enhance client experiences, and develop products that meet the evolving needs of our users. I’m passionate about challenging the status quo in our industry, which I believe has been stagnant for too long, offering overpriced services with outdated technology."),
                      createVNode("br")
                    ]),
                    createVNode("p", null, [
                      createVNode("br"),
                      createTextVNode("Gaming is a passion for many, and I believe in making it accessible to everyone without the burden of excessive costs. "),
                      createVNode("br")
                    ]),
                    createVNode("p", null, [
                      createVNode("br"),
                      createTextVNode("My mission is simple: ensure that our clients receive the quality and value they deserve, with state-of-the-art hardware and unparalleled support."),
                      createVNode("br")
                    ]),
                    createVNode("p", null, [
                      createVNode("br"),
                      createVNode("strong", null, "Josh Fowler"),
                      createTextVNode(" – The Tech Whisperer Josh Fowler is the tech genius behind the scenes, making sure everything runs smoother than a greased lightning bolt. If there's a tech issue, Josh doesn't just fix it – he befriends it, negotiates a peace treaty, and convinces it to work better than ever before. With a toolkit that includes a soldering iron and a can-do attitude, Josh is our go-to guy for anything with a circuit board.")
                    ]),
                    createVNode("p", null, [
                      createVNode("br")
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Fun Fact"),
                      createTextVNode(": Josh once built a server out of spare parts from his old microwave and a vintage 90s Walkman. It ran like a charm, though it did occasionally play Spice Girls songs at random intervals."),
                      createVNode("br")
                    ]),
                    createVNode("p", null, [
                      createVNode("br"),
                      createVNode("strong", null, "Samuel Davis"),
                      createTextVNode(" – The Gaming Guru Samuel Davis, the original founder and creator behind GameServersHub, is our resident gaming aficionado who knows the gaming world inside and out. If there's a new game, Samuel has not only played it but has also beaten it, found all the Easter eggs, and probably written a strategy guide. He brings this extensive gaming knowledge to ensure our servers provide the ultimate gaming experience for our clients.")
                    ]),
                    createVNode("p", null, [
                      createVNode("br")
                    ]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Fun Fact"),
                      createTextVNode(": Samuel can identify a game just by listening to the background music for three seconds. His record is identifying 42 games in one minute, and he's currently training to break his own world record. Together, these three founders form the backbone of GameServersHub, turning a shared passion for gaming into a thriving business. They bring military precision, tech wizardry, and unparalleled gaming expertise to the table, ensuring that our servers are the best in the business. Whether you need a server that can withstand a zombie apocalypse or just host a friendly game night, Michael, Josh, and Samuel have got you covered.")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VPTeamMembers), { members }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VPTeamPageTitle), null, {
                title: withCtx(() => [
                  createTextVNode(" Our Team ")
                ]),
                lead: withCtx(() => [
                  createVNode("p", null, [
                    createVNode("strong", null, "Michael Harrison"),
                    createTextVNode(" – As the CEO of GameServersHosting (GSH), I am dedicated to redefining the standards of server hosting. With a bachelor’s degree in Computer Science and a strong foundation as a self-taught tech enthusiast, I’ve had the privilege of building our client base from the ground up, fostering the trust and loyalty that our customers have in us today."),
                    createVNode("br")
                  ]),
                  createVNode("p", null, [
                    createVNode("br"),
                    createTextVNode("My role is multifaceted—I actively engage with new clients, innovate to enhance client experiences, and develop products that meet the evolving needs of our users. I’m passionate about challenging the status quo in our industry, which I believe has been stagnant for too long, offering overpriced services with outdated technology."),
                    createVNode("br")
                  ]),
                  createVNode("p", null, [
                    createVNode("br"),
                    createTextVNode("Gaming is a passion for many, and I believe in making it accessible to everyone without the burden of excessive costs. "),
                    createVNode("br")
                  ]),
                  createVNode("p", null, [
                    createVNode("br"),
                    createTextVNode("My mission is simple: ensure that our clients receive the quality and value they deserve, with state-of-the-art hardware and unparalleled support."),
                    createVNode("br")
                  ]),
                  createVNode("p", null, [
                    createVNode("br"),
                    createVNode("strong", null, "Josh Fowler"),
                    createTextVNode(" – The Tech Whisperer Josh Fowler is the tech genius behind the scenes, making sure everything runs smoother than a greased lightning bolt. If there's a tech issue, Josh doesn't just fix it – he befriends it, negotiates a peace treaty, and convinces it to work better than ever before. With a toolkit that includes a soldering iron and a can-do attitude, Josh is our go-to guy for anything with a circuit board.")
                  ]),
                  createVNode("p", null, [
                    createVNode("br")
                  ]),
                  createVNode("p", null, [
                    createVNode("strong", null, "Fun Fact"),
                    createTextVNode(": Josh once built a server out of spare parts from his old microwave and a vintage 90s Walkman. It ran like a charm, though it did occasionally play Spice Girls songs at random intervals."),
                    createVNode("br")
                  ]),
                  createVNode("p", null, [
                    createVNode("br"),
                    createVNode("strong", null, "Samuel Davis"),
                    createTextVNode(" – The Gaming Guru Samuel Davis, the original founder and creator behind GameServersHub, is our resident gaming aficionado who knows the gaming world inside and out. If there's a new game, Samuel has not only played it but has also beaten it, found all the Easter eggs, and probably written a strategy guide. He brings this extensive gaming knowledge to ensure our servers provide the ultimate gaming experience for our clients.")
                  ]),
                  createVNode("p", null, [
                    createVNode("br")
                  ]),
                  createVNode("p", null, [
                    createVNode("strong", null, "Fun Fact"),
                    createTextVNode(": Samuel can identify a game just by listening to the background music for three seconds. His record is identifying 42 games in one minute, and he's currently training to break his own world record. Together, these three founders form the backbone of GameServersHub, turning a shared passion for gaming into a thriving business. They bring military precision, tech wizardry, and unparalleled gaming expertise to the table, ensuring that our servers are the best in the business. Whether you need a server that can withstand a zombie apocalypse or just host a friendly game night, Michael, Josh, and Samuel have got you covered.")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(VPTeamMembers), { members })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("team.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
