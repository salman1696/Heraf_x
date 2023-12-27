/** @format */

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  Alert,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { AppHeaderBack, Button } from '../../../../components';
import theme from '../../../../theme';
import { Fonts } from '../../../../utils/Fonts';
import ProgressCircle from 'react-native-progress-circle';
import Slider from '@react-native-community/slider';
import {
  circle_good,
  circle_poor,
  circle_average,
  small_round_tick,
} from '../../../../assets';

import styles from './styles';
import { HP, WP } from '../../../../utils';
import { HEADER_HEIGHT } from '../../../../utils/Constants';
import { CheckoutModal } from '../../../../components/Modal/Modal';
import { WelcomeModal } from '../../../../components/Modal/WelcomeModal';

const Dashboard = ({ navigation }: { navigation: any }) => {
  const [isEnrolled, setEnrolled] = useState(false);

 
  const [days, setDays] = useState([
    { id: 1, day: 'Mon', date: '01', icon: circle_good },
    { id: 2, day: 'Tue', date: '02', icon: circle_good },
    { id: 3, day: 'Wed', date: '03', icon: circle_poor },
    { id: 4, day: 'Thu', date: '04', icon: circle_average },
    { id: 5, day: 'Fri', date: '05', icon: circle_good },
    { id: 6, day: 'Sat', date: '06', icon: circle_average },
    { id: 7, day: 'Sun', date: '07', icon: circle_good },
  ]);
  const [data, setData] = useState([
    {
      id: '1',
      selected: true,
      heading: 'Car Mechanincs',
      desc: 'Basics of car mechanics !',
      time: '07:00 AM',
      duration: `1h 45 min`,
    },
    {
      id: '2',
      selected: false,
      heading: 'Engine Analysis',
      desc: 'How to check engine of cars ?',
      time: '11:00 AM',
      duration: `1h 45 min`,
    },
  ]);

  const onPressItem = () => {
    setEnrolled(true);
  };

  const onLectureItemPress = (key: any) => {
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
            color: theme.colors.primary,
          }}>
          Welcome! Hassan
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginHorizontal: 70,
            fontFamily: Fonts.RobotoRegular,
            fontSize: 16,
            top: 8,
            color: '#353535',
          }}>
          You haven’t enrolled any course yet. Enroll first and get your
          personalized dashboard.
        </Text>
        <Button
          title={'ENROLL NOW'}
          textColor={theme.colors.white}
          backgroundColor={theme.colors.primary}
          style={{ bottom: 10, paddingHorizontal: 50 }}
          onPress={() => onPress()}
          loading={undefined}
        />
      </View>
    );
  };

  const UpLectureCard = () => {
    return (
      <View
        style={{
          margin: 10,
          padding: 14,
          shadowColor: 'gray',
          // shadowOffset: {width: 5, height: 5},
          shadowOpacity: 0.6,
          borderColor: '#353535',
          shadowRadius: 10,
          elevation: 10,
          borderRadius: 5,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            top: 22,
            position: 'absolute',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: theme.colors.secondary,
            width: 18,
            height: 13,
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
              left: 12,
              fontFamily: Fonts.RobotoBold,
              fontSize: 20,
              color: theme.colors.primary,
            }}>
            Upcoming Lectures
          </Text>
          <Icon name={'dots-three-vertical'} type={'entypo'} size={18} tvParallaxProperties={undefined} />
        </View>
        {data.map((item, index) => {
          return (
            <UpLectureItem
              item={item}
              onPress={() => onLectureItemPress(item.id)}
            />
          );
        })}
      </View>
    );
  };

  const UpcommingEvent = () => {
    return (
      <View
        style={{
          margin: 10,
          padding: 14,
          shadowColor: 'gray',
          // shadowOffset: {width: 5, height: 5},
          shadowOpacity: 0.6,
          borderColor: '#353535',
          shadowRadius: 10,
          elevation: 4,
          borderRadius: 5,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            top: 22,
            position: 'absolute',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: theme.colors.secondary,
            width: 18,
            height: 13,
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
              left: 12,
              fontFamily: Fonts.RobotoBold,
              fontSize: 20,
              color: theme.colors.primary,
            }}>
            Upcoming Events
          </Text>
          <Icon name={'dots-three-vertical'} type={'entypo'} size={18} tvParallaxProperties={undefined} />
        </View>
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: '#353535',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#35353520',
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <View style={{ flex: 1, paddingStart: 18, padding: 8 }}>
            <View
              style={{
                height: Platform.OS === 'ios' ? 61.5 : 64,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                width: 5,
                left: Platform.OS === 'ios' ? -0.9 : 0,
                position: 'absolute',
                backgroundColor: theme.colors.secondary,
              }}
            />
            <Text
              style={{
                fontFamily: Fonts.RobotoBold,
                fontSize: 17,
                paddingVertical: 2,
                color: theme.colors.white,
              }}>
              {'Job Seminar'}
            </Text>
            <Text
              style={{
                fontFamily: Fonts.RobotoRegular,
                fontSize: 14,
                paddingVertical: 1,
                color: '#ffffff90',
              }}>
              {'9:00 AM — 10:00 AM'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const CompletedCourses = () => {
    return (
      <View
        style={{
          margin: 10,
          padding: 14,
          shadowColor: 'gray',
          // shadowOffset: {width: 5, height: 5},
          shadowOpacity: 0.6,
          borderColor: '#353535',
          shadowRadius: 10,
          elevation: 4,
          borderRadius: 5,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            top: 22,
            position: 'absolute',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: theme.colors.secondary,
            width: 18,
            height: 13,
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
              left: 12,
              fontFamily: Fonts.RobotoBold,
              fontSize: 20,
              color: theme.colors.primary,
            }}>
            Completed Courses
          </Text>
          <Icon name={'dots-three-vertical'} type={'entypo'} size={18} tvParallaxProperties={undefined} />
        </View>
        <View
          style={{
            marginTop: 8,
            borderRadius: 8,
          }}>
          <View style={{ flex: 1, paddingStart: 7, padding: 5 }}>
            <Text
              style={{
                fontFamily: Fonts.RobotoBold,
                fontSize: 17,
                paddingVertical: 2,
                color: '#353535',
              }}>
              {'Electronic Engineering'}
            </Text>
            <View
              style={{
                paddingTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={small_round_tick}
                  resizeMode={'contain'}
                  style={{
                    width: WP(2),
                    height: HP(1),
                  }}
                />
                <Text
                  style={{
                    left: 4,
                    fontFamily: Fonts.RobotoBold,
                    fontSize: 14,
                    color: '#353535',
                  }}>
                  {'Completed on:'}
                </Text>
                <Text
                  style={{
                    left: 8,
                    fontFamily: Fonts.RobotoRegular,
                    fontSize: 14,
                    color: '#353535',
                  }}>
                  {'Oct 30, 2021'}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  borderRadius: 4,
                  padding: 7,
                  backgroundColor: theme.colors.primary,
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.RobotoBold,
                    fontSize: 9,
                    color: '#fff',
                  }}>
                  {'DOWNLOAD CERTIFICATE'}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 1,
                marginTop: 12,
                width: '100%',
                backgroundColor: '#E9e9e9',
              }}
            />
          </View>
          <View style={{ flex: 1, padding: 5 }}>
            <Text
              style={{
                fontFamily: Fonts.RobotoBold,
                fontSize: 17,
                paddingVertical: 2,
                color: '#353535',
              }}>
              {'Electronic Engineering'}
            </Text>
            <View
              style={{
                paddingTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={small_round_tick}
                  resizeMode={'contain'}
                  style={{
                    width: WP(2),
                    height: HP(1),
                  }}
                />
                <Text
                  style={{
                    left: 4,
                    fontFamily: Fonts.RobotoBold,
                    fontSize: 14,
                    color: '#353535',
                  }}>
                  {'Completed on:'}
                </Text>
                <Text
                  style={{
                    left: 8,
                    fontFamily: Fonts.RobotoRegular,
                    fontSize: 14,
                    color: '#353535',
                  }}>
                  {'Oct 30, 2021'}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  borderRadius: 4,
                  padding: 7,
                  backgroundColor: theme.colors.primary,
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.RobotoBold,
                    fontSize: 9,
                    color: '#fff',
                  }}>
                  {'DOWNLOAD CERTIFICATE'}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 1,
                marginTop: 12,
                width: '100%',
                backgroundColor: '#E9e9e9',
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  const CourseAttendence = () => {
    return (
      <View
        style={{
          margin: 10,
          padding: 14,
          shadowColor: 'gray',
          // shadowOffset: {width: 5, height: 5},
          shadowOpacity: 0.6,
          borderColor: '#353535',
          shadowRadius: 10,
          elevation: 4,
          borderRadius: 5,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            top: 22,
            position: 'absolute',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: theme.colors.secondary,
            width: 18,
            height: 13,
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
              left: 12,
              fontFamily: Fonts.RobotoBold,
              fontSize: 20,
              color: theme.colors.primary,
            }}>
            Course Attendance
          </Text>
          <Text
            style={{
              fontFamily: Fonts.RobotoRegular,
              fontSize: 16,
              color: theme.colors.textColor,
            }}>
            week 1
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
          }}>
          {days.map((item) => {
            return (
              <View
                style={{
                  flex: 0.14,
                  alignItems: 'center',
                }}>
                <Text>{item.day}</Text>
                <View
                  style={{
                    padding: 15,
                    alignItems: 'center',
                    backgroundColor: '#f4f2f2',
                    borderRadius: 4,
                  }}>
                  <Text>{item.date}</Text>

                  <Image
                    source={item.icon}
                    resizeMode={'contain'}
                    style={{
                      top: 5,
                      width: WP(4),
                      height: HP(2),
                    }}
                  />
                </View>
              </View>
            );
          })}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            marginHorizontal: 10,
          }}>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Image
              source={circle_good}
              resizeMode={'contain'}
              style={{
                width: WP(4),
                height: HP(2),
              }}
            />
            <Text
              style={{
                fontSize: 13,
                fontFamily: Fonts.RobotoBold,
                paddingHorizontal: 5,
                textAlign: 'center',
              }}>
              {'Attended'}
            </Text>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Image
              source={circle_average}
              resizeMode={'contain'}
              style={{
                width: WP(4),
                height: HP(2),
              }}
            />
            <Text
              style={{
                fontSize: 13,
                fontFamily: Fonts.RobotoBold,
                paddingHorizontal: 5,
                textAlign: 'center',
              }}>
              {'Holiday'}
            </Text>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Image
              source={circle_poor}
              resizeMode={'contain'}
              style={{
                width: WP(4),
                height: HP(2),
              }}
            />
            <Text
              style={{
                fontSize: 13,
                fontFamily: Fonts.RobotoBold,
                paddingHorizontal: 5,
                textAlign: 'center',
              }}>
              {'Not Attended'}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const CourseStatusCard = () => {
    return (
      <View
        style={{
          margin: 10,
          padding: 14,
          shadowColor: 'gray',
          // shadowOffset: {width: 5, height: 5},
          shadowOpacity: 0.6,
          borderColor: '#353535',
          shadowRadius: 10,
          elevation: 4,
          borderRadius: 5,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            top: 22,
            position: 'absolute',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: theme.colors.secondary,
            width: 18,
            height: 13,
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
              left: 12,
              fontFamily: Fonts.RobotoBold,
              fontSize: 20,
              color: theme.colors.primary,
            }}>
            Course Status
          </Text>
          <Icon name={'dots-three-vertical'} type={'entypo'} size={18} tvParallaxProperties={undefined} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: 5,
            top: 5,
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 0.7,
              left: 10,
              alignItems: 'center',
            }}>
            <ProgressCircle
              percent={70}
              radius={89}
              borderWidth={8}
              color={theme.colors.secondary}
              shadowColor='#96969623'
              bgColor='#fff'>
              <Text
                style={{
                  fontSize: 35,
                  fontFamily: Fonts.RobotoBold,
                  color: theme.colors.secondary,
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
                {'Course Completed'}
              </Text>
            </ProgressCircle>
          </View>
          <View style={{ flex: 0.7 }}>
            <View
              style={{
                marginHorizontal: 40,
                alignItems: 'flex-start',
                bottom: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Icon
                  style={{ top: 3 }}
                  name={'book-open'}
                  type={'feather'}
                  size={20}
                  color={'#868690'} tvParallaxProperties={undefined} />
                <View style={{ alignItems: 'flex-start' }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: Fonts.RobotoBold,
                      paddingHorizontal: 5,
                      textAlign: 'center',
                    }}>
                    {'Instructor'}
                  </Text>
                  <Text
                    style={{
                      bottom: 3,
                      fontSize: 15,
                      fontFamily: Fonts.RobotoRegular,
                      paddingHorizontal: 5,
                      textAlign: 'center',
                    }}>
                    {'Jane Cooper'}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  top: 15,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Icon
                  style={{ top: 3 }}
                  name={'clockcircleo'}
                  type={'antdesign'}
                  size={20}
                  color={'#868690'} tvParallaxProperties={undefined} />
                <View style={{ alignItems: 'flex-start' }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: Fonts.RobotoBold,
                      paddingHorizontal: 5,
                      textAlign: 'center',
                    }}>
                    {'Duration'}
                  </Text>
                  <Text
                    style={{
                      bottom: 3,
                      fontSize: 15,
                      fontFamily: Fonts.RobotoRegular,
                      paddingHorizontal: 5,
                      textAlign: 'center',
                    }}>
                    {'6 Months'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            marginTop: 12,
            left: 12,
            fontFamily: Fonts.RobotoBold,
            fontSize: 14,
            color: theme.colors.textColor,
          }}>
          Course Duration
        </Text>
        <Slider
          value={6}
          style={{ height: 40 }}
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
            marginHorizontal: 10,
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
              color: theme.colors.textColor,
            }}>
            Feb 2022
          </Text>
        </View>
      </View>
    );
  };

  const PerformanceCard = () => {
    return (
      <View
        style={{
          margin: 10,
          padding: 14,
          shadowColor: 'gray',
          // shadowOffset: {width: 5, height: 5},
          shadowOpacity: 0.6,
          borderColor: '#353535',
          shadowRadius: 10,
          elevation: 4,
          borderRadius: 5,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            top: 22,
            position: 'absolute',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: theme.colors.secondary,
            width: 18,
            height: 13,
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
              left: 12,
              fontFamily: Fonts.RobotoBold,
              fontSize: 20,
              color: theme.colors.primary,
            }}>
            Performance Overview
          </Text>
          <Icon name={'dots-three-vertical'} type={'entypo'} size={18} tvParallaxProperties={undefined} />
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
              flex: 0.7,
              left: 10,
              alignItems: 'center',
            }}>
            <ProgressCircle
              percent={70}
              radius={89}
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
                {'60%'}
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
              flex: 0.7,
              alignSelf: 'center',
            }}>
            <View
              style={{
                left: Platform.OS === 'ios' ? 0 : 10,
                marginHorizontal: 15,
                backgroundColor: 'white',
                borderRadius: 5,
                shadowColor: 'gray',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.3,
                shadowRadius: 10,
                elevation: 10,
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
            <View
              style={{
                flexDirection: 'row',
                top: 30,
                justifyContent: 'center',
              }}>
              <View style={{ alignItems: 'center' }}>
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
              <View style={{ alignItems: 'center' }}>
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
              <View style={{ alignItems: 'center' }}>
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
          </View>
        </View>
      </View>
    );
  };

  const UpLectureItem = ({ item, onPress }: { item: any, onPress: any }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          marginTop: 10,
          backgroundColor: item.selected
            ? theme.colors.primary
            : theme.colors.white,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: item.selected ? theme.colors.primary : '#35353520',
          alignSelf: 'center',
          flexDirection: 'row',
          padding: 8,
        }}>
        <View
          style={{
            flex: 0.22,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: Fonts.RobotoBold,
              fontSize: 16,
              paddingHorizontal: 10,
              textAlign: 'center',
              color: !item.selected ? '#353535' : theme.colors.white,
            }}>
            {item.time}
          </Text>
        </View>
        <View
          style={{
            width: 1,
            backgroundColor: !item.selected ? '#35353520' : '#ffffff20',
          }}></View>
        <View style={{ flex: 0.68, paddingStart: 10 }}>
          <Text
            style={{
              fontFamily: Fonts.RobotoBold,
              fontSize: 17,
              paddingVertical: 2,
              color: !item.selected ? '#353535' : theme.colors.white,
            }}>
            {item?.heading}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.RobotoRegular,
              fontSize: 14,
              paddingVertical: 1,
              color: !item.selected ? '#35353590' : '#ffffff90',
            }}>
            {item?.desc}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.RobotoRegular,
              fontSize: 14,
              color: !item.selected ? '#35353590' : '#ffffff90',
            }}>
            {item?.duration}
          </Text>
        </View>
        <View style={{ flex: 0.1 }}>
          <Icon
            name={'car-outline'}
            type={'ionicon'}
            size={25}
            color={!item.selected ? '#353535' : '#ffffff'} tvParallaxProperties={undefined} />
        </View>
      </TouchableOpacity>
    );
  };

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
      <View style={styles.containerMain}>
        <AppHeaderBack
          title={'Dashboard'}
          back={null} navigation={undefined} />
        {!isEnrolled ? (
          <UnErolled onPress={onPressItem} />
        ) : (
          <ScrollView>
            <View style={styles.containerMain}>
              <UpLectureCard />
              <CourseStatusCard />
              <PerformanceCard />
              <Button
                title={'REQUEST FOR LEAVE'}
                textColor={theme.colors.white}
                backgroundColor={theme.colors.primary}
                style={{ bottom: 20, marginHorizontal: 10 }}
                loading={undefined}
              />
              <UpcommingEvent />
              <CourseAttendence />
              <CompletedCourses />
            </View>
          </ScrollView>
        )}

      </View>
     
    </View>

    //
  );
};

export default Dashboard;
