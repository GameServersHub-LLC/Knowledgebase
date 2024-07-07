---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/That411Guy.png',
    name: 'Michael H',
    title: 'Founder: GameServerHosting',
    links: [
      { icon: 'discord', link: 'https://discord.gg/gsh' },
      { icon: 'x', link: 'https://twitter.com/GameServersHub' },
      { icon: 'facebook', link: 'https://www.facebook.com/people/Gameservershub/61559304243890/' },
      { icon: 'instagram', link: 'https://www.instagram.com/gameservershub/' },
      { icon: 'github', link: 'https://github.com/ServersHub' },
    ]
  },
  {
    avatar: 'https://github.com/MxLNinjaz.png',
    name: 'Josh F',
    title: 'Founder: GameServerHosting',
    links: [
      { icon: 'discord', link: 'https://discord.gg/gsh' },
      { icon: 'x', link: 'https://twitter.com/GameServersHub' },
      { icon: 'facebook', link: 'https://www.facebook.com/people/Gameservershub/61559304243890/' },
      { icon: 'instagram', link: 'https://www.instagram.com/gameservershub/' },
      { icon: 'github', link: 'https://github.com/ServersHub' },
    ]
  },
  {
    avatar: 'https://github.com/GameServersHub.png',
    name: 'Samuel D',
    title: 'Founder: GameServersHub',
    links: [
      { icon: 'discord', link: 'https://discord.gg/gsh' },
      { icon: 'x', link: 'https://twitter.com/GameServersHub' },
      { icon: 'facebook', link: 'https://www.facebook.com/people/Gameservershub/61559304243890/' },
      { icon: 'instagram', link: 'https://www.instagram.com/gameservershub/' },
      { icon: 'github', link: 'https://github.com/ServersHub' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead> 
    <p><strong>Michael Harrison</strong> – The head master behind game server rentals When he's not barking orders or conducting military-style drills for optimal server performance, Michael Harrison, our fearless leader, is busy making sure every byte and bit is in perfect alignment. A former military veteran and a proud father, Michael's precision and discipline ensure that our servers are always battle-ready. As the founder and creator behind Dedicated Game Server Rentals, his knack for transforming war strategies into server management techniques is legendary. He’s the reason our servers can handle anything from a small skirmish to a full-scale gaming war.</p><p><br></p><p><strong>Fun Fact</strong>: Michael once tried to teach his servers to march in formation. While they didn't quite get it, they did manage to stay perfectly synchronized. Mission accomplished!<br></p><p><br><strong>Josh Fowler</strong> – The Tech Whisperer Josh Fowler is the tech genius behind the scenes, making sure everything runs smoother than a greased lightning bolt. If there's a tech issue, Josh doesn't just fix it – he befriends it, negotiates a peace treaty, and convinces it to work better than ever before. With a toolkit that includes a soldering iron and a can-do attitude, Josh is our go-to guy for anything with a circuit board.</p><p><br></p><p><strong>Fun Fact</strong>: Josh once built a server out of spare parts from his old microwave and a vintage 90s Walkman. It ran like a charm, though it did occasionally play Spice Girls songs at random intervals.<br></p><p><br><strong>Samuel Davis</strong> – The Gaming Guru Samuel Davis, the original founder and creator behind GameServersHub, is our resident gaming aficionado who knows the gaming world inside and out. If there's a new game, Samuel has not only played it but has also beaten it, found all the Easter eggs, and probably written a strategy guide. He brings this extensive gaming knowledge to ensure our servers provide the ultimate gaming experience for our clients.</p><p><br></p><p><strong>Fun Fact</strong>: Samuel can identify a game just by listening to the background music for three seconds. His record is identifying 42 games in one minute, and he's currently training to break his own world record. Together, these three founders form the backbone of GameServersHub, turning a shared passion for gaming into a thriving business. They bring military precision, tech wizardry, and unparalleled gaming expertise to the table, ensuring that our servers are the best in the business. Whether you need a server that can withstand a zombie apocalypse or just host a friendly game night, Michael, Josh, and Samuel have got you covered.</p>
</template>
</VPTeamPageTitle>
<VPTeamMembers
    :members="members"
  />
</VPTeamPage>
