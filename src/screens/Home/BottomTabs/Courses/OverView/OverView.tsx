/** @format */

import Slider, { SliderBase } from '@react-native-community/slider';
import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { course_horizontal_img, tutor_avatar } from '../../../../../assets';
import theme from '../../../../../theme';
import { Fonts } from '../../../../../utils/Fonts';
import { LearningExpandableCard } from '../../../../../components/Item/LearningExpandableCard';
import { HP, WP } from '../../../../../utils';
import styles from './styles';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import ProgressCircle from 'react-native-progress-circle';
import { Table, Row, Rows } from 'react-native-table-component';
import DeviceInfo from 'react-native-device-info';
const OverView = ({ navigation }: { navigation: any }) => {
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
  const [tableData, setTableData] = useState({
    tableHead: ['No.', 'Title', 'Marks obtained', 'Total marks', 'Grade'],
    tableData: [
      ['1', 'Assignment no #1', '20', '20', 'EXCELLENT'],
      ['2', 'Quiz no #1', '20', '25', 'GOOD'],
      ['3', 'Practical no #1', '7', '10', 'AVERAGE'],
      ['4', 'Assignment no #2', '10', '15', 'GOOD'],
    ],
  });
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [userOrder, setUserOrder] = React.useState('');

  const onPressToggle = (id: string) => {
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

  const CourseDurationCard = () => {
    return (
      <View
        style={{
          padding: 14,
          shadowColor: '#000',
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.9,
          borderColor: '#353535',
          shadowRadius: 10,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: Fonts.RobotoBold,
              fontSize: 20,
              color: theme.colors.primary,
            }}>
            Course Duration
          </Text>
        </View>

        <Text
          style={{
            marginTop: 5,
            left: 12,
            fontFamily: Fonts.RobotoBold,
            fontSize: 15,
            color: '#868686',
          }}>
          Course Completion
        </Text>
        <Slider
          value={7}
          style={{ height: 30, paddingHorizontal: -30 }}
          disabled={true}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor={theme.colors.secondary}
          maximumTrackTintColor={theme.colors.secondary}
          thumbTintColor={theme.colors.primary}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              fontFamily: Fonts.RobotoBold,
              fontSize: 12,
              color: theme.colors.textColor,
            }}>
            Nov 2021
          </Text>
          <Text
            style={{
              fontFamily: Fonts.RobotoBold,
              fontSize: 12,
              bottom: 8,
              color: theme.colors.secondary,
            }}>
            70% completed
          </Text>
          <Text
            style={{
              fontFamily: Fonts.RobotoBold,
              fontSize: 12,
              color: theme.colors.textColor,
            }}>
            Feb 2022
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 1,
            marginTop: 20,
            backgroundColor: '#EBEBEB',
          }}
        />
      </View>
    );
  };

  const TopicsCovered = () => {
    return (
      <View
        style={{
          padding: 14,
          shadowColor: '#fff',
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.4,
          borderColor: '#353535',
          shadowRadius: 10,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: Fonts.RobotoBold,
              fontSize: 20,
              color: theme.colors.primary,
            }}>
            Topics to be covered
          </Text>
        </View>

        <View
          style={{
            width: SCREEN_WIDTH - 20,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          {data.map((item) => (
            <LearningExpandableCard
              item={item}
              onPress={() => onPressToggle(item.id)}
              color={theme.colors.secondary}
            />
          ))}
        </View>

        <View
          style={{
            width: '100%',
            height: 1,
            marginTop: 20,
            backgroundColor: '#EBEBEB',
          }}
        />
      </View>
    );
  };

  const TableView = () => {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: Fonts.RobotoBold,
              fontSize: 20,
              marginVertical: 5,
              color: theme.colors.primary,
            }}>
            Marksheet
          </Text>
        </View>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#E2E2E2' }}>
          <Row
            data={tableData.tableHead}
            style={styles.head}
            textStyle={styles.text}
            flexArr={[0.5, 2, 1, 1, 1.5]}
          />
          <Rows
            data={tableData.tableData}
            textStyle={{
              color: '#35353595',
              textAlign: 'center',
              fontSize: 10,
              fontFamily: Fonts.RobotoBold,
            }}
            flexArr={[0.5, 2, 1, 1, 1.5]}
          />
        </Table>
      </View>
    );
  };
  const Tutor = () => {
    return (
      <View
        style={{
          padding: 14,
          marginBottom: 20,
          marginHorizontal: 14,
          elevation: 4,
          borderRadius: 8,
          shadowColor: 'gray',
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.5,
          borderColor: '#353535',
          shadowRadius: 10,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: Fonts.RobotoBold,
              fontSize: 20,
              color: theme.colors.primary,
              marginBottom: 5,
            }}>
            Tutor
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{ flex: 3 }}>
            <Text
              style={{
                fontFamily: Fonts.RobotoBold,
                fontSize: 16,
                marginBottom: 5,
                color: theme.colors.secondary,
              }}>
              {'Talib Shaker'}
            </Text>
            <Text
              style={{
                fontFamily: Fonts.RobotoBold,
                fontSize: 13,
                color: theme.colors.textColor,
              }}>
              {'Bio'}
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
          <Image
            source={tutor_avatar}
            resizeMode={'contain'}
            style={{
              flex: 1,
              height: HP(11),
              width: WP(11),
              marginHorizontal: 5,
              left: 5,
              bottom: 30,
            }}
          />
        </View>
      </View>
    );
  };

  const PerformanceCard = () => {
    return (
      <View
        style={{
          paddingHorizontal: 14,
          shadowColor: '#000',
          shadowOffset: { width: 5, height: 5 },
          marginBottom: 10,
          borderRadius: 5,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            width: '100%',
            height: 1,
            marginBottom: 10,
            backgroundColor: '#EBEBEB',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: Fonts.RobotoBold,
              fontSize: 20,
              color: theme.colors.primary,
            }}>
            Overall Performance
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 5,
            top: 5,
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 0.5,
              left: 10,
              alignItems: 'center',
            }}>
            <ProgressCircle
              percent={70}
              radius={79}
              borderWidth={8}
              color={theme.colors.primary}
              shadowColor='#96969623'
              bgColor='#fff'>
              <Text
                style={{
                  fontSize: 35,
                  fontFamily: Fonts.RobotoBold,
                  color: theme.colors.primary,
                }}>
                {'70%'}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: Fonts.RobotoBold,
                  paddingHorizontal: 25,
                  textAlign: 'center',
                }}>
                {'Overall Course Performance'}
              </Text>
            </ProgressCircle>
          </View>
          <View
            style={{
              flex: 0.6,
              alignSelf: 'center',
            }}>
            <View
              style={{
                marginHorizontal: 20,
                backgroundColor: 'white',
                borderRadius: 5,
                shadowColor: 'gray',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.5,
                shadowRadius: 10,
                elevation: 5,
                padding: 10,
                alignItems: 'flex-start',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 3,
                }}>
                <View
                  style={{
                    borderRadius: 32,
                    width: 8,
                    height: 8,
                    backgroundColor: theme.colors.secondary,
                  }}
                />
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: Fonts.RobotoRegular,
                    paddingHorizontal: 5,
                    textAlign: 'center',
                  }}>
                  {'Assignments'}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: Fonts.RobotoRegular,
                    paddingHorizontal: 5,
                    textAlign: 'center',
                  }}>
                  {'7/10'}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 3,
                }}>
                <View
                  style={{
                    borderRadius: 32,
                    width: 8,
                    height: 8,
                    backgroundColor: theme.colors.secondary,
                  }}
                />
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: Fonts.RobotoRegular,
                    paddingHorizontal: 5,
                    textAlign: 'center',
                  }}>
                  {'Quizes'}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: Fonts.RobotoRegular,
                    paddingHorizontal: 5,
                    textAlign: 'center',
                  }}>
                  {'8/10'}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 3,
                }}>
                <View
                  style={{
                    borderRadius: 32,
                    width: 8,
                    height: 8,
                    backgroundColor: theme.colors.secondary,
                  }}
                />
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: Fonts.RobotoRegular,
                    paddingHorizontal: 5,
                    textAlign: 'center',
                  }}>
                  {'Practicals'}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: Fonts.RobotoRegular,
                    paddingHorizontal: 5,
                    textAlign: 'center',
                  }}>
                  {'6/10'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 40,
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <View
              style={{
                width: 14,
                height: 14,
                backgroundColor: theme.colors.primary,
              }}
            />
            <Text
              style={{
                fontSize: 13,
                fontFamily: Fonts.RobotoRegular,
                paddingHorizontal: 5,
                textAlign: 'center',
              }}>
              {'Good'}
            </Text>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <View
              style={{
                width: 14,
                height: 14,
                backgroundColor: theme.colors.secondary,
              }}
            />
            <Text
              style={{
                fontSize: 13,
                fontFamily: Fonts.RobotoRegular,
                paddingHorizontal: 5,
                textAlign: 'center',
              }}>
              {'Average'}
            </Text>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <View
              style={{
                width: 14,
                height: 14,
                backgroundColor: theme.colors.redColor,
              }}
            />
            <Text
              style={{
                fontSize: 13,
                fontFamily: Fonts.RobotoRegular,
                paddingHorizontal: 5,
                textAlign: 'center',
              }}>
              {'Poor'}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 1,
            marginTop: 10,
            backgroundColor: '#EBEBEB',
          }}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: DeviceInfo.hasNotch() ? 0.86 : 0.82 }}>
      <ScrollView
        style={{
          backgroundColor: 'white',
        }}>
        <CourseDurationCard />
        <TopicsCovered />
        <Tutor />
        <PerformanceCard />
        <TableView />
      </ScrollView>
    </View>
  );
};

export default OverView;
