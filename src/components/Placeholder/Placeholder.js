import React, {Component} from 'react';
import {StyleSheet, FlatList, Dimensions, View} from 'react-native';
import {Card} from 'react-native-elements';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Placeholder extends Component {
  renderItem = () => {
    return (
      <Card containerStyle={styles.cardStyle}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <ShimmerPlaceHolder
            width={80}
            height={80}
            style={styles.imageStyle}
            autoRun
            backgroundColorBehindBorder={'white'}
          />
          <View style={styles.linesContainer}>
            <Line
              style={{
                marginTop: 20,
                marginBottom: 7,
                marginLeft: 10,
                width: SCREEN_WIDTH / 3,
              }}
            />
            <Line
              style={{
                marginTop: 20,
                marginBottom: 7,
                marginLeft: 10,
                width: SCREEN_WIDTH / 4,
              }}
            />
          </View>
          <ShimmerPlaceHolder
            width={25}
            height={25}
            style={styles.iconStyle}
            autoRun
            backgroundColorBehindBorder={'white'}
          />
        </View>
      </Card>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={new Array(10)}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{alignItems: 'center'}}
        />
      </View>
    );
  }
}

const Line = ({style}) => {
  const {width, marginTop} = style;
  return (
    <ShimmerPlaceHolder
      width={width}
      height={5}
      style={{
        marginTop,
        marginBottom: 7,
        marginLeft: 10,
        borderRadius: 100,
      }}
      autoRun
      backgroundColorBehindBorder={'white'}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
    paddingBottom: 0,
    backgroundColor: 'white',
  },
  cardStyle: {
    width: SCREEN_WIDTH / 1.06,
    margin: 10,
    paddingTop: 0,
    padding: 10,
    elevation: 3,
    shadowOpacity: 3,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  linesContainer: {
    flex: 0.75,
    marginLeft: 10,
    justifyContent: 'center',
  },
  iconStyle: {
    flex: 0.25,
    width: 25,
    height: 25,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'center',
  },
});

export {Placeholder};
