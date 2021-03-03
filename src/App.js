import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  NumericMenu,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  'LU2EQJQULJ',
  '4010971865d8be91edaa3f83cad0ddf0'
);

class App extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css"
          integrity="sha256-t2ATOGCtAIZNnzER679jwcFcKYfLlw01gli6F6oszk8="
          crossorigin="anonymous"
        />
        <h1>20 Buck Chuck</h1>
        <InstantSearch indexName="dev_WINE" searchClient={searchClient}>
          <div className="left-panel">
            <ClearRefinements />
            <h2>Red or White</h2>
            (Sorry White Stripes, but you gotta decide.)
            <RefinementList attribute="type" />
            <h2>Bucks to Spare?</h2>
            <NumericMenu
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
            <h2>We asked Jacques from the Bar.</h2>
            Here's what he thinks...
            <NumericMenu
              attribute="quality"
              items={[
                { label: 'Ideal for the in-laws', end: 90 },
                { label: 'We usually export these', start: 91, end: 93 },
                { label: 'Perfect for your friends', start: 94, end: 97 },
                { label: 'What Jacques would drink', start: 98 },
              ]}
            />
            <Configure hitsPerPage={16} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <article>
      <h1>
        <Highlight attribute="name" hit={props.hit} />
      </h1>
      £{props.hit.price} | {props.hit.quality}
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
