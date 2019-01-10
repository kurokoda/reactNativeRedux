import React, { Component } from "React";
import { View } from "react-native";
import { connect } from "react-redux";

class LibraryList extends Component {
  render() {
    return <View />;
  }
}

const mapStateToProps = ({ libraries }) => {
  return {
    libraries
  };
};

export default connect(mapStateToProps)(LibraryList);
