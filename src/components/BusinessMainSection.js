import React from 'react'
import '../styles/BusinessMainSection.css'
import revenueImage from '../images/revenue.png'
import checkMarkImage from '../images/check-mark.png'

function BusinessMainSection() {
    return (
        <div className="center-main-section">

        {/* Section-1-why-list */}

        <div className="section-1-why-list">
            <div className="Heading-text">
                <h1>Why list your restaurant on DeaseApp?</h1>
                <h6>DeaseApp has a network in 500+ cities with over 12 crore customers and more than button for find line text of transform
                    text from image in google 10 lakh orders are delivered per day by our nearly 2 lakhs DeaseApp riders button for find line
                    text of transform text from image in google</h6>
            </div>
            <div className="items_services center">
    
                <div className="row-box">
                  {/* Item One */}
                  <div className="col-md-3 col-9 item_service">
                    <div className="content-box">
                        <div className="icon_service">
                            <img src={revenueImage} alt="box-pic"/>
                          </div>
                          <h3>Increase your revenue</h3>
                          <p>get more orders and footfail
                              for your restaurent</p>
                    </div>
                  </div>
                  {/* Item One */}
      
                  {/* Item Two */}
                  <div className="col-md-3 col-9 item_service">
                    <div className="content-box">
                        <div className="icon_service">
                            <img src={revenueImage} alt="box-pic"/>
                          </div>
                          <h3>Increase your revenue</h3>
                          <p>get more orders and footfail
                              for your restaurent</p>
                    </div>
                  </div>
                  {/* Item Two */}
      
                  {/* Item Three */}
                  <div className="col-md-3 col-9 item_service">
                    <div className="content-box">
                        <div className="icon_service">
                            <img src={revenueImage} alt="box-pic"/>
                          </div>
                          <h3>Increase your revenue</h3>
                          <p>get more orders and footfail
                              for your restaurent</p>
                    </div>
                  </div>
                  {/* Item Three */}
    
                  {/* Item four */}
                  <div className="col-md-3 col-9 item_service">
                    <div className="icon_service">
                        <div className="content-box">
                            <div className="icon_service">
                                <img src={revenueImage} alt="box-pic"/>
                              </div>
                              <h3>Increase your revenue</h3>
                              <p>get more orders and footfail
                                  for your restaurent</p>
                        </div>
                  </div>
                  {/* Item four */}
                </div>
      
              </div>
            </div>
        </div>

        {/* Section-2-how-it-works */}

        <div className="section-2-how-it-works">
            <div className="Heading-text">
                <h1>How it works?</h1>
                <h6>With 3 steps, you can register your restaurent on DeaseApp platform and enjoy the benefits.</h6>
            </div>
            <div className="items_services center">
    
                <div className="row-box">
                  {/* Item One */}
                  <div className="col-md-4 item_service-2">
                    <div className="content-box-2">
                        <div className="icon_service">
                            <img src={revenueImage} alt="box-pic"/>
                          </div>
                          <h3>Increase your revenue</h3>
                          <p>get more orders and footfail
                            for your restaurent.get more orders and footfail
                            for your restaurentget more orders</p>
                    </div>
                  </div>
                  {/* Item One */}
      
                  {/* Item Two */}
                  <div className="col-md-4 item_service-2">
                    <div className="content-box-2">
                        <div className="icon_service">
                            <img src={revenueImage} alt="box-pic"/>
                          </div>
                          <h3>Increase your revenue</h3>
                          <p>get more orders and footfail
                              for your restaurent.get more orders and footfail
                              for your restaurentget more orders</p>
                    </div>
                  </div>
                  {/* Item Two */}
      
                  {/* Item Three */}
                  <div className="col-md-4 item_service-2">
                    <div className="content-box-2">
                        <div className="icon_service">
                            <img src={revenueImage} alt="box-pic"/>
                          </div>
                          <h3>Increase your revenue</h3>
                          <p>get more orders and footfail
                            for your restaurent.get more orders and footfail
                            for your restaurentget more orders</p>
                    </div>
                  </div>
                  {/* Item Three */}
      
              </div>
            </div>
        </div>

        {/* Section-3-advantages-of-joining-us */}

        <div className="section-3-advantages-of-joining-us">
            <div className="Heading-text">
                <h1>Advantages of joining us</h1>
            </div>
            <div className="items_services center">
    
                <div className="row-box">
                  {/* Item One */}
                  <div className="item_service col-md-4 ">
                    <div className="content-box-2">
                        <div className="icon_service">
                            <img src={checkMarkImage} alt="check-mark"/>
                          </div>
                          <h3>More Revenue</h3>
                          <p>With foodpanda, you will gain an
                            additional source of income. Our customers
                            are continually searching the latest cool
                            restaurants in their city.</p>
                    </div>
                  </div>
                  {/* Item One */}
      
                  {/* Item Two */}
                  <div className="item_service col-md-4 ">
                    <div className="content-box-2">
                        <div className="icon_service">
                            <img src={checkMarkImage} alt="check-mark"/>
                          </div>
                          <h3>More Revenue</h3>
                          <p>With foodpanda, you will gain an
                            additional source of income. Our customers
                            are continually searching the latest cool
                            restaurants in their city.</p>
                    </div>
                  </div>
                  {/* Item Two */}
      
                  {/* Item Three */}
                  <div className="item_service col-md-4 ">
                    <div className="content-box-2">
                        <div className="icon_service">
                            <img src={checkMarkImage} alt="check-mark"/>
                          </div>
                          <h3>More Revenue</h3>
                          <p>With foodpanda, you will gain an
                            additional source of income. Our customers
                            are continually searching the latest cool
                            restaurants in their city.</p>
                    </div>
                  </div>
                  {/* Item Three */}
      
              </div>
            </div>
        </div>


        {/* Section-4-Questions */}

        <div className="section-4-Questions">
            <div className="Heading-text">
                <h1>Questions?</h1>
            </div>
            <div className="faq-alignment faq-business">

                {/* content starts here */}

            <button className="title-faq" style={{outline: "0px auto -webkit-focus-ring-color"}}>With 3 steps, you can register your restaurent on DeaseApp platform and enjoy the benefits.</button>
            <div className="faq-content">
        <div className="faq-body">
            Step 1 : Go to your favorite restaurant and take your smartphone with you. You can take a seat at any table you like.,<br/><br/>  
            Step 2: Browse the restaurant’s menu in your preferred language. Select all items you would like to order. <br/><br/>  
            Step 3: Once you’ve made a selection, you can review your selected items. When you press ‘’Order now’’, your order will be sent to the kitchen and will be processed instantly. <br/><br/>  
            Step 4: Your order is placed now. The only thing left to do is to pay and to enjoy! The fastest and easiest way is to make an instant payment from the app. You can, of course, also choose to pay by card, cash or by cheque!
        </div>
            </div>

            <button className="title-faq" style={{outline: "0px auto -webkit-focus-ring-color"}}>With 3 steps, you can register your restaurent on DeaseApp platform and enjoy the benefits.</button>
            <div className="faq-content">
        <div className="faq-body">
            Step 1 : Go to your favorite restaurant and take your smartphone with you. You can take a seat at any table you like.,<br/><br/> 
            Step 2: Browse the restaurant’s menu in your preferred language. Select all items you would like to order. <br/><br/>  
            Step 3: Once you’ve made a selection, you can review your selected items. When you press ‘’Order now’’, your order will be sent to the kitchen and will be processed instantly. <br/><br/>  
            Step 4: Your order is placed now. The only thing left to do is to pay and to enjoy! The fastest and easiest way is to make an instant payment from the app. You can, of course, also choose to pay by card, cash or by cheque!
        </div>
            </div>

            <button className="title-faq" style={{outline: "0px auto -webkit-focus-ring-color"}}>With 3 steps, you can register your restaurent on DeaseApp platform and enjoy the benefits.</button>
            <div className="faq-content">
        <div className="faq-body">
            Step 1 : Go to your favorite restaurant and take your smartphone with you. You can take a seat at any table you like.,<br/><br/> 
            Step 2: Browse the restaurant’s menu in your preferred language. Select all items you would like to order. <br/><br/> 
            Step 3: Once you’ve made a selection, you can review your selected items. When you press ‘’Order now’’, your order will be sent to the kitchen and will be processed instantly. <br/><br/>  
            Step 4: Your order is placed now. The only thing left to do is to pay and to enjoy! The fastest and easiest way is to make an instant payment from the app. You can, of course, also choose to pay by card, cash or by cheque!
        </div>
            </div>

            <button className="title-faq" style={{outline: "0px auto -webkit-focus-ring-color"}}>With 3 steps, you can register your restaurent on DeaseApp platform and enjoy the benefits.</button>
            <div className="faq-content">
        <div className="faq-body">
            Step 1 : Go to your favorite restaurant and take your smartphone with you. You can take a seat at any table you like.,<br/><br/>
            Step 2: Browse the restaurant’s menu in your preferred language. Select all items you would like to order. <br/><br/>  
            Step 3: Once you’ve made a selection, you can review your selected items. When you press ‘’Order now’’, your order will be sent to the kitchen and will be processed instantly. <br/><br/>  
            Step 4: Your order is placed now. The only thing left to do is to pay and to enjoy! The fastest and easiest way is to make an instant payment from the app. You can, of course, also choose to pay by card, cash or by cheque!
        </div>
            </div>

            <button className="title-faq" style={{outline: "0px auto -webkit-focus-ring-color"}}>With 3 steps, you can register your restaurent on DeaseApp platform and enjoy the benefits.</button>
            <div className="faq-content">
        <div className="faq-body">
            Step 1 : Go to your favorite restaurant and take your smartphone with you. You can take a seat at any table you like.,<br/><br/>  
            Step 2: Browse the restaurant’s menu in your preferred language. Select all items you would like to order. <br/><br/>  
            Step 3: Once you’ve made a selection, you can review your selected items. When you press ‘’Order now’’, your order will be sent to the kitchen and will be processed instantly. <br/><br/>  
            Step 4: Your order is placed now. The only thing left to do is to pay and to enjoy! The fastest and easiest way is to make an instant payment from the app. You can, of course, also choose to pay by card, cash or by cheque!
        </div>
            </div>
   
            </div>
        </div>

        {/* Section-5-Want-to-know-more */}

        <hr/>

        <div className="section-5-Want-to-know-more">
            <div className="border-section-5">
                <div className="left-section-5">
                    <h1>Want to know more?</h1>
                    <h6 className="text-contact">Please Leave your contact details and<br/>
                        we'll be in touch within 24 hours</h6>
                    <h6 className="text-query">or send us your query at<br/>
                        <a href="#abc">DeaseApp@gmail.com</a></h6>
                </div>
                <div className="right-section-5">
                    <div className="form-body-business">
                        <div className="content-of-form-business">
                            <div className="form-group-business">
                                <input type="text" className="input-control-business" placeholder="Restaurant name*"/>
                            </div>
                            <div className="form-group-business">
                                <input type="text" className="input-control-business" placeholder="Restaurent location*"/>
                                <span className="input-icon-business"><i className="bi bi-search"></i></span>
                            </div>
                            <div className="form-group-business">
                                
                                <input type="email" className="input-control-business" placeholder="Restaurent contact number*"/>
                            </div>
                            <div className="form-group-business">
                                <textarea className="input-control-business text-area-size-business" placeholder="What do like about the restaurent?"></textarea>
                            </div>
                            
                            <button className="submit-btn-business">Submit</button>
                            
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>

        

    </div>
    )
}

export default BusinessMainSection
