<template>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>

      <div class="col-6" style="padding-top: 50px">

        <table>
          <div class="col">
            <td>카테고리:</td>
            <td>{{ boardDetail.categoryName }}</td>
          </div>
          <div class="col">
            <td>작성자:</td>
            <td>{{ boardDetail.userEmail }}</td>
          </div>
          <div class="col">
            <td>제목:</td>
            <td>{{ boardDetail.title }}</td>
          </div>
          <div class="col">
            <td>내용:</td>
            <td>{{ boardDetail.content }}</td>
          </div>
        </table>
        <router-link to="/board">
          <button type="button" class="btn-sm btn-primary" style="float: right; margin-top: 30px">목록으로</button>
        </router-link>
      </div>

      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBoard",
  data() {
    return {
      boardDetail: {},
      boardIdx: null
    }
  },
  created() {
    this.$axios.get("/api/board/detail/" + this.$route.params.boardIdx)
        .then((res) => {
          this.boardDetail = res.data;
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
  },
}
</script>

<style scoped>

</style>