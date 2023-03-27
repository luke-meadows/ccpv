import Vimeo from '@u-wave/react-vimeo';
import styled from 'styled-components';
import Container from './global/Container';
export default function Showreel() {
  return (
    <Container>
      <StyledShowreel id="showreel">
        <div className="showreel-text">
          <div className="text-wrap">
            <h3>
              Showreel <span>{new Date().getFullYear()}</span>
            </h3>
          </div>
        </div>
        <div className="video">
          <Vimeo video="174620220" volume={0} paused={true} responsive />
          <span style={{ color: 'red' }}>
            <br />
            ** Need the vimeo Id number for actual showreel
          </span>
        </div>
      </StyledShowreel>
    </Container>
  );
}

const StyledShowreel = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  .showreel-text {
    position: relative;
    width: 10rem;
  }
  .text-wrap {
    position: absolute;
    left: -120px;
    top: -80px;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
  h3 {
    font-size: 4rem;
    font-weight: 600;
    max-width: 9ch;
    text-transform: uppercase;
    margin-top: -1.1rem;
    span {
      font-size: 2.8rem;
      color: #d7d7d7;
      font-weight: 400;
    }
    span::after {
      content: '';
      width: 65%;
      position: absolute;
      right: 0px;
      height: 1px;
      background: #d7d7d7;
      bottom: 20%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
  .video {
    width: 100%;
    position: relative;
    margin: auto;
  }
  iframe {
    max-width: 100%;
    width: 100%;
  }

  @media only screen and (max-width: 1050px) {
    h3 {
      font-size: 3rem;
      margin-top: 2.4rem;
      margin-left: 0.6rem;
    }
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .showreel-text {
      position: relative;
      width: 100%;
    }
    .text-wrap {
      position: initial;
      left: 0px;
      top: 0px;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    h3 {
      font-size: 3rem;
      margin-top: 0rem;
      margin-left: 0rem;
      font-size: 1.5rem;
      font-weight: 700;
      span {
        font-size: 1.5rem;
      }
      span::after {
        content: '';
        width: 80%;
        position: absolute;
        right: 0px;
        height: 1px;
        background: #d7d7d7;
        bottom: 20%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
      }
    }
  }
`;
