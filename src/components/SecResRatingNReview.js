import '../styles/SecResRatingNReview.css'
import RatingNReviews from './RatingNReviews'
import ResDetailSortBy from './ResDetailSortBy'
import ResDetailFilter from './ResDetailFilter'
import ResDetailReviews from '../components/ResDetailReviews'
import Pagination from './Pagination'


export default function SecResRatingNReview(props) {

    return (
        <div className="border-rating-reviews" id="rating-review-section">
                    <div className="content-rating-reviews">
                        <h6>Ratings and reviews</h6>
                        <h5><span>{props.NoOfReviews}</span> reviews</h5>
                        <hr/>
                        <RatingNReviews data = {props.AverageRating}/>
                        <hr/>
                        <ResDetailSortBy/>
                        <ResDetailFilter/>
                        <div className="border-review-section">
                            {props.ReviewsList.map((r) =>
                            <ResDetailReviews data = {r}/>
                            )}
                            
                        </div>
                        <Pagination/>
                    </div>
        </div>
    )
}