function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search by name or student ID"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;