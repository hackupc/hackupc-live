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
        <li>Issues with your code</li>
        <li>Boosting up your project</li>
        <li>Getting started with your project</li>
        <li>Submitting it to Devpost</li>
      </ul>
    </Panel>
    <Panel title="Where to find them? Mentor lobby" size="small">
      You can always find a mentor in the Mentors lobby, located at A5105 next
      to the Cafeteria.
      <br /><br />
      📍Check where to find it in the <a href="/map/indoors">Map</a>!
      <br /><br />
      Also you can ask for help through the help channel on Slack!
      <IconLabel centered style="margin-top: 0.27rem">
        <template #icon>
          <FontAwesomeIcon class="link__icon" :icon="['fab', 'slack']" />
        </template>
        <a
          href="https://hackupc2024.slack.com"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-label-link"
          >#help
        </a>
      </IconLabel>
    </Panel>
    <div class="mentorPan">
      <Panel title="How to recognize a Mentor" size="big">
        In order to recognize a Mentor you can check if <b>Mentor</b> is written
        on their back!
        <Panel :panel-content-image="`url('${MentorShirt}')`" size="small">
          <div style="height: 400px"></div>
        </Panel>
      </Panel>
    </div>
    <div class="mentorPan">
      <Panel
        v-for="mentor in mentors"
        :key="mentor.title"
        :title="mentor.title"
      >
        <IconLabel centered style="margin-top: 0.27rem">
          <template #icon>
            <FontAwesomeIcon class="link__icon" :icon="['fab', 'slack']" />
          </template>
          <p class="icon-label-link">{{ mentor.slack }}</p>
        </IconLabel>
        <p class="position">{{ mentor.description }}</p>
        <p class="position">{{ mentor.languages }}</p>
        <div class="buttons">
          <p class="position">
            <a :href="mentor.linkedin">
              <FontAwesomeIcon
                class="link__icon"
                :icon="['fab', 'twitter']"
                size="3x"
              />
            </a>
          </p>
          <p v-if="mentor.webpage" class="position">
            <a :href="mentor.webpage">
              <FontAwesomeIcon
                icon="home"
                size="3x"
                style="margin-right: 5px"
              />
            </a>
          </p>
        </div>
      </Panel>
    </div>
  </PanelContainer>
</template>

<style lang="scss" scoped>
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

.buttons {
  display: flex;
  overflow: hidden;
  margin-top: 0.75rem;
  border-radius: 3px;
}
</style>
