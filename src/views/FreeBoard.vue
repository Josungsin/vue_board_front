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
            <td>{{ board.idx }}</td>
            <td>{{ board.title }}</td>
            <td>{{ board.content }}</td>
            <td>{{ board.regDate }}</td>
          </tr>
          </tbody>
        </table>
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