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
import { useState } from 'react';
import Types from '../Utils/Types.json'



function FilterPage() {

  


    const [url, seturl] = useState('https://api.masairapp.com/api/Restaurant/GetRestaurants');
    const [sort, setSort] = useState(-1);
    const [tagIds, setTagIds] = useState([])
    const [cusineIds, setCusineIds] = useState([])
    const [featureIds, setFeatureIds] = useState([])
    const { data, isPending, error } = useFetch(url);
        
        // const urlUp = `https://api.masairapp.com/api/Restaurant/
        //              GetRestaurantsByFilters?cusineId=${cusineIds}&RestaurantId=&
        //              featureId=${featureIds}&tagId=${tagIds}&offset=0&limit=10`
        //     seturl(urlUp)
        
        if (!isPending && !error) {

        sort === Types.SortType.Popularity && data.sort((a, b) => (b.CostOfTwo - a.CostOfTwo))
        
        sort === Types.SortType.Ratings && data.sort((a, b) => (b.CostOfTwo - a.CostOfTwo))

        sort === Types.SortType.HighPrice && data.sort((a, b) => (a.CostOfTwo - b.CostOfTwo)) 

        sort === Types.SortType.LowPrice && data.sort((a, b) => (b.CostOfTwo - a.CostOfTwo))

}
      
    // const location = useLocation().then((location => {
    //     seturl(`https://api.masairapp.com/api/Restaurant/GetRestaurantsByCoordinate
    //     ?latitude=${location.lat}&longitude=${location.long}`)
    // }));
    // console.log(location);
    
    return (
        <div>
            <Breadcrumb/>

            <div className="container">
                <AdItem/>

                <div className="main-section">

                <div className="adjust">

                <div className="alignment listing_sidebar">


                <FiltersItem filter_name = "Quick Filters" ids = {setTagIds}/>
                <FiltersItem filter_name = "Cusines" ids = {setCusineIds}/>
                <FiltersItem filter_name = "Tags" ids = {setTagIds}/>
                <FiltersItem filter_name = "Features" ids = {setFeatureIds}/>
                </div>

</div>
                <div className="right-section">
                    <div className="div-top-boxes-content">

                    <HeadingFilterPage/>
                    <Sortby setSort = {setSort}/>
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
