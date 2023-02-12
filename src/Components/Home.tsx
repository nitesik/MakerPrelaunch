import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./Styles.css";
import logo from "./Images/logo.svg";
import intro_pic from "./Images/icon-scroll.svg";
import passion from "./Images/illustration-passions.svg";
import financial from "./Images/illustration-financial-freedom.svg";
import lifestyle from "./Images/illustration-lifestyle.svg";
import work_anywhere from "./Images/illustration-work-anywhere.svg";
import left from "./Images/icon-free.svg";
import right from "./Images/icon-paid.svg";
import check from "./Images/icon-check.svg";


function Home() {

  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  
  function submitHandler(event : SyntheticEvent) {
    event.preventDefault();
    
    let reg : RegExp = /.+@.+\.[A-Za-z]+$/;

    if (reg.test(email))
      setError(false);
      
    else
      setError(true);
      
  }
  
  return (
    <div className="container">
      <nav><img src={logo} alt="" /></nav>
      
      <div className="content">
        <div className="intro">
          <div className="intro-body">
            <div>
              <div className="title">Get paid for the work <span>you</span> love to do.</div>
              <div className="description">The 9-5 grind is so last century. We believe in living life on your own terms. Whether you're  looking to escape the rat race or set up a side hustle, we've got you covered.</div>
            </div>
            <img src={intro_pic} alt="" />
          </div>
        </div>
      </div>

      <div className="features">
        <div className="features-body">
          <div className="feature-card">
            <img src={passion} alt="" />
            <div>
              <div className="title">Indulge your passions</div>
              <div className="description">Your passions shouldn't be just for the weekend. Earn a living doing what you love.</div>
            </div>
            </div>
          <div className="feature-card alt">
            <img src={financial} alt="" />
            <div>
              <div className="title">Indulge your passions</div>
              <div className="description">Your passions shouldn't be just for the weekend. Earn a living doing what you love.</div>
            </div>
            </div>
          <div className="feature-card">
            <img src={lifestyle} alt="" />
            <div>
              <div className="title">Indulge your passions</div>
              <div className="description">Your passions shouldn't be just for the weekend. Earn a living doing what you love.</div>
            </div>
            </div>
          <div className="feature-card alt">
            <img src={work_anywhere} alt="" />
            <div>
              <div className="title">Indulge your passions</div>
              <div className="description">Your passions shouldn't be just for the weekend. Earn a living doing what you love.</div>
            </div>
            </div>
        </div>
      </div>

      <div className="plans">
        <div className="plans-body">
          <div className="title">Our pricing plans</div>
          <div className="description">
            We only make money when our creators make money. Our plans are always affordable, and it's completely free to get started.
          </div>
          <div className="plan-boxes">
            <div className="left-box">
              <img src={left} alt="" />
              <div className="title">Dip your toe</div>
              <div className="box-description">Just getting started? No problem at all! Our free plan will take you a long way.</div>
              <div className="header">Free</div>
              <div className="box-features">
                <div>
                  <img src={check} alt="" />
                  <div className="box-text">Unlimited Products</div>
                </div>
                <div>
                  <img src={check} alt="" />
                  <div className="box-text">Basically analytics</div>
                </div>
                <div>
                  <img src={check} alt="" />
                  <div className="box-text">Limited marketplace exposure</div>
                </div>
                <div>
                  <img src={check} alt="" />
                  <div className="box-text">10% fee per transaction</div>
                </div>
              </div>
            </div>
            <div className="right-box">
              <img src={right} alt="" />
              <div className="title">Dive right in</div>
                <div className="box-description">Ready for the big time? Our paid plan will help you take your business to the next level.</div>
                <div className="price">
                  <div className="header">$25.00</div>
                  <div className="box-description">/ month</div>
                </div>
                <div className="box-features">
                  <div>
                    <img src={check} alt="" />
                    <div className="box-text">Custom domain</div>
                  </div>
                  <div>
                    <img src={check} alt="" />
                    <div className="box-text">Advanced analytics and reports</div>
                  </div>
                  <div>
                    <img src={check} alt="" />
                    <div className="box-text">High marketplace visibility</div>
                  </div>
                  <div>
                    <img src={check} alt="" />
                    <div className="box-text">5% fee per transaction</div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="title">Get notified when we launch</div>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Email address" autoComplete="off" onChange={((e : any) => setEmail(e.target.value))} className={`${error && "error"}`} />
          <button type="submit">Get notified</button>
          {error && <div className="error-message">Oops! That doesn't look like an email address</div>}
        </form>
      </footer>
    </div>
  )
}

export default Home;