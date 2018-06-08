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
  <div class="adminInit">
    <MainTitle myTil="文章管理" />
    <CusTable :tableBaseData="tableBaseData" :tableData="tableData" @handleTableOpt="handleTable" />
    <div class="cusTable">
      <CusDialog :dialogText="curDialogText" :dialogVisible="cusDialog" @handleDialog="submitDialog" />
    </div>
  </div>
</template>

<script>
import MainTitle from '@/components/index/inc/mainTitle';
import CusTable from '@/components/index/inc/cusTable';
import CusDialog from '@/components/index/inc/cusDialog';

import { URLCONFIG } from '@/config/config';

export default {
  name: "AdminInit",
  components: { MainTitle, CusTable, CusDialog },
  data() {
    var tableBaseData = {
      tableHead: [
        {label: '名称', value: 'name'}
      ],
      options: [
        {label: '删除', value: 'delete'},
        {label: '审核', value: 'audit'}
      ]
    };
    return {
      tableBaseData: tableBaseData,  // 表格表头、操作
      tableData: [],  // 表格内容
      cusDialog: {isShow: false},  // 弹窗是否显示
      curBtnType: '',  // 当前点击按钮类型
      curItem: null,   // 当前点击按钮所在行的数据
      curDialogText: '',  // 当前打开弹窗的文字内容
    };
  },
  mounted() {
    this.getTableData();
    
  },
  methods: {
    // 获取表格数据
    getTableData() {
      var self = this;

      setTimeout(function () {
        self.tableData = [
          {name: '111111111111', id: '1'},
          {name: '22222222222222', id: '2'},
          {name: '3333333333333333', id: '3'}
        ]
      })

      self._axios({
        method: 'get',
        url: URLCONFIG.getArticleData,
        data: ''
      })
      .then(rs => {
        console.log(rs);
      })
      .catch(err => {
        console.log(err);
      });
      
    },
    // 表格操作按钮，出现提示框
    handleTable(data){
      this.cusDialog.isShow = true;
      this.curBtnType = data.type;
      this.curItem = data.data;
      if(this.curBtnType == 'delete'){
        this.curDialogText = '确认删除该项吗？';
      }else{
        this.curDialogText = '确认审核该项吗？'
      }
    },
    // 提示框确定按钮操作
    submitDialog() {
      var self = this;

      if(self.curBtnType == 'delete'){
        // 删除按钮
        self.cusDialog.isShow = false;

        self._axios({
          method: 'post',
          url: URLCONFIG.getArticleData,
          data: ''
        })
        .then(rs => {
          console.log(rs);
        })
        .catch(err => {
          console.log(err);
        });

      }else if(self.curBtnType == 'audit'){
        // 审核按钮
        self.cusDialog.isShow = false;


        self._axios({
          method: 'post',
          url: URLCONFIG.auditArticle,
          data: ''
        })
        .then(rs => {
          console.log(rs);
        })
        .catch(err => {
          console.log(err);
        });

      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.cusTable{
  margin-top: 10px;
}
</style>
