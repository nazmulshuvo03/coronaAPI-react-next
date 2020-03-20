import useStats from "../utils/useStats";

export default function Detail() {
    const { stats, loading, error } = useStats(
        "https://covid19.mathdro.id/api/countries/USA/deaths"
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    const viewDetail = stats ? "Yes" : null;

    return viewDetail;
}
