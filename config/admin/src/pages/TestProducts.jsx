<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import "./TestProducts.css"
import Halwa from "../images/Halwa.png"
import pNutty from "../images/pNutty.png"
import Tiki from "../images/Tikki.png"
import Payasam from "../images/Payasam Pic 1.jpeg"
import Laddoo from "../images/Laddoo Pic 2.png"
import combo from "../images/combo 1.png"
import time from "../images/time.png"
import Serves from "../images/Serving.png"
// import   Modal   from '../components/combo1/combo1';
import Combo from '../components/Combo/Combo';
import Nutty from '../components/Nutty/Nutty';
import Tikk from '../components/Tikki/Tikkiii';
import Bpayasam from '../components/Payasam/Bpayasam';
import Halwaa from '../components/Halwa/Halwaa';
import Laddu from '../components/Laddu/Laddu';


const TestProducts = () => {
    // const [showModal, setShowModal] = useState(false);
    const [buttonPopup1, setbuttonPopup1] = useState(false);
    const [buttonPopup2, setbuttonPopup2] = useState(false);
    const [buttonPopup3, setbuttonPopup3] = useState(false);
    const [buttonPopup4, setbuttonPopup4] = useState(false);
    const [buttonPopup5, setbuttonPopup5] = useState(false);
    const [buttonPopup6, setbuttonPopup6] = useState(false);

    const [qty1, setQty1] = useState(0);
    const [qty2, setQty2] = useState(0);
    const [qty3, setQty3] = useState(0);
    const [qty4, setQty4] = useState(0);
    const [qty5, setQty5] = useState(0);
    const [qty6, setQty6] = useState(0);
    const [qty7, setQty7] = useState(0);
    const [qty8, setQty8] = useState(0);
    const dispatch = useDispatch()
    const { reduxSingleProduct, isLoading } = useSelector((state) => state.singleProduct)
    // const openModal = () => {
    //     setShowModal(true);
    //   };
    
    const amount1 = 389
    const amount2 = 199
    const amount3 = 159
    const amount4 = 299
    const amount5 = 259
    const amount6 = 456
    const a = amount1 * qty1
    const b = amount2 * qty2
    const c = amount3 * qty3
    const d = amount4 * qty4
    const e = amount5 * qty5
    const f = amount6 * qty6
    const total = a + b + c + d + e + f

=======
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TestProducts.css";
import Halwa from "../images/Halwa.png";
import pNutty from "../images/pNutty.png";
import Tikki from "../images/Tikki.png";
import Payasam from "../images/Payasam Pic 1.jpeg";
import Laddoo from "../images/Laddoo Pic 2.png";
import combo from "../images/combo 1.png";
import time from "../images/time.png";
import Serves from "../images/Serving.png";
import Model from "../components/combo1/combo1";
import Model1 from "../components/belgium_nutty/belgium_nutty";
import Model2 from "../components/combo1/combo1";

const TestProducts = () => {
  const [showModal, setShowModal] = useState(false);
  const [qty1, setQty1] = useState(0);
  const [qty2, setQty2] = useState(0);
  const [qty3, setQty3] = useState(0);
  const [qty4, setQty4] = useState(0);
  const [qty5, setQty5] = useState(0);
  const [qty6, setQty6] = useState(0);
  const [qty7, setQty7] = useState(0);
  const [qty8, setQty8] = useState(0);
  const dispatch = useDispatch();
  const { reduxSingleProduct, isLoading } = useSelector(
    (state) => state.singleProduct
  );
  const openModal = () => {
    setShowModal(true);
  };
>>>>>>> 0f0980bf694fc7cad997ad6e79386a8ede3c6971

  const amount1 = 389;
  const amount2 = 199;
  const amount3 = 159;
  const amount4 = 299;
  const amount5 = 259;
  const amount6 = 456;
  const a = amount1 * qty1;
  const b = amount2 * qty2;
  const c = amount3 * qty3;
  const d = amount4 * qty4;
  const e = amount5 * qty5;
  const f = amount6 * qty6;
  const total = a + b + c + d + e + f;

  return (
    <>
      <section style={{ marginTop: "20vw" }}>
        <div className="main">
          <div className="imageContainer">
            <div className="priceTag">₹389</div>
            <img src={Halwa} />
          </div>
          <div className="smallInfo">
            <h6 className="info-header">SugarCane Halwa</h6>
            <div className="info">
              <img className="img1" src={time} />
              <i>&nbsp;&nbsp;&nbsp;30 min</i>
            </div>
            <div className="info">
              <img className="img2" src={Serves} />
              <i>&nbsp;&nbsp;&nbsp;2 serves</i>
            </div>
          </div>
          <div className="quantity">
            <div>Quantity</div>
            <div className="quantity-button">
              <button
                className="btn"
                disabled={qty1 === 0 ? true : false}
                onClick={(e) => {
                  setQty1((pre) => (pre === 0 ? 1 : pre - 1));
                }}
              >
                -
              </button>
              <strong style={{}}>&nbsp;&nbsp; {qty1} &nbsp;&nbsp;</strong>
              <button
                className="btn"
                disabled={reduxSingleProduct.serves === qty1 ? true : false}
                onClick={(e) => {
                  setQty1((pre) => pre + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <p><i className="arrow down" onClick={() => setbuttonPopup1(true)}></i></p> 
        <Halwaa trigger={buttonPopup1} setTrigger={setbuttonPopup1}>
        </Halwaa>
=======
        <button class="arrow down" onClick={openModal}></button>
        {showModal ? <Model setShowModal={setShowModal} /> : null}
>>>>>>> 0f0980bf694fc7cad997ad6e79386a8ede3c6971
        <hr />
        <div className="main">
          <div className="imageContainer">
            <div className="priceTag">₹199</div>
            <img src={pNutty} />
          </div>
          <div className="smallInfo">
            <h6 className="info-header">Belgium Nutty</h6>
            <div className="info">
              <img className="img1" src={time} />
              <i>&nbsp;&nbsp;&nbsp;30 min</i>
            </div>
            <div className="info">
              <img className="img2" src={Serves} />
              <i>&nbsp;&nbsp;&nbsp;2 serves</i>
            </div>
          </div>
          <div className="quantity">
            <div>Quantity</div>
            <div className="quantity-button">
              <button
                className="btn"
                disabled={qty2 === 0 ? true : false}
                onClick={(e) => {
                  setQty2((pre) => (pre === 0 ? 1 : pre - 1));
                }}
              >
                -
              </button>
              <strong style={{}}>&nbsp;&nbsp; {qty2} &nbsp;&nbsp;</strong>
              <button
                className="btn"
                disabled={reduxSingleProduct.serves === qty2 ? true : false}
                onClick={(e) => {
                  setQty2((pre) => pre + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <p><i className="arrow down" onClick={() => setbuttonPopup2(true)}></i></p>
        <Nutty trigger={buttonPopup2} setTrigger={setbuttonPopup2}>
        </Nutty>
        <hr />
        <div className='main'  >
            <div className='imageContainer'>
                <div className='priceTag'> 
                    ₹159
                </div>
                <img src={Tiki} />
               
=======
        <button class="arrow down" onClick={openModal}></button>
        {showModal ? <Model1 setShowModal={setShowModal} /> : null}
        <hr />
        <div className="main">
          <div className="imageContainer">
            <div className="priceTag">₹159</div>
            <img src={Tikki} />
          </div>
          <div className="smallInfo">
            <h6 className="info-header">Caribean Tikki</h6>
            <div className="info">
              <img className="img1" src={time} />
              <i>&nbsp;&nbsp;&nbsp;30 min</i>
>>>>>>> 0f0980bf694fc7cad997ad6e79386a8ede3c6971
            </div>
            <div className="info">
              <img className="img2" src={Serves} />
              <i>&nbsp;&nbsp;&nbsp;2 serves</i>
            </div>
          </div>
          <div className="quantity">
            <div>Quantity</div>
            <div className="quantity-button">
              <button
                className="btn"
                disabled={qty3 === 0 ? true : false}
                onClick={(e) => {
                  setQty3((pre) => (pre === 0 ? 1 : pre - 1));
                }}
              >
                -
              </button>
              <strong style={{}}>&nbsp;&nbsp; {qty3} &nbsp;&nbsp;</strong>
              <button
                className="btn"
                disabled={reduxSingleProduct.serves === qty3 ? true : false}
                onClick={(e) => {
                  setQty3((pre) => pre + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <p><i className="arrow down" onClick={() => setbuttonPopup3(true)}></i></p>
        <Tikk trigger={buttonPopup3} setTrigger={setbuttonPopup3}>
        </Tikk>
=======
        <button class="arrow down" onClick={openModal}></button>
        {showModal ? <Model2 setShowModal={setShowModal} /> : null}
>>>>>>> 0f0980bf694fc7cad997ad6e79386a8ede3c6971
        <hr />
        <div className="main">
          <div className="imageContainer">
            <div className="priceTag">₹299</div>
            <img src={Payasam} />
          </div>
          <div className="smallInfo">
            <h6 className="info-header">Black Payasam</h6>
            <div className="info">
              <img className="img1" src={time} />
              <i>&nbsp;&nbsp;&nbsp;30 min</i>
            </div>
            <div className="info">
              <img className="img2" src={Serves} />
              <i>&nbsp;&nbsp;&nbsp;2 serves</i>
            </div>
          </div>
          <div className="quantity">
            <div>Quantity</div>
            <div className="quantity-button">
              <button
                className="btn"
                disabled={qty4 === 0 ? true : false}
                onClick={(e) => {
                  setQty4((pre) => (pre === 0 ? 1 : pre - 1));
                }}
              >
                -
              </button>
              <strong style={{}}>&nbsp;&nbsp; {qty4} &nbsp;&nbsp;</strong>
              <button
                className="btn"
                disabled={reduxSingleProduct.serves === qty4 ? true : false}
                onClick={(e) => {
                  setQty4((pre) => pre + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <p><i className="arrow down" onClick={() => setbuttonPopup4(true)}></i></p>
        <Bpayasam trigger={buttonPopup4} setTrigger={setbuttonPopup4}>
        </Bpayasam>
=======
        <p>
          <i class="arrow down"></i>
        </p>
>>>>>>> 0f0980bf694fc7cad997ad6e79386a8ede3c6971
        <hr />
        <div className="main">
          <div className="imageContainer">
            <div className="priceTag">₹259</div>
            <img src={Laddoo} />
          </div>
          <div className="smallInfo">
            <h6 className="info-header">Kajjoor Laddu</h6>
            <div className="info">
              <img className="img1" src={time} />
              <i>&nbsp;&nbsp;&nbsp;15 min</i>
            </div>
            <div className="info">
              <img className="img2" src={Serves} />
              <i>&nbsp;&nbsp;&nbsp;10-15 serves</i>
            </div>
          </div>
          <div className="quantity">
            <div>Quantity</div>
            <div className="quantity-button">
              <button
                className="btn"
                disabled={qty5 === 0 ? true : false}
                onClick={(e) => {
                  setQty5((pre) => (pre === 0 ? 1 : pre - 1));
                }}
              >
                -
              </button>
              <strong style={{}}>&nbsp;&nbsp; {qty5} &nbsp;&nbsp;</strong>
              <button
                className="btn"
                disabled={reduxSingleProduct.serves === qty5 ? true : false}
                onClick={(e) => {
                  setQty5((pre) => pre + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <p><i className="arrow down" onClick={() => setbuttonPopup5(true)}></i></p>
        <Laddu trigger={buttonPopup5} setTrigger={setbuttonPopup5}>
        </Laddu>
=======
        <p>
          <i class="arrow down"></i>
        </p>
>>>>>>> 0f0980bf694fc7cad997ad6e79386a8ede3c6971
        <hr />
        <div className="main">
          <div className="imageContainer">
            <div className="priceTag">₹456</div>
            <img src={combo} />
          </div>
          <div className="smallInfo">
            <h6 className="info-header">Combo Meal</h6>
            <div className="info">
              <img className="img1" src={time} />
              <i>&nbsp;&nbsp;&nbsp;30 min</i>
            </div>
            <div className="info">
              <img className="img2" src={Serves} />
              <i>&nbsp;&nbsp;&nbsp;2 serves</i>
            </div>
          </div>
          <div className="quantity">
            <div>Quantity</div>
            <div className="quantity-button">
              <button
                className="btn"
                disabled={qty6 === 0 ? true : false}
                onClick={(e) => {
                  setQty6((pre) => (pre === 0 ? 1 : pre - 1));
                }}
              >
                -
              </button>
              <strong style={{}}>&nbsp;&nbsp; {qty6} &nbsp;&nbsp;</strong>
              <button
                className="btn"
                disabled={reduxSingleProduct.serves === qty6 ? true : false}
                onClick={(e) => {
                  setQty6((pre) => pre + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <p><i className="arrow down" onClick={() => setbuttonPopup6(true)}></i></p>
        <Combo trigger={buttonPopup6} setTrigger={setbuttonPopup6}>
        </Combo>
=======
        <p>
          <i class="arrow down"></i>
        </p>
>>>>>>> 0f0980bf694fc7cad997ad6e79386a8ede3c6971
        <hr />
        <div className="main">
          <div className="imageContainer">
            <div className="priceTag">₹376</div>
            <img src={Halwa} />
          </div>
          <div className="smallInfo">
            <h6 className="info-header">SugarCane Halwa</h6>
            <div className="info">
              <img className="img1" src={time} />
              <i>&nbsp;&nbsp;&nbsp;30 min</i>
            </div>
            <div className="info">
              <img className="img2" src={Serves} />
              <i>&nbsp;&nbsp;&nbsp;2 serves</i>
            </div>
          </div>
          <div className="quantity">
            <div>Quantity</div>
            <div className="quantity-button">
              <button
                className="btn"
                disabled={qty7 === 0 ? true : false}
                onClick={(e) => {
                  setQty7((pre) => (pre === 0 ? 1 : pre - 1));
                }}
              >
                -
              </button>
              <strong style={{}}>&nbsp;&nbsp; {qty7} &nbsp;&nbsp;</strong>
              <button
                className="btn"
                disabled={reduxSingleProduct.serves === qty7 ? true : false}
                onClick={(e) => {
                  setQty7((pre) => pre + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <p><i className="arrow down"></i></p>
=======
        <p>
          <i class="arrow down"></i>
        </p>
>>>>>>> 0f0980bf694fc7cad997ad6e79386a8ede3c6971
        <hr />
        <div className="main">
          <div className="imageContainer">
            <div className="priceTag">₹376</div>
            <img src={Halwa} />
          </div>
          <div className="smallInfo">
            <h6 className="info-header">SugarCane Halwa</h6>
            <div className="info">
              <img className="img1" src={time} />
              <i>&nbsp;&nbsp;&nbsp;30 min</i>
            </div>
            <div className="info">
              <img className="img2" src={Serves} />
              <i>&nbsp;&nbsp;&nbsp;2 serves</i>
            </div>
          </div>
          <div className="quantity">
            <div>Quantity</div>
            <div className="quantity-button">
              <button
                className="btn"
                disabled={qty8 === 0 ? true : false}
                onClick={(e) => {
                  setQty8((pre) => (pre === 0 ? 1 : pre - 1));
                }}
              >
                -
              </button>
              <strong style={{}}>&nbsp;&nbsp; {qty8} &nbsp;&nbsp;</strong>
              <button
                className="btn"
                disabled={reduxSingleProduct.serves === qty8 ? true : false}
                onClick={(e) => {
                  setQty8((pre) => pre + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <p><i className="arrow down"></i></p>
        <hr />
        <Link to="/checkout"><button className="orderBtn" >Pay Rs. {total}</button></Link>
    </section>
=======
        <p>
          <i class="arrow down"></i>
        </p>
        <hr />
        <button className="orderBtn">Pay Rs. {total}</button>
      </section>
>>>>>>> 0f0980bf694fc7cad997ad6e79386a8ede3c6971
    </>
  );
};

export default TestProducts;
