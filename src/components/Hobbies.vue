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
import { v4 as uuid } from 'uuid'
import HobbyItem from './HobbyItem'
import AddHobby from './AddHobby'
import makeColor from '../helpers/index'

export default {
  name: 'Hobbies',
  components: { HobbyItem, AddHobby },
  setup() {
    const hobbies = ref([
      { id: uuid(), name: 'Gym', color: makeColor() },
      { id: uuid(), name: 'Football', color: makeColor() },
      { id: uuid(), name: 'Reading Books', color: makeColor() }
    ])

    const addHobby = hobby => {
      hobbies.value.push(hobby)
    }

    const deleteHobby = id => {
      hobbies.value = hobbies.value.filter(hobby => hobby.id !== id)
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