import '../styles/Filter.css'

export default function Filter({filter_name= ""}) {

    return (
        <div>
        <label class="main"><h6 class="text-dineout">{filter_name}</h6>
        <input type="checkbox"/>
        <span class="w3docs"></span>
      </label>
      </div>
    )
}