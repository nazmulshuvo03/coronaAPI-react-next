import ConfirmedDetail from "./ConfirmedDetail";
import RecoveredDetail from "./RecoveredDetail";
import DeathDetail from "./DeathDetail";

export default function ProvinceSelector({ country }) {
    return (
        <div className="row">
            <div className="col-sm-4">
                <ConfirmedDetail
                    url={`https://covid19.mathdro.id/api/countries/${country}/confirmed`}
                />
            </div>
            <div className="col-sm-4">
                <RecoveredDetail
                    url={`https://covid19.mathdro.id/api/countries/${country}/recovered`}
                />
            </div>
            <div className="col-sm-4">
                <DeathDetail
                    url={`https://covid19.mathdro.id/api/countries/${country}/deaths`}
                />
            </div>
        </div>
    );
}
