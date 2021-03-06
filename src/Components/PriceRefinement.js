import React from 'react';
import { NumericMenu } from 'react-instantsearch-dom';

class PriceRefinement extends React.Component {
  render() {
    return (
      <div>
        <h2 className="handwritting">Bucks to Spare?</h2>
        <NumericMenu
          className="text-colour-override"
          attribute="price"
          items={[
            { label: 'Twenty Buck Chuck (below £20)', end: 20 },
            { label: 'Classy Student (£21 - £40)', start: 21, end: 40 },
            { label: 'I have a Job now! (£41 - £60)', start: 41, end: 60 },
            { label: 'We met on Tinder (£61 - £100)', start: 61, end: 100 },
            {
              label: 'I think they are the One! (£101 - £300)',
              start: 101,
              end: 300,
            },
            { label: 'YOLO (£300+)', start: 301 },
          ]}
        />
      </div>
    );
  }
}

export default PriceRefinement;
