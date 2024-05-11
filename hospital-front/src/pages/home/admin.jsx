import React from 'react'

const admin = () => {
  return (
    <div>
        <div>
        
        <div className="sidebar  ">
    <h2 className='bg-slate-950  text-white'>Side bar</h2>
        </div>

        <div className="right">
            <div className="doctor">
            <h2 className='bg-slate-600  text-white'> Doctor bar</h2>
            </div>
            <div className="users">
            <h2 className='bg-red-800  text-white'>Users bar</h2>
            </div>
            <div className="appointment">
            <h2 className='bg-yellow-400  text-white'>Appointment bar</h2>
            </div>
            <div>
                <div className="below">
                    <div className="bl">
                    <h2 className='bg-lime-700  text-white'>bl bar</h2>
                    </div>
                    <div className="br">
                    <h2 className='bg-blue-800 text-white'>br bar</h2>
                    </div>

                </div>
            </div>
        </div>


        
        </div>



        
    </div>
  )
}

export default admin