// This is a bundled demo
// you should remove this to work on
// your own component.

import React from "react";
import propTypes from "prop-types";

import styles from "../styles/untitled973-component.css";
import Accordion from "./accordion";

export default class Untitled973Component extends React.Component {
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
        <h4>Second Component</h4>
        {data.map((d, x) => <Accordion key={x} summary={d.summary} details={d.details} />)}
      </div>
    );
  }
}

Untitled973Component.displayName = "Untitled973Component";

Untitled973Component.propTypes = {
  data: propTypes.array
};

Untitled973Component.defaultProps = { };
