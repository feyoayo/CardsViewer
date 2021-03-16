import React from "react";

const Header = (props) => {

    const [nameValue, setNameValue] = React.useState('');
    const [optionValue, setOptionValue] = React.useState('All')
    const searchSubmit = (e) => {
        e.preventDefault();
        props.updateSearch(nameValue.toLowerCase());
        props.filterHandler(optionValue);
    }

    const selectHandler = (e) => setOptionValue(e.target.value)


    const inputHandler = event => setNameValue(event.target.value)

    return (
        <form onSubmit={(e) => {searchSubmit(e)}}>
            <input value={nameValue} onChange={(event) => {inputHandler(event)}}  type="text"/>
            <select value={optionValue} onChange={selectHandler}>
                <option value='all'>All</option>
                <option value='young'>Before 25</option>
                <option value='mature'>From 25 to 30</option>
                <option value='old'>More than 30</option>
            </select>
            <button>Find user</button>
        </form>
    )
}

export default Header;