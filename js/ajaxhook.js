
hookAjax({
    onreadystatechange:function(xhr){
        console.log("onreadystatechange called: %O",xhr)
        //return true

    },
    onload:function(xhr){
        console.log("onload called: %O",xhr)
        //xhr.responseText="hook"+xhr.responseText;
        //return true;
    },
    open:function(arg,xhr){
      console.log("open called: method:%s,url:%s,async:%s",arg[0],arg[1],arg[2],xhr)
      //arg[1]+="?hook_tag=1";
      //统一添加请求头
    },
    send:function(arg,xhr){
      console.log("send called: %O",arg[0])
      //xhr.setRequestHeader("_custom_header_","ajaxhook")
      if(arg[0] != null){
          var args = arg[0].split("&")
          console.log("args:%O, arg[0]:%O", args, arg[0])
          for(var i = 0; i < args.length; i++){
            var tmp = args[i].split("=")
            if(tmp[0] == "todo_content"){
                
            }
          }
      }
    },
    setRequestHeader:function(arg,xhr){
        console.log("setRequestHeader called!",arg)
    }
})

/*$.get().done(function(d){
    console.log(d.substr(0,100)+"...")
    //use original XMLHttpRequest
    //console.log("unhook")
    //unHookAjax()
    $.get().done(function(d){
        console.log(d.substr(0,10))
    })

})*/