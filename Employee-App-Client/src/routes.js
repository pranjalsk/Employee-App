import HomeView from './components/HomeView.vue'
import EmployeeTable from './components/EmployeeTable.vue'
import ViewEmployee from './components/ViewEmployee.vue'
import EditEmployee from './components/EditEmployee.vue'
import AddEmployee from './components/AddEmployee.vue'

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
    path: '/employees/add/employee',
    name: 'addEmployee',
    components: {
      'employee-add-view': AddEmployee,
    },
  },
  {
    path: '/employees/edit/:employeeid',
    name: 'editEmployee',
    components: {
      'employee-edit-view': EditEmployee,
    },
  },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  }
  
  
];