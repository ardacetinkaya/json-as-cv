import React from 'react';
import './style.css';

class Language extends React.Component {
    getItems = (items) => {
        return items.map(function (item, index) {
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.proficiency}</td>
                </tr>
            );
        })
    }


    render() {
        return (
            <>
                <div class="date-title">
                    <span>{this.props.data.title || "Language Proficiency"}</span>
                </div>
                <div class="row">
                    <div class="col-sm-12 timeline-item full">
                        <div class="divide10"></div>
                        <div class="post-content">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Language</th>
                                            <th>Proficiency</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.getItems(this.props.data.items)}
                                    </tbody>

                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </ >
        );

    }
}
export default Language;