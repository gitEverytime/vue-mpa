<template>
    <div id="front">
        <transition name="component-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

    export default {
        name: 'front',
        components: {

        },
        data(){
            return{
                transitionName:''
            }
        },
    }
</script>

<style lang="scss" >
    @import "../../assets/scss/mixin";
    body{
        /*min-width: 1280px !important;*/
        /*overflow-x: scroll;*/
    }
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active for below version 2.1.8 */ {
        opacity: 0;
    }
    #front {
        @include set-width-height(100%,100%)
    }
</style>
