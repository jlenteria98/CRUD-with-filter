import React from 'react';
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { showAddForm } from '../../action/CreatorAction';
import CreatorList from '../layout/CreatorList';
import AddLayout from '../layout/AddLayout';

const MainLayout = () => {
  const dispatch = useDispatch();
  const creators = useSelector(state => state.creators);
  const { showForm } = creators;

  const addCreatorClick = () => {
    dispatch(showAddForm());
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
      {showForm ? <AddLayout /> : null}
    </div>
  );
};

export default MainLayout;
