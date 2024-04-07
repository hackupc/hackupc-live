<script setup lang="ts">
import PanelContainer from '../components/PanelContainer.vue'
import Panel from '@/components/Panel.vue'
import { meals } from '@/data/meals'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import config from '@/config'
import SecretContent from '@/components/SecretContent.vue'

const hideMeals = ref(config.hideMeals)
const hideCafeteria = ref(config.hideCafeteria)
</script>

<template>
  <PanelContainer id="cafeteria">
    <Panel v-if="hideCafeteria" title="☕️ 🎲 Cafeteria" size="big">
      <SecretContent />
    </Panel>
    <Panel v-else title="☕️ 🎲 Cafeteria" size="big">
      <span>
        In the cafeteria (<span>
          located in the
          <RouterLink
            :to="{
              name: 'map',
            }"
          >
            <span class="link__text"> A5105 </span>
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

    <Panel v-if="hideCafeteria" title="Schedule & Rules" size="small">
      <SecretContent />
    </Panel>
    <Panel v-else title="Schedule & Rules" size="small">
      <div style="display: flex; flex-direction: column">
        <div style="display: flex; gap: 16px">
          <span class="meal-title">Rules</span>
        </div>
        <ul>
          <li>
            <b>🧹 Be clean</b>: Please if you are making a mess, clean it so the
            others find the place clean!
          </li>
          <li><b>♻️ Recycle</b>: Throw the trash to the correct container.</li>
          <li>
            <b>🙏🏼 Be patient</b>: If we are running out of drinks, don't worry
            we are doing regular refills but we are really busy.
          </li>
          <li>
            <b>🤝🏼 Be generous</b>: Take only one unit per person, we are a lot
            of people, leave a bit for the rest.
          </li>
        </ul>
      </div>
      <div style="display: flex; flex-direction: column">
        <div style="display: flex; gap: 16px">
          <span class="meal-title">Schedule</span>
        </div>
        <ul>
          <li><b>Friday</b>: The cafeteria will not open on friday!</li>
          <li><b>Saturday</b>:</li>
          <li><b>Sunday</b>:</li>
        </ul>
      </div>
    </Panel>

    <Panel v-if="hideCafeteria" title="What we have" size="small">
      <SecretContent />
    </Panel>
    <Panel v-else title="What we have" size="small">
      <div style="display: flex; flex-direction: column">
        <div style="display: flex; gap: 16px">
          <span class="meal-title">Coffee</span>
          <img src="@/assets/img/meals/incapto.svg" alt="incapto" width="100" />
        </div>
        <ul>
          <li><b>Machine 1</b>: 100% arabica (Intensity 3/5)</li>
          <li><b>Machine 2</b>: Brasil (Intensity 3/5)</li>
          <li><b>Machine 3</b>: Decaf (Intensity 2/5)</li>
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
  </PanelContainer>

  <PanelContainer id="meals" style="padding-top: 10px">
    <Panel v-if="hideMeals" title="🍽 Regular meals" size="big">
      <SecretContent />
    </Panel>

    <Panel v-else title="🍽 Regular meals" size="big">
      <div class="allergies">
        <p><span class="allergies--icon">🌱</span> Vegetarian diet</p>
        <p><span class="allergies--icon">🥦</span> Vegan diet</p>
        <p><span class="allergies--icon">🌾</span> Gluten free</p>
      </div>
    </Panel>

    <template v-for="meal in meals" :key="meal.title">
      <Panel v-if="hideMeals" :title="meal.title" size="small">
        <SecretContent
      /></Panel>

      <Panel v-else :title="meal.title" size="small">
        <div style="margin-bottom: 1.2rem; text-align: center">
          <span v-if="meal.provider" class="provider-name">
            {{ meal.provider }}
          </span>
          <span v-if="meal.mealTitle" class="meal-title">
            {{ meal.mealTitle }}
          </span>
        </div>
        <div
          v-for="description in meal.mealDescription"
          :key="description.nameMeal"
          class="meal-row"
        >
          <span class="meal-name">{{ description.nameMeal }} </span>
          <span v-if="description.isVegetarian" class="meal-icon-diet">🌱</span>
          <span v-if="description.isVegan" class="meal-icon-diet">🥦</span>
          <span v-if="description.isGlutenFree" class="meal-icon-diet">🌾</span>
          <span v-if="description.ingredients !== ''" class="meal-ingredients">
            <br />
            <span class="meal-ingredients">{{
              description.ingredients
            }}</span></span
          >
        </div>
      </Panel>
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
</style>
