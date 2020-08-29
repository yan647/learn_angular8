/**
 * Created by lsq on 2020/8/29.
 */

'use strict';

import {Component} from "@angular/core";
import {products} from "../products";

@Component({
    selector:"app-product-list",
    templateUrl:"./product-list.component.html",
    styleUrls:["./product-list.component.scss"]
})

export class ProductListComponent{
    products=products;

    share(){
        console.log("sharing...");
    }
}
