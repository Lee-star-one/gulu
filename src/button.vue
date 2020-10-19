<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg class="icon" aria-hidden="true" v-if="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: ["icon","iconPosition"],
};
</script>

<style lang="less">
.g-button {
  font-size: var(--button-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon{
    order: 1;
  }
  > .content{
    order: 2;
  }
  &.icon-right{
    > .icon{
      order: 2;
    }
    > .content{
      order: 1;
    }
  }
}
</style>