import React, { Component } from 'react';
// import './style.scss';


export default class About extends Component {
  render() {
    return (
      <div className="">

        <ul className="navigation">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="wrapper">
          <header className="header">Header</header>
          <article className="main">
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
          </article>
          <aside className="aside aside-1">Aside 1</aside>
          <aside className="aside aside-2">Aside 2</aside>
          <footer className="footer">Footer</footer>
        </div>
        {/* <ul className="flex-container"> */}
        {/*   <li className="flex-item">1</li> */}
        {/*   <li className="flex-item">2</li> */}
        {/*   <li className="flex-item">3</li> */}
        {/*   <li className="flex-item">4</li> */}
        {/*   <li className="flex-item">5</li> */}
        {/*   <li className="flex-item">6</li> */}
        {/*   </ul> */}
          <div className="example example-default">
            <h2>FlexBox </h2>
            <div className="example-content">

              <div className="parent">
                <div className="item">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
                <div className="item">4</div>
                <div className="item">5</div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
