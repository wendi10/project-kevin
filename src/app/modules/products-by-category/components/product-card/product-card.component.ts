import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onClickProduct(): void {
    this.router.navigate(['products/detail'], {queryParams: {productSlug: this.product.slug}})
  }

}
