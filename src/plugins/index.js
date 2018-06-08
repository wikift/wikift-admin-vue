/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import Vue from 'vue';
import Axios from 'axios';
import Util from './util';


var instance = Axios.create({
  // baseURL: 'http://' + appConfig.appHost + ':' + appConfig.appPort
});
instance.interceptors.request.use(config => {
  return config;
}, err => {
  return Promise.reject('请求失败：' + err.message);
})
instance.interceptors.response.use(res => {
  return res.data;
}, err => {
  return Promise.reject('请求失败：' + err.message);
})


Vue.prototype._axios = instance;
Vue.prototype._util = Util;

export default Axios;
