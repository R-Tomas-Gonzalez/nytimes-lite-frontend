import React, { Component } from 'react';
import ArticleCard from '../components/ArticleCard'

class Politics extends Component {
    
    render()
    { 
        const articles = this.props.politicalArticles
        return ( 
            <div className='card-row'>
                {articles.map((article, index) => (<ArticleCard article={article} key={index}/>))}
            </div>
        );
    }
}
 
export default Politics