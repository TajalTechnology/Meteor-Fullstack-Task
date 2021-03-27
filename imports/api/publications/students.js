import { Mongo } from 'meteor/mongo';

import Students from '../collections/Students.js';

if(Meteor.isServer){
  Students.allow({
    insert: function () {
      return true;
    },
    remove: function () {
      return true;
    },
    update: function () {
      return true;
    }
  })
  Meteor.publish('students', function () {
    return Students.find();
  });
}