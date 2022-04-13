<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-3" style="padding-top: 50px">
        <div className="alert alert-success" role="alert" v-if="successCheck">
          회원가입 완료
        </div>
        <form class="row g-3">
          <div>
            <div>
              <label class="col-sm-12 col-form-label" style="text-align: left; font-size: 14px;">이메일</label>
            </div>
            <div>
              <div class="col-sm-12">
                <input type="email" class="form-control" v-model="email">
              </div>
              <button class="btn btn-success btn-sm form-control" @click="check()">중복체크</button>
            </div>
          </div>

          <div>
            <div>
              <label class="col-sm-12 col-form-label" style="text-align: left; font-size: 14px;">이름</label>
            </div>
            <div class="col-sm-12">
              <input type="text" class="form-control" v-model="name">
            </div>
          </div>

          <div>
            <div>
              <label class="col-sm-12 col-form-label" style="text-align: left; font-size: 14px;">비밀번호</label>
            </div>
            <div class="col-sm-12">
              <input type="password" class="form-control" v-model="password">
            </div>
          </div>

          <div>
            <div>
              <label class="col-sm-12 col-form-label" style="text-align: left; font-size: 14px;">비밀번호 확인</label>
            </div>
            <div class="col-sm-12">
              <input type="password" class="form-control">
            </div>
          </div>
          <button type="button" class="btn btn-primary" @click="save()">Sign in</button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "SignUp",
  data() {
    return {

      error: '',

      email: null,
      name: null,
      password: null,

      checkEmail: false,
      successCheck: false
    }
  },
  created() {

  },
  methods: {
    save() {
      if (!this.email) {
        alert("이메일을 입력해주세요.")
      } else if (!this.name) {
        alert("이름을 입력해주세요")
      } else if (!this.password) {
        alert("비밀번호를 입력해주세요")
      } else this.$axios.post('/api/signup',
          {
            email: this.email,
            userName: this.name,
            password: this.password
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
      this.signSuccess()
    },
    signSuccess() {
      this.successCheck = true;
    },
    check() {
      this.$axios.get('/api/signup-check/' + this.email)
          .then((res) => {
            this.checkEmail = res.data
            console.log(this.checkEmail)
            alert("사용가능한 이메일 입니다.")
          })
          .catch((error) => {
            alert("이미 사용중인 이메일 입니다.")
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>

</style>