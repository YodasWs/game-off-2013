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
var actionSprites = {
	moveU: {src:'www/img/actions/moveU.png', key:Phaser.Keyboard.U},
	moveI: {src:'www/img/actions/moveI.png', key:Phaser.Keyboard.I},
	moveO: {src:'www/img/actions/moveO.png', key:Phaser.Keyboard.O},
	moveJ: {src:'www/img/actions/moveJ.png', key:Phaser.Keyboard.J},
	moveK: {src:'www/img/actions/moveK.png', key:Phaser.Keyboard.K},
	moveL: {src:'www/img/actions/moveL.png', key:Phaser.Keyboard.L}
};