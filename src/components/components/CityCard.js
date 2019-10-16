import React from 'react'
import { Link } from 'react-router-dom'

const CityCard = (props) => (
    <div className="col-4">
        <div className="card bg-light mb-3">
            <div className="card-body">
                <div className="row">
                    <h3 className="card-title ml-3"> {props.city.name} </h3>
                    <img src={props.city.country_flag_url} className="ml-4 mt-2" width="7%" height="1%" alt="aneka-makanan"></img>
                </div>
                <p> {props.city.country_name} </p>
                <Link to={`/city/${props.city.id}`} className="card-text text-info"> See restaurants in {props.city.name} </Link>
            </div>
        </div>
    </div>
)

export default CityCard