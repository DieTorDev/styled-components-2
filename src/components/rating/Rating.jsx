import { StyledMagazin, StyledRating, StyledStars } from "./rating.style"

const Rating = ({web}) =>{
    return(
        <StyledRating>
            <StyledStars>
                <img src="../../../public/images/icon-star.svg" alt="star" />
                <img src="../../../public/images/icon-star.svg" alt="star" />
                <img src="../../../public/images/icon-star.svg" alt="star" />
                <img src="../../../public/images/icon-star.svg" alt="star" />
                <img src="../../../public/images/icon-star.svg" alt="star" />
            </StyledStars>
            <StyledMagazin>
                Rated 5 Stars in {web}
            </StyledMagazin>
        </StyledRating>
    )
}

export default Rating