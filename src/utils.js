var utils = function() {
	var _appendElement = function(parentNode, nodeName, data) {
		var node = parentNode.selectAll(nodeName).data(data);
	    var nodeEnter = node.enter().append(nodeName).merge(node);
	    node.exit().remove();
	    return nodeEnter;
	};

	return {
		appendElement : _appendElement
	};
}();