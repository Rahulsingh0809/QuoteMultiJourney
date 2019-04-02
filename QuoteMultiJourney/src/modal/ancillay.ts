import { DriverModel } from "./driver";

export class AncillaryModel
{
    constructor(){};
   public Plans:IPlans[];
   public Links:ILinks[];
}

export interface IPlans{
    PlanCost:number
    TotalPlanCost: number,
    PlanId: number,
    PlanType: string,
    Name: string,
    Drivers: DriverModel[],
    EffectiveDate: Date,
    Description: string,
    HideInPolicyCenter: boolean,
    Denied: boolean,
}
export interface ILinks{
    Href:string;
    Rel:string
}