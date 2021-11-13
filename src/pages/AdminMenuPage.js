import React from 'react'
import '../styles/AdminMenuPage.css'
import MenuComponent from '../components/MenuComponent'
import AdminMenuItem from '../components/AdminMenuItem'
import useFetch from '../Utils/useFetch'
import Skeleton from 'react-loading-skeleton'

function AdminMenuPage() {

    const {data, isPending, error} = useFetch("https://api.masairapp.com/api/Lov/GetCusineByRestaurantId?id=6")


    return (
        <div>
                    <MenuComponent/>
                    {isPending && <div><Skeleton/></div>}
                    {error && <div>{error}</div>}
                    {data && data.map(c => <AdminMenuItem data = {c}/>)}
                
           
        </div>
    )
}

export default AdminMenuPage
