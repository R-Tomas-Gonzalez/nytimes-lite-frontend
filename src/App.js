import React, { Component} from 'react';
import './App.css';

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
        // console.log(sections[4].results)
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

        this.grabArticleSection(arts_section, arts_results)
        this.grabArticleSection(tech_section, tech_results)
        this.grabArticleSection(sunday_section, sunday_results)
        this.grabArticleSection(sports_section, sports_results)
        this.grabArticleSection(politics_section, politics_results)
      })
  }

  grabArticleSection(section, results){
    const newResults = results.filter(result => result.section === section)
       this.setState({[section]: newResults})
  }


  render() { 
    console.log(this.state.arts)
    return ( null );
  }
}
 
export default App;

