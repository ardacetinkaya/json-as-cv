import React from 'react';
import './style.css';

class Education extends React.Component {
    getItems = (items) => {
        return items.map(function (item,index) {
            return(
            <div key={index} class={`col-sm-6 timeline-item ${(index%2===0)?'left':'right'}`}>
                <div class="arrow"></div>
                <div class="post-content">
                    <div class="row">
                        <div class="col-sm-3">
                            <figure>
                                <div class="text-overlay">
                                    <div class="info"></div>
                                </div>
                                <i class="jam jam-shield school-icon"></i>
                            </figure>
                        </div>
                        <div class="col-sm-9">
                        <h4 class="post-title"> {(item.schoolURL)?<a href={`${item.schoolURL}`} target="_blank" rel="noopener noreferrer">{item.schoolName}  <i class="jam jam-link"></i></a>:item.schoolName}</h4>
                            <div class="meta">
                                <span class="date">{item.start?item.start:"???"} - { item.end ? item.end:"Present"}</span>
                            </div>   
                            <p class="leadsmall">{item.department}</p>                       
                        </div>
                    </div>
                </div>
            </div>
            )
        })
    }

    render() {
        return (
            <>
                <div class="date-title">
                    <span>{this.props.data.name || "Education"}</span>
                </div>
                <div class="row">
                    {this.getItems(this.props.data.items)}
                </div>
            </ >
        );

    }
}
export default Education;