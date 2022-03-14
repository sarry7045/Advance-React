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
  Box,
  MenuItem,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  Switch,
  Rating,
  Autocomplete,
  Grid,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import LockIcon from "@mui/icons-material/Lock";

const skills = ["HTML", "CSS", "React", "Next", "Node"];

const MaterialComponents = () => {
  const [formats, setFormats] = useState("");
  console.log("setFormats", setFormats);

  const [country, setCountry] = useState("In");
  console.log(country);

  const [experience, setExperience] = useState("");
  console.log(experience);

  const [check, setCheck] = useState(false);
  console.log(check);

  const [dcheck, setDcheck] = useState(false);
  console.log(dcheck);

  const [rating, setRating] = useState(null);
  console.log(rating);

  const ratingChange = (e) => {
    setRating(e.target.value);
  };

  const dcheckChange = (e) => {
    setDcheck(e.target.checked);
  };

  const countryChange = (event) => {
    setCountry(event.target.value);
  };

  const experienceChange = (event) => {
    setExperience(event.target.value);
  };

  const checkChange = (event) => {
    setCheck(event.target.checked);
  };

  const handleChange = (event) => {
    setFormats(event.target.value);
    console.log(event.target.value);
  };

  var a = 10;
  console.log(a);
  // console.log(a, b);
  // var b = 20;
  // Value of b is Undefned, because we called afer the clg - Hoisting

  const closure = () => {
    let a = 10;
    console.log(a);
    const closure1 = () => {
      let b = 20;
      console.log(b);
    };
    closure1();
  };
  closure();

  // defined function inside the function but to print the second function we need to call the second function insdide the first function. - closure

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

      <div className="my-4 mx-2">
        <Box>
          <TextField
            select
            label="Select Country"
            value={country}
            onChange={countryChange}
          >
            <MenuItem value="In">India</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="AUS">Aus</MenuItem>
          </TextField>
        </Box>
      </div>

      <div className="my-4 mx-2">
        <Box>
          <FormControl id="job">
            <FormLabel>Years Of Experience</FormLabel>

            <RadioGroup
              onChange={experienceChange}
              value={experience}
              name="job"
            >
              <FormControlLabel control={<Radio />} label="0-1" value="0-1" />
              <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
              <FormControlLabel control={<Radio />} label="0-3" value="0-3" />
            </RadioGroup>
          </FormControl>
        </Box>
      </div>

      <div className="my-4 mx-2">
        <Box>
          <FormControlLabel
            label="I Accept terms and Conditions"
            control={<Checkbox checked={check} onChange={checkChange} />}
          ></FormControlLabel>
        </Box>
      </div>

      <div className="my-4 mx-2">
        <Box>
          <FormControlLabel
            label="Dark Mode"
            control={
              <Switch
                checked={dcheck}
                onChange={dcheckChange}
                size="small"
                color="success"
              />
            }
          ></FormControlLabel>
        </Box>
      </div>

      <div className="my-4 mx-2">
        <Stack spacing={2}>
          <Rating
            value={rating}
            onChange={ratingChange}
            // precision={0.5}
          />
        </Stack>
        <Stack spacing={2}>
          {/* <Rating
            value={rating}
            onChange={ratingChange}
            precision={0.5}
            icon={<FavoriteBorderIcon />}
          /> */}
        </Stack>
      </div>

      <div className="my-4 mx-2">
        <Box>
          <Autocomplete
            options={skills}
            renderInput={(params) => <TextField {...params} label="Skills" />}
          />
        </Box>
      </div>

      <div className="my-4 mx-2">
        <Grid container my={4} rowSpacing={2} columnSpacing={4}>
          <Grid item xs={6} sm={4} md={8}>
            <Box bgcolor="primary.light">Item 1</Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box bgcolor="primary.light">Item 2</Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box bgcolor="primary.light">Item 3</Box>
          </Grid>
          <Grid item xs={6} sm={4} md={8}>
            <Box bgcolor="primary.light">Item 4</Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MaterialComponents;
