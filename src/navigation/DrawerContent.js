import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  BackHandler,
  Switch,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { ListItem, Avatar, Divider, Icon, colors } from 'react-native-elements';
import theme from '../theme';
import { CustomText } from '../components';
import {
  heightPercentageToDP as HP,
  widthPercentageToDP as WP,
} from 'react-native-responsive-screen';
import { logout, changeAppType } from '../redux';
import { useDispatch, useSelector } from 'react-redux';

const DrawerContent = props => {
  //redux
  const dispatch = useDispatch();
  const { uid, token, user, isLoading, fcm } = useSelector(state => state.auth);

  //logout user
  const onLogout = () => {
    let data = new FormData();
    data.append('user_id', uid);
    data.append('token', token);
    data.append('fcm_token', fcm);
    console.log(data);
    const cbSuccess = data => {
      console.log('[login success]', data);
      // props.navigation.navigate('Auth', {
      //   screen: 'Login',
      // });
      props.navigation.navigate('Login');
      //  props.navigation.navigate('GetStarted');
    };
    const cbFailure = err => {
      console.log('[login fail]', err);
      //  alert('SERVER_ERROR');
    };
    dispatch(logout(data, cbSuccess, cbFailure));
  };

  const onPress = item => {
    switch (item) {
      case 'Home':
        props.navigation.navigate('Home');
        break;
      case 'My Profile':
        props.navigation.navigate('Profile');
        break;
      case 'My Orders':
        props.navigation.navigate('MyOrders');
        break;
      case 'My Address':
        props.navigation.navigate('AddressScreen');
        break;
      case 'Setting':
        props.navigation.navigate('Setting');
        break;
      case 'Logout':
        Alert.alert(
          '',
          'Etes-vous sur',
          [
            {
              text: 'non',
              onPress: () => { },
              style: 'cancel',
            },
            {
              text: 'Oui',

              onPress: () => {
                onLogout();
              },
            },
          ],
          { cancelable: false },
        );

        break;
      default:
        return;
    }
  };

  return (
    <View style={styles.main}>
      <ImageBackground style={styles.drawerBg}>
        <SafeAreaView style={{ width: WP('60'), top: HP('5') }}>
          <ListItem
            containerStyle={styles.containerStyle}
            leftAvatar={<Avatar rounded />}
            title={'userProfile'}
            titleStyle={{ color: theme.colors.white, fontSize: 14 }}
            rightIcon={
              <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                <Image style={{ tintColor: theme.colors.white }} />
              </TouchableOpacity>
            }
          />
          <View style={styles.body}>
            <Item
              icon={
                <Icon
                  name={'home'}
                  type={'ant-design'}
                  size={18}
                  color={theme.colors.white}
                />
              }
              title={'home'}
              onPress={() => onPress('Home')}
            />
            <Item
              icon={
                <Icon
                  name={'food-fork-drink'}
                  type={'material-community'}
                  size={18}
                  color={theme.colors.white}
                />
              }
              title={'my_Order'}
              onPress={() => onPress('My Orders')}
            />
            <Item
              title={'my_Profile'}
              icon={
                <Icon
                  name={'user'}
                  type={'ant-design'}
                  size={18}
                  color={theme.colors.white}
                />
              }
              onPress={() => onPress('My Profile')}
            />

            <Item
              icon={
                <Icon
                  name={'location-pin'}
                  type={'entypo'}
                  size={18}
                  color={theme.colors.white}
                />
              }
              title={'my_Addresses'}
              onPress={() => onPress('My Address')}
            />
            {/* <Item
              icon={
                <Icon
                  name={'food-fork-drink'}
                  type={'material-community'}
                  size={18}
                  color={theme.colors.white}
                />
              }
              title={'My payment methods'}
              onPress={() => onPress('My Orders')}
            /> */}

            <Item
              title={'setting'}
              icon={
                <Icon
                  name={'setting'}
                  type={'ant-design'}
                  size={16}
                  color={theme.colors.white}
                />
              }
              onPress={() => onPress('Setting')}
            />

            <Item
              title={'sign_out'}
              icon={
                <Icon
                  name={'logout'}
                  type={'ant-design'}
                  size={16}
                  color={theme.colors.white}
                />
              }
              onPress={() => onPress('Logout')}
              isLoading={isLoading}
            />
          </View>
          {/* <Switch
            trackColor={{false: '#f4f3f4', true: '#f4f3f4'}}
            thumbColor={isEnabled ? '#000' : '#fff'}
            ios_backgroundColor="#3e3e3e"
            style={{
              alignSelf: 'center',
              marginTop: 55,
              paddingVertical: 15,
            }}
            onValueChange={toggleSwitch}
            value={isEnabled}
          /> */}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const Item = ({ title, icon, onPress, isLoading }) => (
  <View>
    <ListItem
      title={title}
      titleStyle={{ color: theme.colors.white, fontSize: 14 }}
      activeOpacity={0.2}
      underlayColor={'transparent'}
      leftIcon={icon}
      onPress={onPress}
      rightElement={
        isLoading && <ActivityIndicator color={'white'} animating />
      }
      containerStyle={{ backgroundColor: 'transparent', padding: 20 }}
    />
    <Divider />
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  drawerBg: {
    width: '85%',
    height: '100%',
    tintColor: '#707070',
  },
  containerStyle: {
    backgroundColor: 'transparent',
  },
  body: {
    top: 20,
    marginHorizontal: 30,
  },
});

export default DrawerContent;
