import React, { useState, useEffect } from "react";
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
  Drawer,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  BottomNavigation,
  BottomNavigationAction,
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  ListItemButton,
  Divider,
  Chip,
  Tooltip,
  Alert,
  AlertTitle,
  Snackbar,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  CircularProgress,
  LinearProgress,
  Skeleton,
  Tab,
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
import MenuIcon from "@mui/icons-material/Menu";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import MUITable from "./MUITable";
import CheckIcon from "@mui/icons-material/Check";
import ProductContainer from "../ReduxProject/ProductContainer";
import {
  LoadingButton,
  LocalizationProvider,
  DatePicker,
  TimePicker,
  DateTimePicker,
  DateRangePicker,
  TabContext,
  TabList,
  TabPanel,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [navigatevalue, setNavigatevalue] = useState(0);

  const [chips, setchips] = useState(["Chip 1", "Chip 2", "Chip 3"]);

  const handleDelete = (chipToDelete: string) => {
    setchips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  const [open, setOpen] = useState();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [loading, setLoading] = useState(true);

  const [dialogOpen, setdialogOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const [selectedDateRange, setSelectedDateRange] = useState(null);

  const [tabValue, setTabValue] = useState("1");
  const tabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
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
          <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon />}>
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

      <div className="my-4 mx-2">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box p={2} width="250px" textAlign="center" role="presentation">
            <Typography variant="h6" component="div">
              Side Panel{" "}
            </Typography>
          </Box>
        </Drawer>
      </div>

      <div className="my-4 mx-2">
        <SpeedDial
          ariaLabel="Navigation speed dial"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        >
          <SpeedDialAction
            icon={<CopyIcon />}
            tooltipTitle="Copy"
            tooltipOpen
          />
          <SpeedDialAction
            icon={<PrintIcon />}
            tooltipTitle="Print"
            tooltipOpen
          />
          <SpeedDialAction
            icon={<ShareIcon />}
            tooltipTitle="Share"
            tooltipOpen
          />
        </SpeedDial>
      </div>

      <div className="my-4 mx-2">
        <BottomNavigation
          sx={{ width: "100%", position: "absolute", bottom: 0 }}
          value={navigatevalue}
          onChange={(event, newValue) => {
            setNavigatevalue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </div>

      <div className="my-4 mx-2">
        <Stack spacing={4}>
          <Stack direction="row" spacing={1}>
            <Avatar sx={{ bgcolor: "primary.light" }}>SY</Avatar>
            <Avatar sx={{ bgcolor: "success.light" }}>NY</Avatar>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Avatar sx={{ bgcolor: "primary.light" }}>SY</Avatar>
            <Avatar sx={{ bgcolor: "success.light" }}>NY</Avatar>
          </Stack>
        </Stack>
      </div>

      <div className="my-4 mx-2">
        <Stack spacing={2} direction="row">
          <Badge badgeContent={5} color="primary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={0} color="secondary" showZero>
            <MailIcon />
          </Badge>
        </Stack>
      </div>

      <div className="my-4 mx-2">
        <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemAvatar>
                    <Avatar>
                      <MailIcon />
                    </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>

                <ListItemText
                  primary="List Item 1"
                  secondary="Secondary Text"
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemAvatar>
                    <Avatar>
                      <MailIcon />
                    </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText
                  primary="List Item 2"
                  secondary="Secondary Text"
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemAvatar>
                    <Avatar>
                      <MailIcon />
                    </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText
                  primary="List Item 3"
                  secondary="Secondary Text"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </div>

      <div className="my-4 mx-2">
        <Stack direction="row" spacing={1}>
          <Chip label="Label" color="primary" size="large" />
          <Chip
            label="Label"
            color="primary"
            size="large"
            variant="outlined"
            avatar={<Avatar></Avatar>}
          />

          {chips.map((chip) => (
            <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
          ))}
        </Stack>
      </div>

      <div className="my-4 mx-2">
        <Tooltip title=" Delete" placement="top" arrow>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>

      <div className="my-4 mx-2">
        <MUITable />
      </div>

      <div className="my-4 mx-2">
        <Alert severity="error">Alert Component</Alert>
        <Alert severity="warning">Alert Component</Alert>
        <Alert severity="info">Alert Component</Alert>
        <Alert severity="success">Alert Component</Alert>
        <Alert variant="outlined" severity="error">
          Alert Component
        </Alert>
        <Alert variant="outlined" severity="warning">
          Alert Component
        </Alert>
        <Alert variant="outlined" severity="info">
          Alert Component
        </Alert>
        <Alert variant="outlined" severity="success">
          Alert Component
        </Alert>
        <Alert
          variant="filled"
          severity="error"
          onClose={() => alert("Close Alert")}
        >
          <AlertTitle>Error</AlertTitle>Alert Component
        </Alert>
        <Alert variant="filled" severity="warning">
          <AlertTitle>Warning</AlertTitle>Alert Component
        </Alert>
        <Alert variant="filled" severity="info">
          <AlertTitle>Info</AlertTitle>Alert Component
        </Alert>
        <Alert
          variant="filled"
          severity="success"
          icon={<CheckIcon />}
          action={
            <Button color="inherit" size="small">
              UND0
            </Button>
          }
        >
          <AlertTitle>Success</AlertTitle>Alert Component
        </Alert>
      </div>

      <div className="my-4 mx-2">
        <Button onClick={() => setOpen(true)}>Submit</Button>
        <Snackbar
          message="Form Submitted Succesful"
          autoHideDuration={4000}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </div>

      <div className="my-4 mx-2">
        <Button
          onClick={() => setdialogOpen(true)}
          variant="contained"
          color="primary"
        >
          Open Dialog
        </Button>
        <Dialog open={dialogOpen} onClose={() => setdialogOpen(false)}>
          <DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure want to submit the test? You will not be able to
                edit after submitting
              </DialogContentText>
            </DialogContent>
          </DialogTitle>
          <DialogActions>
            <Button
              onClick={() => setdialogOpen(false)}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>

            <Button
              onClick={() => setdialogOpen(false)}
              autoFocus
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div className="my-4 mx-2">
        <CircularProgress />
        <CircularProgress color="success" />
        <LinearProgress />
        <LinearProgress color="success" />
      </div>

      <div className="my-4 mx-2">
        <Stack spacing={1} width="250px">
          <Skeleton variant="text" animation="wave" />
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            width={250}
            height={125}
            animation="wave"
          />
        </Stack>
      </div>

      <div className="my-4 mx-2">
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
        <LoadingButton variant="outlined">Submit</LoadingButton>
        <LoadingButton
          loading
          variant="outlined"
          loadingPosition="start"
          startIcon={<DeleteIcon />}
        >
          Delete
        </LoadingButton>
      </div>

      <div className="my-4 mx-2">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={4} sx={{ width: "250px" }}>
            <DatePicker
              label="Date Picker"
              renderInput={(params) => <TextField {...params} />}
              value={selectedDate}
              onChange={(newvalue) => setSelectedDate(newvalue)}
            />
          </Stack>
        </LocalizationProvider>{" "}
      </div>

      <div className="my-4 mx-2">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={4} sx={{ width: "250px" }}>
            <TimePicker
              label="Date Picker"
              renderInput={(params) => <TextField {...params} />}
              value={selectedTime}
              onChange={(newvalue) => setSelectedTime(newvalue)}
            />
          </Stack>
        </LocalizationProvider>
      </div>
      <div className="my-4 mx-2">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={4} sx={{ width: "450px" }}>
            <DateTimePicker
              label="Date Picker"
              renderInput={(params) => <TextField {...params} />}
              value={selectedDateTime}
              onChange={(newvalue) => setSelectedDateTime(newvalue)}
            />
          </Stack>
        </LocalizationProvider>
      </div>

      <div className="my-4 mx-2">
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={tabChange}
              textColor="primary"
              indicatorColor="primary"
              centered
            >
              <Tab
                label="Tab One"
                value="1"
                icon={<LockIcon />}
                iconPosition="start"
              />
              <Tab label="Tab One" value="2" />
              <Tab label="Tab One" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Panel 1 </TabPanel>
          <TabPanel value="2">Panel 2 </TabPanel>
          <TabPanel value="3">Panel 3 </TabPanel>
        </TabContext>
      </div>

      <div className="my-4 mx-2">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="primary">9.30 am </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>City A</TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent color="primary">10.30 am </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>City B</TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent color="primary">11.30 am </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {/* <TimelineConnector />  */}
            </TimelineSeparator>
            <TimelineContent>City C</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>

      <div className="my-4 mx-2">
        <Box sx={{
          height: "300px",
          width:{
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,

          },
          bgcolor:"primary.main"
        }}> 

        </Box>
      </div>
    </>
  );
};

export default MaterialComponents;
