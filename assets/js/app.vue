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

      showing: [],
      name: [],
      id: []
    }



    // optgroup: ''
  },

  methods: {

    serverCall: function() {
      this.url = "api/" + this.selected;

      this.url += document.getElementById('val1').value;
      console.log('ADDING: ' + this.url);
      // $http.post('http://sportstatsweb.jls-sto1.elastx.net/');
      // axios.post('http://sportstatsweb.jls-sto1.elastx.net/' + this.url);

      //var redirectWindow = window.open('http://sportstatsweb.jls-sto1.elastx.net/' + this.url);
      //redirectWindow.location;

      //  axios.get('https://cors-anywhere.herokuapp.com/http://sportstatsweb.jls-sto1.elastx.net/api/listAllSports')

      //this.results = response.data[0].name

      axios.get('http://localhost:3005/http://sportstatsweb.jls-sto1.elastx.net/api/listAllSports').then(response => (this.results = response.data));

      //axios.get('http://sportstatsweb.jls-sto1.elastx.net/api/listAllSports').then(res => {}).catch(err => {});

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
