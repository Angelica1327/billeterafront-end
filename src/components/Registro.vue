<template>
  <body>
    <div v-if="regist" class="registrar" id="registrar">
      <div class="Titulo">
        <h1>Billeter<span>App</span></h1>
        <h2>Registrar</h2>
        <form name="DatosUsuario" v-on:submit.prevent="post_usuario">
          <table>
            <tr>
              <td>
                <label for="Nombre"> Nombre</label>
                <input
                  type="text"
                  placeholder="Nombre"
                  id="Nomb"
                  v-model="user_in_db.nombre"
                />
              </td>
              <td>
                <label for="Usuario"> Usuario</label>
                <input
                  type="text"
                  placeholder="Usuario"
                  id="user"
                  v-model="user_in_db.username"
                />
              </td>
            </tr>
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
            <button class="boton" type="submit">
              Registrar
            </button>
            <br />
            <br />
          </table>
        </form>
      </div>
    </div>
    <div v-if="datos" id="app">
      <div class="header">
        <h1>BilleterAPP</h1>
      </div>
      <div class="main-component">
        <div class="registrar" id="registrar">
          <div class="Titulo">
            <h1>Billeter<span>App</span></h1>
            <h2>Datos</h2>
            <form v-on:submit.prevent="post_usuario">
              <table>
                <tr>
                  <td>
                    <h3>
                      Nombre: <span>{{ user_in_db.nombre }}</span>
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>
                      Usuario: <span>{{ user_in_db.username }}</span>
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>
                      Contraseña:<span>{{ user_in_db.password }}</span>
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>
                      Email: <span>{{ user_in_db.email }}</span>
                    </h3>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  name: "Registro",
  data: function() {
    return {
      user_in_db: {
        nombre: "",
        username: "",
        password: "",
        email: ""
      },
      datos: false,
      regist: true
    };
  },

  methods: {
    post_usuario() {
      var self = this;
      this.datos = !this.datos;
      this.regist = !this.regist;
      var config = {
        method: "post",
        url: `https://billetera-app.herokuapp.com/user/registro?username=${self.user_in_db.username}`,
        // url: `http://localhost:8000/user/registro?username=${self.user_in_db.username}`,
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
  font-family: sans-serif;
}

.Titulo span {
  color: #1dc4e7;
}

.registrar {
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

.registrar h1 {
  margin: 0%;
  color: white;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
}

.registrar h2 {
  font-weight: 400;
  margin: 0%;
  margin-top: 30px;
  padding: 0 0 20px;
  display: block;
  font-size: 22px;
  text-align: center;
}

.registrar label {
  font-weight: bold;
  margin: 0%;
  padding: 0;
  display: block;
  margin-top: 26px;
}

.registrar input[type="text"],
.registrar input[type="password"],
.registrar input[type="email"],
.registrar input[type="number"] {
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  outline: none;
  height: 40px;
  color: white;
  font-size: 18px;
}

.registrar .boton {
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
  margin-left: 60%;
}

.registrar .boton:hover {
  background-color: #0daccc;
  cursor: pointer;
}

.registrar a {
  text-decoration: none;
  font-size: 14px;
  color: white;
  line-height: 20px;
}

.registrar a:hover {
  color: darkgrey;
  cursor: pointer;
}
</style>
