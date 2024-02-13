// const AUTH_SERVICES_BASE_URL = `${process.env.REACT_APP_HIVEPATH_AUTH_API_URL}`;
// const LANDING_PAGE_SERVICES_BASE_URL = `${process.env.REACT_APP_HIVEPATH_LANDING_PAGE_API_URL}`;
// const KNOWLEDGE_SESSIONS_SERVICES_BASE_URL = `${process.env.REACT_APP_HIVEPATH_KNOWLEDGE_SESSION_API_URL}`;
// const USER_PROFILE_SERVICES_BASE_URL = `${process.env.REACT_APP_HIVEPATH_USER_PROFILE_API_URL}`;
// const CALENDAR_SERVICES_BASE_URL = `${process.env.REACT_APP_HIVEPATH_CALENDAR_API_URL}`;
// const SCHEDULE_SERVICES_BASE_URL = `${process.env.REACT_APP_HIVEPATH_SCHEDULE_API_URL}`;
// const UTILS_SERVICES_BASE_URL = `${process.env.REACT_APP_HIVEPATH_UTIL_API_URL}`;

const HIVEPATH_API_URLS = {
  ADMIN_SERVICES: {
    FETCH_CATEGORY: `https://app-schedule.hivepath.io/api/fetchCategory`,
    FETCH_AGGREGATED_CATEGORY: `https://app-schedule.hivepath.io/api/aggregatedServiceList`,
    FETCH_MASTER_COMPANY: `https://app-schedule.hivepath.io/api/fetchCompanyMaster`,
  },
  CUSTOMER_SERVICES: {
    FETCH_GALLERY: `https://app-schedule.hivepath.io/api/fetchGallery`,
    FETCH_REVIEWS: `https://app-schedule.hivepath.io/api/fetchReviews`,
  },
  GENERAL_SERVICES: {
    FETCH_COMPANY: "https://app-schedule.hivepath.io/api/fetchCompany",
  },
};

export const { ADMIN_SERVICES, CUSTOMER_SERVICES, GENERAL_SERVICES } =
  HIVEPATH_API_URLS;
export default HIVEPATH_API_URLS;
