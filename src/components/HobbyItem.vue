<template>
  <div v-bind:style="{ background: hobby.color }" class="hobbyItem">
    <p>{{ hobby.name }}</p>
    <button @click="deleteHobby">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'HobbyItem',
  props: ['hobby'],
  setup(props, context) {
    const deleteHobby = () => {
      context.emit('delete-hobby', props.hobby.id)
    }

    return {
      deleteHobby
    }
  }
}
</script>

<style>
.hobbyItem {
  padding: 10px;
  margin: 5px;
  width: 30%;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
}
p {
  margin: 0;
}
button {
  padding: 5px 10px;
  color: #fff;
  background-color: red;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
}
</style>