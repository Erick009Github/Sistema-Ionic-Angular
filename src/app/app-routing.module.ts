import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './shared/guards/no-ingresado.guard';
import { IngresadoGuard } from './shared/guards/ingresado.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'rest',
    loadChildren: () => import('./pages/rest/rest.module').then( m => m.RestPageModule)
  },
  {
    path: 'rest2',
    loadChildren: () => import('./pages/rest2/rest2.module').then( m => m.Rest2PageModule)
  },

  {
    path: 'detalle/:id',
    loadChildren: () => import('./pages/rest/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'home/categorias',
    loadChildren: () => import('./pages/categorias/categorias.module').then( m => m.CategoriasPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'home/articulos',
    loadChildren: () => import('./pages/articulos/articulos.module').then( m => m.ArticulosPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'home/ingresos',
    loadChildren: () => import('./pages/ingresos/ingresos.module').then( m => m.IngresosPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'home/proveedores',
    loadChildren: () => import('./pages/proveedores/proveedores.module').then( m => m.ProveedoresPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'home/ventas',
    loadChildren: () => import('./pages/ventas/ventas.module').then( m => m.VentasPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'home/clientes',
    loadChildren: () => import('./pages/clientes/clientes.module').then( m => m.ClientesPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'home/usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module').then( m => m.UsuariosPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoIngresadoGuard]
    
  },

  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

