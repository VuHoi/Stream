import React, { Component } from 'react';

const colorDefault={
    backgroundColor:'#dadada',
}

const colorHover={
    backgroundColor:'#CCE5FF'
}

const imageSize={
    width:'110px',
    padding:'10px',

}
const cardShadow ={
    boxShadow: '5px 8px 16px 5px rgba(0,0,0,0.2)',
    padding:'9px',
    minHeight:'320px'
}
const card={
    padding:'10px',
    minHeight:'320px'
}

class CardInfor extends Component {

    constructor(props){
        super(props);
        this.state={
            isHover:false,

        }

    }


    onMouseEnter(){
        this.setState({
            isHover:true
        })

    }


    onMouseLeave(){
        this.setState({
            isHover:false
        })

    }
    render() {
        return (
            <div style={this.state.isHover?cardShadow:card} onMouseEnter={()=>this.onMouseEnter()} onMouseLeave={()=>this.onMouseLeave()}>
                <div style={{ height:'160px'}} className="row ">
                    <div className="col-sm-12 my-auto  ">

                        <div className="w-50 mx-auto rounded-circle" style={this.state.isHover?colorHover:colorDefault}>

                            <img src={this.props.info.src} style={imageSize} alt={this.props.info.title}/>
                        </div>
                    </div>
                </div>
                <div className="text-center" >
                    <h4 className="text-info">{this.props.info.title}</h4>
                    {this.props.info.content}
                </div>
            </div>
        );
    }
}

export default CardInfor;
