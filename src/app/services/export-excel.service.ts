import { Injectable } from '@angular/core';
import * as Filesaver from 'file-saver'
import * as XLSX from 'xlsx'

@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {

  constructor() { }

    exportExcel(json:any[], excelName:string){
     /* generate worksheet */
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);

      /* generate workbook and add the worksheet */
      const wb: XLSX.WorkBook = {
        Sheets:{'data':ws},
        SheetNames:['data']
      }
      /* save to file */
     const excelBuffer =  XLSX.write(wb, {bookType:'xlsx',type:'array'});
      this.savetoexcel(excelBuffer, excelName)
    
    }

    savetoexcel(buffer:any, filename:string){
     const data:Blob = new Blob([buffer], {type:'text/xlsx:charset=uft-8'})
     Filesaver.saveAs(data,filename + Date.now() + '.xlsx' )
    }

}
