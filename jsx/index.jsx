
class Login extends React.Component{
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
    handleLoginClick(){
        window.sessionStorage.setItem("sleepUser", )
    }

    render(){
        return(
            <div class={this.state.dark}>
                <div class="container text-center">
                    <div class="{{this.state.dark}} my-3">
                        <h2>Log In</h2>
                        <hr></hr>
                    </div>
                    </div>
            </div>
                    

        );
    }

}

const element = (
    <div>
        <Login/>
    </div>
);
ReactDOM.render(element, document.getElementById("index"));