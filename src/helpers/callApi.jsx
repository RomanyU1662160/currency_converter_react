const url = "http://www.floatrates.com/daily/gbp.json";

const callApi = async () => {
  const response = await fetch(url);
  console.log("response :>> ", response);
  const data = await response.json();
  console.log("data :>> ", data);
  return data;
};

export default callApi;
