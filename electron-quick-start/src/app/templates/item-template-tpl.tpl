
<div class="view">   
    <% if(index % 2 ==0 ) {%> 
        <div class="row" style="background-color:white" >
     <%} else { %>    
        <div  class="row" style="background-color:lightyellow" >
        <% } %>
        <span class="col-xs-1"><%= index %></span>
        <span class="col-xs-9"><%= title %></span>
        <span class="col-xs-2"><a href="<%- title %>" onclick="return false" class="playbutton btn btn-primary btn-lg active">Play</a></span>  
    </div>    
</div>