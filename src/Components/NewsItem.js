import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imgurl, newsurl, author, date ,source} = props;
    return (
      <div className="my-3">
        <div className="card" style={ { width: "18rem" } }>
          <div style={ {
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right:'0'
          }}>
          <span class="badge rounded-pill bg-danger" style={{left:'90%'  , zIndex:'1'}}>
            {source}
            <span class="visually-hidden">unread messages</span>
            </span>
          </div>

          <img
            src={
              imgurl
                ? imgurl
                : "https://media.istockphoto.com/id/838039606/photo/bukchon-hanok-village-with-modern-building-in-seoul-south-korea.jpg?s=1024x1024&w=is&k=20&c=qLtCqAfOBLcv0VNS6CmpZek2jutjIOPpONPYeOAHBb8="
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
            {/* <span class="badge text-bg-secondary">New</span> */}
          </div>
          <p class="card-text mx-5">
            <small class="text-body-secondary">
              Author : {author ? author : "Unknown"}
            </small>
          </p>
          <p class="card-text mx-5">
            <small class="text-body-secondary">
              Date : {new Date(date).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    );
  
}

export default NewsItem;
