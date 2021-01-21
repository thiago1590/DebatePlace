import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-paper';
import { Container,UserImageContainer,UserImage,TxtName,VisaoContainer,Border,TxtOpnion ,InteressesContainer,TxtTopic,CoordenadasImage} from './styles';
import FlashMessage from "react-native-flash-message";
import InteressesList from '../../../../../components/InteressesList'
import data from '../data'

const CardComponent = () => {
    return <>
        <Card style={{ paddingHorizontal: 20, flex: 1 }}>

            <UserImageContainer>
                <UserImage source={require('../../../../../../assets/users/foto-default.png')} />
                <TxtName>Thiago André</TxtName>
            </UserImageContainer>

            <VisaoContainer>
                <Border>
                    <TxtTopic>Texto Resumitivo</TxtTopic>
                    <TxtOpnion>Lorem Ipsum is simply dummy text asda ad aa  asdasd asdas Lorem Ipsum is simply Lorem Ipsum is simply dummy text asda ad aa  asdasd asdas Lorem Ipsum is simply Lorem Ipsum is simply  is simply  </TxtOpnion>
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

export default CardComponent;