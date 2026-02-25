<?php return [ 'blocks/pwheading' => function () {

	/* -------------- Config --------------*/
	$config      = pwConfig::load('pwheading');
	$settings    = $config['settings'];
	$tabSettings = $config['tabs'];
	$defaults    = $config['defaults'];
	$fields      = $config['fields'];

	/* -------------- Allowed Fields --------------*/
	$defaultTagline = !empty($settings['tagline']);
	$defaultHeading = !empty($settings['heading']);

	/* -------------- Tabs --------------*/
	$tabs = [];

	/* -------------- Content Tab --------------*/
	$contentFields = [
		'headlineContent' => ['extends' => 'pagewizard/headlines/content'],
	];

	/* -------------- Tagline --------------*/
	if ($defaultTagline) {
		$contentFields['tagline'] = [
			'extends' => 'pagewizard/fields/tagline',
			'align'   => $fields['align-tagline']
		];
	}
	/* -------------- Heading --------------*/
	if ($defaultHeading) {
		$contentFields['heading'] = [
			'extends' => 'pagewizard/fields/heading',
			'align'   => $fields['align-heading']
		];
	}

	$tabs['content'] = [
		'label'  => 'pw.tab.content',
		'fields' => $contentFields,
	];

	/* -------------- Layout Tab --------------*/
	$tabs['layout'] = pwLayout::options('pwheading', $defaults);

	/* -------------- Style Tab --------------*/
	$tabs['style'] = pwStyle::options('pwheading', $defaults);

	/* -------------- Common Tabs (grid, spacing, theme) --------------*/
	pwConfig::buildTabs('pwheading', $defaults, $tabSettings, $tabs);

	/* -------------- Settings Tab --------------*/
	$tabs['settings'] = pwSettings::options('pwheading', $defaults);

	/* -------------- Blueprint --------------*/
	return [
		'name'	=> 'kirbyblock-heading.name',
		'icon'  => 'title',
		'tabs'	=> $tabs
	];
}
];
