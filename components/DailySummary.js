import moment from "moment";

import useStats from "../utils/useStats";

export default function DailySummary({ url }) {
    const { stats, loading, error } = useStats(url);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    // console.log(stats);

    return (
        <div>
            <h3>Daily Summary</h3>
            <table>
                <thead>
                    <tr>
                        <td>reportDate</td>
                        <td>mainlandChina</td>
                        <td>otherLocations</td>
                        <td>totalConfirmed</td>
                        <td>totalRecovered</td>
                        <td>deltaConfirmed</td>
                        <td>deltaRecovered</td>
                    </tr>
                </thead>
                {stats &&
                    stats.map((summary, i) => {
                        return (
                            <tbody key={i}>
                                <tr>
                                    <td>
                                        {moment(summary.reportDate)
                                            .subtract(1, "days")
                                            .calendar() || ""}
                                    </td>
                                    <td>{summary.mainlandChina || null}</td>
                                    <td>{summary.otherLocations || null}</td>
                                    <td>{summary.totalConfirmed || null}</td>
                                    <td>{summary.totalRecovered || null}</td>
                                    <td>{summary.deltaConfirmed || null}</td>
                                    <td>{summary.deltaRecovered || null}</td>
                                </tr>
                            </tbody>
                        );
                    })}
            </table>
        </div>
    );
}
