import { View, Text, ScrollView, TouchableWithoutFeedback, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { moviesData } from '../constants'
import { useNavigation } from '@react-navigation/native';
import { fallbackMoviePoster, image185, image342, poster342 } from '../api/moviedb';
import { styles } from '../theme';
const {width, height} =  Dimensions.get('window');
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function MovieList({title, hideSeeAll, data}) {
  const navigation = useNavigation();
  return (
    <StyledView className="mb-8 space-y-4">
      
      <StyledView className="mx-4 flex-row justify-between items-center">
        <StyledText className="text-white text-lg">{title}</StyledText>
        {
          !hideSeeAll && (
            <TouchableOpacity>
              <Text style={styles.text} className="text-lg">See All</Text>
            </TouchableOpacity>
          )
        }
        
        
      </StyledView>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
      >
        {
            data.map((item, index)=>{
                return (
                    <TouchableWithoutFeedback 
                      key={index} 
                      onPress={()=> navigation.push('Movie', item)}
                    >
                        <StyledView className="space-y-1 mr-4">
                            <Image 
                              // source={require('../assets/images/moviePoster2.png')}
                              source={{uri: image185(item.poster_path) || fallbackMoviePoster}} 
                              className="rounded-3xl" 
                              style={{ width: width*0.33, height: height*0.22}} 
                            />
                            <StyledText className="text-neutral-300 ml-1">
                                {
                                    item.title.length>14? item.title.slice(0,14)+'...': item.title
                                }
                            </StyledText>
                        </StyledView>
                    </TouchableWithoutFeedback>
                )
            })
        }
      </ScrollView>
    </StyledView>
  )
}