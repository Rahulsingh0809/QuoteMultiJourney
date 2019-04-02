import { DriverModel } from "./driver";
import { VehicleModel } from "./vehicle";
import { ILinks } from "./ancillay";

export class DmsModel{
    constructor(){}
    public ErrorFlag:string;
    public CapInd:string;
    public DaysSinceLastInsured:number;
    public DaysWithoutCoverageInLastThreeYears:number;
    public Drivers:DriverModel[];
    public Vehicles:VehicleModel[];
    public Links:ILinks[];
}