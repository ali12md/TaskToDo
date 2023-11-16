/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


function App(): JSX.Element {
  const [data, setData] = useState({ title: '', date: '' })
  const [list, setList] = useState([])
  const [sortType, setSortType] = useState('ass')

  const onChange = (v: string, type: string) => {
    let temp = { [type]: v }
    setData({ ...data, ...temp })

  }
  const handleAdd = () => {
    let temp = [...list]
    temp.push(data)
    setList(temp)
    setData({})
  }
  const handleAssSort = () => {
    let temp = [...list]
    temp.sort((a, b) => {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return d - c;
    });
    setList(temp)
    setSortType('des')
  }

  const handleDesSort = () => {
    let temp = [...list]
    temp.sort((a, b) => {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return c - d;
    });
    setList(temp)
    setSortType('ass')
  }
  console.log('sortType', sortType)
  return (
    <SafeAreaView >
      <View>
        <Text>To Do App</Text>
        <View>
          <TextInput
            style={{ borderWidth: 1 }}
            placeholder='fill title'
            value={data.title}
            onChangeText={(e) => onChange(e, 'title')}
          />
          <TextInput
            style={{ borderWidth: 1 }}
            value={data.date}
            placeholder='fill date'
            onChangeText={(e) => onChange(e, 'date')}
          />
          <Button
            onPress={handleAdd}
            title='Add'
          />
          <Button
            onPress={sortType === 'ass' ? handleAssSort : handleDesSort}
            title='sort'
          />
        </View>
        <FlatList
          data={list}
          renderItem={({ item }) => {
            return <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
              <Text>{item.title}</Text>
              <Text>{item.date}</Text>
            </View>
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
