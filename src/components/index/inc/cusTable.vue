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
  <div class="cusTable">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        v-for="(item, key) in tableBaseData.tableHead"
        :key="key"
        :prop="item.value"
        :label="item.label">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button v-for="(item, key) in tableBaseData.options" :key="key" @click="handleClick($event, scope.row)" type="text" size="small" :data-type="item.value">{{ item.label }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CusTable",
  props: ['tableBaseData', 'tableData'],
  data() {
    return {
    };
  },
  methods: {
    handleClick(e, data) {
      var curData = {
        type: (e.currentTarget).getAttribute('data-type'),
        data: data
      };

      this.$emit('handleTableOpt', curData);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
