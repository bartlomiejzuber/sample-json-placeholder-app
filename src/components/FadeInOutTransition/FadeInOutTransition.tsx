import React, { useCallback, useState } from "react";
import { Fade, FadeProps } from "@material-ui/core";

interface FadeInOutTransitionProps extends FadeProps {
  condition: boolean;
  firstNode: FadeProps["children"];
  secondNode: FadeProps["children"];
}

/**
 * Makes a nice transition between two passed nodes
 */
export const FadeInOutTransition: React.FC<FadeInOutTransitionProps> = ({
  condition,
  firstNode,
  secondNode,
}) => {
  const [finished, setFinished] = useState(false);
  const handleFinished = useCallback(
    () => setFinished((finished) => !finished),
    []
  );

  return (
    <>
      <Fade
        in={!condition && !finished}
        onExited={handleFinished}
        unmountOnExit
      >
        {firstNode}
      </Fade>
      <Fade in={condition && finished} onExited={handleFinished} unmountOnExit>
        {secondNode}
      </Fade>
    </>
  );
};
