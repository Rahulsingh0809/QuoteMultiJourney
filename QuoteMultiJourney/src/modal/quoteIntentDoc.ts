import { IPlans } from "./ancillay";
import { DriverModel } from "./driver";
import { VehicleModel } from "./vehicle";
import { PolicyModel } from "./policy";
import { QuoteModel } from "./quote";
import { QuoteStateModel } from "./quoteState";

export class QuoteIntentModel
{
    public Payment:string;
    public ClientData:string;
    public Address:string;
    public ChannelSource:string;
    public Ancillaries:IAncillaries;
    public Drivers:DriverModel;
    public Packages:string;
    public Vehicles:VehicleModel;
    public Policy:PolicyModel;
    public SourceOfBusiness:string;
    public IntegrationPartner:string;
    public Quote:QuoteModel;
    public QuoteState:QuoteStateModel;
    public odi:string;
    public TempVehicle:VehicleModel;
}

export interface IAncillaries{
    Plan:IPlans[];
    AncillaryResponse:string;
    ParamContent:string
}