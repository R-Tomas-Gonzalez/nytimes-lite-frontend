import React, { Component } from 'react';
import ArticleCard from '../components/ArticleCard'

class Sports extends Component {
    
    render()
    { 
        const articles = this.props.sportsArticles
        return ( 
            <div className='card-row'>
                {articles.map((article, index) => (<ArticleCard article={article} key={index}/>))}
            </div>
        );
    }
}
 
export default Sports;