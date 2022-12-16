import getConfig from "next/config";
const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

export const API = "";

export const APP_NAME = "PMS";

export const DOMAIN = "";

export const FB_APP_ID = "";
export const DISQUS_SHORTNAME = "";
export const GOOGLE_CLIENT_ID = "";
export const MONGODB_URI = serverRuntimeConfig.MONGODB_URI;
export const SENDGRID_API_KEY = serverRuntimeConfig.SENDGRID_API_KEY;
