import React, { Component } from 'react';
import ArticleCard from '../components/ArticleCard'

class UserFavs extends Component {
render(){
    return(
        <div>
           {this.props.articles.map(article => <ArticleCard article={article}/>)}
            <p>hey</p>
        </div>
    )
}
}

export default UserFavs