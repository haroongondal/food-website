import '../styles/FollowersList.css'
import FollowerItem from './FollowerItem'
function FollowersList() {
    

    return (
        <>
        <ul class="ul-for-followers">
       <FollowerItem/>
        </ul>
        <div id="loadMore">
                    <a href="#abc">Load More</a>
                 </div>
                 </>
    )
}

export default FollowersList
