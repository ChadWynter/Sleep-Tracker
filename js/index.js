var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = { dark: "text-dark" };

        return _this;
    }

    _createClass(Login, [{
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
        key: "handleLoginClick",
        value: function handleLoginClick() {
            window.sessionStorage.setItem("sleepUser");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": this.state.dark },
                React.createElement(
                    "div",
                    { "class": "container text-center" },
                    React.createElement(
                        "div",
                        { "class": "{{this.state.dark}} my-3" },
                        React.createElement(
                            "h2",
                            null,
                            "Log In"
                        ),
                        React.createElement("hr", null)
                    )
                )
            );
        }
    }]);

    return Login;
}(React.Component);

var element = React.createElement(
    "div",
    null,
    React.createElement(Login, null)
);
ReactDOM.render(element, document.getElementById("index"));