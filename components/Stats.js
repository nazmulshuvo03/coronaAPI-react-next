import useStats from "../utils/useStats";
import styled from "styled-components";
import { VictoryPie } from "victory";

const StatGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
`;

const StatBlock = styled.div`
    background: grey;
    font-size: 2rem;
    background: #f2f2f2;
    border-radius: 2rem;
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
`;

export default function Stats({ url }) {
    const { stats, loading, error } = useStats(url);
    // console.log(url, stats);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    const viewStats = stats ? (
        // <StatGrid>
        //     <StatBlock>
        //         <h3>Confirmed: </h3>
        //         <span>
        //             {stats.confirmed ? stats.confirmed.value : "Not Found Yet"}
        //         </span>
        //     </StatBlock>
        //     <StatBlock>
        //         <h3>Deaths: </h3>
        //         <span>
        //             {stats.deaths ? stats.deaths.value : "Not Found Yet"}
        //         </span>
        //     </StatBlock>
        //     <StatBlock>
        //         <h3>Recovered: </h3>
        //         <span>
        //             {stats.recovered ? stats.recovered.value : "Not Found Yet"}
        //         </span>
        //     </StatBlock>
        // </StatGrid>

        stats.confirmed ? (
            <VictoryPie
                data={[
                    { x: "Confirmed", y: stats.confirmed.value },
                    { x: "Deaths", y: stats.deaths.value },
                    { x: "Recovered", y: stats.recovered.value }
                ]}
                colorScale={["navy", "tomato", "cyan"]}
                animate={{
                    duration: 2000
                }}
            />
        ) : (
            <VictoryPie
                data={[
                    { x: "Confirmed", y: 0 },
                    { x: "Deaths", y: 0 },
                    { x: "Recovered", y: 0 }
                ]}
                colorScale={["navy", "tomato", "cyan"]}
                animate={{
                    duration: 2000
                }}
            />
        )
    ) : null;

    return viewStats;
}
