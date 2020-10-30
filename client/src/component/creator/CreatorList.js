import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCreator } from '../../action/CreatorAction';

const CreatorList = () => {
  const dispatch = useDispatch();
  const creators = useSelector(state => state.creators);
  const { creator } = creators;

  useEffect(() => {
    dispatch(getCreator());
  }, [dispatch]);

  const handleClick = name => {};

  return (
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
                  <button className="btn btn-primary" type="button">
                    <i className="fa fa-edit" />
                  </button>

                  <button
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
    </div>
  );
};

export default CreatorList;
