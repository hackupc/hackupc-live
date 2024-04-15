<script setup lang="ts">
import IconLabel from '@/components/IconLabel.vue'
import Panel from '@/components/Panel.vue'
import { activities } from '@/data/activities'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueMarkdownIt from 'vue3-markdown-it'
import PanelContainer from '../components/PanelContainer.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import config from '@/config'
import SecretContent from '@/components/SecretContent.vue'

const hideActivities = ref(config.hideActivities)
</script>

<template>
  <div id="activities">
    <PanelContainer>
      <template v-for="activity in activities" :key="activity.title">
        <Panel v-if="hideActivities" title="Activity">
          <SecretContent secret-text="Soon available" />
        </Panel>

        <Panel v-else :title="activity.title" class="activity">
          <RouterLink
            v-if="activity.isMission"
            :to="{
              name: 'mission',
            }"
            class="mission"
          >
            <FontAwesomeIcon :icon="['fa', 'user-secret']" size="3x" />
            <span> Join the mission</span>
          </RouterLink>
          <div class="tags">
            <IconLabel class="channel" centered>
              <template #icon>
                <FontAwesomeIcon :icon="['far', 'clock']" />
              </template>
              {{ activity.time }}
            </IconLabel>
            <IconLabel class="channel" centered>
              <template #icon>
                <FontAwesomeIcon :icon="['fa', 'location-dot']" />
              </template>
              {{ activity.location }}
            </IconLabel>
          </div>
          <div class="description">
            <VueMarkdownIt :source="activity.description" />
          </div>
        </Panel>
      </template>
    </PanelContainer>
  </div>
</template>

<style lang="scss" scoped>
@use '@/variables' as *;
.tags {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.mission {
  position: absolute;
  bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 0.6rem;
  left: 16px;
  color: $links-color;
}

.description {
  margin-left: 1.4rem;
  margin-right: 1.4rem;
  margin-bottom: 1.5rem;
}
</style>
