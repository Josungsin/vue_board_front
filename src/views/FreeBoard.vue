<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>

      <div class="col-6" style="padding-top: 50px">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">title</th>
            <th scope="col">content</th>
            <th scope="col">date</th>
          </tr>
          </thead>
          <tbody>
          <tr :key="i" v-for="(board, i) in boardList">
            <td>{{ i+1 }}</td>
            <td>{{ board.title }}</td>
            <td>{{ board.content }}</td>
            <td>{{ board.regDate }}</td>
          </tr>
          </tbody>
        </table>
        <router-link to="/write-board"><button type="button" class="btn-sm btn-primary" style="float: right">글쓰기</button></router-link>
      </div>

      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FreeBoard",
  data() {
    return {
      boardList: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.$axios.get("/api/board/list")
          .then((res) => {
            console.log(res);
            this.boardList = res.data
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