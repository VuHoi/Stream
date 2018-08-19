import React, { Component } from 'react';

const backgroundFooter={
    backgroundColor:'black',
    height:'500px',
    width:'100%'
}



class Footer extends Component {
    callApi = async () => {
        const response = await fetch('/user');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;


    };
    render() {
       this.callApi().then((a)=>{
           console.log(a)
       }) ;
        return (
            <div className="mt-5">
                <div style={backgroundFooter}></div>

            </div>

        );
    }
}

export default Footer;
