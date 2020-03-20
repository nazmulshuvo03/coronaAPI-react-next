import moment from "moment";

import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelector";
import DailySummary from "../components/DailySummary";
import DailyUpdate from "../components/DailyUpdate";

export default function IndexPage() {
    var d = new Date();
    d.setDate(d.getDate() - 2);
    const date = moment(d).format("M-DD-YYYY");

    return (
        <div>
            <Stats url="https://covid19.mathdro.id/api" />
            <CountrySelector />
            <DailySummary url="https://covid19.mathdro.id/api/daily" />
            <DailyUpdate url={`https://covid19.mathdro.id/api/daily/${date}`} />
        </div>
    );
}
