var CommentBox = React.createClass({displayName: "CommentBox",
   loadCommentsFromServer: function() {
       $.ajax({
           url: this.props.url,
           dataType: 'json',
           success: function(data) {
               this.setState({data: data});
           }.bind(this),
           error: function(xhr, status, err) {
               console.error(this.props.url, status, err.toString());
           }.bind(this)
       });
   },
   getInitialState: function() {
       return {data: []};
   },
   componentDidMount: function() {
       this.loadCommentsFromServer();
       setInterval(this.loadCommentsFromServer, this.props.pollInterval);
   },
});