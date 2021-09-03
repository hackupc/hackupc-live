<script lang="ts">
import DiscordLabel from '@/components/DiscordLabel.vue'
import IconLabel from '@/components/IconLabel.vue'
import { DevpostIcon } from '@/components/icons'
import Panel from '@/components/Panel.vue'
import { formatDate } from '@/services/dates'
import { Dayjs } from 'dayjs'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { discordChannels } from '@/data/home'
import { MailIcon } from '@heroicons/vue/solid'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineComponent({
  components: {
    DiscordLabel,
    DevpostIcon,
    IconLabel,
    Panel,
    MailIcon,
    FontAwesomeIcon,
  },
  setup() {
    const store = useStore()

    const submitDeadline = computed<Dayjs>(
      () => store.state.schedule.submitDeadline
    )

    return {
      submitDeadline,
      formatDate,
      discordChannels,
    }
  },
})
</script>

<template>
  <div class="container">
    <panel title="Important information">
      <p>
        <b>
          The projects must be posted on
          <a
            target="_blank"
            href="https://hackupc2021.devpost.com/"
            rel="noopener noreferrer"
            >Devpost</a
          >
          before {{ formatDate('weekday-time', submitDeadline) }}.
        </b>
        If you don't do it, you won't have access to the prizes, swag, nor ECTS
        credits.
      </p>

      <icon-label :centered="true">
        <template #icon>
          <mail-icon />
        </template>
        <a
          href="mailto:contact@hackupc.com"
          target="_blank"
          rel="noopener noreferrer"
          >contact@hackupc.com</a
        >
      </icon-label>
    </panel>

    <panel title="Links">
      <div class="buttons">
        <a
          target="_blank"
          href="https://discord.gg/PfHw68NN"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'discord']" />
          <br />
          Discord
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitch.tv/hackersupc"
        >
          <font-awesome-icon :icon="['fab', 'twitch']" />
          <br />
          Twitch
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://hackupc2021.devpost.com/"
        >
          <devpost-icon />
          <br />
          Devpost
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
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/hackersupc"
            aria-label="twitter"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/hackersupc"
            aria-label="instagram"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/c/HackersUPC"
            aria-label="youtube"
          >
            <font-awesome-icon :icon="['fab', 'youtube']" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/hackupc"
            aria-label="github"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@hackupc"
            aria-label="medium"
          >
            <font-awesome-icon :icon="['fab', 'medium']" />
          </a>
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
          >biene meme [meme_code] text|seperated|by|lines
        </span>
        Inserts text to meme with code [meme_code].
      </div>
      <div>
        <span class="highlight-span">biene meme help</span> Get meme_code.
      </div>
    </panel>
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
