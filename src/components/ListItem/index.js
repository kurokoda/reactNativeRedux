import React, { Component } from "React";
import { Text } from "react-native";
import { CardSection } from "../common";

class ListItem extends Component {
  render() {
    const { item } = this.props.library;
    const { titleStyle } = styles;
    return (
        <CardSection>
          <Text style={titleStyle}>{item.title}</Text>
        </CardSection>
    )
  }
}


const styles = {
  titleStyle: {
    fontSize: 18,
  }
}

export default ListItem;
