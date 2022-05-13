<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>

      <div class="col-6" style="padding-top: 50px">
        <div class="row" style="padding-bottom: 10px">
          <div class="col-3">
            <select style="float: left" class="form-select" @change="selectSearchType($event)">
              <option selected>검색조건</option>
              <option value="TITLE">제목</option>
              <option value="USER">이름</option>
            </select>
          </div>
          <div class="col-6" style="padding-left: 0px">
            <input class="form-control" style="width: 125%" v-model="searchKeyword" @keyup.enter="getList(searchKeyword)">
          </div>
          <div class="col">
            <button class="btn btn-outline-success" style="float: right" @click="getList(searchKeyword)">Search</button>
          </div>
        </div>

        <table class="table">
          <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">작성자</th>
            <th scope="col">title</th>
            <th scope="col">date</th>
          </tr>
          </thead>
          <tbody>
          <tr :key="i" v-for="(board, i) in boardList">
            <td>{{ i + 1 }}</td>
            <td>{{ board.userEmail }}</td>
            <td @click="boardDetail(board.idx)">{{ board.title }}</td>
            <td>{{ board.regDate }}</td>
          </tr>
          </tbody>
        </table>
        <router-link to="/write-board">
          <button type="button" class="btn-sm btn-primary" style="float: right">글쓰기</button>
        </router-link>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardList",

  data() {
    return {
      boardList: [],
      boardIdx: null,
      searchKeyword: '',
      searchType: null
    }
  },
  created() {
    this.getList()
  },
  methods: {
    selectSearchType($event) {
      return this.searchType = $event.target.value
    },
    getList(searchKeyword) {
      this.$axios.get("/api/board/list", {
        params: {
          searchType: this.searchType,
          searchKeyword: searchKeyword
        }
      })
          .then((res) => {
            console.log(res);
            this.boardList = res.data
          })
          .catch((error) => {
            console.log(error)
          })
    },
    boardDetail(boardIdx) {
      this.boardIdx = boardIdx
      this.$router.push({name: "DetailBoard", params: {"boardIdx": boardIdx}})
    },

  }
}
</script>

<style scoped>

</style>