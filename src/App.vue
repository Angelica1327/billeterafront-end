<template>
  <div id="app">
    <div class="header">

      <h1>BilleterAPP</h1>
      <nav>
        <button v-on:click="getBalance" > Inicio </button>
        <button v-on:click="init" > Ingresar </button>
        <button v-on:click="getRegistro"> Registrar </button>
      </nav>
    </div>
    <div class="main-component">
       <router-view></router-view>
    </div>
    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>
  </div>
</template>

<script>
  import vueRouter from 'vue-router'
  export default {
    name: 'App',
    components: {},

    data: function(){
      return {
        is_auth: localStorage.getItem('isAuth') || false
      }
    },

    methods: {

      init: function(){
        if(this.$route.name != "user"){
          let username = localStorage.getItem("current_username")
          this.$router.push({name: "user", params:{ username: username }})
        }
      },

      getRegistro: function(){
        if(this.$route.name != "registro"){
          let username = localStorage.getItem("current_username")
          this.$router.push({name: "registro", params:{ username: username }})
        }
      },

      getBalance: function(){
        if(this.$route.name != "app"){
          let username = localStorage.getItem("current_username")
          this.$router.push({name: "app"})
        }
      },

    },

    beforeCreate: function(){
      console.log("Entre mal")
      localStorage.setItem('current_username', this.username)
      localStorage.setItem('isAuth', true)

      
    },
     Registro() {
       console.log("MAL RE MAL")
      var self = this;
      self.is_auth  = localStorage.getItem('isAuth') || false

      if(self.is_auth == false)
        self.$router.push({name: "user"})

      else{
        let username = localStorage.getItem("current_username")
        self.$router.push({name: "Registro", params:{ username: username }})
      }

    },

    Login(username){
      localStorage.setItem('current_username', username)
      localStorage.setItem('isAuth', true)
      this.Registro()
    },


    
  }
</script>

<style>
  body{
    margin: 0 0 0 0;
  }


  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 60px;

    background-color: #535869 ;
    color:#E5E7E9  ;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header h1{
    width: 20%;
    text-align: center;
  }
  .header nav {
    height: 100%;
    width: 40%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 20px;
  }
  .header nav button{
    color: #E5E7E9;
    background: #0e5968;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
  }
  .header nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }
  .main-component{
    height: 110vh;
    margin: 0%;
    padding: 0%;
    background-image: url('./assets/ORSFZF0.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
    background-size: 30%;

  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 65px;
    background-color: #535869;
    color: #E5E7E9;
  }
  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>