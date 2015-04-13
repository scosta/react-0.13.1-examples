var CommentBox = React.createClass({displayName: "CommentBox",
    render: function() {
        return (
            React.createElement("div", {className: "CommentBox"}, 
                React.createElement("h1", null, "Comments"), 
                React.createElement(CommentList, null), 
                React.createElement(CommentForm, null)
            )
            );
    }
});
