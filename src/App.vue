<template>
  <router-view />
</template>

<script>
import { onMounted } from 'vue'

export default {
  setup () {
    onMounted(() => {
      console.log('挂载后')
      console.log(process.env.NODE_ENV)
    })
  }
}
</script>

<style lang="scss"></style>
