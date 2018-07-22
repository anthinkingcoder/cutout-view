<template>
  <div class="cutout">
    <div class="cutout__content" ref="cutout" :style="cutoutStyles">
      <slot>
      </slot>
    </div>
    <div v-show="on" class="cutout__footer">
      <div class="cutout__gradient" :style="gradientStyle">
      </div>
      <slot name="extra"></slot>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    props: {
      show: {type: [Number, String], require: true},
      on: {type: [Boolean], default: true},
      gradientHeight: {type: [Number, String], default: 80}
    },
    mounted() {
      this.updateStyles();
    },
    data() {
      return {
        cutoutStyles: ''
      }
    },
    watch: {
      on() {
        this.updateStyles();
      }
    },
    computed: {
      gradientStyle() {
        return {
          'height': `${this.gradientHeight}px`,
          'top': `-${this.gradientHeight}px`
        }
      }
    },
    methods: {
      updateStyles() {
        let styles = {};
        if (this.on) {
          let elHeight = this.$refs.cutout.scrollHeight;
          let show = this.show;
          if (elHeight > show) {
            styles['overflow-y'] = 'hidden';
            styles['height'] = `${show}px`
          }
        }
        this.cutoutStyles = styles;
      }
    }
  }
</script>

<style scoped>
  .cutout {
    position: relative;
  }

  .cutout__footer {
    position: relative;
  }

  .cutout__gradient {
    position: absolute;
    width: 100%;
    left: 0;
    z-index: 1000;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
  }
</style>
