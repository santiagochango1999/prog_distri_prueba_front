<template>
  <div>
    <router-link to="/cliente">cliente</router-link>
    <router-link to="/producto">producto</router-link>
    <router-link to="/orden">orden</router-link>
  </div>
</template>

<script>
export default {

}   
</script>

<style scoped>
div a {
  color: #2c3e50;
  margin: 0px 10px;
  font-weight: bold;
  border: solid 1px;
  padding: 5px;
  border-radius: 5px;
  background: turquoise;
}
.router-link-active {
    background: violet;
}
</style>