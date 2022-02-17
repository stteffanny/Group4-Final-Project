#### Fix Issue #7
// @flx1derrick
<li class="list-group-item">
    <div class="card">
        <div class="card-header">
            <div class="btn text-muted float-left">
                {due}
            </div>
            <div class="btn float-right" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Status
            </div>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item active" href="#">To-Do</a>
                <a class="dropdown-item" href="#">In Progress</a>
                <a class="dropdown-item" href="#">Review</a>
                <a class="dropdown-item" href="#">Done</a>
            </div>
        </div>        
        <!--Begin Card Body-->
        <div class="card-body">
            <h4 class="card-title">{Task Name}</h4>
            <p class="card-text">{Task Description}</p>
            <a href="#" class="badge badge-warning">
                {Assignee}</a>
        </div>
    </div>
</li>
