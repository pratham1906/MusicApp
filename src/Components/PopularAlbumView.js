import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

const PopularAlbumView = ({item, navigation}) => {
  const onPress = () => {
    navigation.navigate('Songs');
  };

  const renderView = () => (
    <View style={{marginRight: 10}}>
      <View
        style={{
          shadowColor: 'lightgray',
          shadowOffset: {
            width: 5,
            height: 5,
          },
          shadowOpacity: 0.8,
          elevation: 5,
        }}>
        <Image
          style={{
            height: 146,
            width: 141,
            borderRadius: 2,
          }}
          source={item.IMAGE}
          resizeMode={'stretch'}
        />
      </View>

      <Text
        style={{marginLeft: 10, fontSize: 14, marginTop: 10, color: '#606060'}}>
        {item.NAME}
      </Text>
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

export default PopularAlbumView;
