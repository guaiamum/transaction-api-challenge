module.exports = {
    babel: {
        plugins: [
            "@babel/plugin-proposal-logical-assignment-operators"
        ],
    },
    jest: {
        configure: {
            setupFilesAfterEnv: ['<rootDir>/test/setup.ts']
        }
    }
}