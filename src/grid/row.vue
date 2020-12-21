<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'GuluRow',
  props:{
    gutter:{
      type:[Number,String]
      },
    align:{
      type:String,
      validator(value){
        return ['left','right','center'].includes(value)
      }
    }
  },
  computed:{
    rowStyle(){
      let {gutter}=this
      return {marginLeft: -gutter / 2 + 'px',marginRight: -gutter / 2 + 'px'}
    },
    rowClass(){
      let {align}=this
      return [align && 'align-'+align]
    }
  },
  created(){
    // console.log('row created')
  },
  mounted(){
    // console.log('row mounted')
    // console.log(this.$children)
    this.$children.forEach((vm)=>{
      vm.gutter=this.gutter
    })
  }
}
// var div =document.createElement('div') //created
// var childDiv=document.createElement('div') //child created
// div.appendChild(childDiv) //child mounted
// document.body.appendChild(div) //mounted
</script>
<style lang="less" scoped>
.row{
  display: flex;
  flex-wrap: wrap-reverse;
  &.align-left{
    justify-content: left;
  }
  &.align-right{
    justify-content: right;
  }
  &.align-center{
    justify-content: center;
  }
}
</style>