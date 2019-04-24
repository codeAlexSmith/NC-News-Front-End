import React, { Component } from "react";
import PT from "prop-types";
import { fetchTopics } from "./api";

class Topics extends Component {
    state = { topics: {data: {topics : [] }}};
    
    render() {
        const topics = this.state.topics.data.topics; 
        return (
            <section className="Topics">
                <input
                    className="SearchBarAndButton"
                    placeholder="Search Topics"
                />
                <button id="Topics Button" className="SearchBarAndButton">
                    Topics
                </button>
                <table className="Topics-Table">
                    <tbody>
                        {topics.map(topic => {
                            return (
                                <tr>
                                    <td className="Article-Table">
                                        {topic.slug}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        );
    }

    componentDidMount() {
        fetchTopics().then(topics => {
            this.setState({topics});
        });
    }
}

Topics.propTypes = {
    headerText: PT.string.isRequired
};

export default Topics;
