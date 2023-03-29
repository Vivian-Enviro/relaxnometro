
import { DxBaseVirtualPersist } from '../../conflux/models/dxbasevirtualpersist';
import { UserRole } from './enum/userrole';

export class DxConfluxUser extends DxBaseVirtualPersist {
  public role: UserRole | undefined;
  public userName: string | undefined;
  public webUserId: string | undefined;
  public fullName: string | undefined;
  public firstName: string | undefined;
  public lastName: string | undefined;
  public email: string | undefined;
  public phone: string | undefined;
  public defaultRoute: string | undefined;
  public defaultLanguage: string | undefined;
  public defaultTimeZone: string | undefined;
  public defaultLocale: string | undefined;
}