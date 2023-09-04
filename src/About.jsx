import { useState } from 'react'

// const pic = ['./p.jpeg', './pi.jpeg', './pic.jpeg']
function About() {
    const [content, setContent] = useState([<Content1 />, <Content2 />, <Content3 />])
    const [index, setIndex] = useState(0)

    const handleLeft = () => {
        if (content[index] === content[0]) {
            setIndex(0)
        }
        else {
            setIndex(index - 1)
        }
    }
    const handleRight = () => {
        if (content[index] === content[2]) {
            setIndex(2)
        }
        else {
            setIndex(index + 1)
        }

    }

    return (
        <div className='about'>
            <div className='about-index' style={{ fontSize: '1.3rem' }}>{index + 1}/3</div>
            <div onClick={handleLeft} className='left'></div>
            <div onClick={handleRight} className='right'></div>
            <span className='arrowl'> &larr;</span>
            <div className='about-content'>{content[index]}</div>
            <span className='arrowr'>&rarr;</span>
            <div className='navigate'>click on this section over</div>

        </div>

    )
}

function Content1() {
    return (
        <div className=' content'>
            <p className=''>Welcome to our app, where we don't promise to find you "the one" or give you a lifetime of blissful love. But hey, who needs that when you can have a blast and meet awesome people in the meantime?
            </p>
        </div>
    )
}

function Content2() {
    return (
        <div className='content'>
            <p className=''>Think of our app as your wingman (or wingwoman, we don't discriminate). We'll help you break the ice, spark some conversation, and maybe even make a few unforgettable memories.</p>
        </div>
    )
}


function Content3() {
    return (
        <div className='content'>
            <p>Get ready to swipe, chat, and mingle your way through a sea of potential matches. You never know who you might find!.</p>
        </div>
    )
}



export default About