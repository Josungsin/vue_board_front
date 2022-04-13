<template>
  <div>
      <div>
        <label>videoUrl: </label>
        <input type="text" v-model="videoUrl" style="margin-left: 10px">
      </div>
      <button type="button" @click="saveVideo()" style="margin-top: 20px">저장</button>
  </div>
</template>

<script>
export default {
  name: "VideoFrom",
  data() {
    return {
      videoUrl: '',
    }
  },
  methods: {
    saveVideo() {
       this.$axios.post('api/video/save',
          {
            videoUrl: this.videoUrl
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
    }
  }
}
</script>

<style scoped>

</style>