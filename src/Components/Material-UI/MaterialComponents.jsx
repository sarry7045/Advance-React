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
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  Breadcrumbs,
  Link,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import LockIcon from "@mui/icons-material/Lock";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MuiImageList } from "./ImageList";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

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

  const [expanded, setExpanded] = useState(false);

  const accordionChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  // const open = Boolean(anchorEl)
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget)
  // }
  // const handleClose = () => {
  //   setAnchorEl(null)
  // }

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
        <ButtonGroup variant="contained" size="small" color="primary">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
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
        <Rating
          value={rating}
          onChange={ratingChange}
          // precision={0.5}
        />

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

      <div className="my-4 mx-2">
        <Box width="300px">
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" color="div">
                React
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </div>

      <div className="my-4 mx-2">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={(event, isExpanded) =>
            accordionChange(isExpanded, "panel1")
          }
        >
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={(event, isExpanded) =>
            accordionChange(isExpanded, "panel2")
          }
        >
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={(event, isExpanded) =>
            accordionChange(isExpanded, "panel3")
          }
        >
          <AccordionSummary
            id="panel3-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="my-4 mx-2">
        <MuiImageList />
      </div>

      <div className="my-4 mx-2">
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
            >
              <CatchingPokemonIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              POKEMONAPP
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Pricing</Button>
              <Button color="inherit">About</Button>
              <Button
                color="inherit"
                id="resources-button"
                // aria-controls={open ? "resources-menu" : undefined}
                aria-haspopup="true"
                // aria-expanded={open ? "true" : undefined}
                endIcon={<KeyboardArrowDownIcon />}
                // onClick={handleClick}
              >
                Resources
              </Button>
              <Button color="inherit">Login</Button>
            </Stack>
            <Menu
              id="resources-menu"
              // anchorEl={anchorEl}
              // open={open}
              // onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              MenuListProps={{
                "aria-labelledby": "resources-button",
              }}
            >
              <MenuItem
              // onClick={handleClose}
              >
                Blog
              </MenuItem>
              <MenuItem
              // onClick={handleClose}
              >
                Podcast
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>

      <div className="my-4 mx-2">
        <Box>
          <Breadcrumbs aria-label="breadcrumb" separator= {<NavigateNextIcon/>}>
            <Link underline="hover" href="#">
              Home
            </Link>
            <Link underline="hover" href="#">
              Catelog
            </Link>
            <Link underline="hover" href="#">
              Accessories
            </Link>
            <Link underline="hover" href="#">
              Shoes
            </Link>
          </Breadcrumbs>
        </Box>
      </div>
    </>
  );
};

export default MaterialComponents;
