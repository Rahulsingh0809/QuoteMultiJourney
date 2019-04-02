export class VehicleModel
{
    constructor(){}
    public AntiTheftDevice:string;
    public AvailableCoverages:string[];
    public BrandedTitle:boolean=false;
    public CostWhenNew:string;
    public CrashAvoidance:boolean=false;
    public CurrentOwner:string;
    public CustomEquipment: string;
    public DamageDescription: string;
    public DateOfAcquisition: string;
    public DefaultValueMatch: string;
    public DiminishingDeductibleFee: number;
    public EstimatedAnnualMileage: string;
    public InCurrentZipCode:string;
    public Fees: number[];
    public HasDiminishingDeductible: boolean;
    public HandsFree: string;
    public SafetyAnswerd: boolean=false;
    public ID: number;
    public IsDamaged: boolean;
    public Lineholder:ILineholder;
    public Make: string;
    public MakeID: string;
    public Model: string;
    public ModelID: number;
    public MonthSelected: number;
    public Ownership: string;
    public PrimaryDriverID: number;
    public RegistrationState: string;
    public ShortModelName: string;
    public Style: string;
    public PrimaryUse: string;
    public ValueOfCustomEquipment: string;
    public Vin: string;
    public Year: string;
    public YearsVehicleOwned: number;
    public YearSelected: number
    public YearStyleID: number;
    public RideSharingHours: number;
    public RideSharing: string;

}
 interface ILineholder {
     Name:string
     AddressLine1: string;
     AddressLine2: string;
     City: string;
     State: string;
     PostalCode: string;
  }

