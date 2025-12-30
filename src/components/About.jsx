import { Component } from "react";
import {offerData, footerData} from "../data";

class About extends Component{
   render(){
    return <>
        <div>
        <div id="offers_section">
          

            <div className="offers_container">
                <div className="offer_card">
                    <img
                        src={this.props.src}
                        alt=""
                        style={{width:"200px"}}
                    />
                    <h2>{this.props.title}</h2>
                    <p>{this.props.min}</p>
                    <button>{this.props.button}</button>
                </div>
            </div>
        </div>       
    </div>
    </>
   }
}
export default About;