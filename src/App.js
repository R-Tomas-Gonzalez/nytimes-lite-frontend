import React, { Component} from 'react';
import './App.css';
import Arts from './containers/ArtsContainer'

const key = process.env.REACT_APP_API_KEY

const urls = [
`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${key}`,
`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${key}`,
`https://api.nytimes.com/svc/topstories/v2/sundayreview.json?api-key=${key}`,
`https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${key}`,
`https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=${key}`,
]


class App extends Component {
  state = { 
    arts: [],
    technology: [],
    opinion: [],
    sports: [],
    us: [],
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
             return newResults
        }
      
        this.setState({
          arts: grabArticleSection(arts_section, arts_results), 
          technology: grabArticleSection(tech_section, tech_results),
          opinion: grabArticleSection(sunday_section, sunday_results),
          sunday: grabArticleSection(sunday_section, sunday_results),
          sports: grabArticleSection(sports_section, sports_results),
          us: grabArticleSection(politics_section, politics_results)
        })

      })
  }

  render() {
    return (
      <div>
        <Arts artArticles={this.state.arts} />
      </div>
    );
  }
}
 
export default App;

