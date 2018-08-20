export interface IUserDetails {
  avatar: string;
  fullName: string;
}

export interface IUser {
  _id: string;
  details?: IUserDetails;
}

export interface IBrowserInfo {
  language?: string;
  url?: string;
  city?: string;
  country?: string;
}

export interface IEmailParams {
  toEmails: string[];
  fromEmail: string;
  title: string;
  content: string;
}

export interface IIntegrationTwitterData {
  info: any;
  token: string;
  tokenSecret: string;
}

export interface IIntegrationFacebookData {
  appId: {
    type: string;
  };
  pageIds: {
    type: string[];
  };
}

export interface IIntegrationMessengerOnlineHours {
  day: string;
  from: string;
  to: string;
}

export interface IIntegrationMessengerData {
  supporterIds: string[];
  notifyCustomer: boolean;
  availabilityMethod: string;
  isOnline: boolean;
  onlineHours: IIntegrationMessengerOnlineHours[];
  timezone?: string;
  welcomeMessage?: string;
  awayMessage?: string;
  thankYouMessage?: string;
}

export interface IIntegrationFormData {
  loadType: string;
  successAction?: string;
  fromEmail?: string;
  userEmailTitle?: string;
  userEmailContent?: string;
  adminEmails?: string;
  adminEmailTitle?: string;
  adminEmailContent?: string;
  thankContent?: string;
  redirectUrl?: string;
}

export interface IIntegrationUiOptions {
  color: string;
  wallpaper: string;
  logo: string;
}

export interface IIntegration {
  _id: string;
  kind: string;
  name: string;
  brandId: string;
  languageCode?: string;
  tagIds?: string[];
  formId: string;
  formData: IIntegrationFormData;
  messengerData: IIntegrationMessengerData;
  twitterData: IIntegrationTwitterData;
  facebookData: IIntegrationFacebookData;
  uiOptions: IIntegrationUiOptions;
}

export interface IDealProductInput {
  productName: string;
  uom?: string;
  currency?: string;
  quantity?: number;
  unitPrice?: number;
  taxPercent?: number;
  tax?: number;
  discountPercent?: number;
  discount?: number;
  amount?: number;
}

export interface IDealInput {
  name: string;
  stageId: string;
  userEmail: string;
  companyIds?: string[];
  customerIds?: string[];
  description?: string;
  productsData?: IDealProductInput;
}
