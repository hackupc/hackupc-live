<template>
  <div class="container">
    <panel title="Important information">
      <p>
        <b> The projects must be posted on Devpost before Sunday at 12:00. </b>
        If you don't do it, you won't have access to the prices nor ECTS
        credits.
      </p>
      <div>
        <h3>Links</h3>
      </div>
      <div class="buttons">
        <a
          target="_blank"
          rel="noopener"
          href="https://www.twitch.tv/hackersupc"
          class="external-link"
          ><i class="fab fa-twitch" aria-hidden="true"></i> Talks in twitch</a
        >
      </div>
      <div class="buttons" style="margin-top: 8px">
        <a
          target="_blank"
          rel="noopener"
          href="https://hackupc-2021.devpost.com/"
          class="external-link"
          >Devpost</a
        >
      </div>
    </panel>

    <panel title="Contact">
      <div style="text-align: center; margin-top: 25px">
        <span class="icon"
          ><i class="fab fa-discord" aria-hidden="true"></i
        ></span>
        <span class="highlight-span">Discord Server</span>
      </div>

      <div style="text-align: center; margin-bottom: 37px">
        <span class="icon"
          ><i class="fa fa-envelope" aria-hidden="true"></i
        ></span>
        <span class="highlight-span"
          ><a
            href="mailto:bitsxlamarato@fib.upc.edu"
            target="_blank"
            rel="noopener"
            >contact@hackupc.com</a
          ></span
        >
      </div>

      <div>
        <h3>Social media</h3>
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
    </panel>

    <panel title="Discord channels" size="big">
      <div
        v-for="groupOfChannels in discordChannels"
        :key="groupOfChannels.title"
      >
        <h3>{{ groupOfChannels.title }}</h3>
        <discord-label
          v-for="channel in groupOfChannels.channels"
          :key="channel.name + '-' + channel.icon"
          :name="channel.name"
          :description="channel.description"
          :icon="channel.icon"
        />
      </div>
    </panel>

    <panel title="Discord BieneBot Commands" size="big">
      <h3>For registration</h3>
      <div>
        <span class="highlight-span">bits!login [RegisterEmail]</span>
        Check-in
      </div>
      <div>
        <span class="highlight-span">bits!createTeam [nameTeam]</span>
        Create a team if you don't have one
      </div>
      <div>
        <span class="highlight-span"
          >bits!addToTeam [@personToAddToYourTeam]</span
        >
        Add a hacker to your team. The hacker must be logged in and with no
        team.
      </div>
      <h3>To use in random or memes channels</h3>
      <p>
        <i>You'll only know what this commands do if you try them.</i>
      </p>

      <div>
        <span class="highlight-span">bits!cat</span>
        <span class="highlight-span">bits!dog</span>
        <span class="highlight-span">bits!parrot</span>
        <span class="highlight-span">bits!biene</span>
        <span class="highlight-span">bits!ping</span>
        <span class="highlight-span">bits!proJoke</span>
        <span class="highlight-span">bits!parJoke</span>
        <span class="highlight-span">bits!joke</span>
      </div>
    </panel>
  </div>
</template>

<script lang="ts">
import DiscordLabel from '@/components/DiscordLabel.vue'
import Panel from '@/components/Panel.vue'
import Vue from 'vue'
import { discordChannels } from '@/data/home'

export default Vue.extend({
  components: { DiscordLabel, Panel },
  data() {
    return {
      discordChannels,
    }
  },
})
</script>

<style lang="scss" scoped></style>
