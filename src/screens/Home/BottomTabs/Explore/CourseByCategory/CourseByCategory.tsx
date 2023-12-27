/** @format */

import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Text,
  FlatList,
} from 'react-native';
import styles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { HP } from '../../../../../utils';
import {
  AllCourseItem,
  AppHeaderBack,
  CustomText,
} from '../../../../../components';
import { courseicon, course_horizontal_img } from '../../../../../assets';
import theme from '../../../../../theme';
import { Fonts } from '../../../../../utils/Fonts';
import { PopularCourseItem } from '../../../../../components/Item/PopularCourseItem';
import { HEADER_HEIGHT } from '../../../../../utils/Constants';

const CourseByCategory = ({ navigation }: { navigation: any }) => {
  const [item, setItem] = useState('');
  const [data, setData] = useState([
    {
      id: '1',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: `Auto Tuning`,
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
    {
      id: '2',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Car Diagnostic',
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
    {
      id: '3',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Car Diagnostic',
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
    {
      id: '4',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Car Diagnostic 4',
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
    {
      id: '5',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Car Diagnostic 5',
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
    {
      id: '6',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Car Diagnostic',
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
    {
      id: '7',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Car Diagnostic',
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
    {
      id: '8',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Car Diagnostic',
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
    {
      id: '9',
      selected: false,
      icon: course_horizontal_img,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Car Diagnostic 9',
      price: 'SR 234',
      oldPrice: 'SR 450',
    },
  ]);

  const renderItem = ({ item }: { item: any }) => (
    <PopularCourseItem
      item={item}
      onPress={() => navigation.navigate('CourseDetail')}
    />
  );
  const renderItemAllCourse = ({ item }: { item: any }) => (
    <AllCourseItem item={item} lastItem={9} onPress={undefined} />
  );

  return (
    <View style={styles.container}>
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
      {/* {Platform.OS === 'android' ? <View style={{ height: HP(3) }} /> : null} */}
      <AppHeaderBack
        title={'Mechanical Engineering Cousrses'}
        navigation={navigation} back={undefined} />
      <View style={styles.containerMain}>
        <View style={{ backgroundColor: 'white' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 4,
            }}>
            <CustomText
              title={'Popular Courses'}
              color={theme.colors.secondary}
              type={Fonts.RobotoBold}
              size={16}
              paddingHorizontal={10}
              marginTop={6} flex={undefined} left={undefined} marginVertical={undefined} padding={undefined} top={undefined} children={undefined} numberOfLines={undefined} onLongPress={undefined} onPress={undefined} disabled={undefined} />
            <CustomText
              title={'(5)'}
              color={theme.colors.secondary}
              type={Fonts.RobotoBold}
              size={16}
              paddingHorizontal={10}
              marginTop={6} flex={undefined} left={undefined} marginVertical={undefined} padding={undefined} top={undefined} children={undefined} numberOfLines={undefined} onLongPress={undefined} onPress={undefined} disabled={undefined} />
          </View>

          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: data?.length === 1 ? 'flex-start' : 'center',
            }}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <CustomText
              title={'All Courses'}
              color={theme.colors.secondary}
              type={Fonts.RobotoBold}
              size={16}
              paddingHorizontal={10}
              marginVertical={6} children={undefined} flex={undefined} left={undefined} marginTop={undefined} padding={undefined} top={undefined} numberOfLines={undefined} onLongPress={undefined} onPress={undefined} disabled={undefined} />
            <CustomText
              title={'(9)'}
              color={theme.colors.secondary}
              type={Fonts.RobotoBold}
              size={16}
              paddingHorizontal={10}
              marginVertical={6} children={undefined} left={undefined} padding={undefined} flex={undefined} top={undefined} numberOfLines={undefined} onLongPress={undefined} onPress={undefined} marginTop={undefined} disabled={undefined} />
          </View>

          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: 'center',
            }}
            renderItem={renderItemAllCourse}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default CourseByCategory;
