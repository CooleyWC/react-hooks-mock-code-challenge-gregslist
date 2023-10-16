import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  // console.log(searchQuery)


  return (
    <div className="app">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <ListingsContainer searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </div>
  );
}

export default App;
