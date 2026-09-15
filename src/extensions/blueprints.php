<?php return [
	'blocks/pwheading' => pwBlueprint::main('pwheading', fn($cfg) => [
		'name'          => 'kirbyblock-heading.name',
		'icon'          => 'title',
		'contentFields' => pwBlueprint::stdContent($cfg, ['tagline', 'heading']),
	]),
];
