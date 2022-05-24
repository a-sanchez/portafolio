import { NgModule, Component } from '@angular/core';
import { Router, RouterModule, Routes } from "@angular/router";
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';


const app_routes:Routes = [
{path: 'home',component:PortafolioComponent},
{path:'about',component:AboutComponent},
{path:'item',component:ItemComponent},
{path:'**',pathMatch:'full', redirectTo:'home'} //en caso de no entrar en ninguna validacion redireccionara al index
];

@NgModule({
    imports:[
        RouterModule.forRoot(app_routes,{useHash:true}) //useHash se usa para poder redireccionar paginas sin necesidad de cambiar el htaccess capitulo 22
    ],
    exports:[ 
        RouterModule
    ]
})
export class AppRoutingModule{

}