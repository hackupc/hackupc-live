<template>
  <div class="container">
    <panel title="Important information">
      <p>
        <b>
          The projects must be posted on
          <a
            target="_blank"
            rel="noopener"
            href="https://hackupc2021.devpost.com/"
            >Devpost</a
          >
          before Sunday at 12:00.
        </b>
        If you don't do it, you won't have access to the prices, swag, nor ECTS
        credits.
      </p>

      <div style="text-align: center">
        <span class="icon"
          ><i class="fa fa-envelope" aria-hidden="true"></i
        ></span>
        <span class="highlight-span"
          ><a
            href="mailto:bitsxlamarato@fib.upc.edu"
            target="_blank"
            rel="noopener"
            >contact@hackupc.com</a
          ></span
        >
      </div>
    </panel>

    <panel title="Links">
      <div class="buttons">
        <a target="_blank" rel="noopener" href="#"
          ><i class="fab fa-discord" aria-hidden="true"></i>
          <br />
          Discord
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://www.twitch.tv/hackersupc"
          ><i class="fab fa-twitch" aria-hidden="true"></i>
          <br />
          Twitch
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://hackupc2021.devpost.com/"
        >
          <svg viewBox="0 0 280.3 242" height="1em">
            <path
              d="M133.7 76H118v90h14.7c30.9 0 45.1-18.1 45.1-45 0-30.1-12.9-45-44.1-45z"
              fill="currentColor"
            />
            <path
              d="M210.2 0H70.1L0 121l70.1 121h140.1l70.1-121L210.2 0zm-77.5 195H89V47h45.8c42.1 0 73.3 20.1 73.3 74 0 51.8-37.5 74-75.4 74z"
              fill="currentColor"
            />
          </svg>
          <br />
          Devpost
        </a>
      </div>

      <div style="margin-top: 1.5rem">
        <div class="buttons">
          <a
            target="_blank"
            rel="noopener"
            href="https://www.facebook.com/hackersupc"
            ><i class="fab fa-facebook" aria-hidden="true"></i
          ></a>
          <a
            target="_blank"
            rel="noopener"
            href="https://twitter.com/hackersupc"
            ><i class="fab fa-twitter" aria-hidden="true"></i
          ></a>
          <a
            target="_blank"
            rel="noopener"
            href="https://instagram.com/hackersupc"
            ><i class="fab fa-instagram" aria-hidden="true"></i
          ></a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.youtube.com/c/HackersUPC"
            ><i class="fab fa-youtube" aria-hidden="true"></i
          ></a>
          <a target="_blank" rel="noopener" href="https://github.com/hackupc"
            ><i class="fab fa-github" aria-hidden="true"></i
          ></a>
          <a target="_blank" rel="noopener" href="https://medium.com/@hackupc"
            ><i class="fab fa-medium" aria-hidden="true"></i
          ></a>
        </div>
      </div>
    </panel>

    <panel title="Discord BieneBot Commands" size="big">
      <h3>Useful</h3>
      <div>
        <div>
          <span class="highlight-span"
            >biene changeteamname [new_teamname]</span
          >
          Dhanges the team's name.
        </div>
        <div>
          <span class="highlight-span"
            >biene jointeam [teamname] [new_members]</span
          >
          Adds multiple users to a team.
        </div>
        <div>
          <span class="highlight-span">biene ping</span> Displays info for your
          internet connection.
        </div>
      </div>

      <h3>Useless</h3>
      <div>
        <span class="highlight-span">biene joke</span>
        <span class="highlight-span">biene biene</span>
        <span class="highlight-span">biene biene [organizer_name]</span>
        <span class="highlight-span">biene parrot</span>
        <span class="highlight-span">biene cat</span>
        <span class="highlight-span">biene dog</span>
      </div>
      <div>
        <span class="highlight-span"
          >biene meme [meme_code] text|seperated|by|lines
        </span>
        Inserts text to meme with code [meme_code].
      </div>
      <div>
        <span class="highlight-span">biene meme help</span> Get meme_code.
      </div>
    </panel>
  </div>
</template>

<script lang="ts">
import Panel from '@/components/Panel.vue'
import Vue from 'vue'

export default Vue.extend({
  components: { Panel },
})
</script>

<style lang="scss" scoped></style>
