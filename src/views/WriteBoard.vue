<template>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>

      <div class="col-6" style="padding-top: 50px">
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" placeholder="name@example.com" v-model="userEmail">
        </div>
        <div class="mb-3">
          <label class="form-label">Title</label>
          <input type="text" class="form-control" v-model="title">
        </div>
        <div class="mb-3">
          <label class="form-label">Content</label>
          <textarea class="form-control" rows="5" v-model="content"></textarea>
        </div>
        <button type="button" class="btn-sm btn-primary" style="float: right" @click="savePosting()">저장</button>
      </div>

      <div class="col-3"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "WriteBoard",
  data() {
    return {
      userEmail: null,
      title: null,
      content: null
    }
  },
  methods: {
    async savePosting() {
      if (!this.userEmail) {
        alert("이메일을 입력해주세요.")
      } else if (!this.title) {
        alert("제목을 입력해주세요.")
      } else if (!this.content) {
        alert("내용을 입력해주세요!")
      }
      await this.$axios.post('/api/board/save',
          {
            userEmail: this.userEmail,
            title: this.title,
            content: this.content
          })
          .then(res => {
            this.$router.go(-1);
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
    }
  }
}
</script>

<style scoped>

</style>