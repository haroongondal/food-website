import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import AdItem from "../components/Ad_Item";
import FiltersItem from "../components/Filters_Item";
import "../styles/FilterPage.css";
import "../styles/FilterTopNavbar.css";
import Sortby from "../components/Sort_by";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeadingFilterPage from "../components/Heading_Filter_Page";
import FilterPageItem from "../components/Filter_Page_Item";
import Pagination from "../components/Pagination";
import useFetch from "../Utils/useFetch";
import Skeleton from "react-loading-skeleton";
import { useState, useEffect } from "react";
import Types from "../Utils/Types.json";

import Modal from "react-responsive-modal";
import CancelSvgIcon from "../components/CancelSvgIcon";
import { ForDevice } from "media-query-react";

import PopupSearch from "../components/PopupSearch";

function FilterPage() {

    
  
    const [isSearchShowing, setSearchShowing] = useState(false);
  
    const handleSearchPop = (e) => {
      e.preventDefault();
      setSearchShowing(true);
    };
  
    const closeSearchPop = () => {
      setSearchShowing(false);
    };
  // Popup Close-icon
  const closeIcon = <CancelSvgIcon />;

  const [isFiltersShowing, setFiltersShowing] = useState(false);

  const handleFiltersPop = (e) => {
    e.preventDefault();
    setFiltersShowing(true);
  };

  const closeFiltersPop = () => {
    setFiltersShowing(false);
  };
  
    const [url, seturl] = useState(`https://api.masairapp.com/api/Restaurant/GetRestaurantsByFilters?cusineId=&RestaurantId=&featureId=&tagId=&offset=0&limit=10`);
    const [tagIds, setTagIds] = useState([])
    const [cusineIds, setCusineIds] = useState([])
    const [featureIds, setFeatureIds] = useState([])
    const {data, isPending, error} = useFetch(url);
    const [sort, setSort] = useState("-1");
        
        const handleFilters = (isChecked, filterType, id) => {

            if (Types.FilterTypes.QuickFilters === filterType) {
                
            }

            if (Types.FilterTypes.CusineFilters === filterType) {
                
                if (isChecked) {
                    setCusineIds(oldArray => [...oldArray, id]);
                } else {
                    const index = cusineIds.findIndex((id_) => id_ === id);
                            if (index !== -1) {
                            setCusineIds([
                                ...cusineIds.slice(0, index),
                                ...cusineIds.slice(index + 1)]);
                            }
                }
                
            }

            if (Types.FilterTypes.FeatureFilters === filterType) {
                
            }

            if (Types.FilterTypes.TagFilters === filterType) {
                if (isChecked) {
                    setTagIds(oldArray => [...oldArray, id]);
                } else {
                    const index = tagIds.findIndex((id_) => id_ === id);
                            if (index !== -1) {
                            setTagIds([
                                ...tagIds.slice(0, index),
                                ...tagIds.slice(index + 1)]);
                            }
                }
            }
        }     

        
       
        const handleSorting = (sort) => {
       setSort(sort)
    }
 


  useEffect(() => {
    seturl(
      `https://api.masairapp.com/api/Restaurant/GetRestaurantsByFilters?cusineId=${cusineIds}&RestaurantId=&featureId=${featureIds.join()}&tagId=${tagIds.join()}&offset=0&limit=10`
    );
  }, [cusineIds, featureIds, tagIds]);

//   const handleSorting = (sort) => {
//     if (!isPending && !error && data) {
//       let n = data.ListOfRestaurant.length;
//       if (n > 1) {
//         if (Types.SortType.Popularity === sort) {
//           console.log("sorttttttttttttttttttttttt => " + sort);
//           data.ListOfRestaurant.sort((a, b) => b.CostOfTwo - a.CostOfTwo);
//         }

//         if (Types.SortType.Ratings === sort) {
//           console.log("sorttttttttttttttttttttttt => " + sort);
//           data.ListOfRestaurant.sort((a, b) => b.CostOfTwo - a.CostOfTwo);
//         }

//         if (Types.SortType.HighPrice === sort) {
//           console.log("sorttttttttttttttttttttttt => " + sort);
//           data.ListOfRestaurant.sort((a, b) => b.CostOfTwo - a.CostOfTwo);
//         }

//         if (Types.SortType.LowPrice === sort) {
//           console.log("sorttttttttttttttttttttttt => " + sort);
//           data.ListOfRestaurant.sort((a, b) => a.CostOfTwo - b.CostOfTwo);
//         }
//       }
//     }
//   };

  return (
    <div>
      <NavBar ShouldHideSearch={false} />

      <div className="container container-padding">
        <AdItem />

        <div className="filterNavBar">
      <div className="topNavBar-F">
        <div className="align-topNavBar-F">
          <div>
            <a href aria-label="Back" className="sM7rz">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 42 42"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    stroke="#666666"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4.5"
                    d="M12 6L27.455 21 12 36"
                    transform="matrix(-1 0 0 1 39.455 0)"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
          <div className="location-topNavBar-M" style={{ marginLeft: "auto" }}>
            <span>
              Lahore
              <i className="_3sKP_">
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L4 4L7 1"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </i>
            </span>
          </div>
        </div>
        <div className="Sec-search-filters">
          <div
            className="search-topNavBar-M"
            style={{ padding: "8px 1rem", marginBottom: "5px" }} onClick={handleSearchPop}
          >
            <i>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4722 7.11106C13.4722 10.6242 10.6243 13.4721 7.11112 13.4721C3.59796 13.4721 0.75 10.6242 0.75 7.11106C0.75 3.59795 3.59796 0.75 7.11112 0.75C10.6243 0.75 13.4722 3.59795 13.4722 7.11106Z"
                  stroke="#999999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16 16L12.1333 12.1334"
                  stroke="#999999"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </i>
            <span>search anything...</span>
          </div>
          <div className="filters-btns">
            <div className="sort-btn-F">
            <i class='bx bx-filter' ></i>
            </div>
            <div className="sort-btn-F" onClick={handleFiltersPop}>
              <i class="bx bx-filter-alt"></i>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={isSearchShowing}
        onClose={closeSearchPop}
        center
        classNames={{
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={1200}
        closeIcon={closeIcon}
        styles={{
          modal: { margin: "0px",padding:"0px", width: "100%", height: "100%"},
        }}
      >
        <PopupSearch />
      </Modal>
    </div>

        <div className="main-section">
          <ForDevice deviceName="mobile">
            <Modal
              open={isFiltersShowing}
              onClose={closeFiltersPop}
              center
              classNames={{
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={800}
              styles={{
                modal: {
                  height: "100%",
                  width: "100%",
                  padding: "0px",
                  margin: "0px",
                  transform: "translateY(104px)"
                },
              }}
            >
              <div className="adjust-M">
                <div className="listing_sidebar-M">
                  <FiltersItem
                    filtertypes={Types.FilterTypes.QuickFilters}
                    handleFilters={handleFilters}
                  />
                  <FiltersItem
                    filtertypes={Types.FilterTypes.CusineFilters}
                    handleFilters={handleFilters}
                  />
                  <FiltersItem
                    filtertypes={Types.FilterTypes.TagFilters}
                    handleFilters={handleFilters}
                  />
                  <FiltersItem
                    filtertypes={Types.FilterTypes.FeatureFilters}
                    handleFilters={handleFilters}
                  />
                </div>
              </div>
            </Modal>
          </ForDevice>

          <ForDevice deviceName={["tablet", "desktop"]}>

            <div className="adjust">
              <div className="alignment listing_sidebar">
                <FiltersItem
                  filtertypes={Types.FilterTypes.QuickFilters}
                  handleFilters={handleFilters}
                />
                <FiltersItem
                  filtertypes={Types.FilterTypes.CusineFilters}
                  handleFilters={handleFilters}
                />
                <FiltersItem
                  filtertypes={Types.FilterTypes.TagFilters}
                  handleFilters={handleFilters}
                />
                <FiltersItem
                  filtertypes={Types.FilterTypes.FeatureFilters}
                  handleFilters={handleFilters}
                />
              </div>

            </div>
          </ForDevice>


          <div className="right-section">
            <div className="div-top-boxes-content">
              <HeadingFilterPage />
              <Sortby getSortType={handleSorting} />
              <div className="align-boxes">
                    {isPending && <div><Skeleton width={200} height={250}orientation={"horizontal"}/></div>}
                    {error && <div>{error}</div>}
                    {sort === Types.SortType.HighPrice && data && data.ListOfRestaurant.sort((a, b) => 
                    (b.CostOfTwo - a.CostOfTwo)).map((rest) => <FilterPageItem key = {rest.Id} data = {rest}/>) }

                    {sort === Types.SortType.LowPrice && data && data.ListOfRestaurant.sort((a, b) => 
                    (a.CostOfTwo - b.CostOfTwo)).map((rest) => <FilterPageItem key = {rest.Id} data = {rest}/>) }

                    {sort === Types.SortType.Popularity && data && data.ListOfRestaurant.sort((a, b) =>
                    (b.NoOfOrders - a.NoOfOrders)).map((rest) => <FilterPageItem key = {rest.Id} data = {rest}/>) }

                    {sort === Types.SortType.Ratings && data && data.ListOfRestaurant.sort((a, b) => 
                    (b.AverageRating - a.AverageRating)).map((rest) => <FilterPageItem key = {rest.Id} data = {rest}/>) }
                    
                    {sort === "-1" && data && data.ListOfRestaurant.map((rest) => <FilterPageItem key = {rest.Id} data = {rest}/>)}

                    </div>
            </div>

            <hr className="grey" />
            <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FilterPage;
