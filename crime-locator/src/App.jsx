import "./App.css";
import CrimeMap from "./CrimeMap";
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
// import SearchForm from "./SearchForm";
import SearchFormC from "./components/SearchFormC";
import Footer from "./components/Footer";
import ColorChart from "./components/ColorChart";

function App() {
  const [submittedValue, setSubmittedValue] = useState("");


  return (
    <div>
      <Header />
      <Intro />
      <SearchFormC
        submittedValue={submittedValue}
        setSubmittedValue={setSubmittedValue}
      />
      {/* <SearchForm
        submittedValue={submittedValue}
        setSubmittedValue={setSubmittedValue}
      /> */}
      <CrimeMap submittedValue={submittedValue} />

      <Footer />
    </div>
  );
}

export default App;

