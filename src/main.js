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
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import '@/assets/css/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import '@/plugins/index';

Vue.use(ElementUI);

Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
  if(to.path === '/login'){
    next();
  }else{
    if(!sessionStorage.getItem('accessToken')){
      next({path: '/login'});
    }else{
      next();
    }
  }
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
