import { useState } from "react";
import "./App.css";
import searchImage from "./api";
import ImageList from "./components/ImageList";
import ImageSearch from "./components/ImageSearch";
function App() {
  const [response, setResponse] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImage(term);
    setResponse(result);
  };
  return (
    <div>
      <ImageSearch onSubmit={handleSubmit} />
      <p>
        <ImageList images={response} />
      </p>
    </div>
  );
}

export default App;
