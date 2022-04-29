<script setup lang="ts">
import IconLabel from '@/components/IconLabel.vue'
import { DevpostIcon } from '@/components/icons'
import Panel from '@/components/Panel.vue'
import { formatDate } from '@/services/dates'
import { useScheduleStore } from '@/stores/schedule'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { MailIcon } from '@heroicons/vue/solid'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import PanelContainer from '../components/PanelContainer.vue'

const scheduleStore = useScheduleStore()

const submitDeadline = computed<string>(() =>
  formatDate('weekday-time', scheduleStore.schedule.submitDeadline)
)
</script>

<template>
  <PanelContainer>
    <Panel title="Important information" style="overflow: visible">
      <h3 class="wifi__title">Wi-Fi</h3>
      <div class="wifi">
        <img
          class="wifi__qr"
          src="@/assets/img/wifi-qr.svg"
          alt=""
          tabindex="0"
        />
        <div class="wifi__inner">
          SSID: <code>HACKUPC2022</code><br />
          Password: <code>Biene2022!</code>
        </div>
      </div>

      <p>
        The projects must be posted on
        <a
          target="_blank"
          href="https://hackupc2022.devpost.com/"
          rel="noopener noreferrer"
          >Devpost</a
        >
        before {{ submitDeadline }}. If you don't do it, you won't have access
        to the prizes, swag, nor ECTS credits.
      </p>

      <div class="buttons">
        <a
          href="https://guides.hackupc.com/guide/hacker/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>Guides</b>
        </a>
      </div>
    </Panel>

    <Panel title="Contact">
      <IconLabel centered>
        <template #icon>
          <FontAwesomeIcon class="link__icon" :icon="['fab', 'slack']" />
        </template>
        <a
          href="https://hackupc2022.slack.com"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-label-link"
          >hackupc2022.slack.com</a
        >
      </IconLabel>
      <IconLabel centered>
        <template #icon>
          <MailIcon />
        </template>
        <a
          href="mailto:contact@hackupc.com"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-label-link"
          >contact@hackupc.com</a
        >
      </IconLabel>

      <div class="buttons">
        <a
          href="https://my.hackupc.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>MyHackUPC</b><br />
          <span style="font-weight: 400">Hardware / Baggage / Judging</span>
        </a>
      </div>

      <div class="buttons">
        <a
          target="_blank"
          href="https://www.youtube.com/c/HackersUPC"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon :icon="['fab', 'youtube']" />
          <br />YouTube
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
          href="https://hackupc2022.devpost.com/"
        >
          <DevpostIcon />
          <br />Devpost
        </a>
      </div>

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
    </Panel>

    <Panel title="How to get to HackUPC" size="big">
      <div class="travel">
        <h2 class="travel__title text-centered">
          <FontAwesomeIcon icon="plane-arrival" /> By plane
        </h2>
        <h3 class="travel__subtitle text-centered">Arriving</h3>
        <p>
          Take the metro L9 in either <b>Aeroport T2</b> or
          <b>Aeroport T1</b> towards <b>Zona Universitària</b>. Go to the last
          station <b>Zona Universitària</b>. Our venue is a 10 minute walk from
          there. To get to our check-in point please check out our
          <RouterLink
            :to="{
              name: 'map',
              params: { mapId: 'campus' },
            }"
            >map</RouterLink
          >.
        </p>
        <p>
          Don't get a T-10 ticket if you are in the airport, you won't be able
          to use it from there. Buy a single trip ticket from the airport
          instead. If you really want to use a T-10, then you can take the train
          (R2 to Sant Celoni or Maçanet-Massanes) from Terminal 2B (a free
          shuttle bus from Terminal 1 to Terminal 2B departs every 5 minutes),
          but the train only runs every 30 minutes. You will have to get down at
          <b>Sants Estació</b> (3rd stop) and take the metro as explained below.
        </p>
        <h3 class="travel__subtitle text-centered">Leaving</h3>
        <p>
          Take the metro L9 in <b>Zona Universitària</b> towards
          <b>Aeroport T1</b>. Stop at either <b> Aeroport T1</b> or
          <b>Aeroport T2</b> depending on the terminal your plane is departing
          from.
        </p>
        <div class="travel__accessible">
          <p>
            <span class="wheelchair-icon">
              <FontAwesomeIcon
                class="wheelchair-icon__icon"
                icon="wheelchair"
              />
            </span>
            This itinerary is completely accessible.
          </p>
        </div>
        <div class="travel__separator"></div>
        <h2 class="travel__title margin-bottom">
          <FontAwesomeIcon icon="train-subway" /> By train
        </h2>
        <h3 class="travel__subtitle">Arriving</h3>
        <p>
          If you take the train, you will probably arrive at
          <b>Sants Estació</b>. From there you need to take the metro L3, it is
          located on the north side of the station, follow the signs for the
          green line (L3), not the blue one (L5). When you reach the station, go
          towards <b>Zona Universitària</b> (to the right if coming from
          underground). Get off at <b>Palau Reial</b>, from there you should see
          some signs pointing where HackUPC is, otherwise you can check out our
          <RouterLink
            :to="{
              name: 'map',
              params: { mapId: 'campus' },
            }"
            >map</RouterLink
          >.
        </p>
        <h3 class="travel__subtitle" style="margin-top: 20px">Leaving</h3>
        <p>
          Take the metro L3 in <b>Palau Reial</b> towards
          <b>Trinitat Nova</b> and get off at <b>Sants Estació</b>. When
          exiting, the easiest way is to turn left and follow the signs towards
          the railway station, you can follow the plane sign or the letter R
          with the orange background.
        </p>
        <div class="travel__accessible">
          <p>
            <span class="wheelchair-icon">
              <FontAwesomeIcon
                class="wheelchair-icon__icon"
                icon="wheelchair"
              />
            </span>
            This itinerary is completely accessible. To enter the metro, you
            will have to reach the elevator on the street at Sants Estació.
          </p>
        </div>
      </div>
    </Panel>
  </PanelContainer>
</template>

<style lang="scss" scoped>
@use '@/variables' as *;

.buttons {
  display: flex;
  overflow: hidden;
  margin-top: 0.75rem;
  border-radius: 3px;

  a {
    display: block;
    flex: 1 1 0;
    padding: 8px;
    background-color: $tertiary-light-color;
    color: $text-color !important;
    font-weight: bold;
    text-align: center;
    text-decoration: none;

    &:not(:first-child) {
      border-left: thin solid #fff;
    }
  }
}

.wifi {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 1rem;

  &__title {
    margin: 0 0 0.5rem !important;
    line-height: 1;
    text-align: center;
  }

  &__qr {
    z-index: 1;
    display: inline-block;
    height: 4rem;
    padding: 1rem;
    margin: -1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem 0 rgb(0 0 0 / 0%);
    transition: transform 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28),
      box-shadow 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28);

    &:hover,
    &:focus {
      box-shadow: 0 0.5rem 1rem 0 rgb(0 0 0 / 40%);
      transform: scale(5);
    }
  }

  &__inner {
    display: inline-block;
    line-height: 2;
    text-align: left;
  }
}

.icon-label-link {
  color: currentcolor !important;
  text-decoration: none !important;
}

.wheelchair-icon {
  display: inline-block;
  padding: 0 1rem;
  background-color: #155196;
  border-radius: 5px;

  &__icon {
    color: #fff;
  }
}

.travel {
  &__title {
    margin-top: 0;
    margin-bottom: 15px;
    text-align: center;
  }

  &__subtitle {
    margin-top: 0;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 5px;
  }

  &__separator {
    padding-bottom: 25px;
    border-top: 1px solid #49494933;
    margin-top: 15px;
  }

  &__accessible {
    margin-top: 20px;
  }
}
</style>
