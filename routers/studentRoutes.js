import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import StudentList from '../imports/ui/components/StudentList.vue'
import Students from '../imports/ui/components/Student.vue'
import Books from '../imports/ui/components/Books.vue'
import Booksnew from '../imports/ui/components/Booksnew.vue'

const routes = [
  {
    path: "/books-new",
    name: "Booksnew",
    component: Booksnew
  },
  {
    path: "/student-list",
    name: "StudentList",
    component: StudentList
  },
  {
    path: "/students",
    name: 'Students',
    component: Students
  },
  {
    path: "/books",
    name: "Books",
    component: Books
  },
]

const router = new VueRouter({
  routes
})

export default router