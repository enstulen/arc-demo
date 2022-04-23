import { Link, useNavigate } from "react-router-dom";
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
  justify-content: center;
  flex: 4;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Subtitle = styled.p`
  color: #8c8c8c;
`;

const VehicleCard = (props: Props) => {
  const { vehicle } = props;
  let navigate = useNavigate();

  return (
    <Card>
      <VehicleCardImage src={vehicle.imageUrl} alt="vehicle" />
      <ContentContainer>
        <TextContainer>
          <h1>{vehicle.name}</h1>
          <Subtitle>{vehicle.description}</Subtitle>
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
