<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted: function () {
    console.log(process.env)
  }
}
</script>

<style>
</style>
