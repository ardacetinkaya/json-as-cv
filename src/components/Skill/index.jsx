import React from 'react';
import './style.css';

class Skill extends React.Component {
    getItems = (items,isEven=0) => {
        return items.map(function (item, index) {
            if (index % 2 === isEven) {
                return (
                    <li key={index}>
                        <p>{item.name}</p>
                        <div class="progress plain">
                            <div class="bar" style={{ width: `${item.score}%` }}></div>
                        </div>
                    </li>
                )
            } 
            return '';
        })
    }


    render() {
        return (
            <>
                <div class="date-title">
                    <span>{this.props.title || "Skills"}</span>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="divide10"></div>
                        <ul class="progress-list">
                            {this.getItems(this.props.data.items)}
                        </ul>
                    </div>
                    <div class="col-sm-6">
                        <div class="divide10"></div>
                        <ul class="progress-list">
                            {this.getItems(this.props.data.items,1)}
                        </ul>
                    </div>
                </div>
            </ >
        );

    }
}
export default Skill;