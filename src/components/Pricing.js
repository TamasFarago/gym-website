import React from 'react'
import "../styles/Pricing.css"
import {Link} from "react-router-dom"

export default function Pricing() {
    return (
        <section className="pricing">
            <div className="pricing-grid">
                <div className="price-column1 column">
                    <div className="price-top">All access<br/> performance (6)</div>
                    <div className="price-p">
                        <h4>$99</h4>
                        <p>month</p>
                    </div>
                    <div className="row" style={{height: "60px"}}>Customized Fitness Programs</div>
                    <div className="row" style={{height: "40px"}}>Unlimited Classes</div>
                    <div className="row" style={{height: "40px"}}>Annual Nutrition Session</div>
                    <div className="row" style={{height: "60px"}}>6 Semi-Private Training Sessions</div>
                    <div className="row" style={{height: "60px"}}>Quarterly Assessment and Goal Setting</div>
                    <div className="row" style={{height: "60px"}}></div>
                    <div className="row" style={{height: "60px"}}></div>
                    <div className="price-btn">
                        <Link to="/join">
                        <button>Sign Up</button>
                        </Link>
                    </div>
                        
                </div>
                <div className="price-column2 column">
                    <div className="price-top t2">All access<br/> performance (12)</div>
                    <div className="price-p p2">
                        <h4>$199</h4>
                        <p>month</p>
                    </div>
                    <div className="row" style={{height: "60px"}}>Customized Fitness Programs</div>
                    <div className="row" style={{height: "40px"}}>Unlimited Classes</div>
                    <div className="row" style={{height: "40px"}}>Annual Nutrition Session</div>
                    <div className="row" style={{height: "60px"}}>12 Semi-Private Training Sessions</div>
                    <div className="row" style={{height: "60px"}}>Quarterly Assessment and Goal Setting</div>
                    <div className="row" style={{height: "60px"}}></div>
                    <div className="row" style={{height: "60px"}}></div>
                    <div className="price-btn" id="btn2">
                    <Link to="/join">
                        <button>Sign Up</button>
                    </Link>
                    </div>
                </div>
                <div className="price-column3 column">
                    <div className="price-top t3">All access<br/> superior</div>
                    <div className="price-p p3">
                        <h4>$299</h4>
                        <p>month</p>
                    </div>
                    <div className="row" style={{height: "60px"}}>Customized Fitness Programs</div>
                    <div className="row" style={{height: "40px"}}>Unlimited Classes</div>
                    <div className="row" style={{height: "40px"}}>Annual Nutrition Session</div>
                    <div className="row" style={{height: "60px"}}>Unlimited Semi-Private Training Sessions</div>
                    <div className="row" style={{height: "60px"}}>Quarterly Assessment and Goal Setting</div>
                    <div className="row" style={{height: "60px"}}>Annual Exercise Session</div>
                    <div className="row" style={{height: "60px"}}></div>
                    <div className="price-btn" id="btn3">
                    <Link to="/join">
                        <button>Sign Up</button>
                    </Link>
                    </div>
                </div>
                <div className="price-column4 column">
                    <div className="price-top t4">All access<br/> Elite</div>
                    <div className="price-p p4">
                        <h4>$399</h4>
                        <p>month</p>
                    </div>
                    <div className="row" style={{height: "60px"}}>Customized Fitness Programs</div>
                    <div className="row" style={{height: "40px"}}>Unlimited Classes</div>
                    <div className="row" style={{height: "40px"}}>Annual Nutrition Session</div>
                    <div className="row" style={{height: "60px"}}>Unlimited Private Training Sessions</div>
                    <div className="row" style={{height: "60px"}}>Quarterly Assessment and Goal Setting</div>
                    <div className="row" style={{height: "60px"}}>Annual Exercise Session</div>
                    <div className="row" style={{height: "60px"}}>Monthly 3 Private Training</div>
                    <div className="price-btn" id="btn4">
                    <Link to="/join">
                        <button>Sign Up</button>
                    </Link>
                    </div>
                        
                </div>
                
            </div>
        </section>
    )
}
