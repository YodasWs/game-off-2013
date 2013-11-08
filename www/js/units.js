var units = [
	{faction:'roman', uType:'soldier', col:8, row:14},
	{faction:'saxon', uType:'soldier', col:10, row:10},
	{faction:'britton', uType:'soldier', col:2, row:13},
	{faction:'britton', uType:'soldier', col:5, row:12}
];
var unitTypes = {
	soldier:{ health:2, moves:2 }
//	farmer:{},
//	worker:{}
};
// Add universal properties
$.each(unitTypes, function(type, stats) {
	$.extend(unitTypes[type], {
		action:'wait'
	});
});