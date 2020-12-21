<template>
    <div class="g-nav">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "GuluNav",
        //另一种获取子组件的方法
        provide(){
            return{
                root: this
            }
        },
        props: {
            selected: {
                type: Array,
                default: () => [],
            },
            multiple: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                items:[],
                namePath: []
            }
        },
        mounted() {
            this.updateChildren()
            this.listenToChildren()
        },
        updated() {
            this.updateChildren()
        },
        methods: {
            addItem(vm){
                this.items.push(vm)
            },
            updateChildren() {
                this.items.forEach(vm => {
                    if (this.selected.indexOf(vm.name) < 0) {
                        vm.selected = false
                    } else {
                        vm.selected = true
                    }
                })
            },
            listenToChildren() {
                this.items.forEach(vm => {
                    vm.$on("add:update", (name) => {
                        let copy = JSON.stringify(this.selected)
                        copy = JSON.parse(copy)
                        if (this.multiple) {
                            if (this.selected.indexOf(name) < 0) {
                                copy.push(name)
                            }
                        } else {
                            copy = [name]
                            console.log(copy, 55)
                        }
                        this.$emit("update:selected", copy)
                    })
                })
            }
        },
        computed: {
            //另er种获取子组件的方法
            // items() {
            //     return this.$children.filter(vm => vm.$options.name === 'GuluNavItem')
            // }
        }
    }
</script>
<style>
    .g-nav {
        display: flex;
        border-bottom: 1px solid gray;
        cursor: default;
        user-select: none;
    }
</style>