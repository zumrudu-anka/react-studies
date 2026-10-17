import { opponent_team_data } from "./opponent_team_data"
import PlayerCard from "./PlayerCard"

const Opponent_Team = () => {
    return (
        <>
            <div className="wrapper">
                {
                    opponent_team_data.gk.map((player, index) => (
                        <PlayerCard
                            key={`player_card_${index}`}
                            overall_rating={player.overall_rating}
                            name={player.name}
                            position={player.position}
                            features={player.features}
                        />
                    ))
                }
            </div>
            <div className="wrapper">
                {
                    opponent_team_data.defence.map((player, index) => (
                        <PlayerCard
                            key={`player_card_${index}`}
                            overall_rating={player.overall_rating}
                            name={player.name}
                            position={player.position}
                            features={player.features}
                        />
                    ))
                }
            </div>
            
            <div className="wrapper">
                {
                    opponent_team_data.mid.map((player, index) => (
                        <PlayerCard
                            key={`player_card_${index}`}
                            overall_rating={player.overall_rating}
                            name={player.name}
                            position={player.position}
                            features={player.features}
                        />
                    ))
                }
            </div>
            <div className="wrapper">
                {
                    opponent_team_data.offense.map((player, index) => (
                        <PlayerCard
                            key={`player_card_${index}`}
                            overall_rating={player.overall_rating}
                            name={player.name}
                            position={player.position}
                            features={player.features}
                        />
                    ))
                }
            </div>
            
            
        </>
    )
}

export default Opponent_Team