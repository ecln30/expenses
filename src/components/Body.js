import React from 'react';

function Body({ data, amount}) {
    return ( 
        <div className="container">
            <h1 className="period">Spending - Last 7 days</h1>
             <div className="weeks">{ data.map((week, i) => {
                 return (
                     <div key={i} onClick={amount} className="week">
                          
                      <span className="amount">
                        {"$"}{week.amount}
                      </span>
                     <p  className={ week.day }>
                     </p> 
                     <span className="day">{ week.day }</span>
                
                     </div>
                 )
             })}</div>
          
             <hr />
             <div className="foo">
                 <div className="total">
                 <p>Total this month <span className="num">$478.33</span></p> 
                
                 </div>
                 <div className="last">
                 <p>+2.4%<span className="lastMonth"> from last month</span> </p>
                 </div>
             </div>
        </div>
        
     );
}

export default Body;
























































