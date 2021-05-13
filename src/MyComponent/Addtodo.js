import React,{ useState } from 'react'

export const Addtodo = ({addTodo}) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const submit = (e) =>{
    e.preventDefault();
    if (!title || !desc){
        alert('you did not fill the title or description.')
    }
    else{
      addTodo(title,desc);
      setTitle('');
      setDesc('');
    }
  }
    return (
        <div className='container'>
          <h3 className='text-center'>Add a Todo</h3>
            <form onSubmit={submit}>
            <div class="mb-3">
         <label for="exampleInputEmail1" class="form-label">Todo title</label>
    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
        </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Todo description</label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    )
}
