import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./components/products/products.component";
import { SellersComponent } from "./components/sellers/sellers.component";
import { UsersComponent } from "./components/users/users.component";

const routes: Routes = [
  { path: "", redirectTo: "sellers", pathMatch: "prefix" },
  { path: "sellers", component: SellersComponent },
  { path: "products", component: ProductsComponent },
  { path: "users", component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
