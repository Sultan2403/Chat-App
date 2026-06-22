import { useEffect } from "react";
import "./App.css";
import TestClerk from "./components/clerk-test";
import api from "./apis/api.client";
function App() {
  const test = async () => {
    try {
      const response = await api.post("/protected", { data: "test" });
      console.log("Response from protected route:", response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TestClerk>Lmao What?</TestClerk>
      Okay um
      <button onClick={test}>Test</button>
      <div>Okay much better now :)</div>
    </>
  );
}

export default App;
