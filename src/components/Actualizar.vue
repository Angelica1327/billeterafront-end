<template>
  <body>
    <div class="perfil" id="perfil">
      <div class="Titulo">
        <h1>Billeter<span>App</span></h1>
        <h2>Actualización de datos</h2>
        <form name="update" v-on:submit.prevent="Actualizar">
          <table>
            <tr>
              <td>
                <label for="Contrasena">Contraseña </label>
                <input
                  type="password"
                  placeholder="Contraseña"
                  id="contra"
                  v-model="user_in_db.password"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="email">Email</label>
                <input
                  type="email"
                  placeholder="email"
                  id="correo"
                  v-model="user_in_db.email"
                />
              </td>
            </tr>
            <button  class="boton" type="submit">
              Guardar
            </button>
            <br />
            <br />
          </table>
        </form>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  name: "Actualizar",
  data: function() {
    return {
      user_in_db: {
        password: "",
        email: ""
      },
    }
  },

  methods: {
    Actualizar() {
      console.log(this.$route.params.user)
      var self = this;
      var config = {
        method: "put",
        url: `https://billetera-app.herokuapp.com/user/registro?username=${this.$route.params.user.username}`,
        // url: `http://localhost:8000/user/put?username=${this.$route.params.user.username}`,
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(self.user_in_db)
      };
      axios(config).then(result => {
        console.log(result.data);
      });
    }
  }
};
</script>

<style>
body {
  margin: 0 0 0 0;
}

span {
  color: #1dc4e7;
}

.main-component {
  height: 120vh;
  margin: 0%;
  padding: 0%;
  background-image: url("/assets/ORSFZF0.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  background-size: 30%;
}

.perfil {
  width: 500px;
  height: 520px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  margin-top: 10%;
  margin-left: 5%;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
  padding-left: 30px;
}

.perfil h1 {
  margin: 0%;
  color: white;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
}

.perfil h2 {
  font-weight: 400;
  margin: 0%;
  margin-top: 30px;
  padding: 0 0 20px;
  display: block;
  font-size: 22px;
  text-align: center;
}

.perfil label {
  font-weight: bold;
  margin: 0%;
  padding: 0;
  display: block;
  margin-top: 26px;
}

.perfil input[type="text"],
.perfil input[type="password"],
.perfil input[type="email"],
.perfil input[type="number"] {
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  outline: none;
  height: 40px;
  color: white;
  font-size: 18px;
}
</style>
