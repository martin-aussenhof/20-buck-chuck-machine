import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  CurrentRefinements,
  Configure,
  SortBy,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';
import './algolia.css';

import PriceRefinement from './Components/PriceRefinement';
import TypeRefinement from './Components/TypeRefinement';
import QualityRefinement from './Components/QualityRefinement';

const searchClient = algoliasearch(
  'LU2EQJQULJ',
  '4010971865d8be91edaa3f83cad0ddf0'
);

class App extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <div className="title-bar">20 Buck Chuck</div>

        <InstantSearch indexName="dev_WINE" searchClient={searchClient}>
          <div className="left-panel">
            <ClearRefinements />
            <TypeRefinement />
            <PriceRefinement />
            <QualityRefinement />
            <Configure hitsPerPage={8} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <CurrentRefinements />
            <span className="domain">Sort by:</span>
            <SortBy
              defaultRefinement="dev_WINE"
              items={[
                { value: 'dev_WINE', label: 'Relevance' },
                { value: 'dev_WINE_price_desc', label: 'Price desc.' },
                { value: 'dev_WINE_price_asc', label: 'Price asc.' },
              ]}
            />
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
    <article className="article-centred text-colour-override">
      <span className="price-badge">£{props.hit.price}</span>
      <span className="quality-badge">{props.hit.quality}</span>
      <img src={props.hit.image} alt={props.hit.name} />
      <h1>
        <Highlight attribute="name" hit={props.hit} />
      </h1>
      <span className="domain">{props.hit.domain}</span>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
