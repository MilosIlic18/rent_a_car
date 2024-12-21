import { Routes } from "@nestjs/core";
import { UserModule } from "./main/user/user.module";
import { userRoutes } from "./main/user/user.routes";
import { AdminModule } from "./main/admin/admin.module";
import { adminRoutes } from "./main/admin/admin.routes";
import { SharedModule } from "./main/shared/shared.module";

export const baseRoutes:Routes = [
    {path:'main',children:[
        {path:'admin',module:AdminModule,children:adminRoutes},
        {path:'user',module:UserModule,children:userRoutes},
        {path:'shared',module:SharedModule}
    ]},
]