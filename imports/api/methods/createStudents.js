import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Students from '../collections/Students.js';

Meteor.methods({
  'createStudent'(name, email, phone,dob,status) {
    check(name, String);
    check(email, String);
    check(phone, String);
    check(dob, String);
    check(status, String);

    return Students.insert({
      name,
      email,
      phone,
      email,
      dob,
      status,
      createdAt: new Date(),
      updateAt: new Date(),
    });
  },
});
