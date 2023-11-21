// Detail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css'; // Import the CSS file

const Detail = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${id}`);
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.error('Error fetching country details:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container">
      {country && country.name && (
        <>
          <h2 className="heading">{country.name.common}</h2>
          <p className="text">Capital: {country.capital}</p>

          {country.flags && (
            <div className="imageContainer">
              <p className="text">Flag:</p>
              <img className="image" src={country.flags.png} alt={country.flags.alt} />
            </div>
          )}
          {country.coatOfArms && (
            <div className="imageContainer">
              <p className="text">Coat of Arms:</p>
              <img className="image" src={country.coatOfArms.png} alt="Coat of Arms" />
            </div>
          )}
          {/* Add other details as needed */}
        </>
      )}
    </div>
  );
};

export default Detail;
