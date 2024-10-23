import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const Landing = () => {
    return (
        <Redirect href={'/home-rd'} />
    )
}

export default Landing