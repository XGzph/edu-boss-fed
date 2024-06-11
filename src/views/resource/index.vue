<template>
  <div class="resource">
    <resource-list></resource-list>
  </div>
</template>

<script>
import ResourceList from './components/resource-list.vue'
export default {
  name: 'resource-index',
  components: { ResourceList }
}
</script>

<style lang="scss" scoped></style>
