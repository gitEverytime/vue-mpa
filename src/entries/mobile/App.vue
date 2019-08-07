<template>
    <div id="mobile">
        <transition name="component-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'mobile',
        components: {

        },
        data(){
            return{
                transitionName:''
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/mixin";
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active for below version 2.1.8 */ {
        opacity: 0;
    }
    #mobile {
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        overflow: hidden;
    }
</style>
