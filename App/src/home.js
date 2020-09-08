import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../scene/redux/action/index';
import {ListItem} from '../scene/component/Listitem';
import {Icon, Button, ActionSheet} from 'native-base';
import RBSheet from 'react-native-raw-bottom-sheet';
const home = (props) => {
  const {dataSource, isLoading} = props;

  const [dData, setdData] = useState(dataSource);
  const [list, setList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const refInput = useRef();
  // console.log('Test loading dataSource', dData);
  // console.log('Test', dataSource);

  useEffect(() => {
    props.fetchData();
  }, []);

  const resetSort = () => {
    if (list.length > 0) setData(list);
    setList([]);
  };

  const sortByTitle = () => {
    let filterData = [...dData];
    filterData = filterData.sort((a, b) => {
      if (a.firstname < b.firstname) {
        return -1;
      }
      if (a.firstname > b.firstname) {
        return 1;
      }
      return 0;
    });

    setList(dData);
    setdData([]);
    setdData(filterData);
  };

  const handleSearch = () => {
    setIsSearching(true);
    if (isSearching) {
      if (searchText !== '') {
        let filterData = [...dData];
        filterData = filterData.filter((item) => {
          if (
            item.firstname &&
            item.firstname.toLowerCase().includes(searchText.toLowerCase())
          ) {
            return true;
          } else if (
            item.surname &&
            item.surname.toLowerCase().includes(searchText.toLowerCase())
          ) {
            return true;
          } else {
            false;
          }
        });
        setList(dData);
        setdData([]);
        setdData(filterData);
      } else if (searchText == '') {
        setdData(list);
        setList([]);
        setIsSearching(false);
      }
    }
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator color="red" size={30} />
      </View>
    );
  } else {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 60,
            marginHorizontal: 10,
            borderWidth: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="Search"
            onChangeText={(text) => setSearchText(text)}
            onSubmitEditing={() => handleSearch()}
            value={searchText}
            returnKeyType={'search'}
          />
          <TouchableOpacity onPress={() => refInput.current.open()}>
            <Icon name="list" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={dData}
          renderItem={({item}) => {
            return (
              <ListItem
                myData={item}
                onPress={() =>
                  props.navigation.navigate('Detail', {
                    data: item,
                  })
                }
              />
            );
          }}
        />

        <RBSheet ref={refInput} height={100}>
          <View style={{marginLeft: 10}}>
            <Text>Sort by</Text>
            <TouchableOpacity
              onPress={() => {
                sortByTitle();
                refInput.current.close();
              }}>
              <Text style={{marginTop: 10}}>Tittle</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                resetSort();
                refInput.current.close();
              }}>
              <Text style={{marginTop: 10}}>Reset</Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </View>
    );
  }
};

const mapStateToProps = ({load}) => {
  console.log('Test', load);
  const {dataSource, isLoading} = load;
  return {dataSource, isLoading};
};
export default connect(mapStateToProps, {fetchData})(home);
