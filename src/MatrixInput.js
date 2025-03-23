// src/MatrixInput.js
import React, { useState } from 'react';

const MatrixInput = ({ onMatrixChange }) => {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);
  const [matrix, setMatrix] = useState([]);

  const handleMatrixInput = (e) => {
    const newMatrix = [...matrix];
    const { row, col, value } = e.target.dataset;

    newMatrix[row][col] = parseFloat(value);

    setMatrix(newMatrix);
    onMatrixChange(newMatrix);
  };

  const renderMatrixInput = () => {
    let inputMatrix = [];
    for (let i = 0; i < rows; i++) {
      inputMatrix.push(
        <div key={`row-${i}`}>
          {Array.from({ length: cols }, (_, j) => (
            <input
              key={`col-${j}`}
              type="number"
              data-row={i}
              data-col={j}
              onChange={handleMatrixInput}
            />
          ))}
        </div>
      );
    }
    return inputMatrix;
  };

  return (
    <div>
      <div>
        Rows:
        <input
          type="number"
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
        />
        Columns:
        <input
          type="number"
          value={cols}
          onChange={(e) => setCols(Number(e.target.value))}
        />
      </div>
      <div>{renderMatrixInput()}</div>
    </div>
  );
};

export default MatrixInput;
