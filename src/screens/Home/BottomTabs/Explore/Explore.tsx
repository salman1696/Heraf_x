/** @format */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  StatusBar,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import { courseicon, homeicon, nextfill, nextunfill } from '../../../../assets';
import {
  AppHeader,
  AppHeaderBack,
  CourseItem,
  CustomText,
} from '../../../../components';
import theme from '../../../../theme';
import { HP, WP } from '../../../../utils';
import { HEADER_HEIGHT } from '../../../../utils/Constants';
import { Fonts } from '../../../../utils/Fonts';

import styles from './styles';

const Explore = ({ navigation }: { navigation: any }) => {
  const [searchText, setSearchText] = useState('');

  const [data, setData] = useState([
    {
      id: '1',
      selected: false,
      icon: courseicon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: `Civil \nTechnologies`,
    },
    {
      id: '2',
      selected: true,
      icon: courseicon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Mechanical \nEngineering',
    },
    {
      id: '3',
      selected: false,
      icon: courseicon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Civil \nTechnologies',
    },
    {
      id: '4',
      selected: false,
      icon: courseicon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Civil \nTechnologies',
    },
    {
      id: '5',
      selected: false,
      icon: courseicon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Mechanical \nEngineering',
    },
    {
      id: '6',
      selected: false,
      icon: courseicon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Civil \nTechnologies',
    },
    {
      id: '7',
      selected: false,
      icon: courseicon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Civil \nTechnologies',
    },
    {
      id: '8',
      selected: false,
      icon: courseicon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Civil \nTechnologies',
    },
    {
      id: '9',
      selected: false,
      icon: courseicon,
      desc: 'Amet minim mollit non \ndeserunt ullamco est sit.',
      courses: '30 course',
      title: 'Civil \nTechnologies',
    },
  ]);

  const onToggle = (key: any) => {
    setData(
      data.map((elem) => {
        elem.selected = false;
        if (elem.id === key) {
          return {
            ...elem,
            selected: !elem.selected,
          };
        }
        return elem;
      }),
    );
  };

  const renderItem = ({ item }: { item: any }) => {
    return (
      <CourseItem
        item={item}
        onPress={() => onToggle(item.id)}
        onPressArrow={() => navigation.navigate('CourseByCategory')}
        lastItem={data.length}
      />
    );
  };

  useEffect(() => { }, []);

  return (
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
      <AppHeaderBack
        title={'Explore Courses by Category'}
        back={null} navigation={undefined} />
      <View style={styles.containerMain}>
        <View style={{ top: 5 }}>
          {/* <CustomText
            title={''}
            color={theme.colors.textColor}
            type={Fonts.RobotoBold}
            size={20}
            paddingHorizontal={10}
            marginVertical={15}
          /> */}

          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: 'center',
              paddingBottom: 10,
              alignItems: data?.length === 1 ? 'flex-start' : 'center',
            }}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>

    //
  );
};

export default Explore;
