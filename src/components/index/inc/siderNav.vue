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
  <div class="siderNav">
    <h1 class="navTil">wikift后台管理系统</h1>
    <el-menu
      :default-active="$route.path"
      class="el-menu"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <el-menu-item v-for="(item, key) in navList" :key="key" :index="item.name">
        <i :class="['el-icon-' + item.icon]"></i>
        <span slot="title">{{ item.value }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SiderNav",
  data() {
    return {
      navList: [],
    };
  },
  mounted() {
    this.getNavList();
  },
  methods: {
    getNavList() {
      var self = this;

      setTimeout(function (){
        self.navList = [
          {value: '仪表盘', name: '/', icon: 'location'},
          {value: '用户管理', name: '/users', icon: 'menu'},
          {value: '文章管理', name: '/articles', icon: 'document'}
        ]
      }, 300)

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.siderNav{
  position:absolute;
  top:0;
  bottom:0;
  background-color: #545c64;
  .navTil{
    height: 60px;
    line-height: 60px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    background: #4d5156;
    box-shadow: 0px 2px 3px rgba(0,0,0,.2);
  }
  ul{
    width: 200px;
    border-right: none;
    background: transparent;
    .el-menu-item:focus, .el-menu-item:hover {
      outline: 0;
      background-color: #44494f;
    }
  }
}
</style>
