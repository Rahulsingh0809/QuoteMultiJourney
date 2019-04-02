export class ClientDataModel{
    constructor(){}
    public AppName:string;
    public UserAgent:string;
    public BrowserName: string;
    public FullVersion: string;
    public MajorVersion: string;
    public TimeZoneOffset: string
    public ClientInfo:string;
    Channel:string= "Web";
    NextView: string;
    ViewedPages: string[];
    VisitedPages: string[];         
    CurrentView: string;
    RqId:number;
    AppStartSource:string;
    Broker: string;
    IntegrationPartner: string;
    TodaysDate:Date;
    AgentInfo: string;
    // BrandKey: environmentLink.brandkey;
    // AccountDomain: environmentLink.accountDomain || 'direct'
}