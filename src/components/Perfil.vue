<template>
  
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {};
  }
};
</script>

<style>
body {
  margin: 0 0 0 0;
}

.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 60px;

  background-color: #535869;
  color: #e5e7e9;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h1 {
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
.header nav button {
  color: #e5e7e9;
  background: #0e5968;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 20px;
}
.header nav button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}
.main-component {
  height: 77vh;
  margin: 0%;
  padding: 0%;
  background-image: url(./assets/ORSFZF0.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  background-size: 30%;
}
.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 65px;
  background-color: #535869;
  color: #e5e7e9;
}
.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
