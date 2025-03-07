import React from 'react';
import Feather from "react-native-vector-icons/Feather";
Feather.loadFont();
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

import routes from '../../config/routes';
import { Colors, Typography } from '../../styles';

import Button from '../../components/Button';

const GetStarted = ({navigation, route}) => {

    return (
        <View style={styles.container}>
            {/* Body */}
            <View style={styles.bodyContainer} >
                <Image 
                    resizeMode='cover'
                    style={{ width: 200, height: 200}}
                    source={require('../../assets/images/logo.png')} />
                
                <Text style={[Typography.H5,{color: Colors.BLUE_DARK}]}>Ch
                <Text style ={{color: Colors.PRIMARY}}>earn</Text>
                er</Text>
                
                
            </View>

            {/* Footer */}
            <View style={styles.footerContainer}>
                <Button 
                    title='Get Started'
                    onPress={() => navigation.navigate(routes.Login)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.MAIN
    },
    // Body
    bodyContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        color: Colors.BLUE_DARK
    },
    // Footer
    footerContainer: {
        padding: 20,
    },
});
 
export default GetStarted;
 