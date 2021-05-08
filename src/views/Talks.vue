<template>
  <div id="talks" class="under-header padding-bottom">
    <div class="container" style="text-align: justify">
      <panel title="Avoiding unnecessary testing on children...">
        <div>
          <h3>Speaker: Toni Soriano</h3>
          <div class="embed-container">
            <iframe
              src="https://www.youtube.com/embed/IN48ZgR0nGk"
              class="embed"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </panel>
      <panel
        title="File processing and machine learning for audio classification using Python"
      >
        <div>
          <h3>Speakers: Guillem Bonilla i Daniel Marín</h3>
          <div class="embed-container">
            <iframe
              src="https://www.youtube.com/embed/b-3p2qxslws"
              class="embed"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </panel>
      <panel
        title="Language technologies and AI applied to health and medical data"
      >
        <div>
          <h3>Speaker: Salvador Lima</h3>
          <div class="embed-container">
            <iframe
              src="https://www.youtube.com/embed/fwdSemp0eqI"
              class="embed"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </panel>
      <panel title="Applications of Digital Contact Tracing">
        <div>
          <h3>Speaker: Jorge Garcia</h3>
          <div class="embed-container">
            <iframe
              src="https://www.youtube.com/embed/uXhMVeOkhbk"
              class="embed"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </panel>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Panel from '@/components/Panel.vue'

export default Vue.extend({
  components: {
    Panel,
  },
})
</script>

<style lang="scss" scoped>
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
