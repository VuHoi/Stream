import React, { Component } from 'react';

const img={

    margin:'0px',
    padding:'0px',
    borderRadius:'5px'

}
class CardNews extends Component {


    render() {
        return (
            <div className="mt-1 ml-1">
<div className="row">
    <div className="col-3" style={{ minHeight:'100px', }}>
        <img style={img}   src={this.props.news.image} alt={this.props.news.title}/>
    </div>
    <div className="col-9" style={{ minHeight:'100px',padding:'10px'}}>

            <h4>{this.props.news.title}</h4>

        <div>{this.props.news.content}</div>
    </div>
</div>
            </div>

        );
    }
}

export default CardNews;
