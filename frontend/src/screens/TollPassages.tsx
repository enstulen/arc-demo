import { useParams } from "react-router-dom";

type Props = {};

const TollPassages = (props: Props) => {
  let { regnumber } = useParams();

  return <div>{regnumber} TollPassages</div>;
};

export default TollPassages;
