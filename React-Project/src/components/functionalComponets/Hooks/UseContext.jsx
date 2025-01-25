import { createContext } from "react";
import Invigilator from "../ContextComponents/Invigilator";
export const ThemeProvidor = createContext();
const Student = () => {
    return (
        <div className="">
            <ThemeProvidor.Provider value={{ sgpa: 9.5, cgpa: 6.5 }} />
            <h2>
                This is a example of useContext.
            </h2>
            {/* <h3> */}
            <Invigilator sgpa="9.5" cgpa="6.5" />
            {/* </h3> */}
        </div>
    );
}
export default Student;