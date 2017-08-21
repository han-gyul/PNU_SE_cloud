import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule,appRoutingProviders} from './app.routing';
import { Main }  from './app.Main';

import { VMListView } from'./SnapShotManage/app.VMList';
import {VMSnapShot} from './SnapShotManage/app.SnapShotList';
import {SnapShotMain} from './SnapShotManage/SnapShotMain';

import {testMain} from './app.testMain';
import {VMManageRight} from './app.VMManageRight';
import {VMManageLeft} from './app.VMManageLeft';

import {Farm} from './Data/farm';
import {FarmList} from './Data/farm-mock.service';
import {ServerList} from './Data/server-mock.service';
import {SelectedServer} from './SelectedServer-service';

import { HDaasVMListService} from './Data/vm-mock.service';
import { OpenStackVMListService} from './Data/vm-mock.service';

import { MenuDetailComponent } from './menu-detail.component';
@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ Main ,VMListView, VMSnapShot,SnapShotMain, MenuDetailComponent, testMain, VMManageRight, VMManageLeft],
  bootstrap:    [ Main ],
  providers:[ appRoutingProviders, ServerList,FarmList,HDaasVMListService,OpenStackVMListService,SelectedServer]
})
export class AppModule {

}
