import { useState, useEffect } from "react";

import useStats from "../utils/useStats";

export default function ConfirmedDetail({ url }) {
    const { stats, loading, error } = useStats(url);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    // console.log(stats);

    return (
        <div>
            <h3>Confirmed</h3>
            <table>
                <thead>
                    <tr>
                        <td>Province</td>
                        <td>Confirmed</td>
                        <td>Recovered</td>
                        <td>Deaths</td>
                        <td>Active</td>
                    </tr>
                </thead>
                {stats &&
                    stats.map((province, i) => {
                        return (
                            <tbody key={i}>
                                <tr>
                                    <td>{province.provinceState || ""}</td>
                                    <td>{province.confirmed || null}</td>
                                    <td>{province.recovered || null}</td>
                                    <td>{province.deaths || null}</td>
                                    <td>{province.active || null}</td>
                                </tr>
                            </tbody>
                        );
                    })}
            </table>
        </div>
    );
}
