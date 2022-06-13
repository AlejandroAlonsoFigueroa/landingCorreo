import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderPHPService {

  constructor(private myHttpClient: HttpClient) { }


  imprimeAlgo(formData: FormData):Observable<any>{
    //console.log("Imprimir algo");

    return this.myHttpClient.post<any>("http://localhost/pruebaPHP/holaPHP.php", formData);

  }

  getPHP(){

    return this.myHttpClient.get("http://localhost/pruebaPHP/holaPHP.php");

  }
}
