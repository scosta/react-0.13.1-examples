var CommentForm = React.createClass({displayName: "CommentForm",
    handleSubmit: function(e) {
        e.preventDefault();
        var author = React.findDOMNode(this.refs.author).value.trim();
        var text = React.findDOMNode(this.refs.text).value.trim();
        if (!text || !author) {
            return;
        }

        React.findDOMNode(this.refs.author).value = '';
        React.findDOMNode(this.refs.text).value = '';
        return;
    },
    render: function() {
        return (
            React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}
            )
            );
    }
});
