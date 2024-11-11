const isProduction = process.env.NODE_ENV === 'production';

const apiHost = isProduction
  ? process.env.REACT_APP_API_HOST // Production API host from environment
  : '127.0.0.1';

const apiPort = isProduction ? '' : '8000'; // No port in production if using default HTTP/HTTPS

const apiConfig = {
  API_URL: isProduction
    ? `https://technosystem-backend.azurewebsites.net/` // Use HTTPS for production, without a port
    : `http://${apiHost}:${apiPort}`, // Local URL for development
};

export default apiConfig;
