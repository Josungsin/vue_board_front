<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-3" style="padding-top: 50px">
        <div>
          <div>
            <label class="col-sm-12 col-form-label" style="text-align: left; font-size: 14px; font-weight: bold">아이디</label>
          </div>
          <div class="row">
            <div class="col-8">
              <input type="text" class="form-control" style="width: 110%" v-model="userId">
            </div>
            <div class="col">
              <button class="btn btn-success" style="float: right" @click="check()">중복체크</button>
            </div>
          </div>
          <div v-if="checkId" style="float:left; color: #42b983; font-size: small; font-weight: bold; padding-top: 5px">
            사용 가능한 아이디 입니다.
          </div>
        </div>

        <div>
          <div>
            <label class="col-sm-12 col-form-label" style="text-align: left; font-size: 14px; font-weight: bold">이메일</label>
          </div>
          <div class="col-sm-12">
            <input type="email" class="form-control" v-model="email">
          </div>
        </div>

        <div>
          <div>
            <label class="col-sm-12 col-form-label" style="text-align: left; font-size: 14px; font-weight: bold">이름</label>
          </div>
          <div class="col-sm-12">
            <input type="text" class="form-control" v-model="name">
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

        <div>
          <div>
            <label class="col-sm-12 col-form-label" style="text-align: left; font-size: 14px; font-weight: bold">비밀번호 확인</label>
          </div>
          <div class="col-sm-12">
            <input type="password" class="form-control" v-model="passwordCheck">
          </div>
          <div v-if="validPassword"
               style="float:left; color: red; font-size: small; font-weight: bold; padding: 5px 0px 5px">
            비밀번호를 정확하게 입력해 주세요.
          </div>
          <div v-if="passwordRule"
               style="float:left; color: red; font-size: small; font-weight: bold; padding: 5px 0px 5px">
            비밀번호는 영문 대,소문자와 숫자, 특수기호가 적어도 1개 이상씩 포함된 8자 ~ 20자의 비밀번호여야 합니다.
          </div>
        </div>
        <div style="padding-top: 20px">
          <button type="button" class="btn btn-primary form-control" @click="save()" style="font-weight: bold">Join
          </button>
        </div>
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

      userId: null,
      email: null,
      name: null,
      password: null,
      passwordCheck: null,

      checkId: false,
      validPassword: false,
      passwordRule: false
    }
  },
  watch: {
    password(password) {
      const regExp = /(?=.*[0-9])(?=.*[a-zA-Z])(?=[A-Z])(?=.*\W)(?=\S+$).{8,20}/
      if (!regExp.test(password)) {
        this.passwordRule = true;
      } if (regExp.test(password)) {
        this.passwordRule = false;
      }
    }
  },
  created() {

  },
  methods: {
    save() {
      if (!this.userId) {
        alert("아이디를 입력해주세요.")
      } else if (!this.email) {
        alert("이메일을 입력해주세요.")
      } else if (!this.name) {
        alert("이름을 입력해주세요")
      } else if (!this.password) {
        alert("비밀번호를 입력해주세요")
      } else if (!this.checkId) {
        alert("아이디 중복체크를 해주세요.")
        return;
      }

      if (this.password != this.passwordCheck) {
        return this.validPassword = true;
      }

      this.$axios.post('/api/signup',
          {
            userId: this.userId,
            email: this.email,
            userName: this.name,
            password: this.password
          })
          .then(res => {
            console.log(res);
            this.$router.push({name: "Home"})
          })
          .catch(err => {
            console.log(err);
          })
    },
    check() {
      if (!this.userId) {
        alert("아이디를 입력해주세요.")
        return;
      }
      this.$axios.get('/api/signup-check/', {
        params: {
          userId: this.userId
        }
      }).then((res) => {
        if (res.data === 1) {
          alert("사용 가능한 아이디 입니다.");
          return this.checkId = true;
        }
      })
          .catch((err) => {
            console.log(err)
            alert("이미 사용중인 아이디 입니다.");
            this.checkId = false;
            return this.userId = null;
          })
    },
  }
}
</script>

<style scoped>

</style>