var app = new Vue({




  el: '#submitButton',

  data: {

    url: 'HEJHEJ',
    temp: '',
  },

  methods: {

    serverCall: function() {

      temp = document.getElementById('additionOptions');
      this.url = temp.options[temp.selectedIndex].value;
      console.log(this.url);
      this.url += document.getElementById('val1').value;

      //axios.post(this.url);

    }
  }
})
