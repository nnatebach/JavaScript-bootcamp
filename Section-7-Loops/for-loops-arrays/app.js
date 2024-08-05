//// Example 1

// Print out number of iterations and the scores of examScores

// examScores = [98, 77, 84, 91, 57, 66]

// Output
// 0 98
// 1 77
// 2 84
// 3 91
// 4 57
// 5 66

const examScores = [98, 77, 84, 91, 57, 66];

for (let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]);
}

//// Example 2

const myStudents = [
  {
    firstName: 'Zeus',
    grade: 86
  },
  {
    firstName: 'Artemis',
    grade: 97
  },
  {
    firstName: 'Hera',
    grade: 72
  },
  {
    firstName: 'Apollo',
    grade: 90
  },
]

// Output
// Zeus    86
// Artemis    97
// Hera    72
// Apollo    90

for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  console.log(`${student.firstName} scored ${student.grade}`);
}

//// Example 3

// Print out every letter of this string in the backward orders
// in other word, print a reversed string
const word = 'stressed';

let reversedWord = ''
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i]
}

console.log(reversedWord);

//// Same with Example 2 but this time try to get the average grade of all the students

let total = 0;

for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i].grade;
  total += student
}
console.log(total); // 345
console.log(total / myStudents.length); // 86.25