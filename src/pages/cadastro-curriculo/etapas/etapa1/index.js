import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-picker';

import variables from '../../../../shared/variables/styles'
import styles from './styles'

class Etapa1 extends React.Component {
    
    state = {
        tabs: true
    }
    
    chooseMedia(){

        const options = {
            title: 'Selecione uma foto',
            cancelButtonTitle: 'Cancelar',
            takePhotoButtonTitle: 'Abrir a câmera',
            chooseFromLibraryButtonTitle: 'Escolher da galeria',
            cameraType: 'front',
            mediaType: 'photo',
            maxWidth: 2000,
            maxHeight: 2000,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
               console.log(response)
            }
        });
    }

    render(){
        return (
            <View>
                <Text style={[ variables.title, styles.title ]}>Sobre mim</Text>
                <Text style={ variables.subtitle }>Fale um pouco sobre você através de um vídeo ou por escrito</Text>
        
                <View style={ styles.tabs }>
                    <TouchableOpacity style={ styles.tabsItem } onPress={() => this.setState({ tabs: true })}>
                        <Image style={ styles.tabsImg } source={require('../../../../assets/images/ijc.png')} />
                    </TouchableOpacity>
                    <View style={ styles.bar } />
                    <TouchableOpacity style={ styles.tabsItem } onPress={() => this.setState({ tabs: false })}>
                        <Image style={ styles.tabsImg } source={require('../../../../assets/images/ijc.png')} />
                    </TouchableOpacity>
                </View>
        
                <View style={ styles.desc }>
                    {this.state.tabs === true ?
                        <View>
                            <TouchableOpacity onPress={() => this.chooseMedia()}>
                            </TouchableOpacity>
                            <TextInput style={ styles.textarea } placeholder={ 'Vídeo sobre você' } onChangeText={text => onChangeText(text)} />
                        </View>
                        :
                        <TextInput style={ styles.textarea } placeholder={ 'Escreva uma breve descrição sobre você' } onChangeText={text => onChangeText(text)} />
                    }

                    {/* accept={.mp4, .avi, .mkv, .ogg, .ogm, .mpg, .mpeg, .vob, .bvcd, .bsvcd} */}

                </View>
            </View>
        )        
    }    
}

export {Etapa1}