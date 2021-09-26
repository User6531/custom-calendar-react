export default function buildTableCalendar(currentDay) {
    const startDayOfTheMonth = currentDay.startOf('month').startOf('week');
    const endDayOfTheMonth = currentDay.endOf('month').endOf('week');
    let day = startDayOfTheMonth.minus({day: 1});
    const monthArray = [];
    while (day < endDayOfTheMonth) {
        monthArray.push(Array(7).fill(0).map(() => day = day.plus({day: 1})));
    }
    return monthArray;
}