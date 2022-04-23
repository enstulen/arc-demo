import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Vehicle } from "../types";
import BaseCard from "./Card";

type Props = {
  vehicle: Vehicle;
};

const VehicleCardImage = styled.img`
  height: 180px;
  width: 100%;
  object-fit: contain;
`;

const Card = styled(BaseCard)`
  width: 350px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  padding: 20px;
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Button = styled.button`
  background-color: #ff4a7e;
  color: white;
  font-weight: bold;
  padding: 20px 50px 20px 50px;
  border-radius: 10px;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 4;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px 10px 0px;
`;

const Header = styled.h1`
  margin: 0px;
  color: #15212d;
`;

const Subtitle = styled.h2`
  color: #9aa4b0;
  margin: 5px 0px 0px 0px;
  font-size: 14px;
`;

const Text = styled.p``;

const VehicleCard = (props: Props) => {
  const { vehicle } = props;
  let navigate = useNavigate();

  return (
    <Card>
      <VehicleCardImage src={vehicle.imageUrl} alt="vehicle" />
      <ContentContainer>
        <TextContainer>
          <Header>{vehicle.name}</Header>
          <Subtitle>{vehicle.regnumber}</Subtitle>
          <Text>{vehicle.description}</Text>
        </TextContainer>

        <ButtonContainer>
          <Button
            onClick={() => navigate(`/toll-passages/${vehicle.regnumber}`)}
          >
            Se bompasseringer
          </Button>
        </ButtonContainer>
      </ContentContainer>
    </Card>
  );
};

export default VehicleCard;
