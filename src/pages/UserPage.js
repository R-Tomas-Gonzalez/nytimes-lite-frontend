import React, { Component, Fragment } from "react";
import Arts from '../containers/ArtsContainer'
import Opinion from '../containers/OpinionContainer'
import Sports from '../containers/SportsContainer'
import Tech from '../containers/TechContainer'
import Politics from '../containers/PoliticsContainer'
import Header from '../components/Header.js'
import UserFavs from '../containers/UserFavs.js'
import { NavLink } from 'react-router-dom'
import axios from 'axios';



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
          this.fetchUserArticles()
        }

        fetchUserArticles = () => {
          fetch('http://localhost:3001/user_articles')
            .then(resp=>resp.json())
            .then(userArticles=> this.setUserArticles(userArticles))
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
      
        addToFaves = (article) => {
            // this.setState({userArticles: [...this.state.userArticles,article]})
            // console.log(this.props.user.id, article.abstract, 
            //   article.byline, article.title, article.url, article.multimedia[2].url)
          axios.post("http://localhost:3001/user_articles", {
            url: article.url,
            abstract: article.abstract,
            byline: article.byline,
            title: article.title,
            multimedia: article.multimedia[2].url,
            user_id: this.props.user.id
        },
        { withCredentials: true }
        )
        .then(response => {if (this.props.user.id === response.data.user_id){
            this.setState({userArticles: [...this.state.userArticles, response.data]})}
          })
      }
        
        setUserArticles = (userArticles) => {
          const newArticles = userArticles.filter(userArticle => (userArticle.user_id === this.props.user.id))
          this.setState({userArticles: newArticles})
        }

        removeFromFavs = (article) => {
          fetch(`http://localhost:3001/user_articles/${article.id}`, {
            method: 'DELETE',
            headers: {
              Accepts: 'application/json',
              'Content-type': 'application/json'
            }
            })
            this.setState({ userArticles: this.state.userArticles.filter(userArticle => userArticle !== article)})
        }

        handleLogoutClick = () => {
        axios.delete("http://localhost:3001/logout", {withCredentials: true})
        .then(resp=>this.props.handleLogout())
        .catch(error=>console.log('logout error', error))
        
    }

    render(){
return(
  
    <Fragment>
      <div className="nyt-main-header">
        <header className="header-component">
          <NavLink to="/" className='home-login' onClick={() => this.handleLogoutClick()}><span className="login-text"><strong>Sign Out</strong></span></NavLink>
            <div className="content">
              <div className="nytimes-text">THE NEW YORK TIMES <span className="lite">lite</span></div>
            </div>
          <hr className="header-line"/>
        </header>
      </div>

      <div className="all-sections-container">
        <div className="user-faves-container">
          <h2 className="user-faves">User Faves</h2>
          <UserFavs articles={this.state.userArticles} removeFromFavs={this.removeFromFavs}/>
        </div>

        <div className="sections-container">
          <Arts artArticles={this.state.arts} addToFaves={this.addToFaves}/>
          <Opinion opinionArticles={this.state.opinion} addToFaves={this.addToFaves}/>
          <Sports sportsArticles={this.state.sports} addToFaves={this.addToFaves}/>
          <Tech techArticles={this.state.technology} addToFaves={this.addToFaves}/>
          <Politics politicalArticles={this.state.us} addToFaves={this.addToFaves}/>
        </div>
      </div>

    </Fragment>
    )
  }
}

export default UserPage