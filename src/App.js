import './App.css';
import CountrySelector from './components/CountrySelector';
import HighLight from './components/Highlight';
import Summary from './components/Summary';
import { useEffect, useState } from 'react';
import { getCountries, getReportByCountries } from './apis';
function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [report, setReport] = useState();
  useEffect(() => {
    getCountries().then(res => setCountries(res.data));
    setSelectedCountry('vn')
  }, []);

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
  }, [selectedCountry, countries])


  return (
    <>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountry} />
      <HighLight report={report} />
      <Summary report={report} countryId={selectedCountry} />
    </>
  );
}

export default App;
