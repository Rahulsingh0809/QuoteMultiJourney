export class QuoteModel
{
    constructor(){}
    public Discounts:number[];
    public PayPlans: IPayPlans[];
    public PremiumFees:IPremiumFees[];
}

export interface IPayPlans{
    DownPaymentAmount:number;
    InstallmentAmount:number;
    InstallmentAmountWithoutInstallmentFee:number;
    InstallmentFee:number;
    NumberOfInstallments:number;
    NumberOfPayments:number;
    ID:number;
    TotalCostWithFees:number;
    Desc:string;
    IsSelected:boolean;
    SortOrder:string;
    QuoteNumber:number;
    TotalFees:number;
    TotalPremiumWithFees:number;
    PreviousTotalPremiumWithFees:number;
}

export interface IPremiumFees{
    Desc:string;
    Amount:number;
}
