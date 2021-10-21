import '../styles/Checkbox.css'

export default function Checkbox({filter_name= ""}) {
    return (
        <div>
        <label className="main"><h6 className="text-dineout">{filter_name}</h6>
        <input type="checkbox"/>
        <span className="w3docs"></span>
      </label>
      </div>
    )
}