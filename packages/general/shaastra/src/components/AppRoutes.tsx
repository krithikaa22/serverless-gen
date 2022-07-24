import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Link } from "@chakra-ui/react";
import Exhibitions from "./pages/Exhibitions/Exhibitions";
import Home from "./pages/Home";
import Envisage from "./pages/night/Envisage";
// import Shows from "./pages/night/Shows";
import Project from "./pages/night/Project";
import Team from "./pages/Team_page/Team";
import ShaastraJuniorsPage from "./pages/ShaastraJuniors";
import Social from "./pages/socialEndeavours/SocialEnd";
import Eventsworkshops from "./pages/Events and Workshops/EventsHome";
import Events from "./pages/Events and Workshops/Events";
import Summit from "./pages/Events and Workshops/Summit";
import Tif from "./pages/Events and Workshops/Tif";
import Workshops from "./pages/Events and Workshops/Workshops";
import Spons from "../../src/components/pages/spons";
import Show from "../../src/components/pages/night/Show";
import Speaker from "../../src/components/pages/Speaker/Speaker";
import EventVertical from "./pages/Events and Workshops/EventVertical";
import EventAdmin from "./pages/Events and Workshops/AddEvent";
import EditEvent from "./pages/Events and Workshops/EditEvent";
import EventsAdmin from "./pages/Events and Workshops/EventsAdmin";
import Login from "./pages/Login/Login";
import Forgot from "./pages/Login/ForgotPassword";
import Signup from "./pages/Login/Signup";
import ForgotAfter from "./pages/Login/ForgotAfterLink";
import Verify from "./pages/Login/Verify";
import SignOut from "./pages/Login/SignOut";
import Profile from "./pages/Login/Profile";
import EditProfile from "./pages/Login/EditProfile";
import EventPage from "./pages/Events and Workshops/EventPage";
import Privacy from "./pages/Policies/Privacy";
import TermsConditions from "./pages/Policies/TermsConditions";
import Shipping from "./pages/Policies/Shipping";
import Refund from "./pages/Policies/Refund";
import HomeEW from "./pages/Events and Workshops/EWHome";
import Shows from "./pages/night/ShowsNew";
import Contact from "./pages/Contact";
import ChessBlitz from "./pages/Chess_blitz/ChessBlitz";
interface Props {}

const AppRoutes = (props: Props) => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/envisage" component={Envisage} />
      <Route path="/project/:id" component={Project} />
      <Route path="/shows" component={Shows} />
      <Route exact path="/exhibitions" component={Exhibitions} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/shaastra-juniors" component={ShaastraJuniorsPage} />
      {/* <Route exact path="/social-endeavours" component={Social} /> */}
      <Route
        exact
        path="/social-endeavours"
        component={() => {
          window.location.href = "https://unmute.shaastra.org/";
          return null;
        }}
      >
        {/* <Link to="https://unmute.shaastra.org/"></Link> */}
      </Route>
      <Route
        exact
        path="/mind-trials"
        component={() => {
          window.location.href = "https://mindtrials.shaastra.org/";
          return null;
        }}
      ></Route>
      <Route
        exact path ="/sales"
        component={() => {
          window.location.href = "https://sales.shaastra.org/"
          return null
        }}
      ></Route>
      <Route exact path="/eventsworkshops" component={HomeEW} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/events/:name" component={EventVertical}></Route>
      {localStorage.getItem("role") === "Admin" && (
        <Switch>
          <Route exact path="/admin/add" component={EventAdmin}></Route>
          <Route exact path="/admin/edit/:id" component={EditEvent}></Route>
          <Route exact path="/admin" component={EventsAdmin}></Route>
        </Switch>
      )}
      <Route exact path="/eventpage/:id" component={EventPage}></Route>

      <Route exact path="/tif" component={Tif} />
      <Route exact path="/summit" component={Summit} />
      <Route exact path="/sponsors" component={Spons} />
      <Route exact path="/blitz-chess" component={ChessBlitz} />
      {/* <Route exact path="/speakers" component={Speaker} /> */}

      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      <Route exact path="/forgotpassword" component={Forgot}></Route>
      <Route exact path="/resetpassword" component={ForgotAfter}></Route>
      <Route exact path="/verify" component={Verify}></Route>
      <Route exact path="/signout" component={SignOut}></Route>
      {localStorage.getItem("role") === "User" && (
        <Switch>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/editprofile" component={EditProfile}></Route>
        </Switch>
      )}

      <Route exact path="/policies/privacy-policy" component={Privacy}></Route>
      <Route
        exact
        path="/policies/return-refund-policy"
        component={Refund}
      ></Route>
      <Route
        exact
        path="/policies/shipping-policy"
        component={Shipping}
      ></Route>
      <Route
        exact
        path="/policies/terms-conditions"
        component={TermsConditions}
      ></Route>
    </Router>
  );
};

export default AppRoutes;
