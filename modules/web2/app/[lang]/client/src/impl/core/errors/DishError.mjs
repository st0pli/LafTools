// Date: Sun, 14 Jan 2024
// Second Author: Ryan Laf
// Description:
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

/**
 * Custom error type for handling Dish type errors.
 * i.e. where the Dish cannot be successfully translated between types
 *
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */
class DishError extends Error {
  /**
   * Standard error constructor. Adds no new behaviour.
   *
   * @param args - Standard error args
   */
  constructor(...args) {
    super(...args);

    this.type = "DishError";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DishError);
    }
  }
}

export default DishError;
