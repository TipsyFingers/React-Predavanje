import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.sass';
import './grid.scss';
import Article from '../article';

class News extends Component {
    state = {
        articles : null,
        currentPage : null,
        pageSize : null,
        totalRecords : null,
    }
    
    async getNews(keyword = 'reactjs', page = 1, pageSize = 9) {
        const apiKey = '7511660aa4c34c1481ccedbedcdd64bf';
        // const today = new Date();
        
        // &from=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}
        const url = `https://newsapi.org/v2/everything?q=${keyword}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}&language=en`;

        try {
            const response = await fetch(url, { mode: 'cors' });
            return response.json();
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async componentDidMount() {
        const keyword = this.props.keyword;
        const page = this.props.page;
        const pageSize = this.props.pageSize;
        
        const news = await this.getNews(keyword, page, pageSize);

        const newState = {
            articles : news.articles,
            currentPage : page ? page : 1,
            pageSize : pageSize ? pageSize : 9,
            totalRecords : news.totalResults,
        }

        this.setState(newState);
    }

    async pageClicked(pageNumber) {
        const keyword = this.props.keyword;
        const pageSize = this.props.pageSize;
        
        const news = await this.getNews(keyword, pageNumber, pageSize);
        const newState = {
            articles : news.articles,
            currentPage : pageNumber,
            pageSize : pageSize ? pageSize : 9,
            totalRecords : news.totalResults,
        }
        
        this.setState(newState);
    }

    render () {
        const articles = this.state.articles;

        if (!articles) {
            return <div className ="Card Card--loading"><h2>Loading ...</h2></div>;
        }

        if (articles.message) {
            return <div className="Card Card--error"></div>;
        }

        let articleList = [];
        for (let i = 0; i < articles.length; i++) {
            const article = articles[i];            
            articleList.push(<Article key={i} title={article.title} content={article.content}></Article>);
        }

        const totalPages = Math.floor(this.state.totalRecords / this.state.pageSize) + 1;
        let pages = [];
        for (let i = 1; i <= totalPages;i++) {
            const isCurrentPage = this.state.currentPage === i;
            pages.push(<a key={i} className={isCurrentPage ? 'pager--item pager--item--curr' : 'pager--item'} keys={i} onClick={(e) => this.pageClicked(i)} target="_blank" rel="noopener noreferrer">{i}</a>)
        }

        // TODO: Implement search

        return (
            <div>
                <div>   
                    {/* <input id="txtSearch" className="search--input" type="text" label="Search" placeholder="reactjs"></input><a className="search--button" target="_blank" rel="noopener noreferrer" onClick={(e) => this.searchClicked()}></a> */}
                </div>
                <div className="wrapper">
                    {articleList}
                </div>
                <div className="pager">
                    {pages}
                </div>
            </div>
        );
    }
}

News.propTypes = {
    keyword: PropTypes.string.isRequired,
    page: PropTypes.number,
    pageSize: PropTypes.number,
}

export default News