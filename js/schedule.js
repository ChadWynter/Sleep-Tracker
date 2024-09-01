var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Schedule = function (_React$Component) {
    _inherits(Schedule, _React$Component);

    function Schedule(props) {
        _classCallCheck(this, Schedule);

        var _this = _possibleConstructorReturn(this, (Schedule.__proto__ || Object.getPrototypeOf(Schedule)).call(this, props));

        _this.state = { dark: "text-dark" };

        return _this;
    }

    _createClass(Schedule, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (window.sessionStorage.getItem("dmode")) {
                var color = window.sessionStorage.getItem("dmode");
                if (color == "dark") {
                    this.setState({ dark: "text-white" });
                    console.log("Text should be white");
                } else {
                    this.setState({ dark: "text-dark" });
                }
            } else {
                this.setState({ dark: "text-dark" });
            }
        }
    }, {
        key: "handleUpdateClick",
        value: function handleUpdateClick() {
            console.log("button was clicked");
            var updateTasks = window.sessionStorage;
            var updates = {};
            date = document.getElementById("d-t").value;
            describe = document.getElementById("description").value;
            updates = { "dates": { date: [date] }, "hours": { describe: [describe] } }; //format date update to be input as a cookie
            updateTasks.setItem("addTasks", JSON.stringify(updates));
            window.location.href = "/cwynter/user.html";
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": this.state.dark },
                React.createElement(
                    "h3",
                    null,
                    "New Event"
                ),
                React.createElement("hr", null),
                React.createElement(
                    "div",
                    { "class": "row justify-content-center mb-3" },
                    React.createElement(
                        "div",
                        { "class": "col-5" },
                        React.createElement("input", { type: "datetime-local", id: "d-t", "class": "form-control" })
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "row justify-content-center mb-3" },
                    React.createElement(
                        "div",
                        { "class": "col-5" },
                        React.createElement("input", { type: "text", id: "description", "class": "form-control", placeholder: "Description of task" })
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "row justify-content-center" },
                    React.createElement(
                        "div",
                        { "class": "col-2" },
                        React.createElement(
                            "button",
                            { type: "btn", onClick: this.handleUpdateClick, "class": "btn btn-primary" },
                            "Add Event"
                        )
                    )
                )
            );
        }
    }]);

    return Schedule;
}(React.Component);

var element = React.createElement(
    "div",
    null,
    React.createElement(Schedule, null)
);
ReactDOM.render(element, document.getElementById("addEvent"));