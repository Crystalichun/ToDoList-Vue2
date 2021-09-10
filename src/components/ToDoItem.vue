<template>
  <div class="todo">
    <i class="todo__delete el-icon-delete" @click="deleteItem"></i>
    <div class="todo__content" :class="{'todo__content-finished' : todo.finished}">
      {{todo.content}}
    </div>
    <i v-if="todo.finished" class="todo__finish el-icon-success" @click="finishItem"></i>
    <i v-else class="todo__finish el-icon-circle-check" @click="finishItem"></i>
  </div>
</template>

<script>
    export default {
        name: 'ToDoItem',
        props: ['todo'],
        methods: {
            finishItem() {
                this.$emit('finish', this.todo.id)
            },
            deleteItem() {
                this.$emit('delete', this.todo.id)
            }
        }
    }
</script>

<style scoped lang="scss">
.todo {
  display: flex;
  align-items: center;
  &__content {
    flex: 1;
    background: #eee;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    &-finished {
      text-decoration: line-through;
    }
  }

  &__delete {
    color: #f15e5e;
    font-size: 22px;
    margin-right: 8px;
  }

  &__finish {
    text-align: right;
    color: #5ece26;
    font-size: 22px;
    margin-left: 8px;
  }

}
</style>
