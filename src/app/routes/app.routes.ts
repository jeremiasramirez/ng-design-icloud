import { Routes,RouterModule} from "@angular/router";
import { HomePage } from "../pages/home/home.page";
import { LoginPage } from "../pages/login/login.page";
import { PerfilPage } from "../pages/perfil/perfil.page";
import { StartPage } from "../pages/start/start.page";


const ROUTES : Routes =  [
    {path: "start", component: StartPage},
    {path: "home", component: HomePage},
    {path: "perfil", component: PerfilPage},
    {path: "login", component: LoginPage},
    {path: "", component: StartPage},
    {path: "**", component: StartPage}
]


export const ROUTING  = RouterModule.forRoot(ROUTES);