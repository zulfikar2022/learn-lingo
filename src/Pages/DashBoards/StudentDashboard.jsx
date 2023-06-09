/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import useAuthContext from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";


const StudentDashboard = () => {
    const {user} = useAuthContext();
    const [selectedClasses,setSelectedClasses] = useState([]);
    const [classDetails,setClassDetails] = useState([]);
    useEffect(() => {
            fetch(`http://localhost:5000/studentClasses?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setSelectedClasses(data);
                    // console.log(data);
                })
    },[user.email])
    console.log('selected classes   ',selectedClasses);

    useEffect(() => {
      const temp = [];
        selectedClasses.map(sc => {
            fetch(`http://localhost:5000/getCourse?id=${sc}`)
                .then(res => res.json())
                .then(data => {
                    console.log('data from inside the second useEffect  ',data);
                    temp.push(data);
                    setClassDetails([...temp]);
                    // console.log('data ',data);
                })
        })
    },[selectedClasses])
   console.log(classDetails);
    return (
        <div>
            <Helmet>
                <title>Learn Lingo | Student Dashboard</title>
            </Helmet>   
            <p>My Selected Class</p>
            <div>
                {
                    
                }
            </div>
            
        </div>
    );
};

export default StudentDashboard;