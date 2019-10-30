//<script>
var app = new Vue({

  el: '#app',

  data: {


    url: 'HEJHEJ',
    selected: "selected",
    key: "",
    info: null

    names: []

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



      axios.get('http://localhost:3005/http://sportstatsweb.jls-sto1.elastx.net/api/listAllSports').then(response => (this.url = response.data, this.names = response.data));

      //axios.get('http://sportstatsweb.jls-sto1.elastx.net/api/listAllSports').then(res => {}).catch(err => {});

    },

    optClick: function optClick(event) {
      console.log(this.key);
      // this.selected = event.target.value;
      // console.log(this.selected);
    }



  }
})
