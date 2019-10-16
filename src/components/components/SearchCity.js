import React from 'react'

const SearchCity = (props) => (
    <div className="row" style={{marginBottom: 30}}>
        <div className="col">
            <h3> Search City </h3>
            <div className="card">
                <div className="card-body">
                    <div className="form-row">
                        <div className="col-11">
                            <input 
                                className="form-control"
                                type="text"
                                placeholder="Type Keyword of City Name"
                                value={props.value}
                                onChange={props.onChangeKeyword}/>
                        </div>
                        <div className="col-1">
                            <button
                                className="btn btn-info"
                                type="button"
                                onClick={props.onClickSearch}
                                disabled={props.disabledStatus}>
                                    Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default SearchCity