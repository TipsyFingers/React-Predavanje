import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.sass';

class Article extends Component {
    render() {        
        return (
            <div className="column-4">
                <div className="article">
                    <h3 className="article--title">{this.props.title}</h3>
                    <div className="article--content">{this.props.content}</div>
                </div>                
            </div>
        );
    }
}

Article.propTypes = {
    title : PropTypes.string.isRequired,
    content : PropTypes.string,
    sourceName : PropTypes.string,
    sourceUrl : PropTypes.string,
    imageUrl : PropTypes.string,
}

export default Article

// author: "fabienjuif"
// content: "k-ramel State manager for your app components, the safe and easy way. Why should you give it a try ? Because k-ramel : is fast is immutable is modular encourages to decouple UI and state management encourages to not have side effect into your business logic h… [+1349 chars]"
// description: "Article URL: https://github.com/alakarteio/k-ramel Comments URL: https://article.ycombinator.com/item?id=18694234 Points: 1 # Comments: 2"
// publishedAt: "2018-12-16T18:11:48Z"
// source: {id: null, name: "Github.com"}
// title: "Show HN: K-ramel (JS state manager, be productive)"
// url: "https://github.com/alakarteio/k-ramel"
// urlToImage: "https://avatars1.githubusercontent.com/u/26111459?s=400&v=4"