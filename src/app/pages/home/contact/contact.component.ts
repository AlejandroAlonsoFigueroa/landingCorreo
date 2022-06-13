import { Component, OnInit } from '@angular/core';
import { ProviderPHPService } from 'src/app/shared/services/provider-php.service';

@Component({
  selector: 'bwl-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formBody                      : any        = {
    name: "", 
    phone: "", 
    email: "", 
    message: ""
  };



  saludar(){
    alert("Hola");
  }
  constructor(private phpService: ProviderPHPService) { 

  }

  ngOnInit(): void {
  }


  buttonPressed(){
    const formData:FormData = new FormData();

    formData.append("name", this.formBody.name);
    formData.append("telephone", this.formBody.phone);
    formData.append("email", this.formBody.email);
    formData.append("message", this.formBody.message);
   


    this.phpService.imprimeAlgo(formData).subscribe
    (res => {
      console.log(res);

     
    }, err =>{
      console.log(err);
    })
    

    console.log(this.formBody);
  }
 

  validateFields(){
    const errors:any ={}

    var patternEmail=  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var phonePattern = /^\d{10}$/;


    if(!patternEmail.test(this.formBody.email)){
      errors.invalidEmail = "Ingresa un email válido";
    }

    if(!phonePattern.test(this.formBody.phone)){
      errors.invalidPhone = "Ingresa un teléfono celular válido";
    }
    if(this.formBody.message == ""){
      errors.invalidMessage = "Ingresa un mensaje válido";
    }

    if(this.formBody.name == ""){
      errors.invalidName = "Ingresa un nombre  válido";
    }

    console.log(errors);

    if(Object.keys(errors).length === 0){
      console.log("No hay errores");
    }else{
      console.log("Hay errores");
    }



  }

}
