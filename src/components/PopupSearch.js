import React from "react";
import "../styles/PopupSearch.css";
import SearchBoxItem from "./SearchBoxItem";

export default function PopupSearch() {
  return (
    <div>
      <div className="title-popup-listing">
        <h6 className="text-search-SP">Search</h6>
      </div>

      <form id="form-auto-suggest">
        <div class="search-popUp">
          <input
            type="text"
            placeholder="Search for Restaurants, Cuisines, Location..."
            autocomplete="off"
            maxlength="50"
          />
          
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 18 18"
            >
              <path
                fill="#979797"
                fill-rule="nonzero"
                stroke="#979797"
                stroke-width="0.4"
                d="M11.538 10.287l1.483 1.434 1.045 1.01c.16.155.235.357.245.57.01.216-.099.417-.245.57a.859.859 0 0 1-.589.237.874.874 0 0 1-.59-.237l-.377-.365-1.654-1.6-.499-.482c-.143.105-.29.204-.44.296a6.493 6.493 0 0 1-.998.477 5.978 5.978 0 0 1-2.088.394 6.162 6.162 0 0 1-1.73-.223 6.06 6.06 0 0 1-1.538-.668 5.872 5.872 0 0 1-1.26-1.029C1.564 9.86 1.03 8.853.859 7.778a6.28 6.28 0 0 1-.09-.94c-.001-.32.035-.634.08-.951.08-.549.263-1.067.5-1.569.464-.975 1.245-1.803 2.169-2.388.464-.293.984-.52 1.513-.676.243-.071.492-.125.744-.161.326-.047.652-.084.982-.084.225 0 .214 1.613 0 1.613-.232 0-.464.015-.695.045l.223-.029c-.453.06-.895.176-1.316.348l.198-.08a5.269 5.269 0 0 0-1.135.642l.168-.126a5.16 5.16 0 0 0-.936.906l.13-.163a5.017 5.017 0 0 0-.664 1.098l.083-.192a4.906 4.906 0 0 0-.36 1.273l.03-.215a4.946 4.946 0 0 0 0 1.344l-.03-.215c.062.438.182.865.36 1.272a27.35 27.35 0 0 1-.083-.192c.172.391.396.76.664 1.098l-.13-.162c.27.338.586.643.936.906l-.168-.127c.349.26.731.476 1.135.643a29.341 29.341 0 0 0-.198-.081c.42.17.863.289 1.316.348l-.223-.028c.46.059.923.059 1.382.001l-.223.028c.45-.059.89-.173 1.308-.342l-.199.08a5.22 5.22 0 0 0 1.157-.652l-.168.127a5.128 5.128 0 0 0 .933-.905l-.13.163c.27-.341.496-.715.67-1.112l-.084.193c.174-.4.292-.82.353-1.25l-.029.215a4.944 4.944 0 0 0 0-1.359l.03.215a4.91 4.91 0 0 0-.354-1.25l.084.192a5.044 5.044 0 0 0-.67-1.111l.13.162a5.181 5.181 0 0 0-.933-.904l.168.126A5.362 5.362 0 0 0 8.329 2.9l.2.081a5.332 5.332 0 0 0-1.309-.343l.223.029a5.336 5.336 0 0 0-.687-.045c-.226 0-.214-1.613 0-1.613.385.002.77.043 1.148.11.313.054.62.136.916.247a5.88 5.88 0 0 1 2.407 1.585c.396.439.74.925.98 1.46.137.308.262.617.349.942.086.324.137.659.168.992a5.532 5.532 0 0 1-.148 1.825c-.063.261-.15.518-.257.765-.13.304-.27.6-.449.88-.102.162-.213.32-.332.472z"
              ></path>
            </svg>
          </i>
        </div>
      </form>

      <hr/>

      <div className="align-box-searchPop">
      <ul className="p-0">
      <SearchBoxItem/>
      <SearchBoxItem/>
      <SearchBoxItem/>
      </ul>
      </div>
    </div>
  );
}
