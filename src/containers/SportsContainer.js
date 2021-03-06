import React, { Component } from 'react';
import ArticleCard from '../components/ArticleCard'

class Sports extends Component {
    
    render()
    { 
        const articles = this.props.sportsArticles
        return ( 
            <div className='card-container'>
                <h2 className='section'>
                    Sports
                </h2>
                <div className='card-row'>
                    {articles.map((article, index) => (<ArticleCard article={article} multimedia={article.multimedia[2].url} key={index} handleClick={this.props.addToFaves}/>))}
                </div>
            </div>
        );
    }
}
 
export default Sports;