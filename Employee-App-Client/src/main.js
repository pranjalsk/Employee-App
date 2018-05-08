import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import 'vue-material/dist/vue-material.min.css'

// Components regstration
import HomeView from './components/HomeView.vue'
import EmployeeTable from './components/EmployeeTable.vue'
import ViewEmployee from './components/ViewEmployee.vue'
import EditEmployee from './components/EditEmployee.vue'
import AddEmployee from './components/AddEmployee.vue'


// Routes resitration
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VueMaterial)

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
  router: router,
  render: h => h(App)
})
