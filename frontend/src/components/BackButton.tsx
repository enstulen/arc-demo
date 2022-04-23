import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import BaseCard from "./Card";

const Button = styled(BaseCard)`
  background-color: white;
  color: black;
  max-width: 150px;
  border-radius: 10px;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px 15px 5px 15px;
`;

const Text = styled.p`
  font-weight: bold;
  margin-left: 20px;
`;

const BackButton = () => {
  let navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/")}>
      <ArrowIcon height={20} width={40}></ArrowIcon>
      <Text>Gå tilbake</Text>
    </Button>
  );
};

export default BackButton;
