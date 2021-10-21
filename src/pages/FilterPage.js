import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import RestaurentItem from '../components/RestaurentItem'
import CarouselRestaurent from '../styles/Carousel_Restaurent';
import AdItem from '../components/Ad_Item';
import FiltersItem from '../components/Filters_Item';
import '../styles/FilterPage.css'
import Sortby from '../components/Sort_by';
import HeadingFilterPage from '../components/Heading_Filter_Page';
import FilterPageItem from '../components/Filter_Page_Item';
import Pagination from '../components/Pagination';
import useFetch from '../components/useFetch';
import Skeleton from 'react-loading-skeleton';



function FilterPage() {

    
    const { data, isPending, error } = useFetch('https://api.masairapp.com/api/Restaurant/GetRestaurants');
    return (
        <div>
            <Breadcrumb/>

            <div class="container">
                <AdItem/>
                <div class="main-section">
                <div className="adjust">

                <div className="alignment listing_sidebar">

                <FiltersItem filter_name = "Quick Filters"/>
                <FiltersItem filter_name = "Cusines"/>
                <FiltersItem filter_name = "Tags"/>
                <FiltersItem filter_name = "Features"/>

                </div>

                </div>
                <div class="right-section">
                    <div class="div-top-boxes-content">
                    <HeadingFilterPage/>
                    <Sortby/>
                    <div class="align-boxes">
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
