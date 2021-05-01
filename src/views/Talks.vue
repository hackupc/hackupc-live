<template>
  <div id="talks" class="under-header padding-bottom">
    <div class="container" style="text-align: justify">
      <div class="panel">
        <h1 style="text-transform: uppercase">
          Avoiding unnecessary testing on children...
        </h1>
        <!-- <div class="margin-bottom text-centered">
          <p class="icon"><i class="fab fa-twitch" aria-hidden="true"></i></p>
          <span><a target="_blank" href="https://www.twitch.tv/hackersupc">Twitch Channel</a></span>
        </div> -->
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
      </div>
      <div class="panel">
        <h1 style="text-transform: uppercase">
          File processing and machine learning for audio classification using
          Python
        </h1>
        <!-- <div class="margin-bottom text-centered">
          <p class="icon"><i class="fab fa-twitch" aria-hidden="true"></i></p>
          <span><a target="_blank" href="https://www.twitch.tv/hackersupc">Twitch Channel</a></span>
        </div> -->
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
      </div>
      <div class="panel">
        <h1 style="text-transform: uppercase">
          Language technologies and AI applied to health and medical data
        </h1>
        <!-- <div class="margin-bottom text-centered">
          <p class="icon"><i class="fab fa-twitch" aria-hidden="true"></i></p>
          <span><a target="_blank" href="https://www.twitch.tv/hackersupc">Twitch Channel</a></span>
        </div> -->
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
      </div>
      <div class="panel">
        <h1 style="text-transform: uppercase">
          Applications of Digital Contact Tracing
        </h1>
        <!-- <div class="margin-bottom text-centered">
          <p class="icon"><i class="fab fa-twitch" aria-hidden="true"></i></p>
          <span><a target="_blank" href="https://www.twitch.tv/hackersupc">Twitch Channel</a></span>
        </div> -->
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Talks',
}
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
