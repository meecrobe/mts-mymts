module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			js: {
				src: 'dev/js/*.js',
				dest: 'release/js/main.js'
			}
		},

		jshint: {
			dev: {
				files: {
					src: ['dev/js/*.js', 'dev/js/*.js']
				}
			},
			release: {
				beforeconcat: ['release/js/*.js'],
				afterconcat: ['release/js/main.js']
			}
		},

		sass: {
			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'dev/css/main.css' : 'dev/sass/main.sass'
				}
			},
			release: {
				options: {
					style: 'expanded'
				},
				files: {
					'release/css/main.css' : 'dev/sass/main.sass'
				}
			}
		},

		autoprefixer: { // run `$ npm update caniuse-db` to update prefixes database
			options: {
				browsers: ['last 2 versions', 'ie 8', 'ie 9']
			},
			release: {
				files: {
					'release/css/main.css' : 'release/css/main.css'
				}
			},
			dev: {
				files: {
					'dev/css/main.css' : 'dev/css/main.css'
				}
			}
		},

		copy: {
			main: {
				src: ['dev/**/*.{png,jpg,gif,svg,html,js,json,php}'],
				dest: 'release/'
			}
		},

		uglify: {
			release: {
				files: {
					'release/js/main.min.js' : ['release/js/main.js']
				}
			}
		},

		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
		},
			release: {
				files: {
					'release/css/main.min.css' : ['release/css/main.css']
				}
			}
		},

		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			files: {
				expand: true,
				cwd: 'dev',
				src: '**/*.html',
				dest: 'release/'
			}
		},

		imagemin: {
			release: {
				options: {
					optimizationLevel: 7
				},
				files: [{
					expand: true,
					cwd: 'release/img',
					src: ['**/*.{png,jpg,gif,svg}'],
					dest: 'release/img/'
				}]
			}
		},

		criticalcss: {
	        custom: {
				options: {
					url: "http://localhost", 
					height: 1000, // add width as well
					outputfile: "release/css/critical.css",
					filename: "release/css/main.min.css", // Using path.resolve( path.join( ... ) ) is a good idea here 
					buffer: 800*1024
	            }
	        }
    	},

		watch: {
			scripts: {
				files: ['dev/js/**/*.js'],
				tasks: ['jshint:dev'],
				options: {
					spawn: false
				}
			},
			sass: {
				files: ['dev/sass/**/*.sass'],
				tasks: ['sass:dev', 'autoprefixer:dev'],
				options: {
					spawn: false
				}
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-criticalcss');

	grunt.registerTask('release', ['concat', 'jshint', 'sass:release', 'autoprefixer:release', 'copy', 'uglify', 'cssmin', 'htmlmin', 'imagemin']);
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('critical', ['cssmin'], ['criticalcss']);
}
