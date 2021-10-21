import useGeolocation from 'react-hook-geolocation'

const useLocation = () => {
    const geolocation = useGeolocation();
  
    if(!geolocation.error) {
    return {
      lat: geolocation.latitude,
      long: geolocation.longitude
    }
  } else{
    return geolocation.error
  }
}
 
export default useLocation;