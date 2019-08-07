<template>
    <div id="after">
        <transition name="component-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

    export default {
        name: 'after',
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
    #after {
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
