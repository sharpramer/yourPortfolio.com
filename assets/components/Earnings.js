import { View, Text } from "react-native";

export default function Earnings({ earnings, earningsPercentage }) {
    return (
        <View>
            <Text>Earnings ($): {earnings}</Text>
            <Text>Earnings (%): {earningsPercentage}</Text>
        </View>
    )
}