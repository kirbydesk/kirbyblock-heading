<?php return [ 'blocks/pwheading' => function () {

	/* -------------- Config --------------*/
	$config       = pwConfig::load('pwheading');
	$settings     = $config['content'];
	$tabSettings  = $config['tabs'];
	$defaults     = $config['defaults'];
	$fields       = $config['fields'];
	$fieldOptions = $config['field-options'];


	/* -------------- Tabs --------------*/
	$tabs = [];

	/* -------------- Content Tab --------------*/
	$contentFields = [
		'headlineContent' => ['extends' => 'pagewizard/headlines/content'],
	];

	/* -------------- Tagline --------------*/
	if (!empty($settings['tagline'])) {
		$contentFields['tagline'] = [
			'extends'      => 'pagewizard/fields/tagline',
			'align'        => $fields['align-tagline'],
			'alignOptions' => $fieldOptions['tagline']['align'] ?? null,
		];
	}
	/* -------------- Heading --------------*/
	if (!empty($settings['heading'])) {
		$contentFields['heading'] = [
			'extends'      => 'pagewizard/fields/heading',
			'align'        => $fields['align-heading'],
			'level'        => $fields['level-heading'] ?? null,
			'size'         => $fields['size-heading'] ?? null,
			'sizeOptions'  => $fieldOptions['heading']['sizes'] ?? null,
			'alignOptions' => $fieldOptions['heading']['align'] ?? null,
			'levelOptions' => $fieldOptions['heading']['level'] ?? null,
		];
	}

	$tabs['content'] = [
		'label'  => 'pw.tab.content',
		'fields' => $contentFields,
	];

	/* -------------- Layout Tab --------------*/
	pwConfig::addTab($tabs, 'layout', $tabSettings['layout'] ?? true, pwLayout::options('pwheading', $defaults, [], $config['layout'] ?? []));

	/* -------------- Style Tab --------------*/
	pwConfig::addTab($tabs, 'style', $tabSettings['style'] ?? true, pwStyle::options('pwheading', $defaults, [], $config['style'] ?? []));

	/* -------------- Grid Tab --------------*/
	pwConfig::addTab($tabs, 'grid', $tabSettings['grid'] ?? false, pwGrid::layout('pwheading', $defaults));

	/* -------------- Settings Tab --------------*/
	pwConfig::addTab($tabs, 'settings', $tabSettings['settings'] ?? true, pwSettings::options('pwheading', $defaults, [], $config['settings'] ?? []));

	/* -------------- Blueprint --------------*/
	return [
		'name'	=> 'kirbyblock-heading.name',
		'icon'  => 'title',
		'tabs'	=> $tabs
	];
}
];
