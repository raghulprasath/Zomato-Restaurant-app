import React, {Component} from 'react'
import axios from 'axios'
import { API } from '../config/api'

import ImageAndWelcome from '../components/ImageAndWelcome'
import CityList from '../components/CityList'
import SearchCity from '../components/SearchCity'

class Home extends Component {

    constructor(){
        super()
        this.state = {
          keyword: '',
          citiesSearchResult: null,
          featuredCities: null,
          cityKeywordSearch: '',
          buttonDisabled: false
        }
      }
    
    changeKeywordHandler = (event) => {
        this.setState({ keyword: event.target.value })
    }

    getFeaturedCities = () => {
        var url = `${API.zomato.base_url}/cities`
        axios.get(url, {
            headers: {
                'user-key': `${API.zomato.api_key}`
            },
            params: {
                city_ids: "74,61,10713"
            }
        })
        .then(({data}) => {
            if(data.status === "success"){
                this.setState({ featuredCities: data.location_suggestions})
                console.log(this.state.featuredCities)
            }
        })
        .catch(err => console.log(err))
    }

    searchHandler = () => {
        let keyword = this.state.keyword
        var url = `${API.zomato.base_url}/cities`
        axios.get(url, {
            headers: {
                'user-key': `${API.zomato.api_key}`
            },
            params: {
                q: keyword
            }
        })
        .then(({ data }) => {
            if(data.status === 'success'){
                this.setState({ 
                    citiesSearchResult: data.location_suggestions, 
                    keyword: '',
                    cityKeywordSearch: keyword    
                })
                if(this.state.citiesSearchResult === null ) {
                    this.setState({ buttonDisabled: true })
                }
            }
        })
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getFeaturedCities()
    }

    render(){
        const citiesDummy = [
            {
              id: 72,
              name: "Jakarta",
              country_name : "Indonesia"      
            },
            {
              id: 11052,
              name: "Bandung",
              country_name: "Indoensia"
            },
            {
              id: 170,
              name: "Bali",
              country_name: "Indoensia"
            }
          ]
        return(
            <>
                <ImageAndWelcome />
                <div className="container" style={{marinTop: 30, marginBottom: 30}}>
                    <CityList title={"Featured Cities"} cities={this.state.featuredCities} />
                    <SearchCity disabledStatus={this.state.buttonDisabled} value={this.state.keyword} onChangeKeyword={this.changeKeywordHandler} onClickSearch={this.searchHandler} />
                    {
                        this.state.cityKeywordSearch !== '' ?
                        <CityList title={"Search Result"} showSubtittle={true} subtittle={this.state.cityKeywordSearch} cities={this.state.citiesSearchResult} />
                        :
                        null
                    }
                </div>
            </>
        )
    }
}

export default Home