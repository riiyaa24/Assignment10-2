import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component 
{
  public num : number = 17
  isPrime : string = ''

  public constructor(private numobj : NumberService)
  {
    this.isPrime = this.numobj.ChkPrime(this.num) ? 'Yes' : 'No'
  }
}
