<template>
    <body>
      <div class="login" id="login">
        <div class="Titulo">
          <h1>Billeter<span>App</span></h1>
          <h2>Ingresar</h2>
          <form v-on:submit.prevent="Autenticar">
            <label for="Usuario">Usuario</label>
            <input
              type="text"
              placeholder="Usuario"
              v-model="user_in_db.username"
            />
            <label for="Contrasena"> Contraseña </label>
            <input
              type="password"
              placeholder="Contraseña"
              v-model="user_in_db.contraseña"
            />
            <button class="boton" type="submit">Ingresar</button> <br />
            <br />
            <a href="#">¿Ha olvidado su contraseña?</a> <br />
            <a v-on:click="mostrarRegistro()">Registrarse</a>
            <h2>{{salida}}</h2>
          </form>
        </div>
      </div>
      </body>
</template>

<script>
import axios from "axios";
export default {
  name: "User",
  data: function() {
    return {
      user_in_db: {
        username: "",
        contraseña: ""
      },
      salida: "Esperando autenticación"
    };
  },
  methods: {
    Autenticar() {
      var self = this;
           var config = {
        method: "GET",
        url: `https://billetera-app.herokuapp.com/user/${self.user_in_db.username}`,
        // url: `http://localhost:8000/user/${self.user_in_db.username}`,
        cors: "no-cors"
      };

      axios(config)
        .then(result => {
          console.log(result);
          if (result.data.password == self.user_in_db.contraseña)
              this.$router.push({name: "perfil", params:{user: result.data}})
               alert("Autenticación exitosa");
          self.$emit("login", self.user_in_db.username);
        })

        .catch(error => {
          console.log(error)
          if (error.response == "404")
            alert("ERROR 404: Usuario no encontrado.");

          if (error.response == "403")
            alert("ERROR 403: Contraseña Erronea.");
        });
    }
  }
};
</script>

<style>
body {
  font-family: sans-serif;
}

.Titulo span {
  color: #1dc4e7;
}

.login {
  width: 320px;
  height: 500px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  margin-top: 10%;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 60px 40px;
}

.login h1 {
  margin: 0%;
  color: white;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
}

.login h2 {
  font-weight: 400;
  margin: 0%;
  margin-top: 30px;
  padding: 0 0 20px;
  display: block;
  font-size: 22px;
  text-align: center;
}

.login label {
  font-weight: bold;
  margin: 0%;
  padding: 0;
  display: block;
  margin-top: 26px;
}

.login input[type="text"],
.login input[type="password"] {
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  outline: none;
  height: 40px;
  color: white;
  font-size: 18px;
}

.login .boton {
  border: 1px solid white;
  outline: none;
  height: 40px;
  color: white;
  background-color: #2190a7;
  font-size: 18px;
  border-radius: 10px;
  width: 170px;
  line-height: 10px;
  margin-top: 40px;
  align-items: center;
  margin-left: 15%;
}

.login .boton:hover {
  background-color: #0daccc;
  cursor: pointer;
}

.login a {
  text-decoration: none;
  font-size: 14px;
  color: white;
  line-height: 20px;
}

.login a:hover {
  color: darkgrey;
  cursor: pointer;
}
</style>
