import React from 'react'

const SearchKeyword = (props) => (
    <>
        <h5> Keyword </h5>
        <div className="card">
            <div className="card-body">
                <div className="form-row">
                    <div className="col-10">
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="Type keyword e.g : restaurant's name, location, etc"
                            value={props.keyword}
                            onChange={props.changekeywordHandler}
                        />
                    </div>
                    <div className="col">
                        <button className="btn btn-primary" type="button" onClick={props.onClickAddToCriteria}>
                            Add to criteria
                        </button>
                    </div>
                </div>    
            </div>    
        </div>
    </>
)

export default SearchKeyword