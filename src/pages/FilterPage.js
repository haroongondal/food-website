import React from 'react'
import Carousel from 'react-multi-carousel'
import Breadcrumb from '../components/Breadcrumb'
import ResDetailFilter from '../components/ResDetailFilter';
import ResDetailReviews from '../components/ResDetailReviews';
import ResDetailSortBy from '../components/ResDetailSortBy';
import RestaurentItem from '../components/RestaurentItem'
import CarouselRestaurent from '../styles/Carousel_Restaurent';
import '../styles/FilterPage.css'

function FilterPage() {
    return (
        <div>
            <Breadcrumb/>
            <ResDetailSortBy/>
            <ResDetailFilter/>
            <ResDetailReviews/>
        </div>
    )
}

export default FilterPage
