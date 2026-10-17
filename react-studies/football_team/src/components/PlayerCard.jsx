import Turkey_Flag from "../assets/images/flag_of_Turkey.svg";
import erzurumspor from "../assets/images/erzurumspor1.png";
import man_avatar from "../assets/images/man_avatar.png";

const PlayerCard = ({position, name, features}) => {
    const overall_rating = Math.round((features.speed + features.shoot + features.passing + features.dribbling + features.defence + features.physical) / 6);

    return (
        <div className="fut-player-card">
            <div className="player-card-top">
                <div className="player-master-info">
                    <div className="player-rating"><span>{overall_rating}</span></div>
                    <div className="player-position"><span>{position}</span></div>
                    <div className="player-nation">
                        <img src={Turkey_Flag} alt="Turkey" draggable="false" />
                    </div>
                    <div className="player-club">
                        <img src={erzurumspor} alt="Erzurumspor" draggable="false" />
                    </div>
                </div>
                <div className="player-picture">
                    <img src={man_avatar} alt="Man_Avatar" draggable="false" />
                </div>
            </div>
            <div className="player-card-bottom">
                <div className="player-info">
                    <div className="player-name"><span>{name}</span></div>
                    <div className="player-features">
                        <div className="player-features-col">
                            <span>
                                <div className="player-feature-value">{features.speed}</div>
                                <div className="player-feature-title">SPD</div>
                            </span>
                            <span>
                                <div className="player-feature-value">{features.shoot}</div>
                                <div className="player-feature-title">SHO</div>
                            </span>
                            <span>
                                <div className="player-feature-value">{features.passing}</div>
                                <div className="player-feature-title">PAS</div>
                            </span>
                        </div>
                        <div className="player-features-col">
                            <span>
                                <div className="player-feature-value">{features.dribbling}</div>
                                <div className="player-feature-title">DRI</div>
                            </span>
                            <span>
                                <div className="player-feature-value">{features.defence}</div>
                                <div className="player-feature-title">DEF</div>
                            </span>
                            <span>
                                <div className="player-feature-value">{features.physical}</div>
                                <div className="player-feature-title">PHY</div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard