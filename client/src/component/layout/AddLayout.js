import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCreator, addCreator } from '../../action/CreatorAction';
import { Modal } from 'react-bootstrap';

const AddLayout = () => {
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
  });
  const dispatch = useDispatch();
  const { firstname, lastname } = state;
  const error = useSelector(state => state.error);
  const { errors } = error;

  useEffect(() => {
    errors.firstname = '';
    errors.lastname = '';
  });

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
    <div className="post-creator">
      <Modal show={true} onHide={backClick} size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Add Creator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddLayout;
