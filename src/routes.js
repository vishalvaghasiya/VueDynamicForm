import tryPage from "./components/tryPage";
import formBuilder from "./components/formBuilder";
import cardBuilder from "./components/cardBuilder";

export default [
    {path: '/', component: cardBuilder},
    {path: '/form', component: formBuilder},
    {path: '/try', component: tryPage},
]

// {path: '/bread/:{table}/create', component: createBreadComponent},
