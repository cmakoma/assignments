axios.get("https://api.vschool.io/christian/todo/").then(function(response){
    renderTodos(response.data)
})

function renderTodos(todos){
    todos.forEach(function(todo){
        // console.log(todo)
        var parent = document.createElement("div");
        parent.className = "todo";
        parent.id = todo._id
        
    


        var text = document.createTextNode(todo.title);
        parent.appendChild(text);


        var image = document.createElement("img");
        image.className = "image"
        image.src = todo.imgUrl
        parent.appendChild(image);

        var input = document.createElement("input")
        input.className = "checkBox"
        input.type = "checkbox"
        parent.appendChild(input)
        input.value = todo.completed 

        if(todo.completed){
            parent.classList.toggle("strikened")
            input.checked = true;
        };
        

        var botton = document.createElement("button")
        botton.className = "botton"
        botton.innerHTML = "delete"
        parent.appendChild(botton)
        
        input.addEventListener("click", function (e){
           
            e.target.parentNode.classList.toggle("strikened");
            // todos.forEach(function (todo){
            //    todo.completed = todo.completed ? false : true;
            // })
            console.log( e.target.parentNode)
            if(e.target.parentNode.classList == "todo strikened"){
                var change = { "completed": true}
            }else{
                var change = { "completed": false} 
            }
            axios.put(`https://api.vschool.io/christian/todo/${e.target.parentElement.id}`, change).then(function(response){
                console.log(response.data)
            }).catch(function(error){
                console.log(error)
            })
        })
        
       
       
       
       
       
       
       
        botton.addEventListener("click",function(e){
            e.preventDefault()
           axios.delete(`https://api.vschool.io/christian/todo/${e.target.parentElement.id}`).then(function(){
               e.target.parentElement.remove()
           }).catch(function(error){
               console.log(error)
           })
        })
        
        
        document.getElementById("todo-list").appendChild(parent);
    })
}






document.newPost.addEventListener("submit",function(e){
    e.preventDefault();
    var newTodo = {
        "title": document.getElementById("title").value,
        "description": document.getElementById("description").value,
        "price": document.getElementById("price").value,
        "imgUrl": document.getElementById("link").value,
        "completed": document.getElementById("completed").checked

    }
    axios.post("https://api.vschool.io/christian/todo", newTodo).then(function(response){
        console.log(response.data)
        renderTodos([response.data])


        document.getElementById("title").value = ''
        document.getElementById("description").value = ''
        document.getElementById("price").value = ''
        document.getElementById("link").value = ''
        document.getElementById("completed").checked = false

    }).catch(function(error){
        console.log(error);
    });
})