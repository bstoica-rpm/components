import { Navigation } from "../";

function App() {
  return (
    <Navigation
      user={{
        profile: {
          sid: "f09322da87f303c319ef7e1cfa78877a",
          sub: "f0dd1387-5621-4c6b-907d-8a6ff4da713c",
          idp: "local",
          name: "bstoica@rpmmoves.com",
          roles:
            "staging-eu-sl3:Administrator,AppNavDev:ADMINISTRATOR,TurvoGatewaySandbox:Administrator,TurvoGatewayStaging:Administrator,ProfilesSyncServiceEU:Administrator,ServiceManagerDev:Administrator,ProfilesStg:Administrator,sl3deveu:Administrator,oms:Administrator,ProfilesStgEu:ReadonlyEmployee,ProfilesSyncService:Administrator,omsdeveu:Administrator,staging-eu-oms:Administrator,ServiceManager:Administrator,omsstaging:Administrator,ProfilesSyncServiceDev:Administrator,sl3eu:Administrator,GeocodingGateway:Administrator,omsdev:Administrator,ProfilesStgEu:Administrator,AuthManagement:Administrator,TurvoGatewayDev:Administrator,ProfilesStgEu:EditableEmployee,sl3staging:Administrator,Profiles:Administrator,Pricing:User,GeocodingGatewayDev:Administrator,TurvoGateway:Administrator,omseu:Administrator,sl3dev:Administrator,sl3:Administrator,ProfilesEU:Administrator",
          clients:
            "staging-eu-sl3,AppNavDev,TurvoGatewaySandbox,TurvoGatewayStaging,ProfilesSyncServiceEU,ServiceManagerDev,ProfilesDev,ProfilesStg,sl3deveu,oms,ProfilesStgEu,ProfilesSyncService,omsdeveu,staging-eu-oms,ServiceManager,omsstaging,ProfilesSyncServiceDev,sl3eu,GeocodingGateway,omsdev,AuthManagement,TurvoGatewayDev,sl3staging,Profiles,Pricing,GeocodingGatewayDev,TurvoGateway,omseu,sl3dev,sl3,ProfilesEU",
          firstName: "Ben",
          lastName: "Stoica",
          email: "bstoica@rpmmoves.com",
          amr: ["pwd"],
        },
        expires_at: 1730385622,
      }}
    />
  );
}

export default App;
