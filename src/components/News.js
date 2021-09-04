import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProptypes = {
        country: "in",
        pageSize: 8,
        category:'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    handleNextClick = async ()=>{
        if (!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=41c70d32a4914af3b34fc1404ca6654b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        /* this.setState({loading:true}) */
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            page:this.state.page + 1,
            articles: parsedData.articles,
         /*    loading:false */
        })
}
    }

    handlePrevClick = async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=41c70d32a4914af3b34fc1404ca6654b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        /* this.setState({loading:true}) */
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            page:this.state.page - 1,
            articles: parsedData.articles,
           /*  loading:false */
        })
    }

    constructor(){
        super();
        this.state={
            articles: [],
         /*   loading: true, */
            page : 1
        }
    }

     async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=41c70d32a4914af3b34fc1404ca6654b&page=1&pageSize=${this.props.pageSize}`
        /* this.setState({loading:true}) */
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults, /* loading:false */})

    }

    render() {
        return (
            <>
            <h1 className="container my-3 text-center">Todays Top Headlines</h1>
            {/* {this.state.loading && <Spinner/>} */}
            <div className="container my-2">
               <div className="row">
               {this.state.articles.map((element)=>{
                    return(<div className="col-md-3" key = {element.url}>
                    <NewsItem title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>)
                })};
               </div>
            </div>
                <div className="container d-flex justify-content-between my-4">
                    <button disabled ={this.state.page<=1} className="btn btn-sm btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled ={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-sm btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </>
        )
    }
}

export default News
