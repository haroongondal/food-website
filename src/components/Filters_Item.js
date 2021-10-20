import '../styles/Filters_Item.css'
import Filter from './Filter'

export default function FiltersItem() {

    return (
        <div>

<div className="alignment listing_sidebar">

{/* content starts here */}

<div className="container" style={{display: "contents"}}>

<button className="accordion is-open" style={{outline: "0px auto -webkit-focus-ring-color"}}>Quick Filters</button>
<div className="accordion-content" style={{maxHeight: "189px"}}>

<input type="text" className="searchTerm-quick-filters" placeholder="Search"/>
<Filter/>

</div>

</div>  
</div>

        </div>
    )
}