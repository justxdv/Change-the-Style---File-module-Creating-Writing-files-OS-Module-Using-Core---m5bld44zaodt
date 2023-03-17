import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeColor, changeStyle } from '../actions/index';
import '../styles/App.css';

const App = () => {
  const colorState = useSelector((state) => state.colorReducer);
  const styleState = useSelector((state) => state.styleReducer);
  const dispatch = useDispatch();

  const handleColorChange = () => {
    dispatch(changeColor(colorState));
  };

  const handleStyleChange = () => {
    dispatch(changeStyle(styleState));
  };

  return (
    <div id="main">
      <h1 id="text" style={{ color: colorState, fontFamily: styleState }}>
        Newton School
      </h1>
      <button id="colorBtn" onClick={handleColorChange}>
        Change Color
      </button>
      <button id="styleBtn" onClick={handleStyleChange}>
        Change Style
      </button>
    </div>
  );
};

export default App;
