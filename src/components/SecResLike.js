import "../styles/SecResLike.css";
import ResLikeItem from "./ResLikeItem";
import Carousel from "react-multi-carousel";

export default function SecResLike() {
  const responsive = {
    largeScreen: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2000 },
      items: 4,
    },
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min: 1500 },
      items: 3,
    },

    tablet_tablet: {
      breakpoint: { max: 1500, min: 577 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      partialVisibilityGutter: 60,
    },
  };
  return (
    <div className="border-like-restaurents">
      <div className="content-like-restaurents">
        <h6>You May Also Like</h6>
        <h5>Checkout these great restaurants</h5>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          partialVisible={true}
        >
          {/* {restaurants.isPending && <div><Skeleton width={200} height={250}/></div>}
        {restaurants.error && <div>{restaurants.error}</div>} */}
          {/* {restaurants.data && restaurants.data.map((r) => <RestaurentItem key = {r.Id} data = {r}/>)} */}
          <ResLikeItem />
          <ResLikeItem />
          <ResLikeItem />
        </Carousel>
        <div className="boxes-like-restaurents"></div>
      </div>
    </div>
  );
}
