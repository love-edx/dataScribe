import config from '../../common/config';

export enum MODULE_NAME {
  GLOBAL_SETTINGS = 'Global settings',
  LABELS = 'Label',
  ADMIN = 'Admin',
  USER = 'User',
  STAMP = 'Stamp',
  APPLICATIONS = 'Application',
  SUBSCRIPTION = 'Subscription',
  NEWS_LETTER = 'News letter',
  PLAN = 'Plan',
  PAYMENT = 'Payment',
  PRICING_PLAN = 'Pricing plans',
  COUPON = 'Coupon',
  TOKEN = 'Token',
  AUTH = 'Authorization',
  WEBHOOK = 'Webhook'
}

export const APPLICATION_NAME = 'bStamp';
export const UNDER_MAINTANANCE = 'Under Maintenance';
export const CURRENCY_TYPE = {
  USD: 'USD'
};

export enum REQUEST_METHOD {
  POST = 'create',
  PUT = 'update',
  GET = 'get',
  DELETE = 'delete',
  SUBSCRIBED = 'subscribed',
  PURCHASED = 'purchased'
}

export enum PERMISSION_METHOD {
  POST = 'create',
  GET = 'view',
  PUT = 'update',
  DELETE = 'delete',
}

export const REDIS_EXPIRE_TIME = {
  MILLISECONDS: 'PX',
  SECONDS: 'EX',
}


export const PAYMENT_TYPE = {
  PAYPAL: 'paypal'
}

export const REDIS_KEYS = {
  EDEXA_USER_INFO: 'edx-u-i-',
  EDEXA_USER_APPS: 'edx-u-a-',
  EDEXA_USER_TOKEN: 'edx-u-t-',
  EDEXA_USER_DEVICE: `edx-u-d-`,
  EDEXA_USER_LIMITER: 'edx-u-l',
  EDEXA_DAPPS_SETTINGS: `edx-${APPLICATION_NAME.toLowerCase()}:settings`,
  EDEXA_APPLICATION_MODULES: 'edx-dapps:modules',
  APPLICATION_DATA: `edx-${APPLICATION_NAME}:`,

}

export const EMAIL_CONSTANTS = {
  welcomeBanner: `${config.TEMPLATE_URL}welcome-banner.png`,
  edeXaLogo: `${config.TEMPLATE_URL}edexa.png`,
  edeXaLogoBig: `${config.TEMPLATE_URL}edexa-big.png`,

  playStoreImg: `${config.TEMPLATE_URL}google-app.png`,
  appStoreImg: `${config.TEMPLATE_URL}app-store.png`,
  edxUniverseAppImg: `${config.TEMPLATE_URL}universe-app.png`,

  playStoreUrl: `https://play.google.com/store/apps/dev?id=5431981656814545973`,
  appStoreUrl: `https://apps.apple.com/in/developer/edexa-ag/id1530769419`,
  edxUniverseUrl: `https://universe.edexa.com`,

  helpDeskUrl: `mailto:helpdesk@edexa.com`,
  edexaNetworkUrl: `https://edexa.network`,

  linkedIn: `https://www.linkedin.com/company/edexablockchain`,
  twitter: `https://twitter.com/edexablockchain`,
  facebook: `https://www.facebook.com/EDEXA-302612773660046`,
  instagram: `https://www.instagram.com/edexa_blockchain`,
  discord: `https://discord.gg/4zhR9hPFR8`,

  privacyPolicy: `https://edexa.network/privacy-policy`,
  termsCondition: `https://edexa.network/terms-and-conditions`,

  extensionUrl: config.ASSETS_URL + config.FILE_EXT_FOLDER,
  edeXaLogoBlack: `${config.ASSETS_URL}assets/edexa-logo.svg`,
  watermarkImage: config.ASSETS_URL + config.WATERMARK_IMAGE,

  imageExt: ['png', 'jpg', 'jpeg', 'svg', 'webp', 'gif', 'bmp', 'ico', 'ai', 'ps', 'psd', 'tif', 'tiff'],
  videoExt: ['mp4', 'mkv', 'mov', 'webm', 'wbem', 'flv', 'avi', 'mpg', 'mpeg', 'mpv', 'm4p', 'm4v', '3g2', '3gp', 'h264', 'rm', 'swf', 'vob', 'wmv'],
  musicExt: ['cda', 'aif', 'm4a', 'mpa', 'mp3', 'wave', 'wav', 'wma', 'wpl', 'aac', 'amr', 'ogg', 'mid', 'midi', 'imy'],
  pdfExt: ['pdf'],
  excelExt: ['xls', 'xlsx', 'ods', 'xlsm', 'xlr'],
  pptExt: ['ppt', 'pptx', 'pps', 'odp'],
  compressExt: ['zip', 'tar.gz', 'rar', 'gzip', '7z', 'arj', 'deb', 'pkg', 'rpm', 'z']
};

export enum STAMP_FILE_STATUS {
  PENDING = 0, // Waiting for the blockchain response to be received and processed
  COMPLETED = 1, // Blockchain response received successfully, indicating a successful operation
  REJECTED = 2, // Blockchain response received with an error or unsuccessful outcome
  CANCELLED = 3, // Webhook error occurred, leading to cancellation of the operation
  // DECLINED = 4 // templRetry  
}

export enum WEBHOOK_STATUS {
  PENDING = 0, // The webhook has been created but not sent to the recipient or party.
  SENT = 1, // The webhook request has been sent to the recipient or party.
  RECEIVED = 2, // A successful response has been received from the recipient or party, confirming the processing or execution of the webhook request.
  EXPIRED = 3, //  The expected successful response from the recipient or party has not beenreceived within the specified timeframe, resulting in the expiration of the request.
}

export enum WEBHOOK_ACTION_STATUS {
  ACTIVE = 1, // The webhook action is active and ready to be executed.
  IN_ACTIVE = 0,// The webhook action is inactive and should not be executed.
}

export enum WEBHOOK_EVENT {
  SUCCEED = 'succeed', // Represents a success event in a webhook
  FAILED = 'failed', // Represents a fail event in a webhook
}

export const WEBHOOK_MAXIMUM_ATTEMPTS = 5; // TODO: add into env
export const MAXIMUM_STAMP_ATTEMPTS = 5;// TODO: add into env

export const AXIOS_TIMEOUT = 100;// TODO: add into env

export enum TOKEN_TRANSACTION_STATUS {
  PENDING = 0,
  CONFIRM = 1,
}
export const RETRY_WEBHOOK_TIMER = {
  1: '5m',
  2: '30m',
  3: '1h',
  4: '6h',
  5: '1d',
};

export enum RETRY {
  BLOCKCHAIN = 'retryBlockchain',
  WEBHOOK = 'retryWebhook',
  IN_PROGRESS = 'inProgressBlockchain',
  RETRY_BLOCKCHAIN_LOCK = 'retryBlockchainLock',
} 

export enum FAIL_REASON {
  WALLET_EMPTY = 0,
  NETWORK_ERROR = 1,
}