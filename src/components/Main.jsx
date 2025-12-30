import { Component } from "react";

class Main extends Component{
    render(){
        return <>
            <div id="page">
                <h1 id="main_heading">BROWSE MENU CATEGORIES</h1>
            <div id="main_container">
                <div className="images_div" id="first_div">
                    <img src="https://images.ctfassets.net/wtodlh47qxpt/wAKmOMcpTm0yfspLrl20B/a49799960b22ba96b733f54971d96825/KFC-category-EPIC-Bucket-1_All-in-one-bucket-delivery_-28th-JAN_1.jpg?fm=webp&fit=fill" alt="" />
                    <br />
                    <h1>EPIC BUCKET OF THE DAY</h1>
                    </div>
                <div className="images_div" id="second_div">
                    <div>
                        <img className="image_class" src="https://images.ctfassets.net/wtodlh47qxpt/4AcPJzGNNxfXiF1rWvlydj/2a8548a717ff678fbfb0d881b7367ba8/KFC-Gold-Burger-White-Category-23MAY_4.jpg?fm=webp&fit=fill" alt="" />
                        <h1>GOLD EDITION</h1>
                    </div>
                    <div>
                        <img className="image_class" src="https://images.ctfassets.net/wtodlh47qxpt/7zQ4a4xD9BW9Qyl03WlTqR/bbcea04b544b8700ea7fe7834d85feb7/KFC-Box-Meals.jpg?fm=webp&fit=fill" alt="" />
                        <h1>BOX MEALS</h1>
                    </div>
                    <div>
                        <img className="image_class" src="https://images.ctfassets.net/wtodlh47qxpt/5iYMlSgO8gr09Rjbn185qs/8f330ee5eb94ba4eff4f4552e361218d/KFC-Variety-Bucket.jpg?fm=webp&fit=fill" alt="" />
                        <h1>VARIETY BUCKETS</h1>
                    </div>
                    <div>
                        <img className="image_class" src="https://images.ctfassets.net/wtodlh47qxpt/169o6qKazOgakFLMKkHUGY/d9d657af816a140bdaf3f5a7d64e3ef7/KFC-Veg.jpg?fm=webp&fit=fill" alt="" />
                        <h1>VEG</h1>
                    </div>
                </div>
            </div>
            <div id="items">
                <div className="child_div">
                     <img className="items_class" src="https://images.ctfassets.net/wtodlh47qxpt/2A4wJjZ8ZvCyj7RSxI3iTk/f403b8ceb2f120bf7ef36d5a913ddf6f/KFC-White-Chicken-Bucket.jpg?fm=webp&fit=fill" alt="" />
                     <h1 className="iten_content">CHICKEN BUCKETS</h1>
                </div>
                <div className="child_div">
                    <img className="items_class" src="https://images.ctfassets.net/wtodlh47qxpt/3NdeHBtjjYPHMAoOTpEZ0w/d6c6fadd15bcfa8f6bc969aa02207f0c/KFC-Burger.jpg?fm=webp&fit=fill" alt="" />
                    <h1 className="iten_content">BURGERS</h1>
                </div>
                <div className="child_div">
                    <img className="items_class" src="https://images.ctfassets.net/wtodlh47qxpt/5VQAImh8fghx8cYtmjRBxu/050c6b65545546ecca314321a5dddc15/CAT89?fm=webp&fit=fill" alt="" />
                    <h1 className="iten_content">SNACKS</h1>
                </div>
                <div className="child_div">
                       <img className="items_class" src="https://images.ctfassets.net/wtodlh47qxpt/7tEmaFwdTOKmVNf724nD21/cb386eac4c508bce817d3daa22a1d3b6/KFC-rice-bowl.jpg?fm=webp&fit=fill" alt="" />
                    <h1 className="iten_content">RICE BOWLZ</h1>
                </div>
                
            </div>
            <div id="promo_section">
                <div className="promo_left">
                    <img src="https://images.ctfassets.net/wtodlh47qxpt/1cS5c1DDcmYuwT0g2edC3f/48712d8b753b8cb6c6abd662398fec70/KFC-Beverages.jpg?fm=webp&fit=fill" alt="" />
                    <h1>BEVERAGE AND DESSERT</h1>
                </div>
                <div className="promo_right">
                    <img id="its_img" src="https://online.kfc.co.in/static/media/Finger_lickInDesk.a7d05386.svg" alt="" />
                </div>
            </div>

            
            
          

            </div>
        </>
    }
}
export default Main;