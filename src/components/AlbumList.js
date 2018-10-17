import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends React.Component {
    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log(response));
    }
    render() {
        return (
            <View>
                <Text>Album Lister!!!!</Text>
            </View>
        );
    }
}

export default AlbumList;
