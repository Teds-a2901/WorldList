/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigates = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigates(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
