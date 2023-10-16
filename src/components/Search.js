import React, {useState} from "react";

function Search({searchQuery, setSearchQuery}) {
  const [inputChange, setInputChange] = useState('');


  function handleInputChange(e){
    setInputChange(e.target.value)
    
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchQuery(inputChange)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={inputChange}
        onChange={handleInputChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
