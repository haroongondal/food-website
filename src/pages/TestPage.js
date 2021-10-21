import React from 'react'
import OrderHistory from '../components/OrderHistory';
import ProfileBanner from "../components/ProfileBanner";
import ProfileMenu from '../components/ProfileMenu';
import ReviewHistory from '../components/ReviewHistory';

export default function TestPage() {

    return (
        <div>
            <ProfileBanner/>
            <ProfileMenu/>
            <OrderHistory/>
            <ReviewHistory/>
        </div>
    )
}