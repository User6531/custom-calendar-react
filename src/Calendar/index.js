import React, {useState, useEffect} from "react";

import buildCalendar from "./buildCalendar.js";
import dayStyles from "./dayStyles.js";
import generateId from "./generateId.js";
import S from './styled.js';

export default function CalendarTable({today}) {

    const [calendar, setCalendar] = useState([]);
    const [selectedDay, setSelectedDay] = useState(today);
    
    useEffect(()=>{
        setCalendar(buildCalendar(selectedDay));
    }, [selectedDay])

    const thisMonth = () => {
        return selectedDay.hasSame(today, 'month')
    }
    const nextMonth = () => {
        return selectedDay.hasSame(today.plus({ months: 1 }), 'month')
    }
    const showPreviousArrow = () => !thisMonth() ? '<' : null;
    const showNextArrow = () => !nextMonth() ? '>' : null;
    const accessToSelectDay = (day) => {
        if (day > today.minus({day: 1}) && day < today.plus({month: 1})) {
            return setSelectedDay(day);
        }
    }
    const accessToPreviousButton = (day) => {
        if (!thisMonth()) { setSelectedDay(selectedDay.minus({ months: 1 })) }
    }
    const accessToNextButton = (day) => {
        if (!nextMonth()) { setSelectedDay(selectedDay.plus({ months: 1 })) }
    }
    const dayNames = ['m', 't', 'w', 't', 'f', 's', 's'];

    return (
        <S.Calendar>
            <S.Header>
                <S.Previous onClick={() => accessToPreviousButton()}>{showPreviousArrow()}</S.Previous>
                <S.Current>{selectedDay.toFormat('MMMM yyyy')}</S.Current>
                <S.Next onClick={()=>accessToNextButton()}>{showNextArrow()}</S.Next>
            </S.Header>

            <S.Body>
            <S.DayNames>
                {dayNames.map(dayName => <S.DayName>{dayName}</S.DayName>)}
            </S.DayNames>
                
                {calendar.map(week => {
                    return (
                        <S.Week key={generateId()}>
                            {week.map(day => {
                                return (
                                    <S.Day key={generateId()} onClick={()=> accessToSelectDay(day)}>
                                        <div style={dayStyles(day, selectedDay, today)}>{day.toFormat('dd')}</div>
                                    </S.Day>
                                )
                            })}
                        </S.Week>
                    )
                })}
            </S.Body>
        </S.Calendar>
    )
}