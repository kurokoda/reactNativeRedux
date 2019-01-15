import React, { Component } from "React";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import ListItem from '../ListItem';

class LibraryList extends Component {

  renderItem(library){
    return <ListItem library={library} />
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => String(library.id)}
      />
    )
  }
}

const mapStateToProps = ({ libraries }) => {
  return {
    libraries
  };
};

export default connect(mapStateToProps)(LibraryList);
