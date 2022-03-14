import React from "react";
import "../styles/AboutUsPage.css";
import bgImage from "../images/about_us_banner.jpg";
import foodImage from "../images/about-us-food-pic.jpg";
import smartPayImage from "../images/about-us-smart-pay.jpg";
import offersImage from "../images/about-us-offers-img.jpg";
import teamImage from "../images/about-us-group-img.jpg";

export default function AboutUsPage() {
  return (
    <div>
      <div className="dashboard_image-AboutUs">
        <img alt="dashboard_image" src={bgImage} />

        <div className="text-about-us">
          <h6>ABOUT US</h6>
        </div>
      </div>


      <div  className="container aboutUs-M-T">
        <div className="story-section">
            <h2>Our story</h2>
            <p>We have always been obsessed with pre-empting and fulfilling the wants of today’s diner.
                In 2012, it simply meant allowing diners to reserve a guaranteed table at the top restaurants in the city.
                In 2018, we has evolved to providing multiple benefits on one platform for all dining out needs.
             </p>
             <ul>
                <li>Connecting diners to the best-in-the-city restaurant discounts &amp; deals</li>
                <li>Giving diners a cashless payment experience across restaurants &amp; an opportunity to earn cashback on every payment</li>
                <li>A unique membership - DeaseApp Passport - with massive benefits for the real connoisseur of food.  </li>
             </ul>
             <p>DeaseApp was founded by Ankit Mehrotra, Nikhil Bakshi, Sahil Jain and Vivek Kapoor in 2012 and was acquired by Times Internet Limited in 2014. Times Internet is India’s largest digital products company and the digital venture of Times of India, India's largest media and entertainment group.</p>
        </div>
        <div className="foodies-section">
            <h2>Foodies Love Us!</h2>
            <div className="row">
                <div className="col-md-4 col-sm-4">
                   <img src={foodImage} alt="" title=""/>
                   <p>Our users get access to exclusive offers at more than 40,000 restaurants in India.</p>
                </div>
                <div className="col-md-4 col-sm-4">
                   <img src={smartPayImage} alt="" title=""/>
                   <p>DeaseApp users save at least 30% of their dining out expenses over a regular person</p>
                </div>
                <div className="col-md-4 col-sm-4">
                   <img src={offersImage} alt="" title=""/>
                   <p>DeaseApp users save at least 30% of their dining out expenses over a regular person</p>
                </div>
             </div>
        </div>
        <div className="ourteam-section">
            <h2>Our team</h2>
            <p>
               <span>We are a bunch of 500 people across 20 cities in India. </span>
               The tech team has some hard working folks who allow us a peak into their killer dance moves at office parties,  the creative team have the best collection of music and they make sure everyone hears it,  the sales &amp; marketing team have haircuts better than the Indian cricket team  and the data &amp; content team are simply, always, on time. But what unites us is that - we all like to catch a drink after work in the name of ‘research’
            </p>
            <img src={teamImage} alt="" title=""/>
         </div>
         <div className="join-us-section">
            <h2>Join us</h2>
            <p>We’re always looking for fun-loving, intelligent and hardworking people to join us! So if you think you can add flavours to our recipe, drop us a mail and tell us about yourself.
               For job openings: <a href="foodApp.co.pk">careers@foodApp.co.pk</a>
            </p>
         </div>
    </div>
    </div>
  );
}
