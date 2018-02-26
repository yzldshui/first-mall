<template>
  <div>
    <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':mdShow}">
      <div class="md-modal-inner">
        <div class="md-top">
          <div class="md-title"></div>
          <button class="md-close" @click="closePop">Close</button>
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <slot name="message"></slot>
          </div>
          <div class="btn-wrap">
            <slot name="btnGroup"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-if="mdShow" @click="closePop"></div>
  </div>
</template>

<script>
export default {
  props: ["mdShow"],
  data() {
    return {};
  },
  components: {},
  methods: {
    closePop() {
      console.log("close pop");
      // 父组件中触发事件，不能直接触发方法v-on:closeModal="closeModal"
      this.$emit("closeModal");
    }
  }
};
</script>
