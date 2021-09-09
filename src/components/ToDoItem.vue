<template>
  <div class="todo">
    <div class="todo__content">
      {{todo}}
    </div>
    <i class="todo__delete el-icon-delete"></i>
  </div>
</template>

<script>
    export default {
        name: 'ToDoItem',
        props: {
          todo: String
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
  }

  &__delete {
    width: 30px;
    text-align: right;
    color: #ff4141;
    font-weight: 600;
  }

}
</style>
