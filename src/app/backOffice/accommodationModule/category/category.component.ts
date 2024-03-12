import { Component } from '@angular/core';
import { Category } from 'src/app/backOffice/model/Category';
import { CategoryServiceService } from 'src/app/ServiceCollocation/category-service.service';
import * as QRCode from 'qrcode';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts"
import { TDocumentDefinitions, Content, ContentImage } from "pdfmake/interfaces";


(pdfMake as any).vfs = pdfFonts.pdfMake.vfs


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
listCategory: Category []=[];
//étape1: injection de service
  constructor(private cs:CategoryServiceService){}

  //etape2: remplir listProduct à partir de la liste de service
  ngOnInit(){
    //this.listProduct=this.ps.listProduct
    this.cs.getll().subscribe((response:any)=>{
      this.listCategory = response;
    });
  }
  // generateQRCode(category: Category): string {
  //   const qrContent = `${category.categoryTitle}\n${category.categoryDescription}`;
  //   let qrCodeUrl: string = '';
  //   QRCode.toDataURL(qrContent, (err: any, url: string) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       qrCodeUrl = url;
  //     }
  //   });
  //   return qrCodeUrl;
  // }
  
  
  
  generateQRCode(category: Category): string {
    const qrOptions = {
      color: {
        dark: '#000000',   // Couleur des modules sombres (par défaut)
      light: '#FFC0CB'   // Couleur des modules clairs
      }
    };
  
    const qrContent = `${category.categoryTitle}\n${category.categoryDescription}`;
    let qrCodeUrl: string = '';
    QRCode.toDataURL(qrContent, { errorCorrectionLevel: 'H', ...qrOptions }, (err: any, url: string) => {
      if (err) {
        console.error(err);
      } else {
        qrCodeUrl = url;
      }
    });
    return qrCodeUrl;
  }


  generatePDF(category: Category) {
    // Générer le contenu du code QR
    const qrContent = `${category.categoryTitle}\n${category.categoryDescription}`;
  
    // Générer le code QR en tant qu'URL de données
    QRCode.toDataURL(qrContent, (err: any, qrDataURL: string) => {
      if (err) {
        console.error('Erreur lors de la génération du code QR :', err);
        return;
      }
  
      // Définir la définition du document PDF
      const docDefinition: TDocumentDefinitions = {
        content: [
          { text: 'Title: ' + category.categoryTitle, style: 'header' },
          { text: 'Description: ' + category.categoryDescription, style: 'subheader' },
          { image: qrDataURL, width: 100 } // Ajouter le code QR
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 10, 0, 0] as [number, number, number, number] // Format [top, right, bottom, left]
          },
          subheader: {
            fontSize: 14,
            bold: false,
            margin: [0, 10, 0, 0] as [number, number, number, number] // Format [top, right, bottom, left]
          }
        }
      };
  
      // Créer et ouvrir le PDF
      pdfMake.createPdf(docDefinition).open();
    });
  }


}