

function Student(name){
    this.name = name;
    this.scores = [];
};

Student.allStudents = [];

Student.addStudent = function(name){
  var student = new Student(name);
  Student.allStudents.push(student);
  return student;
};

Student.prototype.addTest = function(total, actual){
  var score = {"total":total, "actual":actual};
  this.scores.push(score);
};

Student.prototype.grade = function(){
  var totalScores = 0;
  var totalActuals = 0;
  this.scores.forEach(function(sc){
    totalActuals += sc.actual;
    totalScores += sc.total;
  });
  var grade = "";
  var percentage = totalActuals / totalScores;
  if (percentage >= .90) {
    grade = 'a';
  } else if(percentage >= .80 && percentage < .90){
    grade = 'b';
  } else if(percentage >= .70 && percentage < .80){
    grade = 'c';
  } else if(percentage >= .66 && percentage < .70){
    grade = 'd';
  } else if(percentage < .65){
     grade = 'f';
  }
  return grade;
};

Student.grades = function(){
  var gradesCounter = {"a":0, "b":0, "c":0, "d":0, "f":0};
  Student.allStudents.forEach(function(s){
   gradesCounter[s.grade()]++;
  });
  return gradesCounter;
};

Student.addStudent('chyld');
var tania= Student.addStudent('tania');
var tark= Student.addStudent('tark');
var cade = Student.addStudent('cade');
var sheryl = Student.addStudent('sheryl');
var chyld = Student.addStudent('chyld');
tania.addTest(100, 80);
tania.addTest(100, 100);
cade.addTest(100, 75);
tark.addTest(100, 95);
sheryl.addTest(100, 95);
chyld.addTest(100,10);

console.log('Student.grades ', Student.grades() );
