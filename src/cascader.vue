<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible!=popoverVisible">
    
    </div>
    <div class="popover" v-if="popoverVisible">
      <div class="level1">
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
      </div>
    </div>
  </div>
</template>
<script>
import CascaderItem from './cascader-item.vue'
export default {
  name:"GuluCascader",
  components:{CascaderItem},
  props:{
    source:{
      type:Array
    }
  },
  data(){
    return{
      popoverVisible:false,
      level1Selected:null,
      level2Selected:null,
    }
  },
  mounted(){

  },
  methods:{

  },
  computed:{
    level2Items(){
      if(this.level1Selected){
        return this.level1Selected.children
      }else{
        return []
      }
    },
    level3Items(){
      if(this.level2Selected){
        return this.level2Selected.children
      }else{
        return []
      }
    },
  }
}
</script>
<style lang="less" scoped>

</style>
