import React from "react";
import "../styles/TermsAndCondPage.css";
import bgImage from "../images/about_us_banner.jpg";
import { ForDevice } from "media-query-react";

function TermsAndCondPage() {
  return (
    <div>
      <div class="dashboard_image-AboutUs">
        <img alt="dashboard_image" src={bgImage} />

        <div class="text-terms-and-conditons">
        <ForDevice deviceName={["tablet", "desktop"]}>
          <h6>TERMS AND CONDITONS</h6>
          </ForDevice>

          <ForDevice deviceName="mobile">
          <h6>TERMS<br/>AND<br/>CONDITONS</h6>
          </ForDevice>
        </div>
      </div>

      
    <div  class="container aboutUs-M-T">
        <div class="content-terms-and-conditons">
          <h4>User Agreement</h4>
          <h4>Updated on 25/03/2021</h4>
          <p>
            These terms of use (Terms) constitute a legally binding agreement between you and the company regarding your use of the web site i.e. www.DeaseApp.co.in (“DeaseApp”) and it’s mobile applications offered by the company including but not limited to delivery of content via the Site, any mobile or internet connected device or otherwise (the "the Service"). By accessing the site or service and/or by clicking "I agree", you agree to be bound by these terms. “User” or “You” means any person who access or avail this site of the company for the purpose of hosting, publishing, sharing, transacting, displaying or uploading information or views and includes other persons jointly participating in using the site of the company. You hereby represent and warrant to the company that you are at least eighteen (18) years of age or above and are capable of entering, performing and adhering to these Terms and that you agree to be bound by the following terms and conditions. While individuals under the age of 18 may utilize DeaseApp services, they shall do so only with the involvement & guidance of their parents and / or legal guardians, under such Parent / Legal guardian’s registered account. You agree to register prior to uploading any content and / or comment and any other use or services of this site and provide your details including but not limited to complete name, age, email address, residential address, contact number.
          </p>
          <p>
            DeaseApp may add to or change or update these Terms of Use, from time to time entirely at its own discretion. You are responsible for checking these Terms of Use periodically to remain in compliance with these terms. Your use of a site after any amendment to the Terms of Use shall constitute your acceptance of these terms and you also agree to be bound by any such changes/revisions.
          </p>
          <h4>Changes</h4>
          <p>
            Times Internet Limited (“TIL”) reserves the right to suspend / cancel, or discontinue any or all channels, products or service at any time without notice, make modifications and alterations in any or all of the content, products and services contained on the site without prior notice.
          </p>
          <h4>Charges</h4>
          <p>
            TIL reserves the right to charge subscription and / or membership fees from a user, by giving reasonable prior notice, in respect of any product, service or any other aspect of this site.
          </p>
          <h4>Copyright and Trademarks</h4>
          <p>
            Unless otherwise stated, copyright and all intellectual property rights in all material presented on the site and mobile apps (including but not limited to text, audio, video or graphical images), trademarks and logos appearing on this site are the property of Times Internet Limited, its parent, affiliates and associates and are protected under applicable Indian laws. You agree not to use any framing techniques to enclose any trademark or logo or other proprietary information of TIL; or remove, conceal or obliterate any copyright or other proprietary notice or any credit-line or date-line on other mark or source identifier included on the site / service, including without limitation, the size, color, location or style of all proprietary marks. Any infringement shall be vigorously defended and pursued to the fullest extent permitted by law.
          </p>
          <h4>Limited Permission to Copy</h4>
          <p>
            TIL grants you permission to only access and make personal use of the site and you agree not to, directly or indirectly download or modify / alter / change / amend / vary / transform / revise / translate / copy / publish / distribute or otherwise disseminate any content on TIL's site / service, or any portion of it; or delete or fail to display any promotional taglines included in the site / service either directly or indirectly, except with the express consent of TIL. However, you may print or download extracts from these pages for your personal / individual, non-commercial use only. You must not retain any copies of these pages saved to disk or to any other storage medium except for the purposes of using the same for subsequent viewing purposes or to print extracts for personal / individual use.
          </p>
          <p>
            TIL forbids you from any attempts to resell or put to commercial use any part of the site; any collection and use of any product listings, descriptions, or prices; any derivative use of the Site or its contents; any downloading or copying of account information for the benefit of any other merchant; any renting, leasing, or otherwise transferring rights to the site / service; displaying the name, logo, trademark or other identifier of another person (except for indiatimes.com or you) in such a manner as to give the viewer the impression that such other person is a publisher or distributor of the service on the site, or any data gathering or extraction tools; or any use of meta tags. You may not (whether directly or through the use of any software program) create a database in electronic or structured manual form by regularly or systematically downloading and storing all or any part of the pages from this site. No part of the Site may be reproduced or transmitted to or stored in any other web site, nor may any of its pages or part thereof be disseminated in any electronic or non-electronic form, nor included in any public or private electronic retrieval system or service without prior written permission.
          </p>
          <h4>Sharing of Personal Information</h4>
          <p>
            DeaseApp is designed to help you find the best of restaurants, nightlife, events and movies around you and your city. In order to do this, DeaseApp requires the use of such information including, but not limited to, your email, password and or other informations that was used while Signing Up with the services. DeaseApp offers Sign Up process with our own sign up system and other platforms such as Facebook and Google+.
          </p>
          <p>
            DeaseApp uses Facebook Connect and Google+ platforms as a medium for signing up only. The user data collected by DeaseApp shall only be through the above mediums which will be be provided by the intended user through their Facebook or Google+ profile, no other data shall be collected/used by DeaseApp apart from those that was permitted during Sign Up process.
          </p>
          <p>
            However, kindly note that the manner in which Facebook and Google+ uses, stores and discloses your information is governed solely by its policies, and TIL/DeaseApp bears no liabilities/responsibility for its privacy practices and/or other actions of any third-party site or service that may be enabled within the service.
          </p>
          <p>
            For certain services such as email, personal web pages, contests and shopping, signing up by the visitor is required. To sign up for these services you have to open an account by completing the signing up process (i.e. by providing us with current, complete and accurate information as prompted by the applicable registration form). You also will choose a password. You are entirely responsible for maintaining the confidentiality of your password and account. By Signing Up, you agree to the following terms in addition to any other specific terms which shall be posted at an appropriate location of the Site. Each sign up is for a single individual user only. To access these
            services, you will be asked to enter your individual Email Address and Password, as chosen by you during your signing up. Therefore, we do not permit any of the following :-
          </p>
          <div><ul>
            <li>Any other person sharing your account and password;</li>
            <li>Any part of the site being cached in proxy servers and accessed by individuals who have not registered with DeaseApp as users of the site; or</li>
            <li>Access through a single account and password being made available to multiple users on a network.</li>
          </ul>
          <p>
            If DeaseApp reasonably believe that an account and password is being used / misused in any manner, DeaseApp shall reserve the right to cancel access rights immediately without notice, and block access to all users from that IP address.
          </p>
        </div>
        </div>
    </div>
    </div>
  );
}

export default TermsAndCondPage;
