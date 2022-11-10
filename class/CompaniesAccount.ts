import { Account } from "./Account";

export class CompanyAccount extends Account{

   private documentType:number = 2;
       
   constructor(document:string,valueAccount:number,numberAccount:string){
        super(numberAccount,valueAccount,document)
    }
    
    
    public getDocumentType(documentType: number) {
        const documentTypeCopy = this.documentType;
        return documentTypeCopy;
        }
    
    public printInfo() {
            console.log(`Conta pessoa jurídica numero: ${this.getNumberAccount()}`)
            console.log(`Saldo: ${this.getValueAccount()}`)
            console.log(`Titular: ${this.getDocument()}`)
        }
} 