import '../styles/SecResRatingNReview.css'
import RatingNReviews from './RatingNReviews'
import ResDetailSortBy from './ResDetailSortBy'
import ResDetailFilter from './ResDetailFilter'
import ResDetailReviews from '../components/ResDetailReviews'
import Pagination from './Pagination'

export default function SecResRatingNReview() {

    return (
        <div class="border-rating-reviews" id="rating-review-section">
                    <div class="content-rating-reviews">
                        <h6>Ratings and reviews</h6>
                        <h5><span>234</span> reviews</h5>
                        <hr/>
                        <RatingNReviews/>
                        <hr/>
                        <ResDetailSortBy/>
                        <ResDetailFilter/>
                        <div className="border-review-section">
                           <ResDetailReviews/>
                        </div>
                        <Pagination/>
                    </div>
        </div>
    )
}