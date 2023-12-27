import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  BackHandler,
  FlatList,
  ActivityIndicator,
  StatusBar,
  Platform,
} from 'react-native';
import styles from './styles';
import {MobileListItem, AppHeader, CustomText} from '../../../components';
import {mobiles} from '../../../redux';
import {useDispatch, useSelector} from 'react-redux';
import {HP} from '../../../utils';
import {menu} from '../../../assets';
import theme from '../../../theme';

const Home = ({navigation}: {navigation: any}) => {
  //--------------------
  //redux
  const dispatch = useDispatch();
  const [mobilesList, setmobilesList] = useState([]);

  // //handling Backhandler
  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', handleBackButton);
  //   return BackHandler.removeEventListener();
  // }, [handleBackButton]);

  // const handleBackButton = () => {
  //   if (navigation.isFocused()) {
  //     BackHandler.exitApp();
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const onItemPress = (item: any) => {
    navigation.navigate('DetailScreen', {
      item: item,
    });
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <MobileListItem
        item={item}
        onPress={() => onItemPress(item)}
        title={undefined}
      />
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.primary}
      />
      {Platform.OS === 'android' ? <View style={{height: HP(5)}} /> : null}
      {/* <AppHeader
        left={
          <View style={{padding: 10}}>
            <Image
              source={menu}
              resizeMode={'contain'}
              style={{height: 20, width: 20}}
              // PlaceholderContent={<ActivityIndicator color={'#000'} size={'small'} />}
            />
          </View>
        }
        backgroundColor={theme.colors.primary}
        isCartIcon={false}
        title={
          <CustomText
            title={'Mobiles'}
            textAlign={'center'}
            type={'normal'}
            size={18}
            flex={undefined}
            left={undefined}
            padding={undefined}
            top={undefined}
            children={undefined}
            numberOfLines={undefined}
            onLongPress={undefined}
            onPress={undefined}
            disabled={undefined}
          />
        }
        placement={undefined}
        props={undefined} // onLeftPress={() => navigation.toggleDrawer()}
      /> */}

      <FlatList
        data={mobilesList}
        // data={storeMobiles}
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
    </SafeAreaView>
  );
};

export default Home;
