import React, {Component} from 'react';
import {View} from 'react-native';
import Realm from 'realm';
import MyButton from '../components/MyButton';
import MyText from '../components/MyText';
let realm;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({
      path: 'UserDatabase.realm',
      schema: [
        {
          name: 'user_details',
          properties: {
            user_id: {type: 'int', default: 0},
            user_name: 'string',
            user_contact: 'string',
            user_address: 'string',
          },
        },
      ],
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
        <MyText text="Realm Example" />
        <MyButton
          title="Register..."
          customClick={() => this.props.navigation.navigate('Register')}
        />
        <MyButton
          title="Update"
          customClick={() => this.props.navigation.navigate('Update')}
        />
        <MyButton
          title="View"
          customClick={() => this.props.navigation.navigate('View')}
        />
        <MyButton
          title="View All"
          customClick={() => this.props.navigation.navigate('ViewAll')}
        />
        <MyButton
          title="Delete"
          customClick={() => this.props.navigation.navigate('Delete')}
        />
      </View>
    );
  }
}
