// LafTools
//
// Date: Sun, 14 Jan 2024
// Second Author: Ryan Laf
// Description:
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

/**
 * THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.mjs
 *
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2023
 * @license Apache-2.0
 */
import Entropy from "../../operations/Entropy.mjs";
import HeatmapChart from "../../operations/HeatmapChart.mjs";
import HexDensityChart from "../../operations/HexDensityChart.mjs";
import ScatterChart from "../../operations/ScatterChart.mjs";
import SeriesChart from "../../operations/SeriesChart.mjs";

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.Charts = {
  Entropy: Entropy,
  "Heatmap chart": HeatmapChart,
  "Hex Density chart": HexDensityChart,
  "Scatter chart": ScatterChart,
  "Series chart": SeriesChart,
};

export default OpModules;
