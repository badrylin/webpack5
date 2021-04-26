import fs from 'fs';
import { SRC_PATH } from './global';

let ls = fs.readdirSync(SRC_PATH)

ls = ls.filter((app) => app !== 'common');

export const apps = ls
