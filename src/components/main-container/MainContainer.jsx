import Header from '../header/Header';
import OpinionCard from '../opinion/OpinionCard';
import Rating from '../rating/Rating';
import { StyledMainContainer, StyledOpinionContainer, StyledRatingContainer } from './maincontainer.style';

const MainContainer = () => {
  return (
    <StyledMainContainer>
      <Header />
      <StyledRatingContainer>
        <Rating web='Reviews' />
        <Rating web='Report Guru' />
        <Rating web='BestTech' />
      </StyledRatingContainer>
      <StyledOpinionContainer>
        <OpinionCard />
      </StyledOpinionContainer>
    </StyledMainContainer>
  );
};

export default MainContainer;
