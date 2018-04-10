/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import OssElectrodeComponentSassExample from "src/components/oss-electrode-component-sass-example";

describe("components/oss-electrode-component-sass-example", () => {

  describe("Mounting", () => {
    const data = [
      {
        summary: "summary 1",
        details: "details 1"
      },
      {
        summary: "summary 2",
        details: "details 2"
      },
      {
        summary: "summary 3",
        details: "details 3"
      }
    ];
    it("should render into the document", () => {
      const component = shallow(<OssElectrodeComponentSassExample data={data}/>);
      expect(component).to.not.be.null;
    });

  });

});
