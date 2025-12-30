import { Component } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";
import {footerData, offerData} from "./data";

class KfcFile extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <>
            <Navbar />
            <Main />
            <h1 style={{marginLeft:"50px"}}>SAVE MORE AS YOU ORDER</h1>
            <div>

                <div style={{display:"flex", gap:"10px"}}>
                
                {offerData.map(data=>
                <About src={data.image}
                   title={data.title}
                   min={data.minOrder}
                   button={data.buttonText}
                />
            )}
            </div>
            </div>
            <Footer />
           
        </>
    }
}
export default KfcFile;