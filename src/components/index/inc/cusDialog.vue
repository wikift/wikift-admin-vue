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
  <el-dialog
    title=""
    :visible.sync="dialogVisible.isShow"
    width="30%"
    center>
    <span>{{ dialogText }}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible.isShow = false">取 消</el-button>
      <el-button type="primary" @click="submit()">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "MainTitle",
  props: ['dialogVisible', 'dialogText'],
  data() {
    return {
    };
  },
  methods: {
    submit() {
      this.dialogVisible.isShow = false;
      this.$emit('handleDialog');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
