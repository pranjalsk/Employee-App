import HomeView from './components/HomeView.vue'
import EmployeeTable from './components/EmployeeTable.vue'
import ViewEmployee from './components/ViewEmployee.vue'

export const routes = [{
    path: '/',
    name: 'home',
    components: {
      'home-view': HomeView
    }
  },
  {
    path: '/employees',
    name: 'allEmployees',
    components: {
      'employee-table-view': EmployeeTable
    },
  },
  {
    path: '/employees/:employeeid',
    name: 'viewEmployee',
    components: {
      'employee-view': ViewEmployee,
    },
  },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  }
  
  
];