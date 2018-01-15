<template>
  <b-container>
    <div class="hello">
      <h1>About {{ msg }}</h1>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background: black;
  height: 100%;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #7D3588;
}
</style>
