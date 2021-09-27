export default function dayStyles(day, selectedDay, today) {
    // selected day
    if (selectedDay.hasSame(day, 'day')) {
        return {
            backgroundColor: 'red',
            color: 'white',
            fontWeight: 'bold'
        }
    // days before today
    } else if (day < today.minus({day: 1})) {
        return {
            color: 'gray'
        }
    // days after today in a month
    } else if (day > today.plus({month: 1})) {
        return {
            color: 'gray'
        }
    // today
    } else if (today.hasSame(day, 'day')) {
        return {
            backgroundColor: 'gray',
            fontWeight: 'bold',
        }
    }
}