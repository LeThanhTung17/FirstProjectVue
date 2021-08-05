<template>
  <div class="hobies">
    <h3>My hobby list</h3>
    <div>
      <HobbyItem
        v-for="hobby in hobbies"
        v-bind:key="hobby"
        v-bind:hobby="hobby"
      />
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import HobbyItem from './HobbyItem'

export default {
  name: 'Hobbies',
  components: { HobbyItem },
  setup() {
    const hobbies = ref(['Gym', 'Football', 'Reading Books'])

    return {
      hobbies
    }
  }
}
</script>

<style>
.hobies {
  background-color: rgba(15, 155, 57, 0.5);
  width: 500px;
  padding: 10px;
  margin-top: 50px;
  color: #fff;
}
</style>