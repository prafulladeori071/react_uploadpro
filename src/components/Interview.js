import React from 'react'
import './inStyle.css'
import Interview2 from './Interview2'

import Interview4 from './Interview4'


function Interview() {
    return (
        <div >
        <div className="Image">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="https://www.youtube.com/watch?v=ntC3sO-VeJY&list=RD8wFdbwtr61I&index=13">Youtube</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://nakari.com/">Naukari.Com</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="http://nakari.com/">Action</a>
          <a className="dropdown-item" href="http://nakari.com/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="http://nakari.com/">Google Map</a>
      </li>
    </ul>
  
  </div>
</nav>



<div className="Para1">
            <h1 className="Imagine"> Imagine what we will accomplish together</h1>
            <h5 className="Power">Powerful analytics tools for your business. See the exact keywords for which your competitors rank in organic search and the amount of traffic driven by each of them.</h5>
          <div className="buttona">

               <button className="button1" onClick="https://demo.themesberg.com/rocket/pages/checkout.html"><i class="fa fa-hand-pointer-o"></i> Start a 30-days trial</button>
               
               <button className="button2" onClick="https://demo.themesberg.com/rocket/pages/checkout.html"> Quick Start</button>
                 
          </div>
        
      
        {/* <img className="center" src="img/data0.jpg" alt="Girl in a jacket" width="900px" height="500px"> */}


</div>
{/* 
<img src="/images/data0.JPG" alt="" height="70%" width="70%"/> */}

<img src="/images/data0.JPG" class="img-fluid" alt="Responsive image" width="800px" height="700px"></img>
</div>


        <div className="row row1">
            <div className="col-md-2">
            <img src="/images/data1.png" alt="" width="70px" height="70px" /> <br /><br />
            11 Create reports with an easy to use drag-and drop cards.
            Share or publish your reports with your teammates.
            </div>

            <div className="col-1"></div>


            <div className="col-md-2">
            <img src="/images/data1.png" alt="" width="70px" height="70px" /> <br /><br />
            Create reports with an easy to use drag-and drop cards.
            Share or publish your reports with your teammates.
            </div>

            <div className="col-1"></div>
            <div className="col-md-2">
            <img src="/images/data2.JPG" alt="" width="70px" height="70px" /> <br /><br />
            Create reports with an easy to use drag-and drop cards.
            Share or publish your reports with your teammates.
            </div>
            <div className="col-1"></div>
            <div className="col-md-2">
            <img src="/images/data4.png" alt="" width="70px" height="70px" /> <br /><br />
            Create reports with an easy to use drag-and drop cards.
            Share or publish your reports with your teammates.
            </div>
            <div className="col-md-2"></div>
        </div>
        {/* <img className="image2" src="/images/data0.JPG" alt="" /> <br /><br /> */}
        
        <img src="/images/data0.JPG" class="img-fluid" alt="Responsive image" width="800px" height="70px"></img>


        <div>


        </div>



        <Interview2/>

              
        <Interview4 />

</div>
    )
}

export default Interview
