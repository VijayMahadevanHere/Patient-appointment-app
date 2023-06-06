import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Tools from '../list/Tools';
import SimpleList from '../list/SimpleList';
import { Mycontext, MyNewContext } from "../pages/context";
import Justinfo from '../list/justinfo';

const HomePage2 = () => {
  const [data, setData] = useState([]);
  const [activeState, setActiveState] = useState('all');
  const [message, setMessage] = useState('');
  const [showLabel, setShowLabel] = useState(true);

  useEffect(() => {

    fetch('/data2.json')
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    if (message !== 'jsellew') {
      setMessage('jsellew');
    }
  }, [message]);
 const haifun=useCallback(()=>{
   console.log('hai')
      
 },[])
  const onAction = (evt) => {
    const value = evt.target.value;
    setActiveState(value);
  };

  const handleDelete = (item) => {
    const newList = data.filter((element) => element.id !== item.id);
    setData(newList);
  };

  const handleLableClick = (arg) => {
    setActiveState(arg);
  };

  const handleLabel = (arg) => {
    setShowLabel(arg.target.checked);
  };
  

  const newarr = data.filter((item) => {
    if (activeState === 'all') {
      return true;
    }
    if (activeState === 'active') {
      return item.isActive === true;
    }
    if (activeState === 'non-active') {
      return item.isActive === false;
    }
    return false;
  });

  
  return (
    <div>
      <div>
        <input
          onClick={handleLabel}
          defaultChecked={showLabel}
          type='checkbox'
        />
        Show label
      </div>
        <Justinfo label={haifun}/>
      <Mycontext.Provider value={showLabel}>
        <Tools labelValue={activeState} onAction={onAction}>
          <SimpleList
            onlabelClick={handleLableClick}
            data={newarr}
            onAction={handleDelete}
          />
        </Tools>
      </Mycontext.Provider>
    </div>
  );
};

export default HomePage2;
