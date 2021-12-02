import React,{useState} from 'react';
import List from './List';
import Alert from './Alert';

const App = () => {
  const [name,setName] = useState('');
  const [list,setList] = useState([]);
  const [isEditing,setIsEditing] = useState(false);
  const [editID,seteditID] = useState(null);
  const [alert,setAlert] = useState({
    show:false,msg:'',type:''
  });
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!name){
         showAlert(true,'danger','please enter value')
    }else if(name && isEditing){

    }else{
      showAlert(true,'success','item added to the list')
      const newItem = {id:new Date().getTime().toString(),
      title:name};
      setList([...list,newItem]);
      setName("")
    }
  }
  
  const showAlert=(show=false,type='',msg="")=>{
    setAlert({show,type,msg})
  }

  const clearList = ()=>{
    showAlert(true,'danger','empty list')
    setList([])
  }

  const removeItem=(id)=>{
    setAlert(true,'danger','item remove')
    setList(list.filter((item)=>item.id !== id))
  }
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert = {showAlert}/>}
        <h3>Grocery bud</h3>
        <div className='form-control'>
            <input type='text' className='grocery' placeholder='e.g.egg'
            value={name} onChange={(e)=>setName(e.target.value)}/>
            <button type='submit' className='submit-btn'>
              {isEditing ? 'edit' : 'submit'}
            </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List items={list}/>
        <button className='clear-btn' onClick={clearList}>clear item</button>
      </div>
    </section>
  )
}

export default App
