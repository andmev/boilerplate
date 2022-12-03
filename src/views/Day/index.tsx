import React from "react";

export default () => {
  const headerCards = [
    {
      title: "Crew",
    },
    {
      title: "Locations",
    },
    {
      title: "Inventory",
    },
  ];
  return (
    <div className="container-fluid">
      <div className="container-fluid">
        <div className="row">
          <h1>Day</h1>
          <h4 className="text-muted">July, 14th</h4>
        </div>
        <div className="row">
          {headerCards.map((card, index) => (
            <div key={index} className="col-md-4 col-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <span>{card.title}</span>
                  <button className="btn btn-link text-decoration-none p-0">
                    more
                  </button>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <h3 className="my-4">Actions</h3>
        </div>
        <div className="row gy-4">
          {Array.from({ length: 50 }).map((_, index) => (
            <div className="col-md-4 col-12">
              <div key={index} className="card">
                <div className="card-header d-flex justify-content-between">
                  <span>Title</span>
                  <button className="btn btn-link text-decoration-none p-0">
                    more
                  </button>
                </div>
                <img
                  src="https://dummyimage.com/200x140/000/000000.png&text=cover"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-footer text-muted">2 days ago</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
