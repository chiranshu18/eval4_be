const axios = require("axios");
const makeRequest = async (
  apiEndPoint,
  dynamicConfig,
  token,
) => {
  try{
    const requestDetails = {
      baseURL: "http://localhost:4000",
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      headers: {
        authorization: `Bearer ${token}`,
    },
      ...dynamicConfig,
    };
    const { data } = await axios(requestDetails);
    return data;
  }
  catch(e){
    return e
  }
};

module.exports = makeRequest;