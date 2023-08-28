const students = [];

for (let i = 0; i < 10000000; i++) {
  students.push({
    _id: i,
    name: `Student ${i}`,
    class: `Class ${Math.floor(Math.random() * 12) + 1}`,
    rollNumber: Math.floor(Math.random() * 900) + 100,
    age: Math.floor(Math.random() * 4) + 15
  });
}




module.exports = students;
