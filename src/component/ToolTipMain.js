import React, { useState } from "react";
import { Tooltip } from "reactstrap";

const ToolTipMain = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <Tooltip placement="top" isOpen={tooltipOpen} target={props.target} toggle={() => setTooltipOpen(!tooltipOpen)}>
      {props.message}
    </Tooltip>
  );
};

export default ToolTipMain;
