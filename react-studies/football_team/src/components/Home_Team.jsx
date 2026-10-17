import { first_team_data } from "./first_team_data"
import PlayerCard from "./PlayerCard"

const Home_Team = () => {
    return (
        <>
            <div className="wrapper">
                {
                    first_team_data.offense.map((player, index) => (
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
                    first_team_data.mid.map((player, index) => (
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
                    first_team_data.defence.map((player, index) => (
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
                    first_team_data.gk.map((player, index) => (
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

export default Home_Team