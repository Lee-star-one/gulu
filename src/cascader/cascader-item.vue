<template>
  <div class="cascaderItem">
    <div class="left">
      <div
        class="lable"
        v-for="(item, index) in items"
        :key="index"
        @click="onClickLabel(item)"
      >
        {{ item.name }}
        <span v-if="item.children"><g-icon name="you"></g-icon></span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items :items="rightItems" :level="level+1" :selected="selected" @update:selected="onUpdateSelected"></gulu-cascader-items>
    </div>
  </div>
</template>
<script>
import Icon from '../icon/icon'
export default {
  name: "GuluCascaderItems",
  components:{
    'g-icon':Icon
  },
  props: {
    items: {
      type: Array,
    },
    selected:{
      type:Array,
      default:()=>{
        return []
      }
    },
    level:{
      type:Number,
      default:0
    }
  },
  data() {
    return {
      leftSelected: null,
    };
  },
  methods:{
    onClickLabel(item){
      let copy =JSON.parse(JSON.stringify(this.selected))
      copy[this.level]=item
      copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
    },
    onUpdateSelected (newSelected) {
        this.$emit('update:selected', newSelected)
      }
  },
  computed: {
    rightItems() {
      if(this.selected[this.level]){
        let selected = this.items.filter((item) => item.name === this.selected[this.level].name)
        if(selected && selected[0].children&&selected[0].children.length > 0){
          return selected[0].children
        }
      }
      // if (this.leftSelected && this.leftSelected.children) {
      //   return this.leftSelected.children;
      // } else {
      //   return null;
      // }
    },
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/var";
// @border-color:#999;
.cascaderItem {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  // flex-direction: row;
  height: 100px;
  .left {
    height:  100%;
    // border: 1px solid red;
    padding: .3em 0;
  }
  .right {
    height: 100%;
    border-left:1px solid @border-color-light ;
  }
  .lable{
    padding: .3em 1em;
  }
}
</style>