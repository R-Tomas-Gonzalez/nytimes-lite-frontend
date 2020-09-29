import React, { Component } from 'react';
import ArticleCard from '../components/ArticleCard'

class Arts extends Component {
    
    render()
    { 
        const articles = this.props.artArticles
        return ( 
            <div className='artsContainer'>
                {articles.map((article, index) => (<ArticleCard article={article} key={index}/>))}
            </div>
        );
    }
}
 
export default Arts;