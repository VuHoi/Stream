import React, { Component } from 'react';
import '../../assets/styles/css/App.css';
import patternWood from '../../assets/images/patternWood.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm,faAddressBook } from '@fortawesome/free-solid-svg-icons';
const font={
    fontFamily:'ThuphapCongthuy',
    color:'black',

}
class Card extends Component {

    render() {
        let cardF={
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            backgroundImage:`url(${this.props.info.image})`,
            backgroundSize:'cover',
            // height:'480px',
            // transition: 'transform 2s',

        }
        let cardB={
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            backgroundImage:`url(${patternWood})`,
            // backgroundSize:'cover',
            backgroundRepeat:'repeat'
        }
        return (
            // onTouchStart="this.classList.toggle('hover');"
        <div className="flip-container vertical" >
            <div className="flipper">
                <div className="front" style={cardF} >

                </div>
                <div className="back" style={cardB} >
                    <div className="text-center mt-5">
                        <h1 style={font}> {this.props.info.title}</h1>
                        <div className="text-center" >
                            <h4 style={font}>{this.props.info.content}</h4>

                           <div className="text-center">
                             <span className="fixed-bottom h3">
                                 <FontAwesomeIcon  icon={faFilm} /> 1000
                                 <span className="p-2">|</span>
                                 <FontAwesomeIcon  icon={faAddressBook} /> 1000
                             </span>
                           </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        );
    }
}

export default Card;
