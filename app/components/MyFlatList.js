import React from 'react';
import { FlatList } from 'react-native';

const MyFlatList = (props) => {
  const { data, renderItem, keyExtractor } = props;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default MyFlatList;
