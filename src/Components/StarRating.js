import React, { useState } from "react";
import { Icon, Typography, Button } from "@mui/material";

import StarRateIcon from "@mui/icons-material/StarRate";

const StarRating = () => {
  const stars = [
    <StarRateIcon fontSize="large" />,
    <StarRateIcon fontSize="large" />,
    <StarRateIcon fontSize="large" />,
    <StarRateIcon fontSize="large" />,
    <StarRateIcon fontSize="large" />,
  ];
  const [rating, setrating] = useState(stars);
  const [index, setIndex] = useState(-1);

  const HandleClick = (i) => {
    const arr = [...rating];

    for (let k = 0; k <= i; k++) {
      if (index <= i)
        arr[k] = <StarRateIcon color="primary" fontSize="large" />;
      else
        for (let k = index; k > i; k--)
          arr[k] = <StarRateIcon fontSize="large" />;
    }
    setrating(arr);
    setIndex(i);
  };
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Star Rating Component
      </Typography>

      <div>
        {rating.map((item, i) => {
          return (
            <Icon
              sx={{ m: 1 }}
              fontSize="large"
              onClick={() => {
                HandleClick(i);
              }}
            >
              {item}
            </Icon>
          );
        })}

        <Typography variant="h6" gutterBottom>The given rating is {index + 1}</Typography>
        <div>
          <Button onClick={() =>{setrating(stars);setIndex(-1)} } variant="contained">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};
export default StarRating;
