
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import Loader from "../Loader/Loader";
const DataLoader = ({ Component, ...props }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await fetchData();
        console.log(fetchedData);
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return <Component data={data} {...props} />;
};

export default DataLoader;
