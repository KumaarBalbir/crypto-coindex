const axios = require("axios");
const colors = require("colors");

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "https://rest.coinapi.io/v1/exchangerate";
  }

  async getPriceData(coinOption, curOption) {
    try {
      //Formatter the currency
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: curOption,
      });

      // Split the different coins into an array
      const coinOptions = coinOption.split(",");

      // Make API request for each coin
      const promises = coinOptions.map(async (coin) => {
        const res = await axios.get(`${this.baseURL}/${coin}/${curOption}`, {
          headers: {
            "X-CoinAPI-Key": `${this.apiKey}`,
          },
        });
        return res.data; // Return data from each request
      });

      // Await all promises to resolve
      const results = await Promise.all(promises);

      let output = "";
      results.forEach((res) => {
        output += `Coin: ${res.asset_id_base.yellow} | Price: ${
          formatter.format(res.rate).green
        }\n`;
      });

      return output;
    } catch (err) {
      handleAPIError(err);
    }
  }
}
function handleAPIError(err) {
  if (err.response.status === 401) {
    throw new Error("API Key not valid. Get one at https://docs.coinapi.io");
  } else if (err.response.status === 404) {
    throw new Error(
      "Coin not found. Make sure you are typing the correct coin and currency names."
    );
  } else {
    throw new Error("Something went wrong. Try again later.");
  }
}

module.exports = CryptoAPI;
