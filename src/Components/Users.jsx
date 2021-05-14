import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux/user/userActions'
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    width: '100%'
  },
  mainTitle: {
    fontSize: 30,
    marginTop: 70,
  },
  title: {
    fontSize: 26,
    marginTop: 80,
    marginBottom: 25,
  },
  item: {
    marginTop: 10,
  },
  listView: {
    width: '80%',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    userData: state.userReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

function Users({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users</Text>
      {userData.map(user => ( 
        <Text>{user.name}</Text>
      ))}
    </View>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)