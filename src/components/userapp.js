import { ref } from "vue";


export const count = ()=>ref(0);
export function add() {
    count().value += 1;
    console.log("这个是add函数执行了");
}
