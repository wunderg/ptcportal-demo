import React from 'react';
import Toggle from 'material-ui/lib/toggle';

const styles = {
  toggle: {
    marginBottom: 16,
    marginTop: 10,
  },
  general: {
    maxWidth: '85%'
  }

};

const Toggles = ({ visible, showAll, showCompleted, showInProgress }) => (
  <div className="row around-xs center-md center-lg col-xs-offset-1" style={styles.general}>
    <div className="col-xs-10 col-lg-1 col-md-3">
        <Toggle
          label="All"
          onClick={showAll}
          toggled={visible.all}
          style={styles.toggle}
        />
    </div>
    <div className="col-xs-10 col-lg-2 col-md-3">
        <Toggle
          label="Completed"
          toggled={visible.comp}
          onClick={showCompleted}
          style={styles.toggle}
        />
    </div>
    <div className="col-xs-10 col-lg-2 col-md-3">
        <Toggle
          label="In-Progress"
          toggled={visible.prog}
          style={styles.toggle}
          onClick={showInProgress}
        />
    </div>
  </div>
  );


export default Toggles;
