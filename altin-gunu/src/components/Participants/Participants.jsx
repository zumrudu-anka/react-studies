import { participants } from '../../data/participants';
import ParticipantCard from './ParticipantCard/ParticipantCard';

const Participants = () => {

    const calcPassedMonths = (beginDate, endDate) => {
        var beginDateYear = beginDate.getFullYear();
        var endDateYear = endDate.getFullYear();
        var beginDateMonth = beginDate.getMonth();
        var endDateMonth = endDate.getMonth();

        return (endDateMonth + 12 * endDateYear) - (beginDateMonth + 12 * beginDateYear);
    }

    const startingDate = new Date("2025-07-17");
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const passedMonths = calcPassedMonths(startingDate, currentDate);
    const cycleCount = Math.floor(passedMonths / participants.length);

    // const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

    return (
        <section className="participant-cards">
            {
                participants.sort((a, b) => a.startingMonth - b.startingMonth).map((participant, index) => {

                    const tempDate = new Date(startingDate);
                    const date = new Date(tempDate.setMonth(startingDate.getMonth() + cycleCount * participants.length + participant.order - 1));
                    const isActive = currentMonth === date.getMonth() + 1;

                    return <ParticipantCard
                        key={index}
                        name={participant.name}
                        surname={participant.surname}
                        image={participant.image}
                        amount={participant.amount}
                        date={date}
                        isActive={isActive}
                    // months = {months}
                    />
                })
            }
        </section>
    )
}

export default Participants