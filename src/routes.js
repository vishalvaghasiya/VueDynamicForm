import index from "./components/index";
import tryPage from "./components/tryPage";
import formIndex from "./components/formIndex";

export default [
    {path: '/', component: index},
    {path: '/form', component: formIndex},
    {path: '/try', component: tryPage},
]

// {path: '/bread/:{table}/create', component: createBreadComponent},
