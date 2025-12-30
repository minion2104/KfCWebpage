import { Component } from "react";

class Navbar extends Component{
    render(){
        return <>
            <ul className="list">
                <li><img id="image" src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="" /></li>
                <li className="menuDeals" id="menu">Menu</li>
                <li className="menuDeals">Deals</li>
                <li><i className="fa-solid fa-user"></i>Sign In</li>
                <li><img id="bucket" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXuKWl7tkt7fm1swhAuVyQx0BUrgro41NIjA&s" alt="" /></li>
            </ul>
            <div id="info">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN <button id="button">Start Order</button></div>
        </>
    }
}
export default Navbar