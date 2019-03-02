import React from 'react';

var noMatch = (props) => {
    var goHome = () => props.history.push("/");
    return <div>Labai gaila, nieko neradome ...
        <button type="button" className="btn btn-primary btn-sm" onClick={goHome}>Grizti i pradzia</button>
    </div>;
};

export default noMatch;