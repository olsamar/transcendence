<template>
  <p class="message">Oops, you are not logged in yet.</p>
  <BackToHome />
  <br />
  <br />
  <LogInButton />
</template>
<script setup lang="ts">
import LogInButton from "@/components/LogInButton.vue";
import BackToHome from "@/components/BackToHome.vue";
</script>
<style scoped>
.message {
  color: white;
  font-size: large;
  font-weight: 500;
}
</style>
