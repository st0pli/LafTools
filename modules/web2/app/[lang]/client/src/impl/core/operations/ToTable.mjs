// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Sun, 14 Jan 2024
// Second Author: Ryan Laf
// Description:
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

/**
 * @author Mark Jones [github.com/justanothermark]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

import Operation from "../Operation.tsx";
import Utils from "../Utils.mjs";

/**
 * To Table operation
 */
class ToTable extends Operation {
  /**
   * ToTable constructor
   */
  constructor() {
    super();

    this.name = "To Table";
    this.module = "Default";
    this.description =
      "Data can be split on different characters and rendered as an HTML, ASCII or Markdown table with an optional header row.<br><br>Supports the CSV (Comma Separated Values) file format by default. Change the cell delimiter argument to <code>\\t</code> to support TSV (Tab Separated Values) or <code>|</code> for PSV (Pipe Separated Values).<br><br>You can enter as many delimiters as you like. Each character will be treat as a separate possible delimiter.";
    this.infoURL = "https://wikipedia.org/wiki/Comma-separated_values";
    this.inputType = "string";
    this.outputType = "html";
    this.args = [
      {
        name: "Cell delimiters",
        type: "binaryShortString",
        value: ",",
      },
      {
        name: "Row delimiters",
        type: "binaryShortString",
        value: "\\r\\n",
      },
      {
        name: "Make first row header",
        type: "boolean",
        value: false,
      },
      {
        name: "Format",
        type: "option",
        value: ["ASCII", "HTML", "Markdown"],
      },
    ];
  }

  /**
   * @param {string} input
   * @param {Object[]} args
   * @returns {html}
   */
  run(input, args) {
    const [cellDelims, rowDelims, firstRowHeader, format] = args;

    // Process the input into a nested array of elements.
    const tableData = Utils.parseCSV(
      Utils.escapeHtml(input),
      cellDelims.split(""),
      rowDelims.split(""),
    );

    if (!tableData.length) return "";

    // Render the data in the requested format.
    switch (format) {
      case "ASCII":
        return asciiOutput(tableData);
      case "HTML":
        return htmlOutput(tableData);
      case "Markdown":
        return markdownOutput(tableData);
      default:
        return htmlOutput(tableData);
    }

    /**
     * Outputs an array of data as an ASCII table.
     *
     * @param {string[][]} tableData
     * @returns {string}
     */
    function asciiOutput(tableData) {
      const horizontalBorder = "-";
      const verticalBorder = "|";
      const crossBorder = "+";

      let output = "";
      const longestCells = [];

      // Find longestCells value per column to pad cells equally.
      tableData.forEach(function (row, index) {
        row.forEach(function (cell, cellIndex) {
          if (
            longestCells[cellIndex] === undefined ||
            cell.length > longestCells[cellIndex]
          ) {
            longestCells[cellIndex] = cell.length;
          }
        });
      });

      // Add the top border of the table to the output.
      output += outputHorizontalBorder(longestCells);

      // If the first row is a header, remove the row from the data and
      // add it to the output with another horizontal border.
      if (firstRowHeader) {
        const row = tableData.shift();
        output += outputRow(row, longestCells);
        output += outputHorizontalBorder(longestCells);
      }

      // Add the rest of the table rows.
      tableData.forEach(function (row, index) {
        output += outputRow(row, longestCells);
      });

      // Close the table with a final horizontal border.
      output += outputHorizontalBorder(longestCells);

      return output;

      /**
       * Outputs a row of correctly padded cells.
       */
      function outputRow(row, longestCells) {
        let rowOutput = verticalBorder;
        row.forEach(function (cell, index) {
          rowOutput +=
            " " +
            cell +
            " ".repeat(longestCells[index] - cell.length) +
            " " +
            verticalBorder;
        });
        rowOutput += "\n";
        return rowOutput;
      }

      /**
       * Outputs a horizontal border with a different character where
       * the horizontal border meets a vertical border.
       */
      function outputHorizontalBorder(longestCells) {
        let rowOutput = crossBorder;
        longestCells.forEach(function (cellLength) {
          rowOutput += horizontalBorder.repeat(cellLength + 2) + crossBorder;
        });
        rowOutput += "\n";
        return rowOutput;
      }
    }

    /**
     * Outputs a table of data as a HTML table.
     *
     * @param {string[][]} tableData
     * @returns {string}
     */
    function htmlOutput(tableData) {
      // Start the HTML output with suitable classes for styling.
      let output =
        "<table class='table table-hover table-sm table-bordered table-nonfluid'>";

      // If the first row is a header then put it in <thead> with <th> cells.
      if (firstRowHeader) {
        const row = tableData.shift();
        output += "<thead class='thead-light'>";
        output += outputRow(row, "th");
        output += "</thead>";
      }

      // Output the rest of the rows in the <tbody>.
      output += "<tbody>";
      tableData.forEach(function (row, index) {
        output += outputRow(row, "td");
      });

      // Close the body and table elements.
      output += "</tbody></table>";
      return output;

      /**
       * Outputs a table row.
       *
       * @param {string[]} row
       * @param {string} cellType
       */
      function outputRow(row, cellType) {
        let output = "<tr>";
        row.forEach(function (cell) {
          output += "<" + cellType + ">" + cell + "</" + cellType + ">";
        });
        output += "</tr>";
        return output;
      }
    }

    /**
     * Outputs an array of data as a Markdown table.
     *
     * @param {string[][]} tableData
     * @returns {string}
     */
    function markdownOutput(tableData) {
      const headerDivider = "-";
      const verticalBorder = "|";

      let output = "";
      const longestCells = [];

      // Find longestCells value per column to pad cells equally.
      tableData.forEach(function (row, index) {
        row.forEach(function (cell, cellIndex) {
          if (
            longestCells[cellIndex] === undefined ||
            cell.length > longestCells[cellIndex]
          ) {
            longestCells[cellIndex] = cell.length;
          }
        });
      });

      // Ignoring the checkbox, as current Mardown renderer in CF doesn't handle table without headers
      const row = tableData.shift();
      output += outputRow(row, longestCells);
      let rowOutput = verticalBorder;
      row.forEach(function (cell, index) {
        rowOutput +=
          " " +
          headerDivider.repeat(longestCells[index]) +
          " " +
          verticalBorder;
      });
      output += rowOutput += "\n";

      // Add the rest of the table rows.
      tableData.forEach(function (row, index) {
        output += outputRow(row, longestCells);
      });

      return output;

      /**
       * Outputs a row of correctly padded cells.
       */
      function outputRow(row, longestCells) {
        let rowOutput = verticalBorder;
        row.forEach(function (cell, index) {
          rowOutput +=
            " " +
            cell +
            " ".repeat(longestCells[index] - cell.length) +
            " " +
            verticalBorder;
        });
        rowOutput += "\n";
        return rowOutput;
      }
    }
  }
}

export default ToTable;
