<script setup lang="ts">
import PanelContainer from '../components/PanelContainer.vue'
import Panel from '@/components/Panel.vue'
import { meals } from '@/data/meals'
import { RouterLink, useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import config from '@/config'
import SecretContent from '@/components/SecretContent.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import MoreInformationSoon from '@/components/MoreInformationSoon.vue'

const hideMeals = ref(config.hideMeals)
const hideCafeteriaSchedule = ref(config.hideCafeteriaSchedule)

const route = useRoute()

const currentView = computed<'cafeteria' | 'regular'>(() => {
  if (
    route.params?.mealsId !== 'cafeteria' &&
    route.params?.mealsId !== 'regular'
  ) {
    return 'regular'
  }

  return route.params.mealsId
})
</script>

<template>
  <PanelContainer id="meals">
    <div class="explore">
      <div class="explore__list">
        <RouterLink
          :to="{
            name: 'meals',
            params: { mealsId: 'regular' },
          }"
          class="button"
          :class="{ 'button--disabled': currentView === 'regular' }"
          >Regular meals</RouterLink
        >
        <RouterLink
          :to="{
            name: 'meals',
            params: { mealsId: 'cafeteria' },
          }"
          class="button"
          :class="{ 'button--disabled': currentView === 'cafeteria' }"
          >Cafeteria</RouterLink
        >
      </div>
    </div>
    <template v-if="currentView === 'cafeteria'">
      <Panel title="Cafeteria" size="big">
        <span>
          In the cafeteria (<span>
            located in the
            <RouterLink
              :to="{
                name: 'map',
              }"
            >
              <span class="link__text"> A5106 </span>
            </RouterLink> </span
          >) you will be able to refill your energy with snacks and drinks!!
        </span>
        <br />
        <br />
        <span>
          There will also be some cool activities, so come and relax in the best
          place to network and met new people!
        </span>
      </Panel>

      <Panel title="Schedule & Rules" size="small">
        <div style="display: flex; flex-direction: column">
          <div style="display: flex; gap: 16px">
            <span class="meal-title">Rules</span>
          </div>
          <ul>
            <li>
              <b>🧹 Be clean</b>: Please if you are making a mess, clean it so
              the others find the place clean!
            </li>
            <li>
              <b>♻️ Recycle</b>: Throw the trash to the correct container.
            </li>
            <li>
              <b>🙏🏼 Be patient</b>: If we are running out of drinks, don't worry
              we are doing regular refills but we are really busy.
            </li>
            <li>
              <b>🤝🏼 Be generous</b>: Take only one unit per person, we are a
              lot of people, leave a bit for the rest.
            </li>
          </ul>
        </div>
        <div style="display: flex; flex-direction: column">
          <div style="display: flex; gap: 16px">
            <span class="meal-title">Schedule</span>
          </div>
          <template v-if="hideCafeteriaSchedule">
            <SecretContent secret-text="Soon available" />
          </template>
          <template v-else>
            <ul>
              <li><b>Friday</b>: The cafeteria will not open on friday!</li>
              <li><b>Saturday</b>:</li>
              <li><b>Sunday</b>:</li>
            </ul>
          </template>
        </div>
      </Panel>

      <Panel title="What we have" size="small">
        <div style="display: flex; flex-direction: column">
          <div style="display: flex; gap: 16px">
            <span class="meal-title">Coffee</span>
            <img
              src="@/assets/img/meals/incapto.svg"
              alt="incapto"
              width="100"
            />
          </div>
          <ul>
            <li>
              <b>Machine 1</b>: 100% arabica with a intensity of
              <FontAwesomeIcon
                :icon="['far', 'circle-dot']"
                style="margin-right: 4px; margin-left: 4px"
              />
              <FontAwesomeIcon
                :icon="['far', 'circle-dot']"
                style="margin-right: 4px"
              />
              <FontAwesomeIcon
                :icon="['far', 'circle-dot']"
                style="margin-right: 4px"
              />
              <FontAwesomeIcon
                :icon="['far', 'circle']"
                style="margin-right: 4px"
              />
              <FontAwesomeIcon :icon="['far', 'circle']" />
            </li>
            <li>
              <b>Machine 2</b>: Brasil with a intensity of
              <FontAwesomeIcon
                :icon="['far', 'circle-dot']"
                style="margin-right: 4px; margin-left: 4px"
              />
              <FontAwesomeIcon
                :icon="['far', 'circle-dot']"
                style="margin-right: 4px"
              />
              <FontAwesomeIcon
                :icon="['far', 'circle-dot']"
                style="margin-right: 4px"
              />
              <FontAwesomeIcon
                :icon="['far', 'circle']"
                style="margin-right: 4px"
              />
              <FontAwesomeIcon :icon="['far', 'circle']" />
            </li>
            <li>
              <b>Machine 3</b>: Decaf with a intensity of
              <FontAwesomeIcon
                :icon="['far', 'circle-dot']"
                style="margin-right: 4px; margin-left: 4px"
              />
              <FontAwesomeIcon
                :icon="['far', 'circle-dot']"
                style="margin-right: 4px"
              />
              <FontAwesomeIcon
                :icon="['far', 'circle']"
                style="margin-right: 4px"
              />
              <FontAwesomeIcon
                :icon="['far', 'circle']"
                style="margin-right: 4px"
              />
              <FontAwesomeIcon :icon="['far', 'circle']" />
            </li>
          </ul>
        </div>

        <div style="display: flex; flex-direction: column">
          <div style="display: flex; align-items: center; gap: 16px">
            <span class="meal-title">Drinks</span>
            <img
              src="@/assets/img/meals/cocacola.png"
              alt="cocacola"
              style="width: 100px"
            />
          </div>
          <ul>
            <li><b>RedBull</b></li>
            <li><b>Coca-cola</b>: Classic, Zero, Light</li>
            <li><b>Fanta</b>: Orange, Orange light, Lemon, Lemon light</li>
            <li><b>Aquarius</b>: Classic, Orange</li>
            <li><b>Fuze tea</b>: Peach, lemon</li>
          </ul>
        </div>

        <div style="display: flex; flex-direction: column">
          <div style="display: flex; align-items: center; gap: 16px">
            <span class="meal-title">Snacks</span>
          </div>
          <div
            style="
              display: flex;
              align-items: center;
              margin-top: 16px;
              margin-left: 16px;
              gap: 16px;
            "
          >
            <img
              src="@/assets/img/meals/frit_ravich.png"
              alt="frit_ravich"
              style="width: 80px"
            />
            <img
              src="@/assets/img/meals/nestle.svg"
              alt="nestle"
              style="width: 80px"
            />
            <img
              src="@/assets/img/meals/nissin.svg"
              alt="nissin"
              style="width: 80px"
            />
          </div>
        </div>
      </Panel>
    </template>

    <template v-if="currentView === 'regular'">
      <Panel title="Regular meals" size="big">
        <div class="allergies">
          <p><span class="allergies--icon">🌱</span> Vegetarian diet</p>
          <p><span class="allergies--icon">🥦</span> Vegan diet</p>
          <p><span class="allergies--icon">🌾</span> Gluten free</p>
        </div>
        <div class="note">
          <blockquote>
            We take in account all the allergies you specified in the
            application, so don't worry, we will have something for you. We do
            not offer Halal food, we recommend selecting the vegetarian diet
            instead.
          </blockquote>
        </div>
      </Panel>

      <template v-for="meal in meals" :key="meal.title">
        <Panel :title="meal.title" size="small">
          <div style="margin-bottom: 1.2rem; text-align: center">
            <span v-if="meal.provider" class="provider-name">
              {{ meal.provider }}
            </span>
            <span v-if="meal.mealTitle" class="meal-title">
              {{ meal.mealTitle }}
            </span>
          </div>
          <template v-if="hideMeals">
            <MoreInformationSoon />
          </template>
          <template v-else>
            <div
              v-for="description in meal.mealDescription"
              :key="description.nameMeal"
              class="meal-row"
            >
              <span class="meal-name">{{ description.nameMeal }} </span>
              <span v-if="description.isVegetarian" class="meal-icon-diet"
                >🌱</span
              >
              <span v-if="description.isVegan" class="meal-icon-diet">🥦</span>
              <span v-if="description.isGlutenFree" class="meal-icon-diet"
                >🌾</span
              >
              <span
                v-if="description.ingredients !== ''"
                class="meal-ingredients"
              >
                <br />
                <span class="meal-ingredients">{{
                  description.ingredients
                }}</span></span
              >
            </div>
          </template>
        </Panel>
      </template>
    </template>
  </PanelContainer>
</template>

<style lang="scss" scoped>
@use '@/variables' as *;

.provider-name {
  display: inline-block;
  height: 2rem;
  padding: 0 12px;
  margin: 4px;
  background-color: $secondary-color;
  border-radius: 3px;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 2;
  vertical-align: middle;
}

.meal-title {
  display: inline-block;
  height: 2rem;
  padding: 0 12px;
  margin: 4px;
  background-color: $primary-color-light;
  border-radius: 3px;
  color: $primary-color;
  font-size: 1rem;
  font-weight: bold;
  line-height: 2;
  vertical-align: middle;
}

.note {
  margin-top: 2rem;

  blockquote {
    margin: 0 !important;
  }
}

.provider-icon {
  color: $primary-color-light;
}

.meal-icon-diet {
  margin-left: 10px;
}

.meal-name {
  color: #fff;
}

.meal-ingredients {
  margin-left: 16px;
  color: $primary-color-light;
}

.meal-row {
  margin-bottom: 0.6rem;
}

.allergies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  &--icon {
    margin-right: 8px;
  }

  p {
    margin: 0;
  }
}

a {
  margin-left: 2px;
  color: $links-color;
  text-decoration: none !important;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: $links-color-hover;
    font-weight: bold;
  }
}

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
