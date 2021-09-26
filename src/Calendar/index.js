import React, {useState, useEffect} from "react";
import { DateTime } from 'luxon';

import buildTableCalendar from "./buildTableCalendar.js";
import S from './styled.js';

export default function Calendar() {

    const today = DateTime.now();
    const [calendar, setCalendar] = useState([]);
    const [currentDay, setCurrentDay] = useState(today);
    
    
    useEffect(()=>{
        setCalendar(buildTableCalendar(currentDay));
    }, [currentDay])

    const generateCalendar = () => {

        const dayStyles = (day) => {
            if (currentDay.hasSame(day, 'day')) {
                return {
                    backgroundColor: 'red',
                    color: 'white',
                    fontWeight: 'bold'
                }
            } else if (day < today.minus({day: 1})) {
                return {
                    backgroundColor: 'gray'
                }
            } else if (today.hasSame(day, 'day')) {
                return {
                    backgroundColor: 'green',
                    fontWeight: 'bold',
                }
            }
        }

        return (
            <S.Calendar>
                <S.Header>
                    <div></div>
                    <div>{currentDay.toFormat('MMMM yyyy')}</div>
                    <div></div>
                </S.Header>
                <S.Body>
                    {calendar.map(week => {
                        return (
                            <S.Week>
                                {week.map((day, i) => {
                                    return (
                                        <S.Day key={i} onClick={()=>setCurrentDay(day)}>
                                            <div style={dayStyles(day)}>{day.toFormat('dd')}</div>
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
    
    return (
        <> 
            {generateCalendar()}
        </>
    )
}