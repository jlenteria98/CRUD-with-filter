import React, { useState, useEffect } from 'react';
import '../../App.css';
import CreatorList from '../creator/CreatorList';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCreator,
  getCreator,
  isLoadingForm,
  showAddForm,
} from '../../action/CreatorAction';

const MainLayout = () => {
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
  });

  const { firstname, lastname } = state;
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);
  const creators = useSelector(state => state.creators);
  const { showForm } = creators;
  const { creator } = creators;
  const { errors } = error;

  useEffect(() => {
    dispatch(getCreator());
  }, [dispatch]);

  useEffect(() => {
    errors.firstname = '';
    errors.lastname = '';
  });
  const addCreatorClick = () => {
    setState({ ...state, firstname: '', lastname: '' });
    dispatch(showAddForm());
  };

  const backClick = () => {
    dispatch(getCreator());
  };

  const handleChange = text => e => {
    setState({ ...state, [text]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      firstname,
      lastname,
    };
    dispatch(addCreator(data));
  };

  return (
    <div className="main-layout">
      <div className="main-layout-header">
        <div className="main-layout-header-1">
          <h1>Game Creator</h1>
          <button
            type="button"
            onClick={addCreatorClick}
            className="btn btn-primary ml-5"
          >
            <i className="fa fa-plus " style={{ fontSize: 18 }} />
          </button>
        </div>
      </div>

      <div className="display-game-creator">
        <CreatorList />
      </div>
      {showForm ? (
        <div className="post-creator">
          <div className="post-header">
            <button type="button" onClick={backClick}>
              <i class="fa fa-arrow-circle-left fa-2x" aria-hidden="true" />
            </button>
            <h5 className="mr-2">Add Creator</h5>
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
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default MainLayout;
