import React from "react";

export default () => {
  return (
    <div className="container-fluid">
      <div className="container-fluid">
        <div className="row">
          <h1>Day</h1>
          <h4 className="text-muted">July, 14th</h4>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="card">
              <div className="card-header">Crew</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card">
              <div className="card-header">Locations</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card">
              <div className="card-header">Inventory</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <h3 className="my-4">Actions</h3>
        </div>
        <div className="row">
          <div className="col-md-4 col-12"></div>
        </div>
      </div>
    </div>
  );
};
