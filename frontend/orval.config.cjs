module.exports = {
    'wptba': {
        input: {
            target: '../api.json',
            validation: false,
        },
        output: {
            mode: 'split',
            clean: true,
            target: './src/lib/plugin/client.ts',
            mock: true,
            override: {
                mock: {
                    delay: 0,
                },
            },
        },
    },
};