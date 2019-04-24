import React, { Component } from "react";
import PT from "prop-types";
import {fetchAuthors} from './api';

class Authors extends Component {
    state = {authors: {data: {users: [] }}}
    render() {
        const users = this.state.authors.data.users
        console.log(users, '<<tnbviutb')
        return (
            <section className="Authors">
                <input
                    placeholder="Search Author"
                    className="SearchBarAndButton"
                />
                <button id="Authors Button" className="SearchBarAndButton">
                    See All Authors
                </button>
                <table>
                    <tbody>
                        {users.map(user => {
                            return (
                                <tr>
                                    <td className="Article-Table">
                                        {user.username}
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
        fetchAuthors().then(authors => {
            this.setState({authors});
        });
    }
}

Authors.propTypes = {
    headerText: PT.string.isRequired
};

export default Authors;
