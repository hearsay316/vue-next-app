<template>
  <div class="v-header">
    这个是一个子组件
    <div @click="handleClick">这个是一个子组件点击事件</div>
  </div>
</template>

<script>
export default {
  name: "v-header",
  setup(props, content) {
    function handleClick() {
      console.log("子组件", props, content);
      content.emit("handleClick");
    }
    return { handleClick };
  }
};
</script>

<style scoped></style>
