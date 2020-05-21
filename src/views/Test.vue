<template>
  <div class="test">
    <span>{{ count }}</span>
    <p>{{ plusOne }} {{ appList(5) }}</p>
    <p>{{ appList(5) }}</p>
    <input type="text" v-model="count" />
    <input @click="add" type="button" value="按钮" />
    <son :c="count">gg</son>
    <a href="htt">nihao</a>
    <input v-model="text" />
    {{ text }}
    <button @click="Clickhandle">改变</button>
    <div>{{ state }}</div>
    <button @click="handleClickState">改变state</button>
    <vHeader @handleClick="userClick"></vHeader>
  </div>
</template>

<script>
/*
 * defineAsyncComponent 异步组件
 * */
import {
  ref,
  reactive,
  defineAsyncComponent,
  computed,
  onMounted,
  customRef,
  watchEffect
} from "vue";
// import son from "../components/son";
function useDebouncedRef(value, delay = 200) {
  let timeout;
  return customRef((track, trigger) => {
    console.log(track, trigger, track, trigger);
    return {
      get() {
        //  console.log();
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          //  console.log(trigger());
          trigger();
        }, delay);
      }
    };
  });
}
export default {
  name: "Test",
  setup() {
    const count = ref(0);
    let text = useDebouncedRef("hello");
    let state = reactive({
      count: 0
    });
    function add() {
      count.value += 1;
      console.log("这个是add函数执行了");
    }
    /*no-unused-vars*/
    const plusOne = computed({
      get: () => count.value + 1,
      set: val => {
        count.value = val - 1;
      }
    });
    let a = onMounted(() => {
      console.log(1);
      console.log(document.querySelector(".test"));
    });
    console.log(a);
    // eslint-disable-next-line no-unused-vars
    const appList = computed(fn => fn => fn + count.value);
    function Clickhandle() {
      text.value = 20;
      console.log(text.value);
      console.log("这个是");
    }
    function handleClickState() {
      state.count = 20;
    }
    watchEffect(
      () => {
        console.log(text.value);
      },
      {
        flush: "sync",
        onTrack(e) {
          console.log(e, "e");
          return 3;
        },
        onTrigger(ee) {
          console.log(ee, "ee");
        }
      }
    );
    function userClick() {
      console.log("子组件打印了");
    }

    return {
      state,
      count,
      add,
      plusOne,
      appList,
      text,
      Clickhandle,
      handleClickState,
      userClick
    };
  },
  components: {
    son: defineAsyncComponent(() => import("../components/son.vue")),
    vHeader: defineAsyncComponent(() => import("../components/v-header"))
  },
  mounted() {
    console.log(22);
    console.log(document.querySelector(".test"));
  }
};
</script>

<style scoped></style>
