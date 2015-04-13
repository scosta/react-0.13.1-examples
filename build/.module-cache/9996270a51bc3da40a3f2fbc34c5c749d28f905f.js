var converter = new Showdown.converter();
var Comment = React.createClass({displayName: "Comment",
    render: function() {
        var rawMarkup = converter.makeHtml(this.props.children.toString());
    }
});
