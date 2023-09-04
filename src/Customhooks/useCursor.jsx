import {useState} from 'react'

function useCursor() {
    const [cursor, setCursor] = useState({x: 0, y: 0})
    const [cursorDown, setCursorDown] = useState(false)

    const handleCursor = (e) => {
        setCursor({x: e.clientX, y: e.clientY})
    }

    const handleCursorDown = (e) => {
        setCursorDown(true)
    }

    const handleCursorUp = (e) => {
        setCursorDown(false)
    }

    return {
        cursor,
        cursorDown,
        handleCursor,
        handleCursorDown,
        handleCursorUp
    }

}

export default useCursor