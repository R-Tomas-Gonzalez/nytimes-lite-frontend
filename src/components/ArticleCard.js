import React from 'react';


// abstract
// byline
// title
// url
// multimedia index 0


const ArticleCard = (props) => {

    const {abstract, byline, title, url} = props.article
    const imageUrl = props.article.multimedia[2].url
    console.log(props)

    return ( 
        <div className="ui column">
            <div className="ui-card" key={null} onClick={null}>
                <div className="image">
                    <img alt="nyt-image" src={imageUrl} />
                </div>
                <div className="content">
                    <div className="title">
                        {title}
                    </div>
                    <div className="byline">
                        <small>{byline}</small>
                    </div>
                    <div>
                        {abstract}
                    </div>
                    <a href={url}>Read more...</a>
                </div>
            </div>
        </div>
    //     <div className="ui column">
    //   <div
    //     className="ui card"
    //     key={props.bot.id}
    //     onClick={() => props.handleClick(props.bot)}
    //   >
    //     <div className="image">
    //       <img alt="oh no!" src={props.bot.avatar_url} />
    //     </div>
    //     <div className="content">
    //       <div className="header">
    //         {props.bot.name}
    //         <i className={botTypeClasses[props.bot.bot_class]} />
    //       </div>
    //       <div className="meta text-wrap">
    //         <small>{props.bot.catchphrase}</small>
    //       </div>
    //     </div>
    //     <div className="extra content">
    //       <span>
    //         <i className="icon heartbeat" />
    //         {props.bot.health}
    //       </span>

    //       <span>
    //         <i className="icon lightning" />
    //         {props.bot.damage}
    //       </span>
    //       <span>
    //         <i className="icon shield" />
    //         {props.bot.armor}
    //       </span>
    //       <span>
    //         <div className="ui center aligned segment basic">
    //           <button
    //             className="ui mini red button"
    //             onClick={(e) => {
    //               e.stopPropagation();
    //               props.dischargeBot(props.bot)
    //             }}
    //           >
    //             x
    //           </button>
    //         </div>
    //       </span>
    //     </div>
    //   </div>
    // </div>
    );
}
 
export default ArticleCard ;