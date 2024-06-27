/*
 * Temporary problems array schema
 */

import { Router, BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Problems from "./components/Problems";
// import ProblemDetails from "./components/ProblemDetails";

function App() {
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/problems" element={<Problems />} />
        {/* <Route path="/problems/:problem_slug" element={<ProblemDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

// A demo component
// function ProblemStatement(props) {
//   const title = props.title;
//   const acceptance = props.acceptance;
//   const difficulty = props.difficulty;

//   return (
//     <tr>
//       <td>{title}</td>
//       <td>{acceptance}</td>
//       <td>{difficulty}</td>
//     </tr>
//   );
// }
export default App;
