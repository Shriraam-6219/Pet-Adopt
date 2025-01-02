import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/homePage/Home";
import Error from "./pages/Error/Error";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Layout Route */}
        <Route element={<Layout />}>
          <Route  path="/" index element={<Home />} />
        </Route>

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
