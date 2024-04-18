<script setup lang="ts">
import { travels } from '@/data/travel'
import Panel from '@/components/Panel.vue'
import PanelContainer from '@/components/PanelContainer.vue'
import VueMarkdownIt from 'vue3-markdown-it'
import { RouterLink, useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import IconLabel from '@/components/IconLabel.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { discovers } from '@/data/discover'
import config from '@/config'
import MoreInformationSoon from '@/components/MoreInformationSoon.vue'

const workingDiscovery = ref(config.workingDiscovery)

const route = useRoute()

const currentView = computed<'travel' | 'discover'>(() => {
  if (
    route.params?.travelId !== 'travel' &&
    route.params?.travelId !== 'discover'
  ) {
    return 'travel'
  }

  return route.params.travelId
})
</script>

<template>
  <PanelContainer id="travel">
    <div class="explore">
      <div class="explore__list">
        <RouterLink
          :to="{
            name: 'travel',
            params: { travelId: 'travel' },
          }"
          class="button"
          :class="{ 'button--disabled': currentView === 'travel' }"
          >Travel reimbursement process</RouterLink
        >
        <RouterLink
          :to="{
            name: 'travel',
            params: { travelId: 'discover' },
          }"
          class="button"
          :class="{ 'button--disabled': currentView === 'discover' }"
          >Discover Barcelona</RouterLink
        >
      </div>
    </div>
    <template v-if="currentView === 'travel'">
      <Panel
        v-for="travel in travels"
        :key="travel.title"
        :title="travel.title"
        size="small"
      >
        <IconLabel centered style="margin-bottom: 0.8rem">
          <template #icon>
            <FontAwesomeIcon
              :icon="travel.emoji"
              class="link__icon"
            /> </template
          >{{ travel.tag }}
        </IconLabel>
        <VueMarkdownIt :source="travel.description" />
      </Panel>

      <Panel size="big">
        <p>
          <strong>Please remember!! </strong> <br /><br />
          HackUPC is a hackathon made by students and we have limited money. We
          are giving out the maximum we can for each person coming from abroad,
          we want to help everyone a bit, but please take in account that it's a
          help to pay your trip, we are not covering full price of a trip.
          <br /><br />
          In addition, take in mind that everything in the event is covered, so
          will have no expenses during the weekend!!.
          <br /><br />
          <strong>We hope to see you all at HackUPC! 😄</strong>
        </p>
      </Panel>
    </template>

    <template v-if="currentView === 'discover'">
      <Panel
        v-for="discover in discovers"
        :key="discover.title"
        :title="discover.title"
      >
        <template v-if="workingDiscovery">
          <MoreInformationSoon />
        </template>
        <template v-else>
          <VueMarkdownIt :source="discover.description" />
        </template>
      </Panel>
    </template>
  </PanelContainer>
</template>

<style lang="scss" scoped>
@use '@/variables' as *;

.explore {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 20px;
  margin-right: 20px;
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

  &--disabled {
    filter: grayscale(0.5);
    opacity: 0.4;
    pointer-events: none;
  }

  &:hover {
    background: $links-color-hover;
    color: #fff;
  }
}
</style>
