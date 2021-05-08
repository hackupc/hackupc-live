<template>
  <div class="under-header padding-bottom">
    <div class="container">
      <panel title="Important information">
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
      </panel>

      <panel title="Contact">
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
      </panel>

      <panel title="Discord channels" size="big">
        <div
          v-for="groupOfChannels in discordChannels"
          :key="groupOfChannels.title"
          style="text-align: justify"
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
      </panel>
    </div>
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
