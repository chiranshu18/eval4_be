const axios = require("axios");
// const { BACKEND_URL } = require("../../constants/apiEndPoints");
// const { ERROR_ROUTE } = require("../../constants/routes");

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
    // if(navigate){
    //   const errorStatus = e.response?.status
    //   if(errorStatus)
    //   {
    //     navigate(`/error/${errorStatus}`);
    //   }
    //   else{
    //     navigate("/error");
    //   }
    // }
    return e
  }
};

module.exports = makeRequest;