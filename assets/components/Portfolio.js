import { Image, Text, View } from "react-native";
import { Earnings } from "./Earnings";
import { TimeFilters } from "./TimeFilters";

export default function Portfolio({ totalInvested, earnings, earningsPercentage }) {
    return (
        <View>
            <Text>Portfolio</Text>

            <Text>Total invested</Text>
            <Text>$ {totalInvested === 0 ? '0,00' : totalInvested}</Text>

            <Earnings earnings={earnings} earningsPercentage={earningsPercentage} />

            <Image source={require('../../img/graphic.png')} />

            <TimeFilters/>
        </View>
    )    
}