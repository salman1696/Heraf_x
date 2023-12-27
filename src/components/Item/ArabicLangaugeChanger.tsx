import { View, Image, Text } from 'react-native';

const ArabicLanguageChanger = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
    }}>
    <Image source={sudiaLang} resizeMode={'cover'} style={styles.langSwitch} />
    <Text
      style={{
        fontFamily: Fonts.RobotoRegular,
        color: theme.colors.textColor,
        fontSize: 20,
      }}>{`عربي`}</Text>
  </View>
);
