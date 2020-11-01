import React from 'react';

const FilterLayout = ({ handleChange, searchHandle, sortBy }) => {
  return (
    <div className="filter-div mb-3 mt-5">
      <div className="filter">
        <select
          name="sortBy"
          className="form-control"
          value={sortBy}
          onChange={handleChange('sortBy')}
        >
          <option value="date">Date</option>
          <option value="firstname">Firstname</option>
          <option value="lastname">Lastname</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="search"
        className="form-control"
        onChange={searchHandle}
      />
    </div>
  );
};

export default FilterLayout;
