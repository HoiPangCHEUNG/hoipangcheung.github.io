<template>
  <div class="ButtonContainer">
    <v-btn
      v-if="!props.icon"
      :color="color"
      :icon="props.icon"
      :size="props.size"
      :variant="props.variant"
      @click="onClick"
    >
      {{ props.name }}
    </v-btn>
    <v-btn v-else :color="color" :icon="props.icon" :variant="props.variant" @click="onClick">
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
import type { BaseButtonEmits, BaseButtonProps } from '../../models/props/BaseButtonProps'

const emits = defineEmits<BaseButtonEmits>()
const props = defineProps<BaseButtonProps>()

const onClick = () => {
  emits('clicked', '')
}
</script>

<style scoped></style>
