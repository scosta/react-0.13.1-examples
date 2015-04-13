var CommentBox = React.createClass({displayName: "CommentBox",
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState
            }
        });
    }
});