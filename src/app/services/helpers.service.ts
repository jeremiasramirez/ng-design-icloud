import {Injectable} from "@angular/core";
import { Router } from "@angular/router";
import { timer } from "rxjs";


@Injectable()

export class HelperService{
    constructor(private router:Router){
        
    }

    public navigate(route:string, time:number=500):void{
        
        timer(time).subscribe(()=>{
            this.router.navigate([route]);
        });

    }
    public getApps(): any {
        return [
            {name: "Mail", image:"../../../assets/images/icloud-images/mail.svg"}
        ];
    }
}