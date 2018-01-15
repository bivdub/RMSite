<template>
  <div id="header">
    <nav class="nav">
      <b-container>
        <b-row align-h="center">
          <b-col cols="6">
            <router-link to="/"><img id="titleImage" src="../assets/rm_title.png"/></router-link>
          </b-col>
        </b-row>
      </b-container>
    </nav>
    <div class="row">
      <b-navbar toggleable="md" type="dark" id="navBar">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav class="centered">
            <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
            <b-nav-item>Forum</b-nav-item>
            <b-nav-item><router-link to="/news">News</router-link></b-nav-item>
            <b-nav-item><router-link to="/blog">Blog</router-link></b-nav-item>
            <b-nav-item><router-link to="/studio">Studio</router-link></b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <!--<b-navbar-nav class="ml-auto">-->

            <!--<b-nav-item-dropdown text="Lang" right>-->
              <!--<b-dropdown-item href="#">EN</b-dropdown-item>-->
              <!--<b-dropdown-item href="#">ES</b-dropdown-item>-->
              <!--<b-dropdown-item href="#">RU</b-dropdown-item>-->
              <!--<b-dropdown-item href="#">FA</b-dropdown-item>-->
            <!--</b-nav-item-dropdown>-->

            <!--<b-nav-item-dropdown right>-->
              <!--&lt;!&ndash; Using button-content slot &ndash;&gt;-->
              <!--<template slot="button-content">-->
                <!--<em>User</em>-->
              <!--</template>-->
              <!--<b-dropdown-item href="#">Profile</b-dropdown-item>-->
              <!--<b-dropdown-item href="#">Signout</b-dropdown-item>-->
            <!--</b-nav-item-dropdown>-->
          <!--</b-navbar-nav>-->

        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: {
    content: Object,
  },
};
</script>

<style lang="scss">
$titleGradient: -webkit-linear-gradient(#000000 10%, #3C7CD9 40%, #EFC4E0 70%, #7D3588);
$navItemGradient: -webkit-linear-gradient(45deg, #000000 10%, #3C7CD9 40%, #EFC4E0 70%,
  #7D3588 90%, #000000);

@font-face {
  font-family: 'Chintzy';
  src:url('../assets/Fonts/chintzy.ttf');
}

#titleImage {
  max-width: 100%;
  height: auto;
}
#header {
  background-color: #0D0D0D;
  position: static;
  padding: 1em 1em 0em 1em;
}
#navBar {
  width: 100%;
  background: $titleGradient;
  border-top: double .5em;
  border-bottom: solid black.2em;
}
.centered {
  align-content: center;
}
.nav-item {
  padding:0.1em 0.6em;
  border:1px solid #ccc;
  font-size:16px;
  font-family:Chintzy, Arial,Helvetica,sans-serif;
  background:$navItemGradient;
  color: #000000;
  -moz-box-shadow:0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset;
  -webkit-box-shadow:0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset;
  box-shadow:0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset;
  -moz-border-radius:3px;
  -webkit-border-radius:3px;
  border-radius:20px;
  display:inline-block;
  margin:0 0.1em;
  text-shadow:0 1px 0 #fff;
  line-height:1.4;
  white-space:nowrap;
}
.nav-item a {
  color: white;
}
</style>
