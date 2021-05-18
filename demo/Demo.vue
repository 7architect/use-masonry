<template>
  <div class="container">
    <div ref="images" class="images" style="width: 800px">
      <template v-for="i in 2">
        <img
            style="width: 200px; height: 100px"
            :src="`//source.unsplash.com/random/200x100?${i}1`"
        >
        <img
            style="width: 200px; height: 200px"
            :src="`//source.unsplash.com/random/200xw00?${i}2`"
        >
        <img
            style="width: 200px; height: 400px"
            :src="`//source.unsplash.com/random/200x400?${i}3`"
        >
      </template>
    </div>
  </div>
</template>

<style>
img {
  background-color: aliceblue;
  margin-bottom: 30px;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { useMasonry } from "../src";

const images = ref()

onMounted(() => {
  useMasonry(images.value, {
    gutter: 30,
  })
})

</script>
