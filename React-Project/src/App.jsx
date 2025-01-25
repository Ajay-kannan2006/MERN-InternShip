import Home from "./components/functionalComponets/Home"
import Card from "./components/functionalComponets/Card";
import Footer from "./components/functionalComponets/Footer";
import Header from "./components/functionalComponets/Header";
import Profile from "./components/functionalComponets/Profile";
import About from "./components/functionalComponets/About";
import Contact from "./components/functionalComponets/Contact";
import Navbar from "./components/functionalComponets/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./components/functionalComponets/SignUp";
import UseState from "./components/functionalComponets/Hooks/UseState";
import UseEffect from "./components/functionalComponets/Hooks/UseEffect";
import UseEffectApi from "./components/functionalComponets/Hooks/UseEffectAPI";
import TaskAPI from "./components/functionalComponets/Hooks/TaskAPI";
import UseRef from "./components/functionalComponets/Hooks/UseRef";
import UseMemo from "./components/functionalComponets/Hooks/useMemo";
import UseCallback from "./components/functionalComponets/Hooks/UseCallBack";
import Student from "./components/functionalComponets/Hooks/UseContext";
// import ReactLifecycleMethods from "./components/classComponents/ReactLifecycleMethods";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/card" element={<Card title="Introduction" description="This is a simple card component." />}></Route>
          <Route path="/about" element={<About Hello="Ajay" />}></Route> {/* props Example */}
          <Route path="/profile" element={<Profile name="Ajay" age={19} profession="Developer" />}></Route>
          <Route path="/contact" element={<Contact />}></Route>   {/* state Example */}
          <Route path="/use-state" element={<UseState />}></Route>
          <Route path='/use-effect' element={<UseEffect />}></Route>
          <Route path="/use-api" element={<UseEffectApi />}></Route>
          <Route path="/image-api" element={<TaskAPI />}></Route>
          <Route path="/use-ref" element={<UseRef />}></Route>
          <Route path="/use-memo" element={<UseMemo />}></Route>
          <Route path="/use-callback" element={<UseCallback />}></Route>
          <Route path="/use-context" element={<Student />}></Route>
          {/* <Route path="reactlm" element={<ReactLifecycleMethods />}></Route> */}
        </Routes>
      </BrowserRouter >
      <Footer />
      {/* <Button label="Click Me" onClick={() => alert("Button clicked!")} /> */}
    </>
  );
};

export default App;
