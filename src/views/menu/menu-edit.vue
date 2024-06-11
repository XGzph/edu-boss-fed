<template>
  <div class="menu-edit">
    <create-edit :is-edit="true"></create-edit>
  </div>
</template>

<script>
import CreateEdit from './components/create-edit.vue'
export default {
  name: 'menu-edit',
  components: { CreateEdit }
}
</script>

<style scoped></style>
