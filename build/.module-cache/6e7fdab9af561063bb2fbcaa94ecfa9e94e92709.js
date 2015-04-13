var commentList = React.createClass({displayName: "commentList",
    render: function() {
        return (
            React.createElement("div", {className: "commentList"}, 
                React.createElement(Comment, {author: "Pete Hunt"}, "This is one comment ")
            )
            );
    }
});