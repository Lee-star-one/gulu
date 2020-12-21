<template>
    <div class="g-nav-item" :class="{selected}" @click="selectItem">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"GuluNavItem",
        inject:['root'],
        props:{
            name:{
                type:String,
                required:true
            }
        },
        data(){
          return{
              selected: false
          }
        },
        created() {
            this.root.addItem(this)
        },
        methods:{
            selectItem(){
                this.root.namePath = []
                this.$parent.updateNamePath && this.$parent.updateNamePath()
                this.$emit("add:update",this.name)
            }
        }


    }
</script>
<style scoped lang="less">
.g-nav-item{
    padding: 10px 20px;
    position: relative;
    &.selected{
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          border-bottom: 2px solid blue;
          width: 100%;
        }
    }
}
</style>