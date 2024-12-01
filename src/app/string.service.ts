import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public Count(str : String):number
  {
    var upper = 0
    for(var i = 0; i < str.length; i++)
    {
      if(str[i] >= "A" && str[i] <= "Z")
      {
        upper++;
      }
    }
    return upper;
  }
}
