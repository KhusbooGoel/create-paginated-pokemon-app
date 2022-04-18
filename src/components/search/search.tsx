import React from "react";
//import "./search.styles.css";

interface SearchProps {
  placeholder: string;
  handleChange: (event: any) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder, handleChange }) => {
return (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
}
export default Search;
