import '../styles/Heading_Restaurent_Near.css'

export default function Heading_Restaurent_Near({heading = ""}) {

    // const [data, setData] = useState();
    // useEffect(() => {
    //    setData(heading)
    // }, [heading])
    return (
        <div>
           
           <div className="heading_restaurent_near">
            <h3>{heading}</h3>
            <h6>View all</h6>
        </div>
        <hr className="line"/>
                
            
        </div>
    )
}