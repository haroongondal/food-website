import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import AdItem from '../components/Ad_Item';
import FiltersItem from '../components/Filters_Item';
import '../styles/FilterPage.css'
import Sortby from '../components/Sort_by';
import HeadingFilterPage from '../components/Heading_Filter_Page';
import FilterPageItem from '../components/Filter_Page_Item';
import Pagination from '../components/Pagination';


function FilterPage() {
    return (
        <div>
            <Breadcrumb/>
            <div class="container">
                <AdItem/>
                <div class="main-section">
                <FiltersItem/>
                <div class="right-section">
                    <div class="div-top-boxes-content">
                    <HeadingFilterPage/>
                    <Sortby/>
                    <div class="align-boxes">
                        <FilterPageItem/>
                        <FilterPageItem/>
                        <FilterPageItem/>
                        <FilterPageItem/>
                        <FilterPageItem/>
                        <FilterPageItem/>
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
