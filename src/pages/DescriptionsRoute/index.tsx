import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Description from "./Descriptions";
let desc = [
    {
        title: "6.44.03.01",
        info1: "Направление «Педагогическое образование",
        info2: "Информационные технологии в образовании",
        infospan: "бакалавриат",
    }, 
    {
        title: "2.09.03.04",
        info1: "Программная инженерия",
        info2: "Разработка программно-информационных систем",
        infospan: "бакалавриат",
    }, 
    {
        title: "6.44.04.01",
        info1: "Направление «Педагогическое образование",
        info2: "Информационные технологии в образовании",
        infospan: "магистерская программа",
    }, 
    {
        title: "2.09.04.04",
        info1: "Программная инженерия",
        info2: "Разработка программно-информационных систем",
        infospan: "магистерская программа",
    },
];


const DescriptionsRoute = () => {

    return (
        <Router>
            <Switch>
                <Route path="/des1">{desc.map((desc, index) => (
                    <Description
                        key={`${index}-${desc.title}`}
                        item={desc}
                    />
                ))}</Route>

                {/* <Route path="/des2"><Description {desc.first}/></Route> */}
                {/* <Route path="/des3"><Description title="6.44.04.01" info1="Направление «Педагогическое образование»" info2="«Информационные технологии в образовании»" infospan="магистерская программа"/></Route>
                <Route path="/des4"><Description title="2.09.04.04" info1="Направление «Программная инженерия»" info2="«Разработка программно-информационных систем»" infospan="магистерская программа"/></Route> */}
            </Switch>
        </Router>
    );
};



export default DescriptionsRoute;
