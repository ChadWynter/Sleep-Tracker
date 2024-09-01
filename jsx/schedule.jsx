
class Schedule extends React.Component{
    constructor(props){
        super(props);
        this.state = {dark : "text-dark"}


    }
    
    componentDidMount(){
        if (window.sessionStorage.getItem("dmode")){
            let color = window.sessionStorage.getItem("dmode");
            if (color == "dark"){
                this.setState({dark : "text-white"});
                console.log("Text should be white");
            }
            else{
                this.setState({dark : "text-dark"});
            }


        }
        else{
            this.setState({dark : "text-dark"});
        }
    }

    handleUpdateClick(){
        console.log("button was clicked");
        let updateTasks = window.sessionStorage;
        let updates = {};
        date = document.getElementById("d-t").value;
        describe = document.getElementById("description").value;
        updates = {"dates":{ date : [date] }, "hours" : {describe : [describe]}};//format date update to be input as a cookie
        updateTasks.setItem("addTasks", JSON.stringify(updates));
        window.location.href= "/cwynter/user.html";
    }


    render(){
        return(
            <div class={this.state.dark}>
                  <h3>New Event</h3>
                  <hr></hr>
                    <div class="row justify-content-center mb-3">
                        <div class="col-5">
                        <input type="datetime-local"  id="d-t" class="form-control"></input>
                        </div>
                    </div>
                    <div class="row justify-content-center mb-3">
                        <div class="col-5">
                        <input type="text" id="description" class="form-control" placeholder="Description of task"></input>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-2">
                        <button type="btn" onClick={this.handleUpdateClick} class="btn btn-primary">Add Event</button>
                        </div>
                    </div>
            </div>
                    

        );
    }

}

const element = (
    <div>
        <Schedule/>
    </div>
);
ReactDOM.render(element, document.getElementById("addEvent"));