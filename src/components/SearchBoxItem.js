import React from 'react'

export default function SearchBoxItem({data = ""}) {
 
    return (
        <div>
              <li class="list-box-searchBar">
                <span class="img-box-searchBar">
                  <img
                  style={{borderRadius:"50%",width:"42px",height:"42px"}}
                    alt=""
                    data-src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/r/e/p35430-150719749559d60237e67d2.jpg?tr=tr:n-small"
                    src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/r/e/p35430-150719749559d60237e67d2.jpg?tr=tr:n-small"
                  />
                </span>
                <div class="details-box-searchBar">
                  <p class="title-name-searchBar">
                    {data.RestaurantName}
                  </p>
                  <span class="title-location-box-searchBar">
                  {data.PrimaryAreaOfOutlet == null ? (data.PrimaryLocation == null ? "Address not Available" : data.PrimaryLocation)
                      : (data.PrimaryLocation == null ? data.PrimaryAreaOfOutlet
                      : data.PrimaryAreaOfOutlet + ", " + data.PrimaryLocation)}
                  </span>
                </div>
                <span class="rating-search-box">{Math.round(data.AverageRating * 100) / 100}</span>
              </li>
</div>
    )
}
