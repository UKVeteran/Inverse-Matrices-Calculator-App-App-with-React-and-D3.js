// src/MatrixVisualization.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const MatrixVisualization = ({ matrix }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!matrix) return;

    const width = 300;
    const height = 300;
    const rows = matrix.length;
    const cols = matrix[0].length;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    svg.selectAll('*').remove(); // Clear existing SVG

    const cellWidth = width / cols;
    const cellHeight = height / rows;

    svg.selectAll('rect')
      .data(matrix.flat())
      .enter()
      .append('rect')
      .attr('x', (d, i) => (i % cols) * cellWidth)
      .attr('y', (d, i) => Math.floor(i / cols) * cellHeight)
      .attr('width', cellWidth)
      .attr('height', cellHeight)
      .attr('fill', '#ddd')
      .attr('stroke', '#000');

    svg.selectAll('text')
      .data(matrix.flat())
      .enter()
      .append('text')
      .attr('x', (d, i) => (i % cols) * cellWidth + cellWidth / 2)
      .attr('y', (d, i) => Math.floor(i / cols) * cellHeight + cellHeight / 2)
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .text(d => d);

  }, [matrix]);

  return <svg ref={svgRef}></svg>;
};

export default MatrixVisualization;
