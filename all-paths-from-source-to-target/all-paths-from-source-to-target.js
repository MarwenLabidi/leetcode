var allPathsSourceTarget = function (graph) {
	let resArr = []
	let currPath = [0] 
	let connectors = graph[0]
	dfs(graph, currPath, connectors, resArr)
	return resArr
};

function dfs(graph, currPath, connectors, resArr) {
	if (currPath[currPath.length - 1] === graph.length - 1) {
		resArr.push(currPath)
		return
	}
	for (let i = 0; i < connectors.length; i++) {
		let newArr = new Array(...currPath, connectors[i])
		dfs(graph, newArr, graph[connectors[i]], resArr)
	}
}