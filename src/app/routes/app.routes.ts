import { Routes,RouterModule} from "@angular/router";
import { HomePage } from "../pages/home/home.page";
import { StartPage } from "../pages/start/start.page";


const ROUTES : Routes =  [
    {path: "start", component: StartPage},
    {path: "home", component: HomePage},
    {path: "", component: StartPage}
]


export const ROUTING  = RouterModule.forRoot(ROUTES);