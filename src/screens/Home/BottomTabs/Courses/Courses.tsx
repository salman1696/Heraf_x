/** @format */

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  ScrollView,
  ImageBackground,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { course_horizontal_img } from '../../../../assets';
import { AppHeaderBack, Button } from '../../../../components';
import theme from '../../../../theme';
import { Fonts } from '../../../../utils/Fonts';

import { TabBar } from './index';
import styles from './styles';
import OverView from './OverView';
import { HP, WP } from '../../../../utils';
import Lectures from './Lectures';
import Meterial from './Meterial';
import LeaveReq from './LeaveReq';
import Attendence from './Attendence';
import CompletedCourse from './CompletedCourse';
import { HEADER_HEIGHT } from '../../../../utils/Constants';
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { WelcomeModal } from '../../../../components/Modal/WelcomeModal';

const Tab = createMaterialTopTabNavigator();

const Courses = ({ navigation }: { navigation: any }) => {
  const [isEnrolled, setEnrolled] = useState(false);
  const [selected, setSelected] = useState('');
  const [addressSheet, setAddressSheet] = useState(false);
  //modal
  const [isModalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const onPressItem = () => {
    setEnrolled(true);
  };

  const UnErolled = ({ onPress }: { onPress: any }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 10,
        }}>
        <Text
          style={{
            fontFamily: Fonts.RobotoBold,
            fontSize: 25,
            color: '#353535',
          }}>
          No Access !
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginHorizontal: 20,
            fontFamily: Fonts.RobotoRegular,
            fontSize: 16,
            top: 8,
            color: '#353535',
          }}>
          Please enroll to a course to have access to your personalized
          dashboard
        </Text>

        <Button
          title={'ENROLL NOW'}
          textColor={theme.colors.white}
          backgroundColor={theme.colors.primary}
          style={{ marginHorizontal: 12, bottom: 10 }}
          onPress={onPress}
          loading={undefined}
        />
      </View>
    );
  };

  const { width } = useWindowDimensions();

  const renderAddressSheet = () => {
    return (
      <BottomSheet
        ref={_bottomview}
        backdropComponent={BottomSheetBackdrop}
        contentContainerStyle={{
          shadowColor: '#000',
          backgroundColor: 'white',
          shadowOffset: {
            width: 0,
            height: 11,
          },
          shadowOpacity: 0.55,
          shadowRadius: 14.78,

          elevation: 22,
        }}
        containerHeight={height}
        initialSnapIndex={0}
        snapPoints={[height - ITEM_HEIGHT, height - ITEM_HEIGHT]}>
        <BottomSheetScrollView
          contentContainerStyle={{
            padding: 20,
            // backgroundColor: 'blue',
          }}
          style={{
            // backgroundColor: 'red',
            shadowColor: '#000',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <Text
            style={{
              fontWeight: '800',
              fontSize: 18,
              textAlign: 'center',
              textTransform: 'uppercase',
            }}>
            {'select_location'}
          </Text>
        </BottomSheetScrollView>
      </BottomSheet>
    );
  };

  return (
    <>
      <View style={styles.container}>
        {Platform.OS === 'ios' ? <View
          style={{
            backgroundColor: theme.colors.primary,
            height: HEADER_HEIGHT,
          }}>
          <StatusBar
            translucent
            backgroundColor='#000'
            barStyle='light-content'
          />
        </View> :
          <StatusBar
            translucent
            backgroundColor={theme.colors.primary}
            barStyle='light-content'
          />}
        {Platform.OS === 'android' && <View style={styles.androidMargin}></View>}
        <View style={styles.containerMain}>
          <AppHeaderBack
            title={'My Cousrses'}
            back={null}
            navigation={navigation} />

          {!isEnrolled ? (
            <UnErolled onPress={onPressItem} />
          ) : (
            <View style={styles.containerMain}>
              <ImageBackground
                style={styles.bgImg}
                source={course_horizontal_img}
                resizeMode={'cover'}>
                <Text style={styles.imgTxt}>{'Car Diagnostic'}</Text>
              </ImageBackground>
              <Tab.Navigator
                tabBar={(props) => <TabBar {...props} />}
                initialRouteName={'Overview'}>
               
                <Tab.Screen
                  name={'Overview'}
                  component={OverView}
                  options={{
                    tabBarLabel: 'Overview',
                  }}
                />
                <Tab.Screen
                  name={'Lectures'}
                  component={Lectures}
                  options={{
                    tabBarLabel: 'Lectures',
                  }}
                />
                <Tab.Screen
                  name={'Material'}
                  component={Meterial}
                  options={{
                    tabBarLabel: 'Material',
                  }}
                />
                <Tab.Screen
                  name={'Leave Request'}
                  component={LeaveReq}
                  options={{
                    tabBarLabel: 'Leave Request',
                  }}
                />
                <Tab.Screen
                  name={'Attendance'}
                  component={Attendence}
                  options={{
                    tabBarLabel: 'Attendance',
                  }}
                />
                <Tab.Screen
                  name={'Completed Courses'}
                  component={CompletedCourse}
                  options={{
                    tabBarLabel: 'Completed Courses',
                  }}
                />
              </Tab.Navigator>
            </View>
          )}

        </View>

        {addressSheet ? renderAddressSheet() : null}

      </View>
      <View
        style={{

     
          alignItems: 'center',
          justifyContent: 'center'
        }}>

        <WelcomeModal
          toggleModal={toggleModal}
          modalVisible={isModalVisible}
          headingText={'Welcome to Heraf'}
          subHeadingText={'You can now access your Dashboard.'}
          text={
            'Check out our awesome features to which helps you get placed in your dream company!'
          }
          onChangeLanguage={undefined}
          onDone={toggleModal}
        />
      </View>
    </>
  );
};

export default Courses;
