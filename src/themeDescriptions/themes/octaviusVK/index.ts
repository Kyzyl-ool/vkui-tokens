import {toneOpacity} from '@/build/helpers/cssHelpers';
import {ThemeOctaviusDescription} from '@/interfaces/themes/octavius';
import {
	darkColors as vkDarkColors,
	lightColors as vkLightColors,
	lightTheme as vkLightTheme,
} from '@/themeDescriptions/base/vk';
import {octaviusTheme} from '@/themeDescriptions/themes/octavius';

const fontFamilyAccent = 'VKSansDisplay, Helvetica, Arial, sans-serif';
const fontFamilyBase = 'VKSansText, Helvetica, Arial, sans-serif';
const fontWeightAccent2 = 500;
const fontWeightAccent3 = 500;
const fontWeightBase1 = 400;

// TODO: Придумать более изящный способ наследования
const octaviusVKThemeBase: ThemeOctaviusDescription = {
	...octaviusTheme,
	themeName: 'octaviusVK',
	sizeBorderRadius: vkLightTheme.sizeBorderRadius,

	// Цвета
	colors: {
		...octaviusTheme.colors,
		...vkLightColors.colors,
		octaviusColorThreadFooterBackground: '#ebecef',
		colorBackgroundSecondary: {
			normal: 'rgba(0, 28, 61, 0.05)',
			hover: 'rgba(0, 28, 61, 0.09)',
			active: 'rgba(0, 28, 61, 0.13)',
		},

		colorBackgroundContent: {
			normal: '#ffffff',
			hover: '#E4E5E9',
			active: '#DADCE2',
		},

		colorThumbErrorBackground: `rgba(230, 70, 70, 0.12)`,
		colorBackgroundAccentAlternative:
			vkLightColors.colors.colorBackgroundAccent,

		octaviusColorBackground: '#EDEEF0',
		octaviusColorBackgroundAccentToned: toneOpacity(
			vkLightColors.colors.colorBackgroundAccent,
			0.12,
		),
		octaviusColorIconUnread: vkLightColors.colors.colorIconAccent,
		octaviusColorIconFavorite: vkLightColors.colors.colorAccentRed,
		octaviusColorIconOrder: '#ff51ab',
		octaviusColorIconFinance: '#22c983',
		octaviusColorIconRegistration: '#ffa000',
		octaviusColorIconTravel: '#bd19ff',
		octaviusColorIconEvent: '#07a3fc',
		octaviusColorIconFees: '#e70101',

		octaviusColorSidebarIconUnread: vkLightColors.colors.colorIconAccent,
		octaviusColorSidebarIconFavorite: vkLightColors.colors.colorAccentRed,
		octaviusColorSidebarIconOrder: '#ff51ab',
		octaviusColorSidebarIconFinance: '#22c983',
		octaviusColorSidebarIconRegistration: '#ffa000',
		octaviusColorSidebarIconTravel: '#bd19ff',
		octaviusColorSidebarIconEvent: '#07a3fc',
		octaviusColorSidebarIconFees: '#e70101',

		octaviusColorHeaderBackground: {
			normal: '#ffffff',
			hover: '#f5f6f8',
			active: '#eff1f3',
		},
		octaviusColorHeaderButtonText: '#000000',
		octaviusColorHeaderIcon: vkLightColors.colors.colorIconAccent,
		octaviusColorHeaderTextSecondary:
			vkLightColors.colors.colorTextSecondary,
		octaviusColorHeaderProgress: vkLightColors.colors.colorBackgroundAccent,
		octaviusColorHeaderFilterText: '#818C99',

		octaviusColorSidebarItemText: '#333333',
		octaviusColorSidebarItemIcon: '#3F8AE0',
		octaviusColorSidebarShortItemText: '#333333',
		octaviusColorSidebarShortItemIcon:
			vkLightColors.colors.colorIconPrimary,

		octaviusColorSidebarItemTextActive:
			vkLightColors.colors.colorTextPrimary,
		octaviusColorSidebarItemIconActive:
			vkLightColors.colors.colorIconPrimary,
		octaviusColorSidebarItemTextSecondary:
			vkLightColors.colors.colorTextSecondary,
		octaviusColorSidebarItemIconSecondary: 'rgba(63, 138, 224, 0.64)',

		octaviusColorSidebarShortItemTextActive:
			vkLightColors.colors.colorTextPrimary,
		octaviusColorSidebarShortItemIconActive:
			vkLightColors.colors.colorIconPrimary,
		octaviusColorSidebarShortItemTextSecondary:
			vkLightColors.colors.colorTextSecondary,
		octaviusColorSidebarShortItemIconSecondary:
			vkLightColors.colors.colorIconSecondary,

		octaviusColorHeaderSearchBackground: 'rgba(0, 16, 61, 0.07)',
		octaviusColorHeaderSearchBackgroundCollapsed: 'rgba(0, 16, 61, 0.07)',
		octaviusColorHeaderSearchChipBackground: {
			normal: '#FFFFFF',
			hover: 'rgba(255, 255, 255, 0.64)',
			active: 'rgba(255, 255, 255, 0.4)',
		},
		octaviusColorHeaderSearchIcon: '#b6b8be',
		octaviusColorHeaderSearchText: vkLightColors.colors.colorTextPrimary,
		octaviusColorHeaderSearchTextCollapsed:
			vkLightColors.colors.colorTextSecondary,

		octaviusColorSidebarItemBackground: {
			normal: 'transparent',
			hover: 'rgba(0, 16, 61, 0.04)',
			active: 'rgba(0, 16, 61, 0.08)',
		},
		octaviusColorSidebarItemIconPrimary:
			vkLightColors.colors.colorIconAccent,
		octaviusColorSidebarCounterBackground: '#AEB7C2',
		octaviusColorSidebarCounterText: '#FFFFFF',
		octaviusColorSidebarScrollbar: 'rgba(0, 16, 61, 0.08)',

		octaviusColorContentScrollbar: '#C4C8CC',

		octaviusColorDatasetBackground:
			octaviusTheme.colors.colorBackgroundContent,
		octaviusColorListLetterSeparator:
			vkLightColors.colors.colorSeparatorPrimary,
		octaviusColorListLetterBackground: {
			normal: '#ffffff',
			hover: '#E4E5E9',
			active: '#DADCE2',
		},
		octaviusColorEmptyStateText: octaviusTheme.colors.colorTextPrimary,
		octaviusColorEmptyStateTextLink: '#4986cc',
	},

	octaviusElevationCard: '0px 1px 0px 0px #DCE1E6, 0px 0px 0px 1px #E7E8EC',
	octaviusElevationHeader: '0px 1px 0px 0px #E7E8EC',
	octaviusColorLetterAttachListBackground:
		'linear-gradient(270deg,#fff 22.77%,rgba(255,255,255,0) 104.46%)',

	// Типографика
	// Размеры такие же, как в теме octavius, а вот fontFamily другой
	fontFamilyAccent,
	fontFamilyBase,
	fontTitle1: {
		regular: {
			...vkLightTheme.fontTitle1.regular,
			fontSize: 24,
			lineHeight: 28,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontTitle2: {
		regular: {
			...vkLightTheme.fontTitle2.regular,
			fontSize: 20,
			lineHeight: 26,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontTitle3: {
		regular: {
			...vkLightTheme.fontTitle3.regular,
			fontSize: 17,
			lineHeight: 24,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontHeadline: {
		regular: {
			...vkLightTheme.fontHeadline.regular,
			fontSize: 15,
			lineHeight: 20,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent2,
		},
	},
	// todo поменять местами fontSize, когда откажемся от auto
	// todo fontSize в мобильном виде должен быть 16
	fontText: {
		regular: {
			...vkLightTheme.fontText.regular,
			fontSize: 15,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontSubhead: {
		regular: {
			...vkLightTheme.fontSubhead.regular,
			fontSize: 14,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontFootnote: {
		regular: {
			...vkLightTheme.fontFootnote.regular,
			fontSize: 13,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontFootnoteCaps: {
		regular: {
			...vkLightTheme.fontFootnoteCaps.regular,
			fontSize: 13,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
		},
	},
	fontCaption1: {
		regular: {
			...vkLightTheme.fontCaption1.regular,
			fontSize: 12,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontCaption1Caps: {
		regular: {
			...vkLightTheme.fontCaption1Caps.regular,
			fontSize: 12,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
		},
	},
	fontCaption2: {
		regular: {
			...vkLightTheme.fontCaption2.regular,
			fontSize: 11,
			lineHeight: 14,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontCaption2Caps: {
		regular: {
			...vkLightTheme.fontCaption2Caps.regular,
			fontSize: 11,
			lineHeight: 14,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
		},
	},
	fontCaption3: {
		regular: {
			...vkLightTheme.fontCaption3.regular,
			fontSize: 9,
			lineHeight: 12,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontCaption3Caps: {
		regular: {
			...vkLightTheme.fontCaption3Caps.regular,
			fontSize: 9,
			lineHeight: 12,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
		},
	},

	// todo удалить и заменить на контекстные токены в проектах
	fontH0: {
		regular: {
			fontSize: 28,
			lineHeight: 32,
			letterSpacing: '-0.56px',
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
		compact: {
			fontSize: 44,
			lineHeight: 52,
		},
	},
	// todo удалить и заменить на контекстные токены в проектах
	fontH1: {
		regular: {
			fontSize: 24,
			lineHeight: 28,
			letterSpacing: '-0.48px',
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
		compact: {
			fontSize: 32,
			lineHeight: 36,
		},
	},
	// todo удалить и заменить на контекстные токены в проектах
	fontH2: {
		regular: {
			fontSize: 20,
			lineHeight: 26,
			letterSpacing: '-0.4px',
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
		compact: {
			fontSize: 28,
			lineHeight: 32,
		},
	},
};

export const octaviusVKTheme: ThemeOctaviusDescription = {
	...octaviusVKThemeBase,

	octaviusFontFamilyDefault: fontFamilyBase,
	octaviusFontFamilyMailSans: fontFamilyAccent,
	octaviusFontFamilyGlobal: fontFamilyBase,
	octaviusFontFamilyMac: fontFamilyBase,
	octaviusFontFamilyDisplay: fontFamilyAccent,
};

export const octaviusVKDarkTheme: ThemeOctaviusDescription = {
	...octaviusVKTheme,
	themeName: 'octaviusVKDark',
	colorsScheme: 'dark',
	colors: {
		...octaviusVKTheme.colors,
		...vkDarkColors.colors,
		colorThumbErrorBackground: vkDarkColors.colors.colorImagePlaceholder,
		colorBgThumbnail: 'rgba(255, 255, 255, 0.08)',

		colorTransparent: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.04)',
			active: 'rgba(255, 255, 255, 0.08)',
		},

		colorBackgroundContent: {
			normal: '#19191A',
			hover: '#2B2B2C',
			active: '#353535',
		},

		colorButtonContrast: {
			normal: 'rgba(255, 255, 255, 0.12)',
			hover: 'rgba(255, 255, 255, 0.2)',
			active: 'rgba(255, 255, 255, 0.24)',
		},

		octaviusColorThreadFooterBackground: '#2D2D2E',
		colorBackgroundSecondary: {
			normal: 'rgba(255, 255, 255, 0.08)',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.2)',
		},

		colorBackgroundAccentAlternative:
			vkDarkColors.colors.colorBackgroundAccent,

		octaviusColorBackground: '#000000',
		octaviusColorBackgroundAccentToned: toneOpacity(
			vkDarkColors.colors.colorBackgroundAccent,
			0.12,
		),

		octaviusColorIconUnread: vkDarkColors.colors.colorIconAccent,
		octaviusColorIconFavorite: vkDarkColors.colors.colorAccentRed,

		octaviusColorHeaderBackground: {
			normal: '#161616',
			hover: '#2B2B2C',
			active: '#353535',
		},

		octaviusColorPortalMenuBackground: 'rgb(31, 31, 31)',
		octaviusColorHeaderButtonText: vkDarkColors.colors.colorTextPrimary,
		octaviusColorHeaderIcon: vkDarkColors.colors.colorIconAccent,
		octaviusColorHeaderTextSecondary:
			vkDarkColors.colors.colorTextSecondary,
		octaviusColorHeaderProgress: vkDarkColors.colors.colorBackgroundAccent,

		octaviusColorHeaderSearchBackground: 'rgba(255, 255, 255, 0.07)',
		octaviusColorHeaderSearchBackgroundCollapsed:
			'rgba(255, 255, 255, 0.07)',
		octaviusColorHeaderSearchChipBackground: {
			normal: 'rgba(255, 255, 255, 0.08)',
			hover: 'rgba(255, 255, 255, 0.12)',
			active: 'rgba(255, 255, 255, 0.16)',
		},
		octaviusColorHeaderSearchChipBackgroundEditable: '#313131',
		octaviusColorHeaderSearchChipBorderEditable: 'rgba(255, 255, 255, .48)',
		octaviusColorHeaderSearchIcon: vkDarkColors.colors.colorIconSecondary,
		octaviusColorHeaderSearchText: vkDarkColors.colors.colorTextSecondary,
		octaviusColorHeaderSearchTextCollapsed:
			vkDarkColors.colors.colorTextSecondary,
		octaviusColorHeaderFilterText: 'rgba(255, 255, 255, 0.48)',

		octaviusColorSidebarItemBackground: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.2)',
		},

		octaviusColorSidebarItemButtonBackground: {
			normal: 'rgba(255, 255, 255, 0.08)',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.24)',
		},

		octaviusColorSidebarItemIconPrimary:
			vkDarkColors.colors.colorIconPrimary,
		octaviusColorSidebarCounterBackground: '#000000',
		octaviusColorSidebarCounterText: '#e1e3e6',
		octaviusColorSidebarScrollbar: 'rgba(255, 255, 255, 0.12)',

		octaviusColorContentScrollbar: 'rgba(255, 255, 255, 0.2)',

		octaviusColorDatasetBackground:
			vkDarkColors.colors.colorBackgroundContent,
		octaviusColorListLetterSeparator:
			vkDarkColors.colors.colorSeparatorPrimary,
		octaviusColorListLetterBackground: {
			normal: '#19191A',
			hover: '#2B2B2C',
			active: '#353535',
		},
		octaviusColorEmptyStateText: vkDarkColors.colors.colorTextPrimary,

		octaviusColorSidebarItemText: vkDarkColors.colors.colorIconPrimary,
		octaviusColorSidebarItemIcon: vkDarkColors.colors.colorTextPrimary,
		octaviusColorSidebarShortItemText: vkDarkColors.colors.colorIconPrimary,
		octaviusColorSidebarShortItemIcon: vkDarkColors.colors.colorTextPrimary,

		octaviusColorSidebarItemTextActive: '#ffffff',
		octaviusColorSidebarItemIconActive: '#ffffff',

		octaviusColorSidebarShortItemTextActive:
			vkDarkColors.colors.colorTextPrimary,
		octaviusColorSidebarShortItemIconActive:
			vkDarkColors.colors.colorIconPrimary,

		octaviusColorButtonText: '#E7E8EA',
		octaviusColorButtonIcon: '#E7E8EA',
		octaviusColorButtonBackground: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.04)',
			active: 'rgba(255, 255, 255, 0.08)',
		},

		octaviusColorHeaderButtonBackground: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.2)',
		},

		octaviusColorSidebarItemTextSecondary:
			vkDarkColors.colors.colorTextSecondary,
		octaviusColorSidebarItemIconSecondary:
			vkDarkColors.colors.colorIconSecondary,
		octaviusColorSidebarShortItemTextSecondary:
			vkDarkColors.colors.colorTextSecondary,
		octaviusColorSidebarShortItemIconSecondary:
			vkDarkColors.colors.colorIconSecondary,

		octaviusColorLayoutBorder: 'transparent',
		octaviusColorLayoutLetterBorder: 'rgba(0, 0, 0, 0.4)',

		octaviusColorLetterListTextUnread: '#ffffff',
		octaviusColorLetterPreviewBackgroundPrimary: '#141414',
		octaviusColorLetterPreviewBackgroundSecondary: '#0F0F0F',

		octaviusColorEmptyStateTextLink: '#E7E8EA',
		octaviusTextDecorationEmptyStateTextLink: {
			normal: 'underline',
			hover: 'none',
			active: 'none',
		},
	},

	octaviusElevationCard: 'none',
	octaviusElevationHeader: 'none',
	octaviusColorLetterAttachListBackground:
		'linear-gradient(90deg, rgba(31, 31, 31, 0) 0%, #1f1f1f 80%)',
};
