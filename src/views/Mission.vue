<script setup lang="ts">
import Panel from '@/components/Panel.vue'
import config from '@/config'
import { ref } from 'vue'
import PanelContainer from '../components/PanelContainer.vue'
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SecretContent from '@/components/SecretContent.vue'

const hideMission = ref(config.hideMission)
</script>

<template>
  <PanelContainer id="missions">
    <div class="explore">
      <RouterLink
        :to="{
          name: 'activities',
        }"
        class="button"
      >
        <FontAwesomeIcon icon="dice" style="margin-right: 4px" />
        Check all activities
      </RouterLink>
      <RouterLink
        :to="{
          name: 'talks',
        }"
        class="button"
      >
        <FontAwesomeIcon icon="message" style="margin-right: 4px" />
        Check talks
      </RouterLink>
    </div>
    <Panel title="The Mission" size="big"
      >The main goal of <strong>HackUPC</strong> is not to create a project or
      win a prize, but to have a great time and create lasting memories. It is
      for this reason that we have prepared The Mission. To participate, you
      only need <strong>the Mission card</strong>, that will be given to you
      when at the check-in. Complete the tasks and
      <strong>win exclusive prizes</strong> of all kinds!</Panel
    >

    <Panel title="Your mission card" size="small">
      <div v-if="hideMission">
        <SecretContent />
      </div>
      <div
        v-else
        style="
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        "
      >
        <img
          src="../assets/img/activities/missioncard.png"
          style="width: 60%"
          alt="mission card"
        />
      </div>
    </Panel>
    <Panel title="Claiming your rewards" size="small">
      <template v-if="hideMission">
        <SecretContent />
      </template>
      <template v-else>
        <span class="rewards-title">How it works?</span>
        <p>
          When you have a <strong>line completed</strong>, go to the InfoDesk
          and claim your reward!
        </p>
        <p>
          Don’t forget to
          <strong>carry the mission card to all these events</strong>! The
          organizer in charge of the activity will stamp the activity as done.
          If there isn't an organizer to stamp your card, you should go to the
          InfoDesk and <strong>show a proof</strong> that you have completed the
          task.
        </p>
        <span class="rewards-title">Prizes</span>
        <p>FOTO DELS PREMIS BEN POSATS</p>
      </template>
    </Panel>
  </PanelContainer>
</template>

<style lang="scss" scoped>
@use '@/variables' as *;

.channel {
  margin-bottom: 1em;
}

strong {
  color: $highlight-color;
}

.explore {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
  gap: 0.5rem;
}

.button {
  display: inline-block;
  padding: 8px 24px;
  margin: 0 0.2em 16px;
  background: $links-color;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
  color: #000;
  cursor: url('../assets/img/rocket-fire.png'), auto;
  font-weight: bold;

  &:hover {
    background: $links-color-hover;
    color: $text-color;
  }

  &--disabled {
    filter: grayscale(0.5);
    opacity: 0.4;
    pointer-events: none;
  }
}

.rewards-title {
  display: inline-block;
  height: 2rem;
  padding: 0 12px;
  margin: 12px 0;
  background-color: $primary-color-light;
  border-radius: 3px;
  color: $primary-color;
  font-size: 1rem;
  font-weight: bold;
  line-height: 2;
  vertical-align: middle;
}
</style>
