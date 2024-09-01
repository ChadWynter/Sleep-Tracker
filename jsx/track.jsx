
class Track extends React.Component{
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
        console.log(document.getElementById("startDate").value);
        let updateSleep = window.sessionStorage;
        let updates = {}
        date = document.getElementById("startDate").value;
        let test = "19"
        hours = document.getElementById("hours").value;
        updates = {"dates":{ date : date }, "hours" : {hours : hours}};//format date update to be input as a cookie
        updateSleep.setItem("addSleep", JSON.stringify(updates));
        window.location.href= "/cwynter/user.html";
    }

    render(){
        return(
            <div class={this.state.dark}>
                <div class="container text-center my-4">
                    <div class="{{this.state.dark}} my-3">
                        <h2>Add/Update Sleep Data</h2>
                        <hr></hr>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-6 my-2">
                        <label for="startDate">Select Date</label>
                        <input id="startDate" class="form-control" type="date" />
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-2 my-2">
                        <input class="form-control" id="hours" placeholder="Hours Slept" type="number" ></input>
                        </div>
                    </div>
                    <div>
                        <button type="btn" onClick={this.handleUpdateClick} class="btn btn-primary">Enter</button>
                    </div>
                </div>
                <div class="container text-center">
                    <div class="{{this.state.dark}} my-3">
                        <h2>Delete Sleep Data</h2>
                        <hr></hr>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-6 my-2">
                        <label for="deleteDate">Select Date</label>
                        <input id="deleteDate" class="form-control" type="date" />
                        </div>
                    </div>
                    <div>
                        <button type="button" class="btn btn-danger">Remove</button>
                    </div>
                </div>

            </div>
                

        );
    }

}

const element = (
    <div>
        <Track/>
    </div>
);
ReactDOM.render(element, document.getElementById("track"));