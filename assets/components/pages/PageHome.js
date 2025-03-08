import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Portfolio from "../Portfolio"

export function PageHome() {

    const [totalInvested, setTotalInvested] = useState(0)
    const [earnings, setEarnings] = useState(0)
    const [earningsPercentage, setEarningsPercentage] = useState(0)

    return(
        <SafeAreaView>
            <Portfolio
                totalInvested={totalInvested}
                earnings={earnings}
                earningsPercentage={earningsPercentage}
            />           
        </SafeAreaView>
    )
}