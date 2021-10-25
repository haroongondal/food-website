import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import AdItem from '../components/Ad_Item';
import FiltersItem from '../components/Filters_Item';
import '../styles/FilterPage.css'
import Sortby from '../components/Sort_by';
import HeadingFilterPage from '../components/Heading_Filter_Page';
import FilterPageItem from '../components/Filter_Page_Item';
import Pagination from '../components/Pagination';
import useFetch from '../Utils/useFetch';
import Skeleton from 'react-loading-skeleton';
import useLocation from '../Utils/useLocation';
import { useState } from 'react';



function FilterPage() {

    console.log(useLocation());

    const [url, seturl] = useState('https://api.masairapp.com/api/Restaurant/GetRestaurants');
    const { data, isPending, error } = useFetch(url);
    
    const handleFilters = (tagId, cusinesId, featureId, quickFilterId)=> {

        const url = `https://api.masairapp.com/api/Restaurant/
                     GetRestaurantsByFilters?cusineId=${cusinesId}&RestaurantId=&
                     featureId=${featureId}&tagId=${tagId}&offset=0&limit=10`
            seturl(url)
    }
    
    return (
        <div>
            <Breadcrumb/>

            <div className="container">
                <AdItem/>

                <div className="main-section">

                <div className="adjust">

                <div className="alignment listing_sidebar">


                <FiltersItem filter_name = "Quick Filters" handleFilters = {handleFilters.bind}/>
                <FiltersItem filter_name = "Cusines" handleFilters = {handleFilters.bind}/>
                <FiltersItem filter_name = "Tags" handleFilters = {handleFilters.bind}/>
                <FiltersItem filter_name = "Features" handleFilters = {handleFilters.bind}/>
                </div>

</div>
                <div className="right-section">
                    <div className="div-top-boxes-content">

                    <HeadingFilterPage/>
                    <Sortby/>
                    <div className="align-boxes">
                    {isPending && <div><Skeleton width={200} height={250}orientation={"horizontal"}/></div>}
                    {error && <div>{error}</div>}
                    {data && data.map((rest) => <FilterPageItem key = {rest.Id} data = {rest}/>)}
                    </div>
                    </div>
                    <hr className="grey"/>
                    <Pagination/>
                </div>
                </div>
            </div>

            </div>
    )
}

export default FilterPage
