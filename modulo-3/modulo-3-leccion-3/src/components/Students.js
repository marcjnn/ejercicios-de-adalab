import React from "react";

function Students() {
  const students = [
    {
      promo: "A",
      name: "Sofía",
      age: 20,
    },
    {
      promo: "B",
      name: "María",
      age: 21,
    },
    {
      promo: "A",
      name: "Lucía",
      age: 22,
    },
  ];

  const studentsPromoA = students.filter((student) => student.promo === "A");
  
  return studentsPromoA.map((student, index) => {
    return (
      <li key={index}>
        {student.name}, {student.age}
      </li>
    );
  });
}

export default Students;
