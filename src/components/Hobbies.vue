<template>
  <div class="hobies">
    <div class="hobbyHeader">
      <h3>My hobby list</h3>
      <AddHobby @add-hobby="addHobby" />
    </div>
    <div class="hobbyList">
      <HobbyItem
        v-for="hobby in hobbies"
        :key="hobby.id"
        :hobby="hobby"
        @delete-hobby="deleteHobby"
      />
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import HobbyItem from './HobbyItem'
import AddHobby from './AddHobby'
import makeColor from '../helpers/index'
import axios from 'axios'

export default {
  name: 'Hobbies',
  components: { HobbyItem, AddHobby },
  setup() {
    const hobbies = ref([])

    const getAllItem = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/todos?_limit=5'
        )
        console.log(res.data)
        hobbies.value = res.data.map(el => {
          return {
            ...el,
            color: makeColor()
          }
        })
      } catch (error) {
        console.log(error)
      }
    }

    getAllItem()

    const addHobby = async hobby => {
      try {
        const res = await axios.post(
          'https://jsonplaceholder.typicode.com/todos',
          hobby
        )
        hobbies.value.push(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    const deleteHobby = async id => {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        hobbies.value = hobbies.value.filter(hobby => hobby.id !== id)
      } catch (error) {
        console.log(error)
      }
    }

    return {
      hobbies,
      addHobby,
      deleteHobby
    }
  }
}
</script>

<style>
h3 {
  padding: 10px;
  margin: 0;
}
.hobies {
  background-color: rgba(15, 155, 57, 0.2);
  padding: 10px;
  margin-top: 50px;
  color: rgb(9, 134, 76);
}
.hobbyHeader {
  display: flex;
  justify-content: space-between;
}

.hobbyList {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>