<template>
  <div class="SectionBuffer">
    <h2 v-html="props.title" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>()
</script>

<style>
.SectionBuffer {
  text-align: center;
  margin-bottom: 64px;
}

h2 {
  font-size: 32px;
  font-family: Arial;
  font-weight: 600;
}
</style>
