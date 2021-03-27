import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Subjects from '../collections/Subject.js';

Meteor.methods({
  'createSubject'(name, bookName) {
    check(name, String);
    check(bookName, String);

    return Subjects.insert({
      name,
      bookName,
      createdAt: new Date(),
      updateAt: new Date(),
    });
  },
});
