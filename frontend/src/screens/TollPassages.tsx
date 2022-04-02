import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { TollPassage } from "../types";
import { DateTime } from "luxon";
import Loader from "../components/Loader";
import TollPassageCard from "../components/TollPassageCard";
import styled from "styled-components";

interface GroupedTollPassage {
  [key: string]: TollPassage[];
}

const Container = styled.div`
  margin-top: 60px;
`;

const TollPassages = () => {
  let { regnumber } = useParams();
  const [tollPassages, setTollPassages] = useState<TollPassage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3333/vehicles/${regnumber}/toll-passages`
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
    <>
      {loading ? (
        <Loader />
      ) : (
        Object.keys(groupedTollPassages).map((date) => {
          return (
            <Container>
              <h2>{date}</h2>
              <TollPassageCard
                tollPassages={groupedTollPassages[date]}
              ></TollPassageCard>
            </Container>
          );
        })
      )}
    </>
  );
};

export default TollPassages;
