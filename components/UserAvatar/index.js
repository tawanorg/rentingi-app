import * as React from 'react';
import PropTypes from 'prop-types';
import { Image, View, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
 
function UserAvatar({ hightlight, id, onPress, photoUrl, size }) {
  return (
    <TouchableOpacity 
      style={{
        borderWidth: hightlight ? 2 : 1,
        borderColor: hightlight ? Colors.highlight : Colors.borderColor,
        width: (size + 5),
        height: (size + 5),
        borderRadius: (size + 5) / 2,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <View
        id={id}
        onPress={onPress}
        style={{
          backgroundColor: '#FFFFFF',
          width: (size + 1),
          height: (size + 1),
          borderRadius: (size + 1) / 2,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image
          source={{ uri: photoUrl }}
          style={{
            width: (size - 2),
            height: (size - 2),
            borderRadius: (size - 2) / 2
          }}
          resizeMode="cover" />
      </View>
    </TouchableOpacity>
  );
};

UserAvatar.propTypes = {
  size: PropTypes.string,
}

UserAvatar.defaultProps = {
  size: 45,
}

export default UserAvatar;