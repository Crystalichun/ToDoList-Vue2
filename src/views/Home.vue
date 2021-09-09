<template>
  <div class="home">
    <div class="content">
      <div class="content__title">
        Crystal 事务清单
        <i class="content__add el-icon-circle-plus" @click="addItem"></i>
      </div>

      <div>
          <ToDoItem v-for="(item, index) in list" :key="index" :todo="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem";
export default {
  name: 'Home',
  components: {ToDoItem},
  data () {
    return {
      list: ['检票检票检票检票检票检票检票检票检票检票检票检票检票检票检票检票','买东西']
    }
  },
  methods: {
    addItem() {
      this.list.push('something')
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  background: beige;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .content {
    margin: 20px;
    padding: 15px;
    background: #d8e5f3;
    width: 30%;
    border-radius: 20px;
    &__title {
      text-align: center;
      font-size: 16px;
      font-family: fantasy;
      color: #31a6f5;
      height: 45px;
      line-height: 45px;
    }
    &__add {
      float: right;
      height: 45px;
      line-height: 40px;
      font-size: 25px;
      color: #2f59f7;
    }
  }
}
</style>
