const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        onChange={(event) => props.setSearchValue(event.target.value)}
        className="form-control"
        placeholder="type to search ..."
        value={props.value}
      />
    </div>
  );
};
export default SearchBox;
