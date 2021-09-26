import styled from 'styled-components';

const S = {
    Calendar: styled.div`
        box-sizing: border-box;
        font-size: 1rem;
        max-width: 400px;
    `,
    Header: styled.div`
        background-color: Aqua;
        text-align: center;
        min-height: 2rem;
        line-height: 2rem;
        color: black;
        font-family: sans-serif;
        font-weight: 700;
        display: flex;
    `,
    DayNames: styled.div`
        display: flex;
        flex-wrap: wrap;
        max-width: 1000px;
        margin: 0 auto;
        align-items: center;
    `,
    Body: styled.div`
        border: 1px solid Aqua;

    `,
    Previous: styled.div`
        flex: 1;
        text-align: left;
        margin-left: 1rem;
    `,
    Next: styled.div`
        flex: 1;
        text-align: right;
        margin-right: 1rem;
    `,
    // Week: styled.div`
    //     background-color: white;
    //     width: calc(100% / 7);
    //     height: 44px;
    //     line-height: 44px;
    //     text-align: center;
    //     text-transform: uppercase;
    //     color: var(--black);
    //     font-weight: 400;
    //     display: flex;
    //     align-items: center;
    //     justify-content: space-between;
    //         div {
    //             width: 100%;
    //         }
    // `,
    Week: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,
    Day: styled.div`
        position: relative;
        width: calc(100% / 7);
        height: 40px;
        background-color: white;
        padding: 5px 0;
        margin:  0;
        box-sizing: border-box;
        z-index: 1;
        text-align: center;
        cursor: pointer;

        div {
            width: 54px;
            height: 44px;
            position: relative;
            color: var(--black);
            z-index: 100;
            line-height: 44px;
        }
    `,
};

export default S;