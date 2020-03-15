<template>
  <div>
    <!--header for <720px-->
    <header id="header-small" class="show-when-small">
      <div class="bar">
        <div id="open-aside-btn">
          <span>&#9776;</span>
        </div>
        <div class="title-container">
          <h1 id="title">Live</h1>
        </div>
      </div>
    </header>
    <!--Aside menu for small screens-->
    <aside id="aside-small-menu" class="show-when-small closed hidden">
      <div id="close-aside-btn">
        <div>x</div>
      </div>
      <nav>
        <ul>
          <li data-bind-view="dayof">
            <a href="#/dayof">Home</a>
          </li>
          <li data-bind-view="live">
            <a href="#/live">Live</a>
          </li>
          <li data-bind-view="schedule">
            <a href="#/schedule">Schedule</a>
          </li>
          <li data-bind-view="map">
            <a href="#/map">Map</a>
          </li>
          <!-- <li data-bind-view="mentors">-->
          <li>
            <!-- <a href="#/mentors">Mentors</a> -->
            <a href="https://mentors.hackupc.com/" target="_blank">Mentors</a>
          </li>
          <li data-bind-view="streaming">
            <a href="#/streaming">Streaming</a>
          </li>
          <li data-bind-view="challenges">
            <a href="#/challenges">Challenges</a>
          </li>
          <!-- <li data-bind-view="guides">-->
          <li>
            <!-- <a href="#/guides">Guides</a> -->
            <a href="https://guides.hackupc.com/guide/hacker" target="_blank">Guides</a>
          </li>
          <li data-bind-view="rules">
            <a href="#/rules">Rules</a>
          </li>
          <li data-bind-view="faq">
            <a href="#/faq">FAQ</a>
          </li>
        </ul>
      </nav>
    </aside>
    <!--header for >720px-->
    <header id="header-nav-bar" class="hide-when-small">
      <nav>
        <ul>
          <li data-bind-view="dayof">
            <router-link to="/#/home">Home</router-link>
          </li>
          <li data-bind-view="live">
            <router-link to="/live#/live">Live</router-link>
          </li>
          <li data-bind-view="schedule">
            <router-link to="/schedule#/schedule">Schedule</router-link>
          </li>
          <li data-bind-view="map">
            <router-link to="/map#/map">Map</router-link>
          </li>
          <li>
            <a href="https://mentors.hackupc.com/" target="_blank">Mentors</a>
            <!--<router-link to="/mentors#/mentors">Mentors</router-link>-->
          </li>
          <li id="countdown-li">
            <div class="countdown">
              <div id="countdown-time" class="countdown-time">
                <span class="hours">36</span>:<span class="minutes">00</span><span class="seconds">00</span>
              </div>
              <div class="countdown-bg">
                <img src="/assets/img/live/hackupc-logo.svg" alt="HackUPC logo">
              </div>
            </div>
          </li>
          <li data-bind-view="streaming">
            <router-link to="/streaming#/streaming">Streaming</router-link>
          </li>
          <li data-bind-view="challenges">
            <router-link to="/challenges#/challenges">Challenges</router-link>
          </li>
          <li>
            <a href="https://guides.hackupc.com/guide/hacker" target="_blank">Guides</a>
          </li>
          <li data-bind-view="rules">
            <router-link to="/rules#/rules">Rules</router-link>
          </li>
          <li data-bind-view="faq">
            <router-link to="/faq#/faq">FAQ</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style>
</style>
