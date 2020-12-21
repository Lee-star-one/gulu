<template>
    <div class="g-slides" @mouseover="onMouseEnter" @mouseout="onMouseLeave" @touchstart="onTouchStart"
    @touchend="onTouchEnd" >
        <div class="g-slides-window" ref="window">
            <div class="g-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="g-slides-dots">
            <span @click="onClickPrev">
                <g-icon name="left"></g-icon>
            </span>
            <span v-for="index in childrenLength" :class="{'active':selectedIndex===(index-1)}" @click="select(index-1)">
                {{index}}
            </span>
            <span  @click="onClicknext">
                <g-icon name="you"></g-icon>
            </span>
        </div>
    </div>
</template>
<script>
    import GIcon from "../icon/icon"
export default {
    name: "demo",
    components: {GIcon},
    props:{
        selected:{
            type:String
        },
        autoplay:{
            type:Boolean,
            default:true
        }
    },
    data() {
        return {
            childrenLength:0,
            lastselectIndex:undefined,
            timerId:undefined,
            startTouch: undefined,
        }
    },
    created() {

    },
    mounted() {
        console.log(this.$children,222)
        // console.log(this.$children[0])
        // console.log(this.$el.children)
        // console.log(this.$refs.window.children[0])
        this.updateChildren()
        this.playAutomatically()
        this.childrenLength =this.items.length
    },
    updated() {
        this.updateChildren()
        console.log("lastselectIndex",this.lastselectIndex)
        console.log("selectIndex",this.selectedIndex)
    },
    methods:{
        onClickPrev(){
            this.select((this.selectedIndex -1))
        },
        onClicknext(){
            this.select((this.selectedIndex +1))
        },
        onMouseEnter(){
            this.pause()
        },
        onTouchStart (e) {
        this.pause()
        if (e.touches.length > 1) {return}
        this.startTouch = e.touches[0]
      },
        onTouchEnd (e) {
        let endTouch = e.changedTouches[0]
        let {clientX: x1, clientY: y1} = this.startTouch
        let {clientX: x2, clientY: y2} = endTouch
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
        let deltaY = Math.abs(y2 - y1)
        let rate = distance / deltaY
        if (rate > 2) {
          if (x2 > x1) {
            this.select(this.selectedIndex - 1)
          } else {
            this.select(this.selectedIndex + 1)
          }
        }
        this.$nextTick(() => {
          this.playAutomatically()
        })
      },
        onMouseLeave(){
            this.playAutomatically()
        },
        pause(){
          window.clearTimeout(this.timerId)
          this.timerId=undefined
        },
        select(newIndex){
            this.lastselectIndex=this.selectedIndex
            if (newIndex === -1) {newIndex = this.names.length - 1}
            if (newIndex === this.names.length) { newIndex = 0 }
            this.$emit('update:selected',this.names[newIndex])
        },
        playAutomatically(){
           // setTimeout和setInterval的回调函数，都是经过n毫秒后被添加到队列中，而不是过n毫秒后立即执行。
            if(this.timerId){return}
            let run =()=>{
                let index = this.names.indexOf(this.getSelected())
                let newIndex = index + 1
               this.select(newIndex) // 告诉外界选中 newIndex
                this.timerId=setTimeout(run,3000)
            }
            this.timerId=setTimeout(run,3000)
        },
        getSelected(){
            let first =this.items[0]
            return this.selected || first.name
        },
        updateChildren(){
            let selected=this.getSelected()
            this.items.forEach((vm)=>{
                let reverse=this.selectedIndex>this.lastselectIndex?false:true
                if(this.timerId){
                    if(this.lastselectIndex===this.items.length-1&&this.selectedIndex ===0){
                    reverse =false
                    }
                    if(this.lastselectIndex===0&&this.selectedIndex ===this.items.length-1){
                        reverse = true
                    }
                }
                vm.reverse=reverse
                this.$nextTick(()=>{
                    vm.selected=selected
                })
            })

        }
    },
    computed:{
        selectedIndex(){
            return this.names.indexOf(this.getSelected())
        },
        names () {
        return this.items.map(vm => vm.name)
      },
        items () {
        return this.$children.filter(vm => vm.$options.name === 'GuluSlidesItem')
      }
    }
}
</script>
<style lang="less" scoped>
    .g-slides{
        display: block;
        .g-slides-window{
            overflow: hidden;
        }
        .g-slides-wrapper{
            position: relative;
        }
        .g-slides-dots{
            padding: 4px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            > span{
                width: 1.2em;
                height: 1.2em;
                display: inline-block;
                background: #dddddd;
                border-radius: 50%;
                text-align: center;
                line-height: 1.2em;
                margin: 0 0.2em;
                font-size: 12px;
                &:hover{
                    cursor: pointer;
                }
                &.active{
                    color: white;
                    background: black;
                    &:hover{
                        cursor:default;
                    }
                }
            }
        }

    }
</style>