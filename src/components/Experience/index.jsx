import React from 'react';
import './style.css';

class Experience extends React.Component {

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
                                <i class="jam jam-building company-icon"></i>

                            </figure>
                        </div>
                        <div class="col-sm-9">
                            <h4 class="post-title"> {(item.companyURL)?<a href={`${item.companyURL}`} target="_blank" rel="noopener noreferrer">{item.companyName}  <i class="jam jam-link"></i></a>:item.companyName}</h4>
                            <div class="meta">
                                <span class="date">{item.start?item.start:"???"} - { item.end ? item.end:"Present"}</span>
                                <span class="category">{item.role}</span>
                            </div>
                            {item.description.map(function(line,index) {
                                  return (<p class="leadsmall" key={index}>{line}</p>);
                            })}
                          
                            <div class="meta small">
                                <ul class="info list-inline">
                                    {item.tags.map(function(tag,index){
                                        return(
                                            <li key={index}>#{tag}</li>
                                        );
                                    })}
                                </ul>
                            </div>
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
                    <span>{this.props.data.title || "Experiences"}</span>
                </div>
                <div class="row">
                    {this.getItems(this.props.data.items)}
                </div>
            </ >
        );
    }
}
export default Experience;