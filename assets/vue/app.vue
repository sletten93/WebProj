var app = new Vue({

  el: '#submitButton',

  data: {

    url: 'HEJHEJ',
    temp: '',
  },

  methods: {

    serverCall: function() {

      temp = document.getElementById('additionOptions');
      this.url = "/api/" + temp.options[temp.selectedIndex].value;
      this.url += document.getElementById('val1').value;
      console.log('ADDING: ' + this.url);

      //axios.post('http://sportstatsweb.jls-sto1.elastx.net/' + this.url);

    }
  }
})
