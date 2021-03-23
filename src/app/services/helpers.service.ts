import {Injectable} from "@angular/core";
import { Router } from "@angular/router";
import { timer } from "rxjs";


@Injectable()

export class HelperService{
    constructor(private router:Router){
        console.log("helper on..")
    }

    public navigate(route:string, time:number=500){
        
        timer(time).subscribe(()=>{
            this.router.navigate([route]);
        });

    }
}