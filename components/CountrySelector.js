import { useState } from "react";

import useStats from "../utils/useStats";
import Stats from "./Stats";
import ProvinceSelector from "./ProvinceSelector";

export default function CountrySelector() {
    const { stats: countries, loading, error } = useStats(
        "https://covid19.mathdro.id/api/countries"
    );
    const [selectedCountry, setSelectedCountry] = useState("USA");
    // console.log(selectedCountry);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <div>
            <h2>Currently Showing {selectedCountry}</h2>
            <select
                onChange={e => {
                    setSelectedCountry(e.target.value);
                    // console.log(e.target.value);
                }}
            >
                {countries &&
                    Object.entries(countries.countries).map(
                        ([country, code], i) => {
                            return (
                                <option
                                    value={countries.iso3[code]}
                                    key={i}
                                    selected={
                                        selectedCountry === countries.iso3[code]
                                    }
                                >
                                    {country}
                                </option>
                            );
                        }
                    )}
            </select>
            <Stats
                url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
            ></Stats>
            <ProvinceSelector country={selectedCountry} />
        </div>
    );
}
