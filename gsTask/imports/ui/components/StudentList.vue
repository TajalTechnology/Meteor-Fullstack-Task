<template>
  <li>
    <span class="text">{{ this.student._id }}</span>
    <button className="delete" @click="deleteThisTask">×</button>
    <button @click="update">Update</button>
  </li>
</template>

<script>
import Students from "../../api/collections/Students.js";
import Subjects from "../../api/collections/Subject.js";

export default {
  props: ["student"],

  data() {
    return {
      name: "",
      bookName: "",
    };
  },
  $subscribe: {
    subjects: "",
  },
  students() {
    return Subjects.find({}).fetch();
  },
  methods: {
    submit(event) {
      console.log('Hit')
      event.preventDefault();
      Meteor.call("createSubject", this.name, this.bookName, (error) => {
        if (error) {
          alert(error.error);
        } else {
          this.name = "";
          this.bookName = "";
        }
      });
    },
    deleteThisTask() {
      Students.remove({ _id: this.student._id });
    },
    update() {
      Students.update(this.student._id, {
        $set: { name: "tajal" },
      });
    },
  },
};
</script>

<style scoped>
ul {
  font-family: monospace;
}
</style>
