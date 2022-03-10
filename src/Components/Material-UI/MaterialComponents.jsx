import React, { useState } from "react";
import {
  Typography,
  Button,
  Stack,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import LockIcon from "@mui/icons-material/Lock";

const MaterialComponents = () => {
  const [formats, setFormats] = useState("");
  console.log("setFormats", setFormats);

  const handleChange = (event) => {
    setFormats(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <div className="my-4 mx-2">
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

      <div className="my-4 mx-2">
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </div>

      <div className="my-4 mx-2">
        <Stack spacing={2} direction="row">
          <Button
            endIcon={<SendIcon />}
            variant="contained"
            size="small"
            color="error"
          >
            Text
          </Button>
          <Button variant="contained" size="medium" color="secondary">
            Contained
          </Button>
          <Button
            endIcon={<SendIcon />}
            variant="contained"
            size="large"
            color="success"
          >
            Outlined
          </Button>
        </Stack>
      </div>

      <div className="my-4 mx-2">
        <Stack>
          <ButtonGroup variant="contained" size="small" color="primary">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
      </div>

      <div className="my-4 mx-2">
        <Stack direction="row">
          <ToggleButtonGroup
            size="small"
            value={formats}
            onChange={handleChange}
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </div>

      <div className="my-4 mx-2">
        <Stack direction="row">
          <TextField
            value={formats}
            onChange={(e) => setFormats(e.target.value)}
            type="password"
            variant="outlined"
            label="Password"
            size="small"
            color="primary"
            helperText={
              !formats ? "Required" : "Don't Share Your Password Anyone"
            }
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            size="small"
            helperText="Enter Amount"
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Stack>
      </div>
    </>
  );
};

export default MaterialComponents;
