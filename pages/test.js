import styled from 'styled-components';
export default function test() {
  return (
    <StyledTest>
      <iframe
        src="https://player.vimeo.com/video/372874310?h=d9ef3375e0"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        fullscreen
      ></iframe>
    </StyledTest>
  );
}

const StyledTest = styled.div`
  border: 1px solid red;
  height: 100vh;
`;
