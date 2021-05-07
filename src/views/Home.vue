<template>
  <div class="under-header padding-bottom">
    <div class="container">
      <div class="panel">
        <h1>Important information</h1>

        <div>
          <p style="margin: 15px 0">
            <b>
              The projects must be posted on Devpost before Sunday at 12:00.
            </b>
            If you don't do it, you won't have access to the prices nor ECTS
            credits.
          </p>
          <div>
            <h3 class="text-centered margin-bottom">Links</h3>
          </div>
          <div class="buttons margin-bottom">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.twitch.tv/hackersupc"
              class="external-link"
              ><i class="fab fa-twitch" aria-hidden="true"></i> Talks in
              twitch</a
            >
          </div>
          <div class="buttons margin-bottom">
            <a
              target="_blank"
              rel="noopener"
              href="https://hackupc-2021.devpost.com/"
              class="external-link"
              >Devpost</a
            >
          </div>
        </div>
      </div>
      <div class="panel" style="align-self: flex-start">
        <h1>Contact</h1>
        <div class="text-centered">
          <p class="icon"><i class="fab fa-discord" aria-hidden="true"></i></p>
          <!-- <span><a target="_blank" rel="noopener" href="">Discord Server</a></span> -->
          <span>Discord Server</span>
        </div>
        <div class="text-centered">
          <p class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></p>
          <span
            ><a
              href="mailto:bitsxlamarato@fib.upc.edu"
              target="_blank"
              rel="noopener"
              >contact@hackupc.com</a
            ></span
          >
        </div>
        <div>
          <h3 class="text-centered margin-bottom">Social media</h3>
          <div class="buttons">
            <a
              class="fb"
              target="_blank"
              rel="noopener"
              href="https://www.facebook.com/hackersupc"
              ><i class="fab fa-facebook" aria-hidden="true"></i
            ></a>
            <a
              class="tw"
              target="_blank"
              rel="noopener"
              href="https://twitter.com/hackersupc"
              ><i class="fab fa-twitter" aria-hidden="true"></i
            ></a>
            <a
              class="ig"
              target="_blank"
              rel="noopener"
              href="https://instagram.com/hackersupc"
              ><i class="fab fa-instagram" aria-hidden="true"></i
            ></a>
            <a
              class="yt"
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/c/HackersUPC"
              ><i class="fab fa-youtube" aria-hidden="true"></i
            ></a>
            <a
              class="yt"
              target="_blank"
              rel="noopener"
              href="https://www.twitch.tv/hackersupc"
              ><i class="fab fa-twitch" aria-hidden="true"></i
            ></a>
            <a
              class="gt"
              target="_blank"
              rel="noopener"
              href="https://github.com/hackupc"
              ><i class="fab fa-github" aria-hidden="true"></i
            ></a>
            <a
              class="me"
              target="_blank"
              rel="noopener"
              href="https://medium.com/@hackupc"
              ><i class="fab fa-medium" aria-hidden="true"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="panel large">
        <h1 style="text-transform: uppercase">Discord channels</h1>
        <div
          v-for="(dC, i) in discordChannels"
          v-bind:key="i - 'dC'"
          style="text-align: justify"
        >
          <h3>{{ dC.title }}</h3>
          <discord-label
            v-for="(d, i) in dC.channels"
            v-bind:key="i + '-dL'"
            :title="d.title"
            :text="d.text"
            :icon="d.icon"
          />
        </div>
      </div>
      <div class="panel large">
        <h1 style="text-transform: uppercase">Discord BieneBot Commands</h1>
        <div>
          <h4>For registration</h4>
          <p style="text-align: justify">
            <span>bits!login [RegisterEmail]</span> (checkin)
          </p>
          <br />
          <p style="text-align: justify">
            <span>bits!createTeam [nameTeam]</span> (if you don't have team and
            you want to create one)
          </p>
          <br />
          <p style="text-align: justify">
            <span>bits!addToTeam [@personToAddToYourTeam]</span> (the user you
            want to add to the team must be logged in and with no team)
          </p>
          <h4>
            To use in random or memes channels (<i
              >Only if you try you will know what this do</i
            >)
          </h4>
          <div>
            <p>
              <span>bits!cat</span> <span>bits!dog</span>
              <span>bits!parrot</span>
            </p>
            <br />
            <p><span>bits!biene</span> <span>bits!ping</span></p>
            <br />
            <p>
              <span>bits!proJoke</span> <span>bits!parJoke</span>
              <span>bits!joke</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import DiscordLabel, {
  DiscordLabelData,
  DiscordType,
} from '@/components/DiscordLabel.vue'
import Vue from 'vue'

interface DiscordChannelInfo {
  title: string
  channels: DiscordLabelData[]
}

const discordChannels: DiscordChannelInfo[] = [
  {
    title: 'Principal Information',
    channels: [
      {
        title: 'welcome',
        text:
          'On this channel you will find the important information about the server.',
      },
      {
        title: 'rules',
        text:
          'Take a look on this channel, here you will find all the rules about the server.',
      },
      {
        title: 'announcements',
        text:
          'The organizers will post all the relevant announcements on this channel.',
      },
    ],
  },
  {
    title: 'General',
    channels: [
      {
        title: 'search-team',
        text:
          "You don't have team or you are looking for some more members for your team? This is your channel.",
      },
      {
        title: 'mentors',
        text:
          "Do you need help in some generic problem? Don't worry and ask in this channel.",
      },
      {
        title: 'mentors',
        text:
          'You prefer to ask the question by voice? Here you have some place to do it.',
        icon: DiscordType.voice,
      },
      {
        title: 'help',
        text:
          'Do you have any problem? Ask here for some help and a organizer will help you.',
      },
    ],
  },
  {
    title: 'Chill Time',
    channels: [
      { title: 'memes', text: 'Post here your memes!!' },
      {
        title: 'random',
        text: 'Here you can talk about something random. Be free like a bird!',
      },
      {
        title: 'play-voice',
        text: 'This voice channel will be used to play! But only in play time!',
        icon: DiscordType.voice,
      },
    ],
  },
  {
    title: 'Challenges',
    channels: [
      {
        title: 'similar-patients',
        text: 'Channel to solve your problems and doubts about the challenge',
      },
      {
        title: 'similar-patients',
        text: 'Channel to talk about the challenge',
        icon: DiscordType.voice,
      },
      {
        title: 'pediatric-age',
        text: 'Channel to solve your problems and doubts about the challenge',
      },
      {
        title: 'pediatric-age',
        text: 'Channel to talk about the challenge',
        icon: DiscordType.voice,
      },
      {
        title: 'covid-caught',
        text: 'Channel to solve your problems and doubts about the challenge',
      },
      {
        title: 'covid-caught',
        text: 'Channel to talk about the challenge',
        icon: DiscordType.voice,
      },
      {
        title: 'tracking-campus',
        text: 'Channel to solve your problems and doubts about the challenge',
      },
      {
        title: 'tracking-campus',
        text: 'Channel to talk about the challenge',
        icon: DiscordType.voice,
      },
      {
        title: 'tracking-primary-health',
        text: 'Channel to solve your problems and doubts about the challenge',
      },
      {
        title: 'tracking-primary-health',
        text: 'Channel to talk about the challenge',
        icon: DiscordType.voice,
      },
    ],
  },
  {
    title: 'Sponsors',
    channels: [
      {
        title: 'hipeac',
        text: 'Are you looking for some job oportunities take a look on hipeac',
      },
      {
        title: 'hipeac',
        text: 'Channel to talk with hipeac members',
        icon: DiscordType.voice,
      },
    ],
  },
]

export default Vue.extend({
  components: { DiscordLabel },
  data() {
    return {
      discordChannels,
    }
  },
})
</script>

<style lang="scss" scoped></style>
