var CommentForm = React.createClass({displayName: "CommentForm",
    render: function() {
        return (
            React.createElement("form", {className: "commentForm"}, 
                React.createElement("input", {type: "text", placeholder: "Your name"})
            )
            );
    }
});
