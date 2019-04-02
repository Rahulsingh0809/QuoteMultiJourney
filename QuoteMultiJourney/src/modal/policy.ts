export class PolicyModel{
    constructor(){}
    public IsUWPhotoReviewExist:boolean;
    public EffectiveDate:Date;
    public OrigPolicyStartDate:Date;
    public PolicyStatus:string;
    public MVRClueCalled:boolean;
    public WrittenDate:Date;
    public BadDebtsFlag:string;
    public HasActivePolicy:boolean;
    public MaterialMisrep:string;
    public HasMotorcycle:boolean;
    public TerritoryRestriction:boolean;
    public PolicyNumber:number;
    public CurrentInsuranceLimits:number;
    public AvailableCoverages:string[];
    public HasSR22:boolean;
    public HasFR44:boolean;
    public HasExcludedDriver:boolean;
    public HasInvalidLicense:boolean;
    public ProducerCode:string;
    public EnhancedUMCoverage:boolean;
    public AccidentForgivenessFlag:string;
    public DataPrefillNoHit:number;
    public CoverageHistory:string;
    public DataPrefillOrderDate:Date;
}