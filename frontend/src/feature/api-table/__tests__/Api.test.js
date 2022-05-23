import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import tableEX from "../Api";

// test if table display the database
test("table display the database", async () => {
  const { table } = tableEX;
  const { coffee } = tableAPI;
  // run the database
  const data = coffee.id;

  render(<table />);
  // test if the data in database match with table
  // await waitFor(() => {
  //     expect(data).toBeInTheDocument();
  // });
});






