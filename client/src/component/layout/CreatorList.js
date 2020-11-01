import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  isLoadingForm,
  deleteCreator,
  getCreator,
  showUpdateForm,
  sortByFirstname,
  sortByLastName,
} from '../../action/CreatorAction';

import Spinner from '../common/Spinner';
import EditLayout from './EditLayout';
import FilterLayout from './FilterLayout';

const CreatorList = () => {
  const [state, setState] = useState({
    _firstname: '',
    _lastname: '',
    _id: '',
    data: [],
    sortBy: '',
    search: '',
  });

  const { _id, _firstname, _lastname, search, sortBy } = state;
  const dispatch = useDispatch();

  const creators = useSelector(state => state.creators);

  const { showUpdate } = creators;
  const { isLoading } = creators;
  const { creator } = creators;

  useEffect(() => {
    dispatch(getCreator());
  }, [dispatch]);

  const handleEditClick = (id, firstName, lastName) => {
    dispatch(showUpdateForm());
    setState({ ...state, _id: id, _firstname: firstName, _lastname: lastName });
  };

  const handleDeleteClick = _id => {
    setTimeout(() => {
      dispatch(deleteCreator(_id));
    }, 200);
    dispatch(isLoadingForm());
  };

  const handleChange = text => e => {
    if (e.target.value === 'firstname') {
      dispatch(sortByFirstname());
    } else if (e.target.value === 'lastname') {
      dispatch(sortByLastName());
    } else if (e.target.value === 'date') {
      dispatch(getCreator());
    }
    setState({ ...state, [text]: e.target.value });
  };

  const searchHandle = e => {
    setState({ search: e.target.value });
  };

  const filteredData = creator.filter(item => {
    return item.firstname.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <FilterLayout
        searchHandle={searchHandle}
        handleChange={handleChange}
        sortBy={sortBy}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {creator.length > 0 ? (
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Creator Name</th>
                    <th></th>
                  </tr>
                </thead>
                {filteredData.map((item, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>
                        {item.firstname} {item.lastname}
                      </td>
                      <td style={{ width: 100 }}>
                        <div className="buttons">
                          <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() =>
                              handleEditClick(
                                item._id,
                                item.firstname,
                                item.lastname
                              )
                            }
                          >
                            <i className="fa fa-edit" />
                          </button>

                          <button
                            onClick={() => {
                              handleDeleteClick(item._id);
                            }}
                            className="btn btn-danger"
                            type="button"
                            style={{ marginLeft: 5 }}
                          >
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
              {showUpdate ? (
                <EditLayout
                  _id={_id}
                  _firstname={_firstname}
                  _lastname={_lastname}
                />
              ) : null}
            </div>
          ) : (
            <p className="text-center mt-5">No Data yet</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CreatorList;
