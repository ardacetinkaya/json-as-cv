import React from 'react';
import './style.css';

class Repository extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            repositories: [],
        };
    }
    getGitHubRepositories = (username) => {

        if (username) {
            fetch(`https://api.github.com/users/${username}/repos`)
                .then(resp => resp.json())
                .then((data) => {
                    this.setState({
                        repositories: data
                    })
                });
            let repositories = this.state.repositories.filter(this.repositoryFilters).sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at));
            return repositories.slice(0,5).map(function (item, index) {
                return (
                    <div key={index} class={`col-sm-6 timeline-item ${(index % 2 === 0) ? 'left' : 'right'}`}>
                        <div class="arrow"></div>
                        <div class="post-content">
                            <div class="row">
                                <div class="col-sm-3">
                                    <figure>
                                        <div class="text-overlay">
                                            <div class="info"></div>
                                        </div>
                                        <i class="jam jam-github github-icon"></i>

                                    </figure>
                                </div>
                                <div class="col-sm-9">
                                    <h4 class="post-title"> {(item.html_url) ? <a href={`${item.html_url}`} target="_blank" rel="noopener noreferrer">{item.name}  <i class="jam jam-link"></i></a> : item.name}</h4>
                                    <div class="meta">
                                        <span class="date"><i class="jam jam-star"></i>  {item.stargazers_count}</span>
                                        <span class="category">{item.language}</span>
                                    </div>
                                    <p class="leadsmall" key={index}>{item.description}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            });
        }
    }
    repositoryFilters = (item) => {
        return item.fork !==true && item.description!==null && item.stargazers_count >0;
    }

    render() {
        if (this.props.data) {
            return (

                <>
                    <div class="date-title">
                        <span>GitHub 5 Repositories</span>
                    </div>
                    <div class="row">
                        {this.getGitHubRepositories(this.props.data)}
                    </div>
                    <div class="date-title">
                        <a href={`https://github.com/${this.props.data}`} target="_blank" rel="noopener noreferrer"> <span class="all-repositories"><i class="jam jam-link"></i> Check all repositories</span></a>
                    </div>
                </ >
            );
        } else {
            return '';
        }
    }
}
export default Repository;