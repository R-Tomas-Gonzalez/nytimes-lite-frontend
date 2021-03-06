import React, { Component } from 'react';
import ArticleCard from '../components/ArticleCard'

class Politics extends Component {
    
    render()
    { 
        const articles = this.props.politicalArticles
        return ( 
            <div className='card-container'>
                <h2 className='section'>
                    Politics
                </h2>
                <div className='card-row'>
                    {articles.map((article, index) => (<ArticleCard article={article} multimedia={article.multimedia[2].url} key={index} handleClick={this.props.addToFaves}/>))}
                </div>
            </div>
        );
    }
}
 
export default Politics