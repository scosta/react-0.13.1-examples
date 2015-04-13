var CommentBox = React.createClass({displayName: "CommentBox",
    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.url,
        })
    }
});
