import React from 'react';

import ListadoCitas from './componentes/ListadoCitas';

// Redux
import store from './store';
import { Provider } from 'react-redux';

function App1() {
  return (
    <Provider store={store}>
      <div className="container">
        
          <div className="row mt-3">
             
              <div className="col-md-6">
                  <ListadoCitas />
              </div>
          </div>
      </div>
    </Provider>
  );
}

export default App1;