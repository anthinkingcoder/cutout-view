<template>
  <div class="cutout">
    <div class="cutout__content" ref="cutout" :style="cutoutStyles">
      <slot>
      </slot>
    </div>
    <div v-show="on" class="cutout__footer">
      <div class="cutout__layer" :style="layerStyle">
        <slot name="layer">
        </slot>
      </div>
      <slot name="extra"></slot>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    props: {
      showHeight: {type: [Number, String], require: true},
      on: {type: [Boolean], default: true},
      layerHeight: {type: [Number, String], default: 80}
    },

    mounted() {
      this.updateStyles();
    },

    data() {
      return {
        cutoutStyles: '',
      }
    },

    watch: {
      on() {
        this.updateStyles();
      },
      show() {
        this.updateStyles();
      }
    },

    computed: {
      layerStyle() {
        return {
          'height': `${this.layerHeight}px`,
          'top': `-${this.layerHeight}px`
        }
      },
      isOn() {
        let elHeight = this.$refs.cutout.scrollHeight,
          showHeight = this.showHeight,
          layerHeight = this.layerHeight;
        return this.on && elHeight > showHeight && showHeight > layerHeight
      }
    },
    methods: {
      updateStyles() {
        let styles = {}, showHeight = this.showHeight;
        if (this.isOn) {
          styles['height'] = `${showHeight}px`
        } else {
          this.$emit('cancel', true);
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

  .cutout__content {
    overflow: hidden;
  }

  .cutout__layer {
    position: absolute;
    width: 100%;
    left: 0;
    z-index: 1000;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
  }
</style>
