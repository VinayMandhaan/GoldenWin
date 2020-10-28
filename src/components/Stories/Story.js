/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
// import Video from 'react-native-video';
// import Image from 'react-native-scalable-image';
import PropTypes from 'prop-types';
import {useTheme} from '@react-navigation/native'


const ScreenWidth = Dimensions.get('window').width;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
const Story = (props) => {
  const {colors} = useTheme()
  const { story } = props;
  const { url, type } = story || {};

  return (
    <View style={[styles.container, {backgroundColor:colors.containerColor}]}>
      {/* {!props.isLoaded && (
      <View style={styles.loading}>
        <ActivityIndicator color="white" />
      </View>
      )} */}
      {type === 'image' ? (
        <Image
          source={{ uri: url }}
          onLoadEnd={props.onImageLoaded}
          style={{height:width, width:'100%'}}
         
          // width={ScreenWidth}
        />
      )
        : null}
    </View>
  );
};

Story.propTypes = {
  story: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#2F3034',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: { width: '100%',
    height: '100%',
    flex: 1,
  },
  imageContent: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  loading: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default Story;
