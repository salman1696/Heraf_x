/** @format */

import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Text,
  FlatList,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import styles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { HP, WP } from '../../../../../utils';
import {
  AllCourseItem,
  AppHeaderBack,
  CustomText,
  Button,
} from '../../../../../components';
import {
  avatar,
  courseicon,
  course_horizontal_img,
} from '../../../../../assets';
import theme from '../../../../../theme';
import { Fonts } from '../../../../../utils/Fonts';
import { PopularCourseItem } from '../../../../../components/Item/PopularCourseItem';
import { Image } from 'react-native-elements/dist/image/Image';
import { Icon } from 'react-native-elements';
import { LearningExpandableCard } from '../../../../../components/Item/LearningExpandableCard';
import { HEADER_HEIGHT } from '../../../../../utils/Constants';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const CourseDetail = ({ navigation, route }) => {
  const [item, setItem] = useState('');
  const [data, setData] = useState([
    {
      id: '1',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: `Amet minim mollit non deserunt ullamco est sit `,
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
    {
      id: '2',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Amet minim mollit non deserunt ullamco est sit ',
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
    {
      id: '3',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Amet minim mollit non deserunt ullamco est sit ',
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
    {
      id: '4',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Amet minim mollit non deserunt ullamco est sit ',
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
    {
      id: '5',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Amet minim mollit non deserunt ullamco est sit ',
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
  ]);

  const onPressToggle = (id) => {
    // alert('tes');
    setData(
      data.map((elem) => {
        // elem.selected = false;
        if (elem.id === id) {
          if (elem.selected !== true) {
            return {
              ...elem,
              selected: !elem.selected,
            };
          }
          if (elem.selected === true) {
            return {
              ...elem,
              selected: false,
            };
          }
        }
        return elem;
      }),
    );
  };

  return (
    <View style={styles.main}>
      <View
        style={{
          backgroundColor: theme.colors.primary,
          height: HEADER_HEIGHT,
        }}>
        <StatusBar
          translucent
          backgroundColor='#000'
          barStyle='light-content'
        />
      </View>
      {Platform.OS === 'android' ? <View style={{ height: HP(3) }} /> : null}
      <AppHeaderBack
        title={'Course Details'}
        back={'yes'}
        navigation={navigation}
      />
      <ScrollView style={{}}>
        <View style={styles.containerMain}>
          <ImageBackground
            style={styles.bgImg}
            source={course_horizontal_img}
            resizeMode={'cover'}>
            <Text style={styles.imgTxt}>{'Car Diagnostic'}</Text>
          </ImageBackground>
          <View style={{ alignSelf: 'flex-start' }}>
            <Text style={styles.descTxt}>{'Course Description :'}</Text>
            <Text style={styles.descDetailTxt}>
              {
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
              }
            </Text>

            <Text style={styles.descTxt}>{'You will learn :'}</Text>
            <View style={{ width: SCREEN_WIDTH - 20, alignSelf: 'center' }}>
              {data.map((item) => (
                <LearningExpandableCard
                  item={item}
                  onPress={() => onPressToggle(item.id)}
                  color={theme.colors.primary}
                />
              ))}
            </View>
            <Text style={styles.descTxt}>{'Class Schedule :'}</Text>
            <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center' }}>
              {data.map((item) => (
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>monday</Text>
                    <Text>9:00 am - 11:00 am</Text>
                  </View>
                  {!item.id === 5 && (
                    <View
                      style={{
                        alignSelf: 'center',
                        width: '101%',
                        height: 1,
                        backgroundColor: '#86868690',
                      }}
                    />
                  )}
                </View>
              ))}
            </View>
            <Text style={styles.descTxt}>{'Your Instructor :'}</Text>

            <View
              style={{
                paddingHorizontal: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={avatar}
                resizeMode={'contain'}
                style={{
                  flex: 1,
                  height: HP(11),
                  width: WP(19),
                  marginHorizontal: 5,
                  left: 5,
                }}
              />

              <View style={{ flex: 3, left: 10 }}>
                <Text
                  style={{
                    fontFamily: Fonts.RobotoBold,
                    fontSize: 16,
                    color: theme.colors.primary,
                  }}>
                  {'Ibrahim Yousef'}
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.RobotoRegular,
                    fontSize: 14,
                    color: theme.colors.subTextColor,
                  }}>
                  {
                    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
                  }
                </Text>
              </View>
            </View>
            <Text style={styles.descTxt}>{'Course Fee :'}</Text>
            <View
              style={{
                width: SCREEN_WIDTH - 40,
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textDecorationLine: 'line-through',

                  fontFamily: Fonts.RobotoBold,
                  color: '#59595950',
                }}>
                {'SR 245'}
              </Text>
              <Text
                style={{
                  backgroundColor: theme.colors.secondary,
                  marginLeft: 20,
                  padding: 3,
                  borderRadius: 5,
                  fontFamily: Fonts.RobotoBold,
                  color: '#fff',
                }}>
                {'SR 235'}
              </Text>
            </View>
            <Button
              title={'ENROLL NOW'}
              textColor={theme.colors.white}
              backgroundColor={theme.colors.primary}
              style={{ marginHorizontal: 12, marginBottom: 10 }}
              loading={undefined}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CourseDetail;
