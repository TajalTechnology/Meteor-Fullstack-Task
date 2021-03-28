<template>
  <div>
    <h2>Welcome books list</h2>
    <ul>
      <li>
        <form class="info-link-add">
          <input type="text" v-model="name" name="name" placeholder="Name" required>
          <input type="text" v-model="bookName" name="bookName" placeholder="bookName" required>
          <input type="submit" name="submit" @click="submit($event)" value="SAVE">
        </form>
      </li>
      <li v-for="book in books">{{book}}</li>
    </ul>
  </div>
</template>

<script>
import Books from '../../api/collections/books.js'
export default {
  components: {
    
  },
  data() {
    return {
      name: "",
      bookName: "",
    }
  },
  meteor: {
    $subscribe: {
      'books': '',
    },
    books () {
      return Books.find({}).fetch()
    },
  },
  methods: {
    submit(event) {
      conole.log('Hit')
      event.preventDefault()
      Meteor.call('books', this.name, this.bookName, (error) => {
        if (error) {
          alert(error.error)
        } else {
          this.name = ''
          this.bookName = ''
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
