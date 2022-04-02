import { Link } from "react-router-dom";
import styled from "styled-components";
import { Vehicle } from "../types";
import BaseCard from "./Card";

type Props = {
  vehicle: Vehicle;
};

const VehicleCardImage = styled.img`
  height: 180px;
  width: 100%;
  object-fit: cover;
`;

const Card = styled(BaseCard)`
  width: 350px;
`;

const ContentContainer = styled.div`
  padding: 20px;
  text-decoration: none;
  color: black;
`;

const Button = styled.button`
  background-color: #ff4a7e;
  color: white;
  font-weight: bold;
  padding: 20px 40px 20px 40px;
  border-radius: 10px;
  outline: none;
  border: none;
  text-decoration: none;
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
  return (
    <Link to={`/toll-passages/${vehicle.regnumber}`}>
      <Card>
        <VehicleCardImage src={vehicle.imageUrl} alt="vehicle" />
        <ContentContainer>
          <h1>{vehicle.name}</h1>
          <Subtitle>{vehicle.description}</Subtitle>
          <ButtonContainer>
            <Button>Se bompasseringer</Button>
          </ButtonContainer>
        </ContentContainer>
      </Card>
    </Link>
  );
};

export default VehicleCard;
