var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Track = function (_React$Component) {
    _inherits(Track, _React$Component);

    function Track(props) {
        _classCallCheck(this, Track);

        var _this = _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).call(this, props));

        _this.state = { dark: "text-dark" };

        return _this;
    }

    _createClass(Track, [{
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
            console.log(document.getElementById("startDate").value);
            var updateSleep = window.sessionStorage;
            var updates = {};
            date = document.getElementById("startDate").value;
            var test = "19";
            hours = document.getElementById("hours").value;
            updates = { "dates": { date: date }, "hours": { hours: hours } }; //format date update to be input as a cookie
            updateSleep.setItem("addSleep", JSON.stringify(updates));
            window.location.href = "/cwynter/user.html";
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": this.state.dark },
                React.createElement(
                    "div",
                    { "class": "container text-center my-4" },
                    React.createElement(
                        "div",
                        { "class": "{{this.state.dark}} my-3" },
                        React.createElement(
                            "h2",
                            null,
                            "Add/Update Sleep Data"
                        ),
                        React.createElement("hr", null)
                    ),
                    React.createElement(
                        "div",
                        { "class": "row justify-content-center" },
                        React.createElement(
                            "div",
                            { "class": "col-6 my-2" },
                            React.createElement(
                                "label",
                                { "for": "startDate" },
                                "Select Date"
                            ),
                            React.createElement("input", { id: "startDate", "class": "form-control", type: "date" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { "class": "row justify-content-center" },
                        React.createElement(
                            "div",
                            { "class": "col-2 my-2" },
                            React.createElement("input", { "class": "form-control", id: "hours", placeholder: "Hours Slept", type: "number" })
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "button",
                            { type: "btn", onClick: this.handleUpdateClick, "class": "btn btn-primary" },
                            "Enter"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "container text-center" },
                    React.createElement(
                        "div",
                        { "class": "{{this.state.dark}} my-3" },
                        React.createElement(
                            "h2",
                            null,
                            "Delete Sleep Data"
                        ),
                        React.createElement("hr", null)
                    ),
                    React.createElement(
                        "div",
                        { "class": "row justify-content-center" },
                        React.createElement(
                            "div",
                            { "class": "col-6 my-2" },
                            React.createElement(
                                "label",
                                { "for": "deleteDate" },
                                "Select Date"
                            ),
                            React.createElement("input", { id: "deleteDate", "class": "form-control", type: "date" })
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "button",
                            { type: "button", "class": "btn btn-danger" },
                            "Remove"
                        )
                    )
                )
            );
        }
    }]);

    return Track;
}(React.Component);

var element = React.createElement(
    "div",
    null,
    React.createElement(Track, null)
);
ReactDOM.render(element, document.getElementById("track"));