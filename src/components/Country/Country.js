import * as React from 'react'
import {View, Text} from 'react-native'


class CountryObject extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <View>
                <Text>
                    {
                        console.log(this.props)
                    }
                </Text>
            </View>
        )
    }
}


export default CountryObject