import { Meteor } from 'meteor/meteor';
import Subjects from '../collections/Subject.js';


if(Meteor.isServer){
  Subjects.allow({
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
  Meteor.publish('subjects', function () {
    return Subjects.find();
  });
}
