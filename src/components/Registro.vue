<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>BilleterApp</title>
    </head>
    <body>
      <div v-if="registro" class="registrar" id="registrar">
        <div class="Titulo">
          <h1>Billeter<span>App</span></h1>
          <h2>Registrar</h2>
          <form action="">
            <table>
              <tr>
                <td>
                  <label for="Nombre"> Nombre</label>
                  <input
                    type="text"
                    placeholder="Nombre"
                    id="Nomb"
                    v-model="nombres"
                  />
                </td>
                <td>
                  <label for="Usuario"> Usuario</label>
                  <input
                    type="text"
                    placeholder="Usuario"
                    id="user"
                    v-model="usuarios"
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
                    v-model="contraseñas"
                  />
                </td>
                <td>
                  <label for="email">Email</label>
                  <input
                    type="email"
                    placeholder="email"
                    id="correo"
                    v-model="correos"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="edad"> Edad</label>
                  <input
                    type="number"
                    placeholder="edad"
                    id="edad"
                    v-model="edades"
                  />
                </td>
                <td>
                  <label for="cedula">Cédula</label>
                  <input
                    type="number"
                    placeholder="cedula"
                    id="cc"
                    v-model="cedulas"
                  />
                </td>
              </tr>
              <button @click="mostrarDatos" class="boton" type="button">
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
              <form action="">
                <table>
                  <tr>
                    <td>
                      <h3> Nombre: <span>{{ nombres }}</span></h3>
                    </td>
                    </tr>
                    <tr>
                    <td>
                      <h3> Usuario: <span>{{ usuarios }}</span></h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3> Contraseña:<span>{{ contraseñas }}</span></h3>
                    </td>
                    </tr>
                    <tr>
                    <td>
                      <h3> Email: <span>{{ correos }}</span>  </h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3> Edad: <span>{{ edades }}</span>  </h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                     <h3> Cédula: <span>{{ cedulas }}</span>  </h3>
                    </td>
                  </tr>
                </table>
              </form>
            </div>
          </div>
        </div>
        <div class="footer">
          <h2>Misión TIC 2022</h2>
        </div>
      </div>
    </body>
  </html>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      nombres: "",
      usuarios: "",
      contraseñas: "",
      correos: "",
      edades: "",
      cedulas: "",
      datos: false,
      registro: true
    };
  },

  methods: {
    mostrarDatos() {
      this.datos = !this.datos;
      this.registro = !this.registro;
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
