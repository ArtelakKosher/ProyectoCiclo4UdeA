import { Layout } from "../src/components/layout/Layout";
import ArtelakNavbar from "./components/layout/ArtelakNavbar";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Layout>
        <ArtelakNavbar />
      </Layout>
    </Router>
  );
}
