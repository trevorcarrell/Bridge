import { StyleSheet, Text, View, SafeAreaView, Pressable, Image} from 'react-native';
import Colors from '../Themes/colors';

export default function LogIn() {
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text>Log In Page</Text>
            </View>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.background,
    }
});