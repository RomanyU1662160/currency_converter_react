import React from "react";

export const Currency = props => {
  const { rate, amount, base } = props;
  return (
    <div className="card mb-2" key={rate.code}>
      <div className="card-header bg-secondary">
        <div className="row">
          <div className="col-md-4 text-warning ">
            {rate.code}- {rate.name}
          </div>
          <div className="col-md-8 ">
            <span className="float-right text-warning ">
              1 {base} = {rate.rate}
            </span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <span className="text-info">
              1 {base} = {rate.rate}
            </span>
          </div>
          <div className="col-md-6">
            {amount} {base.toUpperCase()} = {amount * rate.rate} {rate.code}
          </div>
        </div>
      </div>
    </div>
  );
};
