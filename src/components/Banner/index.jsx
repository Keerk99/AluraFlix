import styled from "styled-components";
import banner from "../../assets/img/background_main.png";
import demo from "../../assets/img/img_demo.jpg";

const BannerContainer = styled.div`
  background: url(${banner}) no-repeat center / cover;
  padding: 4.5rem 4rem;
  display: flex;
  align-items: flex-end;
  height: 55vh;
  gap: 4rem;
  position: relative;
  justify-content: center;
  @media screen and (min-width: 425px) and (max-width: 767px) {
    padding: 2rem;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    padding: 2rem 0.8rem;
  }
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  gap: 2.5rem;
  @media screen and (min-width: 0) and (max-width: 424px) {
    gap: 0.5rem;
    background: rgba(83, 88, 93, 0.7);
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
`;

const BannerTitle = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 0;
  @media screen and (min-width: 0) and (max-width: 1023px) {
    text-align: center;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    font-size: 1.2rem;
    margin: 0;
  }
`;

const BannerP = styled.p`
  font-size: 1.2rem;
  margin-top: 0;
  @media screen and (min-width: 0) and (max-width: 1023px) {
    text-align: center;
  }
  @media screen and (min-width: 0) and (max-width: 424px) {
    font-size: 0.9rem;
    margin: 0;
  }
`;

const Img = styled.img`
  width: 600px;
  border-radius: 2rem;
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    width: 400px;
  }
  @media screen and (min-width: 0) and (max-width: 1023px) {
    display: none;
  }
`;

function Banner() {
  return (
    <section>
      <BannerContainer>
        <BannerText>
          <BannerTitle>Challenge React</BannerTitle>
          <BannerP>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </BannerP>
        </BannerText>
        <Img src={demo} alt="Banner principal" />
      </BannerContainer>
    </section>
  );
}

export default Banner;
