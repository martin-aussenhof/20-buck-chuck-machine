import React from 'react';
import { NumericMenu } from 'react-instantsearch-dom';

class QualityRefinement extends React.Component {
  render() {
    return (
      <div>
        <h2 className="handwritting">
          We asked Jacques from the Bar. Here's what he thinks...
        </h2>

        <NumericMenu
          className="text-colour-override"
          attribute="quality"
          items={[
            { label: 'Ideal for the in-laws', end: 90 },
            { label: 'We usually export these', start: 91, end: 93 },
            { label: 'Perfect for your friends', start: 94, end: 97 },
            { label: 'What Jacques would drink', start: 98 },
          ]}
        />
      </div>
    );
  }
}

export default QualityRefinement;
