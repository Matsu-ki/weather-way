import { Text, Touch, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import styles from '../Login/style';

export default function Favorites(){
    return (
        <ImageBackground style={styles.container}>

          <Image
                source={require('../../../assets/climaLast.jpg')}
                style={styles.backgroundImageWeather}
          />
        </ImageBackground>
      );
}