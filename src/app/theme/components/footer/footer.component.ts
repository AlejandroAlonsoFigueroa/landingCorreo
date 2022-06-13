import { Component, OnInit,HostListener, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'bwl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  @Output() scrollTop =  new EventEmitter<any>()

  public pages: any=[
    {
      name :"Nosotros"
    }, 
    {
      name :"Experiencia"
    }, 
    {
      name: "Únete"
    },
    {
      name: "Servicios", 
      children: ["Equipos de trabajo", "Fábrica de software", "Transformación Digital"
    , "Plataforma Web", "Aplicaciones móviles", "Centro creativo"]

    },
    {
      name: "Política de privacidad", 
      

    }

  ];

  public socialMedia: any = [
    {
      name : "Facebook", 
      link: "https://www.facebook.com/BWLTECHGROUP"
    }, 
    {
      name : "Linkedin", 
      link: "https://www.facebook.com/BWLTECHGROUP"
    }, 
    {
      name : "Instagram", 
      link: "https://www.facebook.com/BWLTECHGROUP"
    }
  ]
  constructor(private router : Router,) { 
  
  }

  ngOnInit(): void {
    this.resizeWindow(window.screen.height, window.screen.width);
  }
  
  seeChildren(section: any) {
    section.showChildren = !section.showChildren;

    if(section.showChildren) {
      section.symbol = "-";
    } else {
      section.symbol = "+";
    }
  }

  resizeWindow(innerHeight, innerWidth) {
    if (innerWidth >= 801) {
      this.pages.forEach(item => {
        item.showChildren = true;
        item.symbol = "+";
      });
    } else {
      this.pages.forEach(item => {
        item.showChildren = false;
        item.symbol = "+";
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeWindow(event.target.innerHeight, event.target.innerWidth);
  }

  hola(name: string){
    alert(name);
  }

  navigate(scrollRef: string) {
    
    setTimeout(() => {
      const element = document.getElementById(scrollRef);
      const y = element.getBoundingClientRect().top + window.pageYOffset - 117;

      window.scrollTo({top: y, behavior: 'smooth'});
    }, 500)
    
  }
}