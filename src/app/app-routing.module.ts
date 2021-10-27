import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { DeviceComponent } from './pages/device/device.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoriesComponent } from './pages/categories/categories.component';

const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        children: [
          { 
            path: 'devices', 
            component: DevicesComponent,
            children: [{
                path: 'device',
                component: DeviceComponent
            }] 
        },
        { 
            path: 'categories', 
            component: CategoriesComponent,
            children: [{
                path: 'category',
                component: CategoryComponent
          }] 
        }
      ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }