import { Account } from "./Account";

export class PeopleAccount extends Account{

    private documentType:number = 1;
   
    constructor(document:string,valueAccount:number,numberAccount:string){
        super(numberAccount,valueAccount,document)
    }
      
   public getDocumentType(documentType: number) {
        const documentTypeCopy = this.documentType;
        return documentTypeCopy;
    }
    public printInfo() {
        console.log(`Conta pessoa fisica numero: ${this.getNumberAccount()}`)
        console.log(`Saldo: ${this.getValueAccount()}`)
        console.log(`Titular: ${this.getDocument()}`)
    }
}


