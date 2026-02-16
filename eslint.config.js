const pluginVue = require('eslint-plugin-vue');
const js = require('@eslint/js');

module.exports = [
    js.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    {
        files: ['src/**/*.js', 'src/**/*.vue'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                console: 'readonly',
                process: 'readonly'
            }
        },
        rules: {
            // Add any custom rules here
        }
    },
    {
        files: ['*.config.js', 'babel.config.js', 'vue.config.js', 'eslint.config.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
            globals: {
                module: 'readonly',
                require: 'readonly',
                process: 'readonly',
                __dirname: 'readonly'
            }
        }
    },
    {
        ignores: ['dist/**', 'node_modules/**']
    }
];
