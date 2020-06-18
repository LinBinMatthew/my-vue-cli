<template>
  <div id="app">
    <p class="test">vue-cli-test  vue-cli-test  vue-cli-test  </p>
    <p class="test">{{msg}}</p>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name:'app',
  data(){
    return {
      msg:"hello vue !!"
    }
  },
}
</script>
<style >
  .test{
    color:#020202;
    font-size:18px;
  }
</style>