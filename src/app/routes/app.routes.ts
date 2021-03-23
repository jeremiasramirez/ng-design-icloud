import { Routes,RouterModule} from "@angular/router";
import { StartPage } from "../pages/start/start.page";


const ROUTES : Routes =  [
    {path: "", component: StartPage}
]


export const ROUTING  = RouterModule.forRoot(ROUTES);