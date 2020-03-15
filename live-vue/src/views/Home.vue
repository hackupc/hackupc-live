<template>
  <div id="dayof" class="under-header padding-bottom">
    <div class="container">
      <div class="panel">
        <h1>Important Info</h1>
        <div>
          <div class="panel-info margin-bottom text-centered">
            <h4 class="label text-normal">Wifi:</h4>
            <span>HACKUPC2019</span>
          </div>
          <div class="panel-info text-centered">
            <h4 class="label text-normal">Password:</h4>
            <span>Biene2019!</span>
          </div>
        </div>
        <div>
          <h3 class="text-centered margin-bottom">Links</h3>
          <div class="buttons margin-bottom">
            <a target="_blank" href="https://my.hackupc.com">MyHackUPC <div style="font-weight: normal;">Hardware / Baggage / Judging</div></a>
          </div>
          <div class="buttons margin-bottom">
            <a target="_blank" href="https://mentors.hackupc.com">Mentors</a>
          </div>
          <div class="buttons margin-bottom">
            <a target="_blank" href="https://guides.hackupc.com/guide/hacker">Guides</a>
          </div>
          <div class="buttons margin-bottom">
            <a target="_blank" href="https://hackupc2019.devpost.com">Devpost</a>
          </div>
        </div>
        <div>
          <p>
            Remember that in order to get your travel reimbursement you must submit a project to Devpost before the deadline.
          </p>
        </div>
      </div>
      <div class="panel" style="align-self: flex-start;">
        <h1>Contact</h1>
        <div class="text-centered">
          <p class="icon"><i class="fa fa-slack" aria-hidden="true"></i></p>
          <span><a  target="_blank" href="https://hackupc2019.slack.com">hackupc2019.slack.com</a></span>
        </div>
        <div class="text-centered">
          <p class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></p>
          <span><a href="mailto:contact@hackupc.com" target="_blank">contact@hackupc.com</a></span>
        </div>
        <!-- <div>
          <h3 class="text-centered margin-bottom">Emergency phone</h3>
          <div class="text-centered">
            <p class="icon"><i class="fa fa-phone" aria-hidden="true"></i></p>
            <span>112</span>
          </div>
        </div> -->
        <div>
          <h3 class="text-centered margin-bottom">Social media</h3>
          <div class="buttons">
            <a class="fb" target="_blank" href="https://www.facebook.com/hackupc"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
            <a class="tw" target="_blank" href="https://twitter.com/hackupc"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            <a class="ig" target="_blank" href="https://instagram.com/hackupc"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a class="yt" target="_blank" href="https://www.youtube.com/channel/UCiiRorGg59Xd5Sjj9bjIt-g"><i class="fa fa-youtube" aria-hidden="true"></i></a>
            <a class="gt" target="_blank" href="https://github.com/hackupc"><i class="fa fa-github" aria-hidden="true"></i></a>
            <a class="me" target="_blank" href="https://medium.com/@hackupc"><i class="fa fa-medium" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
      <div class="panel large">
        <h1>How to get to HackUPC</h1>
        <div class="get-there">
          <h2 class="get-title text-centered"><i class="fa fa-plane" aria-hidden="true"></i> By plane</h2>
          <h3 class="get-subtitle text-centered">Arriving</h3>
          <p>Take the metro L9 in either <b>Aeroport T2</b> or <b>Aeroport T1</b> towards <b>Zona Universitària</b>. Go to the last station <b>Zona Universitària</b>. Our venue is a 10 minute walk from there. To get to our check-in point please check out our <a href="#/map/">map</a>.</p>
          <p>Don't get a T-10 ticket if you are in the airport, you won't be able to use it from there. Buy a single trip ticket from the airport instead. If you really want to use a T-10, then you can take the train (R2 to Sant Celoni or Maçanet-Massanes) from Terminal 2B (a free shuttle bus from Terminal 1 to Terminal 2B departs every 5 minutes), but the train only runs every 30 minutes. You will have to get down at <b>Sants Estació</b> (3rd stop) and take the metro as explained below.</p>
          <h3 class="get-subtitle text-centered">Leaving</h3>
          <p>Take the metro L9 in <b>Zona Universitària</b> towards <b>Aeroport T1</b>. Stop at either <b> Aeroport T1</b> or <b>Aeroport T2</b> depending on the terminal your plane is departing from.</p>
          <div class="get-accessible">
                <p><i style="background-color: #155196;" class="fa fa-wheelchair icon" aria-hidden="true"></i> This itinerary is completely accessible.</p>
          </div>
          <div class="get-separator"></div>
          <h2 class="get-title text-centered margin-bottom"><i class="fa fa-train" aria-hidden="true"></i> By train</h2>
          <h3 class="get-subtitle text-centered">Arriving</h3>
          <p>If you take the train, you will probably arrive at <b>Sants Estació</b>. From there you need to take the metro L3, it is located on the north side of the station, follow the signs for the green line (L3), not the blue one (L5). When you reach the station, go towards <b>Zona Universitària</b> (to the right if coming from underground). Get off at <b>Palau Reial</b>, from there you should see some signs pointing where HackUPC is, otherwise you can check out our <a href="#/map/">map</a>.</p>
          <h3 class="get-subtitle text-centered" style="margin-top: 20px;">Leaving</h3>
          <p>Take the metro L3 in <b>Palau Reial</b> towards <b>Trinitat Nova</b> and get off at <b>Sants Estació</b>. When exiting, the easiest way is to turn left and follow the signs towards the railway station, you can follow the plane sign or the letter R with the orange background.</p>
          <div class="get-accessible">
                <p><i style="background-color: #155196;" class="fa fa-wheelchair icon" aria-hidden="true"></i> This itinerary is completely accessible. To enter the metro, you will have to reach the elevator on the street at Sants Estació.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
