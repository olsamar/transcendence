<template>
  <div>
    <WebsiteTitle />
    <router-view />
  </div>
</template>
<script lang="ts">
import WebsiteTitle from "./components/WebsiteTitle.vue";
export default { components: { WebsiteTitle } };
</script>

<script setup lang="ts">
import { provide } from "vue";
import SocketioService from "./services/socketio.service";

const socket = SocketioService.setupSocketConnection(); //create a socket instance for connecting client

provide("socketioInstance", socket); // dependency provider of socketio instance for all its descendants
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8cb8e4;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--surface-a);
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
}

@keyframes p-progress-spinner-color {
  100%,
  0% {
    stroke: #fffafa;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #6722f3;
  }
  80%,
  90% {
    stroke: #d5e7fb;
  }
}
</style>
