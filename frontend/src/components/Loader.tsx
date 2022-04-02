import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loader = () => {
  return (
    <CenterContainer>
      <ClipLoader color="#FF4A7E" size={50} />
    </CenterContainer>
  );
};

export default Loader;
