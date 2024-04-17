<script setup lang="ts">
import MentorShirt from '@/assets/img/mentorShirt.png'
import { mentors } from '@/data/mentors'
import IconLabel from '@/components/IconLabel.vue'
import Panel from '@/components/Panel.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PanelContainer from '@/components/PanelContainer.vue'
</script>

<template>
  <PanelContainer id="mentors">
    <Panel title="What is a mentor?" size="small">
      Mentors are experts in various technologies and programming languages who
      can help you with:
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
        #help
      </IconLabel>
      You can always find a mentor in the Mentors lobby, located at A5105 next
      to the Cafeteria.
      <br /><br />
      📍Check where to find it in the <a href="/map/indoors">Map</a>!
      <br /><br />
      Also you can ask for help through the help channel on Slack!
    </Panel>
    <div class="mentorPan">
      <Panel title="How to recognize a Mentor" size="big">
        In order to recognize a Mentor you can check if <b>Mentor</b> is written
        on their back!
        <Panel :panel-content-image="`url('${MentorShirt}')`" size="small">
          <div style="height: 600px"></div>
        </Panel>
      </Panel>
    </div>
    <div class="mentorPan">
      <Panel
        v-for="mentor in mentors"
        :key="mentor.title"
        :title="mentor.title"
      >
        <IconLabel centered style="margin-top: 0.27rem; margin-bottom: 1.5rem">
          <template #icon>
            <FontAwesomeIcon class="link__icon" :icon="['fab', 'slack']" />
          </template>
          <p class="icon-label-link">{{ mentor.slack }}</p>
        </IconLabel>
        <p class="position">
          <span style="margin-right: 8px">💼</span><strong>Working as:</strong>
          {{ mentor.description }}
        </p>
        <p class="position">{{ mentor.languages }}</p>
        <div class="icons">
          <a v-if="mentor.linkedin" :href="mentor.linkedin" class="icons__icon">
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
    </div>
  </PanelContainer>
</template>

<style lang="scss" scoped>
@use '@/variables' as *;

.mentorPan {
  display: flex;
  max-width: 1300px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.5rem;

  .no-margin {
    div {
      margin: 0;
    }
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
