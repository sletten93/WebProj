// <script>
var app = new Vue({

  el: '#app',

  data: {

    url: 'HEJHEJ',
    selected: "selected",
    key: ""
    // optgroup: ''
  },

  methods: {

    serverCall: function() {
      this.url = "api/" + this.selected;

      this.url += document.getElementById('val1').value;
      console.log('ADDING: ' + this.url);
      // $http.post('http://sportstatsweb.jls-sto1.elastx.net/');
      // axios.post('http://sportstatsweb.jls-sto1.elastx.net/' + this.url);

      var redirectWindow = window.open('http://sportstatsweb.jls-sto1.elastx.net/' + this.url);
      redirectWindow.location;

    },

    optClick: function optClick(event) {
      console.log(this.key);
      // this.selected = event.target.value;
      // console.log(this.selected);
    }



  }
})
