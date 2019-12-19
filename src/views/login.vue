<template>
  <div class="change">
    <div style="width:100%;height:150px;"></div>

    <img alt="Jiacheng logo" src="" />
    <van-panel>
      <div>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          icon="question"
          placeholder="请输入用户名"
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
          v-on:keyup.13="handleLogin"
        />
      </div>
      <div slot="footer">
        <van-button size="small" type="primary" @click="handleLogin()">确定</van-button>
        <!-- <van-button size="small" type="danger">按钮</van-button> -->
      </div>
    </van-panel>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { Field, Button, Panel, Image } from "vant";
import axios from "axios";
import qs from "qs";
import "./Safety";
export default {
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Panel.name]: Panel,
    [Image.name]: Image
  },
  data() {
    return {
      password: "",
      username: ""
    };
  },
  computed: {
    // ...mapState({
    //   isAuthentication: state => state.isAuthentication
    // })
  },
  methods: {
    handleLogin() {
      if (!this.username) {
        this.$toast({
          message: "请输入用户名"
        });
      } else if (!this.password) {
        this.$toast({
          message: "请输入密码"
        });
      } else {
        this.encryped();
      }
    },
    encryped() {
      axios
        .post(
          "/basic/api/system/rsaKey",
          qs.stringify({
            username: this.username
          })
        )
        .then(({ data }) => {
          if (data && data.valResule == "true") {
            var pwdKey = new RSAUtils.getKeyPair(
              data.exponent,
              "",
              data.modulus
            );
            console.log(pwdKey)
            var reversedPwd = this.password
              .split("")
              .reverse()
              .join("");
            this.password = RSAUtils.encryptedString(pwdKey, reversedPwd);
            console.log(this.password)
            this.login();
          } else {
            // this.getCaptcha();
            this.$toast({
              message: "验证码错误,请重新输入"
            });
          }
        });
    },
    login() {
      axios.post('/basic/gateway/login', 
      {
        username: this.username,
        password: this.password,
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>


