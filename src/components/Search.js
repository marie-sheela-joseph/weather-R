import './Search.css';

function Search({ searchText, handleSearchTextChange, handleSearchSubmit }) {
    return (
        <form onSubmit={(e) => handleSearchSubmit(e)}>
            <div>
                <label
                    htmlFor="searchText">Enter city</label>
                <input
                    value={searchText}
                    onChange={(e) => handleSearchTextChange(e)}
                    id="searchText" />
            </div>
            <button>SUBMIT</button>
        </form>
    );
}
export default Search;