
<template>
    <div class="item">
      <div class="item-content"
            v-on:click= "handelClick"
            v-bind:class= "{iscompleted: conpleted}"
            >{{content}}</div>
      <div class="item-manage">
        <button class="item-over"
            v-show= "conpleted"
            v-on:click="handelClick">
          标记完成
        </button>
        <button class="item-notover" v-show= "!conpleted" @click="handelClick">标记未完成</button>
        <button class="item-delete" v-on:click= "handelDelete">删除</button>
      </div>
    </div>
</template>

<script>
export default {
  name: "",
  props: ["content", "finished","index"],//"finished",父组件<todo-item> 中：  v-bind:finished= "item.isFinished"
  data() {
    return {
      isShow: true,
      conpleted:false
    };
  },
  methods: {
    //点击切换任务的完成状态,并将任务状态上传到父组件中保存
    handelClick() {
      this.conpleted = !this.conpleted;
      // this.$emit("change", this.index);
    },
    //点击删除事件
    handelDelete() {
      // alert(this.index)
      this.$emit("delete", this.index);
    }
  }
};
</script>

<style scoped>
.item{height: 60px;width: 970px;border-bottom: 1px solid #ccc;}
.item-content{float: left;width:800px ; height: 60px;line-height: 60px;cursor: pointer;text-indent: 2em;}
.item-manage{height: 60px;float: right;widows: 170px;}

.item-manage .item-over, .item-notover,.item-delete{height: 40px;padding: 5px 10px; border: 0px; margin-top: 8px;border-radius: 5px;color: #fff;}
.item-manage .item-over{background-color: seagreen;}
.item-manage .item-notover{background-color: sandybrown;}
.item-manage .item-delete{background-color: orangered;margin-right: 10px;}

.iscompleted{ text-decoration: line-through;}

</style>

