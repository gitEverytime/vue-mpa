<template>
  <div id="index">
  </div>
</template>

<script>

    export default {
        name: 'index',
        components: {

        },
        data(){
            return{
                transitionName:''
            }
        },
        created(){
//            window.location.href = 'http://120.78.4.101:5058/one_diagram/ ';
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/mixin";
  #index {
    @include set-width-height(100%,100%)
  }
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
  }
</style>
