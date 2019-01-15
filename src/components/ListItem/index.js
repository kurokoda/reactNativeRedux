import React, { Component } from "React";
import { Text, View, LayoutAnimation, TouchableWithoutFeedback } from "react-native";
import { CardSection } from "../common";
import { connect } from "react-redux";
import * as actions from "../../actions";

class ListItem extends Component {

  componentWillUpdate(){
    LayoutAnimation.spring()
  }

  renderDescription(){
    const { item } = this.props.library;
    const { expanded } = this.props;

    if (expanded) {
      return (
          <Text>{item.description}</Text>
      )
    }
  }
  render() {
    const { item } = this.props.library;
    const { selectLibrary } = this.props;
    const { titleStyle } = styles;
    return (
        <TouchableWithoutFeedback
            onPress={() => selectLibrary(item.id)}
        >
          <View>
            <CardSection>
              <Text style={titleStyle}>
                {item.title}
                </Text>
            </CardSection>
            {this.renderDescription()}
          </View>
        </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = ({ selection }, ownProps) => {
  const expanded = selection === ownProps.library.item.id;

  return {
    expanded,
    selection
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
  }
}

export default connect(mapStateToProps, actions)(ListItem);

