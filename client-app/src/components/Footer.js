import React, { Component } from 'react';

const backgroundFooter={
    backgroundColor:'black',
    height:'500px',
    width:'100%'
}
class Footer extends Component {
    render() {
        return (
            <div className="mt-5">
                <div style={backgroundFooter}></div>
            </div>

        );
    }
}

export default Footer;
