<template>
  <div id="app" class="box">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <h1>{{ title }}</h1>

    <!-- 输入框 -->
    <input v-model= "newItem" v-on:keyup.enter= "addNew"/>

    <!-- 显示列表 -->
    <ul>
      <li v-for= "item in items" :key= "item.label"
          v-bind:class="{finished: item.isFinished}"
          v-on:click= "toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Store from "./store";
// console.log(Store);
export default {
  // name: 'App',
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
      title: "this is a to do list!",
      //模拟数据items
      // items: [
      //   { label: "coding", isFinished: false },
      //   { label: "walking", isFinished: true },
      //   { label: "eatting", isFinished: true }
      // ],
      items: Store.fetch(),
      newItem: ""
    };
  },
  //用于检测数据的变化并存储到  localStorage 当中
  watch: {
    items: {
      handler: function(items) {
        // console.log(val, oldVal);
        //往  localStorage 中存items数据
        Store.save(items);
      },
      deep: true
    }
  },
  methods: {
    //切换任务是否完成的属性
    toggleFinish(item) {
      // console.log(item);
      item.isFinished = !item.isFinished;
    },
    //增加一条新的item
    addNew() {
      // console.log(this.newItem);
      this.items.push({ label: this.newItem, isFinished: false });
      this.newItem = "";
    }
  }
};
</script>

<style>
*{margin: 0; padding: 0;}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 20px; */
}
.box{width: 350px; min-height: 300px; border: 1px solid #ccc; margin: 30px auto;padding: 20px 40px;}
.box img{width: 90px; height: 100px;}
input{width: 300px; height: 30px; line-height: 30px; margin-top: 20px; text-indent: 1em;}
ul{padding-top: 20px;}
ul li{width: 300px;height: 30px;line-height: 30px; cursor: pointer;display: block;
border: 1px solid #ddd; margin: 5px auto; background-color: #eee}
.finished{ text-decoration: line-through;}

</style>
