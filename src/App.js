import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import GlobalRoutes from "./routes/Global";

function App() {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <GlobalRoutes/>
    </div>
  );
}

export default App;
