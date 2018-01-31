"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var quotes = [{
  "text": "Я такая счастливая!!!",
  "author": "Карина Малькевич",
  "color": "rgb(52, 34, 36)"
}, {
  "text": "БГУИР - Лучший!",
  "author": "Валерия Пархамович",
  "color": "rgb(243, 156, 18)"
}, {
  "text": "Во Вьетнаме всемирный потоп.",
  "author": "Хэнк Муди",
  "color": "rgb(44, 62, 80)"
}, {
  "text": "Кажется, настало время кодить и ставить напоминание на 3 утра: 'ПРОСЫПАЙСЯ, ПОРА'.",
  "author": "Хэнк Муди",
  "color": "rgb(189, 187, 153)"
}, {
  "text": "Когда-нибудь я напишу книгу 'Как кодить'. Ну а пока нет.",
  "author": "Хэнк Муди",
  "color": "rgb(71, 46, 50)"
}, {
  "text": "Пора отдыхать!",
  "author": "Карина Малькевич",
  "color": "rgb(231, 76, 60)"
}, {
  "text": "Когда-нибудь я уеду и уже никогда не буду он-лайн.",
  "author": "Наука и Техника",
  "color": "rgb(155, 89, 182)"
}, {
  "text": "МЫ - МОЛОДЦЫ!",
  "author": "Валерия Пархамович",
  "color": "rgb(22, 160, 133)"
}];

var getRandomIndex = function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      text: quotes[0].text,
      color: quotes[0].color,
      hancock: quotes[0].author,
      index: 0
    };
    return _this;
  }

  App.prototype.componentDidMount = function componentDidMount() {
    document.body.style.background = quotes[0].color;
  };

  App.prototype.render = function render() {
    var _this2 = this;

    var mainPartStyle = {
      'color': this.state.color
    };
    var buttonStyle = {
      'backgroundColor': this.state.color
    };

    var onNewQuoteClick = function onNewQuoteClick() {
      _this2.setState(function (prevState, props) {
        var randomIndex = getRandomIndex(quotes.length);
        document.body.style.background = quotes[randomIndex].color;
        return {
          hancock: quotes[randomIndex].author,
          color: quotes[randomIndex].color,
          text: quotes[randomIndex].text,
          index: randomIndex
        };
      });
    };

    var hashtags = 'цитатывеликих';
    var tweetText = this.state.text + " (c)" + this.state.hancock;
    var shareUrl = "https://twitter.com/intent/tweet?hashtags=" + hashtags + "&related=freecodecamp&text=" + tweetText;

    return React.createElement(
      "div",
      { style: mainPartStyle },
      React.createElement(
        "div",
        { className: "text-area" },
        React.createElement(
          "div",
          { className: "shevron" },
          "''"
        ),
        React.createElement(
          "div",
          { className: "text" },
          this.state.text
        )
      ),
      React.createElement(
        "div",
        { className: "john-hancock" },
        React.createElement(
          "i",
          null,
          "(c) ",
          this.state.hancock
        )
      ),
      React.createElement(
        "div",
        { className: "buttons" },
        React.createElement("a", { className: "button post", style: buttonStyle, href: shareUrl, target: "_blank" }),
        React.createElement(
          "button",
          {
            onClick: onNewQuoteClick,
            className: "button new-quote",
            style: buttonStyle },
          "New Quote"
        )
      )
    );
  };

  return App;
}(React.Component);

var Footer = function (_React$Component2) {
  _inherits(Footer, _React$Component2);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Footer.prototype.render = function render() {
    var footerText = 'Created by ';
    return React.createElement(
      "div",
      { className: "footer-content" },
      footerText,
      React.createElement(
        "a",
        { href: "https://vk.com/id_karina_malkevich", target: "_blank" },
        "Karina Malkevich"
      )
    );
  };

  return Footer;
}(React.Component);

React.render(React.createElement(App, null), document.getElementById('app'));
React.render(React.createElement(Footer, null), document.getElementById('footer'));