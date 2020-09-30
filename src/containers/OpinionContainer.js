import React, { Component } from 'react';
import ArticleCard from '../components/ArticleCard'

class Opinion extends Component {
    
    render()

    { 
        console.log(this.props.opinionArticles.multimedia)
        const articles = this.props.opinionArticles
        return ( 
            <div className='card-container'>
                <h2 className='section'>
                    Sunday Review
                </h2>
                <div className='card-row'>
                    {articles.map((article, index) => (<ArticleCard article={article} key={index}/>))}
                </div>
            </div>
        );
    }
}
 
export default Opinion;