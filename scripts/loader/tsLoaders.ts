import path from 'path';
import { RuleSetRule } from 'webpack';
import { ROOT_PATH } from '../utils/global';

export const tsLoaders = (): RuleSetRule[] => {
    return [{
        test: /\.(ts|tsx)$/,
        include: [path.join(ROOT_PATH, './src')],
        use: 'ts-loader',
    }]
}
