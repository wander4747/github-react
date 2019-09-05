import React from 'react';


const Search = () => (
    <div className="row">
        <div className="col-md-12">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" className="form-control" placeholder="User" aria-label="User" aria-describedby="basic-addon1"></input>
            </div>
        </div>
    </div>
)

export default Search

