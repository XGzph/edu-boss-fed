<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import request from '@/utils/request'

request({
  method: 'GET',
  url: 'http://edufront.lagounews.com/front/ad/getAdList'
}).then(res => {
  console.log(res)
})

export default {
  name: 'App'
}
</script>

<style lang="scss"></style>
