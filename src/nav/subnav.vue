<template>
    <div class="g-sub-nav" :class="{active}" v-click-outside="close">
        <span  class="g-sub-nav-label"  @click="onclick">
            <slot name="title"></slot>
             <span class="g-sub-nav-icon" :class="{open}">
                <g-icon name="you"></g-icon>
              </span>
        </span>
        <div class="g-sub-nav-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import ClickOutside from '../assets/js/click-outside'
    import GIcon from '../icon/icon'
    export default {
        components: {GIcon},
        name:"GuluSubNav",
        directives: {ClickOutside},
        inject: ['root'],
        props: {
          name: {
            type: String,
            required: true
          }
        },
        data(){
            return{
                open:false
            }

        },
        methods:{
            onclick(){
                this.open=!this.open
            },
            close () {
                this.open = false
              },
            updateNamePath () {
                this.root.namePath.unshift(this.name)
                if (this.$parent.updateNamePath) {
                  this.$parent.updateNamePath()
                } else {
                  // this.root.namePath = []
                }
              }
        },
        computed: {
          active () {
            return this.root.namePath.indexOf(this.name) >= 0 ? true : false
          }
    },
    }
</script>
<style scoped lang="less">
.g-sub-nav{
    position: relative;
    &.active {
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            border-bottom: 2px solid blue;
            width: 100%;
        }
    }
    .g-sub-nav-label { padding: 10px 20px; display: block; }
    .g-sub-nav-icon { display: none; }
    .g-sub-nav-popover{
        transition: height 250ms;
      background: white;
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 4px;
      white-space: nowrap;
      box-shadow: 0 0 3px #cccccc;
      border-radius: 5px;
      font-size: 14px;
      color: black;
      min-width: 8em;
    }
}
.g-sub-nav .g-sub-nav{
     &.active {
      &::after {
        display: none;
      }
    }
    .g-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
    }
    .g-sub-nav-label {
      display: flex;
      align-items: center;
      justify-content: space-between;

    .g-sub-nav-icon {
      transition: transform 250ms;
      display: inline-flex; margin-left: 1em;
      &.open {
        transform: rotate(180deg);
      }
    }
          }
}
</style>