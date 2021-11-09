import KSRequest from './request';
import { BASE_URL, TIME_OUT } from './request/config';
const ksRequest = new KSRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
});
export default ksRequest;
