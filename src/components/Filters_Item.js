import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import '../styles/Filters_Item.css'
import Checkbox from './Checkbox'
import useFetch from '../Utils/useFetch'
import Types from '../Utils/Types.json'


export default function FiltersItem(props) {

    const [IsOpened, setOpened] = useState(true)

    const [searchValue, setSearchValue] = useState("")

    const [filter_name, setName] = useState("")

    const handdleToggle = () => setOpened(!IsOpened)

    var endPoint = "https://api.masairapp.com/api"

    if (props.filtertypes === Types.FilterTypes.QuickFilters) {
      endPoint += "/QuickFlters"
    } else if (props.filtertypes === Types.FilterTypes.CusineFilters) {
        endPoint += "/Lov/GetCusine"
    } else if (props.filtertypes === Types.FilterTypes.TagFilters) {
        endPoint += "/Tag/GetTags"
    } else if (props.filtertypes === Types.FilterTypes.FeatureFilters) {
        endPoint += "/Feature/GetFeatures"
    }

    useEffect(() => {
        if (props.filtertypes === Types.FilterTypes.QuickFilters) {
            setName("Quick Filters")
        } else if (props.filtertypes === Types.FilterTypes.CusineFilters) {
            setName("Cusines")
        } else if (props.filtertypes === Types.FilterTypes.TagFilters) {
            setName("Tags")
        } else if (props.filtertypes === Types.FilterTypes.FeatureFilters) {
            setName("Features")
        }
    }, [props.filtertypes])

    const { data, isPending, error } = useFetch(endPoint);

function showFilters(dt) {
    
    if (props.filtertypes === Types.FilterTypes.QuickFilters) {
        return <Checkbox
         key = {dt.Id}
         filter_name = {dt} 
         id = {dt.Id} 
         handleFilters = {props.handleFilters}
         filterType = {props.filtertypes}
         />
    } 
    
    if (props.filtertypes === Types.FilterTypes.TagFilters) {
        return <Checkbox
         key = {dt.TagId} 
         filter_name = {dt.Title} 
         id = {dt.TagId} 
         handleFilters = {props.handleFilters}
         filterType = {props.filtertypes}/>
    }

    if (props.filtertypes === Types.FilterTypes.CusineFilters) {
        return <Checkbox 
         key = {dt.Id} 
         filter_name = {dt.Value}
         id = {dt.Id}
         handleFilters = {props.handleFilters}
         filterType = {props.filtertypes}/>
    }

    if (props.filtertypes === Types.FilterTypes.FeatureFilters) {
        return <Checkbox 
         key = {dt.FeatureId} 
         filter_name = {dt.Title} 
         id = {dt.Id} 
         handleFilters = {props.handleFilters}
         filterType = {props.filtertypes}/>
    }
}

    return (
        
<div className="container" style={{display: "contents"}}>

<button className= { IsOpened ? "accordion is-open" : "accordion"} style={{outline: "0px auto -webkit-focus-ring-color"}} onClick={handdleToggle}>
    {filter_name}
    </button>
<div className="accordion-content" style={{maxHeight: "189px"}}>

<input type="text" className= {IsOpened ? "searchTerm-quick-filters" : "accordion-content-hide"} placeholder="Search" onChange={evt => setSearchValue(evt.target.value)}/>

                    {IsOpened ? isPending && <div><Skeleton/></div> : ""}
                    {IsOpened ? error && <div>{error}</div> : ""}
                    {IsOpened ? data && data.filter((v) => {
                    return searchValue === "" ?
                    v
                    :
                    v.Value.toLowerCase().includes(searchValue.toLowerCase())
                    }).map(dt => showFilters(dt)) : ""}
                    {/* v.Value is for cusine names, for tags its v.Title thats why it will crash on searching tags*/}
                        

</div>

</div>  


       
    )
}

