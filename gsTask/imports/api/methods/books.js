import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Books from '../collections/books.js'

Meteor.methods({
  'books'(name, bookName) {
    check(name, String);
    check(bookName, String);

    return Books.insert({
      name,
      bookName,
      createdAt: new Date(),
      updateAt: new Date(),
    });
  },
});
