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

// Filter-Page-Search
function FilterPage(props) {
  const [isSearchShowing, setSearchShowing] = useState(false);

  const handleSearchPop = (e) => {
    e.preventDefault();
    setSearchShowing(true);
  };
  useEffect(function () {
    props.showHeader(false);
  });
  const closeSearchPop = () => {
    setSearchShowing(false);
  };
  // Popup Close-icon
  const closeIcon = <CancelSvgIcon />;

  // Popup Sort-By-Mobile
  const [isSortByShowing, setSortByShowing] = useState(false);

  const handleSortByPop = (e) => {
    e.preventDefault();
    setSortByShowing(true);
  };

  const closeSortByPop = () => {
    setSortByShowing(false);
  };

  // Popup Filters-Mobile
  const [isFiltersShowing, setFiltersShowing] = useState(false);

  const handleFiltersPop = (e) => {
    e.preventDefault();
    setFiltersShowing(true);
  };

  const closeFiltersPop = () => {
    setFiltersShowing(false);
  };

  const [url, seturl] = useState(
    `https://api.masairapp.com/api/Restaurant/GetRestaurantsByFilters?cusineId=&RestaurantId=&featureId=&tagId=&offset=0&limit=10`
  );
  const [tagIds, setTagIds] = useState([]);
  const [cusineIds, setCusineIds] = useState([]);
  const [featureIds, setFeatureIds] = useState([]);
  const { data, isPending, error } = useFetch(url);
  const [sort, setSort] = useState("-1");

  const handleFilters = (isChecked, filterType, id) => {
    if (Types.FilterTypes.QuickFilters === filterType) {
    }

    if (Types.FilterTypes.CusineFilters === filterType) {
      if (isChecked) {
        setCusineIds((oldArray) => [...oldArray, id]);
      } else {
        const index = cusineIds.findIndex((id_) => id_ === id);
        if (index !== -1) {
          setCusineIds([
            ...cusineIds.slice(0, index),
            ...cusineIds.slice(index + 1),
          ]);
        }
      }
    }

    if (Types.FilterTypes.FeatureFilters === filterType) {
    }

    if (Types.FilterTypes.TagFilters === filterType) {
      if (isChecked) {
        setTagIds((oldArray) => [...oldArray, id]);
      } else {
        const index = tagIds.findIndex((id_) => id_ === id);
        if (index !== -1) {
          setTagIds([...tagIds.slice(0, index), ...tagIds.slice(index + 1)]);
        }
      }
    }
  };

  const handleSorting = (e, sort) => {
    // e.preventDefault();
    setSort(sort);
    // e.querySelectorAll('input').checked = true;;
    // setSortByShowing(false);
  };
  const cancelSort = () => {
    setSortByShowing(false);
  };
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
  const responsive = {
    largeScreen: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2000 },
      items: 4,
    },
    desktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1200, min: 767 },
      items: 2,
    },

    mobile_table: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <NavBar className="d-md-block d-none" ShouldHideSearch={false} />

      <div className="container container-padding">
        <AdItem />

        {/* MOBILE TOP NAV-BAR */}

        {/* <ForDevice deviceName="mobile"> */}
        <div className="filterNavBar d-md-none d-block">
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
              <div className="location-topNavBar-M mb-1 me-auto ms-4">
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
            <div className="d-flex justify-content-between">
              <div className="sort-btn-F" onClick={handleSortByPop}>
                <i class="bx bx-filter"></i>
              </div>
              <div className="d-flex navbar-suggetions-wrapper">
                {/* <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            partialVisible={true}
          > */}
                <div className="d-flex navbar-suggetions flex-shrink-0">
                  <div className="px-3 py-1 mx-2 rounded-pill">
                    Dinoute Passport
                  </div>
                  <div className="px-3 py-1 mx-2 rounded-pill">Super Saver</div>
                  <div className="px-3 py-1 mx-2 rounded-pill">Dineout Pay</div>
                  <div className="px-3 py-1 mx-2 rounded-pill">
                    Safe to Eat out
                  </div>
                  <div className="px-3 py-1 mx-2 rounded-pill">Super Saver</div>
                  <div className="px-3 py-1 mx-2 rounded-pill">Dineout Pay</div>
                </div>

                {/* </Carousel> */}
              </div>
              <div className="filter-btn-F ms-2" onClick={handleFiltersPop}>
                <i class="bx bx-filter-alt"></i>
              </div>
            </div>
          </div>
          <Modal
            open={isFiltersShowing}
            onClose={closeFiltersPop}
            closeIcon={closeIcon}
            center
            classNames={{
              root: "filter-modal",
              modalAnimationIn: "customEnterModalAnimation",
              modalAnimationOut: "customLeaveModalAnimation",
            }}
            animationDuration={300}
            styles={{
              modal: {
                verticalAlign: "bottom",
                width: "100%",
                padding: "0px",
                margin: "0px",
                borderRadius: "23px 23px 0px 0px",
              },
            }}
          >
            <div className="title-popup-listing">
              <h6 className="text-search-SP">Filters</h6>
            </div>
            <div className="adjust-M">
              <div className="listing_sidebar-M mt-4">
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
            <div className="apply-filters-btn">
              <button>Apply Filters</button>
            </div>
          </Modal>
          <Modal
            open={isSortByShowing}
            onClose={closeSortByPop}
            center
            closeIcon={closeIcon}
            classNames={{
              root: "filter-modal",
              modalAnimationIn: "sortByEnterModalAnimation",
              modalAnimationOut: "sortByLeaveModalAnimation",
            }}
            animationDuration={300}
            styles={{
              modal: {
                verticalAlign: "bottom",
                width: "100%",
                padding: "0px",
                margin: "0px",
                borderRadius: "23px 23px 0px 0px",
              },
            }}
          >
            <div className="">
              <div className="title-popup-listing">
                <h6 className="text-search-SP">Sort By</h6>
              </div>
              <form className="px-3 pt-2">
                <label
                  for="popularity"
                  onClick={(e) => handleSorting(e, Types.SortType.Popularity)}
                >
                  <input id="popularity" type="radio" name="sorting" />
                  <span className="btn-for-sortBy">Popularity</span>
                </label>
                <br />
                {/* <div className="d-grid"> */}
                <label
                  for="Ratings"
                  onClick={(e) => handleSorting(e, Types.SortType.Ratings)}
                >
                  <input id="Ratings" type="radio" name="sorting" />
                  <span className="btn-for-sortBy">Ratings</span>
                </label>
                <br />

                <label
                  for="LowPrice"
                  onClick={(e) => handleSorting(e, Types.SortType.LowPrice)}
                >
                  <input id="LowPrice" type="radio" name="sorting" />
                  <span className="btn-for-sortBy">LowPrice</span>
                </label>
                <br />

                <label
                  for="HighPrice"
                  onClick={(e) => handleSorting(e, Types.SortType.HighPrice)}
                >
                  <input id="HighPrice" type="radio" name="sorting" />
                  <span className="btn-for-sortBy">HighPrice</span>
                </label>
                {/* </div> */}
              </form>
              <div className="text-center py-3 cancelSort" onClick={cancelSort}>
                Cancel
              </div>
            </div>
          </Modal>
        </div>
        {/* </ForDevice> */}

        <div className="main-section">
          {/* MOBILE CHECKBOX-FILTERS */}

          {/* </ForDevice> */}

          {/* DESKTOP CHECKBOX-FILTERS */}

          {/* <ForDevice deviceName={["tablet", "desktop"]}> */}
          <div className="adjust d-md-block d-none">
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
          {/* </ForDevice> */}

          <div className="right-section">
            <div className="div-top-boxes-content">
              <HeadingFilterPage className="d-md-block d-none" />

              {/* DESKTOP SORT-BY */}
              <Sortby
                className="d-md-block d-none"
                getSortType={handleSorting}
              />
              {/* FILTER PAGE BOXES */}

              {/* <div className="align-boxes"> */}
              {isPending && (
                <div>
                  <Skeleton
                    width={200}
                    height={250}
                    orientation={"horizontal"}
                  />
                </div>
              )}
              {error && <div>{error}</div>}
              {/* <div className="d-lg-none d-block">
                <Carousel
                  responsive={responsive}
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  partialVisible={true}
                >
                  {sort === Types.SortType.HighPrice &&
                    data &&
                    data.ListOfRestaurant.sort(
                      (a, b) => b.CostOfTwo - a.CostOfTwo
                    ).map((rest) => (
                      <FilterPageItem key={rest.Id} data={rest} />
                    ))}

                  {sort === Types.SortType.LowPrice &&
                    data &&
                    data.ListOfRestaurant.sort(
                      (a, b) => a.CostOfTwo - b.CostOfTwo
                    ).map((rest) => (
                      <FilterPageItem key={rest.Id} data={rest} />
                    ))}

                  {sort === Types.SortType.Popularity &&
                    data &&
                    data.ListOfRestaurant.sort(
                      (a, b) => b.NoOfOrders - a.NoOfOrders
                    ).map((rest) => (
                      <FilterPageItem key={rest.Id} data={rest} />
                    ))}

                  {sort === Types.SortType.Ratings &&
                    data &&
                    data.ListOfRestaurant.sort(
                      (a, b) => b.AverageRating - a.AverageRating
                    ).map((rest) => (
                      <FilterPageItem key={rest.Id} data={rest} />
                    ))}

                  {sort === "-1" &&
                    data &&
                    data.ListOfRestaurant.map((rest) => (
                      <FilterPageItem key={rest.Id} data={rest} />
                    ))}
                </Carousel>
              </div> */}
              {/* <div className="d-lg-flex d-none"> */}
              {sort === Types.SortType.HighPrice &&
                data &&
                data.ListOfRestaurant.sort(
                  (a, b) => b.CostOfTwo - a.CostOfTwo
                ).map((rest) => <FilterPageItem key={rest.Id} data={rest} />)}

              {sort === Types.SortType.LowPrice &&
                data &&
                data.ListOfRestaurant.sort(
                  (a, b) => a.CostOfTwo - b.CostOfTwo
                ).map((rest) => <FilterPageItem key={rest.Id} data={rest} />)}

              {sort === Types.SortType.Popularity &&
                data &&
                data.ListOfRestaurant.sort(
                  (a, b) => b.NoOfOrders - a.NoOfOrders
                ).map((rest) => <FilterPageItem key={rest.Id} data={rest} />)}

              {sort === Types.SortType.Ratings &&
                data &&
                data.ListOfRestaurant.sort(
                  (a, b) => b.AverageRating - a.AverageRating
                ).map((rest) => <FilterPageItem key={rest.Id} data={rest} />)}

              {sort === "-1" &&
                data &&
                data.ListOfRestaurant.map((rest) => (
                  <FilterPageItem key={rest.Id} data={rest} />
                ))}
              {/* </div> */}
            </div>

            {/* <hr className="grey" /> */}
            {/* <Pagination /> */}
          </div>
        </div>
      </div>
      <div className="d-md-block d-none">
        <Footer />
      </div>
    </div>
  );
}

export default FilterPage;
