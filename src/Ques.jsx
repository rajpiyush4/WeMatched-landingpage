

function Ques({setShow}) {

    const handleNav = () => {
        setShow((show)=> !show)
    }


    return (
        <div className='ques'>
            <div className='ques-modal'>
                <div className='ques-modal-content'>
                    Are you tired of swiping left and right with no luck?
                </div>
                <div className='modal-buttons'>
                    <button type='button' onClick={handleNav}> yup :(</button>
                </div>

            </div>
        </div>
    )
}

export default Ques