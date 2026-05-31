import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoGeneratorComponent } from './components/todo-generator/todo-generator.component';
import { ItemGrowDirective } from './directives/item-grow/item-grow.directive';

@NgModule({
    declarations: [AppComponent, HomeComponent, TodoGeneratorComponent, ItemGrowDirective],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
