import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "./App.css";
import Header from "./components/Title";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Authors from "./components/Authors";
import {fetchArticles} from "./components/api";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Nav />
                <Router>
                    <Home path="/" />
                    <TopicsLink path='/topics'/>
                    <ArticlesLink path='/articles'/>
                    <AuthorsLink path='/authors'/>
                </Router>
            </div>
        );
    }
}

export default App;

// components listed below rather than in /components
function Home() {
    
    return (
        <div>
            <Articles /> 
            <Topics /> 
            <Authors />
        </div>
    );
}
function TopicsLink() {
    return (
        <div> 
            <Topics />
        </div>
    );
}
function AuthorsLink() {
    return (
        <div> 
            <Authors />
        </div>
    );
}
function ArticlesLink() {
    return (
        <div> 
            <Articles />
        </div>
    );
}

function Nav() {
    return (<nav>
        <Link to="/">Home</Link>
        <Link to="/topics">TopicsLink</Link>
        <Link to="/articles">ArticlesLink</Link>
        <Link to="/authors">AuthorsLink</Link>
    </nav>)
};

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