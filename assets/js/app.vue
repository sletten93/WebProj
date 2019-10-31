// <script>
var app = new Vue({

  el: '#app',

  data: {

    url: '',
    key: '',
    serverResponse: '',
    showDataType: 'addData',
    values: [],
    inputs: [],
    getDataInputLabel: '',
    results: {
      name: [],
      id: [],
      homeGoals: [],
      awayGoals: [],
      roundId: [],
      homeTeam: null,
      awayTeam: null,
      gameArena: [],
      startYear: [],
      endYear: [],
      maxRounds: [],
      dateOfGame: []
    },
  },

  methods: {

    serverCall: function() {
      // Om typen är Add Data
      if (this.showDataType === 'addData'){

        //Se om alla värden saknas

        if(this.inputs.length === 0) {
          alert('You have not entered a single value!');
          this.inputs = [];
          return;
        }

        else {

        //Se om något värde saknas
        for(var o = 0; o < this.values.length; o++) {
          if (this.inputs[o] == null) {
              alert('You need to enter ' + this.values.length + ' different values!');
              this.inputs = [];
              return;
            }
          }
        }
        this.url = this.key;
        for (var i = 0; i < this.inputs.length; i++){
          this.url += this.inputs[i]+ '/';
        }
        this.url = this.url.slice(0, -1);
        console.log('ADDING: ' + this.url);

        axios.get('http://localhost:3005/http://sportstatsweb.jls-sto1.elastx.net/api/' + this.url)
        .then( function(response) {
            this.serverResponse = response.data;

            console.log('Server response ' + this.serverResponse);

            if(this.serverResponse == false) {

              alert('You were not able to add the data.');
            }
            else {

              alert('Data added successfully');
            }
        });

      }
      // Annars om showDataType är Get Data
      else if (this.showDataType === 'getData'){
        this.url = this.key;
        if (this.inputs.length > 0){
          if (this.inputs[0] == null){
            alert('You have not entered a value!');
            this.inputs = [];
            return;
          }
          this.url += this.inputs[0];
        }
        axios.get('http://localhost:3005/http://sportstatsweb.jls-sto1.elastx.net/api/' + this.url)
        .then(response => (this.results = response.data));


      }
    },

    optionChangeEvent: function() {

      if (this.showDataType === 'addData'){
        this.setAddDataParameters();
      }
      else if (this.showDataType === 'getData'){
        this.setGetDataParameters();
      }
    },

    setGetDataParameters: function(){
      this.getDataInputLabelLabel = '';
      if (this.key == 'listAllLeaguesBySport/'){
        this.getDataInputLabel = 'Sport ID';
      }
      else if (this.key == 'listAllSeasonsForLeague/' || this.key == 'listAllGamesForSeason/'){
        this.getDataInputLabel = 'League ID';
      }
      else if (this.key == 'listAllGamesByDate/'){
        this.getDataInputLabel = 'Date';
      }
      else if (this.key == 'listAllGamesForTeam/'
      || this.key == 'listAllGamesLostByTeam/'
      || this.key == 'listAllGamesWonByTeam/'
      || this.key == 'listAllAwayGamesForTeam/'
      || this.key == 'listAllHomeGamesForTeam/'){
        this.getDataInputLabel = 'Team ID';
      }
      else if (this.key == 'listGamesWithResultByRound/'){
        this.getDataInputLabel = 'Round ID';
      }
    },

    setAddDataParameters: function() {
      this.values = [];
      this.inputs = [];
      this.serverResponse = '';

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
        this.values[1] = 'Season ID';
      }
    }







  }
})
