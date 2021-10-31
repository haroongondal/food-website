import '../styles/Checkbox.css'

export default function Checkbox(props) {

  const handleCheck = (isChecked) => {
      props.handleFilters(isChecked, props.filterType, props.id)
    }
      
    return (
        <div>
        <label className="main"><h6 className="text-dineout">{props.filter_name}</h6>
        <input type="checkbox" onChange={(e) => handleCheck(e.target.checked)}/>
        <span className="w3docs"></span>
      </label>
      </div>
    )
}