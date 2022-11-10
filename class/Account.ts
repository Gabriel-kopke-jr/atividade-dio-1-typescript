export abstract class Account {
    private numberAccount!: string;
    private valueAccount!: number;
    private document!:string;

    constructor(numberAccount: string, valueAccount: number,document:string){
        if(this.isValidNumberAccount(numberAccount)){
            this.numberAccount = numberAccount;
        }
        if(!this.isNegative(valueAccount)){
        this.valueAccount = valueAccount;
    }
    this.document = document;
    }

    private isNegative(valueAccount:number):boolean {
        return valueAccount <0;
    }

    private isValidNumberAccount(numberAccount:string):boolean{
        return !(numberAccount.length === 0) && !(numberAccount == null)
    }

    public getValueAccount():number{
        const valueAccountCopy = this.valueAccount;
        return valueAccountCopy;
    } 

    public getNumberAccount():string{
        const numberAccountCopy = this.numberAccount;
        return numberAccountCopy;
    }

    public getDocument():string {
        const document = this.document
        return document;
    }

    public deposit(value:number):string{
        if(this.DepositValueIsValid(value)){
        this.valueAccount += value;
        return "success"
    }
        return "Operation incomplete";
    }

    public withdraw(value:number):string {
    if(this.hasBalanceToWithdraw(value)){
        return "insufficient balance for this operation"
    } else {
        this.valueAccount -= value;
        return "success"
    }
    }

    public transfer(value:number, account: Account ){
        this.withdraw(value);
        account.deposit(value);
    }

    private DepositValueIsValid(value:number):boolean{
        return value > 0 && value != null;
    }

    private hasBalanceToWithdraw(value:number):boolean{
        return value > this.getValueAccount();
    }

   public abstract getDocumentType(documentType:number):any

   public abstract printInfo():any;

}