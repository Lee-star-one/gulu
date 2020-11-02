<template>
  <div class="col" :class="colClass" 
  :style="colStyle">
        <slot></slot>
  </div>
</template>
<script>
let validator=(value)=>{
  let keys=Object.keys(value)
        let valid= true
        keys.forEach(key=>{
          if(!['span','offset'].includes(key)){
            valid=false
          }
        })
        return valid
}
export default {
  name:'GuluCol',
  props:{
    span:{
      type:[String,Number]
      },
    offset:{
      type:[String,Number]
      },
    // gutter:{
    //   type:[String,Number]
    // },
    ipad:{
      type:Object,
      validator
    },
    narrowPc:{
      type:Object,
      validator
    },
    pc:{
      type:Object,
      validator
    },
    widePc:{
      type:Object,
      validator
    },
  },
  data(){
    return{
      gutter:0,
      // gutter是在mound之后传入的
      // colStyle:{
      //   paddingLeft:this.gutter / 2 + 'px',
      //   paddingRight:this.gutter / 2 + 'px'
      // }
    }
    
  },
  methods:{
    createClasses(obj,str=''){
        if(!obj){return []}
        let array=[]
        if(obj.span){
          array.push(`col-${str}${obj.span}`)
        }
        if(obj.offset){
          array.push(`offset-${str}${obj.offset}`)
        }
        return array
      }
  },
  computed:{
    colClass(){
      let {span, offset,phone,ipad,narrowPc,widePc,pc}=this
      let createClasses=this.createClasses
      return [
        ...createClasses({span,offset}),
        ...createClasses(ipad,'ipad-'),
        ...createClasses(narrowPc,'narrow-pc-'),
        ...createClasses(pc,'pc-'),
        ...createClasses(widePc,'wide-pc-'),
      ]
    },
    colStyle(){
      return {
        paddingLeft:this.gutter / 2 + 'px',
        paddingRight:this.gutter / 2 + 'px'
      }
    }
  },
  created(){
    console.log("col created")
  },
  mounted(){
    console.log('col mounted')
  }
  
}
</script>
<style lang="less" scoped> 
.cont(@count) when (@count > 0) {
    &.@{name}@{count} {
      width: (@count/24)*100%;
    }
    &.@{offsetName}@{count} {
      margin-left: (@count/24)*100%;
    }
    .cont(@count - 1);
  };
.col{
  height: 100px;
  // width: 50%;
  @name:col-;
  @offsetName:offset-;
  .cont(24);
  @media (min-width: 577px){
    @name:col-ipad-;
    @offsetName:offset-ipad-;
    .cont(24);
  }
  @media (min-width: 769px){
    @name:col-narrow-pc-;
    @offsetName:offset-narrow-pc-;
    .cont(24);
  }
  @media (min-width: 993px){
    @name:col-pc-;
    @offsetName:offset-pc-;
    .cont(24);
  }
  @media (min-width: 1200px){
    @name:col-wide-pc-;
    @offsetName:offset-wide-pc-;
    .cont(24);
  }
}


  
</style>