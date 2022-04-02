import React from "react";
import styled from "styled-components";
import { TollPassage } from "../types";
import BaseCard from "./Card";
import { ReactComponent as TollIcon } from "../icons/toll.svg";
import { DateTime } from "luxon";
type Props = {
  tollPassages: TollPassage[];
};

const Card = styled(BaseCard)`
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin: 0px;
`;

const Subtitle = styled.h2`
  color: #8c8c8c;
  font-size: 12px;
  margin: 5px 0px 0px 0px;
`;

const TollPassageCard = ({ tollPassages }: Props) => {
  return (
    <Card>
      {tollPassages.map((tollPassage) => {
        return (
          <Container>
            <LeftContainer>
              <TollIcon color="#ff4a7e" />
              <TextContainer>
                <Title>{tollPassage.location}</Title>
                <Subtitle>
                  {DateTime.fromISO(tollPassage.date).toFormat("dd/MM/yyyy")}
                </Subtitle>
              </TextContainer>
            </LeftContainer>

            <p> {tollPassage.regnumber}</p>
          </Container>
        );
      })}
    </Card>
  );
};
export default TollPassageCard;
