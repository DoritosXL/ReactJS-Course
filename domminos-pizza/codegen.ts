import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:3000/graphql',
    documents: ['src/**/*.ts?(x)'],
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        './src/gql/': {
            preset: 'client',
            plugins: [],
            config: {
                useTypeImports: true,
            },
        },
    },
}
export default config
