import JellyCalculator from "@/components/JellyCalculator/JellyCalculator";
import JellyContainer from "@/components/JellyContainer/JellyContainer";
import { Calculator } from "@/utils/calculator";
import { useState, useEffect } from "react";

export const CalcView: React.VoidFunctionComponent = () => {
  const [calc] = useState<Calculator>(new Calculator());

  return (
    <JellyContainer>
      <JellyCalculator />
    </JellyContainer>
  );
};
export default CalcView;
