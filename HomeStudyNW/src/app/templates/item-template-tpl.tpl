
<div class="view">   
    <% if(index % 2 ==0 ) {%> 
        <div class="row" style="background-color:white" >
     <%} else { %>    
        <div  class="row" style="background-color:lightyellow" >
    <% } %>
        <span class="col-xs-1"><%= index %></span>
        <span class="col-xs-9"><%= title %></span>
        <span class="col-xs-2"><button value="<%= chapterId+"#"+index %>" class="playbutton btn btn-primary btn-lg active">Play</button></span>  
    </div>    
</div>