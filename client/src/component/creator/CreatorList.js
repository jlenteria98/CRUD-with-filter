import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  isLoadingForm,
  deleteCreator,
  getCreator,
  showUpdateForm,
  updateCreator,
  sortByFirstname,
  sortByLastName,
} from '../../action/CreatorAction';
import Spinner from '../common/Spinner';

const CreatorList = () => {
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    _id: '',
    data: [],
    sortBy: '',
  });

  const { firstname, lastname, _id, sortBy } = state;
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);
  const creators = useSelector(state => state.creators);
  const { errors } = error;
  const { showUpdate } = creators;
  const { isLoading } = creators;
  const { creator } = creators;

  useEffect(() => {
    dispatch(getCreator());
  }, [dispatch]);

  const handleClick = name => {};

  const handleEditClick = (id, firstName, lastName) => {
    dispatch(showUpdateForm());
    setState({ ...state, _id: id, firstname: firstName, lastname: lastName });
  };
  const handleDeleteClick = _id => {
    setTimeout(() => {
      dispatch(deleteCreator(_id));
    }, 200);
    dispatch(isLoadingForm());
  };

  const backClick = () => {
    dispatch(getCreator());
  };

  const handleChange = text => e => {
    if (e.target.value === 'firstname') {
      dispatch(sortByFirstname());
    } else if (e.target.value === 'lastname') {
      dispatch(sortByLastName());
    }
    setState({ ...state, [text]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      firstname,
      lastname,
    };
    dispatch(updateCreator(data, _id));
  };
  const searchHandle = e => {};

  return (
    <div>
      <div className="filter-div mb-3 mt-5">
        <div className="filter">
          <select
            name="sortBy"
            className="form-control"
            value={sortBy}
            onChange={handleChange('sortBy')}
          >
            <option value="date">Sort by</option>
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
                {creator.map((item, index) => (
                  <tbody key={index}>
                    <tr onClick={() => handleClick(item.firstname)}>
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
                <div className="post-creator">
                  <div className="post-header">
                    <button type="button" onClick={backClick}>
                      <i
                        className="fa fa-arrow-circle-left fa-2x"
                        aria-hidden="true"
                      />
                    </button>
                    <h5 className="mr-2">Update Creator</h5>
                    <p></p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mt-4">
                      <input
                        value={firstname}
                        onChange={handleChange('firstname')}
                        name="firstname"
                        type="text"
                        className="form-control mt-2"
                        placeholder="Firstname"
                      />
                      <span style={{ color: 'red' }}>{errors.firstname}</span>
                      <input
                        onChange={handleChange('lastname')}
                        value={lastname}
                        type="text"
                        className="form-control mt-2"
                        placeholder="Lastname"
                      />
                      <span style={{ color: 'red' }}>{errors.lastname}</span>
                      <button type="submit" className="btn btn-primary mt-4">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
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
