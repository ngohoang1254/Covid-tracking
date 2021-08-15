import './App.css';
import CountrySelector from './components/CountrySelector';
import HighLight from './components/Highlight';
import Summary from './components/Summary';
import { useEffect, useState } from 'react';
import axios from "axios"
import { getCountries, getReportByCountries } from './apis';
function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [report, setReport] = useState();
  const [ipAddress, setIpAdress] = useState('');
  useEffect(() => {
    getCountries().then(res => setCountries(res.data));
    setSelectedCountry('vn')
  }, []);
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);

  }
  const handleOnChange = (e) => {
    // const { Slug } = countries.find(country => country.ISO2.toLowerCase() === e.target.value);
    // getReportByCountries(Slug).then(res => console.log(res));
    setSelectedCountry(e.target.value);

  }

  useEffect(() => {
    if (selectedCountry) {
      const selectCountry = countries.find(country => country.ISO2.toLowerCase() === selectedCountry);
      if (selectCountry) {
        getReportByCountries(selectCountry.Slug).then(res => {
          res.data.pop();
          setReport(res.data)
        });
      }
    }
    getData();
  }, [selectedCountry, countries,])


  return (
    <>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountry} />
      <HighLight report={report} />
      <Summary report={report} countryId={selectedCountry} />
    </>
  );
}

export default App;
