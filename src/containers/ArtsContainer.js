import React, { Component } from 'react';
import ArticleCard from '../components/ArticleCard'

class Arts extends Component {
    
    render()
    { 
        const articles = this.props.artArticles
        return ( 
            <div>
                {articles.map((article, index) => (<ArticleCard key={index} article={article}/>))}
            </div>
        );
    }
}
 
export default Arts;