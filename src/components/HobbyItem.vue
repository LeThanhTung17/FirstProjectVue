<template>
  <p>{{ hobby }}</p>
</template>

<script>
export default {
  name: 'HobbyItem',
  props: ['hobby']
}
</script>

<style>
p {
  padding: 10px;
  margin: 5px 0;
  background-color: rgb(9, 134, 76);
  color: #fff;
}
</style>