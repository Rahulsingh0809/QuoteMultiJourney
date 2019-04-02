import { DriverModel } from "./driver";
import { VehicleModel } from "./vehicle";

export class  QuoteStateModel{
constructor(){}
public Applicant:string;
public AdditionalDrivers:string;
public HasRatedLocations:boolean;
public HasLeadData:boolean;
public HasConvictions:boolean;
public HasDmsRun:boolean;
public DmsConfirmation:boolean;
public MVRClueCalled:boolean;
public DriverConvictions:string[];
public BindAttempts:number=0;
public PreviousTotalPremiumWithFees:number;
public  QuoteHistory:IQuoteHistory[];
public IsHomeQuoteOpt: boolean;
public HomeDataWillBeSentToHomeSite:boolean;
public HomeSiteQuoteHistory:IQuoteHistory[];
public HomeSiteQuote:IHomeSiteQuote;
public UnProcessedLeadDrivers:DriverModel[];
public UnProcessedLeadVehicles:VehicleModel[];
public UnProcessedVehiclesID:string[];
public UnProcessedDriversID:string[];
public IsEuimSelected:boolean;
}


export interface IQuoteHistory{
    TotalPremium:number;
    QuoteDate:Date;
}
export interface IHomeSiteQuote{
    HadQuoted: false
}