<template>
  <div class="cascader" ref="cascader" v-click-outside="close">
    {{this.selected}}
    <div class="trigger" @click="toggle">
      {{result}}
    </div>
    <div class="popover" v-if="popoverVisible">
      <!-- <div class="level1">
        <div class="lebel" v-for="(item1,index) in source" :key="index" @click="level1Selected =item1">
          {{item1.name}}
        </div>
      </div>
      <div class="level2">
        <div class="lebel" v-for="(item2,index) in level2Items" @click="level2Selected =item2" :key="index">
          {{item2.name}}
        </div>
      </div>
      <div class="level3">
        <div class="lebel" v-for="(item3,index) in level3Items" :key="index">
          {{item3.name}}
        </div>
      </div> -->
      <CascaderItem :items="source" @update:selected="onUpdateSelected" :selected="selected"></CascaderItem>
    </div>
  </div>
</template>
<script>
import CascaderItem from './cascader-item.vue'
import ClickOutside from '../assets/js/click-outside'
export default {
  name:"GuluCascader",
  components:{CascaderItem},
  directives:{ClickOutside},
  props:{
    source:{
      type:Array
    },
    selected:{
      type:Array,
      default:()=>{
        return []
      }
    }
  },
  data(){
    return{
      popoverVisible:false,
      // level1Selected:null,
      // level2Selected:null,
    }
  },
  mounted(){

  },
  methods:{
    onUpdateSelected(newSelected){
      this.$emit('update:selected', newSelected)
    },
    close(){
      this.popoverVisible=false
      // document.removeEventListener ('click',this.onClickDocument)
    },
    onClickDocument(e){
      // let {cascader}=this.$refs
      // let {target}=e
      // if(cascader===target || cascader.contains(target)){
      //   return
      // }
      this.close()
    },
    open(){
      this.popoverVisible=true
      // this.$nextTick(()=>{
      //   document.addEventListener('click',this.onClickDocument)
      // })
    },
    toggle(){
      if(this.popoverVisible==true){
        this.close()
      }else{
        this.open()
      }
    }
  },
  computed:{
    result(){
     console.log(this.selected.map((item) => item.name))
     return this.selected.map((item) => item.name).join('/') 
    }
    // level2Items(){
    //   if(this.level1Selected){
    //     return this.level1Selected.children
    //   }else{
    //     return []
    //   }
    // },
    // level3Items(){
    //   if(this.level2Selected){
    //     return this.level2Selected.children
    //   }else{
    //     return []
    //   }
    // },
  }
}
</script>
<style lang="less" scoped>
.cascader{
  position: relative;
  .trigger{
    width: 120px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
  }
  .popover{
    position: absolute;
    top: 100%;
    left:0 ;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);;
    // border: 1px solid blue;
    // display: flex;
  }
}
</style>
