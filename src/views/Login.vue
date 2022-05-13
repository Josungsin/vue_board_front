<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-3" style="padding-top: 50px">
        <div>
          <div>
            <label class="col-sm-12 col-form-label" style="text-align: left; font-size: 14px; font-weight: bold">아이디</label>
          </div>
          <div class="col-sm-12">
            <input type="text" class="form-control" v-model="userId">
          </div>
        </div>

        <div>
          <div>
            <label class="col-sm-12 col-form-label" style="text-align: left; font-size: 14px; font-weight: bold">비밀번호</label>
          </div>
          <div class="col-sm-12">
            <input type="password" class="form-control" v-model="password">
          </div>
        </div>

        <div style="padding-top: 20px">
          <button type="button" class="btn btn-primary form-control" @click="login()" style="font-weight: bold">Login
          </button>
        </div>

      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      userId: null,
      password: null,
    }
  },
  methods: {
    login() {

    }
  }
}
</script>

<style scoped>

</style>