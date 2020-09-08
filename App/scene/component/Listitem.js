import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Card} from './card';
export const ListItem = ({myData, onPress}) => {
  return (
    <Card>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <Image
            style={{width: 100, height: 100, borderRadius: 50}}
            source={{uri: myData.picture}}
          />

          <View style={{flexDirection: 'column', flex: 10, marginLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text>{myData.firstname}</Text>
              <Text style={{paddingLeft: 5}}>{myData.surname}</Text>
              <Text style={{marginLeft: 50}}>{myData.age}</Text>
            </View>
            <Text>{myData.company}</Text>
            <Text>{myData.email}</Text>
            <Text>Phone: {myData.phone}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
};
