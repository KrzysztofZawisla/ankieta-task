/* eslint-disable no-undef */
/* eslint @typescript-eslint/no-var-requires: "off" */
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.tsx', './src/**/*.css', './index.html'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontSize: {
				'xs': ['13px', { lineHeight: '1.125rem', letterSpacing: '-0.1px' }],
				'sm': ['14px', { lineHeight: '1.25rem', letterSpacing: '-0.1px' }],
				'base': ['15px', { lineHeight: '1.375rem', letterSpacing: '-0.2px' }],
				'lg': ['16px', { lineHeight: '1.5rem', letterSpacing: '-0.2px', fontWeight: '500' }],
				'xl': ['18px', { lineHeight: '1.75rem', letterSpacing: '-0.5px', fontWeight: '500' }],
				'2xl': ['20px', { lineHeight: '1.75rem', letterSpacing: '-0.6px', fontWeight: '500' }],
				'3xl': ['22px', { lineHeight: '1.875rem', letterSpacing: '-0.8px', fontWeight: '500' }],
				'4xl': ['24px', { lineHeight: '2rem', letterSpacing: '-1px', fontWeight: '500' }],
				'5xl': ['26px', { lineHeight: '2.125rem', letterSpacing: '-1px', fontWeight: '500' }],
				'6xl': ['28px', { lineHeight: '2.25rem', letterSpacing: '-1px', fontWeight: '500' }],
			},
			colors: {
				'border': 'hsl(var(--border))',
				'input': 'hsl(var(--input))',
				'ring': 'hsl(var(--ring))',
				'background': 'hsl(var(--background))',
				'foreground': 'hsl(var(--foreground))',
				'pink-intense': 'hsl(var(--pink-intense))',
				'pink': 'hsl(var(--pink))',
				'pink-disabled': 'hsl(var(--pink-disabled))',
				'pink-light': 'hsl(var(--pink-light))',
				'pink-very-light': 'hsl(var(--pink-very-light))',
				'pink-secondary': 'hsl(var(--pink-secondary))',
				'lime': 'hsl(var(--lime))',
				'grey-100': 'hsl(var(--grey-100))',
				'grey-200': 'hsl(var(--grey-200))',
				'grey-250': 'hsl(var(--grey-250))',
				'grey-300': 'hsl(var(--grey-300))',
				'grey-400': 'hsl(var(--grey-400))',
				'grey-400-70': 'hsl(var(--grey-400-70))',
				'grey-500': 'hsl(var(--grey-500))',
				'grey-600': 'hsl(var(--grey-600))',
				'grey-700': 'hsl(var(--grey-700))',
				'grey-800': 'hsl(var(--grey-800))',
				'grey-900': 'hsl(var(--grey-900))',
				'primary': {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				'secondary': {
					DEFAULT: 'hsl(var(--secondary))',
					hover: 'hsl(var(--secondary-hover))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				'destructive': {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				'muted': {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				'accent': {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				'popover': {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				'card': {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: `var(--radius)`,
				md: `calc(var(--radius) - 2px)`,
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans],
				mono: ['var(--font-mono)', ...fontFamily.mono],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
