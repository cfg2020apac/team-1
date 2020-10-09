import { Right } from 'native-base';
import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import { Icon, Divider } from 'react-native-elements';

let data = [
    {
        name: 'Tan Ah Kau',
        status: 'Pending',
        bgColor: '#FFC542'
    },
    {
        name: 'Tan Ah Kau',
        status: 'Follow Up',
        bgColor: '#FF565E'
    },
    {
        name: 'Tan Ah Kau',
        status: 'Completed',
        bgColor: '#3ED598'
    },
    {
        name: 'Tan Ah Kau',
        status: 'Completed',
        bgColor: '#3ED598'
    }
];

export default function Counsellor() {
    const [myClient, setMyClient] = useState(true);
    const [newClient, setNewClient] = useState(false);

    const handleToggleClient = () => {
        setMyClient(!myClient);
        setNewClient(!newClient);
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#30444E', flex: 1 }}>
            <View
                style={{
                    marginTop: 24,
                    paddingHorizontal: 24,
                    paddingVertical: 16,
                    flexDirection: 'row'
                }}
            >
                <TouchableOpacity
                    style={{
                        borderRadius: 8,
                        backgroundColor: myClient ? '#7A3789' : '#ddd',
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        marginRight: 16
                    }}
                    onPress={() => {
                        handleToggleClient();
                    }}
                >
                    <Text style={{ color: myClient ? '#fff' : '#333' }}>
                        My Clients
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        borderRadius: 8,
                        backgroundColor: newClient ? '#7A3789' : '#ddd',
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        marginRight: 16
                    }}
                    onPress={() => {
                        handleToggleClient();
                    }}
                >
                    <Text style={{ color: newClient ? '#fff' : '#333' }}>
                        New Clients
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ padding: 16 }}>
                {data.map((item, index) => (
                    <View
                        key={index}
                        style={{
                            flexDirection: 'row',
                            // justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 8,
                            paddingVertical: 16,
                            width: '100%'
                        }}
                    >
                        <View
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 999999,
                                backgroundColor: item.bgColor,
                                justifyContent: 'center',
                                marginRight: 24,
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                source={require('../assets/images/first_avatar.png')}
                            />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text
                                key={index}
                                style={{ color: '#FFFFFF', fontSize: 14 }}
                            >
                                {item.name}
                            </Text>
                            <Text
                                key={index}
                                style={{
                                    color: '#DDDDDD',
                                    fontSize: 12,
                                    marginVertical: 11
                                }}
                            >
                                {item.status}
                            </Text>
                        </View>

                        <Icon
                            name="chevron-right"
                            color="#ddd"
                            containerStyle={{ marginLeft: 124 }}
                        />
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
