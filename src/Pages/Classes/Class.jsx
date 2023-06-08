import { Link } from "react-router-dom";

const SingleClass = (props) => {

    const handleSelect = () => {

    }

  const name = props.name;
  const courses = props.course;
  console.log("corssesv ", courses);
  return (
    <div className="my-10">
      {courses.map((course) => (
        <div key={course._id} className=" border h-full">
          <figure>
            <img src={course.image} alt="Shoes" className="w-full h-[200px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{course.name}</h2>
            <p>
              Instructor: <span className="font-bold">{name}</span>{" "}
            </p>
            <p>
              Available Seats:{" "}
              <span className="font-bold">{course.studentCapability - course.enrolledStudent}</span>
            </p>
            <p>Price: <span className="font-bold">${course.price}</span></p>
            <div className="card-actions justify-end">
             <button disabled={(course.studentCapability - course.enrolledStudent)===0} onClick={handleSelect} className="my-btn">Select</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleClass;
