import { Component,ViewChild,ElementRef , Input,Output, EventEmitter} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Input() ingredient!: Ingredient;

  @ViewChild('nameInput') addNameRef!: ElementRef;
  @ViewChild('quantityInput') addQuantityRef!: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>()
  onAdd(){
    const addName = this.addNameRef.nativeElement.value;
    const addQuantity = this.addQuantityRef.nativeElement.value;
    const newIngredient = new Ingredient(addName,addQuantity);
    this.ingredientAdded.emit(newIngredient);
  }
}
