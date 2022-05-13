<template>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>

      <div class="col-6" style="padding-top: 50px">
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col-3">
            <select style="float: right" class="form-select" @change="selectCategory($event)">
              <option selected>카테고리</option>
              <option :key="i" v-for="(category, i) in categoryList" :value="category.idx">{{ category.categoryName }}</option>
            </select>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">이름</label>
          <input type="text" class="form-control" v-model="userName">
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
      userName: null,
      title: null,
      content: null,
      categoryList: [],
      categoryIdx: {}
    }
  },
  created() {
    this.$axios.get('/api/board/category-list')
        .then((res) => {
          this.categoryList = res.data;
          console.log(this.categoryList)
        })
        .catch((err) => {
          console.log(err)
        })
  },
  methods: {
    selectCategory($event) {
      this.categoryIdx = $event.target.value
    },
    async savePosting() {
      if (!this.title) {
        alert("제목을 입력해주세요.")
      } else if (!this.content) {
        alert("내용을 입력해주세요!")
      }
      await this.$axios.post('/api/board/save',
          {
            userName: this.userName,
            title: this.title,
            content: this.content,
            categoryIdx: this.categoryIdx
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