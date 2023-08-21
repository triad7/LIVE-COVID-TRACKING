import React,
{ useEffect, useState } 
from 'react'
import '../components/app.css';

const Covid = () => {
    const [data, setData] = useState([]);
  
    const getCovidData = async () => {

    try {
        const res = await fetch('https://data.covid19india.org/data.json')
        const actualData = await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
    } catch (error) {
        console.log(error);
        
    }
   
    }
  
  
  useEffect (() => {
    getCovidData();
  }, [])
  
     return (
        <section>
        <div className='main_page'>
    <h1>🔴 LIVE</h1>
    <h2> COVID TRACKER INDIA </h2>
        </div>
        
    <ul>
        <li className='card1'>
            <div className='class__main'>
                <div className='class__inner'>
                    <p className='card__name'><span> OUR </span> COUNTRY</p>
                    <p className='card__total card__small'>India</p>
                </div>
            </div>
        </li>
        <li className='card2'>
            <div className='class__main'>
                <div className='class__inner'>
                    <p className='card__name'><span> TOTAL </span> RECOVERED</p>
                    <p className='card__total card__small'>{data.recovered}</p>
                </div>
            </div>
        </li>
        <li className='card3'>
            <div className='class__main'>
                <div className='class__inner'>
                    <p className='card__name'><span>TOTAL</span> CONFIRMED</p>
                    <p className='card__total card__small'>{data.confirmed}</p>
                </div>
            </div>
        </li>
        <li className='card4'>
            <div className='class__main'>
                <div className='class__inner'>
                    <p className='card__name'><span>TOTAL</span> DEATHS</p>
                    <p className='card__total card__small'>{data.deaths}</p>
                </div>
            </div>
        </li>
        <li className='card5'>
            <div className='class__main'>
                <div className='class__inner'>
                    <p className='card__name'><span>TOTAL</span> ACTIVE</p>
                    <p className='card__total card__small'>{data.active}</p>
                </div>
            </div>
        </li>
        <li className='card6'>
            <div className='class__main'>
                <div className='class__inner'>
                    <p className='card__name'><span>LAST</span> UPDATED</p>
                    <p className='card__total card__small'>{data.lastupdatedtime}</p>
                </div>
            </div>
        </li>
    </ul>
</section>
      
 
  )

}

export default Covid;