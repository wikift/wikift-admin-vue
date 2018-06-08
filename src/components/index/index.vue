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
  <el-container style="height: 100%;">
    <el-aside width="200px">
      <SiderNav />
    </el-aside>

    <el-container>

      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <router-view/>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
import SiderNav from '@/components/index/inc/siderNav';

export default {
  name: "AdminIndex",
  components: { SiderNav },
  data() {
    return {
      
    };
  },
  mounted() {
    console.log('this is index');
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-header {
  background-color: #f0f0f0;
  color: #333;
  line-height: 60px;
  box-shadow: 0px 2px 3px rgba(0,0,0,.2);
}

.el-aside {
  color: #333;
}
.el-main{
  padding: 20px 30px;
}
</style>
