import React, {useState} from 'react';
import {StyleSheet, Text, View, SectionList, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const SectionLists = () => {
  const [data, setData] = useState([
    {
      header: 'صبحانه',
      data: ['نیمرو', 'املت', 'املت ویژه', 'نون پنیر'],
      footer: 'اتمام',
    },
    {
      header: 'ناهار',
      data: ['کوکو سبزی', 'ماش پلو', 'لوبیا پلو', 'عدس پلو'],
      footer: 'اتمام',
    },
    {
      header: 'شام',
      data: [
        'باقالی پلو با ماهیچه',
        'لازانیا',
        'جوجه کباب فرزین پز',
        'کباب کوبیده',
      ],
      footer: 'اتمام',
    },
  ]);
  return (
    <View style={styles.container}>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={data}
        keyExtractor={(item, index) => {
          item + index;
        }}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {header}}) => (
          <Text style={styles.header}>{header}</Text>
        )}
      />
    </View>
  );
};

export default SectionLists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'teal',
    padding: 5,
    marginVertical: 5,
    width: width - 44,
    borderWidth: 1,
    borderRadius: 10,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#ffffff',
    fontFamily: 'byekan',
    color: 'teal',
  },
  title: {
    fontSize: 24,
    fontFamily: 'byekan',
    textAlign: 'center',
    color: 'white',
  },
});
