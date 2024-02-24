import React from "react";
import "../styles/shoppingbasket.css";

const ShoppingBasket = () => {
  return (
    <div>
      <header className="basket-header">ShoppingBasket</header>

      <div className="shopping-basket-container">
        <div className="basket-info">
          <span className="ingredient-count">담은 재료 개</span>
          <button className="select-button">선택하기</button>
        </div>

        <div className="basket-items">
          <div className="basket-item">
            <img
              src="https://image.zdnet.co.kr/2019/01/15/sini_1zwN8DfI5uThk94.jpg"
              className="item-image"
            />
            <span className="item-name">Item 1</span>
            <div className="item-button">
            <button className="item-cancel">
              <img className="pin" src="/images/pin1.png" />
            </button>
            <button className="item-cancel">
              <img className="cancel" src="/images/cancel.png" />
            </button>
            </div>
          </div>
          <div className="basket-item">
            <img
              src="https://image.zdnet.co.kr/2019/01/15/sini_1zwN8DfI5uThk94.jpg"
              className="item-image"
            />
            <span className="item-name">Item 1</span>
            <button className="item-cancel">
              <img className="cancel" src="/images/cancel.png" />
            </button>
          </div>
          <div className="basket-item">
            <img
              src="https://image.zdnet.co.kr/2019/01/15/sini_1zwN8DfI5uThk94.jpg"
              className="item-image"
            />
            <span className="item-name">Item 1</span>
            <button className="item-cancel">
              <img className="cancel" src="/images/cancel.png" />
            </button>
          </div>
          <div className="basket-item">
            <img
              src="https://image.zdnet.co.kr/2019/01/15/sini_1zwN8DfI5uThk94.jpg"
              className="item-image"
            />
            <span className="item-name">Item 1</span>
            <button className="item-cancel">
              <img className="cancel" src="/images/cancel.png" />
            </button>
          </div>
          <div className="basket-item">
            <img
              src="https://image.zdnet.co.kr/2019/01/15/sini_1zwN8DfI5uThk94.jpg"
              className="item-image"
            />
            <span className="item-name">Item 1</span>
            <button className="item-cancel">
              <img className="cancel" src="/images/cancel.png" />
            </button>
          </div>
          <div className="basket-item">
            <img
              src="https://image.zdnet.co.kr/2019/01/15/sini_1zwN8DfI5uThk94.jpg"
              className="item-image"
            />
            <span className="item-name">Item 1</span>
            <button className="item-cancel">
              <img className="cancel" src="/images/cancel.png" />
            </button>
          </div>
          <div className="basket-item">
            <img
              src="https://image.zdnet.co.kr/2019/01/15/sini_1zwN8DfI5uThk94.jpg"
              className="item-image"
            />
            <span className="item-name">Item 1</span>
            <button className="item-cancel">
              <img className="cancel" src="/images/cancel.png" />
            </button>
          </div>
          <div className="basket-item">
            <img
              src="https://image.zdnet.co.kr/2019/01/15/sini_1zwN8DfI5uThk94.jpg"
              className="item-image"
            />
            <span className="item-name">Item 1</span>
            <button className="item-cancel">
              <img className="cancel" src="/images/cancel.png" />
            </button>
          </div>
          <div className="basket-item">
            <img
              src="https://image.zdnet.co.kr/2019/01/15/sini_1zwN8DfI5uThk94.jpg"
              className="item-image"
            />
            <span className="item-name">Item 1</span>
            <button className="item-cancel">
              <img className="cancel" src="/images/cancel.png" />
            </button>
          </div> <div className="basket-item">
            <img
              src="https://image.zdnet.co.kr/2019/01/15/sini_1zwN8DfI5uThk94.jpg"
              className="item-image"
            />
            <span className="item-name">Item 1</span>
            <button className="item-cancel">
              <img className="cancel" src="/images/cancel.png" />
            </button>
          </div>
        </div>
        
        <button className="add-button">재료추가<img className="add"src="/images/add.png"></img></button>
      </div>
    </div>
  );
};

export default ShoppingBasket;
