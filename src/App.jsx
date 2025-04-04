import { Outlet } from "react-router";
import { Footer, Header } from "./components/index.js";

function App() {
  return (
    <div className="lg:p-5">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
