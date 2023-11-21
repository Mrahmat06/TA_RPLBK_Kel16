// Home.js
import React, { useState, useEffect } from 'react';
import Api from '../services/Api';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.get('/all');
        if (Array.isArray(response.data)) {
          setCountries(response.data);
        } else {
          console.error('Invalid response structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []);

  // Hitung indeks negara yang akan ditampilkan pada halaman saat ini
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h2 className="heading">Countries</h2>
      <ul className="countryList">
        {currentCountries.map((country, index) => (
          <li key={country.name.common} className="countryItem">
            <span className="countryNumber">{indexOfFirstCountry + index + 1}.</span>
            <Link to={`/detail/${country.cca2}`} className="countryLink">
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {/* Tampilkan tombol halaman */}
        {Array.from({ length: Math.ceil(countries.length / countriesPerPage) }).map((_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
