import React from "react";
import { Component } from "react";

import "./Card.css";
class _card extends Component {
  render() {
    return (
      <div>
        <p className="cardHeading">Property Listings</p>
        <div className="cardBody">
          {this.props.listings.map((property, key) => {
            if (property.priceForSale > 0) {
              return (
                <div id={key}>
                  <div className="container">
                    <div className="details">
                      <div className="content">
                        <div className="Title">{property.title}</div>
                        <div className="Address">{property.addrL1}</div>
                        <p></p>
                        <p></p>
                        <div className="Pincode">{property.pincode}</div>
                        <p></p>
                        <p></p>
                        <div className="Description">
                          {property.description}
                        </div>
                        <p></p>
                        <p></p>
                        <div className="Pincode">
                          {" "}
                          <b>Owned by</b> 
                          {
                            !(this.props.account == property.currOwner)
                            ? <p>{property.currOwner}</p>
                            :<b> You</b>
                          } 
                          
                        </div>
                        <div className="Price">
                          {window.web3.utils.fromWei(
                            property.priceForSale.toString(),
                            "Ether"
                          )}{" "}
                          Eth
                        </div>
                        {
                        !(this.props.account == property.currOwner)
                        ?<button
                          className="buyNow"
                          name={property.id}
                          value={property.priceForSale}
                          onClick={(event) => {
                            this.props.purchaceProperty(
                              event.target.name,
                              event.target.value
                            );
                          }}
                        >
                          Buy Property
                        </button>
                        : null
            }
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default _card;
