import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { TollPassage } from "../types";
import { DateTime } from "luxon";
import Loader from "../components/Loader";
import TollPassageCard from "../components/TollPassageCard";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import { apiUrl } from "../utils/url";

interface GroupedTollPassage {
  [key: string]: TollPassage[];
}

const TollPassageContainer = styled.div`
  margin-top: 50px;
`;

const Container = styled.div`
  padding: 40px;
`;

const TollPassages = () => {
  let { regnumber } = useParams();
  const [tollPassages, setTollPassages] = useState<TollPassage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `${apiUrl()}/vehicles/${regnumber}/toll-passages`
      );
      const tollPassages = await response.json();
      setTollPassages(tollPassages);
      setLoading(false);
    };
    fetchData();
  }, [regnumber]);

  const groupedTollPassages = tollPassages.reduce(
    (result: GroupedTollPassage, tollPassage: TollPassage) => {
      const date = DateTime.fromISO(tollPassage.date).toFormat("DDD");

      if (!result[date]) {
        result[date] = [tollPassage];
      } else {
        result[date] = [...result[date], tollPassage];
      }

      return result;
    },
    {}
  );

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <BackButton></BackButton>
          {Object.keys(groupedTollPassages).map((date) => {
            return (
              <TollPassageContainer key={date}>
                <h2>{date}</h2>
                <TollPassageCard
                  tollPassages={groupedTollPassages[date]}
                ></TollPassageCard>
              </TollPassageContainer>
            );
          })}
        </>
      )}
    </Container>
  );
};

export default TollPassages;
