import React from "react";

interface DisciplineCardProps {
  name: string;
  semesters: number;
  students: number;
  teachers: number;
  courses: number;
}

const DisciplineCard: React.FC<DisciplineCardProps> = ({
  name,
  semesters,
  students,
  teachers,
  courses,
}) => {
  return (
    <div className=" rounded-3xl overflow-hidden p-4 border border-gray-200 dark:border-gray-800 duration-500 transition-[border] cursor-pointer">
      <div className="text-sky-500 font-bold text-xl mb-4">{name}</div>
      <ul className=" text-base flex flex-col gap-1">
        <li>Semesters: {semesters}</li>
        <li>Students: {students}</li>
        <li>Teachers: {teachers}</li>
        <li>Courses: {courses}</li>
      </ul>
    </div>
  );
};

export default DisciplineCard;
