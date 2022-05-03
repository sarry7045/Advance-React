import React, { useEffect } from "react";

const FetchAPI = () => {
  // const [data, setData] = useState([])
  const fetchAPICovidData = async () => {
    try {
      const response = await fetch("https://data.covid19india.org/data.json");
      const data = await response.json();
      console.log(data.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAPICovidData();
  }, []);

  console.log(fetchAPICovidData());

  return <div>FetchAPI</div>;
};

export default FetchAPI;
