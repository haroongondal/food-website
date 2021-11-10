import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import AdItem from '../components/Ad_Item';
import FiltersItem from '../components/Filters_Item';
import '../styles/FilterPage.css'
import Sortby from '../components/Sort_by';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeadingFilterPage from '../components/Heading_Filter_Page';
import FilterPageItem from '../components/Filter_Page_Item';
import Pagination from '../components/Pagination';
import useFetch from '../Utils/useFetch';
import Skeleton from 'react-loading-skeleton';
import { useState, useEffect } from 'react';
import Types from '../Utils/Types.json'

import Modal from "react-responsive-modal";
import CancelSvgIcon from "../components/CancelSvgIcon";
import { ForDevice } from 'media-query-react';



function FilterPage() {

    // Popup Close-icon
  const closeIcon = <CancelSvgIcon />;
  
  const [isAddMenuShowing, setAddMenuShowing] = useState(false);

  const handleAddMenuPop = (e) => {
    e.preventDefault();
    setAddMenuShowing(true);
  };

  const closeAddMenuPop = () => {
    setAddMenuShowing(false);
  };

  


    const [url, seturl] = useState(`https://api.masairapp.com/api/Restaurant/GetRestaurantsByFilters?cusineId=&RestaurantId=&featureId=&tagId=&offset=0&limit=10`);
    const [tagIds, setTagIds] = useState([])
    const [cusineIds, setCusineIds] = useState([])
    const [featureIds, setFeatureIds] = useState([])
    const {data, isPending, error} = useFetch(url);
        
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

        
        useEffect(() => {
            seturl(`https://api.masairapp.com/api/Restaurant/GetRestaurantsByFilters?cusineId=${cusineIds}&RestaurantId=&featureId=${featureIds.join()}&tagId=${tagIds.join()}&offset=0&limit=10`)
        }, [cusineIds, featureIds, tagIds])

        const handleSorting = (sort) => {
        
        if (!isPending && !error && data) {
            let n = data.ListOfRestaurant.length
            if (n > 1) {
               
            if (Types.SortType.Popularity === sort) {
                console.log("sorttttttttttttttttttttttt => " + sort)
                data.ListOfRestaurant.sort((a, b) => (b.CostOfTwo - a.CostOfTwo))
            }
        
            if (Types.SortType.Ratings === sort) {
                console.log("sorttttttttttttttttttttttt => " + sort)
                data.ListOfRestaurant.sort((a, b) => (b.CostOfTwo - a.CostOfTwo))
            }

            if (Types.SortType.HighPrice === sort) {
                console.log("sorttttttttttttttttttttttt => " + sort)
                data.ListOfRestaurant.sort((a, b) => (b.CostOfTwo - a.CostOfTwo)) 
            }
         
            if (Types.SortType.LowPrice === sort) {
                console.log("sorttttttttttttttttttttttt => " + sort)
                data.ListOfRestaurant.sort((a, b) => (a.CostOfTwo - b.CostOfTwo))
            }
        }
        }
    }
      
    return (
        <div>
             <NavBar ShouldHideSearch = {false}/>
            

            <div className="container container-padding">
                <AdItem/>

                <div className="main-section">

                <ForDevice deviceName="mobile"><Modal
        open={isAddMenuShowing}
        onClose={closeAddMenuPop}
        center
        closeIcon={closeIcon}
        styles={{
          modal: { "margin-top": "80px", "max-width": "815px", width: "100%",padding:"0px" },
        }}
      >
        
      

                <div className="adjust">

                <div className="alignment listing_sidebar">


                <FiltersItem 
                filtertypes = {Types.FilterTypes.QuickFilters} 
                handleFilters = {handleFilters}/>
                <FiltersItem
                filtertypes = {Types.FilterTypes.CusineFilters} 
                handleFilters = {handleFilters}/>
                <FiltersItem
                filtertypes = {Types.FilterTypes.TagFilters} 
                handleFilters = {handleFilters}/>
                <FiltersItem
                filtertypes = {Types.FilterTypes.FeatureFilters} 
                handleFilters = {handleFilters}/>
                </div>

</div>

</Modal>
</ForDevice>

<ForDevice deviceName={['tablet', 'desktop']}>  <div className="adjust">

<div className="alignment listing_sidebar">


<FiltersItem 
filtertypes = {Types.FilterTypes.QuickFilters} 
handleFilters = {handleFilters}/>
<FiltersItem
filtertypes = {Types.FilterTypes.CusineFilters} 
handleFilters = {handleFilters}/>
<FiltersItem
filtertypes = {Types.FilterTypes.TagFilters} 
handleFilters = {handleFilters}/>
<FiltersItem
filtertypes = {Types.FilterTypes.FeatureFilters} 
handleFilters = {handleFilters}/>
</div>

</div>
</ForDevice>
                                <div className="right-section">
                    <div className="div-top-boxes-content">

                    <HeadingFilterPage/>
                    <Sortby getSortType = {handleSorting}/>
                    <div className="align-boxes">
                    {isPending && <div><Skeleton width={200} height={250}orientation={"horizontal"}/></div>}
                    {error && <div>{error}</div>}
                    {data && data.ListOfRestaurant.map((rest) => <FilterPageItem key = {rest.Id} data = {rest}/>)}
                    </div>
                    </div>
                    <hr className="grey"/>
                    <Pagination/>
                </div>
                </div>
            </div>
<Footer/>
            </div>
    )
}


export default FilterPage
