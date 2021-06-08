import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Button, Image, TextInput } from 'react-native';
import axios from 'axios'
export default function Home() {

    const [countries, setCountries] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all').then(response => setCountries(response.data)).catch(err => setCountries([]));
    }, []);

    useEffect(() => {
        const url = searchQuery.length == 0 ? 'https://restcountries.eu/rest/v2/all' : 'https://restcountries.eu/rest/v2/name/' + searchQuery
        axios.get(url).then(response => setCountries(response.data)).catch(err => setCountries([]));
    }, [searchQuery]);

    const onSearchQueryValueChange = (event) => {
        console.log(event)
        setSearchQuery(event.target.value || '');
    }

    return (

        <View>

            <View style={{ borderWidth: 1, borderColor: 'blue', flex: 1, flexDirection: 'row', borderRadius: 8, marginBottom: 10 }}>
                <TextInput style={{ flex: 1, padding: 8 }} onChange={onSearchQueryValueChange} placeholder="Ölkənin adını daxil edin..." />
                <Button onPress={{}} title="Axtar"></Button>
            </View>
            <View style={{ borderWidth: 1, borderColor: 'lightgray', flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginBottom: 10, backgroundColor: 'blue', padding: 10 }}>
                <Text style={{ fontSize: 20, color: '#ffffff' }}>
                    Ölkə sayı: {countries.length}
                </Text>
            </View>
            <ScrollView style={{ flex: 1, margin: 10 }}>
                {
                    countries.map(country => {
                        return (

                            <View key={'ContainerView' + country.flag} style={{ flex: 1, flexDirection: 'row', marginBottom: 10, borderWidth: 1, borderRadius: 8, borderColor: 'lightgray', padding: 10 }}>

                                <View>
                                    <Image source={country.flag} style={{ width: 40, height: 30, margin: 5 }} />
                                </View>

                                <View key={'View' + country.flag}>
                                    <Text key={'name' + country.flag}>
                                        {country.name}
                                    </Text>
                                    <Text key={'capital' + country.flag} style={{ fontSize: 9 }} >
                                        {country.capital} ({country.currencies[0].symbol})
                                    </Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView >
        </View>

    )

}