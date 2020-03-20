import moment from "moment";

import useStats from "../utils/useStats";

export default function DailyUpdate({ url }) {
    const { stats, loading, error } = useStats(url);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    // console.log(stats);

    return (
        <div>
            <h3>Daily Update</h3>
            <table>
                <thead>
                    <tr>
                        <td>provinceState</td>
                        <td>countryRegion</td>
                        <td>lastUpdate</td>
                        <td>confirmed</td>
                        <td>deaths</td>
                        <td>recovered</td>
                    </tr>
                </thead>
                {stats &&
                    stats.map((summary, i) => {
                        return (
                            <tbody key={i}>
                                <tr>
                                    <td>{summary.provinceState || null}</td>
                                    <td>{summary.countryRegion || null}</td>
                                    <td>{summary.lastUpdate || null}</td>
                                    <td>{summary.confirmed || null}</td>
                                    <td>{summary.deaths || null}</td>
                                    <td>{summary.recovered || null}</td>
                                </tr>
                            </tbody>
                        );
                    })}
            </table>
        </div>
    );
}
