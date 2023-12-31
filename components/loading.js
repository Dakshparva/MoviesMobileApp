import { View,  Dimensions } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { styles, theme } from '../theme';
const {width, height} =  Dimensions.get('window');
import { styled } from "nativewind";

const StyledView = styled(View);


export default function Loading() {
  return (
    <StyledView style={{height, width}} className="absolute flex-row justify-center items-center">
        <Progress.CircleSnail thickness={12} size={160} color={theme.background} />
    </StyledView>
  )
}