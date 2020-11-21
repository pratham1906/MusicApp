import React from 'react';
import {
  View,
  Image,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

const PopularChannelView = ({item}) => {
  const onPress = () => {
    alert('List Item Pressed');
  };

  const renderView = () => (
    <View style={{marginRight: 10}}>
      <Image
        style={{width: 96, height: 96}}
        resizeMode={'stretch'}
        source={item.IMAGE}
      />
    </View>
  );

  return Platform.OS === 'android' ? (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .22)', true)}>
      {renderView()}
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={onPress}>{renderView()}</TouchableOpacity>
  );
};

export default PopularChannelView;
