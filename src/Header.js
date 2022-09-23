import React from 'react';
import { connect } from 'react-redux';
import SearchLocation from './SearchLocation';
import { toggleTempScale } from './actions';
import main from "./images/main.PNG"
const Header = ({ tempScale, toggleTempScale }) => {
  const celsiusFontWeight = tempScale === 'celsius' ? 'bolder' : 'normal';
  const fahrenheitFontWeight = tempScale === 'fahrenheit' ? 'bolder' : 'normal';

  const onToggleTempScale = () => {
    toggleTempScale();
  };
  return (
    <nav className="navbar navbar-dark bgdark row mb-4 pt-4 pb-4 text-center">
      <div className="col-sm-2 text-center">
        <img
          className="img-fluid "
          src={main}
          style={{ maxWidth: '200px', height: '60px' }}
          alt={'logo'}
        />
      </div>

      <div className="col-sm-8">
        <SearchLocation />
      </div>
      <div className="col-sm-2">
        <button onClick={onToggleTempScale} type="button" className="btn btn-light w-100">
          <span style={{ fontWeight: celsiusFontWeight }}>°C</span> /{' '}
          <span style={{ fontWeight: fahrenheitFontWeight }}>°F</span>
        </button>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { tempScale: state.tempScale };
};

export default connect(mapStateToProps, { toggleTempScale })(Header);