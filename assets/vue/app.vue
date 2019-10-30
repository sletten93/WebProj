// <script>
var app = new Vue({

  el: '#app',

  data: {

    url: '',
    key: "",
    values: [],
    inputs: []
  },

  methods: {

    serverCall: function() {
      this.url = '';
      this.url = "api/" + this.key;
      this.urlInputs = '';
      for (var i = 0; i < this.inputs.length; i++){
        this.url += this.inputs[i]+ '/';
        console.log('THIS.URL', this.url)
      }
      this.url = this.url.slice(0, -1);
      console.log('ADDING: ' + this.url);

      this.url = 'http://sportstatsweb.jls-sto1.elastx.net/' + this.url;
    },

    optClick: function optClick(event) {
      // console.log(this.key);
      this.values = [];
      this.inputs = [];

      if (this.key == 'addSport/'){
        this.values[0] = 'Sport Name';
      }
      else if (this.key == 'addLeagueToSport/'){
        this.values[0] = 'League Name';
        this.values[1] = 'Sport ID';
      }
      else if (this.key == 'addTeamForSport/'){
        this.values[0] = 'Team Name';
        this.values[1] = 'Sport ID';
      }
      else if (this.key == 'addTeamToSeason/'){
        this.values[0] = 'Team Name';
        this.values[1] = 'Season ID';
        this.values[2] = 'Arena ID';
        this.values[3] = 'Sport ID';
      }
      else if (this.key == 'addSeasonForLeague/'){
        this.values[0] = 'League ID';
        this.values[1] = 'Start Year';
        this.values[2] = 'End Year';
        this.values[3] = 'Max Rounds';
      }
      else if (this.key == 'addRoundToSeason/'){
        this.values[0] = 'Round Nbr';
        this.values[1] = 'Season ID';
      }
      else if (this.key == 'addNewGameToRound/'){
        this.values[0] = 'Date';
        this.values[1] = 'Home Team';
        this.values[2] = 'Away Team';
        this.values[3] = 'Arena ID';
        this.values[4] = 'Round ID';
      }
      else if (this.key == 'addResultToGame/'){
        this.values[0] = 'Game ID';
        this.values[1] = 'Home Goals';
        this.values[2] = 'Away Goals';
      }
      else if (this.key == 'addMetaToGame/'){
        this.values[0] = 'Game ID';
        this.values[1] = 'Spectators';
      }
      else if (this.key == 'connectRoundToSeason/'){
        this.values[0] = 'Round ID';
        this.values[0] = 'Season ID';
      }
    }



  }
})
