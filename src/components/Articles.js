import React, { Component } from "react";
import PT from "prop-types";
import axios from "axios";
import {fetchArticles} from './api'

class Articles extends Component {
    state = {
             articles: {data: {articles: []}}
           };
    render = () => {
        const { articles } = this.state
        console.log(articles.data.articles,'<<<<<<<<')
        return (
            <section className="Articles">
                <header className="ArticleTitleBox">Articles</header>
                <input
                    className="SearchBarAndButton"
                    placeholder="Search Article Name"
                />
                <button id="Articles Button" className="SearchBarAndButton">
                    {" "}
                    See All Articles
                </button>
                <table className="Article-Table">
                    <tbody>
                        {articles.data.articles.map(article => {
                            return (
                                <tr>
                                    <td className="Article-Table">
                                        {article.title}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        );
    };

    componentDidMount() {
        fetchArticles().then(articles => {this.setState({articles})})
    }

}

Articles.propTypes = {
    headerText: PT.string.isRequired
};

export default Articles;
// NC-Paul Copley3:27 PM
// Notes on the state and compionent did mount from Paul
// import React, { Component } from 'react';
// import ArticleCard from './ArticleCard';
// import * as api from '../api';

// class Articles extends Component {
//   state = {
//     articles: []
//   };
//   render() {
//     const { articles } = this.state;
//     return (
//       <div>
//         <h2>All articles</h2>
//         {articles.map(article => (
//           <ArticleCard key={article.article_id} article={article} />
//         ))}
//       </div>
//     );
//   }

//   componentDidMount() {
//     this.fetchArticles();
//   }

//   fetchArticles = () => {
//     api
//       .getArticles()
//       .then(articles => {
//         this.setState({
//           articles
//         });
//       })
//       .catch(console.log);
//   };
// }

// export default Articles;

// // api.js
// import axios from 'axios';

// const BASE_URL = `https://nc-knews-api-example.herokuapp.com/api`;

// export const getArticles = async queries => {
//   const { data } = await axios.get(`${BASE_URL}/articles`);
//   return data.articles;
// };
