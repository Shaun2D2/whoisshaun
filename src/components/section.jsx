import React from 'react';

const Section = ({
  title, subtitle, children, component,
}) => (
  <section id={title}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">{title}</h2>
          <h3 className="section-subheading text-muted">{subtitle}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          { component || children}
        </div>
      </div>
    </div>
  </section>
);

export default Section;
