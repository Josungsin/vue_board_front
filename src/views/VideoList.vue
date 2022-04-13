<template>
  <div >
    <div>
      <div :key="i" v-for="(video, i) in videoList">
<!--        <iframe src="{{ video.videoUrl }}" width="560" height="315"></iframe>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoList",
  data() {
    return {
      videoList: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.$axios.get("/api/video/list")
          .then((res) => {
            console.log(res);
            this.videoList = res.data
          })
          .catch((error) => {
            console.log(error)
          })
    },
  }
}
</script>

<style scoped>

</style>