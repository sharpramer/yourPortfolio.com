import { View, Text, TouchableHighlight } from "react-native";

const timeOptions = ['Day', 'Week', 'Month', '6M', 'YTD', 'Year', '5Y', 'Max']

export default function TimeFilters() {
    return (
        <View>
            {timeOptions.map(option => (
                <TouchableHighlight
                    key={option}
                    onPress={() => alert(option)}
                >
                    <Text>{option}</Text>
                </TouchableHighlight>
            ))}
        </View>
    )
}