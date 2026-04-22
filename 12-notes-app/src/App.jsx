import React, { useState } from 'react'
import { CircleX } from 'lucide-react';
import { SquarePen } from 'lucide-react';

const App = () => {
  const [title, settitle] = useState('');
  const [detail, setdetail] = useState('');
  const [task, settask] = useState([]);
  
  const [editIdx, setEditIdx] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDetail, setEditDetail] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];

    copyTask.push({ title, detail });

    settask(copyTask);

    settitle('');
    setdetail('');

  }

  const deleteNote=(idx)=>{
        const copyTask=[...task];
        copyTask.splice(idx,1)
        settask(copyTask)
  }

  const startEdit = (idx) => {
  setEditIdx(idx);
  setEditTitle(task[idx].title);
  setEditDetail(task[idx].detail);
}
 
 const saveEdit=()=>{
  if(editTitle.trim() ==='')return;
  const copyTask=[...task];
  copyTask[editIdx]={title:editTitle, detail:editDetail};
  settask(copyTask);
  setEditIdx(null);
  setEditTitle('');
  setEditDetail('');
 }
  return (
    <div className=' h-screen lg:flex bg-violet-300 '>

      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='flex lg:w-1/2 w-full flex-col gap-4  p-10'>

        <h1 className='text-3xl font-bold text-violet-800'>Add Notes</h1>

        {/* HEADING */}
        <input type="text" placeholder='Enter Notes Heading'
          value={title}
          onChange={(e) => settitle(e.target.value)}
          className='outline-none px-5 py-2 m-5 w-full border-2 border-violet-800 rounded text-violet-900 text-xl' />

        {/* DETAIL NOTES ADD */}
        <textarea type="text" placeholder='Enter Task Details'
          value={detail}
          onChange={(e) => {
            setdetail(e.target.value)
          }}
          className='outline-none  px-5  py-2 h-32 w-full m-5 border-2 border-violet-800 rounded text-violet-900 text-xl' />
        <button className='bg-linear-to-r from-violet-400 via-purple-500 to-violet-600 active:scale-95
         text-white text-xl w-full m-5 px-5 py-2 rounded'>Add Notes</button>


      </form>

      <div className='lg:w-1/2 w-full lg:border-l-2 lg:border-white bg-violet-300  p-10'>
        <h1 className='text-4xl font-bold text-violet-800'>Recent Notes</h1>

        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full  overflow-auto'>

          {task.map(function (elem, idx) {
            return <div key={idx} className=" relative min-h-58 w-48 rounded-2xl p-4 text-black py-3 px-4 bg-white border-violet-600 border-2">
              
              <h2 className='absolute top-5 right-4 text-xs active:scale-95 '><CircleX onClick={()=>{
                deleteNote(idx);
              }} className=' border-4xl stroke-violet-700' /></h2>

              <h2 className='absolute top-12 right-4 text-xs active:scale-95'><SquarePen className=' border-4xl stroke-violet-700' onClick={()=>startEdit(idx)}/></h2>

              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.detail}</p>
            </div>
          })}

        </div>
      </div>
      {editIdx !== null &&(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-80 flex flex-col gap-4 border-2 border-violet-600">
            <h2 className="text-2xl font-bold text-violet-800">
              Edit Notes
            </h2>

            <input type="text" 
            value={editTitle}
            onChange={(e)=>{ 
              setEditTitle(e.target.value)}
          }
          placeholder='Edit Title'
          className="outline-none border-2 border-violet-400 rounded px-4 py-2 text-violet-900"
            />

          <textarea value={editDetail}
          onChange={(e)=>{
            setEditDetail(e.target.value)
          }}
          placeholder='Edit Your Details'
          className="outline-none border-2 border-violet-400 rounded px-4 py-2 h-28 text-violet-900 resize-none"
          />

          <div className='flex gap-3'>
            <button onClick={saveEdit}
            className="flex-1 bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-xl font-bold active:scale-95">
              Save</button>
          
          <button
          onClick={() => setEditIdx(null)}
          className="flex-1 border-2 border-violet-400 text-violet-700 py-2 rounded-xl font-bold active:scale-95"
        >
          Cancel
        </button>
              
          </div>
          </div>
        </div>
      
      )}
    </div>
  )
}

export default App
