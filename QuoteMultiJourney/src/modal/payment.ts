export class PaymentModel{
    public BillingAddress:string;
    public PayPlan:string;
    public Method:string= 'CreditCard';
    public PhoneNumber:number
    public CreditCare:ICreditCard;
}

interface ICreditCard{
    ExpirationYear: number;
    ExpirationMonth: number,
    Number: number,
    CardIssuer: string,
    CardHolderFirstName: string,
    CardHolderLastName: string,
    NameOnCard : string
}
    
  