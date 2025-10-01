import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MasterDropdowns from "./pages/MasterDropdowns";
import ManageProperty from "./pages/ManageProperty";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/dropdowns" element={<MasterDropdowns />} />
          <Route path="/manage-property" element={<ManageProperty />} />
          <Route path="*" element={<MasterDropdowns />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
