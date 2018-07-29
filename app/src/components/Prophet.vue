<template>
  <div>
    <div>
      <el-button @click="prophetImgAction" type="primary" :loading="is_loading">
        <div v-if="is_loading">Loading</div>
        <div v-else>Go Prophet</div>
      </el-button>
    </div>
    <div>
      <img v-show="img_data != ''" v-bind:src="'data:image/png;base64,'+img_data" />
      <img v-show="components_img_data != ''" v-bind:src="'data:image/png;base64,'+components_img_data" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      img_data: state => state.prophet.img_data,
      components_img_data: state => state.prophet.components_img_data,
      is_loading: state => state.prophet.is_loading
    }),
    ...mapGetters('prophet', {
    })
  },
  methods: {
    prophetImgAction () {
      this.$store.dispatch('prophet/img')
    }
  }
}
</script>
