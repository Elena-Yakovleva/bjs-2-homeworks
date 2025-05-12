function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if( this.hasOwnProperty('marks')) {
    this.marks.push(...marks)
  }
  return 0;
}

Student.prototype.getAverage = function () {
  if( this.hasOwnProperty('marks') && this.marks.length !== 0) {
     let result = this.marks.reduce((acc, item, index, arr) => acc + item / arr.length, 0 );
     return result;
  }
  return 0;
}

Student.prototype.exclude = function (reason) {
   this.excluded = reason;
   delete this.marks;
   delete this.subject;
}

