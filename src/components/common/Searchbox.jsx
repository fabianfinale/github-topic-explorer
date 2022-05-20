import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { QueryContext } from '../../utils/context';

const Searchbox = ({ isLoading }) => {
  const { query, setQuery } = useContext(QueryContext);
  const [searchQuery, setSearchQuery] = useState(query);
  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchQuery);
  };

  return (
    <div className='searchbox__container'>
      <form className='searchbox__form' onSubmit={handleSubmit}>
        <input
          className='searchbox'
          type='search'
          name='search'
          id='search'
          value={searchQuery}
          onChange={handleChange}
          autoFocus
        />
        <button className='btn btn--primary' disabled={!searchQuery}>
          {isLoading ? (
            <FontAwesomeIcon className='fa-spin' icon={faCircleNotch} />
          ) : (
            'Search'
          )}
        </button>
      </form>
    </div>
  );
};

Searchbox.propTypes = {
  isLoading: PropTypes.bool,
};

export default Searchbox;
