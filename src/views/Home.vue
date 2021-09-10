<template>
  <div class="home">
    <div class="content">
      <div class="content__title">
        Crystal の 事务清单
      </div>
      <el-popover
        v-model="show"
        placement="bottom"
        trigger="click">
        <el-input
          class="content-input"
          type="textarea"
          autosize
          placeholder="请输入内容"
          v-model="newItem">
        </el-input>
        <div class="content-confirm">
          <el-button type="info" round @click="cancelItem">取消</el-button>
          <el-button type="primary" round @click="addItem">添加</el-button>
        </div>
        <i class="content__add el-icon-circle-plus" slot="reference"></i>
      </el-popover>
      <div class="content__items">
        <ToDoItem v-for="(item, index) in list" :key="index" :todo="item"  @finish="handleFinish" @delete="handleDelete"/>
      </div>
    </div>
  </div>
</template>

<script>
    import ToDoItem from "@/components/ToDoItem";

    export default {
        name: 'Home',
        components: {
            ToDoItem
        },
        data() {
            return {
                show: false,
                count: 0,
                newItem: '',
                list: [
                    {
                        id: 0,
                        content: '发送产品授权',
                        finished: true
                    },
                    {
                        id: 1,
                        content: '邀约客户案例',
                        finished: false
                    }
                ]
            }
        },
        mounted() {
            this.count = this.list.length-1;
            if(!localStorage.getItem('todoList')) {
                localStorage.setItem('todoList', JSON.stringify(this.list));
            } else {
                this.list = JSON.parse(localStorage.getItem('todoList'));
            }
        },
        methods: {
            cancelItem() {
                this.show = !this.show
            },
            addItem() {
                if(this.newItem === '') {
                    return;
                }
                let newToDo = {
                    id: ++this.count,
                    content: this.newItem,
                    finished: false
                }
                console.log(newToDo)
                this.list.push(newToDo);
                localStorage.todoList = JSON.stringify(this.list);
                this.newItem = '';
            },
            handleFinish(id) {
                let currentItem = this.list.find(item => item.id === id);
                currentItem.finished = !currentItem.finished;
            },
            handleDelete(id) {
                let currentIndex = this.list.findIndex(item => item.id === id);
                this.list.splice(currentIndex, 1);
                localStorage.todoList = JSON.stringify(this.list);
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
      width: 50%;
      border-radius: 20px;
      font-size: 14px;
      position: relative;
      height: 88%;

      &__items {
        height: 90%;
        overflow: auto;
      }

      &__title {
        text-align: center;
        font-size: 16px;
        font-family: cursive;
        color: #31a6f5;
        height: 45px;
        line-height: 45px;
      }

      &__add {
        position: absolute;
        height: 45px;
        top: 18px;
        right: 45px;
        line-height: 40px;
        font-size: 25px;
        color: #2f59f7;
      }
    }

    .content__items::-webkit-scrollbar {
      display: none;
    }
  }

  .content-input {
    margin-bottom: 10px;
  }

  .content-confirm {
    display: flex;
    justify-content: space-around;

    button {
      padding: 5px 20px;
    }
  }
</style>
