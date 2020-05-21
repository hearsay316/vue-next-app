<template>
  <div class="app">
    <div>
      <span>第一个cap</span>
      <span>{{ cap }}</span>
    </div>
    <div>
      <span>第二个attending</span>
      <div v-for="item of attending" :key="item.index">{{ item }}</div>
    </div>
    <div>
      <span>第三个spacesLeft</span>
      <div>{{ spacesLeft }}</div>
    </div>
    <div>
      <span>第四个是方法</span>
      <span @click="increaseCapacity">点击改变cap</span>
    </div>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from "vue";
export default {
  name: "toRefs",
  setup() {
    const enev = reactive({
      cap: 4,
      attending: ["tim", "Boj", "joe"],
      spacesLeft: computed(() => {
        return enev.cap + enev.attending.length;
      })
    });
    function increaseCapacity() {
      enev.cap++;
    }
    return { ...toRefs(enev), increaseCapacity };
  }
};
</script>

<style scoped></style>
