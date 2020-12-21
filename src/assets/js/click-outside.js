// 指令是为了封装dom
let callbacks=[]
export default {
  bind:function(el,binding,vnode){
    callbacks.push({el,callback:binding.value})
  }
}

let onclickDocumnet=(e)=>{
  let {target}=e
  callbacks.forEach((item)=>{
    if(target === item.el || item.el.contains(target)){
      return
    }else{
      item.callback()
    }
  })
}
document.addEventListener('click',onclickDocumnet)
let removeListener=()=>{
  document.removeEventListener('click',onclickDocumnet)
}

export {removeListener}