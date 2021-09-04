import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
        <>
        <div className="card my-3" /* style={{width: "20rem"}} */>
        <img src={!imageUrl?"https://bit.ly/3gGwA8b":imageUrl} className="card-img-top" alt="Server error"/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}...</p>
        <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark" target="_blank">Read More</a>
        </div>
        </div>
        </>
        )
    }
} 
export default NewsItem
