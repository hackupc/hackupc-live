<script setup lang="ts">
import { mentors } from '@/data/mentors'
import IconLabel from '@/components/IconLabel.vue'
import Panel from '@/components/Panel.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PanelContainer from '@/components/PanelContainer.vue'
import { RouterLink, useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import config from '@/config'
import MoreInformationSoon from '@/components/MoreInformationSoon.vue'

const hideMentors = ref(config.hideMentors)

const route = useRoute()

const currentView = computed<'generalInfo' | 'meetThem'>(() => {
  if (
    route.params?.mentorsId !== 'generalInfo' &&
    route.params?.mentorsId !== 'meetThem'
  ) {
    return 'generalInfo'
  }

  return route.params.mentorsId
})
</script>

<template>
  <PanelContainer id="mentors">
    <div class="explore">
      <RouterLink
        :to="{
          name: 'mentors',
          params: { mentorsId: 'generalInfo' },
        }"
        class="button"
        :class="{ 'button--disabled': currentView === 'generalInfo' }"
      >
        General Information
      </RouterLink>
      <RouterLink
        :to="{
          name: 'mentors',
          params: { mentorsId: 'meetThem' },
        }"
        class="button"
        :class="{ 'button--disabled': currentView === 'meetThem' }"
      >
        Meet our mentors
      </RouterLink>
    </div>

    <template v-if="currentView === 'generalInfo'">
      <Panel title="What is a mentor?" size="small">
        Mentors are experts in various technologies and programming languages
        who can help you with:
        <ul>
          <li>💻 Getting started with your project</li>
          <li>🚀 Boosting up your project</li>
          <li>💣 Issues with your code</li>
          <li>🏆 Submitting it to Devpost</li>
        </ul>
      </Panel>
      <Panel title="Where to find them? Mentor lobby" size="small">
        <IconLabel centered style="margin-bottom: 0.5rem">
          <template #icon>
            <FontAwesomeIcon class="link__icon" :icon="['fab', 'slack']" />
          </template>
          #mentors
        </IconLabel>
        You can always find a mentor in the Mentors lobby, located at A5105 next
        to the Cafeteria.
        <br /><br />
        📍Check where to find it in the <a href="/map/indoors">Map</a>!
        <br /><br />
        Also you can ask for help through the help channel on Slack!
      </Panel>
    </template>

    <template v-if="currentView === 'meetThem'">
      <template v-for="mentor in mentors" :key="mentor.title">
        <Panel v-if="hideMentors" title="Mentor name">
          <MoreInformationSoon />
        </Panel>
        <Panel v-else :title="mentor.title">
          <IconLabel
            centered
            style="margin-top: 0.27rem; margin-bottom: 1.5rem"
          >
            <template #icon>
              <FontAwesomeIcon class="link__icon" :icon="['fab', 'slack']" />
            </template>
            <p class="icon-label-link">{{ mentor.slack }}</p>
          </IconLabel>
          <p class="position">
            <span style="margin-right: 8px">💼</span
            ><strong>Working as:</strong>
            {{ mentor.description }}
          </p>
          <p class="position">{{ mentor.languages }}</p>
          <div class="icons">
            <a
              v-if="mentor.linkedin"
              :href="mentor.linkedin"
              class="icons__icon"
            >
              <FontAwesomeIcon
                class="link__icon"
                :icon="['fab', 'linkedin']"
                size="3x"
              />
            </a>
            <a v-if="mentor.webpage" :href="mentor.webpage" class="icons__icon">
              <FontAwesomeIcon
                class="link__icon"
                :icon="['fa', 'globe']"
                size="3x"
              />
            </a>
          </div>
        </Panel>
      </template>
    </template>
  </PanelContainer>
</template>

<style lang="scss" scoped>
@use '@/variables' as *;

.explore {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
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

.position {
  margin-top: 16px;
  margin-bottom: 16px;
}

.icons {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  border-radius: 3px;

  &__icon {
    margin-right: 1rem;
    color: $tertiary-light-color !important;

    &:hover {
      color: $links-color !important;
    }

    &:active {
      color: $links-color-hover !important;
    }
  }
}
</style>
