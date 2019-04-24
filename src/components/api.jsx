import axios from "axios";

const BaseURL = "https://ncnewsalex.herokuapp.com/api/";

export const fetchApi = async () => {
    const apiObj = await axios.get(BaseURL);
    return apiObj;
};

export const fetchArticles = async () => {
    const articles = await axios.get(BaseURL+'articles');
    return articles;
};

export const fetchTopics = async () => {
    const topics = await axios.get(BaseURL+'topics');
    return topics;
};

 export const fetchAuthors = async () => {
    const articles = await axios.get(BaseURL+'users');
     return articles;
 };
