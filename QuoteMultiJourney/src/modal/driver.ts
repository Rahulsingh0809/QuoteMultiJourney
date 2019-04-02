import { IncidentModel } from "./incident";

export class DriverModel{
    constructor(){}
    public AgeFirstLicensed:number;
    public CurrentInsuranceStatus:string;
    public CurrentInsurer:string;
    public CurrentlyInsured:string;
    public CurrentStudentEnrollment: string;
    public CurrentlyEnrolled: string;
    public CurrentProviderPremium: string;
    public CurrentZipCode: null;
    public publicDateOfBirth: Date
    public DateOfResidence: Date
    public DrivesAnyListedVehicles: string;
    public EmailAddress: string
    public EmailAddressConfirm: string;
    public EmploymentStatus: string;
    public FirstName: string;
    public Gender: string;
    public GoodStudentDiscount: string;
    public StudentAway: string;
    public StudentAwayDiscount: string;
    public HighestEducationLevel: string;
    public ID: number;
    public Incidents: IncidentModel[]
    public LastName: string;
    public LicenseNumber: string;
    public LicenseState: string;
    public LicenseStatus: string;
    public MaritalStatus: string='';
    public MiddleName: string;
    public MilitaryBranch: string;
    public MilitaryStatus: string;
    public MonthSelected: string;
    public NumberOfCreditPulls: string;
    public Occupation: string;
    public OwnsOwnVehicle: string;
    public PhoneNumber: number;
    public PreviousLapse: string;
    public PrimaryDriver: string;
    public PrimaryInsured: string;
    public PrimaryVehicleID: number;
    public ProcessingId: number;
    public RatingStatus: string;
    public RelationshipToInsured: string;
    public ResidenceOwnership: string;
    public Retired: string;
    public SocialSecurityNumber: number;
    public Suffix: string;
    public Title: string;
    public YearsAtCurrentResidence: number;
    public YearSelected: number;
    public YearsWithCurrentInsurer: number;
    public TelephoneDisclaimerAgreed: boolean=false;
    public VehicleInPast3Years: boolean;
    public ServedMilitaryInPast3Years : boolean


}