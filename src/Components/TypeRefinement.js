import React from 'react';
import { RefinementList } from 'react-instantsearch-dom';

class TypeRefinement extends React.Component {
  render() {
    return (
      <div>
        <h2 className="handwritting">Red or White</h2>
        <RefinementList attribute="type" className="text-colour-override" />
      </div>
    );
  }
}

export default TypeRefinement;
