import React, { Component } from "react";
import Arts from '../containers/ArtsContainer'
import Opinion from '../containers/OpinionContainer'
import Sports from '../containers/SportsContainer'
import Tech from '../containers/TechContainer'
import Politics from '../containers/PoliticsContainer'
import Header from '../components/Header.js'
import UserFavs from '../containers/UserFavs.js'
import { NavLink } from 'react-router-dom'



const key = process.env.REACT_APP_API_KEY

const urls = [
`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${key}`,
`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${key}`,
`https://api.nytimes.com/svc/topstories/v2/sundayreview.json?api-key=${key}`,
`https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${key}`,
`https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=${key}`,
]
class UserPage extends Component{
   state = { 
          arts: [],
          technology: [],
          opinion: [],
          sports: [],
          us: [],
          userArticles: []
        }
    
      
        componentDidMount = () => {
          this.fetchArticles()
        }
      
        fetchArticles = () => {
          Promise.all(urls.map(url => 
            fetch(url)
            .then(resp=>resp.json())
            ))
            .then(sections => {
             
              const arts_results = sections[0].results;
              const arts_section = 'arts';
              const tech_results = sections[1].results;
              const tech_section = 'technology';
              const sunday_results = sections[2].results;
              const sunday_section = 'opinion';
              const sports_results = sections[3].results;
              const sports_section = 'sports';
              const politics_results = sections[4].results;
              const politics_section = 'us';
      
              function grabArticleSection(section, results){
                const newResults = results.filter(result => result.section === section)
                   return newResults.filter(result => result.multimedia != null)
              }
            
              this.setState({
                arts: grabArticleSection(arts_section, arts_results), 
                technology: grabArticleSection(tech_section, tech_results),
                opinion: grabArticleSection(sunday_section, sunday_results),
                sports: grabArticleSection(sports_section, sports_results),
                us: grabArticleSection(politics_section, politics_results)
              })
      
            })
        }
      
        addToFavs = (article) => {
            this.setState({userArticles: [...this.state.userArticles,article]})
        }

    render(){
return(
    
    <div>
        
      <div className="nyt-main-header">
      <header className="header-component">
                <NavLink to="/" className='home-login' ><span className="login-text"><strong>Sign Out</strong></span></NavLink>
                <div className="content">
                <div className="nytimes-text">THE NEW YORK TIMES <span className="lite">lite</span></div>
                </div>
                <hr className="header-line"/>
            </header>
        </div>
            <div className="side-bar">
                <h2>User Favs</h2>
                <UserFavs articles={this.state.userArticles}/>
            </div>
    <Arts artArticles={this.state.arts} addToFavs={this.addToFavs}/>
    
    <Opinion opinionArticles={this.state.opinion} addToFavs={this.addToFavs}/>
    
    <Sports sportsArticles={this.state.sports} addToFavs={this.addToFavs}/>
    
    <Tech techArticles={this.state.technology} addToFavs={this.addToFavs}/>
   
    <Politics politicalArticles={this.state.us} addToFavs={this.addToFavs}/>
    
    </div>
)
}
}

export default UserPage