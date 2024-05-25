import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Toaster, toast } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (query) => {
    if (query === null) {
      toast.error("Please enter a search word");
    } else {
      setSearchText(query);

      console.log(`Searching for: ${query}`);
    }
  };
  return (
    <>
      <div>
        <SearchBar onSearch={handleSearch} />
        <RotatingLines
          visible={true}
          height="50"
          width="50"
          color="grey"
          strokeColor="black"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
        <ErrorMessage />
        <Toaster position="top-left" reverseOrder={false} />
      </div>
    </>
  );
}

export default App;
