import { Component } from "react";
import { footerData } from "../data";

class Footer extends Component{
  constructor(props){
    super(props)
  }
    render() {
    return (
      <>
        <footer id="footer">
          <div className="footer_container">

        
            <div className="footer_logo">
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg?h=120&w=120&fm=webp&fit=fill"
                alt="KFC"
              />
            </div>

           {
            footerData.map(data => 
              <div className="footer_column">
              <h4>{data.title}</h4>
              <ul style={{listStyle:"none"}}>
                  {data.links.map(data => 
                    <li><p>{data}</p></li>
                  )}
              </ul>
              
            </div>

            )
           }
            
           <div className="footer_column location">
              <h4>Find a KFC</h4>
              <p>📍 Find a KFC</p>
            </div>

           
            <div className="footer_apps">
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg?h=90&w=266&fm=webp&fit=fill"
                alt="Google Play"
              />
              <img
                src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg?h=90&w=266&fm=webp&fit=fill"
                alt="App Store"
              />
            </div>

          </div>

          
          <div className="footer_bottom">
            <p>
              Copyright © KFC Corporation 2025 All rights reserved
            </p>

            <div className="social_icons">
              <span>📷</span>
              <span>🐦</span>
              <span>📘</span>
            </div>
          </div>
        </footer>
      </>
    );
  }
} 
export default Footer;