<template>
  <div class="home">
    <h3>"Welcome to Our Pong App"</h3>
    <div v-if="storeUser.state.isAuthenticated" />
    <div v-else>
      <LogInButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import LogInButton from "@/components/LogInButton.vue";
import storeUser from "@/store";
</script>
