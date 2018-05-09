import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import VueToastr from '@deveodk/vue-toastr'
import 'vue-material/dist/vue-material.min.css'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'
// Components regstration
import HomeView from './components/HomeView.vue'
import EmployeeTable from './components/EmployeeTable.vue'
import ViewEmployee from './components/ViewEmployee.vue'
import EditEmployee from './components/EditEmployee.vue'
import AddEmployee from './components/AddEmployee.vue'


// Routes resitration
import { routes } from './routes';
import { store } from './store';

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VeeValidate);
Vue.use(VueToastr, {
  defaultPosition: 'toast-top-center',
  defaultType: 'info',
  defaultTimeout: 2000
})



Vue.component('app-homeview', HomeView);
Vue.component('app-employeeTableView', EmployeeTable);
Vue.component('app-viewEmployee', ViewEmployee);
Vue.component('app-editEmployee', EditEmployee);
Vue.component('app-addEmployee', AddEmployee);


const router = new VueRouter({
  routes: routes,
  mode: 'history'
});



new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
})
