import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardDemoComponent} from './backOffice/demo/view/dashboarddemo.component';
import {FormLayoutDemoComponent} from './backOffice/demo/view/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './backOffice/demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './backOffice/demo/view/invalidstatedemo.component';
import {PanelsDemoComponent} from './backOffice/demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './backOffice/demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './backOffice/demo/view/mediademo.component';
import {MessagesDemoComponent} from './backOffice/demo/view/messagesdemo.component';
import {MiscDemoComponent} from './backOffice/demo/view/miscdemo.component';
import {EmptyDemoComponent} from './backOffice/demo/view/emptydemo.component';
import {ChartsDemoComponent} from './backOffice/demo/view/chartsdemo.component';
import {FileDemoComponent} from './backOffice/demo/view/filedemo.component';
import {DocumentationComponent} from './backOffice/demo/view/documentation.component';
import {AppMainComponent} from './backOffice/app.main.component';
import {AppNotfoundComponent} from './backOffice/pages/app.notfound.component';
import {AppErrorComponent} from './backOffice/pages/app.error.component';
import {AppAccessdeniedComponent} from './backOffice/pages/app.accessdenied.component';
import {AppLoginComponent} from './backOffice/pages/app.login.component';
import {InputDemoComponent} from './backOffice/demo/view/inputdemo.component';
import {ButtonDemoComponent} from './backOffice/demo/view/buttondemo.component';
import {TableDemoComponent} from './backOffice/demo/view/tabledemo.component';
import {ListDemoComponent} from './backOffice/demo/view/listdemo.component';
import {TreeDemoComponent} from './backOffice/demo/view/treedemo.component';
import {IconsComponent} from './backOffice/utilities/icons.component';
import {AppCrudComponent} from './backOffice/pages/app.crud.component';
import {AppCalendarComponent} from './backOffice/pages/app.calendar.component';
import {AppTimelineDemoComponent} from './backOffice/pages/app.timelinedemo.component';
import {AppInvoiceComponent} from './backOffice/pages/app.invoice.component';
import {AppHelpComponent} from './backOffice/pages/app.help.component';
import {BlocksComponent} from './backOffice/blocks/blocks/blocks.component';
import { HomeFrontComponent } from './frontOffice/home-front/home-front.component';
import { HeaderFrontComponent } from './frontOffice/header-front/header-front.component';
import { CarousalComponent } from './frontOffice/carousal/carousal.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: DashboardDemoComponent},
                    {path: 'uikit/formlayout', component: FormLayoutDemoComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelDemoComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateDemoComponent},
                    {path: 'uikit/input', component: InputDemoComponent},
                    {path: 'uikit/button', component: ButtonDemoComponent},
                    {path: 'uikit/table', component: TableDemoComponent},
                    {path: 'uikit/list', component: ListDemoComponent},
                    {path: 'uikit/tree', component: TreeDemoComponent},
                    {path: 'uikit/panel', component: PanelsDemoComponent},
                    {path: 'uikit/overlay', component: OverlaysDemoComponent},
                    {path: 'uikit/menu', loadChildren: () => import('./backOffice/demo/view/menus/menus.module').then(m => m.MenusModule)},
                    {path: 'uikit/media', component: MediaDemoComponent},
                    {path: 'uikit/message', component: MessagesDemoComponent},
                    {path: 'uikit/misc', component: MiscDemoComponent},
                    {path: 'uikit/charts', component: ChartsDemoComponent},
                    {path: 'uikit/file', component: FileDemoComponent},
                    {path: 'utilities/icons', component: IconsComponent},
                    {path: 'pages/crud', component: AppCrudComponent},
                    {path: 'pages/calendar', component: AppCalendarComponent},
                    {path: 'pages/timeline', component: AppTimelineDemoComponent},
                    {path: 'pages/invoice', component: AppInvoiceComponent},
                    {path: 'pages/help', component: AppHelpComponent},
                    {path: 'pages/empty', component: EmptyDemoComponent},
                    {path: 'documentation', component: DocumentationComponent},
                    {path: 'blocks', component: BlocksComponent},
                ]
                
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: AppLoginComponent},

            {path: 'coco',component:HomeFrontComponent},
            {path: 'coco1',component:HeaderFrontComponent},
            {path: 'coco2',component:CarousalComponent},

            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
