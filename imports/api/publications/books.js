import { Mongo } from 'meteor/mongo';
import Books from '../collections/books.js';

if(Meteor.isServer){
    Books.allow({
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
  Meteor.publish('books', function () {
    return Books.find();
  });
}