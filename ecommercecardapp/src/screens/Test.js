import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {RNNBottomSheet} from 'react-native-navigation-bottom-sheet';

RNNBottomSheet.init();

export default class Test extends Component {
  renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        height: 350,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
      }}>
      <Text>
        In order to close the modal, you can swipe it down, touch the area
        outside it or press the back button.
      </Text>
    </View>
  );

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'whitesmoke',
        }}>
        <Button
          onPress={() =>
            RNNBottomSheet.openBottomSheet({
              renderContent: this.renderContent,
              snapPoints: [0, '20%', '40%', '70%'],
              borderRadius: 16,
              onChange: (index: number) => console.log('Snapped to ' + index),
            })
          }
          title="Show modal"
        />
      </View>
    );
  }
}
