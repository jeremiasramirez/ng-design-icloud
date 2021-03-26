import {Injectable} from "@angular/core";
import { Router } from "@angular/router";
import { timer } from "rxjs";


@Injectable()

export class HelperService{
    constructor(private router:Router){ }

    public navigate(route:string, time:number=500):void{
        
        timer(time).subscribe(()=>{
            this.router.navigate([route]);
        });

    }
    public getApps(): any {
        return [
            {name: "Mail", image:"../../../assets/images/icloud-images/mail.jpg"},
            {name: "Contactos", image:"../../../assets/images/icloud-images/contactos.jpg"},
            {name: "Calendario", image:"../../../assets/images/icloud-images/calendario.png"},
            {name: "Fotos", image:"../../../assets/images/icloud-images/fotos.png"},
            {name: "iCloud", image:"../../../assets/images/icloud-images/icloud.png"},
            {name: "Notes", image:"../../../assets/images/icloud-images/notes.png"},
            {name: "Recordatorio", image:"../../../assets/images/icloud-images/reminder.png"},
            {name: "Paginas", image:"../../../assets/images/icloud-images/pages.png"},
            {name: "Numeros", image:"../../../assets/images/icloud-images/numbers.png"},
            {name: "Keynote", image:"../../../assets/images/icloud-images/keynotes.png"},
            {name: "Amigos", image:"../../../assets/images/icloud-images/friends.png"},
            {name: "Buscar", image:"../../../assets/images/icloud-images/search.png"}
        ];
    }
}