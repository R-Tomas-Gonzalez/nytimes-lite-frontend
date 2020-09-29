import React from 'react';

const ArticleCard = (props) => {

    console.log(props.article)

    return ( 
        <div>
            {props.article.title}
        </div>
    );
}
 
export default ArticleCard ;