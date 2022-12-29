import JellyContainer from "@/components/JellyContainer/JellyContainer";
import { Calculator } from "@/utils/calculator";
import { useState, useEffect } from "react";

export const MainView: React.VoidFunctionComponent = () => {
  const [calc] = useState<Calculator>(new Calculator());

  return <JellyContainer />;
};
export default MainView;
