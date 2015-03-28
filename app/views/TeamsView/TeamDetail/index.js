'use strict';

var React = require('react-native');

var images = require('./../../../utils/imagesData.js');

var styles = require('./style');

var {
  Image,
  Text,
  View,
} = React;

var TeamDetail = React.createClass({
  getInitialState: function() {
    return {
    };
  },
  componentDidMount: function() {

  },
  render: function() {
    return(
      <View style={styles.container}>
        <Text style={styles.teamTitle}>
          {this.props.team.name}
        </Text>
        <Text style={styles.teamTitle}>
          {this.props.team.squadMarketValue}
        </Text>
        <Image
          source={{uri: images[this.props.team.code]}}
          style={styles.teamMainImage} />
      </View>
    );
  },
});
module.exports = TeamDetail;
