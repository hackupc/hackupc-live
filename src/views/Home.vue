<script setup lang="ts">
import IconLabel from '@/components/IconLabel.vue'
import Panel from '@/components/Panel.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import PanelContainer from '../components/PanelContainer.vue'
import { DevpostIcon } from '@/components/icons'
import config from '@/config'
import SecretContent from '@/components/SecretContent.vue'
import { Tooltip } from 'ant-design-vue'

const hideWifiConfig = ref(config.hideWifiConfig)
</script>

<template>
  <PanelContainer>
    <Panel title="Important information" style="overflow: visible">
      <h3 class="wifi__title"><strong>WI-FI</strong></h3>
      <div class="wifi">
        <template v-if="hideWifiConfig">
          <SecretContent secret-text="Not available yet" />
        </template>
        <template v-else>
          <img
            class="wifi__qr"
            src="@/assets/img/wifi-qr.svg"
            alt=""
            tabindex="0"
          />
          <div class="wifi__inner">
            SSID: <code>HACKUPC2024</code><br />
            Password: <code>Biene2024!</code>
          </div>
        </template>
      </div>

      <p>
        The projects must be posted on
        <a
          target="_blank"
          href="https://hackupc-2024.devpost.com"
          rel="noopener noreferrer"
          >Devpost</a
        >
        before Sunday at 9:00 AM. If you don't do it, you won't have access to
        the travel reimbursement or prizes.
      </p>

      <p>All dates and hours are adjusted to your timezone.</p>
      <Tooltip title="Hackers Guidelines">
        <div class="buttons__disabled">
          <a
            href="https://guides.hackupc.com/guide/hacker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="book-open" style="margin-right: 4px" />
            Guides
          </a>
        </div>
      </Tooltip>
      <div class="buttons">
        <a
          href="https://maps.app.goo.gl/AKazP14LMy7LZoZq8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="map-location-dot" style="margin-right: 4px" />
          HackUPC location in Google maps
        </a>
      </div>
    </Panel>

    <Panel title="Contact">
      <IconLabel centered style="margin-top: 0.27rem; margin-bottom: 1.5rem">
        <template #icon>
          <FontAwesomeIcon class="link__icon" :icon="['fab', 'slack']" />
        </template>
        <a
          href="https://hackupc2024.slack.com"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-label-link"
          >hackupc2024.slack.com</a
        >
      </IconLabel>

      <div class="buttons">
        <a
          href="https://my.hackupc.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>MyHackUPC</b><br />
          <span style="font-weight: 400"
            >Claim your hardware and check your baggage</span
          >
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
          href="https://hackupc-2024.devpost.com"
        >
          <DevpostIcon />
          <br />Devpost
        </a>
      </div>

      <div class="buttons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:contact@hackupc.com"
          aria-label="mail"
        >
          <FontAwesomeIcon :icon="['fa', 'envelope']" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/HackUPC"
          aria-label="facebook"
        >
          <FontAwesomeIcon :icon="['fab', 'facebook']" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/HackUPC"
          aria-label="twitter"
        >
          <FontAwesomeIcon :icon="['fab', 'x-twitter']" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/HackUPC"
          aria-label="instagram"
        >
          <FontAwesomeIcon :icon="['fab', 'instagram']" />
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://es.linkedin.com/company/hack-upc"
          aria-label="linkedin"
        >
          <FontAwesomeIcon :icon="['fab', 'linkedin']" />
        </a>
      </div>
      <h3 style="margin-top: 1.5rem"><strong>Emergency contact</strong></h3>
      <p>
        In case of a major emergency you can contact the Spanish emergency
        number: <b><a href="tel:112"> 112 </a></b>
      </p>

      <h4 style="margin-top: 1rem; margin-bottom: 0">
        Know more what's behind HackUPC
      </h4>
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
          <FontAwesomeIcon :icon="['fab', 'x-twitter']" />
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
          href="https://tiktok.com/@hackersatupc"
          aria-label="instagram"
        >
          <FontAwesomeIcon :icon="['fab', 'tiktok']" />
        </a>
      </div>
    </Panel>
    <div style="width: 100%; margin-top: 3rem">
      <div class="panel">
        <h2 class="travel__title">How to get to and leave HackUPC</h2>
      </div>
    </div>
    <Panel title="✈️ By plane" size="small">
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
        Don't get a T-Casual ticket if you are in the airport, you won't be able
        to use it from there. Buy a single trip ticket from the airport instead.
        If you really want to use a T-Casual, then you can take the train (R2 to
        Sant Celoni or Maçanet-Massanes) from Terminal 2B (a free shuttle bus
        from Terminal 1 to Terminal 2B departs every 5 minutes), but the train
        only runs every 30 minutes. You will have to get down at
        <b>Sants Estació</b> (3rd stop) and take the metro as explained in the
        following section (By train).
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
            <FontAwesomeIcon class="wheelchair-icon__icon" icon="wheelchair" />
          </span>
          This itinerary is completely accessible.
        </p>
      </div>
    </Panel>
    <Panel title="🚂 By train" size="small">
      <h3 class="travel__subtitle">Arriving</h3>
      <p>
        If you take the train, you will probably arrive at
        <b>Sants Estació</b>. From there you need to take the metro L3, it is
        located on the north side of the station, follow the signs for the green
        line (L3), not the blue one (L5). When you reach the station, go towards
        <b>Zona Universitària</b> (to the right if coming from underground). Get
        off at <b>Palau Reial</b>, from there you should see some signs pointing
        where HackUPC is, otherwise you can check out our
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
        Take the metro L3 in <b>Palau Reial</b> towards <b>Trinitat Nova</b> and
        get off at <b>Sants Estació</b>. When exiting, the easiest way is to
        turn left and follow the signs towards the railway station, you can
        follow the plane sign or the letter R with the orange background.
      </p>
      <div class="travel__accessible">
        <p>
          <span class="wheelchair-icon">
            <FontAwesomeIcon class="wheelchair-icon__icon" icon="wheelchair" />
          </span>
          This itinerary is completely accessible. To enter the metro, you will
          have to reach the elevator on the street at Sants Estació.
        </p>
      </div>
    </Panel>
    <Panel title="🚌 By bus" size="small">
      <h3 class="travel__subtitle">Arriving</h3>
      <p>
        If you are coming by bus you can take one of the following lines
        <b>67</b>, <b>75</b>, <b>113</b> or <b>H6</b> until
        <b>Palau Reial</b> stop, from there you need to walk up to Campus Nord -
        UPC, placed on the top of Facultad d'economia de la UB. You can also use
        the <b>33</b> bus line, which will leave you right in front of the
        Campus Nord, check out everything on our
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
        In front of the Campus Nord you have a stop for bus line <b>33</b>.
        Otherwise, if you need any of the other lines <b>67</b>, <b>75</b>,
        <b>113</b>, or <b>H6</b> you will have to go down to Diagonal and look
        for the stop for the line you need.
      </p>
      <div class="travel__accessible">
        <p>
          <span class="wheelchair-icon">
            <FontAwesomeIcon class="wheelchair-icon__icon" icon="wheelchair" />
          </span>
          This itinerary is completely accessible.
        </p>
      </div>
    </Panel>
    <Panel title="🚗 By car" size="small">
      <h3 class="travel__subtitle">Arriving</h3>
      <p>
        If you come by car, you can find a place to park in the top of the
        campus, you can check in the streets: <b>Sor Eulàlia d’Anzizu</b> or
        <b>Cavallers</b>. The green parking area is free during the weekend.
      </p>
      <h3 class="travel__subtitle" style="margin-top: 20px">Leaving</h3>
      <p>
        Google Maps will know for sure your way back home. Just remember where
        you parked your car.
      </p>
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

  &__disabled {
    display: block;
    flex: 1 1 0;
    padding: 8px;
    border: 2px solid $tertiary-light-color;
    border-radius: 3px;
    color: $tertiary-light-color;
    cursor: not-allowed;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
  }

  a {
    display: block;
    flex: 1 1 0;
    padding: 8px;
    background-color: $tertiary-light-color;
    color: $text-color-dark !important;
    cursor: url('../assets/img/rocket-fire.png'), auto;
    font-weight: bold;
    text-align: center;
    text-decoration: none;

    &:not(:first-child) {
      margin-left: 4px;
    }

    &:hover {
      background-color: $links-color !important;
    }

    &:active {
      background-color: $links-color-hover !important;
    }
  }
}

.block {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.wifi {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  gap: 1.5rem;

  &__title {
    margin: 0 0 2rem !important;
    line-height: 1;
    text-align: center;
  }

  &__qr {
    z-index: 1;
    display: inline-block;
    height: 4rem;
    padding: 0.7rem;
    margin: -1rem 0;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem 0 rgb(0 0 0 / 0%);
    transition: transform 500ms $ease-bounce, box-shadow 500ms $ease-bounce;

    &:hover,
    &:focus {
      box-shadow: 0 0.5rem 1rem 0 rgb(0 0 0 / 40%);
      transform: scale(5);
    }
  }

  &__inner {
    display: inline-block;
    line-height: 2.5;
    text-align: left;

    code {
      margin-left: 0.5rem;
      background-color: $primary-color-light;
      color: $text-color-dark;
    }
  }
}

.icon-label-link {
  color: $primary-color !important;
  text-decoration: none !important;

  &:hover {
    color: $links-color-hover !important;
  }
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

.panel {
  position: relative;
  overflow: hidden;
  flex: 1 1 350px;
  margin: 16px;
  background-color: $contrast-color;
  border-radius: $border-radius;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  color: $text-color;
  text-align: left;
}

.travel {
  &__title {
    position: relative;
    overflow: hidden;
    flex: 1 1 1300px;
    padding: 12px 24px;
    margin: 0;
    background-color: $primary-color;
    border-radius: $border-radius;
    color: #fff;
    font-size: 20px;
    line-height: 1.6;
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
