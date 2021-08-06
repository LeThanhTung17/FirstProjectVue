<template>
  <form @submit.prevent="addHobby">
    <input
      type="text"
      placeholder="More hobby...?"
      v-model="item"
      class="input"
    />
    <input type="submit" value="Add" class="button" />
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import makeColor from '../helpers/index'

export default {
  name: 'AddHobby',
  setup(props, context) {
    const item = ref('')

    const addHobby = () => {
      // event.preventDefault()

      const newHobby = {
        title: item.value,
        color: makeColor()
      }

      context.emit('add-hobby', newHobby)

      item.value = ''
    }

    return {
      item,
      addHobby
    }
  }
}
</script>

<style>
form {
  padding: 10px;
}
.input {
  border: 1px solid rgb(9, 134, 76);
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 5px;
}
.button {
  background-color: rgb(9, 134, 76);
  padding: 5px 15px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>