import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createdProduct(): void {
    this.productService.create(this.product).subscribe(()=> {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])  
            // quando cadastrar, retorna para pagina produtos
    })

    
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
