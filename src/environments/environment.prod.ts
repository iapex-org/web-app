export const environment = {
  production: true,
  apiUrlUsersWeb: process.env['API_URL_USERS_WEB'] || '',
  apiUrlPatients: process.env['API_URL_PATIENTS'] || '',
  apiUrlInstitutions: process.env['API_URL_INSTITUTIONS'] || '',
  apiUrlContactRequests: process.env['API_URL_CONTACT_REQUESTS'] || '',
  tokenDuration: process.env['TOKEN_DURATION'] || '',
  authKey: process.env['AUTH_KEY'] || '',
  apiUrlMemberships: '',
  apiUrlNotifications: ''
};
