import tryPage from "./components/tryPage";
import formBuilder from "./components/formBuilder";
import cardBuilder from "./components/cardBuilder";
import trycardBuilder from "./components/trycardBuilder";

export default [
    {path: '/', component: cardBuilder},
    {path: '/form', component: formBuilder},
    {path: '/try', component: tryPage},
    {path: '/trycard', component: trycardBuilder},
]

// {path: '/bread/:{table}/create', component: createBreadComponent},
