# useMasonry()
> full documentation on [Desandro Masonry lib](https://masonry.desandro.com)

```useMasonry()``` is a simple Masonry composition based on [Desandro Masonry lib](https://masonry.desandro.com)
## Get started
### install
```bash
npm i 
```

> Recommended to set width fot child items 

### usage
source: https://github.com/7architect/use-masonry/blob/main/demo/Demo.vue
```vue
<template>
    <div ref="images" class="images" style="width: 800px">
        <img
            style="width: 200px; height: 100px"
            :src="`//source.unsplash.com/random/200x100?1`"
        >
        <img
            style="width: 200px; height: 200px"
            :src="`//source.unsplash.com/random/200xw00?2`"
        >
        <img
            style="width: 200px; height: 400px"
            :src="`//source.unsplash.com/random/200x400?3`"
        >
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
import { useMasonry } from "useMasonry";

const images = ref()

onMounted(() => {
  useMasonry(images.value, {
    gutter: 30,
    // full options https://masonry.desandro.com/options.html
  })
})

</script>
```
