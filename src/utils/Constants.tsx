import React, { Component } from 'react';
import { Permission, PermissionsAndroid, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
const Data = [
  {
    id: 0,
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 1,
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 2,
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 3,
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    lastseen: '4 days ago',
    selected: false,
  },

  {
    id: 4,
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 5,
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 6,
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 7,
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 8,
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 9,
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 10,
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    lastseen: '4 days ago',
    selected: false,
  },
  {
    id: 11,
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    lastseen: '4 days ago',
    selected: false,
  },
];

const askPermission = async (
  permission: string | Permission[],
  isMultiple = false,
) => {
  try {
    let granted;
    if (isMultiple && typeof permission !== 'string') {
      granted = await PermissionsAndroid.requestMultiple(permission);
    } else {

      granted = await PermissionsAndroid.request(permission as Permission, {
        title: 'location_alert_title',
        message: 'location_alert_message',
        buttonPositive: 'Ok',
      });

    }
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
};
export const HEADER_HEIGHT = Platform.OS === 'ios' ? DeviceInfo.hasNotch() ? 44 : 20 : 56;

export { askPermission };

//export const TH_BASE_URL = 'https://truehelpers.com/Api/';
