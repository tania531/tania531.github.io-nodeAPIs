

var s1 = new Student('bob');
var s2 = new Student('sam');
var s3 = new Student('jill');
var students = [s1, s2, s3];
//s1.addTest(totalPoints, actualPoints);
s1.addTest(150, 120);
s1.addTest(130, 110);
s1.addTest(90, 50);
s2.addTest(110, 15);
s2.addTest(250, 35);
s3.addTest(160, 75);
s3.addTest(180, 85);
s3.addTest(100, 24);
var s1Grade = s1.grade();
// s1Grade === 'A', 'B', 'C', 'D', 'F'
// A -> 90 to 100
// B -> 80 to 89
// C -> 70 to 79
// D -> 65 to 69
// F -> < 65 or 0 to 64
var grades = Student.grades(students);
// output an object with the count of grades per student, in this example, // below, there are 8 students

{
 A: 3,
 B: 2,
 C: 0,
 D: 1,
 F: 2
}
