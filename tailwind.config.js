import plugin from 'tailwindcss/plugin.js'

export default {
	theme: {
	    fontFamily: {
	      'ibm-plex-sans': ['"IBM Plex Sans"', 'Arial', 'sans-serif'],
	      'ibm-plex-sans-condensed': ['"IBM Plex Sans"', '"Arial Narrow"', 'Arial', 'sans-serif'],
	      'lora': ['Lora', '"Times New Roman"',  'serif'],
	    },
	},
	plugins: [
	    plugin(function({ addUtilities }) {
	      addUtilities({
	        '.font-ibm-plex-sans': {
	          'font-variation-settings': '"wdth" 100',
	        },
	        '.font-ibm-plex-sans-condensed': {
	          'font-variation-settings': '"wdth" 75',
	        },
	      })
	    }),
  	],
}