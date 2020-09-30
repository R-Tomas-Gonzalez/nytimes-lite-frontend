import React, { Component } from 'react';
import ArticleCard from '../components/ArticleCard'

class Tech extends Component {
    
    render()
    { 
        const articles = this.props.techArticles
        return ( 
            <div className='card-container'>
                <h2 className='section'>
                    Tech
                </h2>
                <div className='card-row'>
                    {articles.map((article, index) => (<ArticleCard article={article} key={index}/>))}
                </div>
            </div>
        );
    }
}
 
export default Tech;