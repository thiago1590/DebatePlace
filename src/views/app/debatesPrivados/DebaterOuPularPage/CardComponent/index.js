import React,{useState,useEffect} from 'react';
import { View,Button } from 'react-native';
import { Card } from 'react-native-paper';
import FlashMessage from "react-native-flash-message";
import InteressesList from '../../../../../components/InteressesList'
import { UserImageContainer, UserImage, TxtName, VisaoContainer, Border, TxtOpnion, InteressesContainer, TxtTopic, CoordenadasImage} from './styles';

const Cardcomponent = ({card}) => {
  return <>

  <Card style={{ paddingHorizontal: 20, flex: 1 }}>

    <UserImageContainer>
      <UserImage source={require('../../../../../../assets/users/yuval.jpg')} />
      <TxtName>{card.titulo}</TxtName>
    </UserImageContainer>

    <VisaoContainer>
      <Border>
        <TxtTopic>Texto Resumitivo</TxtTopic>
        <TxtOpnion> {card.mensagem_autor} </TxtOpnion>
      </Border>
    </VisaoContainer>

    <InteressesContainer>
      <TxtTopic>Temas de interesse</TxtTopic>
      <InteressesList />
    </InteressesContainer>

    <View style={{ justifyContent: 'center', flex: 1 }}>
      <CoordenadasImage style={{ resizeMode: 'contain' }} source={require('../../../../../../assets/coordenadas.jpg')} />
    </View>

    <FlashMessage animationDuration={700}
      style={{ height: 40, borderRadius: 3, backgroundColor: 'rgba(0,0,0,0.6)' }}

      duration={5000}
      position="top" />
  </Card>
  </>
}

export default Cardcomponent;