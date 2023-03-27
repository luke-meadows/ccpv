import styled from 'styled-components';
export default function Showreel() {
  return (
    <StyledShowreel id="showreel">
      <div className="showreel-text">
        <div className="text-wrap">
          <h3>
            Showreel <span>{new Date().getFullYear()}</span>
          </h3>
        </div>
      </div>
      <div className="video"></div>
    </StyledShowreel>
  );
}

const StyledShowreel = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 4rem 8rem 4rem 8rem;
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
    height: 40rem;
    border: 1px solid blue;
  }
`;
