import '../styles/SecResLike.css'
import ResLikeItem from './ResLikeItem'

export default function SecResLike() {

    return (
        <div className="border-like-restaurents">
                    <div className="content-like-restaurents">
                        <h6>You May Also Like</h6>
                        <h5>Checkout these great restaurants</h5>
                        <div className="boxes-like-restaurents">
                            <ResLikeItem/>
                            <ResLikeItem/>
                            <ResLikeItem/>
                        </div>
                    </div>
                </div>
    )
}