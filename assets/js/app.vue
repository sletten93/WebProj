//<script>
var app = new Vue({

  el: '#app',

  data: {

    API_URL: 'http://localhost:3005/http://sportstatsweb.jls-sto1.elastx.net/api/listAllSports',
    url: 'HEJHEJ',
    selected: "selected",
    key: "",
    info: null,

    results: {

      name: [],
      id: [],
      homeGoals: []
    },

    rightSideHeadline: null

    // optgroup: ''
  },

  methods: {

    serverCall: function() {
      this.url = "api/" + this.selected;

      this.url += document.getElementById('val1').value;
      console.log('ADDING: ' + this.url);

      axios.get('http://localhost:3005/http://sportstatsweb.jls-sto1.elastx.net/api/listAllSports').then(response => (this.results = response.data));

      // axios.get('http://localhost:3005/http://sportstatsweb.jls-sto1.elastx.net/api/listGameWithResult/3').then(response => (this.results = response.data));



      console.log(this.results);

    },

    optClick: function optClick(event) {
      console.log(this.key);
      // this.selected = event.target.value;
      // console.log(this.selected);
    },

    // getName(pk) {
    //
    //   const temp = `${API_URL}/api/listAllSports/${pk}`;
    //   return axios.get(temp).then(response => response.data);
    // }



  }
})
