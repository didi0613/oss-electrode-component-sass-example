// This is a bundled demo
// you should remove this to work on
// your own component.

import React from "react";
import propTypes from "prop-types";

// remember to also remove the bundled demo CSS files
// from ../styles

import styles from "../styles/oss-electrode-component-sass-example.css";
import Accordion from "./accordion";

export default class OssElectrodeComponentSassExample extends React.Component {
  render() {
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

    return (
      <div className={styles.container}>
        <h4>Demo Component</h4>
        {data.map((d, x) => <Accordion key={x} summary={d.summary} details={d.details} />)}
      </div>
    );
  }
}

OssElectrodeComponentSassExample.displayName = "OssElectrodeComponentSassExample";

OssElectrodeComponentSassExample.propTypes = {
  data: propTypes.array
};

OssElectrodeComponentSassExample.defaultProps = { };
