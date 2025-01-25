import { useContext } from "react";


const ExamResults = () => {
    const res = useContext();
    return (
        <div className="">
            <h2>Result Published and you SGPA is {res.sgpa} ,CGPA is {res.cgpa}</h2>
        </div>
    );
}

export default ExamResults;