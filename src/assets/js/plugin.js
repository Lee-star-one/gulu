import Toast from '../../toast/toast'
export default{
  install(Vue,options){
    Vue.prototype.$toast = function(message,toastoption){
      let Constructor =Vue.extend(Toast)
      let toast =new Constructor({
        propsData:toastoption
      })
      toast.$slots.default=[message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}