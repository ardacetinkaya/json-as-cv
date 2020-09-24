import React from 'react';
import './style.css';
class Info extends React.Component {
    componentDidMount() {
        document.title = this.props.data.name;
        var headID = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.type = "text/css";
        link.rel = "stylesheet";
        headID.appendChild(link);
        link.href = "style/css/color/red.css";
    }
    render() {
        return (
            <div class="section-title text-left">
                <h1 class="pull-left">{this.props.data.name}</h1>
                {this.props.data.file ? <a href={`${this.props.data.file}`} class="btn btn-navy btn-icon pull-right"><i class="jam jam-download"></i> Download</a> : ""}
                <div class="clearfix"></div>
                <ul class="info list-inline">
                    {this.props.data.email ? <li><i class="icon-mail"></i> {this.props.data.email.replace('@', '[at]')}</li> : ""}
                </ul>
                <div class="clearfix"></div>
                <ul class="info list-inline">
                    {this.props.data.www ? <li> <a href={`${this.props.data.www}`} ><i class="jam jam-world social"></i> </a></li> : ""}
                    {this.props.data.github ? <li> <a href={`https://github.com/${this.props.data.github}`} ><i class="jam jam-github social"></i></a></li> : ""}
                    {this.props.data.linkedin ? <li> <a href={`https://github.com/${this.props.data.linkedin}`} ><i class="jam jam-linkedin social"></i></a></li> : ""}
                </ul>
                <p class="lead">{this.props.data.description}</p>

            </div>
        );
    }
}

export default Info;