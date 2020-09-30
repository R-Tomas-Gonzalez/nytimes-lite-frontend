import React, { Component } from 'react';
import ArticleCard from '../components/ArticleCard'

class UserFavs extends Component {
render(){
    return(
        <div>
           {this.props.articles.map(article => <ArticleCard article={article} multimedia={article.multimedia} handleClick={this.props.removeFromFavs}/>)}
        </div>
        )
    }
}

export default UserFavs