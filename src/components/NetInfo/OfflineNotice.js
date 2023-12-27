//import React, {PureComponent, Component} from 'react';
// import {View, Text, Dimensions, StyleSheet} from 'react-native';
// import NetInfo from '@react-native-community/netinfo';
// const {width} = Dimensions.get('window');

// const MiniOfflineSign = () => {
//   return (
//     <View style={styles.offlineContainer}>
//       <Text style={styles.offlineText}>No Internet Connection</Text>
//     </View>
//   );
// };

// class OfflineNotice extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isConnected: true,
//     };

//     NetInfo.fetch().then((isConnected) => {
//       this.setState({isConnected});
//     });
//   }

//   componentDidMount() {
//     NetInfo.addEventListener((state) => {
//       this.handleConnectivityChange(state.isConnected);
//     });
//   }

//   componentWillUnmount() {}

//   handleConnectivityChange = (isConnected) => {
//     this.setState({isConnected});
//   };

//   render() {
//     if (!this.state.isConnected) {
//       return <MiniOfflineSign />;
//     }
//     return null;
//   }
// }

// const styles = StyleSheet.create({
//   offlineContainer: {
//     backgroundColor: '#b52424',
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//     width,
//   },
//   offlineText: {
//     color: '#fff',
//   },
// });

// export {OfflineNotice};

import React, {Component} from 'react';
import {View, Text, Button, Alert, NetInfo, Platform} from 'react-native';

export default class OfflineNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  CheckConnectivity = () => {
    // For Android devices
    if (Platform.OS === 'android') {
      NetInfo.isConnected.fetch().then((isConnected) => {
        if (isConnected) {
          Alert.alert('You are online!');
        } else {
          Alert.alert('You are offline!');
        }
      });
    } else {
      // For iOS devices
      NetInfo.isConnected.addEventListener(
        'connectionChange',
        this.handleFirstConnectivityChange,
      );
    }
  };

  handleFirstConnectivityChange = (isConnected) => {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this.handleFirstConnectivityChange,
    );

    if (isConnected === false) {
      Alert.alert('You are offline!');
    } else {
      Alert.alert('You are online!');
    }
  };
}
