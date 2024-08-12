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
    <p><strong>Michael Harrison</strong> – As the CEO of GameServersHosting (GSH), I am dedicated to redefining the standards of server hosting. With a bachelor’s degree in Computer Science and a strong foundation as a self-taught tech enthusiast, I’ve had the privilege of building our client base from the ground up, fostering the trust and loyalty that our customers have in us today.<br></p><p><br>My role is multifaceted—I actively engage with new clients, innovate to enhance client experiences, and develop products that meet the evolving needs of our users. I’m passionate about challenging the status quo in our industry, which I believe has been stagnant for too long, offering overpriced services with outdated technology.<br></p><p><br>Gaming is a passion for many, and I believe in making it accessible to everyone without the burden of excessive costs. <br></p><p><br>My mission is simple: ensure that our clients receive the quality and value they deserve, with state-of-the-art hardware and unparalleled support.<br></p><p><br><strong>Josh Fowler</strong> – The Tech Whisperer Josh Fowler is the tech genius behind the scenes, making sure everything runs smoother than a greased lightning bolt. If there's a tech issue, Josh doesn't just fix it – he befriends it, negotiates a peace treaty, and convinces it to work better than ever before. With a toolkit that includes a soldering iron and a can-do attitude, Josh is our go-to guy for anything with a circuit board.</p><p><br></p><p><strong>Fun Fact</strong>: Josh once built a server out of spare parts from his old microwave and a vintage 90s Walkman. It ran like a charm, though it did occasionally play Spice Girls songs at random intervals.<br></p><p><br><strong>Samuel Davis</strong> – The Gaming Guru Samuel Davis, the original founder and creator behind GameServersHub, is our resident gaming aficionado who knows the gaming world inside and out. If there's a new game, Samuel has not only played it but has also beaten it, found all the Easter eggs, and probably written a strategy guide. He brings this extensive gaming knowledge to ensure our servers provide the ultimate gaming experience for our clients.</p><p><br></p><p><strong>Fun Fact</strong>: Samuel can identify a game just by listening to the background music for three seconds. His record is identifying 42 games in one minute, and he's currently training to break his own world record. Together, these three founders form the backbone of GameServersHub, turning a shared passion for gaming into a thriving business. They bring military precision, tech wizardry, and unparalleled gaming expertise to the table, ensuring that our servers are the best in the business. Whether you need a server that can withstand a zombie apocalypse or just host a friendly game night, Michael, Josh, and Samuel have got you covered.</p>
</template>
</VPTeamPageTitle>
<VPTeamMembers
    :members="members"
  />
</VPTeamPage>
