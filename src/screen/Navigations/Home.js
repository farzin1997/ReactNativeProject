import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Btn from '../../components/Btn';

const Home = ({navigation}) => {
  console.log('navigation', navigation);
  return (
    <View style={styles.container}>
      <Text>home</Text>
      <Btn
        onPress={() => navigation.navigate('About')}
        value={'برو به صفحه درباره'}
        backgroundColor="darkred"
      />
      <Btn
        onPress={() =>
          navigation.navigate('Details', {
            text: 'const {text} = route.params ;',
          })
        }
        value={'برو به صفحه جزئیات'}
        backgroundColor="darkred"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
