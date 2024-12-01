import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component 
{
  public count : number = 0
  public text : string = "RIYAdhanduke"

  public constructor(private strobj : StringService)
  {
    this.count = this.strobj.Count(this.text);
  }
}
