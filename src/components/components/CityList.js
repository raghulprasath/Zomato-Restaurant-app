import React from 'react'

import CityCard from './CityCard'

const CityList = (props) => (
    <>
        <div className="row">
            <div className="col-12">
                <h3 className="mt-3"> {props.title} </h3>
                {props.showSubtittle === true && props.subtittle !== '' &&
                    <h6 className="text-muted"> Search result for keyword `{props.subtittle}` </h6> 
                }
            </div>
        </div>
        <div className="row">
            {props.cities == null ? (
                <div className="col">
                    <p> Loading... </p>
                </div>
            ) : (
                _renderCityList(props.cities)
            )}
        </div>
    </>
)

const _renderCityList = (cities)  => {
    if(cities.length > 0 ) {
        return (
            cities.map(city => 
                <CityCard key={city.id} city={city} />    
            )
        )
    } else {
        return (
            <div className="col">
                <p className="text-primary"> Data not found </p>
            </div>
        )
    }
}

export default CityList