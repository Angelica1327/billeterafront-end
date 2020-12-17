<template>
  <div class="perfil" id="perfil">
    <div class="Titulo">
      <h1>Billeter<span>App</span></h1>
      <h2>Datos</h2>
    </div>
    <h3>
      Nombre: <span>{{ user.nombre }}</span>
    </h3>

    <h3>
      Usuario: <span> {{ user.username }} </span>
    </h3>

    <h3>
      Contraseña: <span> {{ user.password }} </span>
    </h3>

    <h3>
      Email: <span> {{ user.email }} </span>
    </h3>
  </div>
  <!-- <div>
    <input type="text" v-model="user.password" />
  </div> -->
</template>

<script>
export default {
  name: "Perfil",
  data: function() {
    return {
      user: this.$route.params.user
    };
  },

  methods: {},
  mounted() {
    console.log(this.$route.params);
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
