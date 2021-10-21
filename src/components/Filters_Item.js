import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import '../styles/Filters_Item.css'
import Checkbox from './Checkbox'
import useFetch from './useFetch'


export default function FiltersItem({filter_name = ""}) {

    const [IsOpened, setOpened] = useState(false)

    const [searchValue, setSearchValue] = useState("")

    const handdleToggle = () => setOpened(!IsOpened)

    var endPoint = "https://api.masairapp.com/api/"

    const quickFilters = "Quick Filters";
    const cusines = "Cusines";
    const tags = "Tags";
    const features = "Features";

    if (filter_name === quickFilters) {
        
    } else if (filter_name === cusines) {
        endPoint += "Lov/GetCusine"
    } else if (filter_name === tags) {
        endPoint += "Tag/GetTags"
    } else if (filter_name === features) {
        endPoint += "Feature/GetFeatures"
    }

    const { data, isPending, error } = useFetch(endPoint);

function showFilters(dt) {
    if (filter_name === quickFilters) {
        <Checkbox key = {dt.Id} filter_name = {dt}/>
    } else if (filter_name === cusines) {
        return <Checkbox key = {dt.Id} filter_name = {dt.Value}/>
    } else if (filter_name === tags) {
        <Checkbox key = {dt.TagId} filter_name = {dt.Title}/>
    } else if (filter_name === features) {
        <Checkbox key = {dt.FeatureId} filter_name = {dt.Title}/>
    }
}

    return (
        
<div className="adjust">

<div className="alignment listing_sidebar">

{/* content starts here */}

<div className="container" style={{display: "contents"}}>

<button className= { IsOpened ? "accordion is-open" : "accordion"} style={{outline: "0px auto -webkit-focus-ring-color"}} onClick={handdleToggle}>{filter_name}</button>
<div className="accordion-content" style={{maxHeight: "189px"}}>

<input type="text" className= {IsOpened ? "searchTerm-quick-filters" : "accordion-content-hide"} placeholder="Search" onChange={evt => setSearchValue(evt.target.value)}/>

                    {IsOpened ? isPending && <div><Skeleton/></div> : ""}
                    {IsOpened ? error && <div>{error}</div> : ""}
                    {IsOpened ? data && data.filter((v) => {
                    return searchValue === "" ?
                    v :
                    v.Value.toLowerCase().includes(searchValue.toLowerCase())
                    }).map(dt => showFilters(dt)) : ""}
                        

</div>

</div>  
</div>

        </div>
    )
}

