import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { image500 } from '../api/moviedb';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

var {width, height} = Dimensions.get('window');

export default function TrendingMovies({data}) {
    const navigation = useNavigation();

    const handleClick = item=>{
        navigation.navigate('Movie', item);
    }
  return (
    <StyledView className='mb-6'>

      <StyledText className="text-white text-xl mx-2 mb-5">Trending</StyledText>
      <Carousel
            data={data}
            renderItem={({item})=> <MovieCard handleClick={handleClick} item={item} />}
            firstItem={1}
            // loop={true}
            // inactiveSlideScale={0.86}
            inactiveSlideOpacity={0.60}
            sliderWidth={width}
            itemWidth={width*0.62}
            slideStyle={{display: 'flex', alignItems: 'center'}}
        />
    </StyledView>
  )
}

const MovieCard = ({item, handleClick})=>{

    return (
        <TouchableWithoutFeedback onPress={()=> handleClick(item)}>
            <Image 
                // source={require('../assets/images/moviePoster1.png')} 
                source={{uri: image500(item.poster_path)}} 
                style={{
                    width: width * 0.6,
                    height: height * 0.4
                }}
                className="rounded-3xl" 
            />
        </TouchableWithoutFeedback>
    )
}