import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public ChkPrime(num : number ):boolean
  {
    for(let i = 2; i <num ; i++)
    {
      if(num%i == 0)
      {
        return false;
      }
    }
    return true;
  }
}
