import React from 'react'
import Template from '../components/Template'
import LoginDialogue from '../components/LoginDialogue'
const Progress = () => {
    return (
        <Template>
            <div className='w-full'>
                {
                    true ? <LoginDialogue page_name={"Progress"} /> : <div>History</div>
                }
            </div>
        </Template>
    )
}

export default Progress