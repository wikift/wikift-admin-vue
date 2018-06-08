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
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/components/index/index'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['@/components/index/init/index'], resolve),
        }, {
          path: 'users',
          component: resolve => require(['@/components/index/users/index'], resolve),
        }, {
          path: 'articles',
          component: resolve => require(['@/components/index/articles/index'], resolve),
        }
      ]
    }, {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/login/index'], resolve)
    }
  ]
})
