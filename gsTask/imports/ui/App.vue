<template>
  <div>
  
    <h1>Welcome to Meteor!</h1>
    <router-link to="/student-list">StudentList</router-link>
    <router-link to="/students">Students</router-link>
    <router-link to="/books">Books</router-link>
    <div>
      <router-view></router-view>
    </div>
  
  </div>
</template>

<script>
import Books from './components/Books.vue'



export default {
  components: {
    Books
  },
}
</script>

<style>

</style>
