import React from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

import OssElectrodeComponentSassExample from "oss-electrode-component-sass-example/demo/demo";
import "oss-electrode-component-sass-example/demo/demo.css";

import Untitled973Component from "untitled973-component/demo/demo";
import "untitled973-component/demo/demo.css";

import "../styles/raleway.css";
import "../styles/skeleton.css";
import custom from "../styles/custom.css";
import electrodePng from "../images/electrode.png";

const locale = "en";

export class Home extends React.Component {
  render() {
    return (
      <IntlProvider locale={locale}>
        <div className={custom.demoAppContainer}>
          <h2>
            <a href="https://github.com/electrode-io">
              <img src={electrodePng} />
            </a>
            Component SASS Example
          </h2>
          <OssElectrodeComponentSassExample />
          <Untitled973Component />
        </div>
      </IntlProvider>
    );
  }
}

export default connect(state => state)(Home);
