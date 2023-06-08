/* eslint-disable no-unused-vars */

const Instructor = ({ name, email, imageLink, studentsNumber, courses }) => {
  console.log(name, email, imageLink, studentsNumber, courses);
  return (
    <div className="grid grid-cols-2 border p-2 rounded gap-1 bg-[#01a2a6]">
      <div>
        <img className="h-[300px]" src={imageLink} alt="" />
      </div>
      <div>
        <p className="text-3xl">
          Name: <span className="font-bold">{name}</span>
        </p>
        <p className="italic font-bold">
          Email: <span className="font-semibold">{email}</span>{" "}
        </p>
        <p className="text-2xl">Students: {studentsNumber}</p>
        <p className="font-bold">Courses: </p>
        <ul>
          {courses.map((c, index) => (
            <li className="font-semibold" key={index}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Instructor;
