import React from 'react'
import BusinessMainSection from '../components/BusinessMainSection'
import BusinessNavbar from '../components/BusinessNavbar'
import DashboardBusiness from '../components/DashboardBusiness'

function BusinessLandingPage() {
    return (
        <div>
            <BusinessNavbar/>
            <DashboardBusiness/>
            <BusinessMainSection/>
        </div>
    )
}

export default BusinessLandingPage
