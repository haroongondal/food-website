import { useState } from 'react/cjs/react.development'
import '../styles/Checkbox.css'

export default function Checkbox({filter_name= "", key, ids}) {
  const {checks, setChecked} = useState([]);

  const handleCheck = (isChecked) => {
    if (isChecked) {
    checks.push(key)
    } else {
      var index = checks.indexOf(key);
      if (index > -1) {
      checks.splice(index, 1);
  }
    }
    setChecked(checks)
    ids(checks)
    console.log(checks)
  }
    return (
        <div>
        <label className="main"><h6 className="text-dineout">{filter_name}</h6>
        <input type="checkbox" onChange={(e) => handleCheck(e.target.value)}/>
        <span className="w3docs"></span>
      </label>
      </div>
    )
}