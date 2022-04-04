import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "../../../HomePage";
import Teachers from "../../../Teachers";
import AllNews from "../../../News";
import DescriptionsRoute from "../../../DescriptionsRoute";
import Schedule from "../../../Schedule";
import Questions from "../../../Questions";
import News2 from "../../../News2";

const Routers = () => {

    return (
        <Router>
            <Switch>
                <Route path="/questions"><Questions/></Route>
                <Route path="/schedule"><Schedule/></Route>
                <Route path="/news"><AllNews/></Route>
                <Route path="/teacher"><Teachers/></Route>
                <Route path="/des1"><DescriptionsRoute/></Route>
                <Route path="/news2"><News2/></Route>
                <Route path="/"><HomePage/></Route>
            </Switch>
        </Router>
    );
};

// function Teachers() {
//     return <h2>teachers</h2>;
// }

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}



export default Routers;
