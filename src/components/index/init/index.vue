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
    <div class="headInit">
      <ul>
        <li v-for="(item, key) in mainData" :key="key">
          <div class="itemHead">
            <span class="name">{{ item.name }}</span>
            <p class="num">{{ item.num }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { URLCONFIG } from '@/config/config';

export default {
  name: "AdminInit",
  data() {
    return {
      mainData: []
    };
  },
  mounted() {
    this.getMainData();
    
  },
  methods: {
    getMainData() {
      var self = this;

      setTimeout(function (){
        self.mainData = [
          {
            name: '文章',
            num: 123123
          }, {
            name: '用户',
            num: 987678
          }
        ]
      }, 300)


      self._axios({
        method: 'get',
        url: URLCONFIG.getIndexData,
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.headInit{
  ul{
    display: flex;
    li{
      flex-grow: 1;
      box-sizing: border-box;
      padding: 10px;
      .itemHead{
        height: 100px;
        padding: 20px;
        border-radius: 5px;
        color: #fff;
        background: #73c34c;
        .name{
          font-size: 16px;
        }
        .num{
          line-height: 52px;
          text-align: center;
          font-size: 32px;
          color: #fff;
        }
      }
    }
  }
}
</style>
