<script setup lang="ts">
import DiscordLabel from '@/components/DiscordLabel.vue'
import IconLabel from '@/components/IconLabel.vue'
import { DevpostIcon } from '@/components/icons'
import Panel from '@/components/Panel.vue'
import { discordChannels } from '@/data/home'
import { formatDate } from '@/services/dates'
import { useScheduleStore } from '@/stores/schedule'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { MailIcon } from '@heroicons/vue/solid'
import { computed } from 'vue'

const scheduleStore = useScheduleStore()

const submitDeadline = computed<string>(() =>
  formatDate('weekday-time', scheduleStore.schedule.submitDeadline)
)
</script>

<template>
  <div class="container">
    <Panel title="Important information">
      <p>
        <b>
          The projects must be posted on
          <a
            target="_blank"
            href="https://hackupc2021.devpost.com/"
            rel="noopener noreferrer"
            >Devpost</a
          >
          before {{ submitDeadline }}.
        </b>
        If you don't do it, you won't have access to the prizes, swag, nor ECTS
        credits.
      </p>

      <IconLabel centered>
        <template #icon>
          <MailIcon />
        </template>
        <a
          href="mailto:contact@hackupc.com"
          target="_blank"
          rel="noopener noreferrer"
          >contact@hackupc.com</a
        >
      </IconLabel>
    </Panel>

    <Panel title="Links">
      <div class="buttons">
        <a
          target="_blank"
          href="https://discord.gg/PfHw68NN"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon :icon="['fab', 'discord']" />
          <br />Discord
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitch.tv/hackersupc"
        >
          <FontAwesomeIcon :icon="['fab', 'twitch']" />
          <br />Twitch
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://hackupc2021.devpost.com/"
        >
          <DevpostIcon />
          <br />Devpost
        </a>
      </div>

      <div style="margin-top: 1.5rem">
        <div class="buttons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/hackersupc"
            aria-label="facebook"
          >
            <FontAwesomeIcon :icon="['fab', 'facebook']" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/hackersupc"
            aria-label="twitter"
          >
            <FontAwesomeIcon :icon="['fab', 'twitter']" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/hackersupc"
            aria-label="instagram"
          >
            <FontAwesomeIcon :icon="['fab', 'instagram']" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/c/HackersUPC"
            aria-label="youtube"
          >
            <FontAwesomeIcon :icon="['fab', 'youtube']" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/hackupc"
            aria-label="github"
          >
            <FontAwesomeIcon :icon="['fab', 'github']" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@hackupc"
            aria-label="medium"
          >
            <FontAwesomeIcon :icon="['fab', 'medium']" />
          </a>
        </div>
      </div>
    </Panel>

    <Panel title="Discord channels" size="big">
      <div
        v-for="groupOfChannels in discordChannels"
        :key="groupOfChannels.title"
      >
        <h3>{{ groupOfChannels.title }}</h3>
        <DiscordLabel
          v-for="channel in groupOfChannels.channels"
          :key="channel.name + '-' + channel.icon"
          :name="channel.name"
          :description="channel.description"
          :icon="channel.icon"
        />
      </div>
    </Panel>

    <Panel title="Discord BieneBot Commands" size="big">
      <h3>Useful</h3>
      <div>
        <div>
          <span class="highlight-span"
            >biene changeteamname [new_teamname]</span
          >
          Change your team name with a fancy one!
        </div>
        <div>
          <span class="highlight-span"
            >biene jointeam [teamname] [new_members]</span
          >
          Adds more users to your team.
        </div>
      </div>

      <h3>Useless</h3>
      <div>
        <span class="highlight-span">biene joke</span>
        <span class="highlight-span">biene biene</span>
        <span class="highlight-span">biene biene [organizer_name]</span>
        <span class="highlight-span">biene parrot</span>
        <span class="highlight-span">biene cat</span>
        <span class="highlight-span">biene dog</span>
      </div>
      <div>
        <span class="highlight-span">biene ping</span> Displays info for your
        internet connection.
      </div>
      <div>
        <span class="highlight-span"
          >biene meme [meme_code] text|seperated|by|lines</span
        >
        Inserts text to meme with code [meme_code].
      </div>
      <div>
        <span class="highlight-span">biene meme help</span> Get meme_code.
      </div>
    </Panel>
  </div>
</template>

<style lang="scss" scoped>
.buttons {
  display: flex;
  border-radius: 3px;
  overflow: hidden;
  a {
    display: block;
    flex: 1 1 0;
    color: $textColor !important;
    text-decoration: none;
    background-color: $tertiaryLightColor;
    padding: 8px;
    text-align: center;
    font-weight: bold;
    &:not(:first-child) {
      border-left: thin solid white;
    }
  }
}
</style>
