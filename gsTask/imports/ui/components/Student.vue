<template>
  <div>
    <h2>Welcome to Gain Solutions!</h2>
    <ul>
      <li>
        <form class="info-link-add">
          <input type="text" v-model="name" name="name" placeholder="Name" required>
          <input type="text" v-model="email" name="email" placeholder="Email" required>
          <input type="text" v-model="phone" name="phone" placeholder="Phone" required>
          <input type="text" v-model="dob" name="dob" placeholder="dob" required>
          <input type="text" v-model="status" name="status" placeholder="status" required>
          <input type="submit" name="submit" @click="submit($event)" value="SAVE">
        </form>
      </li>
      <StudentList v-for="student in students" v-bind:key="student._id" v-bind:student="student" />
    </ul>
  </div>
</template>

<script>
import Students from '../../api/collections/Students.js'
import StudentList from '../components/StudentList.vue'

export default {
  components: {
    StudentList
  },
  data() {
    return {
      name: "",
      email: "",
      phone:"",
      dob:"",
      status:"",
    }
  },
  meteor: {
    $subscribe: {
      'students': '',
    },
    students () {
      return Students.find({}).fetch()
    },
  },
  methods: {
    submit(event) {
      event.preventDefault()
      Meteor.call('createStudent', this.name, this.email,this.phone,this.dob,this.status, (error) => {
        if (error) {
          alert(error.error)
        } else {
          this.name = ''
          this.email = ''
          this.phone = ''
          this.dob = ''
          this.status = ''
        }
      })
    }
  },
}
</script>

<style scoped>
  ul {
    font-family: monospace;
  }
</style>
