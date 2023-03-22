<template>
  <div class="text-center ma-2">
    <v-snackbar class="Snackbar" v-model="shdShowSnackbar" color="#9E7676" width="50px">
      {{ msg }}
    </v-snackbar>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const shdShowSnackbar = ref(false)
const snackbarMessage = computed(() => {
  return store.getters.getSnackbarMessage
})
const msg = ref(snackbarMessage.value)

watch(snackbarMessage, () => {
  msg.value = snackbarMessage.value
  shdShowSnackbar.value = msg.value !== '' ? true : false
})
</script>

<style scoped>
.Snackbar {
  bottom: 40px;
  text-align: center;
}
</style>
