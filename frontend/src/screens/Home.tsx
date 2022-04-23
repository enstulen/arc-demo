import { useEffect, useState } from "react";
import styled from "styled-components";
import VehicleCard from "../components/VehicleCard";
import { Vehicle } from "../types";

type HomeProps = {};

const VehicleCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 50px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  padding: 40px;
`;

const Home = (props: HomeProps) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3333/vehicles");
    const vehicles = await response.json();
    setVehicles(vehicles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Biler</h1>
      <VehicleCardContainer>
        {vehicles.map((vehicle) => {
          return (
            <VehicleCard
              vehicle={vehicle}
              key={vehicle.regnumber}
            ></VehicleCard>
          );
        })}
      </VehicleCardContainer>
    </Container>
  );
};

export default Home;
