import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './SearchBar.module.scss';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const fetchSearchResults = async (searchTerm) => {
    const locations = `http://localhost:8000/api/entertainmentapp/locations/?search=${searchTerm}`;
    const events = `http://localhost:8000/api/entertainmentapp/events/?search=${searchTerm}`;
    const categories = `http://localhost:8000/api/entertainmentapp/categories/?search=${searchTerm}`;

    const promises = [
      axios.get(locations),
      axios.get(events),
      axios.get(categories),
    ];

    const [locationsRes, eventsRes, categoriesRes] = await Promise.all(promises);

    const combinedResults = [
      ...locationsRes.data.map((location) => ({ ...location, type: 'location' })),
      ...eventsRes.data.map((event) => ({ ...event, type: 'event' })),
      ...categoriesRes.data.map((category) => ({ ...category, type: 'category' })),
    ];

    setResults(combinedResults);
  };

  useEffect(() => {
    if (searchTerm) {
        if (searchTerm.length > 2) {
            fetchSearchResults(searchTerm);
        }
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const generateLink = (result) => {
    switch (result.type) {
      case 'location':
        return `/venues/${result.id}`;
      case 'event':
        return `/events/${result.id}`;
      case 'category':
        return `/categories/${result.id}`;
      default:
        return '#';
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm.length > 2 && (
        <div className={styles.searchResults}>
          {results.map((result) => (
            <Link
              key={result.id}
              to={generateLink(result)}
              className={styles.searchResult}
            >
              {result.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
