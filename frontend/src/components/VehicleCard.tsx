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
  width: 300px;
`;

const TextContainer = styled.div`
  padding: 20px;
`;

const VehicleCard = (props: Props) => {
  const { vehicle } = props;
  return (
    <Link to={`/toll-passages/${vehicle.regnumber}`}>
      <Card>
        <VehicleCardImage src={vehicle.imageUrl} alt="vehicle" />
        <TextContainer>
          <h1>{vehicle.name}</h1>
          <p>{vehicle.description}</p>
        </TextContainer>
      </Card>
    </Link>
  );
};

export default VehicleCard;
