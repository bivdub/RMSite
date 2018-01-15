<template>
  <div id="app" class="centered">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: { NavBar },
};
</script>

<style lang="scss">
/*@import './assets/css/style';*/
$titleGradient: -webkit-linear-gradient(#000000 20%, #3C7CD9 40%, #EFC4E0 70%, #7D3588);

@font-face {
  font-family: 'Blanka';
  src:url('assets/Fonts/Blanka-Regular.otf');
}

.centered {
  margin-left: auto;
  margin-right: auto;
}

h1 {
  font-family: Blanka;
  font-size: 200%;
  background: $titleGradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

body, html{
  background-color: #3A2858;
  border: 0px;
  padding: 0px;
  margin: 0px;
  outline: 0;
  height: 100%;
}
</style>
