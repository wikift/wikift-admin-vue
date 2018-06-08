<!--
  Licensed to the Apache Software Foundation (ASF) under one
  or more contributor license agreements.  See the NOTICE file
  distributed with this work for additional information
  regarding copyright ownership.  The ASF licenses this file
  to you under the Apache License, Version 2.0 (the
  "License"); you may not use this file except in compliance
  with the License.  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<template>
  <div class="wrapLogin">
    <div class="login">
      <h2 class="loginTil">用户登录</h2>
      <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="70px" class="loginForm">
        <el-form-item label="用户名" prop="user">
          <el-input type="text" v-model="loginForm.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { URLCONFIG } from '@/config/config';

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        user: '',
        pass: '',
      },
      rules: {
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请填写密码', trigger: 'blur' }
        ],
      }
    };
  },
  mounted() {
    
  },
  methods: {
    submitForm(formName) {
      var self = this;

      self.$refs[formName].validate((valid) => {
        if (valid) {
          // 验证成功
          var params = {
            user: self._util.trim(self.loginForm.user),
            pass: self._util.trim(self.loginForm.pass)
          };

          // 登录成功后跳转,设置session做登录验证，vuex保存userId
          sessionStorage.setItem('accessToken', 'admin');
          self.$router.push({path: '/'});

          // self._axios({
          //   method: 'post',
          //   url: URLCONFIG.loginUrl,
          //   data: params
          // })
          // .then(rs => {
          //   console.log(rs);
          // })
          // .catch(err => {
          //   console.log(err);
          // });

        } else {
          return false;
        }
      });

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login{
  width: 350px;
  background: #f5f5f5;
  padding: 30px;
  margin: 200px auto 0;
  .loginTil{
    line-height: 40px;
    font-size: 18px;
  }
  .loginForm{
    margin-top: 10px;
    text-align: center;
    .el-button{
      margin-left: -70px;
    }
  }

}
</style>
