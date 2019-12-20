import React, { Component } from 'react'
import TwitterContainer from './Twitter';

export default class Utility extends Component {
    render() {
      return (
        <div className="sticky">
            <img className="ad my-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKEBKxn2UNOx0dt1wFQtNOuot_bn-s6Yo2DFG-QKM0e-2wMirQg&s" alt="" />
            <TwitterContainer />
            <img className="ad my-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCsnBtukj2ILOKleNcNFe1iSoAea-JNXkZNdZn2r9nARjLFXAVDA&s" alt="" />
        </div>
    )
}
}