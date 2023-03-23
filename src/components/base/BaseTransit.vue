<template>
  <Transition :name="props.name">
    <slot></slot>
  </Transition>
</template>

<script lang="ts" setup>
import { BaseTransitProps } from '@/models/props/BaseTransitProps'

const props = defineProps<BaseTransitProps>()
</script>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.horizontalSlide-enter-active {
  transition: all 0.5s ease-out;
}

.horizontalSlide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.horizontalSlide-enter-from,
.horizontalSlide-leave-to {
  transform: translateX(-5px);
  opacity: 0;
}

.verticalSlide-enter-active {
  transition: all 0.5s ease-out;
}

.verticalSlide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.verticalSlide-enter-from,
.verticalSlide-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}
</style>
