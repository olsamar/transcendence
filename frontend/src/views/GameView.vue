<template>
  <div class="grid">
    <div class="col-4">
      <Card>
        <template #title>
          <div class="title">
            <h4>Watch</h4>
          </div>
        </template>
        <template #content>
          <div>
            <WatchGame />
          </div>
        </template>
      </Card>
    </div>
    <div class="col-8">
      <GameCustomizationOptionsDialog
        :isDialogVisible="displayCustomizationOptions"
        @update:isDialogVisible="displayCustomizationOptions = $event"
      />
      <Card>
        <template #title>
          <div
            class="title flex align-items-center justify-content-around flex-wrap card-container"
          >
            <h4>Play</h4>

            <Button
              v-tooltip.top="'Customization options'"
              icon="pi pi-cog"
              class="p-button-rounded justify-content-center"
              @click="openCustomizationOptionsDialog"
            />
          </div>
        </template>
        <template #content>
          <div class="grid">
            <div class="col-6">
              <div style="margin-top: 10%">
                <JoinGameQueueAuto />
              </div>
            </div>
            <div class="col-6">
              <GameInvite />
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
<script setup lang="ts">
import JoinGameQueueAuto from "@/components/JoinGameQueueAuto.vue";
import WatchGame from "@/components/WatchGame.vue";
import GameInvite from "@/components/GameInvite.vue";
import Card from "primevue/card";
import Button from "primevue/button";
import { ref } from "vue";
import GameCustomizationOptionsDialog from "../components/GameCustomizationOptionsDialog.vue";

const displayCustomizationOptions = ref<boolean>(false);

const openCustomizationOptionsDialog = () => {
  displayCustomizationOptions.value = true;
};
</script>
<style scoped>
.title {
  border-bottom: thin solid grey;
}
</style>
