import React from "react";
import { Typography, Button, Stack , ButtonGroup} from "@mui/material";

const MaterialComponents = () => {
  return (
    <>
      <div>
        <Typography variant="h5">Heading</Typography>
        <Typography variant="subtitle1">
          {" "}
          But I must explain to you how all this mistaken idea of denouncing
        </Typography>
        <Typography variant="subtitle2">
          {" "}
          But I must explain to you how all this mistaken idea of denouncing
        </Typography>
        <Typography variant="body1">
          {" "}
          But I must explain to you how all this mistaken idea of denouncing
        </Typography>
        <Typography variant="body2">
          {" "}
          But I must explain to you how all this mistaken idea of denouncing
        </Typography>
      </div>

      <div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        </Stack>
      </div>
      
      <div>
      <Stack spacing={2} direction="row">
        <Button variant="contained" size="small" color="error">Text</Button>
        <Button variant="contained" size="medium" color="secondary">Contained</Button>
        <Button variant="contained" size="large" color="success">Outlined</Button>
        </Stack>
      </div>

    </>
  );
};

export default MaterialComponents;
