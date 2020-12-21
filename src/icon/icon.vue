<template>
  <svg class="g-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import '../assets/js/svg'
export default {
  name:'GuluIcon',
  props: { name },
};
</script>

<style lang="less">
.g-icon {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>