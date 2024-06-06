import React, { useState } from "react";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("")

    function searchKeyword(event) {
        event.preventDefault();
        alert(`Searching for the definition of ${keyword}`)
    }

    function updateKeyword(event) {
        setKeyword(event.target.value)
    }
    
    return (
        <div className="Dictionary">
            <form onSubmit={searchKeyword}>
                <input type="search" onChange={updateKeyword}/>
                <input type="submit" />
            </form>
        </div>
    )
}