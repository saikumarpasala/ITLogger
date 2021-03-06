import React, { useState } from 'react';
import TechSelectOption from '../techs/TechSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';


import M from 'materialize-css/dist/js/materialize.min.js';


const AddLogModal = ({ addLog}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

const onsubmit =() => {
    if(message === '' || tech === ''){
        M.toast({ html: 'Please enter a Message and tech' });
    } else {
    console.newlog = {
        message,
         attention,
          tech,
          date: new DataCue()
          }
          addLog(newlog);
          M.toast({ html: `Log added by ${tech}` });

          // Clear Fields
          setMessage('');
          setTech('');
                  setAttention(false);
                }
            };

     return (
         <div id='add-log-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
         <h4>Enter System Log</h4>
          <div className='row'>
             <div className='input-field'>
           <input type='text'
           name='message'
           value={message}
               onChange={e => setMessage(e.target.value)}
             />
             <label htmlFor='message' classNam='active'>
                 Log message
             </label>
           </div>
</div>

<div className='row'>
    <div className='input-field'>
        <select name='tech'
        value={tech} 
        className='browser-default'
        onChange={e => setTech(e.target.value)}
        >
         <option value='' disabled>
             select Technician
             </option>
             <TechSelectOption />
            <option value='jhon Deo'>john Deo</option>
            <option value='Sam Smith'>Sam Smith</option>
            <option value='Sara wilson'>Sara Wilson</option>
             </select>
</div>
</div>

<div className='row'>
     <div className='input-field'>
         <p>
             <label>
                 <input
                 type='checkbox'
                 className='field-in'
                 checked={attention}
                 value={attention}
                     onChange={e => setAttention(!attention)}
                    />
                    <span>Needs Attention</span>
                     </label>
             </p>
         </div>
    </div>
    </div>
              <div className='modal-footer'>
               <a
               href='#!'
               onClick={onsubmit}
               className='modal-close waves-effect waves-green btn-flat'
               >
                   Enter
               </a>
            
</div>
</div>
    );
};

AddLogModal.PropTypes = {
    addLog: PropTypes.func.isRequired
}

 const modalStyle = {
     width: '75%',
     height: '75%'
 };

 export default connect(null, { addLog })(AddLogModal);
 export default Home;