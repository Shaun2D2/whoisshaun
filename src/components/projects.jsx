import React, { useEffect, useState } from 'react';

import Modal from './modal';
import config from '../config/projects';

const ProjectModal = (props) => {

  useEffect(() => {

    document.getElementsByTagName('body')[0].classList.add("modal-open");

    
    return () => {
      document.getElementsByTagName('body')[0].classList.remove("modal-open");
    }
  })

  return (
    <div className="portfolio-modal modal fade show" tabIndex="-1" role="dialog" aria-modal="true" style={{ display: 'block', paddingLeft: 0}}>
    <div className="modal-dialog">
      <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal" onClick={props.onClose}>
            <i className="fas fa-times fa-4x" />
          </div>
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-8">
                      <div className="modal-body">
                          <h2 className="text-uppercase">{props.title}</h2>
                          <div>{props.tech.map(item => <span className="tag">{item}</span>)}</div>
                          <p className="item-intro text-muted">{props.short}</p>
                          <img className="img-fluid d-block mx-auto" src={`assets/${props.image}`} alt="..." />
                          <p>{props.description}</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
  )
};

const Projects = () => {
  const [modal, setModal] = useState(null);

  return (
    <>
      <div className="row" id="portfolio">
        {config.map((item, index) => (
          <div className="col-md-4 col-sm-6 portfolio-item" key={`project-${index}`} onClick={() => setModal(item)}>
            <div className="portfolio-link" aria-role="link">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fas fa-plus fa-3x" />
                </div>
              </div>
              <img className="img-fluid" src={`assets/${item.image}`} alt="" />
            </div>
            <div className="portfolio-caption">
              <h4>{item.title}</h4>
              <p className="text-muted">{item.short}</p>
            </div>
          </div>
        ))}
      </div>
      {modal && (<ProjectModal {...modal} onClose={() => setModal(null)} />)}
    </>
  )
}

export default Projects;
