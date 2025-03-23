// src/MatrixInverse.js
import React, { useState } from 'react';
import { inv } from 'mathjs';
import './MatrixInverse.css'; // Import custom CSS for styling

const MatrixInverse = () => {
  const [matrixSize, setMatrixSize] = useState(2); // Default to 2x2 matrix
  const [matrixValues, setMatrixValues] = useState([]);
  const [inverseMatrix, setInverseMatrix] = useState(null);
  const [error, setError] = useState(null);

  // Function to handle matrix size change (2x2, 3x3, 4x4)
  const handleMatrixSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setMatrixSize(newSize);
    setMatrixValues(Array(newSize).fill().map(() => Array(newSize).fill('')));
  };

  // Function to handle individual matrix value change
  const handleMatrixValueChange = (rowIndex, colIndex, value) => {
    const updatedMatrix = [...matrixValues];
    updatedMatrix[rowIndex][colIndex] = value;
    setMatrixValues(updatedMatrix);
  };

  // Function to calculate the matrix inverse
  const handleCalculateInverse = () => {
    try {
      const matrixArray = matrixValues.map(row => row.map(val => parseFloat(val)));
      const result = inv(matrixArray);
      setInverseMatrix(result);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError('Invalid matrix or unable to compute the inverse.');
      setInverseMatrix(null);
    }
  };

  // Render matrix input fields dynamically
  const renderMatrixInputs = () => {
    return (
      <div className="matrix-inputs">
        {matrixValues.map((row, rowIndex) => (
          <div key={rowIndex} className="matrix-row">
            {row.map((col, colIndex) => (
              <input
                key={colIndex}
                type="number"
                value={matrixValues[rowIndex][colIndex]}
                onChange={(e) => handleMatrixValueChange(rowIndex, colIndex, e.target.value)}
                className="matrix-input"
                placeholder={`Row ${rowIndex + 1} Col ${colIndex + 1}`}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="matrix-inverse-container">
      <h1>Matrix Inverse Calculator</h1>
      
      <div className="matrix-size-selector">
        <label htmlFor="matrix-size">Select Matrix Size:</label>
        <select id="matrix-size" value={matrixSize} onChange={handleMatrixSizeChange}>
          <option value={2}>2x2</option>
          <option value={3}>3x3</option>
          <option value={4}>4x4</option>
        </select>
      </div>
      
      {renderMatrixInputs()}

      <button onClick={handleCalculateInverse} className="calculate-button">Calculate Inverse</button>

      {error && <p className="error-message">{error}</p>}

      {inverseMatrix && (
        <div className="result">
          <h3>Inverse Matrix:</h3>
          <pre>{JSON.stringify(inverseMatrix, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MatrixInverse;
