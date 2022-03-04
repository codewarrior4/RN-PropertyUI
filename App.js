import React from 'react';
import {SafeAreaView,Text,View,StatusBar,StyleSheet} from 'react-native';
import Route from './src/Routes/Route';

const App = ()  => {
return (
      <>
        <StatusBar barStyle='light-content' translucent={false} />
        <Route />
      </>
      
  );
};

const styles = StyleSheet.create({
  test:{
    fontFamily:'LeagueGothic-Regular-VariableFont_wdth',
    fontSize:40

  }
});

export default App;
