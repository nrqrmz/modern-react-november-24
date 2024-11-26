const students = [
  { id: 1, name: 'Juan', age: 20, grade: 2 },
  { id: 2, name: 'Nicolas', age: 22, grade: 6 },
  { id: 3, name: 'Agustín', age: 23, grade: 8 },
  { id: 4, name: 'David', age: 21, grade: 4 },
  { id: 5, name: 'Camila', age: 20, grade: 3.5 }
];

const addStatusToStudents = (students) => {
  // Tu codigo acá
  // Recuerda el metodo .map que hemos visto en la clase.
  const enhancedstudents = students.map((student) => {
    student.status = student.grade >= 6 ? 'aprobado' : 'reprobado'

    return student
  })

  return enhancedstudents
}

const passingStudents = addStatusToStudents(students).filter(student => student.status === 'aprobado')
const failingStudents = addStatusToStudents(students).filter(student => student.status === 'reprobado')

console.log(addStatusToStudents(students));
console.log(passingStudents);
console.log(failingStudents);
