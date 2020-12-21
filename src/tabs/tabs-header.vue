<template>
  <div class="tabs-header">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
        <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'GuluTabsHeader',
  inject:['eventBus'],
  mounted(){
    this.eventBus.$on('update:selected',(item,itemVm)=>{
      let {width,height,top,left} =itemVm.$el.getBoundingClientRect()
      console.log(itemVm.$el.getBoundingClientRect())
      this.$refs.line.style.width=`${width}px`
      this.$refs.line.style.left=`${left}px`
    })
  }
}
</script>
<style lang="less" scoped>
  @tab-height: 40px;
  @blue: blue;
  @border-color: #ddd;
  .tabs-header {
    display: flex;
    height: @tab-height;
    justify-content: flex-start;
    border-bottom: 1px solid @border-color;
    position: relative;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid @blue;
      transition: all 350ms;
    }
    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>